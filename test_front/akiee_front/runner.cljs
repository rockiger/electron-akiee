(ns akiee-front.runner
  (:require [doo.runner :refer-macros [doo-tests]]
            [akiee-front.core-test]))

(doo-tests 'akiee-front.core-test)
