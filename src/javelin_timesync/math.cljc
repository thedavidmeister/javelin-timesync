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

; The results of the packet receipts are accumulated and sorted in
; lowest-latency to highest-latency order. The median latency is determined by
; picking the mid-point sample from this ordered list.
(defn median
 [xs]
 {:pre [(sequential? xs)]}
 (if (seq xs)
  (let [pos (dec (Math/round (* 0.5 (count xs))))
        sorted (sort xs)]
   (if (odd? (count xs))
    (nth sorted pos)
    (mean (map #(nth sorted %) [pos (inc pos)]))))
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
