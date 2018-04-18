(ns javelin-timesync.core-test
 (:require
  javelin-timesync.core
  [cljs.test :refer-macros [deftest is]]))

; TESTS

(deftest ??server-now
 (is (pos-int? (javelin-timesync.core/server-now))))
