// Compiled by ClojureScript 1.9.495 {:elide-asserts true}
goog.provide('akiee.node');
goog.require('cljs.core');
goog.require('akiee.fileoperations');
goog.require('akiee.datadefinitions');
goog.require('akiee.constants');
goog.require('cljs.test');
goog.require('cljs.nodejs');
goog.require('clojure.string');
akiee.node.org = cljs.nodejs.require.call(null,"./lib/markdown-org-mode-parser");
akiee.node.parse_file = akiee.node.org.parseBigString;
akiee.node.week = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"], null);
/**
 * Nil -> String
 *   Returns a unique key for new nodes
 */
akiee.node.__GT_key = (function akiee$node$__GT_key(){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.call(null,"node_"))].join('');
});
try{var values__10818__auto___11102 = cljs.core.List.EMPTY;
var result__10819__auto___11103 = cljs.core.apply.call(null,akiee.node.__GT_key,values__10818__auto___11102);
if(cljs.core.truth_(result__10819__auto___11103)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"->key","->key",-764907874,null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,akiee.node.__GT_key,values__10818__auto___11102),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"->key","->key",-764907874,null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__7666__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"->key","->key",-764907874,null),values__10818__auto___11102);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7666__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e11101){var t__10856__auto___11104 = e11101;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"->key","->key",-764907874,null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__10856__auto___11104,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}/**
 * Node Node -> Boolean
 *   Compares 2 Nodes n1 n2, the :key of the nodes is ignored,
 *   because it's random
 */
akiee.node.node_EQ_ = (function akiee$node$node_EQ_(n1,n2){
return (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(n1),new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(n2))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"headline","headline",-157157727).cljs$core$IFn$_invoke$arity$1(n1),new cljs.core.Keyword(null,"headline","headline",-157157727).cljs$core$IFn$_invoke$arity$1(n2))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(n1),new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(n2))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(n1),new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(n2))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(n1),new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(n2))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"todo","todo",-1046442570).cljs$core$IFn$_invoke$arity$1(n1),new cljs.core.Keyword(null,"todo","todo",-1046442570).cljs$core$IFn$_invoke$arity$1(n2))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(n1),new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(n2))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"scheduled","scheduled",553898551).cljs$core$IFn$_invoke$arity$1(n1),new cljs.core.Keyword(null,"scheduled","scheduled",553898551).cljs$core$IFn$_invoke$arity$1(n2))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"deadline","deadline",628964572).cljs$core$IFn$_invoke$arity$1(n1),new cljs.core.Keyword(null,"deadline","deadline",628964572).cljs$core$IFn$_invoke$arity$1(n2))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"fin","fin",712246207).cljs$core$IFn$_invoke$arity$1(n1),new cljs.core.Keyword(null,"fin","fin",712246207).cljs$core$IFn$_invoke$arity$1(n2))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"properties","properties",685819552).cljs$core$IFn$_invoke$arity$1(n1),new cljs.core.Keyword(null,"properties","properties",685819552).cljs$core$IFn$_invoke$arity$1(n2))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"drawer","drawer",-1346127858).cljs$core$IFn$_invoke$arity$1(n1),new cljs.core.Keyword(null,"drawer","drawer",-1346127858).cljs$core$IFn$_invoke$arity$1(n2))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"rank","rank",-1706728502).cljs$core$IFn$_invoke$arity$1(n1),new cljs.core.Keyword(null,"rank","rank",-1706728502).cljs$core$IFn$_invoke$arity$1(n2))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repeat","repeat",832692087).cljs$core$IFn$_invoke$arity$1(n1),new cljs.core.Keyword(null,"repeat","repeat",832692087).cljs$core$IFn$_invoke$arity$1(n2))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(n1),new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(n2)));
});
try{var values__10818__auto___11106 = (function (){var x__7666__auto__ = akiee.node.node_EQ_.call(null,akiee.datadefinitions.N1,akiee.datadefinitions.N1a);
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,true),x__7666__auto__);
})();
var result__10819__auto___11107 = cljs.core.apply.call(null,cljs.core._EQ_,values__10818__auto___11106);
if(cljs.core.truth_(result__10819__auto___11107)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"node=","node=",1955998775,null),new cljs.core.Symbol("dd","N1","dd/N1",-87941384,null),new cljs.core.Symbol("dd","N1a","dd/N1a",-1462437694,null)),true),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__10818__auto___11106),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"node=","node=",1955998775,null),new cljs.core.Symbol("dd","N1","dd/N1",-87941384,null),new cljs.core.Symbol("dd","N1a","dd/N1a",-1462437694,null)),true),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__7666__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10818__auto___11106);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7666__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e11105){var t__10856__auto___11108 = e11105;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"node=","node=",1955998775,null),new cljs.core.Symbol("dd","N1","dd/N1",-87941384,null),new cljs.core.Symbol("dd","N1a","dd/N1a",-1462437694,null)),true),new cljs.core.Keyword(null,"actual","actual",107306363),t__10856__auto___11108,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}try{var values__10818__auto___11110 = (function (){var x__7666__auto__ = akiee.node.node_EQ_.call(null,akiee.datadefinitions.N1,akiee.datadefinitions.N2);
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,false),x__7666__auto__);
})();
var result__10819__auto___11111 = cljs.core.apply.call(null,cljs.core._EQ_,values__10818__auto___11110);
if(cljs.core.truth_(result__10819__auto___11111)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"node=","node=",1955998775,null),new cljs.core.Symbol("dd","N1","dd/N1",-87941384,null),new cljs.core.Symbol("dd","N2","dd/N2",-1812048857,null)),false),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__10818__auto___11110),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"node=","node=",1955998775,null),new cljs.core.Symbol("dd","N1","dd/N1",-87941384,null),new cljs.core.Symbol("dd","N2","dd/N2",-1812048857,null)),false),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__7666__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10818__auto___11110);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7666__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e11109){var t__10856__auto___11112 = e11109;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"node=","node=",1955998775,null),new cljs.core.Symbol("dd","N1","dd/N1",-87941384,null),new cljs.core.Symbol("dd","N2","dd/N2",-1812048857,null)),false),new cljs.core.Keyword(null,"actual","actual",107306363),t__10856__auto___11112,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}/**
 * JsArray Vector -> Vector
 *   consumes a javascript array a and Vector v and produces a vector
 *   TODO make this more robust and general
 */
akiee.node.array__GT_vec = (function akiee$node$array__GT_vec(v,a){
if((a.length === (0))){
return v;
} else {
return akiee.node.array__GT_vec.call(null,cljs.core.conj.call(null,v,a.shift()),a);
}
});
try{var values__10818__auto___11114 = (function (){var x__7666__auto__ = akiee.node.array__GT_vec.call(null,cljs.core.PersistentVector.EMPTY,[]);
return cljs.core._conj.call(null,(function (){var x__7666__auto____$1 = cljs.core.PersistentVector.EMPTY;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7666__auto____$1);
})(),x__7666__auto__);
})();
var result__10819__auto___11115 = cljs.core.apply.call(null,cljs.core._EQ_,values__10818__auto___11114);
if(cljs.core.truth_(result__10819__auto___11115)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"array->vec","array->vec",-1717144592,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"js*","js*",-1134233646,null),"[]")),cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__10818__auto___11114),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"array->vec","array->vec",-1717144592,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"js*","js*",-1134233646,null),"[]")),cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__7666__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10818__auto___11114);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7666__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e11113){var t__10856__auto___11116 = e11113;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"array->vec","array->vec",-1717144592,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"js*","js*",-1134233646,null),"[]")),cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"actual","actual",107306363),t__10856__auto___11116,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}try{var values__10818__auto___11118 = (function (){var x__7666__auto__ = akiee.node.array__GT_vec.call(null,cljs.core.PersistentVector.EMPTY,[1, 2, 3]);
return cljs.core._conj.call(null,(function (){var x__7666__auto____$1 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7666__auto____$1);
})(),x__7666__auto__);
})();
var result__10819__auto___11119 = cljs.core.apply.call(null,cljs.core._EQ_,values__10818__auto___11118);
if(cljs.core.truth_(result__10819__auto___11119)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"array->vec","array->vec",-1717144592,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"js*","js*",-1134233646,null),"[1, 2, 3]")),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__10818__auto___11118),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"array->vec","array->vec",-1717144592,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"js*","js*",-1134233646,null),"[1, 2, 3]")),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__7666__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10818__auto___11118);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7666__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e11117){var t__10856__auto___11120 = e11117;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"array->vec","array->vec",-1717144592,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"js*","js*",-1134233646,null),"[1, 2, 3]")),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__10856__auto___11120,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}/**
 * String -> RepeatInfo
 *   consumes a String s with repeat information, parses this String and produces a RepeatInfo
 */
akiee.node.__GT_repeat = (function akiee$node$__GT_repeat(s){
if(cljs.core.not.call(null,s)){
return null;
} else {
var __GT_rate = (function akiee$node$__GT_repeat_$___GT_rate(s__$1){
if(cljs.core.not.call(null,isNaN(parseInt(s__$1)))){
return parseInt(s__$1);
} else {
return (1);
}
});
var __GT_unit = (function akiee$node$__GT_repeat_$___GT_unit(s__$1){
if(cljs.core.truth_(s__$1.includes("weekdaily"))){
return "weekdaily";
} else {
if(cljs.core.truth_(s__$1.includes("daily"))){
return "daily";
} else {
if(cljs.core.truth_(s__$1.includes("weekly"))){
return "weekly";
} else {
if(cljs.core.truth_(s__$1.includes("monthly"))){
return "monthly";
} else {
if(cljs.core.truth_(s__$1.includes("yearly"))){
return "yearly";
} else {
return "";

}
}
}
}
}
});
if(cljs.core.truth_(cljs.core.not_empty.call(null,__GT_unit.call(null,s)))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rate","rate",-1428659698),__GT_rate.call(null,s),new cljs.core.Keyword(null,"unit","unit",375175175),__GT_unit.call(null,s)], null);
} else {
return null;
}
}
});
try{var values__10818__auto___11122 = (function (){var x__7666__auto__ = akiee.node.__GT_repeat.call(null,"1 daily");
return cljs.core._conj.call(null,(function (){var x__7666__auto____$1 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rate","rate",-1428659698),(1),new cljs.core.Keyword(null,"unit","unit",375175175),"daily"], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7666__auto____$1);
})(),x__7666__auto__);
})();
var result__10819__auto___11123 = cljs.core.apply.call(null,cljs.core._EQ_,values__10818__auto___11122);
if(cljs.core.truth_(result__10819__auto___11123)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"->repeat","->repeat",2003160768,null),"1 daily"),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rate","rate",-1428659698),(1),new cljs.core.Keyword(null,"unit","unit",375175175),"daily"], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__10818__auto___11122),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"->repeat","->repeat",2003160768,null),"1 daily"),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rate","rate",-1428659698),(1),new cljs.core.Keyword(null,"unit","unit",375175175),"daily"], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__7666__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10818__auto___11122);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7666__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e11121){var t__10856__auto___11124 = e11121;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"->repeat","->repeat",2003160768,null),"1 daily"),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rate","rate",-1428659698),(1),new cljs.core.Keyword(null,"unit","unit",375175175),"daily"], null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__10856__auto___11124,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}try{var values__10818__auto___11126 = (function (){var x__7666__auto__ = akiee.node.__GT_repeat.call(null,"2 weekly");
return cljs.core._conj.call(null,(function (){var x__7666__auto____$1 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rate","rate",-1428659698),(2),new cljs.core.Keyword(null,"unit","unit",375175175),"weekly"], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7666__auto____$1);
})(),x__7666__auto__);
})();
var result__10819__auto___11127 = cljs.core.apply.call(null,cljs.core._EQ_,values__10818__auto___11126);
if(cljs.core.truth_(result__10819__auto___11127)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"->repeat","->repeat",2003160768,null),"2 weekly"),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rate","rate",-1428659698),(2),new cljs.core.Keyword(null,"unit","unit",375175175),"weekly"], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__10818__auto___11126),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"->repeat","->repeat",2003160768,null),"2 weekly"),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rate","rate",-1428659698),(2),new cljs.core.Keyword(null,"unit","unit",375175175),"weekly"], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__7666__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10818__auto___11126);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7666__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e11125){var t__10856__auto___11128 = e11125;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"->repeat","->repeat",2003160768,null),"2 weekly"),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rate","rate",-1428659698),(2),new cljs.core.Keyword(null,"unit","unit",375175175),"weekly"], null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__10856__auto___11128,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}try{var values__10818__auto___11130 = (function (){var x__7666__auto__ = akiee.node.__GT_repeat.call(null,"12 monthly");
return cljs.core._conj.call(null,(function (){var x__7666__auto____$1 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rate","rate",-1428659698),(12),new cljs.core.Keyword(null,"unit","unit",375175175),"monthly"], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7666__auto____$1);
})(),x__7666__auto__);
})();
var result__10819__auto___11131 = cljs.core.apply.call(null,cljs.core._EQ_,values__10818__auto___11130);
if(cljs.core.truth_(result__10819__auto___11131)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"->repeat","->repeat",2003160768,null),"12 monthly"),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rate","rate",-1428659698),(12),new cljs.core.Keyword(null,"unit","unit",375175175),"monthly"], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__10818__auto___11130),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"->repeat","->repeat",2003160768,null),"12 monthly"),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rate","rate",-1428659698),(12),new cljs.core.Keyword(null,"unit","unit",375175175),"monthly"], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__7666__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10818__auto___11130);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7666__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e11129){var t__10856__auto___11132 = e11129;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"->repeat","->repeat",2003160768,null),"12 monthly"),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rate","rate",-1428659698),(12),new cljs.core.Keyword(null,"unit","unit",375175175),"monthly"], null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__10856__auto___11132,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}try{var values__10818__auto___11134 = (function (){var x__7666__auto__ = akiee.node.__GT_repeat.call(null,"01 yearly");
return cljs.core._conj.call(null,(function (){var x__7666__auto____$1 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rate","rate",-1428659698),(1),new cljs.core.Keyword(null,"unit","unit",375175175),"yearly"], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7666__auto____$1);
})(),x__7666__auto__);
})();
var result__10819__auto___11135 = cljs.core.apply.call(null,cljs.core._EQ_,values__10818__auto___11134);
if(cljs.core.truth_(result__10819__auto___11135)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"->repeat","->repeat",2003160768,null),"01 yearly"),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rate","rate",-1428659698),(1),new cljs.core.Keyword(null,"unit","unit",375175175),"yearly"], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__10818__auto___11134),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"->repeat","->repeat",2003160768,null),"01 yearly"),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rate","rate",-1428659698),(1),new cljs.core.Keyword(null,"unit","unit",375175175),"yearly"], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__7666__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10818__auto___11134);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7666__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e11133){var t__10856__auto___11136 = e11133;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"->repeat","->repeat",2003160768,null),"01 yearly"),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rate","rate",-1428659698),(1),new cljs.core.Keyword(null,"unit","unit",375175175),"yearly"], null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__10856__auto___11136,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}try{var values__10818__auto___11138 = (function (){var x__7666__auto__ = akiee.node.__GT_repeat.call(null,"1 weekdaily");
return cljs.core._conj.call(null,(function (){var x__7666__auto____$1 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rate","rate",-1428659698),(1),new cljs.core.Keyword(null,"unit","unit",375175175),"weekdaily"], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7666__auto____$1);
})(),x__7666__auto__);
})();
var result__10819__auto___11139 = cljs.core.apply.call(null,cljs.core._EQ_,values__10818__auto___11138);
if(cljs.core.truth_(result__10819__auto___11139)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"->repeat","->repeat",2003160768,null),"1 weekdaily"),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rate","rate",-1428659698),(1),new cljs.core.Keyword(null,"unit","unit",375175175),"weekdaily"], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__10818__auto___11138),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"->repeat","->repeat",2003160768,null),"1 weekdaily"),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rate","rate",-1428659698),(1),new cljs.core.Keyword(null,"unit","unit",375175175),"weekdaily"], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__7666__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10818__auto___11138);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7666__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e11137){var t__10856__auto___11140 = e11137;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"->repeat","->repeat",2003160768,null),"1 weekdaily"),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rate","rate",-1428659698),(1),new cljs.core.Keyword(null,"unit","unit",375175175),"weekdaily"], null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__10856__auto___11140,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}try{var values__10818__auto___11142 = (function (){var x__7666__auto__ = akiee.node.__GT_repeat.call(null,"1 daily,weekdaily");
return cljs.core._conj.call(null,(function (){var x__7666__auto____$1 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rate","rate",-1428659698),(1),new cljs.core.Keyword(null,"unit","unit",375175175),"weekdaily"], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7666__auto____$1);
})(),x__7666__auto__);
})();
var result__10819__auto___11143 = cljs.core.apply.call(null,cljs.core._EQ_,values__10818__auto___11142);
if(cljs.core.truth_(result__10819__auto___11143)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"->repeat","->repeat",2003160768,null),"1 daily,weekdaily"),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rate","rate",-1428659698),(1),new cljs.core.Keyword(null,"unit","unit",375175175),"weekdaily"], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__10818__auto___11142),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"->repeat","->repeat",2003160768,null),"1 daily,weekdaily"),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rate","rate",-1428659698),(1),new cljs.core.Keyword(null,"unit","unit",375175175),"weekdaily"], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__7666__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10818__auto___11142);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7666__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e11141){var t__10856__auto___11144 = e11141;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"->repeat","->repeat",2003160768,null),"1 daily,weekdaily"),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rate","rate",-1428659698),(1),new cljs.core.Keyword(null,"unit","unit",375175175),"weekdaily"], null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__10856__auto___11144,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}/**
 * JsNode -> Node
 *   consumes a javascript org-node (object) jn and produces a node
 *   TODO make this more robust and general
 */
akiee.node.jsnode__GT_node = (function akiee$node$jsnode__GT_node(jn){
var rank = (jn["rank"]);
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"headline","headline",-157157727),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"rank","rank",-1706728502),new cljs.core.Keyword(null,"drawer","drawer",-1346127858),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"priority","priority",1431093715),new cljs.core.Keyword(null,"todo","todo",-1046442570),new cljs.core.Keyword(null,"scheduled","scheduled",553898551),new cljs.core.Keyword(null,"repeat","repeat",832692087),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"deadline","deadline",628964572),new cljs.core.Keyword(null,"fin","fin",712246207)],[cljs.core.PersistentArrayMap.EMPTY,cljs.core.js__GT_clj.call(null,cljs.core.js_keys.call(null,(jn["tags"]))),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((jn["headline"]))].join(''),(jn["key"]),((cljs.core.not_EQ_.call(null,rank,null))?(rank | (0)):null),cljs.core.PersistentArrayMap.EMPTY,null,(jn["level"]),null,(jn["todo"]),(jn["scheduled"]),akiee.node.__GT_repeat.call(null,(jn["repeat"])),(jn["tag"]),((((cljs.core.count.call(null,clojure.string.trim.call(null,(jn["body"]))) > (0))) && (cljs.core.not_EQ_.call(null,(jn["body"]),"\n")))?clojure.string.trim.call(null,(jn["body"])):null),(jn["deadline"]),(jn["fin"])]);
});
try{var values__10818__auto___11146 = (function (){var x__7666__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(akiee.node.jsnode__GT_node.call(null,akiee.datadefinitions.jsN1));
return cljs.core._conj.call(null,(function (){var x__7666__auto____$1 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(akiee.datadefinitions.N1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7666__auto____$1);
})(),x__7666__auto__);
})();
var result__10819__auto___11147 = cljs.core.apply.call(null,cljs.core._EQ_,values__10818__auto___11146);
if(cljs.core.truth_(result__10819__auto___11147)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.list(new cljs.core.Symbol(null,"jsnode->node","jsnode->node",-125593250,null),new cljs.core.Symbol("dd","jsN1","dd/jsN1",652893777,null))),cljs.core.list(new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Symbol("dd","N1","dd/N1",-87941384,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__10818__auto___11146),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.list(new cljs.core.Symbol(null,"jsnode->node","jsnode->node",-125593250,null),new cljs.core.Symbol("dd","jsN1","dd/jsN1",652893777,null))),cljs.core.list(new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Symbol("dd","N1","dd/N1",-87941384,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__7666__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10818__auto___11146);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7666__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e11145){var t__10856__auto___11148 = e11145;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.list(new cljs.core.Symbol(null,"jsnode->node","jsnode->node",-125593250,null),new cljs.core.Symbol("dd","jsN1","dd/jsN1",652893777,null))),cljs.core.list(new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Symbol("dd","N1","dd/N1",-87941384,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__10856__auto___11148,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}/**
 * TaskState String String -> Node
 *   Consumes a TaskState ts a headline hl, a project pro, a Rank r;
 *   creates a node
 */
akiee.node.__GT_node = (function akiee$node$__GT_node(ts,hl,pro,r){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"headline","headline",-157157727),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"rank","rank",-1706728502),new cljs.core.Keyword(null,"drawer","drawer",-1346127858),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"priority","priority",1431093715),new cljs.core.Keyword(null,"project","project",1124394579),new cljs.core.Keyword(null,"todo","todo",-1046442570),new cljs.core.Keyword(null,"scheduled","scheduled",553898551),new cljs.core.Keyword(null,"repeat","repeat",832692087),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"deadline","deadline",628964572),new cljs.core.Keyword(null,"fin","fin",712246207)],[cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentVector.EMPTY,hl,akiee.node.__GT_key.call(null),r,cljs.core.PersistentArrayMap.EMPTY,null,(2),null,pro,ts,null,null,null,"",null,null]);
});
try{var values__10818__auto___11150 = (function (){var x__7666__auto__ = akiee.node.__GT_node.call(null,akiee.constants.TODO,"Test Headline","Inbox",(10));
return cljs.core._conj.call(null,(function (){var x__7666__auto____$1 = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"headline","headline",-157157727),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"rank","rank",-1706728502),new cljs.core.Keyword(null,"drawer","drawer",-1346127858),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"priority","priority",1431093715),new cljs.core.Keyword(null,"project","project",1124394579),new cljs.core.Keyword(null,"todo","todo",-1046442570),new cljs.core.Keyword(null,"scheduled","scheduled",553898551),new cljs.core.Keyword(null,"repeat","repeat",832692087),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"deadline","deadline",628964572),new cljs.core.Keyword(null,"fin","fin",712246207)],[cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentVector.EMPTY,"Test Headline",null,(10),cljs.core.PersistentArrayMap.EMPTY,null,(2),null,"Inbox",akiee.constants.TODO,null,null,null,"",null,null]);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7666__auto____$1);
})(),x__7666__auto__);
})();
var result__10819__auto___11151 = cljs.core.apply.call(null,akiee.node.node_EQ_,values__10818__auto___11150);
if(cljs.core.truth_(result__10819__auto___11151)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"node=","node=",1955998775,null),cljs.core.list(new cljs.core.Symbol(null,"->node","->node",-1437985821,null),new cljs.core.Symbol(null,"TODO","TODO",1116736382,null),"Test Headline","Inbox",(10)),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"headline","headline",-157157727),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"rank","rank",-1706728502),new cljs.core.Keyword(null,"drawer","drawer",-1346127858),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"priority","priority",1431093715),new cljs.core.Keyword(null,"project","project",1124394579),new cljs.core.Keyword(null,"todo","todo",-1046442570),new cljs.core.Keyword(null,"scheduled","scheduled",553898551),new cljs.core.Keyword(null,"repeat","repeat",832692087),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"deadline","deadline",628964572),new cljs.core.Keyword(null,"fin","fin",712246207)],[cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentVector.EMPTY,"Test Headline",null,(10),cljs.core.PersistentArrayMap.EMPTY,null,(2),null,"Inbox",new cljs.core.Symbol(null,"TODO","TODO",1116736382,null),null,null,null,"",null,null])),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,akiee.node.node_EQ_,values__10818__auto___11150),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"node=","node=",1955998775,null),cljs.core.list(new cljs.core.Symbol(null,"->node","->node",-1437985821,null),new cljs.core.Symbol(null,"TODO","TODO",1116736382,null),"Test Headline","Inbox",(10)),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"headline","headline",-157157727),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"rank","rank",-1706728502),new cljs.core.Keyword(null,"drawer","drawer",-1346127858),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"priority","priority",1431093715),new cljs.core.Keyword(null,"project","project",1124394579),new cljs.core.Keyword(null,"todo","todo",-1046442570),new cljs.core.Keyword(null,"scheduled","scheduled",553898551),new cljs.core.Keyword(null,"repeat","repeat",832692087),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"deadline","deadline",628964572),new cljs.core.Keyword(null,"fin","fin",712246207)],[cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentVector.EMPTY,"Test Headline",null,(10),cljs.core.PersistentArrayMap.EMPTY,null,(2),null,"Inbox",new cljs.core.Symbol(null,"TODO","TODO",1116736382,null),null,null,null,"",null,null])),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__7666__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"node=","node=",1955998775,null),values__10818__auto___11150);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7666__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e11149){var t__10856__auto___11152 = e11149;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"node=","node=",1955998775,null),cljs.core.list(new cljs.core.Symbol(null,"->node","->node",-1437985821,null),new cljs.core.Symbol(null,"TODO","TODO",1116736382,null),"Test Headline","Inbox",(10)),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"headline","headline",-157157727),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"rank","rank",-1706728502),new cljs.core.Keyword(null,"drawer","drawer",-1346127858),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"priority","priority",1431093715),new cljs.core.Keyword(null,"project","project",1124394579),new cljs.core.Keyword(null,"todo","todo",-1046442570),new cljs.core.Keyword(null,"scheduled","scheduled",553898551),new cljs.core.Keyword(null,"repeat","repeat",832692087),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"deadline","deadline",628964572),new cljs.core.Keyword(null,"fin","fin",712246207)],[cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentVector.EMPTY,"Test Headline",null,(10),cljs.core.PersistentArrayMap.EMPTY,null,(2),null,"Inbox",new cljs.core.Symbol(null,"TODO","TODO",1116736382,null),null,null,null,"",null,null])),new cljs.core.Keyword(null,"actual","actual",107306363),t__10856__auto___11152,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}/**
 * ListOfNodes Node String -> String
 *   Consumes a lon, a Node n and a project name pr returns the project of n
 */
akiee.node.project = (function akiee$node$project(lon,n){
akiee.node.project_helper = (function akiee$node$project_$_project_helper(lon__$1,n__$1,pr){
while(true){
if((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,lon__$1)),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(n__$1))) || (cljs.core.not.call(null,cljs.core.first.call(null,lon__$1)))){
return pr;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,lon__$1)),(1))){
var G__11153 = cljs.core.rest.call(null,lon__$1);
var G__11154 = n__$1;
var G__11155 = new cljs.core.Keyword(null,"headline","headline",-157157727).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,lon__$1));
lon__$1 = G__11153;
n__$1 = G__11154;
pr = G__11155;
continue;
} else {
var G__11156 = cljs.core.rest.call(null,lon__$1);
var G__11157 = n__$1;
var G__11158 = pr;
lon__$1 = G__11156;
n__$1 = G__11157;
pr = G__11158;
continue;

}
}
break;
}
});

return akiee.node.project_helper.call(null,lon,n,"Inbox");
});
akiee.node.lon = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),akiee.node.__GT_key.call(null),new cljs.core.Keyword(null,"headline","headline",-157157727),"head 1",new cljs.core.Keyword(null,"level","level",1290497552),(1)], null),akiee.node.__GT_node.call(null,"TODO","Task 1","head 1",(1)),akiee.node.__GT_node.call(null,"TODO","Task 2","head 1",(2)),akiee.node.__GT_node.call(null,"TODO","Task 3","head 1",(3)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),akiee.node.__GT_key.call(null),new cljs.core.Keyword(null,"headline","headline",-157157727),"head 2",new cljs.core.Keyword(null,"level","level",1290497552),(1)], null),akiee.node.__GT_node.call(null,"TODO","Task 4","head 2",(4)),akiee.node.__GT_node.call(null,"TODO","Task 5","head 2",(5)),akiee.node.__GT_node.call(null,"TODO","Task 6","head 2",(6))], null);
try{var values__10818__auto___11160 = (function (){var x__7666__auto__ = akiee.node.lon;
return cljs.core._conj.call(null,(function (){var x__7666__auto____$1 = cljs.core.get.call(null,akiee.node.lon,(1));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7666__auto____$1);
})(),x__7666__auto__);
})();
var result__10819__auto___11161 = cljs.core.apply.call(null,akiee.node.project,values__10818__auto___11160);
if(cljs.core.truth_(result__10819__auto___11161)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"lon","lon",-2132367332,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"lon","lon",-2132367332,null),(1))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,akiee.node.project,values__10818__auto___11160),new cljs.core.Keyword(null,"message","message",-406056002),"head 1"], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"lon","lon",-2132367332,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"lon","lon",-2132367332,null),(1))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__7666__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"project","project",-1530041190,null),values__10818__auto___11160);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7666__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),"head 1"], null));
}

}catch (e11159){var t__10856__auto___11162 = e11159;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"lon","lon",-2132367332,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"lon","lon",-2132367332,null),(1))),new cljs.core.Keyword(null,"actual","actual",107306363),t__10856__auto___11162,new cljs.core.Keyword(null,"message","message",-406056002),"head 1"], null));
}try{var values__10818__auto___11164 = (function (){var x__7666__auto__ = akiee.node.lon;
return cljs.core._conj.call(null,(function (){var x__7666__auto____$1 = cljs.core.get.call(null,akiee.node.lon,(2));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7666__auto____$1);
})(),x__7666__auto__);
})();
var result__10819__auto___11165 = cljs.core.apply.call(null,akiee.node.project,values__10818__auto___11164);
if(cljs.core.truth_(result__10819__auto___11165)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"lon","lon",-2132367332,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"lon","lon",-2132367332,null),(2))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,akiee.node.project,values__10818__auto___11164),new cljs.core.Keyword(null,"message","message",-406056002),"head 1"], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"lon","lon",-2132367332,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"lon","lon",-2132367332,null),(2))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__7666__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"project","project",-1530041190,null),values__10818__auto___11164);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7666__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),"head 1"], null));
}

}catch (e11163){var t__10856__auto___11166 = e11163;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"lon","lon",-2132367332,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"lon","lon",-2132367332,null),(2))),new cljs.core.Keyword(null,"actual","actual",107306363),t__10856__auto___11166,new cljs.core.Keyword(null,"message","message",-406056002),"head 1"], null));
}try{var values__10818__auto___11168 = (function (){var x__7666__auto__ = akiee.node.lon;
return cljs.core._conj.call(null,(function (){var x__7666__auto____$1 = cljs.core.get.call(null,akiee.node.lon,(3));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7666__auto____$1);
})(),x__7666__auto__);
})();
var result__10819__auto___11169 = cljs.core.apply.call(null,akiee.node.project,values__10818__auto___11168);
if(cljs.core.truth_(result__10819__auto___11169)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"lon","lon",-2132367332,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"lon","lon",-2132367332,null),(3))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,akiee.node.project,values__10818__auto___11168),new cljs.core.Keyword(null,"message","message",-406056002),"head 1"], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"lon","lon",-2132367332,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"lon","lon",-2132367332,null),(3))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__7666__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"project","project",-1530041190,null),values__10818__auto___11168);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7666__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),"head 1"], null));
}

}catch (e11167){var t__10856__auto___11170 = e11167;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"lon","lon",-2132367332,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"lon","lon",-2132367332,null),(3))),new cljs.core.Keyword(null,"actual","actual",107306363),t__10856__auto___11170,new cljs.core.Keyword(null,"message","message",-406056002),"head 1"], null));
}try{var values__10818__auto___11172 = (function (){var x__7666__auto__ = akiee.node.lon;
return cljs.core._conj.call(null,(function (){var x__7666__auto____$1 = cljs.core.get.call(null,akiee.node.lon,(5));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7666__auto____$1);
})(),x__7666__auto__);
})();
var result__10819__auto___11173 = cljs.core.apply.call(null,akiee.node.project,values__10818__auto___11172);
if(cljs.core.truth_(result__10819__auto___11173)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"lon","lon",-2132367332,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"lon","lon",-2132367332,null),(5))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,akiee.node.project,values__10818__auto___11172),new cljs.core.Keyword(null,"message","message",-406056002),"head 2"], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"lon","lon",-2132367332,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"lon","lon",-2132367332,null),(5))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__7666__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"project","project",-1530041190,null),values__10818__auto___11172);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7666__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),"head 2"], null));
}

}catch (e11171){var t__10856__auto___11174 = e11171;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"lon","lon",-2132367332,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"lon","lon",-2132367332,null),(5))),new cljs.core.Keyword(null,"actual","actual",107306363),t__10856__auto___11174,new cljs.core.Keyword(null,"message","message",-406056002),"head 2"], null));
}try{var values__10818__auto___11176 = (function (){var x__7666__auto__ = akiee.node.lon;
return cljs.core._conj.call(null,(function (){var x__7666__auto____$1 = cljs.core.get.call(null,akiee.node.lon,(6));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7666__auto____$1);
})(),x__7666__auto__);
})();
var result__10819__auto___11177 = cljs.core.apply.call(null,akiee.node.project,values__10818__auto___11176);
if(cljs.core.truth_(result__10819__auto___11177)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"lon","lon",-2132367332,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"lon","lon",-2132367332,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,akiee.node.project,values__10818__auto___11176),new cljs.core.Keyword(null,"message","message",-406056002),"head 2"], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"lon","lon",-2132367332,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"lon","lon",-2132367332,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__7666__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"project","project",-1530041190,null),values__10818__auto___11176);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7666__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),"head 2"], null));
}

}catch (e11175){var t__10856__auto___11178 = e11175;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"lon","lon",-2132367332,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"lon","lon",-2132367332,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),t__10856__auto___11178,new cljs.core.Keyword(null,"message","message",-406056002),"head 2"], null));
}try{var values__10818__auto___11180 = (function (){var x__7666__auto__ = akiee.node.lon;
return cljs.core._conj.call(null,(function (){var x__7666__auto____$1 = cljs.core.get.call(null,akiee.node.lon,(7));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7666__auto____$1);
})(),x__7666__auto__);
})();
var result__10819__auto___11181 = cljs.core.apply.call(null,akiee.node.project,values__10818__auto___11180);
if(cljs.core.truth_(result__10819__auto___11181)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"lon","lon",-2132367332,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"lon","lon",-2132367332,null),(7))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,akiee.node.project,values__10818__auto___11180),new cljs.core.Keyword(null,"message","message",-406056002),"head 2"], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"lon","lon",-2132367332,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"lon","lon",-2132367332,null),(7))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__7666__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"project","project",-1530041190,null),values__10818__auto___11180);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7666__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),"head 2"], null));
}

}catch (e11179){var t__10856__auto___11182 = e11179;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"lon","lon",-2132367332,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"lon","lon",-2132367332,null),(7))),new cljs.core.Keyword(null,"actual","actual",107306363),t__10856__auto___11182,new cljs.core.Keyword(null,"message","message",-406056002),"head 2"], null));
}/**
 * String -> ListOfNodes
 * consumes a task file markdown string and produces a list of nodes
 *   TODO find way to test, without :key
 */
akiee.node.__GT_nodes_from_md = (function akiee$node$__GT_nodes_from_md(md){
var nodes_array = akiee.node.parse_file.call(null,md);
var lon_sin_pro = cljs.core.map.call(null,akiee.node.jsnode__GT_node,akiee.node.array__GT_vec.call(null,cljs.core.PersistentVector.EMPTY,nodes_array));
return cljs.core.map.call(null,((function (nodes_array,lon_sin_pro){
return (function (x){
return cljs.core.assoc.call(null,x,new cljs.core.Keyword(null,"project","project",1124394579),akiee.node.project.call(null,lon_sin_pro,x));
});})(nodes_array,lon_sin_pro))
,lon_sin_pro);
});
/**
 * String -> ListOfNodes
 *   consumes the path p to the task file and produces a list of nodes
 *   TODO find way to test, without :key
 */
akiee.node.__GT_nodes = (function akiee$node$__GT_nodes(p){
return akiee.node.__GT_nodes_from_md.call(null,akiee.fileoperations.load_task_file.call(null,p));
});
/**
 * Date -> String
 *   consumes a clojurescript date and produces a org-mode timestamp
 */
akiee.node.__GT_timestamp = (function akiee$node$__GT_timestamp(d){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(d.getFullYear()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(d.getMonth())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((d.getMonth() + (1)))].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(d.getDate())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(d.getDate())].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(d.getDay())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,akiee.node.week,d.getDay()))].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(">")].join('');
});
akiee.node.lon__GT_md = (function akiee$node$lon__GT_md(lon){
if(cljs.core.empty_QMARK_.call(null,lon)){
return "";
} else {
var n = cljs.core.first.call(null,lon);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(n),(1)))?"# ":"## ")),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(new cljs.core.Keyword(null,"todo","todo",-1046442570).cljs$core$IFn$_invoke$arity$1(n))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"todo","todo",-1046442570).cljs$core$IFn$_invoke$arity$1(n)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" ")].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.trim.call(null,new cljs.core.Keyword(null,"headline","headline",-157157727).cljs$core$IFn$_invoke$arity$1(n))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.not_empty.call(null,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(n)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(" :"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,":",new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(n))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.not_empty.call(null,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(n)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(n)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n")].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(new cljs.core.Keyword(null,"rank","rank",-1706728502).cljs$core$IFn$_invoke$arity$1(n))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("RANK: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"rank","rank",-1706728502).cljs$core$IFn$_invoke$arity$1(n)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n")].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(new cljs.core.Keyword(null,"repeat","repeat",832692087).cljs$core$IFn$_invoke$arity$1(n))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("REPEAT: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"rate","rate",-1428659698).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"repeat","repeat",832692087).cljs$core$IFn$_invoke$arity$1(n))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"unit","unit",375175175).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"repeat","repeat",832692087).cljs$core$IFn$_invoke$arity$1(n))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n")].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(new cljs.core.Keyword(null,"scheduled","scheduled",553898551).cljs$core$IFn$_invoke$arity$1(n))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("SCHEDULED: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(akiee.node.__GT_timestamp.call(null,new cljs.core.Keyword(null,"scheduled","scheduled",553898551).cljs$core$IFn$_invoke$arity$1(n))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n")].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(new cljs.core.Keyword(null,"deadline","deadline",628964572).cljs$core$IFn$_invoke$arity$1(n))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("DEADLINE: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(akiee.node.__GT_timestamp.call(null,new cljs.core.Keyword(null,"deadline","deadline",628964572).cljs$core$IFn$_invoke$arity$1(n))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n")].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(new cljs.core.Keyword(null,"fin","fin",712246207).cljs$core$IFn$_invoke$arity$1(n))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FIN: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(akiee.node.__GT_timestamp.call(null,new cljs.core.Keyword(null,"fin","fin",712246207).cljs$core$IFn$_invoke$arity$1(n))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n")].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(akiee.node.lon__GT_md.call(null,cljs.core.rest.call(null,lon)))].join('');
}
});
try{var values__10818__auto___11184 = (function (){var x__7666__auto__ = akiee.node.lon__GT_md.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [akiee.node.__GT_node.call(null,akiee.constants.TODO,"Ueberschrift","Inbox",(1))], null));
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"## TODO Ueberschrift\nRANK: 1\n"),x__7666__auto__);
})();
var result__10819__auto___11185 = cljs.core.apply.call(null,cljs.core._EQ_,values__10818__auto___11184);
if(cljs.core.truth_(result__10819__auto___11185)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"lon->md","lon->md",1109904943,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"->node","->node",-1437985821,null),new cljs.core.Symbol(null,"TODO","TODO",1116736382,null),"Ueberschrift","Inbox",(1))], null)),"## TODO Ueberschrift\nRANK: 1\n"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__10818__auto___11184),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"lon->md","lon->md",1109904943,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"->node","->node",-1437985821,null),new cljs.core.Symbol(null,"TODO","TODO",1116736382,null),"Ueberschrift","Inbox",(1))], null)),"## TODO Ueberschrift\nRANK: 1\n"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__7666__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10818__auto___11184);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7666__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e11183){var t__10856__auto___11186 = e11183;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"lon->md","lon->md",1109904943,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"->node","->node",-1437985821,null),new cljs.core.Symbol(null,"TODO","TODO",1116736382,null),"Ueberschrift","Inbox",(1))], null)),"## TODO Ueberschrift\nRANK: 1\n"),new cljs.core.Keyword(null,"actual","actual",107306363),t__10856__auto___11186,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}/**
 * Node Node -> Boolean
 *   Determens if Node n1 has a higher Rank than Node n2
 */
akiee.node.higher_rank_QMARK_ = (function akiee$node$higher_rank_QMARK_(n1,n2){
if((n2 == null)){
return true;
} else {
if((!((n2 == null))) && ((n1 == null))){
return false;
} else {
if((n2 < n1)){
return false;
} else {
return true;

}
}
}
});
/**
 * Date Date -> Boolean
 * Determens if Node n1 has a higher Rank than Node n2
 */
akiee.node.newer_date_QMARK_ = (function akiee$node$newer_date_QMARK_(n1,n2){
if((n2 == null)){
return true;
} else {
if((!((n2 == null))) && ((n1 == null))){
return false;
} else {
if((n1 > n2)){
return true;
} else {
return false;

}
}
}
});
/**
 * Node -> String
 *   Consumes a Node n and produces the comma seperated String based on the n's tags
 */
akiee.node.tags_string = (function akiee$node$tags_string(n){
if(cljs.core.truth_(cljs.core.not_empty.call(null,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(n)))){
return clojure.string.join.call(null,", ",new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(n));
} else {
return "";
}
});
try{var values__10818__auto___11188 = (function (){var x__7666__auto__ = akiee.node.tags_string.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"headline","headline",-157157727),"node 1",new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.PersistentVector.EMPTY], null));
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,""),x__7666__auto__);
})();
var result__10819__auto___11189 = cljs.core.apply.call(null,cljs.core._EQ_,values__10818__auto___11188);
if(cljs.core.truth_(result__10819__auto___11189)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"tags-string","tags-string",904232211,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"headline","headline",-157157727),"node 1",new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.PersistentVector.EMPTY], null)),""),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__10818__auto___11188),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"tags-string","tags-string",904232211,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"headline","headline",-157157727),"node 1",new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.PersistentVector.EMPTY], null)),""),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__7666__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10818__auto___11188);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7666__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e11187){var t__10856__auto___11190 = e11187;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"tags-string","tags-string",904232211,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"headline","headline",-157157727),"node 1",new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.PersistentVector.EMPTY], null)),""),new cljs.core.Keyword(null,"actual","actual",107306363),t__10856__auto___11190,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}try{var values__10818__auto___11192 = (function (){var x__7666__auto__ = akiee.node.tags_string.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"headline","headline",-157157727),"node 2",new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["tag1","tag2","tag3"], null)], null));
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"tag1, tag2, tag3"),x__7666__auto__);
})();
var result__10819__auto___11193 = cljs.core.apply.call(null,cljs.core._EQ_,values__10818__auto___11192);
if(cljs.core.truth_(result__10819__auto___11193)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"tags-string","tags-string",904232211,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"headline","headline",-157157727),"node 2",new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["tag1","tag2","tag3"], null)], null)),"tag1, tag2, tag3"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__10818__auto___11192),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"tags-string","tags-string",904232211,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"headline","headline",-157157727),"node 2",new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["tag1","tag2","tag3"], null)], null)),"tag1, tag2, tag3"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__7666__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10818__auto___11192);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7666__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e11191){var t__10856__auto___11194 = e11191;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"tags-string","tags-string",904232211,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"headline","headline",-157157727),"node 2",new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["tag1","tag2","tag3"], null)], null)),"tag1, tag2, tag3"),new cljs.core.Keyword(null,"actual","actual",107306363),t__10856__auto___11194,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}/**
 * Node -> String
 *   Consumes a Node n and produces the Repeat String based on the n's RepeatInfo
 */
akiee.node.reps_string = (function akiee$node$reps_string(n){
if(cljs.core.truth_(new cljs.core.Keyword(null,"unit","unit",375175175).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"repeat","repeat",832692087).cljs$core$IFn$_invoke$arity$1(n)))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"rate","rate",-1428659698).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"repeat","repeat",832692087).cljs$core$IFn$_invoke$arity$1(n))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"unit","unit",375175175).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"repeat","repeat",832692087).cljs$core$IFn$_invoke$arity$1(n)))].join('');
} else {
return "";
}
});
akiee.node.n1 = new cljs.core.Keyword(null,"rank","rank",-1706728502).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"headline","headline",-157157727),"Test-Node 1",new cljs.core.Keyword(null,"rank","rank",-1706728502),(0)], null));
akiee.node.n2 = new cljs.core.Keyword(null,"rank","rank",-1706728502).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"headline","headline",-157157727),"Test-Node 2",new cljs.core.Keyword(null,"rank","rank",-1706728502),(5)], null));
akiee.node.n3 = new cljs.core.Keyword(null,"rank","rank",-1706728502).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"headline","headline",-157157727),"Test-Node 3",new cljs.core.Keyword(null,"rank","rank",-1706728502),(11)], null));
akiee.node.n4 = new cljs.core.Keyword(null,"rank","rank",-1706728502).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"headline","headline",-157157727),"Test-Node 11",new cljs.core.Keyword(null,"rank","rank",-1706728502),null], null));
try{var values__10818__auto___11196 = (function (){var x__7666__auto__ = akiee.node.higher_rank_QMARK_.call(null,akiee.node.n2,akiee.node.n1);
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,false),x__7666__auto__);
})();
var result__10819__auto___11197 = cljs.core.apply.call(null,cljs.core._EQ_,values__10818__auto___11196);
if(cljs.core.truth_(result__10819__auto___11197)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"higher-rank?","higher-rank?",1555217005,null),new cljs.core.Symbol(null,"n2","n2",-1172545453,null),new cljs.core.Symbol(null,"n1","n1",-47149660,null)),false),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__10818__auto___11196),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"higher-rank?","higher-rank?",1555217005,null),new cljs.core.Symbol(null,"n2","n2",-1172545453,null),new cljs.core.Symbol(null,"n1","n1",-47149660,null)),false),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__7666__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10818__auto___11196);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7666__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e11195){var t__10856__auto___11198 = e11195;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"higher-rank?","higher-rank?",1555217005,null),new cljs.core.Symbol(null,"n2","n2",-1172545453,null),new cljs.core.Symbol(null,"n1","n1",-47149660,null)),false),new cljs.core.Keyword(null,"actual","actual",107306363),t__10856__auto___11198,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}try{var values__10818__auto___11200 = (function (){var x__7666__auto__ = akiee.node.higher_rank_QMARK_.call(null,akiee.node.n1,akiee.node.n2);
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,true),x__7666__auto__);
})();
var result__10819__auto___11201 = cljs.core.apply.call(null,cljs.core._EQ_,values__10818__auto___11200);
if(cljs.core.truth_(result__10819__auto___11201)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"higher-rank?","higher-rank?",1555217005,null),new cljs.core.Symbol(null,"n1","n1",-47149660,null),new cljs.core.Symbol(null,"n2","n2",-1172545453,null)),true),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__10818__auto___11200),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"higher-rank?","higher-rank?",1555217005,null),new cljs.core.Symbol(null,"n1","n1",-47149660,null),new cljs.core.Symbol(null,"n2","n2",-1172545453,null)),true),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__7666__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10818__auto___11200);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7666__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e11199){var t__10856__auto___11202 = e11199;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"higher-rank?","higher-rank?",1555217005,null),new cljs.core.Symbol(null,"n1","n1",-47149660,null),new cljs.core.Symbol(null,"n2","n2",-1172545453,null)),true),new cljs.core.Keyword(null,"actual","actual",107306363),t__10856__auto___11202,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}try{var values__10818__auto___11204 = (function (){var x__7666__auto__ = akiee.node.higher_rank_QMARK_.call(null,akiee.node.n3,akiee.node.n1);
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,false),x__7666__auto__);
})();
var result__10819__auto___11205 = cljs.core.apply.call(null,cljs.core._EQ_,values__10818__auto___11204);
if(cljs.core.truth_(result__10819__auto___11205)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"higher-rank?","higher-rank?",1555217005,null),new cljs.core.Symbol(null,"n3","n3",-317220469,null),new cljs.core.Symbol(null,"n1","n1",-47149660,null)),false),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__10818__auto___11204),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"higher-rank?","higher-rank?",1555217005,null),new cljs.core.Symbol(null,"n3","n3",-317220469,null),new cljs.core.Symbol(null,"n1","n1",-47149660,null)),false),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__7666__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10818__auto___11204);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7666__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e11203){var t__10856__auto___11206 = e11203;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"higher-rank?","higher-rank?",1555217005,null),new cljs.core.Symbol(null,"n3","n3",-317220469,null),new cljs.core.Symbol(null,"n1","n1",-47149660,null)),false),new cljs.core.Keyword(null,"actual","actual",107306363),t__10856__auto___11206,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}try{var values__10818__auto___11208 = (function (){var x__7666__auto__ = akiee.node.higher_rank_QMARK_.call(null,akiee.node.n1,akiee.node.n3);
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,true),x__7666__auto__);
})();
var result__10819__auto___11209 = cljs.core.apply.call(null,cljs.core._EQ_,values__10818__auto___11208);
if(cljs.core.truth_(result__10819__auto___11209)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"higher-rank?","higher-rank?",1555217005,null),new cljs.core.Symbol(null,"n1","n1",-47149660,null),new cljs.core.Symbol(null,"n3","n3",-317220469,null)),true),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__10818__auto___11208),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"higher-rank?","higher-rank?",1555217005,null),new cljs.core.Symbol(null,"n1","n1",-47149660,null),new cljs.core.Symbol(null,"n3","n3",-317220469,null)),true),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__7666__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10818__auto___11208);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7666__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e11207){var t__10856__auto___11210 = e11207;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"higher-rank?","higher-rank?",1555217005,null),new cljs.core.Symbol(null,"n1","n1",-47149660,null),new cljs.core.Symbol(null,"n3","n3",-317220469,null)),true),new cljs.core.Keyword(null,"actual","actual",107306363),t__10856__auto___11210,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}try{var values__10818__auto___11212 = (function (){var x__7666__auto__ = akiee.node.higher_rank_QMARK_.call(null,akiee.node.n1,akiee.node.n1);
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,true),x__7666__auto__);
})();
var result__10819__auto___11213 = cljs.core.apply.call(null,cljs.core._EQ_,values__10818__auto___11212);
if(cljs.core.truth_(result__10819__auto___11213)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"higher-rank?","higher-rank?",1555217005,null),new cljs.core.Symbol(null,"n1","n1",-47149660,null),new cljs.core.Symbol(null,"n1","n1",-47149660,null)),true),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__10818__auto___11212),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"higher-rank?","higher-rank?",1555217005,null),new cljs.core.Symbol(null,"n1","n1",-47149660,null),new cljs.core.Symbol(null,"n1","n1",-47149660,null)),true),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__7666__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10818__auto___11212);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7666__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e11211){var t__10856__auto___11214 = e11211;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"higher-rank?","higher-rank?",1555217005,null),new cljs.core.Symbol(null,"n1","n1",-47149660,null),new cljs.core.Symbol(null,"n1","n1",-47149660,null)),true),new cljs.core.Keyword(null,"actual","actual",107306363),t__10856__auto___11214,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}try{var values__10818__auto___11216 = (function (){var x__7666__auto__ = akiee.node.higher_rank_QMARK_.call(null,akiee.node.n3,akiee.node.n3);
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,true),x__7666__auto__);
})();
var result__10819__auto___11217 = cljs.core.apply.call(null,cljs.core._EQ_,values__10818__auto___11216);
if(cljs.core.truth_(result__10819__auto___11217)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"higher-rank?","higher-rank?",1555217005,null),new cljs.core.Symbol(null,"n3","n3",-317220469,null),new cljs.core.Symbol(null,"n3","n3",-317220469,null)),true),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__10818__auto___11216),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"higher-rank?","higher-rank?",1555217005,null),new cljs.core.Symbol(null,"n3","n3",-317220469,null),new cljs.core.Symbol(null,"n3","n3",-317220469,null)),true),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__7666__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10818__auto___11216);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7666__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e11215){var t__10856__auto___11218 = e11215;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"higher-rank?","higher-rank?",1555217005,null),new cljs.core.Symbol(null,"n3","n3",-317220469,null),new cljs.core.Symbol(null,"n3","n3",-317220469,null)),true),new cljs.core.Keyword(null,"actual","actual",107306363),t__10856__auto___11218,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}try{var values__10818__auto___11220 = (function (){var x__7666__auto__ = akiee.node.higher_rank_QMARK_.call(null,akiee.node.n1,akiee.node.n4);
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,true),x__7666__auto__);
})();
var result__10819__auto___11221 = cljs.core.apply.call(null,cljs.core._EQ_,values__10818__auto___11220);
if(cljs.core.truth_(result__10819__auto___11221)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"higher-rank?","higher-rank?",1555217005,null),new cljs.core.Symbol(null,"n1","n1",-47149660,null),new cljs.core.Symbol(null,"n4","n4",-1711386416,null)),true),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__10818__auto___11220),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"higher-rank?","higher-rank?",1555217005,null),new cljs.core.Symbol(null,"n1","n1",-47149660,null),new cljs.core.Symbol(null,"n4","n4",-1711386416,null)),true),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__7666__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10818__auto___11220);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7666__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e11219){var t__10856__auto___11222 = e11219;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"higher-rank?","higher-rank?",1555217005,null),new cljs.core.Symbol(null,"n1","n1",-47149660,null),new cljs.core.Symbol(null,"n4","n4",-1711386416,null)),true),new cljs.core.Keyword(null,"actual","actual",107306363),t__10856__auto___11222,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}try{var values__10818__auto___11224 = (function (){var x__7666__auto__ = akiee.node.higher_rank_QMARK_.call(null,akiee.node.n4,akiee.node.n1);
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,false),x__7666__auto__);
})();
var result__10819__auto___11225 = cljs.core.apply.call(null,cljs.core._EQ_,values__10818__auto___11224);
if(cljs.core.truth_(result__10819__auto___11225)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"higher-rank?","higher-rank?",1555217005,null),new cljs.core.Symbol(null,"n4","n4",-1711386416,null),new cljs.core.Symbol(null,"n1","n1",-47149660,null)),false),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__10818__auto___11224),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"higher-rank?","higher-rank?",1555217005,null),new cljs.core.Symbol(null,"n4","n4",-1711386416,null),new cljs.core.Symbol(null,"n1","n1",-47149660,null)),false),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__7666__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10818__auto___11224);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7666__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e11223){var t__10856__auto___11226 = e11223;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"higher-rank?","higher-rank?",1555217005,null),new cljs.core.Symbol(null,"n4","n4",-1711386416,null),new cljs.core.Symbol(null,"n1","n1",-47149660,null)),false),new cljs.core.Keyword(null,"actual","actual",107306363),t__10856__auto___11226,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}