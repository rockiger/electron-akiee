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
var G__12431__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__12431 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12432__i = 0, G__12432__a = new Array(arguments.length -  0);
while (G__12432__i < G__12432__a.length) {G__12432__a[G__12432__i] = arguments[G__12432__i + 0]; ++G__12432__i;}
  args = new cljs.core.IndexedSeq(G__12432__a,0);
} 
return G__12431__delegate.call(this,args);};
G__12431.cljs$lang$maxFixedArity = 0;
G__12431.cljs$lang$applyTo = (function (arglist__12433){
var args = cljs.core.seq(arglist__12433);
return G__12431__delegate(args);
});
G__12431.cljs$core$IFn$_invoke$arity$variadic = G__12431__delegate;
return G__12431;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__12434__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__12434 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12435__i = 0, G__12435__a = new Array(arguments.length -  0);
while (G__12435__i < G__12435__a.length) {G__12435__a[G__12435__i] = arguments[G__12435__i + 0]; ++G__12435__i;}
  args = new cljs.core.IndexedSeq(G__12435__a,0);
} 
return G__12434__delegate.call(this,args);};
G__12434.cljs$lang$maxFixedArity = 0;
G__12434.cljs$lang$applyTo = (function (arglist__12436){
var args = cljs.core.seq(arglist__12436);
return G__12434__delegate(args);
});
G__12434.cljs$core$IFn$_invoke$arity$variadic = G__12434__delegate;
return G__12434;
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
