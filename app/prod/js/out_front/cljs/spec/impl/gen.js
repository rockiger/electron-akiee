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
var len__7933__auto___12613 = arguments.length;
var i__7934__auto___12614 = (0);
while(true){
if((i__7934__auto___12614 < len__7933__auto___12613)){
args__7940__auto__.push((arguments[i__7934__auto___12614]));

var G__12615 = (i__7934__auto___12614 + (1));
i__7934__auto___12614 = G__12615;
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

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq12612){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12612));
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
var len__7933__auto___12617 = arguments.length;
var i__7934__auto___12618 = (0);
while(true){
if((i__7934__auto___12618 < len__7933__auto___12617)){
args__7940__auto__.push((arguments[i__7934__auto___12618]));

var G__12619 = (i__7934__auto___12618 + (1));
i__7934__auto___12618 = G__12619;
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

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq12616){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12616));
});

var g_QMARK__12620 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
var g_12621 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__12620){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__12620))
,null));
var mkg_12622 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__12620,g_12621){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__12620,g_12621))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__12620,g_12621,mkg_12622){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__12620).call(null,x);
});})(g_QMARK__12620,g_12621,mkg_12622))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__12620,g_12621,mkg_12622){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_12622).call(null,gfn);
});})(g_QMARK__12620,g_12621,mkg_12622))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__12620,g_12621,mkg_12622){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_12621).call(null,generator);
});})(g_QMARK__12620,g_12621,mkg_12622))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__12584__auto___12642 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__12584__auto___12642){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__7940__auto__ = [];
var len__7933__auto___12643 = arguments.length;
var i__7934__auto___12644 = (0);
while(true){
if((i__7934__auto___12644 < len__7933__auto___12643)){
args__7940__auto__.push((arguments[i__7934__auto___12644]));

var G__12645 = (i__7934__auto___12644 + (1));
i__7934__auto___12644 = G__12645;
continue;
} else {
}
break;
}

var argseq__7941__auto__ = ((((0) < args__7940__auto__.length))?(new cljs.core.IndexedSeq(args__7940__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__7941__auto__);
});})(g__12584__auto___12642))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12584__auto___12642){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12584__auto___12642),args);
});})(g__12584__auto___12642))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__12584__auto___12642){
return (function (seq12623){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12623));
});})(g__12584__auto___12642))
;


var g__12584__auto___12646 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__12584__auto___12646){
return (function cljs$spec$impl$gen$list(var_args){
var args__7940__auto__ = [];
var len__7933__auto___12647 = arguments.length;
var i__7934__auto___12648 = (0);
while(true){
if((i__7934__auto___12648 < len__7933__auto___12647)){
args__7940__auto__.push((arguments[i__7934__auto___12648]));

var G__12649 = (i__7934__auto___12648 + (1));
i__7934__auto___12648 = G__12649;
continue;
} else {
}
break;
}

var argseq__7941__auto__ = ((((0) < args__7940__auto__.length))?(new cljs.core.IndexedSeq(args__7940__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__7941__auto__);
});})(g__12584__auto___12646))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12584__auto___12646){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12584__auto___12646),args);
});})(g__12584__auto___12646))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__12584__auto___12646){
return (function (seq12624){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12624));
});})(g__12584__auto___12646))
;


var g__12584__auto___12650 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__12584__auto___12650){
return (function cljs$spec$impl$gen$map(var_args){
var args__7940__auto__ = [];
var len__7933__auto___12651 = arguments.length;
var i__7934__auto___12652 = (0);
while(true){
if((i__7934__auto___12652 < len__7933__auto___12651)){
args__7940__auto__.push((arguments[i__7934__auto___12652]));

var G__12653 = (i__7934__auto___12652 + (1));
i__7934__auto___12652 = G__12653;
continue;
} else {
}
break;
}

var argseq__7941__auto__ = ((((0) < args__7940__auto__.length))?(new cljs.core.IndexedSeq(args__7940__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__7941__auto__);
});})(g__12584__auto___12650))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12584__auto___12650){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12584__auto___12650),args);
});})(g__12584__auto___12650))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__12584__auto___12650){
return (function (seq12625){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12625));
});})(g__12584__auto___12650))
;


var g__12584__auto___12654 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__12584__auto___12654){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__7940__auto__ = [];
var len__7933__auto___12655 = arguments.length;
var i__7934__auto___12656 = (0);
while(true){
if((i__7934__auto___12656 < len__7933__auto___12655)){
args__7940__auto__.push((arguments[i__7934__auto___12656]));

var G__12657 = (i__7934__auto___12656 + (1));
i__7934__auto___12656 = G__12657;
continue;
} else {
}
break;
}

var argseq__7941__auto__ = ((((0) < args__7940__auto__.length))?(new cljs.core.IndexedSeq(args__7940__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__7941__auto__);
});})(g__12584__auto___12654))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12584__auto___12654){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12584__auto___12654),args);
});})(g__12584__auto___12654))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__12584__auto___12654){
return (function (seq12626){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12626));
});})(g__12584__auto___12654))
;


var g__12584__auto___12658 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__12584__auto___12658){
return (function cljs$spec$impl$gen$set(var_args){
var args__7940__auto__ = [];
var len__7933__auto___12659 = arguments.length;
var i__7934__auto___12660 = (0);
while(true){
if((i__7934__auto___12660 < len__7933__auto___12659)){
args__7940__auto__.push((arguments[i__7934__auto___12660]));

var G__12661 = (i__7934__auto___12660 + (1));
i__7934__auto___12660 = G__12661;
continue;
} else {
}
break;
}

var argseq__7941__auto__ = ((((0) < args__7940__auto__.length))?(new cljs.core.IndexedSeq(args__7940__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__7941__auto__);
});})(g__12584__auto___12658))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12584__auto___12658){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12584__auto___12658),args);
});})(g__12584__auto___12658))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__12584__auto___12658){
return (function (seq12627){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12627));
});})(g__12584__auto___12658))
;


var g__12584__auto___12662 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__12584__auto___12662){
return (function cljs$spec$impl$gen$vector(var_args){
var args__7940__auto__ = [];
var len__7933__auto___12663 = arguments.length;
var i__7934__auto___12664 = (0);
while(true){
if((i__7934__auto___12664 < len__7933__auto___12663)){
args__7940__auto__.push((arguments[i__7934__auto___12664]));

var G__12665 = (i__7934__auto___12664 + (1));
i__7934__auto___12664 = G__12665;
continue;
} else {
}
break;
}

var argseq__7941__auto__ = ((((0) < args__7940__auto__.length))?(new cljs.core.IndexedSeq(args__7940__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__7941__auto__);
});})(g__12584__auto___12662))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12584__auto___12662){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12584__auto___12662),args);
});})(g__12584__auto___12662))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__12584__auto___12662){
return (function (seq12628){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12628));
});})(g__12584__auto___12662))
;


var g__12584__auto___12666 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__12584__auto___12666){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__7940__auto__ = [];
var len__7933__auto___12667 = arguments.length;
var i__7934__auto___12668 = (0);
while(true){
if((i__7934__auto___12668 < len__7933__auto___12667)){
args__7940__auto__.push((arguments[i__7934__auto___12668]));

var G__12669 = (i__7934__auto___12668 + (1));
i__7934__auto___12668 = G__12669;
continue;
} else {
}
break;
}

var argseq__7941__auto__ = ((((0) < args__7940__auto__.length))?(new cljs.core.IndexedSeq(args__7940__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__7941__auto__);
});})(g__12584__auto___12666))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12584__auto___12666){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12584__auto___12666),args);
});})(g__12584__auto___12666))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__12584__auto___12666){
return (function (seq12629){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12629));
});})(g__12584__auto___12666))
;


var g__12584__auto___12670 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__12584__auto___12670){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__7940__auto__ = [];
var len__7933__auto___12671 = arguments.length;
var i__7934__auto___12672 = (0);
while(true){
if((i__7934__auto___12672 < len__7933__auto___12671)){
args__7940__auto__.push((arguments[i__7934__auto___12672]));

var G__12673 = (i__7934__auto___12672 + (1));
i__7934__auto___12672 = G__12673;
continue;
} else {
}
break;
}

var argseq__7941__auto__ = ((((0) < args__7940__auto__.length))?(new cljs.core.IndexedSeq(args__7940__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__7941__auto__);
});})(g__12584__auto___12670))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12584__auto___12670){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12584__auto___12670),args);
});})(g__12584__auto___12670))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__12584__auto___12670){
return (function (seq12630){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12630));
});})(g__12584__auto___12670))
;


var g__12584__auto___12674 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__12584__auto___12674){
return (function cljs$spec$impl$gen$elements(var_args){
var args__7940__auto__ = [];
var len__7933__auto___12675 = arguments.length;
var i__7934__auto___12676 = (0);
while(true){
if((i__7934__auto___12676 < len__7933__auto___12675)){
args__7940__auto__.push((arguments[i__7934__auto___12676]));

var G__12677 = (i__7934__auto___12676 + (1));
i__7934__auto___12676 = G__12677;
continue;
} else {
}
break;
}

var argseq__7941__auto__ = ((((0) < args__7940__auto__.length))?(new cljs.core.IndexedSeq(args__7940__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__7941__auto__);
});})(g__12584__auto___12674))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12584__auto___12674){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12584__auto___12674),args);
});})(g__12584__auto___12674))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__12584__auto___12674){
return (function (seq12631){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12631));
});})(g__12584__auto___12674))
;


var g__12584__auto___12678 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__12584__auto___12678){
return (function cljs$spec$impl$gen$bind(var_args){
var args__7940__auto__ = [];
var len__7933__auto___12679 = arguments.length;
var i__7934__auto___12680 = (0);
while(true){
if((i__7934__auto___12680 < len__7933__auto___12679)){
args__7940__auto__.push((arguments[i__7934__auto___12680]));

var G__12681 = (i__7934__auto___12680 + (1));
i__7934__auto___12680 = G__12681;
continue;
} else {
}
break;
}

var argseq__7941__auto__ = ((((0) < args__7940__auto__.length))?(new cljs.core.IndexedSeq(args__7940__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__7941__auto__);
});})(g__12584__auto___12678))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12584__auto___12678){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12584__auto___12678),args);
});})(g__12584__auto___12678))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__12584__auto___12678){
return (function (seq12632){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12632));
});})(g__12584__auto___12678))
;


var g__12584__auto___12682 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__12584__auto___12682){
return (function cljs$spec$impl$gen$choose(var_args){
var args__7940__auto__ = [];
var len__7933__auto___12683 = arguments.length;
var i__7934__auto___12684 = (0);
while(true){
if((i__7934__auto___12684 < len__7933__auto___12683)){
args__7940__auto__.push((arguments[i__7934__auto___12684]));

var G__12685 = (i__7934__auto___12684 + (1));
i__7934__auto___12684 = G__12685;
continue;
} else {
}
break;
}

var argseq__7941__auto__ = ((((0) < args__7940__auto__.length))?(new cljs.core.IndexedSeq(args__7940__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__7941__auto__);
});})(g__12584__auto___12682))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12584__auto___12682){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12584__auto___12682),args);
});})(g__12584__auto___12682))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__12584__auto___12682){
return (function (seq12633){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12633));
});})(g__12584__auto___12682))
;


var g__12584__auto___12686 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__12584__auto___12686){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__7940__auto__ = [];
var len__7933__auto___12687 = arguments.length;
var i__7934__auto___12688 = (0);
while(true){
if((i__7934__auto___12688 < len__7933__auto___12687)){
args__7940__auto__.push((arguments[i__7934__auto___12688]));

var G__12689 = (i__7934__auto___12688 + (1));
i__7934__auto___12688 = G__12689;
continue;
} else {
}
break;
}

var argseq__7941__auto__ = ((((0) < args__7940__auto__.length))?(new cljs.core.IndexedSeq(args__7940__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__7941__auto__);
});})(g__12584__auto___12686))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12584__auto___12686){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12584__auto___12686),args);
});})(g__12584__auto___12686))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__12584__auto___12686){
return (function (seq12634){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12634));
});})(g__12584__auto___12686))
;


var g__12584__auto___12690 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__12584__auto___12690){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__7940__auto__ = [];
var len__7933__auto___12691 = arguments.length;
var i__7934__auto___12692 = (0);
while(true){
if((i__7934__auto___12692 < len__7933__auto___12691)){
args__7940__auto__.push((arguments[i__7934__auto___12692]));

var G__12693 = (i__7934__auto___12692 + (1));
i__7934__auto___12692 = G__12693;
continue;
} else {
}
break;
}

var argseq__7941__auto__ = ((((0) < args__7940__auto__.length))?(new cljs.core.IndexedSeq(args__7940__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__7941__auto__);
});})(g__12584__auto___12690))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12584__auto___12690){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12584__auto___12690),args);
});})(g__12584__auto___12690))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__12584__auto___12690){
return (function (seq12635){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12635));
});})(g__12584__auto___12690))
;


var g__12584__auto___12694 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__12584__auto___12694){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__7940__auto__ = [];
var len__7933__auto___12695 = arguments.length;
var i__7934__auto___12696 = (0);
while(true){
if((i__7934__auto___12696 < len__7933__auto___12695)){
args__7940__auto__.push((arguments[i__7934__auto___12696]));

var G__12697 = (i__7934__auto___12696 + (1));
i__7934__auto___12696 = G__12697;
continue;
} else {
}
break;
}

var argseq__7941__auto__ = ((((0) < args__7940__auto__.length))?(new cljs.core.IndexedSeq(args__7940__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__7941__auto__);
});})(g__12584__auto___12694))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12584__auto___12694){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12584__auto___12694),args);
});})(g__12584__auto___12694))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__12584__auto___12694){
return (function (seq12636){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12636));
});})(g__12584__auto___12694))
;


var g__12584__auto___12698 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__12584__auto___12698){
return (function cljs$spec$impl$gen$sample(var_args){
var args__7940__auto__ = [];
var len__7933__auto___12699 = arguments.length;
var i__7934__auto___12700 = (0);
while(true){
if((i__7934__auto___12700 < len__7933__auto___12699)){
args__7940__auto__.push((arguments[i__7934__auto___12700]));

var G__12701 = (i__7934__auto___12700 + (1));
i__7934__auto___12700 = G__12701;
continue;
} else {
}
break;
}

var argseq__7941__auto__ = ((((0) < args__7940__auto__.length))?(new cljs.core.IndexedSeq(args__7940__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__7941__auto__);
});})(g__12584__auto___12698))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12584__auto___12698){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12584__auto___12698),args);
});})(g__12584__auto___12698))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__12584__auto___12698){
return (function (seq12637){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12637));
});})(g__12584__auto___12698))
;


var g__12584__auto___12702 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__12584__auto___12702){
return (function cljs$spec$impl$gen$return(var_args){
var args__7940__auto__ = [];
var len__7933__auto___12703 = arguments.length;
var i__7934__auto___12704 = (0);
while(true){
if((i__7934__auto___12704 < len__7933__auto___12703)){
args__7940__auto__.push((arguments[i__7934__auto___12704]));

var G__12705 = (i__7934__auto___12704 + (1));
i__7934__auto___12704 = G__12705;
continue;
} else {
}
break;
}

var argseq__7941__auto__ = ((((0) < args__7940__auto__.length))?(new cljs.core.IndexedSeq(args__7940__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__7941__auto__);
});})(g__12584__auto___12702))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12584__auto___12702){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12584__auto___12702),args);
});})(g__12584__auto___12702))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__12584__auto___12702){
return (function (seq12638){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12638));
});})(g__12584__auto___12702))
;


var g__12584__auto___12706 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__12584__auto___12706){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__7940__auto__ = [];
var len__7933__auto___12707 = arguments.length;
var i__7934__auto___12708 = (0);
while(true){
if((i__7934__auto___12708 < len__7933__auto___12707)){
args__7940__auto__.push((arguments[i__7934__auto___12708]));

var G__12709 = (i__7934__auto___12708 + (1));
i__7934__auto___12708 = G__12709;
continue;
} else {
}
break;
}

var argseq__7941__auto__ = ((((0) < args__7940__auto__.length))?(new cljs.core.IndexedSeq(args__7940__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__7941__auto__);
});})(g__12584__auto___12706))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12584__auto___12706){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12584__auto___12706),args);
});})(g__12584__auto___12706))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__12584__auto___12706){
return (function (seq12639){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12639));
});})(g__12584__auto___12706))
;


var g__12584__auto___12710 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__12584__auto___12710){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__7940__auto__ = [];
var len__7933__auto___12711 = arguments.length;
var i__7934__auto___12712 = (0);
while(true){
if((i__7934__auto___12712 < len__7933__auto___12711)){
args__7940__auto__.push((arguments[i__7934__auto___12712]));

var G__12713 = (i__7934__auto___12712 + (1));
i__7934__auto___12712 = G__12713;
continue;
} else {
}
break;
}

var argseq__7941__auto__ = ((((0) < args__7940__auto__.length))?(new cljs.core.IndexedSeq(args__7940__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__7941__auto__);
});})(g__12584__auto___12710))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12584__auto___12710){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12584__auto___12710),args);
});})(g__12584__auto___12710))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__12584__auto___12710){
return (function (seq12640){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12640));
});})(g__12584__auto___12710))
;


var g__12584__auto___12714 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.impl.gen.frequency = ((function (g__12584__auto___12714){
return (function cljs$spec$impl$gen$frequency(var_args){
var args__7940__auto__ = [];
var len__7933__auto___12715 = arguments.length;
var i__7934__auto___12716 = (0);
while(true){
if((i__7934__auto___12716 < len__7933__auto___12715)){
args__7940__auto__.push((arguments[i__7934__auto___12716]));

var G__12717 = (i__7934__auto___12716 + (1));
i__7934__auto___12716 = G__12717;
continue;
} else {
}
break;
}

var argseq__7941__auto__ = ((((0) < args__7940__auto__.length))?(new cljs.core.IndexedSeq(args__7940__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__7941__auto__);
});})(g__12584__auto___12714))
;

cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12584__auto___12714){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12584__auto___12714),args);
});})(g__12584__auto___12714))
;

cljs.spec.impl.gen.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.frequency.cljs$lang$applyTo = ((function (g__12584__auto___12714){
return (function (seq12641){
return cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12641));
});})(g__12584__auto___12714))
;

var g__12597__auto___12739 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__12597__auto___12739){
return (function cljs$spec$impl$gen$any(var_args){
var args__7940__auto__ = [];
var len__7933__auto___12740 = arguments.length;
var i__7934__auto___12741 = (0);
while(true){
if((i__7934__auto___12741 < len__7933__auto___12740)){
args__7940__auto__.push((arguments[i__7934__auto___12741]));

var G__12742 = (i__7934__auto___12741 + (1));
i__7934__auto___12741 = G__12742;
continue;
} else {
}
break;
}

var argseq__7941__auto__ = ((((0) < args__7940__auto__.length))?(new cljs.core.IndexedSeq(args__7940__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__7941__auto__);
});})(g__12597__auto___12739))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12597__auto___12739){
return (function (args){
return cljs.core.deref.call(null,g__12597__auto___12739);
});})(g__12597__auto___12739))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__12597__auto___12739){
return (function (seq12718){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12718));
});})(g__12597__auto___12739))
;


var g__12597__auto___12743 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__12597__auto___12743){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__7940__auto__ = [];
var len__7933__auto___12744 = arguments.length;
var i__7934__auto___12745 = (0);
while(true){
if((i__7934__auto___12745 < len__7933__auto___12744)){
args__7940__auto__.push((arguments[i__7934__auto___12745]));

var G__12746 = (i__7934__auto___12745 + (1));
i__7934__auto___12745 = G__12746;
continue;
} else {
}
break;
}

var argseq__7941__auto__ = ((((0) < args__7940__auto__.length))?(new cljs.core.IndexedSeq(args__7940__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__7941__auto__);
});})(g__12597__auto___12743))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12597__auto___12743){
return (function (args){
return cljs.core.deref.call(null,g__12597__auto___12743);
});})(g__12597__auto___12743))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__12597__auto___12743){
return (function (seq12719){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12719));
});})(g__12597__auto___12743))
;


var g__12597__auto___12747 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__12597__auto___12747){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__7940__auto__ = [];
var len__7933__auto___12748 = arguments.length;
var i__7934__auto___12749 = (0);
while(true){
if((i__7934__auto___12749 < len__7933__auto___12748)){
args__7940__auto__.push((arguments[i__7934__auto___12749]));

var G__12750 = (i__7934__auto___12749 + (1));
i__7934__auto___12749 = G__12750;
continue;
} else {
}
break;
}

var argseq__7941__auto__ = ((((0) < args__7940__auto__.length))?(new cljs.core.IndexedSeq(args__7940__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__7941__auto__);
});})(g__12597__auto___12747))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12597__auto___12747){
return (function (args){
return cljs.core.deref.call(null,g__12597__auto___12747);
});})(g__12597__auto___12747))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__12597__auto___12747){
return (function (seq12720){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12720));
});})(g__12597__auto___12747))
;


var g__12597__auto___12751 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__12597__auto___12751){
return (function cljs$spec$impl$gen$char(var_args){
var args__7940__auto__ = [];
var len__7933__auto___12752 = arguments.length;
var i__7934__auto___12753 = (0);
while(true){
if((i__7934__auto___12753 < len__7933__auto___12752)){
args__7940__auto__.push((arguments[i__7934__auto___12753]));

var G__12754 = (i__7934__auto___12753 + (1));
i__7934__auto___12753 = G__12754;
continue;
} else {
}
break;
}

var argseq__7941__auto__ = ((((0) < args__7940__auto__.length))?(new cljs.core.IndexedSeq(args__7940__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__7941__auto__);
});})(g__12597__auto___12751))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12597__auto___12751){
return (function (args){
return cljs.core.deref.call(null,g__12597__auto___12751);
});})(g__12597__auto___12751))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__12597__auto___12751){
return (function (seq12721){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12721));
});})(g__12597__auto___12751))
;


var g__12597__auto___12755 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__12597__auto___12755){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__7940__auto__ = [];
var len__7933__auto___12756 = arguments.length;
var i__7934__auto___12757 = (0);
while(true){
if((i__7934__auto___12757 < len__7933__auto___12756)){
args__7940__auto__.push((arguments[i__7934__auto___12757]));

var G__12758 = (i__7934__auto___12757 + (1));
i__7934__auto___12757 = G__12758;
continue;
} else {
}
break;
}

var argseq__7941__auto__ = ((((0) < args__7940__auto__.length))?(new cljs.core.IndexedSeq(args__7940__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__7941__auto__);
});})(g__12597__auto___12755))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12597__auto___12755){
return (function (args){
return cljs.core.deref.call(null,g__12597__auto___12755);
});})(g__12597__auto___12755))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__12597__auto___12755){
return (function (seq12722){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12722));
});})(g__12597__auto___12755))
;


var g__12597__auto___12759 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__12597__auto___12759){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__7940__auto__ = [];
var len__7933__auto___12760 = arguments.length;
var i__7934__auto___12761 = (0);
while(true){
if((i__7934__auto___12761 < len__7933__auto___12760)){
args__7940__auto__.push((arguments[i__7934__auto___12761]));

var G__12762 = (i__7934__auto___12761 + (1));
i__7934__auto___12761 = G__12762;
continue;
} else {
}
break;
}

var argseq__7941__auto__ = ((((0) < args__7940__auto__.length))?(new cljs.core.IndexedSeq(args__7940__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__7941__auto__);
});})(g__12597__auto___12759))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12597__auto___12759){
return (function (args){
return cljs.core.deref.call(null,g__12597__auto___12759);
});})(g__12597__auto___12759))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__12597__auto___12759){
return (function (seq12723){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12723));
});})(g__12597__auto___12759))
;


var g__12597__auto___12763 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__12597__auto___12763){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__7940__auto__ = [];
var len__7933__auto___12764 = arguments.length;
var i__7934__auto___12765 = (0);
while(true){
if((i__7934__auto___12765 < len__7933__auto___12764)){
args__7940__auto__.push((arguments[i__7934__auto___12765]));

var G__12766 = (i__7934__auto___12765 + (1));
i__7934__auto___12765 = G__12766;
continue;
} else {
}
break;
}

var argseq__7941__auto__ = ((((0) < args__7940__auto__.length))?(new cljs.core.IndexedSeq(args__7940__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__7941__auto__);
});})(g__12597__auto___12763))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12597__auto___12763){
return (function (args){
return cljs.core.deref.call(null,g__12597__auto___12763);
});})(g__12597__auto___12763))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__12597__auto___12763){
return (function (seq12724){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12724));
});})(g__12597__auto___12763))
;


var g__12597__auto___12767 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__12597__auto___12767){
return (function cljs$spec$impl$gen$double(var_args){
var args__7940__auto__ = [];
var len__7933__auto___12768 = arguments.length;
var i__7934__auto___12769 = (0);
while(true){
if((i__7934__auto___12769 < len__7933__auto___12768)){
args__7940__auto__.push((arguments[i__7934__auto___12769]));

var G__12770 = (i__7934__auto___12769 + (1));
i__7934__auto___12769 = G__12770;
continue;
} else {
}
break;
}

var argseq__7941__auto__ = ((((0) < args__7940__auto__.length))?(new cljs.core.IndexedSeq(args__7940__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__7941__auto__);
});})(g__12597__auto___12767))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12597__auto___12767){
return (function (args){
return cljs.core.deref.call(null,g__12597__auto___12767);
});})(g__12597__auto___12767))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__12597__auto___12767){
return (function (seq12725){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12725));
});})(g__12597__auto___12767))
;


var g__12597__auto___12771 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__12597__auto___12771){
return (function cljs$spec$impl$gen$int(var_args){
var args__7940__auto__ = [];
var len__7933__auto___12772 = arguments.length;
var i__7934__auto___12773 = (0);
while(true){
if((i__7934__auto___12773 < len__7933__auto___12772)){
args__7940__auto__.push((arguments[i__7934__auto___12773]));

var G__12774 = (i__7934__auto___12773 + (1));
i__7934__auto___12773 = G__12774;
continue;
} else {
}
break;
}

var argseq__7941__auto__ = ((((0) < args__7940__auto__.length))?(new cljs.core.IndexedSeq(args__7940__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__7941__auto__);
});})(g__12597__auto___12771))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12597__auto___12771){
return (function (args){
return cljs.core.deref.call(null,g__12597__auto___12771);
});})(g__12597__auto___12771))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__12597__auto___12771){
return (function (seq12726){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12726));
});})(g__12597__auto___12771))
;


var g__12597__auto___12775 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__12597__auto___12775){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__7940__auto__ = [];
var len__7933__auto___12776 = arguments.length;
var i__7934__auto___12777 = (0);
while(true){
if((i__7934__auto___12777 < len__7933__auto___12776)){
args__7940__auto__.push((arguments[i__7934__auto___12777]));

var G__12778 = (i__7934__auto___12777 + (1));
i__7934__auto___12777 = G__12778;
continue;
} else {
}
break;
}

var argseq__7941__auto__ = ((((0) < args__7940__auto__.length))?(new cljs.core.IndexedSeq(args__7940__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__7941__auto__);
});})(g__12597__auto___12775))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12597__auto___12775){
return (function (args){
return cljs.core.deref.call(null,g__12597__auto___12775);
});})(g__12597__auto___12775))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__12597__auto___12775){
return (function (seq12727){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12727));
});})(g__12597__auto___12775))
;


var g__12597__auto___12779 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__12597__auto___12779){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__7940__auto__ = [];
var len__7933__auto___12780 = arguments.length;
var i__7934__auto___12781 = (0);
while(true){
if((i__7934__auto___12781 < len__7933__auto___12780)){
args__7940__auto__.push((arguments[i__7934__auto___12781]));

var G__12782 = (i__7934__auto___12781 + (1));
i__7934__auto___12781 = G__12782;
continue;
} else {
}
break;
}

var argseq__7941__auto__ = ((((0) < args__7940__auto__.length))?(new cljs.core.IndexedSeq(args__7940__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__7941__auto__);
});})(g__12597__auto___12779))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12597__auto___12779){
return (function (args){
return cljs.core.deref.call(null,g__12597__auto___12779);
});})(g__12597__auto___12779))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__12597__auto___12779){
return (function (seq12728){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12728));
});})(g__12597__auto___12779))
;


var g__12597__auto___12783 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__12597__auto___12783){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__7940__auto__ = [];
var len__7933__auto___12784 = arguments.length;
var i__7934__auto___12785 = (0);
while(true){
if((i__7934__auto___12785 < len__7933__auto___12784)){
args__7940__auto__.push((arguments[i__7934__auto___12785]));

var G__12786 = (i__7934__auto___12785 + (1));
i__7934__auto___12785 = G__12786;
continue;
} else {
}
break;
}

var argseq__7941__auto__ = ((((0) < args__7940__auto__.length))?(new cljs.core.IndexedSeq(args__7940__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__7941__auto__);
});})(g__12597__auto___12783))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12597__auto___12783){
return (function (args){
return cljs.core.deref.call(null,g__12597__auto___12783);
});})(g__12597__auto___12783))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__12597__auto___12783){
return (function (seq12729){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12729));
});})(g__12597__auto___12783))
;


var g__12597__auto___12787 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__12597__auto___12787){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__7940__auto__ = [];
var len__7933__auto___12788 = arguments.length;
var i__7934__auto___12789 = (0);
while(true){
if((i__7934__auto___12789 < len__7933__auto___12788)){
args__7940__auto__.push((arguments[i__7934__auto___12789]));

var G__12790 = (i__7934__auto___12789 + (1));
i__7934__auto___12789 = G__12790;
continue;
} else {
}
break;
}

var argseq__7941__auto__ = ((((0) < args__7940__auto__.length))?(new cljs.core.IndexedSeq(args__7940__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__7941__auto__);
});})(g__12597__auto___12787))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12597__auto___12787){
return (function (args){
return cljs.core.deref.call(null,g__12597__auto___12787);
});})(g__12597__auto___12787))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__12597__auto___12787){
return (function (seq12730){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12730));
});})(g__12597__auto___12787))
;


var g__12597__auto___12791 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__12597__auto___12791){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__7940__auto__ = [];
var len__7933__auto___12792 = arguments.length;
var i__7934__auto___12793 = (0);
while(true){
if((i__7934__auto___12793 < len__7933__auto___12792)){
args__7940__auto__.push((arguments[i__7934__auto___12793]));

var G__12794 = (i__7934__auto___12793 + (1));
i__7934__auto___12793 = G__12794;
continue;
} else {
}
break;
}

var argseq__7941__auto__ = ((((0) < args__7940__auto__.length))?(new cljs.core.IndexedSeq(args__7940__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__7941__auto__);
});})(g__12597__auto___12791))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12597__auto___12791){
return (function (args){
return cljs.core.deref.call(null,g__12597__auto___12791);
});})(g__12597__auto___12791))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__12597__auto___12791){
return (function (seq12731){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12731));
});})(g__12597__auto___12791))
;


var g__12597__auto___12795 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__12597__auto___12795){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__7940__auto__ = [];
var len__7933__auto___12796 = arguments.length;
var i__7934__auto___12797 = (0);
while(true){
if((i__7934__auto___12797 < len__7933__auto___12796)){
args__7940__auto__.push((arguments[i__7934__auto___12797]));

var G__12798 = (i__7934__auto___12797 + (1));
i__7934__auto___12797 = G__12798;
continue;
} else {
}
break;
}

var argseq__7941__auto__ = ((((0) < args__7940__auto__.length))?(new cljs.core.IndexedSeq(args__7940__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__7941__auto__);
});})(g__12597__auto___12795))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12597__auto___12795){
return (function (args){
return cljs.core.deref.call(null,g__12597__auto___12795);
});})(g__12597__auto___12795))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__12597__auto___12795){
return (function (seq12732){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12732));
});})(g__12597__auto___12795))
;


var g__12597__auto___12799 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__12597__auto___12799){
return (function cljs$spec$impl$gen$string(var_args){
var args__7940__auto__ = [];
var len__7933__auto___12800 = arguments.length;
var i__7934__auto___12801 = (0);
while(true){
if((i__7934__auto___12801 < len__7933__auto___12800)){
args__7940__auto__.push((arguments[i__7934__auto___12801]));

var G__12802 = (i__7934__auto___12801 + (1));
i__7934__auto___12801 = G__12802;
continue;
} else {
}
break;
}

var argseq__7941__auto__ = ((((0) < args__7940__auto__.length))?(new cljs.core.IndexedSeq(args__7940__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__7941__auto__);
});})(g__12597__auto___12799))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12597__auto___12799){
return (function (args){
return cljs.core.deref.call(null,g__12597__auto___12799);
});})(g__12597__auto___12799))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__12597__auto___12799){
return (function (seq12733){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12733));
});})(g__12597__auto___12799))
;


var g__12597__auto___12803 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__12597__auto___12803){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__7940__auto__ = [];
var len__7933__auto___12804 = arguments.length;
var i__7934__auto___12805 = (0);
while(true){
if((i__7934__auto___12805 < len__7933__auto___12804)){
args__7940__auto__.push((arguments[i__7934__auto___12805]));

var G__12806 = (i__7934__auto___12805 + (1));
i__7934__auto___12805 = G__12806;
continue;
} else {
}
break;
}

var argseq__7941__auto__ = ((((0) < args__7940__auto__.length))?(new cljs.core.IndexedSeq(args__7940__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__7941__auto__);
});})(g__12597__auto___12803))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12597__auto___12803){
return (function (args){
return cljs.core.deref.call(null,g__12597__auto___12803);
});})(g__12597__auto___12803))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__12597__auto___12803){
return (function (seq12734){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12734));
});})(g__12597__auto___12803))
;


var g__12597__auto___12807 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__12597__auto___12807){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__7940__auto__ = [];
var len__7933__auto___12808 = arguments.length;
var i__7934__auto___12809 = (0);
while(true){
if((i__7934__auto___12809 < len__7933__auto___12808)){
args__7940__auto__.push((arguments[i__7934__auto___12809]));

var G__12810 = (i__7934__auto___12809 + (1));
i__7934__auto___12809 = G__12810;
continue;
} else {
}
break;
}

var argseq__7941__auto__ = ((((0) < args__7940__auto__.length))?(new cljs.core.IndexedSeq(args__7940__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__7941__auto__);
});})(g__12597__auto___12807))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12597__auto___12807){
return (function (args){
return cljs.core.deref.call(null,g__12597__auto___12807);
});})(g__12597__auto___12807))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__12597__auto___12807){
return (function (seq12735){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12735));
});})(g__12597__auto___12807))
;


var g__12597__auto___12811 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__12597__auto___12811){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__7940__auto__ = [];
var len__7933__auto___12812 = arguments.length;
var i__7934__auto___12813 = (0);
while(true){
if((i__7934__auto___12813 < len__7933__auto___12812)){
args__7940__auto__.push((arguments[i__7934__auto___12813]));

var G__12814 = (i__7934__auto___12813 + (1));
i__7934__auto___12813 = G__12814;
continue;
} else {
}
break;
}

var argseq__7941__auto__ = ((((0) < args__7940__auto__.length))?(new cljs.core.IndexedSeq(args__7940__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__7941__auto__);
});})(g__12597__auto___12811))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12597__auto___12811){
return (function (args){
return cljs.core.deref.call(null,g__12597__auto___12811);
});})(g__12597__auto___12811))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__12597__auto___12811){
return (function (seq12736){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12736));
});})(g__12597__auto___12811))
;


var g__12597__auto___12815 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__12597__auto___12815){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__7940__auto__ = [];
var len__7933__auto___12816 = arguments.length;
var i__7934__auto___12817 = (0);
while(true){
if((i__7934__auto___12817 < len__7933__auto___12816)){
args__7940__auto__.push((arguments[i__7934__auto___12817]));

var G__12818 = (i__7934__auto___12817 + (1));
i__7934__auto___12817 = G__12818;
continue;
} else {
}
break;
}

var argseq__7941__auto__ = ((((0) < args__7940__auto__.length))?(new cljs.core.IndexedSeq(args__7940__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__7941__auto__);
});})(g__12597__auto___12815))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12597__auto___12815){
return (function (args){
return cljs.core.deref.call(null,g__12597__auto___12815);
});})(g__12597__auto___12815))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__12597__auto___12815){
return (function (seq12737){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12737));
});})(g__12597__auto___12815))
;


var g__12597__auto___12819 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__12597__auto___12819){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__7940__auto__ = [];
var len__7933__auto___12820 = arguments.length;
var i__7934__auto___12821 = (0);
while(true){
if((i__7934__auto___12821 < len__7933__auto___12820)){
args__7940__auto__.push((arguments[i__7934__auto___12821]));

var G__12822 = (i__7934__auto___12821 + (1));
i__7934__auto___12821 = G__12822;
continue;
} else {
}
break;
}

var argseq__7941__auto__ = ((((0) < args__7940__auto__.length))?(new cljs.core.IndexedSeq(args__7940__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__7941__auto__);
});})(g__12597__auto___12819))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12597__auto___12819){
return (function (args){
return cljs.core.deref.call(null,g__12597__auto___12819);
});})(g__12597__auto___12819))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__12597__auto___12819){
return (function (seq12738){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12738));
});})(g__12597__auto___12819))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__7940__auto__ = [];
var len__7933__auto___12825 = arguments.length;
var i__7934__auto___12826 = (0);
while(true){
if((i__7934__auto___12826 < len__7933__auto___12825)){
args__7940__auto__.push((arguments[i__7934__auto___12826]));

var G__12827 = (i__7934__auto___12826 + (1));
i__7934__auto___12826 = G__12827;
continue;
} else {
}
break;
}

var argseq__7941__auto__ = ((((0) < args__7940__auto__.length))?(new cljs.core.IndexedSeq(args__7940__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__7941__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__12823_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__12823_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq12824){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12824));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__12828_SHARP_){
return (new Date(p1__12828_SHARP_));
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