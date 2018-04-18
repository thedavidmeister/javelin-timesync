(ns javelin-timesync.math
 (:require
  [clojure.test :refer [deftest is]]))

; https://en.wikipedia.org/wiki/Network_Time_Protocol#Clock_synchronization_algorithm

(defn round-trip
 [t0 t1 t2 t3]
 (-
  (- t3 t0)
  (- t2 t1)))

(defn offset
 [t0 t1 t2 t3]
 (/
  (+
   (- t1 t0)
   (- t2 t3))
  2))

; TESTS

(deftest ??round-trip
 (let [t0 (rand-int 10000)
       i0 (rand-int 10000)
       t1 (+ t0 i0)
       i1 (rand-int 10000)
       t2 (+ t1 i1)
       i2 (rand-int 10000)
       t3 (+ t2 i2)]
  (is (= (+ i0 i2)
       (round-trip t0 t1 t2 t3)))))

(deftest ??offset
 (let [t0 (rand-int 10000)
       i0 (rand-int 10000)
       t1 (+ t0 i0)
       i1 (rand-int 10000)
       t2 (+ t1 i1)
       i2 (rand-int 10000)
       t3 (+ t2 i2)]
  (is (= (/ (- i0 i2) 2)
       (offset t0 t1 t2 t3)))))
