(ns javelin-timesync.core
 (:require
  ajax.core
  [javelin.core :as j]))

; This is only a poor-man's NTP, based on our own server time and some JS.
; http://stackoverflow.com/questions/1638337/the-best-way-to-synchronize-client-side-javascript-clock-with-server-date
; #?(:cljs
;    (defn server-now
;     []
;     (-> (time.core/now-millis)
;      (+ @ntp.state/offset)
;      ; Avoid fractions of ms produced by the ntp-offset calculation.
;      Math/floor)))

(defn -offset-cell
 ([url] (-offset-cell url {}))
 ([{:keys [parse delay data-points url fetch error-handler]}]
  {:pre [(or url fetch) (not (and url fetch))]}
  (let [data (j/cell [])

        parse (or parse javelin-timesync.core/parse)
        delay (or delay javelin-timesync.core/delay)
        data-points (or data-points javelin-timesync.core/data-points)

        handler (or handler (fn [r] (swap! data conj (javelin-timesync.core/parse r))))
        error-handler (or error-handler (fn [e] (taoensso.timbre/warn e)))
        fetch
        (if fetch
         (fn []
          (fetch handler))
         (fn []
          (ajax.core/GET
           url
           {:handler handler
            :error-handler error-handler})))])))
(def offset-cell (memoize -offset-cell))
