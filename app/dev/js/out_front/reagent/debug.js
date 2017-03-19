// Compiled by ClojureScript 1.9.495 {:elide-asserts true}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__8184__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__8184 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8185__i = 0, G__8185__a = new Array(arguments.length -  0);
while (G__8185__i < G__8185__a.length) {G__8185__a[G__8185__i] = arguments[G__8185__i + 0]; ++G__8185__i;}
  args = new cljs.core.IndexedSeq(G__8185__a,0);
} 
return G__8184__delegate.call(this,args);};
G__8184.cljs$lang$maxFixedArity = 0;
G__8184.cljs$lang$applyTo = (function (arglist__8186){
var args = cljs.core.seq(arglist__8186);
return G__8184__delegate(args);
});
G__8184.cljs$core$IFn$_invoke$arity$variadic = G__8184__delegate;
return G__8184;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__8187__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__8187 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8188__i = 0, G__8188__a = new Array(arguments.length -  0);
while (G__8188__i < G__8188__a.length) {G__8188__a[G__8188__i] = arguments[G__8188__i + 0]; ++G__8188__i;}
  args = new cljs.core.IndexedSeq(G__8188__a,0);
} 
return G__8187__delegate.call(this,args);};
G__8187.cljs$lang$maxFixedArity = 0;
G__8187.cljs$lang$applyTo = (function (arglist__8189){
var args = cljs.core.seq(arglist__8189);
return G__8187__delegate(args);
});
G__8187.cljs$core$IFn$_invoke$arity$variadic = G__8187__delegate;
return G__8187;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map