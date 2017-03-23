(ns akiee-front.init
  (:require [figwheel.client :as fw :include-macros true]
            [akiee-front.core :as core]
            [akiee-front.conf :as conf]
            [devtools.core :as devtools]
            [akiee-front.runner :as runner]))

(enable-console-print!)

(fw/watch-and-reload
 :websocket-url   "ws://localhost:3449/figwheel-ws"
 :jsload-callback 'start-descjop!)

(defn start-descjop! []
  (devtools/install! :all)
  (runner/run-tests)
  (core/init! conf/setting))

(start-descjop!)
