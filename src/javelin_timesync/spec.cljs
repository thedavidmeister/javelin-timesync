(ns javelin-timesync.spec
 (:require
  [clojure.spec.alpha :as spec]))

(spec/def :timesync/stamp int?)
(spec/def :timesync/offset :timesync/stamp)
(spec/def :timesync/start :timesync/stamp)
(spec/def :timesync/server :timesync/stamp)
(spec/def :timesync/end :timesync/stamp)

(spec/def :timesync/data-point
 (spec/keys
  :req [:timesync/start
        :timesync/server
        :timesync/end]))
(spec/def :timesync/data-points
 (spec/coll-of
  :timesync/data-point
  :kind vector?))

(spec/def :timesync/latency number?)
(spec/def :timesync/clock-delta number?)

(spec/def :timesync/data-point--processed
 (spec/merge
  :timesync/data-point
  (spec/keys
   :req [:timesync/latency
         :timesync/clock-delta])))
(spec/def :timesync/data-points--processed
 (spec/coll-of
  :timesync/data-point--processed
  :kind vector?))
