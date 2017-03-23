(ns akiee-front.core-test
  "Tests for akiee-front.core, run with lein doo phantom test auto"
  (:require [cljs.test :refer-macros [deftest testing is use-fixtures]]
            [cljs-react-test.simulate :as sim]
            [cljs-react-test.utils :as tu]
            [reagent.core :as reagent]
            [akiee-front.core :as core]
            [akiee-front.constants :refer [TODO DOING DONE]]
            [akiee-front.datadefinitions :refer [global-state]]
            [akiee-front.dom-helpers :refer [get-element]]))

(def ^:dynamic c)
(use-fixtures :each (fn [test-fn]
                      (binding [c (tu/new-container!)]
                        (test-fn)
                        (tu/unmount! c))))

;; Create a basic test

(defn switch-list-state!
  "ListState -> GlobalState
  Consumes a Liststate ls switches the ls variable and editor? search? search? accordingly"
  [app-state ls]
  (let []
      (swap! app-state assoc :editor? false :search? false :entry? false :ss "" :ls ls)))

(deftest fake-test
  (testing "fake description"
    (is (= 2 2))))

(deftest click-test
  (testing "click on todo button"
    (let [app-state (reagent/atom (global-state. false false false false "" nil nil DOING))
          _         (reagent/render [core/list-state-button "Text" "id" "title" #(DOING)
                                      #(switch-list-state! app-state TODO)]
                                    c)
          node (get-element "id")]
      (.log js/console node)
      (sim/click node nil) ; doesn't do a thing, the functions get executed in the let staement
      (is (= (:ls @app-state) TODO)))))
