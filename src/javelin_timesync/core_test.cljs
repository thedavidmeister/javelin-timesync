(ns javelin-timesync.core-test
 (:require
  javelin-timesync.core
  [cljs.test :refer-macros [deftest is]]))

(deftest ??data-points->processed-points
 (doseq [[i o] [[[{:timesync/start 1
                   :timesync/server 2
                   :timesync/end 3}]
                 [{:timesync/start 1
                   :timesync/server 2
                   :timesync/end 3
                   :timesync/latency -1
                   :timesync/clock-delta 0}]]

                [[{:timesync/start 100
                   :timesync/server 1
                   :timesync/end 101}]
                 [{:timesync/start 100
                   :timesync/server 1
                   :timesync/end 101
                   :timesync/latency -0.5
                   :timesync/clock-delta -99.5}]]

                [[{:timesync/start 0
                   :timesync/server 0
                   :timesync/end 0}
                  {:timesync/start 5
                   :timesync/server 100
                   :timesync/end 5}]
                 [{:timesync/start 0
                   :timesync/server 0
                   :timesync/end 0
                   :timesync/latency 0
                   :timesync/clock-delta 0}
                  {:timesync/start 5
                   :timesync/server 100
                   :timesync/end 5
                   :timesync/latency 0
                   :timesync/clock-delta 95}]]]]
  (is (= o (javelin-timesync.core/data-points->processed-points i)))))

(deftest ??processed-points->median-data-point
 (let [data-point (fn [l] {:timesync/start (rand-int 100)
                           :timesync/server (rand-int 100)
                           :timesync/end (rand-int 100)
                           :timesync/clock-delta (rand-int 100)
                           :timesync/latency 1})
       [latency-1 latency-2 latency-3] (map data-point [1 2 3])]

  (doseq [[i o] [[[latency-1]
                  latency-1]
                 ; we pull out the lower latency value when ambiguous
                 [[latency-2 latency-1]
                  latency-1]
                 [[latency-1 latency-2 latency-3]
                  latency-2]]]

   (is (= o (javelin-timesync.core/processed-points->median-data-point i))))))
