(ns cljs-ntp.core
 (:require
  time.core
  #?(:cljs ntp.state)
  [clojure.test :refer [deftest is]]))

; This is only a poor-man's NTP, based on our own server time and some JS.
; http://stackoverflow.com/questions/1638337/the-best-way-to-synchronize-client-side-javascript-clock-with-server-date
#?(:cljs
   (defn server-now
    []
    (-> (time.core/now-millis)
     (+ @ntp.state/offset)
     ; Avoid fractions of ms produced by the ntp-offset calculation.
     Math/floor))

   :clj
   (def server-now time.core/now-millis))

; TESTS

(deftest ??server-now
 (is (pos-int? (server-now))))
