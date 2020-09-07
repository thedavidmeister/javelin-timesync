(ns ^:dev/once javelin-timesync.index.mount
 (:require
  [hoplon.core :as h]
  [javelin.core :as j]
  [hoplon.jquery]
  javelin-timesync.elem-lib.mount
  syntax-highlighter.hoplon))

(defn stylesheets []
 (syntax-highlighter.hoplon/stylesheet))

(defn to-element! [el]
 (el (javelin-timesync.elem-lib.mount/lib-to-element (h/div))))

(let [mountpoint (atom (h/div))]
 (defn remount! []
  ; clear out hoplon data from mountpoint div
  (h/hl! @mountpoint :hoplon/reset nil)
  ; create a new div for mountpoint
  (reset! mountpoint (h/div))
  ; flush the DOM in the document body
  (set! (.-innerHTML (h/body)) "")
  ; drop the new mountpoint into the body
  (h/html
   [
    (h/head
     (stylesheets))
    (h/body
     @mountpoint)])
  ; rebuild everything
  (to-element! @mountpoint)))

; hook into shadow cljs
(defn ^:dev/after-load start! []
 (remount!))
(start!)
