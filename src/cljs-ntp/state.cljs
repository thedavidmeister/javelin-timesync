(ns cljs-ntp.state
 (:require
  ntp.math
  connectivity.sente
  sente.wire
  time.core
  [javelin.core :as j]))

; Client's timestamp of request.
(defonce t0 (j/cell nil))
; Server's timestamp of request.
(defonce t1 (j/cell nil))
; Server's timestamp of response.
(defonce t2 (j/cell nil))
; Client's timestamp of response.
(defonce t3 (j/cell nil))

(defn set-times!
 [t0' t1' t2' t3']
 (j/dosync
  (reset! t0 t0')
  (reset! t1 t1')
  (reset! t2 t2')
  (reset! t3 t3')))

(def ready? (j/cell= (and t0 t1 t2 t3)))
(def round-trip (j/cell= (when ready? (ntp.math/round-trip t0 t1 t2 t3))))
(def offset (j/cell= (if ready? (ntp.math/offset t0 t1 t2 t3) 0)))

(defn sync-cell
 []
 (j/cell=
  (when connectivity.sente/connected?=
   (let [t0 (time.core/now-millis)]
    (sente.wire/send!
     {:event :ntp/timestamp
      :success (fn [r]
                (set-times! t0 (:t1 r) (:t2 r) (time.core/now-millis)))
      :spinny :background-task})))))

(defonce sync-cell= (sync-cell))
