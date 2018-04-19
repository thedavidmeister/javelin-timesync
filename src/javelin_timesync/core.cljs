(ns javelin-timesync.core
 (:require
  ajax.core
  taoensso.timbre
  javelin-timesync.data
  [javelin.core :as j]))

(defn -data-cell->offset-cell
 [data-cell]
 (let [latencies (j/formula-of [data] (map javelin-timesync.math/data-points->latencies data))
       median-latency (j/formula-of [latencies] (javelin-timesync.math/median latencies))
       std-dev (j/formula-of [latencies] (javelin-timesync.math/std-dev latencies))
       avg-latency (j/formula-of
                    [latencies median-latency std-dev]
                    (javelin-timesync.math/mean
                     (or
                      (seq
                       (remove
                        (fn [latency]
                         (<
                          (Math/ceil std-dev)
                          (Math/abs (- latency median-latency))))
                        latencies))
                      [median-latency])))]
  (j/formula-of [avg-latency] (javelin-timesync.math/latency->offset avg-latency))))

(defn -offset-cell
 [{:keys [parse interval data-points url fetch error-handler]}]
 {:pre [(or url fetch) (not (and url fetch))]}
 (let [data (j/cell [])

       parse (or parse javelin-timesync.core/parse)
       interval (or interval javelin-timesync.core/interval)
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
           :error-handler error-handler})))]
  (-data-cell->offset-cell data)))
(def offset-cell (memoize -offset-cell))
