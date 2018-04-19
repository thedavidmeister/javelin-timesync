(ns javelin-timesync.math-test
 (:require
  javelin-timesync.math
  [cljs.test :refer-macros [deftest is]]))

(deftest ??data-point->latency
 (doseq [[i o] [[{:timesync/start 1
                  :timesync/server 2
                  :timesync/end 3}
                 -1]

                [(let [x (rand-int 100)]
                  {:timesync/start x
                   :timesync/server x
                   :timesync/end x})
                 -0]

                [{:timesync/start 100
                  :timesync/server 1
                  :timesync/end 101}
                 -0.5]]]
  (is (== o (javelin-timesync.math/data-point->latency i)))))

(deftest ??data-point->clock-delta
 (doseq [[i o] [[{:timesync/start 1
                  :timesync/server 2
                  :timesync/end 3}
                 0]

                [{:timesync/start 100
                  :timesync/server 1
                  :timesync/end 110}
                 -104]

                [{:timesync/start 0
                  :timesync/server 0
                  :timesync/end 0}
                 0]

                [{:timesync/start 5
                  :timesync/server 100
                  :timesync/end 5}
                 95]]]
  (is (== o (javelin-timesync.math/data-point->clock-delta i)))))

(deftest ??latency->offset
 (doseq [[i o] [[0 0]
                [0.1 0]
                [0.5 1]
                [1 1]
                [1.5 2]]]
  (is (== o (javelin-timesync.math/latency->offset i)))))

(deftest ??mean
 (doseq [[i o] [[[] 0]
                [[0] 0]
                [[0 0] 0]
                [[0 1] 0.5]
                [[1] 1]
                [[1 1] 1]
                [[1 2] 1.5]
                [[-1 1] 0]]]
  (is (== o (javelin-timesync.math/mean i)))))

(deftest ??median-by
 (doseq [[i o] [[[]
                 nil]
                [[{:x 0}]
                 {:x 0}]
                [[{:x 0
                   :y 1}]
                 {:x 0 :y 1}]
                [[{:x 0}
                  {:x 1}]
                 {:x 1}]
                [[{:x -1}
                  {:x 1}]
                 {:x 1}]
                [[{:x -1}
                  {:x 0}
                  {:x 1}]
                 {:x 0}]
                [[{:x 0}
                  {:x 1 :z 3}
                  {:x 2 :z 1}]
                 {:x 1 :z 3}]
                [[{:x 1}
                  {:x 2}
                  {:x 3}
                  {:x 4}]
                 {:x 3}]]]
  (is
   (== o (javelin-timesync.math/median-by :x (shuffle i)))
   (str "i: " i " o: " o))))

(deftest ??std-dev
 (doseq [[i o] [[[] 0]
                [[0] 0]
                [[0 0] 0]
                [[1] 0]
                [[1 1] 0]
                ; cross referenced with wolfram
                [[100 500 -1000 4] (Math/sqrt 305203)]
                [[0.1 0.5 0 2] 0.8015609770940699]]]
  (is (== o (javelin-timesync.math/std-dev (shuffle i))))))
