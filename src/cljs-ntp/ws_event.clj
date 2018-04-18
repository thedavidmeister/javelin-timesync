(ns cljs-ntp.ws-event
 (:require
  [sente.wire :refer [-event-msg-handler]]
  ntp.core
  [clj-time.coerce]))

(defmethod -event-msg-handler :ntp/timestamp
  [{:as ev-msg :keys [event id ?data ring-req send-fn stamp]}]
  {:t1 (clj-time.coerce/to-long stamp)
   :t2 (ntp.core/server-now)})
