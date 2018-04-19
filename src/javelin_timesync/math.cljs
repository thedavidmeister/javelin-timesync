(ns javelin-timesync.math
 (:require
  javelin-timesync.spec
  [clojure.spec.alpha :as spec]))

; https://en.wikipedia.org/wiki/Network_Time_Protocol#Clock_synchronization_algorithm

(defn data-point->latency
 [data-point]
 {:pre [(spec/valid? :timesync/data-point data-point)]}
 ; Upon receipt by client, client subtracts current time from sent time and
 ; divides by two to compute latency.
 (*
  0.5
  (-
   (:timesync/start data-point)
   (:timesync/end data-point))))

(defn latency->offset
 [x]
 {:post [(int? %)]}
 ; there's no point in an offset higher precision than the clock itself, in fact
 ; that is just asking for bugs, so we round to the nearest int.
 (Math/round x))

(defn mean
 [xs]
 {:pre [(sequential? xs)]}
 (if (seq xs)
  (/ (apply + xs) (count xs))
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

(defn std-dev
 [xs]
 {:pre [(sequential? xs)]}
 (if (seq xs)
  (let [x̄ (mean xs)
        diffs (map (fn [x] (- x x̄)) xs)
        squared (map (fn [x] (* x x)) diffs)
        variance (mean squared)]
   (Math/sqrt variance))
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
