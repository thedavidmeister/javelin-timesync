(ns javelin-timesync.elem-lib.mount
 (:require
  javelin-timesync.core
  elem-lib.hoplon
  [javelin.core :as j]))

(defn lib
 []
 (elem-lib.hoplon/elem
  "Offset cell"
  "Offset cell generator"
  #'javelin-timesync.core/offset-cell
  [["Ably offset cell"
    "https://rest.ably.io/time?v=1.0"
    :parse first
    :interval 2000
    :data-points 10]]))

(defn ^:export lib-to-element [el]
 (el (lib)))
