(ns elem-lib.hoplon
 (:require
  [javelin.core :as j]
  [hoplon.core :as h]
  camel-snake-kebab.core
  syntax-highlighter.hoplon))

(defn code
 [code-cell]
 (j/with-let [code-block (h/code)]
  (code-block
   :class/elem-lib "clojure"
   (j/formula-of
    [code-cell]
    (h/with-animation-frame (syntax-highlighter.hoplon/highlight! code-block))
    ; cells of cells are common in examples
    (pr-str code-cell)))))

(defn elem
 [name desc f examples]
 (h/div
  :class/elem-lib "elem-lib-item"
  :id (camel-snake-kebab.core/->kebab-case-string name)
  (h/h2 name)
  (h/code (str f))
  (h/p desc)
  (h/for-tpl [[d & args] examples]
   (h/div :class/elem-lib "elem-lib-example"
    (h/h3 d)
    "Arguments:"
    (h/for-tpl [arg args]
     (code @arg))
    (let [result (apply @f @args)]
     (if (j/cell? result)
      (h/div
       "Javelin cell value:" (h/br)
       (code result))
      result))))))
