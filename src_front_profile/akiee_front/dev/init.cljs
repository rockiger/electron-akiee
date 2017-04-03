(ns akiee-front.init
  (:require [figwheel.client :as fw :include-macros true]
            [akiee-front.core :as core]
            [akiee-front.conf :as conf]
            [akiee-front.runner :as runner]
            [devtools.core :as devtools]
            [cljs.nodejs :as nj]))

(enable-console-print!)


(def electron (nj/require "electron"))
(def remote (.-remote electron))
(def browser-window (.-BrowserWindow remote))

(fw/watch-and-reload
 :websocket-url   "ws://localhost:3449/figwheel-ws"
 :jsload-callback 'start-descjop!)

(defn start-descjop! []
  (devtools/install! :all)
  (.addDevToolsExtension browser-window "/home/macco/.config/google-chrome/Default/Extensions/fmkadmapgofadopljbjfkapdkoienihi/2.0.12_0/")
  (runner/run-tests)
  (core/init! conf/setting))

(start-descjop!)
