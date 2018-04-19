(ns javelin-timesync.math-test
 (:require
  javelin-timesync.math
  [cljs.test :refer-macros [deftest is]]))

(deftest ??mean
 (doseq [[i o] [[[] 0]
                [[0] 0]
                [[0 0] 0]
                [[0 1] 0.5]
                [[1] 1]
                [[1 1] 1]
                [[1 2] 1.5]
                [[-1 1] 0]]]
  (is (= o (javelin-timesync.math/mean i)))))

(deftest ??round-trip
 (let [t0 (rand-int 10000)
       i0 (rand-int 10000)
       t1 (+ t0 i0)
       i1 (rand-int 10000)
       t2 (+ t1 i1)
       i2 (rand-int 10000)
       t3 (+ t2 i2)]
  (is
   (=
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
  (is (= (/ (- i0 i2) 2)
       (javelin-timesync.math/offset t0 t1 t2 t3)))))
