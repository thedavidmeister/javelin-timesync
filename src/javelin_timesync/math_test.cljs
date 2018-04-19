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
                ; [[1 2 3 4 5] 3]
                ; [[1 2 3 4 5 6] 4]
                ; [[2 4 6 8 10] 6]
                ; [[2 4 6 8 10 12] 8]]]
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

(deftest ??round-trip
 (let [t0 (rand-int 10000)
       i0 (rand-int 10000)
       t1 (+ t0 i0)
       i1 (rand-int 10000)
       t2 (+ t1 i1)
       i2 (rand-int 10000)
       t3 (+ t2 i2)]
  (is
   (==
    (+ i0 i2)
    (javelin-timesync.math/round-trip t0 t1 t2 t3)))))

(deftest ??offset
 (let [t0 (rand-int 10000)
       i0 (rand-int 10000)
       t1 (+ t0 i0)
       i1 (rand-int 10000)
       t2 (+ t1 i1)
       i2 (rand-int 10000)
       t3 (+ t2 i2)]
  (is (== (/ (- i0 i2) 2)
       (javelin-timesync.math/offset t0 t1 t2 t3)))))
