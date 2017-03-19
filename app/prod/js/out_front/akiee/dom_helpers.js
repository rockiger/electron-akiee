// Compiled by ClojureScript 1.9.495 {:elide-asserts true}
goog.provide('akiee.dom_helpers');
goog.require('cljs.core');
cljs.core.enable_console_print_BANG_.call(null);
/**
 * String -> DOMElement
 *   Consumes a CSS indetifier i and returns a DOMElement
 */
akiee.dom_helpers.get_element = (function akiee$dom_helpers$get_element(i){
return document.getElementById(i);
});
