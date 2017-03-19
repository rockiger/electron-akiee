// Compiled by ClojureScript 1.9.495 {:elide-asserts true}
goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__28097__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__28097 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28098__i = 0, G__28098__a = new Array(arguments.length -  0);
while (G__28098__i < G__28098__a.length) {G__28098__a[G__28098__i] = arguments[G__28098__i + 0]; ++G__28098__i;}
  args = new cljs.core.IndexedSeq(G__28098__a,0);
} 
return G__28097__delegate.call(this,args);};
G__28097.cljs$lang$maxFixedArity = 0;
G__28097.cljs$lang$applyTo = (function (arglist__28099){
var args = cljs.core.seq(arglist__28099);
return G__28097__delegate(args);
});
G__28097.cljs$core$IFn$_invoke$arity$variadic = G__28097__delegate;
return G__28097;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__28100__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__28100 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28101__i = 0, G__28101__a = new Array(arguments.length -  0);
while (G__28101__i < G__28101__a.length) {G__28101__a[G__28101__i] = arguments[G__28101__i + 0]; ++G__28101__i;}
  args = new cljs.core.IndexedSeq(G__28101__a,0);
} 
return G__28100__delegate.call(this,args);};
G__28100.cljs$lang$maxFixedArity = 0;
G__28100.cljs$lang$applyTo = (function (arglist__28102){
var args = cljs.core.seq(arglist__28102);
return G__28100__delegate(args);
});
G__28100.cljs$core$IFn$_invoke$arity$variadic = G__28100__delegate;
return G__28100;
})()
;

return null;
});

//# sourceMappingURL=nodejs.js.map