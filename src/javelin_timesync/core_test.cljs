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

(defn latency-point
 [l]
 {:timesync/start (rand-int 100)
  :timesync/server (rand-int 100)
  :timesync/end (rand-int 100)
  :timesync/clock-delta (rand-int 100)
  :timesync/latency l})

(deftest ??processed-points->median-data-point
 (let [[latency-1 latency-2 latency-3] (map latency-point [1 2 3])]
  (doseq [[i o] [[[latency-1]
                  latency-1]
                 [[latency-2 latency-1]
                  latency-2]
                 [[latency-1 latency-2 latency-3]
                  latency-2]]]

   (is (= o (javelin-timesync.core/processed-points->median-data-point i))))))

(deftest ??processed-points->filtered-points
 (let [[l1 l2 l5] (map latency-point [1 2 5])]
  (doseq [[i o] [[[l1]
                  [l1]]

                 [[l1 l2]
                  [l1 l2]]

                 [[l1 l2 l5]
                  [l1 l2]]

                 [[l5]
                  [l5]]

                 [[l5 l2]
                  [l5]]]]
   (is (= o (javelin-timesync.core/processed-points->filtered-points i))))))

(deftest ??processed-points->mean-clock-delta
 (let [clock-point (fn [c]
                    {:timesync/start (rand-int 100)
                     :timesync/server (rand-int 100)
                     :timesync/end (rand-int 100)
                     :timesync/latency (rand-int 100)
                     :timesync/clock-delta c})
       [c1 c2 c3] (map clock-point [1 2 3])]
  (doseq [[i o] [[[] 0]
                 [[c1] 1]
                 [[c1 c1] 1]
                 [[c1 c2] 1.5]
                 [[c1 c2 c3] 2]]]
   (is (= o (javelin-timesync.core/processed-points->mean-clock-delta i))))))
