(ns akiee-front.core
  (:require [reagent.core :as r]
            [cljs.nodejs :as node]
            [akiee-front.app-db :as db]
            [akiee-front.constants :refer [TODO DOING DONE ALL]]
            [akiee-front.handlers :as h]))

(enable-console-print!)

;; TODO unit test for reagent
;; TODO figwhell for node-webkit

;; =================
;; Constants: in akiee.constants

(def modifier (if (= (.-platform js/process) "darwin") "Cmd" "Ctrl"))
(def path (node/require "path"))

;; =================
;; Data definitions:

;; World State is ... (give WS a better name)

;; =================
;; Functions:

(defn list-state-button
  "String String String -> Component
  Consumes the text tx, the id and the title t, the state,
  the test function tfn, the on-click function onfn of the button;
  produces the component for the button."
  [tx id t state tfn onfn]
  (let [active? (if (and (= (tfn) state) (not (db/editor?))) "active" "")]
    [:button.btn.btn-default.navbar-btn.btn-state.toolbar-button
     {:type "button" :id id :title t :class active? :on-click onfn} tx]))


(def todo-button  [list-state-button "Todo" "show-todo" (str modifier "+1") TODO
                                     db/list-state db/switch-todo!])
(def doing-button [list-state-button "Doing" "show-doing" (str modifier "+2 / " modifier "+Space") DOING
                                     db/list-state db/switch-doing!])
(def done-button  [list-state-button "Done" "show-done" (str modifier "+3") DONE
                                     db/list-state db/switch-done!])
(def board-button [list-state-button "Board" "show-all" (str modifier "+4") ALL
                                     db/list-state db/switch-all!])

(defn switch-button
  "String String String -> Component
  Consumes the icon name in, the id and title t of the button, the test function tfn?,
  the on-click function onfn of the button.
  produces the component for the button."
  [in id t tfn? onfn]
  (let [icon-name (str "fa-" in)
        active? (if (tfn?) "active" "")]
   [:button.btn.btn-default.navbar-btn.btn-square.toolbar-button {:id id :title t :class active? :on-click onfn}
    [:span.fa.fa-fw {:class icon-name}]]))

(def editor-switch [switch-button "code" "show-editor" (str modifier "+E / " modifier "+Space") db/editor? db/switch-editor!])
(def search-switch [switch-button "search" "show-searchbox" (str modifier "+F") db/search? db/switch-search!])
(def entry-switch  [switch-button "plus" "show-enter-task" (str modifier "+Enter") db/entry? db/switch-entry!])
(def menu-button   [switch-button "ellipsis-v" "show-menu" (str modifier "+M") (fn [] false) h/onclick-menu])
(def entry-close  [:button.hover-button {:id "close-app" :title "Alt-F4" :on-click h/onclick-close} [:img {:src "../../resources/css/img/window-close.svg"}]])

(defn toolbar
  "-> Component
  The toolbar for changing the state of the Akiee"
  []
  [:nav#toolbar.navbar.navbar-default {:role "navigation"}
   [:div#toolbar-fluid.container-fluid
    [:div#toolbar-inside.navbar-flex
     [:div#taskbuttons.btn-group
      todo-button
      doing-button
      done-button]
     board-button
     [:div#toolbar-spacer.spacer]
     editor-switch
     search-switch
     entry-switch
     menu-button
     [:div#close entry-close]]]])
(defn app
 " -> Component
 Produces the base comment"
 []
 [:div#app
  [toolbar]])
  ; [enter-task]
  ; [search]
  ; [editor]
  ; [task-list]])

(defn big-bang []
  ;(h/register-keyevents)
  ;(h/register-winevents)
  ;(h/create-menu)
  ;(h/create-taskmenu)
  (r/render-component
    [app]
    (.getElementById js/document "root")))
  ;(r/track! set-title!)
  ;(sb/datepicker-config)
  ;(h/register-events))

(defn init! [setting]
  (println setting)
  (big-bang))
