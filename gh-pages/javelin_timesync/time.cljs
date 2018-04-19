(ns javelin-timesync.time)

(defn now-millis
 []
 (.getTime (js/Date.)))
