(ns javelin-timesync.core
 (:require
  ajax.core
  ; https://github.com/r0man/cljs-http/issues/94
  [xmlhttprequest :refer [XMLHttpRequest]]
  taoensso.timbre
  javelin-timesync.data
  javelin-timesync.math
  javelin-timesync.time
  javelin-timesync.spec
  [clojure.spec.alpha :as spec]
  [javelin.core :as j]
  [hoplon.core :as h]))
(set! js/XMLHttpRequest XMLHttpRequest)

(defn data-points->processed-points
 [data-points]
 {:pre [(spec/valid? :timesync/data-points data-points)]
  :post [(spec/valid? :timesync/data-points--processed %)]}
 (mapv
  (fn [data-point]
   (merge
    data-point
    {:timesync/latency (javelin-timesync.math/data-point->latency data-point)
     :timesync/clock-delta (javelin-timesync.math/data-point->clock-delta data-point)}))
  data-points))

(defn processed-points->median-data-point
 [processed-points]
 {:pre [(spec/valid? :timesync/data-points--processed processed-points)]
  :post [(spec/valid? (spec/nilable :timesync/data-point--processed) %)]}
 (javelin-timesync.math/median-by :timesync/latency processed-points))

(defn processed-points->filtered-points
 [processed-points]
 {:pre [(spec/valid? :timesync/data-points--processed processed-points)]
  :post [(or (spec/valid? :timesync/data-points--processed %)
          (spec/explain :timesync/data-points--processed %))]}
 ; The results of the packet receipts are accumulated and sorted in
 ; lowest-latency to highest-latency order. The median latency is determined by
 ; picking the mid-point sample from this ordered list.
 ; All samples above approximately 1 standard-deviation from the median are
 ; discarded and the remaining samples are averaged using an arithmetic mean.
 (let [mid-point-sample (processed-points->median-data-point processed-points)
       latency-median (:timesync/latency mid-point-sample)
       latency-std-dev (javelin-timesync.math/std-dev (map :timesync/latency processed-points))
       remaining-samples (remove
                          (fn
                           [processed-point]
                           (<
                            (Math/ceil latency-std-dev)
                            (Math/abs (- (:timesync/latency processed-point) latency-median))))
                          processed-points)]
  (if (seq remaining-samples)
   (vec remaining-samples)
   (if mid-point-sample
    ; this should never happen, but if it does we guarantee at least the median
    ; sample is returned for further processing
    [mid-point-sample]
    []))))

(defn processed-points->mean-clock-delta
 [processed-points]
 {:pre [(spec/valid? :timesync/data-points--processed processed-points)]
  :post [(spec/valid? :timesync/clock-delta %)]}
 (javelin-timesync.math/mean (map :timesync/clock-delta processed-points)))

(defn data-points->offset
 [data-points]
 {:pre [(spec/valid? :timesync/data-points data-points)]
  :post [(spec/valid? :timesync/offset %)]}
 (-> data-points
  data-points->processed-points
  processed-points->filtered-points
  processed-points->mean-clock-delta
  javelin-timesync.math/latency->offset))

(defn -offset-cell
 [url & {:keys [parse
                error-handler
                interval
                data-points
                js?]}]
 {:pre [(string? url)]}
 (let [data (j/cell [])
       parse (or parse javelin-timesync.data/parse)
       parse (if js? (comp parse clj->js) parse)
       interval (or interval javelin-timesync.data/interval)
       data-points (or data-points javelin-timesync.data/data-points)

       handler
       (fn [r start end]
        (swap! data conj
         {:timesync/start start
          :timesync/server (parse r)
          :timesync/end end}))

       error-handler (or error-handler (fn [e] (taoensso.timbre/warn e)))
       fetch
       (fn [handler]
        (let [start (javelin-timesync.time/now-millis)]
         (ajax.core/GET
          url
          {:handler #(handler % start (javelin-timesync.time/now-millis))
           :error-handler error-handler})))

       return-cell (j/formula-of [data] (data-points->offset data))]

  ; loop until we've hit our data point quota
  (let [loop! (fn loop! []
               (fetch handler)
               (when (< (count @data) data-points)
                (h/with-timeout interval (loop!))))]
   (loop!))
  return-cell))
(def offset-cell (memoize -offset-cell))

(defn server-time
 [offset]
 (+ (javelin-timesync.time/now-millis) offset))

(defn offset-cb [])
 ; [f url args]
 ; (let [args (js->clj args :keywordize-keys true)
 ;       cell (offset-cell
 ;             url
 ;             :parse (:parse args)
 ;             :error-handler (:error-handler args)
 ;             :interval (:interval args)
 ;             :data-points (:data-points args)
 ;             :js? true)]
 ;  (add-watch cell f f)))
