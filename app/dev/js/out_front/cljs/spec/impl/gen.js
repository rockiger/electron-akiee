// Compiled by ClojureScript 1.9.495 {:elide-asserts true}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__7435__auto__,writer__7436__auto__,opt__7437__auto__){
return cljs.core._write.call(null,writer__7436__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__7940__auto__ = [];
var len__7933__auto___15762 = arguments.length;
var i__7934__auto___15763 = (0);
while(true){
if((i__7934__auto___15763 < len__7933__auto___15762)){
args__7940__auto__.push((arguments[i__7934__auto___15763]));

var G__15764 = (i__7934__auto___15763 + (1));
i__7934__auto___15763 = G__15764;
continue;
} else {
}
break;
}

var argseq__7941__auto__ = ((((0) < args__7940__auto__.length))?(new cljs.core.IndexedSeq(args__7940__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__7941__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq15761){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15761));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__7940__auto__ = [];
var len__7933__auto___15766 = arguments.length;
var i__7934__auto___15767 = (0);
while(true){
if((i__7934__auto___15767 < len__7933__auto___15766)){
args__7940__auto__.push((arguments[i__7934__auto___15767]));

var G__15768 = (i__7934__auto___15767 + (1));
i__7934__auto___15767 = G__15768;
continue;
} else {
}
break;
}

var argseq__7941__auto__ = ((((0) < args__7940__auto__.length))?(new cljs.core.IndexedSeq(args__7940__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__7941__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq15765){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15765));
});

var g_QMARK__15769 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
var g_15770 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__15769){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__15769))
,null));
var mkg_15771 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__15769,g_15770){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__15769,g_15770))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__15769,g_15770,mkg_15771){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__15769).call(null,x);
});})(g_QMARK__15769,g_15770,mkg_15771))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__15769,g_15770,mkg_15771){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_15771).call(null,gfn);
});})(g_QMARK__15769,g_15770,mkg_15771))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__15769,g_15770,mkg_15771){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_15770).call(null,generator);
});})(g_QMARK__15769,g_15770,mkg_15771))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__15733__auto___15791 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__15733__auto___15791){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__7940__auto__ = [];
var len__7933__auto___15792 = arguments.length;
var i__7934__auto___15793 = (0);
while(true){
if((i__7934__auto___15793 < len__7933__auto___15792)){
args__7940__auto__.push((arguments[i__7934__auto___15793]));

var G__15794 = (i__7934__auto___15793 + (1));
i__7934__auto___15793 = G__15794;
continue;
} else {
}
break;
}

var argseq__7941__auto__ = ((((0) < args__7940__auto__.length))?(new cljs.core.IndexedSeq(args__7940__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__7941__auto__);
});})(g__15733__auto___15791))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15733__auto___15791){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__15733__auto___15791),args);
});})(g__15733__auto___15791))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__15733__auto___15791){
return (function (seq15772){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15772));
});})(g__15733__auto___15791))
;


var g__15733__auto___15795 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__15733__auto___15795){
return (function cljs$spec$impl$gen$list(var_args){
var args__7940__auto__ = [];
var len__7933__auto___15796 = arguments.length;
var i__7934__auto___15797 = (0);
while(true){
if((i__7934__auto___15797 < len__7933__auto___15796)){
args__7940__auto__.push((arguments[i__7934__auto___15797]));

var G__15798 = (i__7934__auto___15797 + (1));
i__7934__auto___15797 = G__15798;
continue;
} else {
}
break;
}

var argseq__7941__auto__ = ((((0) < args__7940__auto__.length))?(new cljs.core.IndexedSeq(args__7940__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__7941__auto__);
});})(g__15733__auto___15795))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15733__auto___15795){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__15733__auto___15795),args);
});})(g__15733__auto___15795))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__15733__auto___15795){
return (function (seq15773){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15773));
});})(g__15733__auto___15795))
;


var g__15733__auto___15799 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__15733__auto___15799){
return (function cljs$spec$impl$gen$map(var_args){
var args__7940__auto__ = [];
var len__7933__auto___15800 = arguments.length;
var i__7934__auto___15801 = (0);
while(true){
if((i__7934__auto___15801 < len__7933__auto___15800)){
args__7940__auto__.push((arguments[i__7934__auto___15801]));

var G__15802 = (i__7934__auto___15801 + (1));
i__7934__auto___15801 = G__15802;
continue;
} else {
}
break;
}

var argseq__7941__auto__ = ((((0) < args__7940__auto__.length))?(new cljs.core.IndexedSeq(args__7940__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__7941__auto__);
});})(g__15733__auto___15799))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15733__auto___15799){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__15733__auto___15799),args);
});})(g__15733__auto___15799))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__15733__auto___15799){
return (function (seq15774){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15774));
});})(g__15733__auto___15799))
;


var g__15733__auto___15803 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__15733__auto___15803){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__7940__auto__ = [];
var len__7933__auto___15804 = arguments.length;
var i__7934__auto___15805 = (0);
while(true){
if((i__7934__auto___15805 < len__7933__auto___15804)){
args__7940__auto__.push((arguments[i__7934__auto___15805]));

var G__15806 = (i__7934__auto___15805 + (1));
i__7934__auto___15805 = G__15806;
continue;
} else {
}
break;
}

var argseq__7941__auto__ = ((((0) < args__7940__auto__.length))?(new cljs.core.IndexedSeq(args__7940__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__7941__auto__);
});})(g__15733__auto___15803))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15733__auto___15803){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__15733__auto___15803),args);
});})(g__15733__auto___15803))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__15733__auto___15803){
return (function (seq15775){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15775));
});})(g__15733__auto___15803))
;


var g__15733__auto___15807 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__15733__auto___15807){
return (function cljs$spec$impl$gen$set(var_args){
var args__7940__auto__ = [];
var len__7933__auto___15808 = arguments.length;
var i__7934__auto___15809 = (0);
while(true){
if((i__7934__auto___15809 < len__7933__auto___15808)){
args__7940__auto__.push((arguments[i__7934__auto___15809]));

var G__15810 = (i__7934__auto___15809 + (1));
i__7934__auto___15809 = G__15810;
continue;
} else {
}
break;
}

var argseq__7941__auto__ = ((((0) < args__7940__auto__.length))?(new cljs.core.IndexedSeq(args__7940__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__7941__auto__);
});})(g__15733__auto___15807))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15733__auto___15807){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__15733__auto___15807),args);
});})(g__15733__auto___15807))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__15733__auto___15807){
return (function (seq15776){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15776));
});})(g__15733__auto___15807))
;


var g__15733__auto___15811 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__15733__auto___15811){
return (function cljs$spec$impl$gen$vector(var_args){
var args__7940__auto__ = [];
var len__7933__auto___15812 = arguments.length;
var i__7934__auto___15813 = (0);
while(true){
if((i__7934__auto___15813 < len__7933__auto___15812)){
args__7940__auto__.push((arguments[i__7934__auto___15813]));

var G__15814 = (i__7934__auto___15813 + (1));
i__7934__auto___15813 = G__15814;
continue;
} else {
}
break;
}

var argseq__7941__auto__ = ((((0) < args__7940__auto__.length))?(new cljs.core.IndexedSeq(args__7940__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__7941__auto__);
});})(g__15733__auto___15811))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15733__auto___15811){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__15733__auto___15811),args);
});})(g__15733__auto___15811))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__15733__auto___15811){
return (function (seq15777){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15777));
});})(g__15733__auto___15811))
;


var g__15733__auto___15815 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__15733__auto___15815){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__7940__auto__ = [];
var len__7933__auto___15816 = arguments.length;
var i__7934__auto___15817 = (0);
while(true){
if((i__7934__auto___15817 < len__7933__auto___15816)){
args__7940__auto__.push((arguments[i__7934__auto___15817]));

var G__15818 = (i__7934__auto___15817 + (1));
i__7934__auto___15817 = G__15818;
continue;
} else {
}
break;
}

var argseq__7941__auto__ = ((((0) < args__7940__auto__.length))?(new cljs.core.IndexedSeq(args__7940__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__7941__auto__);
});})(g__15733__auto___15815))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15733__auto___15815){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__15733__auto___15815),args);
});})(g__15733__auto___15815))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__15733__auto___15815){
return (function (seq15778){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15778));
});})(g__15733__auto___15815))
;


var g__15733__auto___15819 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__15733__auto___15819){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__7940__auto__ = [];
var len__7933__auto___15820 = arguments.length;
var i__7934__auto___15821 = (0);
while(true){
if((i__7934__auto___15821 < len__7933__auto___15820)){
args__7940__auto__.push((arguments[i__7934__auto___15821]));

var G__15822 = (i__7934__auto___15821 + (1));
i__7934__auto___15821 = G__15822;
continue;
} else {
}
break;
}

var argseq__7941__auto__ = ((((0) < args__7940__auto__.length))?(new cljs.core.IndexedSeq(args__7940__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__7941__auto__);
});})(g__15733__auto___15819))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15733__auto___15819){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__15733__auto___15819),args);
});})(g__15733__auto___15819))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__15733__auto___15819){
return (function (seq15779){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15779));
});})(g__15733__auto___15819))
;


var g__15733__auto___15823 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__15733__auto___15823){
return (function cljs$spec$impl$gen$elements(var_args){
var args__7940__auto__ = [];
var len__7933__auto___15824 = arguments.length;
var i__7934__auto___15825 = (0);
while(true){
if((i__7934__auto___15825 < len__7933__auto___15824)){
args__7940__auto__.push((arguments[i__7934__auto___15825]));

var G__15826 = (i__7934__auto___15825 + (1));
i__7934__auto___15825 = G__15826;
continue;
} else {
}
break;
}

var argseq__7941__auto__ = ((((0) < args__7940__auto__.length))?(new cljs.core.IndexedSeq(args__7940__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__7941__auto__);
});})(g__15733__auto___15823))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15733__auto___15823){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__15733__auto___15823),args);
});})(g__15733__auto___15823))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__15733__auto___15823){
return (function (seq15780){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15780));
});})(g__15733__auto___15823))
;


var g__15733__auto___15827 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__15733__auto___15827){
return (function cljs$spec$impl$gen$bind(var_args){
var args__7940__auto__ = [];
var len__7933__auto___15828 = arguments.length;
var i__7934__auto___15829 = (0);
while(true){
if((i__7934__auto___15829 < len__7933__auto___15828)){
args__7940__auto__.push((arguments[i__7934__auto___15829]));

var G__15830 = (i__7934__auto___15829 + (1));
i__7934__auto___15829 = G__15830;
continue;
} else {
}
break;
}

var argseq__7941__auto__ = ((((0) < args__7940__auto__.length))?(new cljs.core.IndexedSeq(args__7940__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__7941__auto__);
});})(g__15733__auto___15827))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15733__auto___15827){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__15733__auto___15827),args);
});})(g__15733__auto___15827))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__15733__auto___15827){
return (function (seq15781){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15781));
});})(g__15733__auto___15827))
;


var g__15733__auto___15831 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__15733__auto___15831){
return (function cljs$spec$impl$gen$choose(var_args){
var args__7940__auto__ = [];
var len__7933__auto___15832 = arguments.length;
var i__7934__auto___15833 = (0);
while(true){
if((i__7934__auto___15833 < len__7933__auto___15832)){
args__7940__auto__.push((arguments[i__7934__auto___15833]));

var G__15834 = (i__7934__auto___15833 + (1));
i__7934__auto___15833 = G__15834;
continue;
} else {
}
break;
}

var argseq__7941__auto__ = ((((0) < args__7940__auto__.length))?(new cljs.core.IndexedSeq(args__7940__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__7941__auto__);
});})(g__15733__auto___15831))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15733__auto___15831){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__15733__auto___15831),args);
});})(g__15733__auto___15831))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__15733__auto___15831){
return (function (seq15782){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15782));
});})(g__15733__auto___15831))
;


var g__15733__auto___15835 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__15733__auto___15835){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__7940__auto__ = [];
var len__7933__auto___15836 = arguments.length;
var i__7934__auto___15837 = (0);
while(true){
if((i__7934__auto___15837 < len__7933__auto___15836)){
args__7940__auto__.push((arguments[i__7934__auto___15837]));

var G__15838 = (i__7934__auto___15837 + (1));
i__7934__auto___15837 = G__15838;
continue;
} else {
}
break;
}

var argseq__7941__auto__ = ((((0) < args__7940__auto__.length))?(new cljs.core.IndexedSeq(args__7940__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__7941__auto__);
});})(g__15733__auto___15835))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15733__auto___15835){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__15733__auto___15835),args);
});})(g__15733__auto___15835))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__15733__auto___15835){
return (function (seq15783){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15783));
});})(g__15733__auto___15835))
;


var g__15733__auto___15839 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__15733__auto___15839){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__7940__auto__ = [];
var len__7933__auto___15840 = arguments.length;
var i__7934__auto___15841 = (0);
while(true){
if((i__7934__auto___15841 < len__7933__auto___15840)){
args__7940__auto__.push((arguments[i__7934__auto___15841]));

var G__15842 = (i__7934__auto___15841 + (1));
i__7934__auto___15841 = G__15842;
continue;
} else {
}
break;
}

var argseq__7941__auto__ = ((((0) < args__7940__auto__.length))?(new cljs.core.IndexedSeq(args__7940__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__7941__auto__);
});})(g__15733__auto___15839))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15733__auto___15839){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__15733__auto___15839),args);
});})(g__15733__auto___15839))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__15733__auto___15839){
return (function (seq15784){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15784));
});})(g__15733__auto___15839))
;


var g__15733__auto___15843 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__15733__auto___15843){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__7940__auto__ = [];
var len__7933__auto___15844 = arguments.length;
var i__7934__auto___15845 = (0);
while(true){
if((i__7934__auto___15845 < len__7933__auto___15844)){
args__7940__auto__.push((arguments[i__7934__auto___15845]));

var G__15846 = (i__7934__auto___15845 + (1));
i__7934__auto___15845 = G__15846;
continue;
} else {
}
break;
}

var argseq__7941__auto__ = ((((0) < args__7940__auto__.length))?(new cljs.core.IndexedSeq(args__7940__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__7941__auto__);
});})(g__15733__auto___15843))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15733__auto___15843){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__15733__auto___15843),args);
});})(g__15733__auto___15843))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__15733__auto___15843){
return (function (seq15785){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15785));
});})(g__15733__auto___15843))
;


var g__15733__auto___15847 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__15733__auto___15847){
return (function cljs$spec$impl$gen$sample(var_args){
var args__7940__auto__ = [];
var len__7933__auto___15848 = arguments.length;
var i__7934__auto___15849 = (0);
while(true){
if((i__7934__auto___15849 < len__7933__auto___15848)){
args__7940__auto__.push((arguments[i__7934__auto___15849]));

var G__15850 = (i__7934__auto___15849 + (1));
i__7934__auto___15849 = G__15850;
continue;
} else {
}
break;
}

var argseq__7941__auto__ = ((((0) < args__7940__auto__.length))?(new cljs.core.IndexedSeq(args__7940__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__7941__auto__);
});})(g__15733__auto___15847))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15733__auto___15847){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__15733__auto___15847),args);
});})(g__15733__auto___15847))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__15733__auto___15847){
return (function (seq15786){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15786));
});})(g__15733__auto___15847))
;


var g__15733__auto___15851 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__15733__auto___15851){
return (function cljs$spec$impl$gen$return(var_args){
var args__7940__auto__ = [];
var len__7933__auto___15852 = arguments.length;
var i__7934__auto___15853 = (0);
while(true){
if((i__7934__auto___15853 < len__7933__auto___15852)){
args__7940__auto__.push((arguments[i__7934__auto___15853]));

var G__15854 = (i__7934__auto___15853 + (1));
i__7934__auto___15853 = G__15854;
continue;
} else {
}
break;
}

var argseq__7941__auto__ = ((((0) < args__7940__auto__.length))?(new cljs.core.IndexedSeq(args__7940__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__7941__auto__);
});})(g__15733__auto___15851))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15733__auto___15851){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__15733__auto___15851),args);
});})(g__15733__auto___15851))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__15733__auto___15851){
return (function (seq15787){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15787));
});})(g__15733__auto___15851))
;


var g__15733__auto___15855 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__15733__auto___15855){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__7940__auto__ = [];
var len__7933__auto___15856 = arguments.length;
var i__7934__auto___15857 = (0);
while(true){
if((i__7934__auto___15857 < len__7933__auto___15856)){
args__7940__auto__.push((arguments[i__7934__auto___15857]));

var G__15858 = (i__7934__auto___15857 + (1));
i__7934__auto___15857 = G__15858;
continue;
} else {
}
break;
}

var argseq__7941__auto__ = ((((0) < args__7940__auto__.length))?(new cljs.core.IndexedSeq(args__7940__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__7941__auto__);
});})(g__15733__auto___15855))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15733__auto___15855){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__15733__auto___15855),args);
});})(g__15733__auto___15855))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__15733__auto___15855){
return (function (seq15788){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15788));
});})(g__15733__auto___15855))
;


var g__15733__auto___15859 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__15733__auto___15859){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__7940__auto__ = [];
var len__7933__auto___15860 = arguments.length;
var i__7934__auto___15861 = (0);
while(true){
if((i__7934__auto___15861 < len__7933__auto___15860)){
args__7940__auto__.push((arguments[i__7934__auto___15861]));

var G__15862 = (i__7934__auto___15861 + (1));
i__7934__auto___15861 = G__15862;
continue;
} else {
}
break;
}

var argseq__7941__auto__ = ((((0) < args__7940__auto__.length))?(new cljs.core.IndexedSeq(args__7940__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__7941__auto__);
});})(g__15733__auto___15859))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15733__auto___15859){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__15733__auto___15859),args);
});})(g__15733__auto___15859))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__15733__auto___15859){
return (function (seq15789){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15789));
});})(g__15733__auto___15859))
;


var g__15733__auto___15863 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.impl.gen.frequency = ((function (g__15733__auto___15863){
return (function cljs$spec$impl$gen$frequency(var_args){
var args__7940__auto__ = [];
var len__7933__auto___15864 = arguments.length;
var i__7934__auto___15865 = (0);
while(true){
if((i__7934__auto___15865 < len__7933__auto___15864)){
args__7940__auto__.push((arguments[i__7934__auto___15865]));

var G__15866 = (i__7934__auto___15865 + (1));
i__7934__auto___15865 = G__15866;
continue;
} else {
}
break;
}

var argseq__7941__auto__ = ((((0) < args__7940__auto__.length))?(new cljs.core.IndexedSeq(args__7940__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__7941__auto__);
});})(g__15733__auto___15863))
;

cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15733__auto___15863){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__15733__auto___15863),args);
});})(g__15733__auto___15863))
;

cljs.spec.impl.gen.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.frequency.cljs$lang$applyTo = ((function (g__15733__auto___15863){
return (function (seq15790){
return cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15790));
});})(g__15733__auto___15863))
;

var g__15746__auto___15888 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__15746__auto___15888){
return (function cljs$spec$impl$gen$any(var_args){
var args__7940__auto__ = [];
var len__7933__auto___15889 = arguments.length;
var i__7934__auto___15890 = (0);
while(true){
if((i__7934__auto___15890 < len__7933__auto___15889)){
args__7940__auto__.push((arguments[i__7934__auto___15890]));

var G__15891 = (i__7934__auto___15890 + (1));
i__7934__auto___15890 = G__15891;
continue;
} else {
}
break;
}

var argseq__7941__auto__ = ((((0) < args__7940__auto__.length))?(new cljs.core.IndexedSeq(args__7940__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__7941__auto__);
});})(g__15746__auto___15888))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15746__auto___15888){
return (function (args){
return cljs.core.deref.call(null,g__15746__auto___15888);
});})(g__15746__auto___15888))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__15746__auto___15888){
return (function (seq15867){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15867));
});})(g__15746__auto___15888))
;


var g__15746__auto___15892 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__15746__auto___15892){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__7940__auto__ = [];
var len__7933__auto___15893 = arguments.length;
var i__7934__auto___15894 = (0);
while(true){
if((i__7934__auto___15894 < len__7933__auto___15893)){
args__7940__auto__.push((arguments[i__7934__auto___15894]));

var G__15895 = (i__7934__auto___15894 + (1));
i__7934__auto___15894 = G__15895;
continue;
} else {
}
break;
}

var argseq__7941__auto__ = ((((0) < args__7940__auto__.length))?(new cljs.core.IndexedSeq(args__7940__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__7941__auto__);
});})(g__15746__auto___15892))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15746__auto___15892){
return (function (args){
return cljs.core.deref.call(null,g__15746__auto___15892);
});})(g__15746__auto___15892))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__15746__auto___15892){
return (function (seq15868){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15868));
});})(g__15746__auto___15892))
;


var g__15746__auto___15896 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__15746__auto___15896){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__7940__auto__ = [];
var len__7933__auto___15897 = arguments.length;
var i__7934__auto___15898 = (0);
while(true){
if((i__7934__auto___15898 < len__7933__auto___15897)){
args__7940__auto__.push((arguments[i__7934__auto___15898]));

var G__15899 = (i__7934__auto___15898 + (1));
i__7934__auto___15898 = G__15899;
continue;
} else {
}
break;
}

var argseq__7941__auto__ = ((((0) < args__7940__auto__.length))?(new cljs.core.IndexedSeq(args__7940__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__7941__auto__);
});})(g__15746__auto___15896))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15746__auto___15896){
return (function (args){
return cljs.core.deref.call(null,g__15746__auto___15896);
});})(g__15746__auto___15896))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__15746__auto___15896){
return (function (seq15869){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15869));
});})(g__15746__auto___15896))
;


var g__15746__auto___15900 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__15746__auto___15900){
return (function cljs$spec$impl$gen$char(var_args){
var args__7940__auto__ = [];
var len__7933__auto___15901 = arguments.length;
var i__7934__auto___15902 = (0);
while(true){
if((i__7934__auto___15902 < len__7933__auto___15901)){
args__7940__auto__.push((arguments[i__7934__auto___15902]));

var G__15903 = (i__7934__auto___15902 + (1));
i__7934__auto___15902 = G__15903;
continue;
} else {
}
break;
}

var argseq__7941__auto__ = ((((0) < args__7940__auto__.length))?(new cljs.core.IndexedSeq(args__7940__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__7941__auto__);
});})(g__15746__auto___15900))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15746__auto___15900){
return (function (args){
return cljs.core.deref.call(null,g__15746__auto___15900);
});})(g__15746__auto___15900))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__15746__auto___15900){
return (function (seq15870){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15870));
});})(g__15746__auto___15900))
;


var g__15746__auto___15904 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__15746__auto___15904){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__7940__auto__ = [];
var len__7933__auto___15905 = arguments.length;
var i__7934__auto___15906 = (0);
while(true){
if((i__7934__auto___15906 < len__7933__auto___15905)){
args__7940__auto__.push((arguments[i__7934__auto___15906]));

var G__15907 = (i__7934__auto___15906 + (1));
i__7934__auto___15906 = G__15907;
continue;
} else {
}
break;
}

var argseq__7941__auto__ = ((((0) < args__7940__auto__.length))?(new cljs.core.IndexedSeq(args__7940__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__7941__auto__);
});})(g__15746__auto___15904))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15746__auto___15904){
return (function (args){
return cljs.core.deref.call(null,g__15746__auto___15904);
});})(g__15746__auto___15904))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__15746__auto___15904){
return (function (seq15871){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15871));
});})(g__15746__auto___15904))
;


var g__15746__auto___15908 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__15746__auto___15908){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__7940__auto__ = [];
var len__7933__auto___15909 = arguments.length;
var i__7934__auto___15910 = (0);
while(true){
if((i__7934__auto___15910 < len__7933__auto___15909)){
args__7940__auto__.push((arguments[i__7934__auto___15910]));

var G__15911 = (i__7934__auto___15910 + (1));
i__7934__auto___15910 = G__15911;
continue;
} else {
}
break;
}

var argseq__7941__auto__ = ((((0) < args__7940__auto__.length))?(new cljs.core.IndexedSeq(args__7940__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__7941__auto__);
});})(g__15746__auto___15908))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15746__auto___15908){
return (function (args){
return cljs.core.deref.call(null,g__15746__auto___15908);
});})(g__15746__auto___15908))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__15746__auto___15908){
return (function (seq15872){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15872));
});})(g__15746__auto___15908))
;


var g__15746__auto___15912 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__15746__auto___15912){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__7940__auto__ = [];
var len__7933__auto___15913 = arguments.length;
var i__7934__auto___15914 = (0);
while(true){
if((i__7934__auto___15914 < len__7933__auto___15913)){
args__7940__auto__.push((arguments[i__7934__auto___15914]));

var G__15915 = (i__7934__auto___15914 + (1));
i__7934__auto___15914 = G__15915;
continue;
} else {
}
break;
}

var argseq__7941__auto__ = ((((0) < args__7940__auto__.length))?(new cljs.core.IndexedSeq(args__7940__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__7941__auto__);
});})(g__15746__auto___15912))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15746__auto___15912){
return (function (args){
return cljs.core.deref.call(null,g__15746__auto___15912);
});})(g__15746__auto___15912))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__15746__auto___15912){
return (function (seq15873){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15873));
});})(g__15746__auto___15912))
;


var g__15746__auto___15916 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__15746__auto___15916){
return (function cljs$spec$impl$gen$double(var_args){
var args__7940__auto__ = [];
var len__7933__auto___15917 = arguments.length;
var i__7934__auto___15918 = (0);
while(true){
if((i__7934__auto___15918 < len__7933__auto___15917)){
args__7940__auto__.push((arguments[i__7934__auto___15918]));

var G__15919 = (i__7934__auto___15918 + (1));
i__7934__auto___15918 = G__15919;
continue;
} else {
}
break;
}

var argseq__7941__auto__ = ((((0) < args__7940__auto__.length))?(new cljs.core.IndexedSeq(args__7940__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__7941__auto__);
});})(g__15746__auto___15916))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15746__auto___15916){
return (function (args){
return cljs.core.deref.call(null,g__15746__auto___15916);
});})(g__15746__auto___15916))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__15746__auto___15916){
return (function (seq15874){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15874));
});})(g__15746__auto___15916))
;


var g__15746__auto___15920 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__15746__auto___15920){
return (function cljs$spec$impl$gen$int(var_args){
var args__7940__auto__ = [];
var len__7933__auto___15921 = arguments.length;
var i__7934__auto___15922 = (0);
while(true){
if((i__7934__auto___15922 < len__7933__auto___15921)){
args__7940__auto__.push((arguments[i__7934__auto___15922]));

var G__15923 = (i__7934__auto___15922 + (1));
i__7934__auto___15922 = G__15923;
continue;
} else {
}
break;
}

var argseq__7941__auto__ = ((((0) < args__7940__auto__.length))?(new cljs.core.IndexedSeq(args__7940__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__7941__auto__);
});})(g__15746__auto___15920))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15746__auto___15920){
return (function (args){
return cljs.core.deref.call(null,g__15746__auto___15920);
});})(g__15746__auto___15920))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__15746__auto___15920){
return (function (seq15875){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15875));
});})(g__15746__auto___15920))
;


var g__15746__auto___15924 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__15746__auto___15924){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__7940__auto__ = [];
var len__7933__auto___15925 = arguments.length;
var i__7934__auto___15926 = (0);
while(true){
if((i__7934__auto___15926 < len__7933__auto___15925)){
args__7940__auto__.push((arguments[i__7934__auto___15926]));

var G__15927 = (i__7934__auto___15926 + (1));
i__7934__auto___15926 = G__15927;
continue;
} else {
}
break;
}

var argseq__7941__auto__ = ((((0) < args__7940__auto__.length))?(new cljs.core.IndexedSeq(args__7940__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__7941__auto__);
});})(g__15746__auto___15924))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15746__auto___15924){
return (function (args){
return cljs.core.deref.call(null,g__15746__auto___15924);
});})(g__15746__auto___15924))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__15746__auto___15924){
return (function (seq15876){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15876));
});})(g__15746__auto___15924))
;


var g__15746__auto___15928 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__15746__auto___15928){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__7940__auto__ = [];
var len__7933__auto___15929 = arguments.length;
var i__7934__auto___15930 = (0);
while(true){
if((i__7934__auto___15930 < len__7933__auto___15929)){
args__7940__auto__.push((arguments[i__7934__auto___15930]));

var G__15931 = (i__7934__auto___15930 + (1));
i__7934__auto___15930 = G__15931;
continue;
} else {
}
break;
}

var argseq__7941__auto__ = ((((0) < args__7940__auto__.length))?(new cljs.core.IndexedSeq(args__7940__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__7941__auto__);
});})(g__15746__auto___15928))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15746__auto___15928){
return (function (args){
return cljs.core.deref.call(null,g__15746__auto___15928);
});})(g__15746__auto___15928))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__15746__auto___15928){
return (function (seq15877){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15877));
});})(g__15746__auto___15928))
;


var g__15746__auto___15932 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__15746__auto___15932){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__7940__auto__ = [];
var len__7933__auto___15933 = arguments.length;
var i__7934__auto___15934 = (0);
while(true){
if((i__7934__auto___15934 < len__7933__auto___15933)){
args__7940__auto__.push((arguments[i__7934__auto___15934]));

var G__15935 = (i__7934__auto___15934 + (1));
i__7934__auto___15934 = G__15935;
continue;
} else {
}
break;
}

var argseq__7941__auto__ = ((((0) < args__7940__auto__.length))?(new cljs.core.IndexedSeq(args__7940__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__7941__auto__);
});})(g__15746__auto___15932))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15746__auto___15932){
return (function (args){
return cljs.core.deref.call(null,g__15746__auto___15932);
});})(g__15746__auto___15932))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__15746__auto___15932){
return (function (seq15878){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15878));
});})(g__15746__auto___15932))
;


var g__15746__auto___15936 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__15746__auto___15936){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__7940__auto__ = [];
var len__7933__auto___15937 = arguments.length;
var i__7934__auto___15938 = (0);
while(true){
if((i__7934__auto___15938 < len__7933__auto___15937)){
args__7940__auto__.push((arguments[i__7934__auto___15938]));

var G__15939 = (i__7934__auto___15938 + (1));
i__7934__auto___15938 = G__15939;
continue;
} else {
}
break;
}

var argseq__7941__auto__ = ((((0) < args__7940__auto__.length))?(new cljs.core.IndexedSeq(args__7940__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__7941__auto__);
});})(g__15746__auto___15936))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15746__auto___15936){
return (function (args){
return cljs.core.deref.call(null,g__15746__auto___15936);
});})(g__15746__auto___15936))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__15746__auto___15936){
return (function (seq15879){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15879));
});})(g__15746__auto___15936))
;


var g__15746__auto___15940 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__15746__auto___15940){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__7940__auto__ = [];
var len__7933__auto___15941 = arguments.length;
var i__7934__auto___15942 = (0);
while(true){
if((i__7934__auto___15942 < len__7933__auto___15941)){
args__7940__auto__.push((arguments[i__7934__auto___15942]));

var G__15943 = (i__7934__auto___15942 + (1));
i__7934__auto___15942 = G__15943;
continue;
} else {
}
break;
}

var argseq__7941__auto__ = ((((0) < args__7940__auto__.length))?(new cljs.core.IndexedSeq(args__7940__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__7941__auto__);
});})(g__15746__auto___15940))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15746__auto___15940){
return (function (args){
return cljs.core.deref.call(null,g__15746__auto___15940);
});})(g__15746__auto___15940))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__15746__auto___15940){
return (function (seq15880){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15880));
});})(g__15746__auto___15940))
;


var g__15746__auto___15944 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__15746__auto___15944){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__7940__auto__ = [];
var len__7933__auto___15945 = arguments.length;
var i__7934__auto___15946 = (0);
while(true){
if((i__7934__auto___15946 < len__7933__auto___15945)){
args__7940__auto__.push((arguments[i__7934__auto___15946]));

var G__15947 = (i__7934__auto___15946 + (1));
i__7934__auto___15946 = G__15947;
continue;
} else {
}
break;
}

var argseq__7941__auto__ = ((((0) < args__7940__auto__.length))?(new cljs.core.IndexedSeq(args__7940__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__7941__auto__);
});})(g__15746__auto___15944))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15746__auto___15944){
return (function (args){
return cljs.core.deref.call(null,g__15746__auto___15944);
});})(g__15746__auto___15944))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__15746__auto___15944){
return (function (seq15881){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15881));
});})(g__15746__auto___15944))
;


var g__15746__auto___15948 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__15746__auto___15948){
return (function cljs$spec$impl$gen$string(var_args){
var args__7940__auto__ = [];
var len__7933__auto___15949 = arguments.length;
var i__7934__auto___15950 = (0);
while(true){
if((i__7934__auto___15950 < len__7933__auto___15949)){
args__7940__auto__.push((arguments[i__7934__auto___15950]));

var G__15951 = (i__7934__auto___15950 + (1));
i__7934__auto___15950 = G__15951;
continue;
} else {
}
break;
}

var argseq__7941__auto__ = ((((0) < args__7940__auto__.length))?(new cljs.core.IndexedSeq(args__7940__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__7941__auto__);
});})(g__15746__auto___15948))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15746__auto___15948){
return (function (args){
return cljs.core.deref.call(null,g__15746__auto___15948);
});})(g__15746__auto___15948))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__15746__auto___15948){
return (function (seq15882){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15882));
});})(g__15746__auto___15948))
;


var g__15746__auto___15952 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__15746__auto___15952){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__7940__auto__ = [];
var len__7933__auto___15953 = arguments.length;
var i__7934__auto___15954 = (0);
while(true){
if((i__7934__auto___15954 < len__7933__auto___15953)){
args__7940__auto__.push((arguments[i__7934__auto___15954]));

var G__15955 = (i__7934__auto___15954 + (1));
i__7934__auto___15954 = G__15955;
continue;
} else {
}
break;
}

var argseq__7941__auto__ = ((((0) < args__7940__auto__.length))?(new cljs.core.IndexedSeq(args__7940__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__7941__auto__);
});})(g__15746__auto___15952))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15746__auto___15952){
return (function (args){
return cljs.core.deref.call(null,g__15746__auto___15952);
});})(g__15746__auto___15952))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__15746__auto___15952){
return (function (seq15883){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15883));
});})(g__15746__auto___15952))
;


var g__15746__auto___15956 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__15746__auto___15956){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__7940__auto__ = [];
var len__7933__auto___15957 = arguments.length;
var i__7934__auto___15958 = (0);
while(true){
if((i__7934__auto___15958 < len__7933__auto___15957)){
args__7940__auto__.push((arguments[i__7934__auto___15958]));

var G__15959 = (i__7934__auto___15958 + (1));
i__7934__auto___15958 = G__15959;
continue;
} else {
}
break;
}

var argseq__7941__auto__ = ((((0) < args__7940__auto__.length))?(new cljs.core.IndexedSeq(args__7940__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__7941__auto__);
});})(g__15746__auto___15956))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15746__auto___15956){
return (function (args){
return cljs.core.deref.call(null,g__15746__auto___15956);
});})(g__15746__auto___15956))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__15746__auto___15956){
return (function (seq15884){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15884));
});})(g__15746__auto___15956))
;


var g__15746__auto___15960 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__15746__auto___15960){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__7940__auto__ = [];
var len__7933__auto___15961 = arguments.length;
var i__7934__auto___15962 = (0);
while(true){
if((i__7934__auto___15962 < len__7933__auto___15961)){
args__7940__auto__.push((arguments[i__7934__auto___15962]));

var G__15963 = (i__7934__auto___15962 + (1));
i__7934__auto___15962 = G__15963;
continue;
} else {
}
break;
}

var argseq__7941__auto__ = ((((0) < args__7940__auto__.length))?(new cljs.core.IndexedSeq(args__7940__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__7941__auto__);
});})(g__15746__auto___15960))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15746__auto___15960){
return (function (args){
return cljs.core.deref.call(null,g__15746__auto___15960);
});})(g__15746__auto___15960))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__15746__auto___15960){
return (function (seq15885){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15885));
});})(g__15746__auto___15960))
;


var g__15746__auto___15964 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__15746__auto___15964){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__7940__auto__ = [];
var len__7933__auto___15965 = arguments.length;
var i__7934__auto___15966 = (0);
while(true){
if((i__7934__auto___15966 < len__7933__auto___15965)){
args__7940__auto__.push((arguments[i__7934__auto___15966]));

var G__15967 = (i__7934__auto___15966 + (1));
i__7934__auto___15966 = G__15967;
continue;
} else {
}
break;
}

var argseq__7941__auto__ = ((((0) < args__7940__auto__.length))?(new cljs.core.IndexedSeq(args__7940__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__7941__auto__);
});})(g__15746__auto___15964))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15746__auto___15964){
return (function (args){
return cljs.core.deref.call(null,g__15746__auto___15964);
});})(g__15746__auto___15964))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__15746__auto___15964){
return (function (seq15886){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15886));
});})(g__15746__auto___15964))
;


var g__15746__auto___15968 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__15746__auto___15968){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__7940__auto__ = [];
var len__7933__auto___15969 = arguments.length;
var i__7934__auto___15970 = (0);
while(true){
if((i__7934__auto___15970 < len__7933__auto___15969)){
args__7940__auto__.push((arguments[i__7934__auto___15970]));

var G__15971 = (i__7934__auto___15970 + (1));
i__7934__auto___15970 = G__15971;
continue;
} else {
}
break;
}

var argseq__7941__auto__ = ((((0) < args__7940__auto__.length))?(new cljs.core.IndexedSeq(args__7940__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__7941__auto__);
});})(g__15746__auto___15968))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15746__auto___15968){
return (function (args){
return cljs.core.deref.call(null,g__15746__auto___15968);
});})(g__15746__auto___15968))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__15746__auto___15968){
return (function (seq15887){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15887));
});})(g__15746__auto___15968))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__7940__auto__ = [];
var len__7933__auto___15974 = arguments.length;
var i__7934__auto___15975 = (0);
while(true){
if((i__7934__auto___15975 < len__7933__auto___15974)){
args__7940__auto__.push((arguments[i__7934__auto___15975]));

var G__15976 = (i__7934__auto___15975 + (1));
i__7934__auto___15975 = G__15976;
continue;
} else {
}
break;
}

var argseq__7941__auto__ = ((((0) < args__7940__auto__.length))?(new cljs.core.IndexedSeq(args__7940__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__7941__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__15972_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__15972_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq15973){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15973));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__15977_SHARP_){
return (new Date(p1__15977_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map