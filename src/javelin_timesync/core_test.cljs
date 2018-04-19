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
