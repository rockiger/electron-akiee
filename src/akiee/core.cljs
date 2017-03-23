(ns akiee.core
    (:require [cljs.nodejs :as nodejs]))

(def path (nodejs/require "path"))

(def Electron (nodejs/require "electron"))

(def BrowserWindow (.-BrowserWindow Electron))

(def crash-reporter (.-crashReporter Electron))

(def Os (nodejs/require "os"))

(def *win* (atom nil))

(def app (.-app Electron))

(defn -main []
  (.start crash-reporter (clj->js {:companyName "Rockiger"
                                   :submitURL   "http://rockiger.com/"}))

  ;; error listener
  (.on nodejs/process "error"
       (fn [err] (.log js/console err)))

  ;; window all closed listener
  (.on app "window-all-closed"
       (fn [] (if (not= (.-platform nodejs/process) "darwin")
                (.quit app))))

  ;; ready listener
  (.on app "ready"
       (fn []
         (reset! *win* (BrowserWindow. (clj->js
                                        {:width 1000 :height 600
                                         :icon
                                         (str (.resolve path (js* "__dirname") "../icon.svg"))})))
         ;; load react-extension for dev tools
         (.addDevToolsExtension BrowserWindow "/home/macco/.config/google-chrome/Default/Extensions/fmkadmapgofadopljbjfkapdkoienihi/2.0.12_0/")
         ;; when no optimize comment out
         (.loadURL @*win* (str "file://" (.resolve path (js* "__dirname") "../index.html")))
         ;; when no optimize uncomment
         ;; (.loadURL @*win* (str "file://" (.resolve path (js* "__dirname") "../../../index.html")))

         (.on @*win* "closed" (fn [] (reset! *win* nil))))))

(nodejs/enable-util-print!)

;;; "Linux" or "Darwin" or "Windows_NT"
(.log js/console (str "Start descjop application on " (.type Os) "."))

(set! *main-cli-fn* -main)
