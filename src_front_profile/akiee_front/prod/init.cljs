(ns akiee-front.init
    (:require [akiee-front.core :as core]
              [akiee-front.conf :as conf]))

(enable-console-print!)

(defn start-descjop! []
  (core/init! conf/setting))

(start-descjop!)
