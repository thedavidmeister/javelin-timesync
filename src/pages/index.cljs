(ns ^{:hoplon/page "index.html"} pages.index
 (:require
  [hoplon.core :as h]
  [javelin.core :as j]
  syntax-highlighter.hoplon
  elem-lib.hoplon
  javelin-timesync.core))

(defn halving-cell
 [c]
 (j/cell= (* 0.5 c)))

(h/html
 (h/head
  (syntax-highlighter.hoplon/stylesheet))
 (h/body
  (elem-lib.hoplon/elem
   "Offset cell"
   "Offset cell generator"
   #'javelin-timesync.core/offset-cell
   [["Ably offset cell"
     "https://rest.ably.io/time?v=1.0"
     :parse first
     :interval 2000
     :data-points 10]])))
