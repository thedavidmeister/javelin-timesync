(ns javelin-timesync.math
 (:require
  [clojure.test :refer [deftest is]]))

; https://en.wikipedia.org/wiki/Network_Time_Protocol#Clock_synchronization_algorithm

(defn mean
 [xs]
 {:pre [(sequential? xs)]}
 (if (seq xs)
  (/ (reduce + xs) (count xs))
  ; avoid divide by zero
  0))

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
