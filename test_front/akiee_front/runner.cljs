(ns akiee-front.runner
  (:require [cljs.test :refer-macros [run-tests]]
            [akiee-front.core-test]))

(enable-console-print!)

(defn run-tests []
  (run-tests 'akiee-front.core-test))
