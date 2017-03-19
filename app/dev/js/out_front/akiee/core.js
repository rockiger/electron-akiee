// Compiled by ClojureScript 1.9.495 {:elide-asserts true}
goog.provide('akiee.core');
goog.require('cljs.core');
goog.require('clojure.browser.repl');
goog.require('reagent.core');
goog.require('cljs.nodejs');
cljs.core.enable_console_print_BANG_.call(null);
akiee.core.modifier = ((cljs.core._EQ_.call(null,process.platform,"darwin"))?"Cmd":"Ctrl");
akiee.core.path = cljs.nodejs.require.call(null,"path");
/**
 *  -> Component
 *   Produces the base comment
 */
akiee.core.app = (function akiee$core$app(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#app","div#app",840279329),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [akiee.core.toolbar], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [akiee.core.enter_task], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [akiee.core.search], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [akiee.core.editor], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [akiee.core.task_list], null)], null);
});
akiee.core.big_bang = (function akiee$core$big_bang(){
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [akiee.core.app], null),document.getElementById("root"));
});
akiee.core.big_bang.call(null);

//# sourceMappingURL=core.js.map