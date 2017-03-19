// Compiled by ClojureScript 1.9.495 {:elide-asserts true}
goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__11067__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__11067 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11068__i = 0, G__11068__a = new Array(arguments.length -  0);
while (G__11068__i < G__11068__a.length) {G__11068__a[G__11068__i] = arguments[G__11068__i + 0]; ++G__11068__i;}
  args = new cljs.core.IndexedSeq(G__11068__a,0);
} 
return G__11067__delegate.call(this,args);};
G__11067.cljs$lang$maxFixedArity = 0;
G__11067.cljs$lang$applyTo = (function (arglist__11069){
var args = cljs.core.seq(arglist__11069);
return G__11067__delegate(args);
});
G__11067.cljs$core$IFn$_invoke$arity$variadic = G__11067__delegate;
return G__11067;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__11070__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__11070 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11071__i = 0, G__11071__a = new Array(arguments.length -  0);
while (G__11071__i < G__11071__a.length) {G__11071__a[G__11071__i] = arguments[G__11071__i + 0]; ++G__11071__i;}
  args = new cljs.core.IndexedSeq(G__11071__a,0);
} 
return G__11070__delegate.call(this,args);};
G__11070.cljs$lang$maxFixedArity = 0;
G__11070.cljs$lang$applyTo = (function (arglist__11072){
var args = cljs.core.seq(arglist__11072);
return G__11070__delegate(args);
});
G__11070.cljs$core$IFn$_invoke$arity$variadic = G__11070__delegate;
return G__11070;
})()
;

return null;
});
