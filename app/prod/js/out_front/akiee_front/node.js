// Compiled by ClojureScript 1.9.495 {:elide-asserts true}
goog.provide('akiee_front.node');
goog.require('cljs.core');
goog.require('akiee_front.fileoperations');
goog.require('akiee_front.datadefinitions');
goog.require('akiee_front.constants');
goog.require('cljs.test');
goog.require('cljs.nodejs');
goog.require('clojure.string');
akiee_front.node.org = cljs.nodejs.require.call(null,"../../lib/markdown-org-mode-parser");
akiee_front.node.parse_file = akiee_front.node.org.parseBigString;
akiee_front.node.week = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"], null);
/**
 * Nil -> String
 *   Returns a unique key for new nodes
 */
akiee_front.node.__GT_key = (function akiee_front$node$__GT_key(){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.call(null,"node_"))].join('');
});
try{var values__10397__auto___10642 = cljs.core.List.EMPTY;
var result__10398__auto___10643 = cljs.core.apply.call(null,akiee_front.node.__GT_key,values__10397__auto___10642);
if(cljs.core.truth_(result__10398__auto___10643)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"->key","->key",-764907874,null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,akiee_front.node.__GT_key,values__10397__auto___10642),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"->key","->key",-764907874,null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__7666__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"->key","->key",-764907874,null),values__10397__auto___10642);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7666__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e10641){var t__10435__auto___10644 = e10641;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"->key","->key",-764907874,null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__10435__auto___10644,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}/**
 * Node Node -> Boolean
 *   Compares 2 Nodes n1 n2, the :key of the nodes is ignored,
 *   because it's random
 */
akiee_front.node.node_EQ_ = (function akiee_front$node$node_EQ_(n1,n2){
return (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(n1),new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(n2))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"headline","headline",-157157727).cljs$core$IFn$_invoke$arity$1(n1),new cljs.core.Keyword(null,"headline","headline",-157157727).cljs$core$IFn$_invoke$arity$1(n2))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(n1),new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(n2))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(n1),new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(n2))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(n1),new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(n2))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"todo","todo",-1046442570).cljs$core$IFn$_invoke$arity$1(n1),new cljs.core.Keyword(null,"todo","todo",-1046442570).cljs$core$IFn$_invoke$arity$1(n2))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(n1),new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(n2))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"scheduled","scheduled",553898551).cljs$core$IFn$_invoke$arity$1(n1),new cljs.core.Keyword(null,"scheduled","scheduled",553898551).cljs$core$IFn$_invoke$arity$1(n2))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"deadline","deadline",628964572).cljs$core$IFn$_invoke$arity$1(n1),new cljs.core.Keyword(null,"deadline","deadline",628964572).cljs$core$IFn$_invoke$arity$1(n2))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"fin","fin",712246207).cljs$core$IFn$_invoke$arity$1(n1),new cljs.core.Keyword(null,"fin","fin",712246207).cljs$core$IFn$_invoke$arity$1(n2))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"properties","properties",685819552).cljs$core$IFn$_invoke$arity$1(n1),new cljs.core.Keyword(null,"properties","properties",685819552).cljs$core$IFn$_invoke$arity$1(n2))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"drawer","drawer",-1346127858).cljs$core$IFn$_invoke$arity$1(n1),new cljs.core.Keyword(null,"drawer","drawer",-1346127858).cljs$core$IFn$_invoke$arity$1(n2))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"rank","rank",-1706728502).cljs$core$IFn$_invoke$arity$1(n1),new cljs.core.Keyword(null,"rank","rank",-1706728502).cljs$core$IFn$_invoke$arity$1(n2))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repeat","repeat",832692087).cljs$core$IFn$_invoke$arity$1(n1),new cljs.core.Keyword(null,"repeat","repeat",832692087).cljs$core$IFn$_invoke$arity$1(n2))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(n1),new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(n2)));
});
try{var values__10397__auto___10646 = (function (){var x__7666__auto__ = akiee_front.node.node_EQ_.call(null,akiee_front.datadefinitions.N1,akiee_front.datadefinitions.N1a);
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,true),x__7666__auto__);
})();
var result__10398__auto___10647 = cljs.core.apply.call(null,cljs.core._EQ_,values__10397__auto___10646);
if(cljs.core.truth_(result__10398__auto___10647)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"node=","node=",1955998775,null),new cljs.core.Symbol("dd","N1","dd/N1",-87941384,null),new cljs.core.Symbol("dd","N1a","dd/N1a",-1462437694,null)),true),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__10397__auto___10646),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"node=","node=",1955998775,null),new cljs.core.Symbol("dd","N1","dd/N1",-87941384,null),new cljs.core.Symbol("dd","N1a","dd/N1a",-1462437694,null)),true),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__7666__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10397__auto___10646);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7666__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e10645){var t__10435__auto___10648 = e10645;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"node=","node=",1955998775,null),new cljs.core.Symbol("dd","N1","dd/N1",-87941384,null),new cljs.core.Symbol("dd","N1a","dd/N1a",-1462437694,null)),true),new cljs.core.Keyword(null,"actual","actual",107306363),t__10435__auto___10648,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}try{var values__10397__auto___10650 = (function (){var x__7666__auto__ = akiee_front.node.node_EQ_.call(null,akiee_front.datadefinitions.N1,akiee_front.datadefinitions.N2);
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,false),x__7666__auto__);
})();
var result__10398__auto___10651 = cljs.core.apply.call(null,cljs.core._EQ_,values__10397__auto___10650);
if(cljs.core.truth_(result__10398__auto___10651)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"node=","node=",1955998775,null),new cljs.core.Symbol("dd","N1","dd/N1",-87941384,null),new cljs.core.Symbol("dd","N2","dd/N2",-1812048857,null)),false),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__10397__auto___10650),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"node=","node=",1955998775,null),new cljs.core.Symbol("dd","N1","dd/N1",-87941384,null),new cljs.core.Symbol("dd","N2","dd/N2",-1812048857,null)),false),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__7666__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10397__auto___10650);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7666__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e10649){var t__10435__auto___10652 = e10649;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"node=","node=",1955998775,null),new cljs.core.Symbol("dd","N1","dd/N1",-87941384,null),new cljs.core.Symbol("dd","N2","dd/N2",-1812048857,null)),false),new cljs.core.Keyword(null,"actual","actual",107306363),t__10435__auto___10652,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}/**
 * JsArray Vector -> Vector
 *   consumes a javascript array a and Vector v and produces a vector
 *   TODO make this more robust and general
 */
akiee_front.node.array__GT_vec = (function akiee_front$node$array__GT_vec(v,a){
if((a.length === (0))){
return v;
} else {
return akiee_front.node.array__GT_vec.call(null,cljs.core.conj.call(null,v,a.shift()),a);
}
});
try{var values__10397__auto___10654 = (function (){var x__7666__auto__ = akiee_front.node.array__GT_vec.call(null,cljs.core.PersistentVector.EMPTY,[]);
return cljs.core._conj.call(null,(function (){var x__7666__auto____$1 = cljs.core.PersistentVector.EMPTY;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7666__auto____$1);
})(),x__7666__auto__);
})();
var result__10398__auto___10655 = cljs.core.apply.call(null,cljs.core._EQ_,values__10397__auto___10654);
if(cljs.core.truth_(result__10398__auto___10655)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"array->vec","array->vec",-1717144592,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"js*","js*",-1134233646,null),"[]")),cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__10397__auto___10654),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"array->vec","array->vec",-1717144592,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"js*","js*",-1134233646,null),"[]")),cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__7666__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10397__auto___10654);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7666__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e10653){var t__10435__auto___10656 = e10653;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"array->vec","array->vec",-1717144592,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"js*","js*",-1134233646,null),"[]")),cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"actual","actual",107306363),t__10435__auto___10656,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}try{var values__10397__auto___10658 = (function (){var x__7666__auto__ = akiee_front.node.array__GT_vec.call(null,cljs.core.PersistentVector.EMPTY,[1, 2, 3]);
return cljs.core._conj.call(null,(function (){var x__7666__auto____$1 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7666__auto____$1);
})(),x__7666__auto__);
})();
var result__10398__auto___10659 = cljs.core.apply.call(null,cljs.core._EQ_,values__10397__auto___10658);
if(cljs.core.truth_(result__10398__auto___10659)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"array->vec","array->vec",-1717144592,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"js*","js*",-1134233646,null),"[1, 2, 3]")),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__10397__auto___10658),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"array->vec","array->vec",-1717144592,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"js*","js*",-1134233646,null),"[1, 2, 3]")),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__7666__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10397__auto___10658);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7666__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e10657){var t__10435__auto___10660 = e10657;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"array->vec","array->vec",-1717144592,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"js*","js*",-1134233646,null),"[1, 2, 3]")),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__10435__auto___10660,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}/**
 * String -> RepeatInfo
 *   consumes a String s with repeat information, parses this String and produces a RepeatInfo
 */
akiee_front.node.__GT_repeat = (function akiee_front$node$__GT_repeat(s){
if(cljs.core.not.call(null,s)){
return null;
} else {
var __GT_rate = (function akiee_front$node$__GT_repeat_$___GT_rate(s__$1){
if(cljs.core.not.call(null,isNaN(parseInt(s__$1)))){
return parseInt(s__$1);
} else {
return (1);
}
});
var __GT_unit = (function akiee_front$node$__GT_repeat_$___GT_unit(s__$1){
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
try{var values__10397__auto___10662 = (function (){var x__7666__auto__ = akiee_front.node.__GT_repeat.call(null,"1 daily");
return cljs.core._conj.call(null,(function (){var x__7666__auto____$1 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rate","rate",-1428659698),(1),new cljs.core.Keyword(null,"unit","unit",375175175),"daily"], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7666__auto____$1);
})(),x__7666__auto__);
})();
var result__10398__auto___10663 = cljs.core.apply.call(null,cljs.core._EQ_,values__10397__auto___10662);
if(cljs.core.truth_(result__10398__auto___10663)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"->repeat","->repeat",2003160768,null),"1 daily"),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rate","rate",-1428659698),(1),new cljs.core.Keyword(null,"unit","unit",375175175),"daily"], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__10397__auto___10662),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"->repeat","->repeat",2003160768,null),"1 daily"),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rate","rate",-1428659698),(1),new cljs.core.Keyword(null,"unit","unit",375175175),"daily"], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__7666__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10397__auto___10662);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7666__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e10661){var t__10435__auto___10664 = e10661;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"->repeat","->repeat",2003160768,null),"1 daily"),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rate","rate",-1428659698),(1),new cljs.core.Keyword(null,"unit","unit",375175175),"daily"], null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__10435__auto___10664,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}try{var values__10397__auto___10666 = (function (){var x__7666__auto__ = akiee_front.node.__GT_repeat.call(null,"2 weekly");
return cljs.core._conj.call(null,(function (){var x__7666__auto____$1 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rate","rate",-1428659698),(2),new cljs.core.Keyword(null,"unit","unit",375175175),"weekly"], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7666__auto____$1);
})(),x__7666__auto__);
})();
var result__10398__auto___10667 = cljs.core.apply.call(null,cljs.core._EQ_,values__10397__auto___10666);
if(cljs.core.truth_(result__10398__auto___10667)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"->repeat","->repeat",2003160768,null),"2 weekly"),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rate","rate",-1428659698),(2),new cljs.core.Keyword(null,"unit","unit",375175175),"weekly"], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__10397__auto___10666),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"->repeat","->repeat",2003160768,null),"2 weekly"),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rate","rate",-1428659698),(2),new cljs.core.Keyword(null,"unit","unit",375175175),"weekly"], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__7666__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10397__auto___10666);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7666__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e10665){var t__10435__auto___10668 = e10665;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"->repeat","->repeat",2003160768,null),"2 weekly"),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rate","rate",-1428659698),(2),new cljs.core.Keyword(null,"unit","unit",375175175),"weekly"], null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__10435__auto___10668,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}try{var values__10397__auto___10670 = (function (){var x__7666__auto__ = akiee_front.node.__GT_repeat.call(null,"12 monthly");
return cljs.core._conj.call(null,(function (){var x__7666__auto____$1 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rate","rate",-1428659698),(12),new cljs.core.Keyword(null,"unit","unit",375175175),"monthly"], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7666__auto____$1);
})(),x__7666__auto__);
})();
var result__10398__auto___10671 = cljs.core.apply.call(null,cljs.core._EQ_,values__10397__auto___10670);
if(cljs.core.truth_(result__10398__auto___10671)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"->repeat","->repeat",2003160768,null),"12 monthly"),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rate","rate",-1428659698),(12),new cljs.core.Keyword(null,"unit","unit",375175175),"monthly"], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__10397__auto___10670),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"->repeat","->repeat",2003160768,null),"12 monthly"),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rate","rate",-1428659698),(12),new cljs.core.Keyword(null,"unit","unit",375175175),"monthly"], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__7666__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10397__auto___10670);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7666__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e10669){var t__10435__auto___10672 = e10669;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"->repeat","->repeat",2003160768,null),"12 monthly"),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rate","rate",-1428659698),(12),new cljs.core.Keyword(null,"unit","unit",375175175),"monthly"], null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__10435__auto___10672,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}try{var values__10397__auto___10674 = (function (){var x__7666__auto__ = akiee_front.node.__GT_repeat.call(null,"01 yearly");
return cljs.core._conj.call(null,(function (){var x__7666__auto____$1 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rate","rate",-1428659698),(1),new cljs.core.Keyword(null,"unit","unit",375175175),"yearly"], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7666__auto____$1);
})(),x__7666__auto__);
})();
var result__10398__auto___10675 = cljs.core.apply.call(null,cljs.core._EQ_,values__10397__auto___10674);
if(cljs.core.truth_(result__10398__auto___10675)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"->repeat","->repeat",2003160768,null),"01 yearly"),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rate","rate",-1428659698),(1),new cljs.core.Keyword(null,"unit","unit",375175175),"yearly"], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__10397__auto___10674),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"->repeat","->repeat",2003160768,null),"01 yearly"),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rate","rate",-1428659698),(1),new cljs.core.Keyword(null,"unit","unit",375175175),"yearly"], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__7666__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10397__auto___10674);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7666__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e10673){var t__10435__auto___10676 = e10673;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"->repeat","->repeat",2003160768,null),"01 yearly"),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rate","rate",-1428659698),(1),new cljs.core.Keyword(null,"unit","unit",375175175),"yearly"], null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__10435__auto___10676,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}try{var values__10397__auto___10678 = (function (){var x__7666__auto__ = akiee_front.node.__GT_repeat.call(null,"1 weekdaily");
return cljs.core._conj.call(null,(function (){var x__7666__auto____$1 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rate","rate",-1428659698),(1),new cljs.core.Keyword(null,"unit","unit",375175175),"weekdaily"], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7666__auto____$1);
})(),x__7666__auto__);
})();
var result__10398__auto___10679 = cljs.core.apply.call(null,cljs.core._EQ_,values__10397__auto___10678);
if(cljs.core.truth_(result__10398__auto___10679)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"->repeat","->repeat",2003160768,null),"1 weekdaily"),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rate","rate",-1428659698),(1),new cljs.core.Keyword(null,"unit","unit",375175175),"weekdaily"], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__10397__auto___10678),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"->repeat","->repeat",2003160768,null),"1 weekdaily"),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rate","rate",-1428659698),(1),new cljs.core.Keyword(null,"unit","unit",375175175),"weekdaily"], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__7666__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10397__auto___10678);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7666__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e10677){var t__10435__auto___10680 = e10677;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"->repeat","->repeat",2003160768,null),"1 weekdaily"),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rate","rate",-1428659698),(1),new cljs.core.Keyword(null,"unit","unit",375175175),"weekdaily"], null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__10435__auto___10680,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}try{var values__10397__auto___10682 = (function (){var x__7666__auto__ = akiee_front.node.__GT_repeat.call(null,"1 daily,weekdaily");
return cljs.core._conj.call(null,(function (){var x__7666__auto____$1 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rate","rate",-1428659698),(1),new cljs.core.Keyword(null,"unit","unit",375175175),"weekdaily"], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7666__auto____$1);
})(),x__7666__auto__);
})();
var result__10398__auto___10683 = cljs.core.apply.call(null,cljs.core._EQ_,values__10397__auto___10682);
if(cljs.core.truth_(result__10398__auto___10683)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"->repeat","->repeat",2003160768,null),"1 daily,weekdaily"),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rate","rate",-1428659698),(1),new cljs.core.Keyword(null,"unit","unit",375175175),"weekdaily"], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__10397__auto___10682),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"->repeat","->repeat",2003160768,null),"1 daily,weekdaily"),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rate","rate",-1428659698),(1),new cljs.core.Keyword(null,"unit","unit",375175175),"weekdaily"], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__7666__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10397__auto___10682);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7666__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e10681){var t__10435__auto___10684 = e10681;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"->repeat","->repeat",2003160768,null),"1 daily,weekdaily"),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rate","rate",-1428659698),(1),new cljs.core.Keyword(null,"unit","unit",375175175),"weekdaily"], null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__10435__auto___10684,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}/**
 * JsNode -> Node
 *   consumes a javascript org-node (object) jn and produces a node
 *   TODO make this more robust and general
 */
akiee_front.node.jsnode__GT_node = (function akiee_front$node$jsnode__GT_node(jn){
var rank = (jn["rank"]);
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"headline","headline",-157157727),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"rank","rank",-1706728502),new cljs.core.Keyword(null,"drawer","drawer",-1346127858),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"priority","priority",1431093715),new cljs.core.Keyword(null,"todo","todo",-1046442570),new cljs.core.Keyword(null,"scheduled","scheduled",553898551),new cljs.core.Keyword(null,"repeat","repeat",832692087),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"deadline","deadline",628964572),new cljs.core.Keyword(null,"fin","fin",712246207)],[cljs.core.PersistentArrayMap.EMPTY,cljs.core.js__GT_clj.call(null,cljs.core.js_keys.call(null,(jn["tags"]))),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((jn["headline"]))].join(''),(jn["key"]),((cljs.core.not_EQ_.call(null,rank,null))?(rank | (0)):null),cljs.core.PersistentArrayMap.EMPTY,null,(jn["level"]),null,(jn["todo"]),(jn["scheduled"]),akiee_front.node.__GT_repeat.call(null,(jn["repeat"])),(jn["tag"]),((((cljs.core.count.call(null,clojure.string.trim.call(null,(jn["body"]))) > (0))) && (cljs.core.not_EQ_.call(null,(jn["body"]),"\n")))?clojure.string.trim.call(null,(jn["body"])):null),(jn["deadline"]),(jn["fin"])]);
});
try{var values__10397__auto___10686 = (function (){var x__7666__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(akiee_front.node.jsnode__GT_node.call(null,akiee_front.datadefinitions.jsN1));
return cljs.core._conj.call(null,(function (){var x__7666__auto____$1 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(akiee_front.datadefinitions.N1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7666__auto____$1);
})(),x__7666__auto__);
})();
var result__10398__auto___10687 = cljs.core.apply.call(null,cljs.core._EQ_,values__10397__auto___10686);
if(cljs.core.truth_(result__10398__auto___10687)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.list(new cljs.core.Symbol(null,"jsnode->node","jsnode->node",-125593250,null),new cljs.core.Symbol("dd","jsN1","dd/jsN1",652893777,null))),cljs.core.list(new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Symbol("dd","N1","dd/N1",-87941384,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__10397__auto___10686),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.list(new cljs.core.Symbol(null,"jsnode->node","jsnode->node",-125593250,null),new cljs.core.Symbol("dd","jsN1","dd/jsN1",652893777,null))),cljs.core.list(new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Symbol("dd","N1","dd/N1",-87941384,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__7666__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10397__auto___10686);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7666__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e10685){var t__10435__auto___10688 = e10685;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.list(new cljs.core.Symbol(null,"jsnode->node","jsnode->node",-125593250,null),new cljs.core.Symbol("dd","jsN1","dd/jsN1",652893777,null))),cljs.core.list(new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Symbol("dd","N1","dd/N1",-87941384,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__10435__auto___10688,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}/**
 * TaskState String String -> Node
 *   Consumes a TaskState ts a headline hl, a project pro, a Rank r;
 *   creates a node
 */
akiee_front.node.__GT_node = (function akiee_front$node$__GT_node(ts,hl,pro,r){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"headline","headline",-157157727),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"rank","rank",-1706728502),new cljs.core.Keyword(null,"drawer","drawer",-1346127858),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"priority","priority",1431093715),new cljs.core.Keyword(null,"project","project",1124394579),new cljs.core.Keyword(null,"todo","todo",-1046442570),new cljs.core.Keyword(null,"scheduled","scheduled",553898551),new cljs.core.Keyword(null,"repeat","repeat",832692087),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"deadline","deadline",628964572),new cljs.core.Keyword(null,"fin","fin",712246207)],[cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentVector.EMPTY,hl,akiee_front.node.__GT_key.call(null),r,cljs.core.PersistentArrayMap.EMPTY,null,(2),null,pro,ts,null,null,null,"",null,null]);
});
try{var values__10397__auto___10690 = (function (){var x__7666__auto__ = akiee_front.node.__GT_node.call(null,akiee_front.constants.TODO,"Test Headline","Inbox",(10));
return cljs.core._conj.call(null,(function (){var x__7666__auto____$1 = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"headline","headline",-157157727),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"rank","rank",-1706728502),new cljs.core.Keyword(null,"drawer","drawer",-1346127858),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"priority","priority",1431093715),new cljs.core.Keyword(null,"project","project",1124394579),new cljs.core.Keyword(null,"todo","todo",-1046442570),new cljs.core.Keyword(null,"scheduled","scheduled",553898551),new cljs.core.Keyword(null,"repeat","repeat",832692087),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"deadline","deadline",628964572),new cljs.core.Keyword(null,"fin","fin",712246207)],[cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentVector.EMPTY,"Test Headline",null,(10),cljs.core.PersistentArrayMap.EMPTY,null,(2),null,"Inbox",akiee_front.constants.TODO,null,null,null,"",null,null]);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7666__auto____$1);
})(),x__7666__auto__);
})();
var result__10398__auto___10691 = cljs.core.apply.call(null,akiee_front.node.node_EQ_,values__10397__auto___10690);
if(cljs.core.truth_(result__10398__auto___10691)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"node=","node=",1955998775,null),cljs.core.list(new cljs.core.Symbol(null,"->node","->node",-1437985821,null),new cljs.core.Symbol(null,"TODO","TODO",1116736382,null),"Test Headline","Inbox",(10)),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"headline","headline",-157157727),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"rank","rank",-1706728502),new cljs.core.Keyword(null,"drawer","drawer",-1346127858),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"priority","priority",1431093715),new cljs.core.Keyword(null,"project","project",1124394579),new cljs.core.Keyword(null,"todo","todo",-1046442570),new cljs.core.Keyword(null,"scheduled","scheduled",553898551),new cljs.core.Keyword(null,"repeat","repeat",832692087),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"deadline","deadline",628964572),new cljs.core.Keyword(null,"fin","fin",712246207)],[cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentVector.EMPTY,"Test Headline",null,(10),cljs.core.PersistentArrayMap.EMPTY,null,(2),null,"Inbox",new cljs.core.Symbol(null,"TODO","TODO",1116736382,null),null,null,null,"",null,null])),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,akiee_front.node.node_EQ_,values__10397__auto___10690),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"node=","node=",1955998775,null),cljs.core.list(new cljs.core.Symbol(null,"->node","->node",-1437985821,null),new cljs.core.Symbol(null,"TODO","TODO",1116736382,null),"Test Headline","Inbox",(10)),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"headline","headline",-157157727),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"rank","rank",-1706728502),new cljs.core.Keyword(null,"drawer","drawer",-1346127858),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"priority","priority",1431093715),new cljs.core.Keyword(null,"project","project",1124394579),new cljs.core.Keyword(null,"todo","todo",-1046442570),new cljs.core.Keyword(null,"scheduled","scheduled",553898551),new cljs.core.Keyword(null,"repeat","repeat",832692087),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"deadline","deadline",628964572),new cljs.core.Keyword(null,"fin","fin",712246207)],[cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentVector.EMPTY,"Test Headline",null,(10),cljs.core.PersistentArrayMap.EMPTY,null,(2),null,"Inbox",new cljs.core.Symbol(null,"TODO","TODO",1116736382,null),null,null,null,"",null,null])),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__7666__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"node=","node=",1955998775,null),values__10397__auto___10690);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7666__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e10689){var t__10435__auto___10692 = e10689;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"node=","node=",1955998775,null),cljs.core.list(new cljs.core.Symbol(null,"->node","->node",-1437985821,null),new cljs.core.Symbol(null,"TODO","TODO",1116736382,null),"Test Headline","Inbox",(10)),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"headline","headline",-157157727),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"rank","rank",-1706728502),new cljs.core.Keyword(null,"drawer","drawer",-1346127858),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"priority","priority",1431093715),new cljs.core.Keyword(null,"project","project",1124394579),new cljs.core.Keyword(null,"todo","todo",-1046442570),new cljs.core.Keyword(null,"scheduled","scheduled",553898551),new cljs.core.Keyword(null,"repeat","repeat",832692087),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"deadline","deadline",628964572),new cljs.core.Keyword(null,"fin","fin",712246207)],[cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentVector.EMPTY,"Test Headline",null,(10),cljs.core.PersistentArrayMap.EMPTY,null,(2),null,"Inbox",new cljs.core.Symbol(null,"TODO","TODO",1116736382,null),null,null,null,"",null,null])),new cljs.core.Keyword(null,"actual","actual",107306363),t__10435__auto___10692,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}/**
 * ListOfNodes Node String -> String
 *   Consumes a lon, a Node n and a project name pr returns the project of n
 */
akiee_front.node.project = (function akiee_front$node$project(lon,n){
akiee_front.node.project_helper = (function akiee_front$node$project_$_project_helper(lon__$1,n__$1,pr){
while(true){
if((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,lon__$1)),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(n__$1))) || (cljs.core.not.call(null,cljs.core.first.call(null,lon__$1)))){
return pr;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,lon__$1)),(1))){
var G__10693 = cljs.core.rest.call(null,lon__$1);
var G__10694 = n__$1;
var G__10695 = new cljs.core.Keyword(null,"headline","headline",-157157727).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,lon__$1));
lon__$1 = G__10693;
n__$1 = G__10694;
pr = G__10695;
continue;
} else {
var G__10696 = cljs.core.rest.call(null,lon__$1);
var G__10697 = n__$1;
var G__10698 = pr;
lon__$1 = G__10696;
n__$1 = G__10697;
pr = G__10698;
continue;

}
}
break;
}
});

return akiee_front.node.project_helper.call(null,lon,n,"Inbox");
});
akiee_front.node.lon = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),akiee_front.node.__GT_key.call(null),new cljs.core.Keyword(null,"headline","headline",-157157727),"head 1",new cljs.core.Keyword(null,"level","level",1290497552),(1)], null),akiee_front.node.__GT_node.call(null,"TODO","Task 1","head 1",(1)),akiee_front.node.__GT_node.call(null,"TODO","Task 2","head 1",(2)),akiee_front.node.__GT_node.call(null,"TODO","Task 3","head 1",(3)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),akiee_front.node.__GT_key.call(null),new cljs.core.Keyword(null,"headline","headline",-157157727),"head 2",new cljs.core.Keyword(null,"level","level",1290497552),(1)], null),akiee_front.node.__GT_node.call(null,"TODO","Task 4","head 2",(4)),akiee_front.node.__GT_node.call(null,"TODO","Task 5","head 2",(5)),akiee_front.node.__GT_node.call(null,"TODO","Task 6","head 2",(6))], null);
try{var values__10397__auto___10700 = (function (){var x__7666__auto__ = akiee_front.node.lon;
return cljs.core._conj.call(null,(function (){var x__7666__auto____$1 = cljs.core.get.call(null,akiee_front.node.lon,(1));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7666__auto____$1);
})(),x__7666__auto__);
})();
var result__10398__auto___10701 = cljs.core.apply.call(null,akiee_front.node.project,values__10397__auto___10700);
if(cljs.core.truth_(result__10398__auto___10701)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"lon","lon",-2132367332,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"lon","lon",-2132367332,null),(1))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,akiee_front.node.project,values__10397__auto___10700),new cljs.core.Keyword(null,"message","message",-406056002),"head 1"], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"lon","lon",-2132367332,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"lon","lon",-2132367332,null),(1))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__7666__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"project","project",-1530041190,null),values__10397__auto___10700);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7666__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),"head 1"], null));
}

}catch (e10699){var t__10435__auto___10702 = e10699;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"lon","lon",-2132367332,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"lon","lon",-2132367332,null),(1))),new cljs.core.Keyword(null,"actual","actual",107306363),t__10435__auto___10702,new cljs.core.Keyword(null,"message","message",-406056002),"head 1"], null));
}try{var values__10397__auto___10704 = (function (){var x__7666__auto__ = akiee_front.node.lon;
return cljs.core._conj.call(null,(function (){var x__7666__auto____$1 = cljs.core.get.call(null,akiee_front.node.lon,(2));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7666__auto____$1);
})(),x__7666__auto__);
})();
var result__10398__auto___10705 = cljs.core.apply.call(null,akiee_front.node.project,values__10397__auto___10704);
if(cljs.core.truth_(result__10398__auto___10705)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"lon","lon",-2132367332,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"lon","lon",-2132367332,null),(2))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,akiee_front.node.project,values__10397__auto___10704),new cljs.core.Keyword(null,"message","message",-406056002),"head 1"], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"lon","lon",-2132367332,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"lon","lon",-2132367332,null),(2))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__7666__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"project","project",-1530041190,null),values__10397__auto___10704);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7666__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),"head 1"], null));
}

}catch (e10703){var t__10435__auto___10706 = e10703;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"lon","lon",-2132367332,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"lon","lon",-2132367332,null),(2))),new cljs.core.Keyword(null,"actual","actual",107306363),t__10435__auto___10706,new cljs.core.Keyword(null,"message","message",-406056002),"head 1"], null));
}try{var values__10397__auto___10708 = (function (){var x__7666__auto__ = akiee_front.node.lon;
return cljs.core._conj.call(null,(function (){var x__7666__auto____$1 = cljs.core.get.call(null,akiee_front.node.lon,(3));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7666__auto____$1);
})(),x__7666__auto__);
})();
var result__10398__auto___10709 = cljs.core.apply.call(null,akiee_front.node.project,values__10397__auto___10708);
if(cljs.core.truth_(result__10398__auto___10709)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"lon","lon",-2132367332,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"lon","lon",-2132367332,null),(3))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,akiee_front.node.project,values__10397__auto___10708),new cljs.core.Keyword(null,"message","message",-406056002),"head 1"], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"lon","lon",-2132367332,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"lon","lon",-2132367332,null),(3))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__7666__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"project","project",-1530041190,null),values__10397__auto___10708);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7666__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),"head 1"], null));
}

}catch (e10707){var t__10435__auto___10710 = e10707;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"lon","lon",-2132367332,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"lon","lon",-2132367332,null),(3))),new cljs.core.Keyword(null,"actual","actual",107306363),t__10435__auto___10710,new cljs.core.Keyword(null,"message","message",-406056002),"head 1"], null));
}try{var values__10397__auto___10712 = (function (){var x__7666__auto__ = akiee_front.node.lon;
return cljs.core._conj.call(null,(function (){var x__7666__auto____$1 = cljs.core.get.call(null,akiee_front.node.lon,(5));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7666__auto____$1);
})(),x__7666__auto__);
})();
var result__10398__auto___10713 = cljs.core.apply.call(null,akiee_front.node.project,values__10397__auto___10712);
if(cljs.core.truth_(result__10398__auto___10713)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"lon","lon",-2132367332,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"lon","lon",-2132367332,null),(5))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,akiee_front.node.project,values__10397__auto___10712),new cljs.core.Keyword(null,"message","message",-406056002),"head 2"], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"lon","lon",-2132367332,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"lon","lon",-2132367332,null),(5))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__7666__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"project","project",-1530041190,null),values__10397__auto___10712);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7666__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),"head 2"], null));
}

}catch (e10711){var t__10435__auto___10714 = e10711;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"lon","lon",-2132367332,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"lon","lon",-2132367332,null),(5))),new cljs.core.Keyword(null,"actual","actual",107306363),t__10435__auto___10714,new cljs.core.Keyword(null,"message","message",-406056002),"head 2"], null));
}try{var values__10397__auto___10716 = (function (){var x__7666__auto__ = akiee_front.node.lon;
return cljs.core._conj.call(null,(function (){var x__7666__auto____$1 = cljs.core.get.call(null,akiee_front.node.lon,(6));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7666__auto____$1);
})(),x__7666__auto__);
})();
var result__10398__auto___10717 = cljs.core.apply.call(null,akiee_front.node.project,values__10397__auto___10716);
if(cljs.core.truth_(result__10398__auto___10717)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"lon","lon",-2132367332,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"lon","lon",-2132367332,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,akiee_front.node.project,values__10397__auto___10716),new cljs.core.Keyword(null,"message","message",-406056002),"head 2"], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"lon","lon",-2132367332,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"lon","lon",-2132367332,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__7666__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"project","project",-1530041190,null),values__10397__auto___10716);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7666__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),"head 2"], null));
}

}catch (e10715){var t__10435__auto___10718 = e10715;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"lon","lon",-2132367332,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"lon","lon",-2132367332,null),(6))),new cljs.core.Keyword(null,"actual","actual",107306363),t__10435__auto___10718,new cljs.core.Keyword(null,"message","message",-406056002),"head 2"], null));
}try{var values__10397__auto___10720 = (function (){var x__7666__auto__ = akiee_front.node.lon;
return cljs.core._conj.call(null,(function (){var x__7666__auto____$1 = cljs.core.get.call(null,akiee_front.node.lon,(7));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7666__auto____$1);
})(),x__7666__auto__);
})();
var result__10398__auto___10721 = cljs.core.apply.call(null,akiee_front.node.project,values__10397__auto___10720);
if(cljs.core.truth_(result__10398__auto___10721)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"lon","lon",-2132367332,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"lon","lon",-2132367332,null),(7))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,akiee_front.node.project,values__10397__auto___10720),new cljs.core.Keyword(null,"message","message",-406056002),"head 2"], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"lon","lon",-2132367332,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"lon","lon",-2132367332,null),(7))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__7666__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"project","project",-1530041190,null),values__10397__auto___10720);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7666__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),"head 2"], null));
}

}catch (e10719){var t__10435__auto___10722 = e10719;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"lon","lon",-2132367332,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"lon","lon",-2132367332,null),(7))),new cljs.core.Keyword(null,"actual","actual",107306363),t__10435__auto___10722,new cljs.core.Keyword(null,"message","message",-406056002),"head 2"], null));
}/**
 * String -> ListOfNodes
 * consumes a task file markdown string and produces a list of nodes
 *   TODO find way to test, without :key
 */
akiee_front.node.__GT_nodes_from_md = (function akiee_front$node$__GT_nodes_from_md(md){
var nodes_array = akiee_front.node.parse_file.call(null,md);
var lon_sin_pro = cljs.core.map.call(null,akiee_front.node.jsnode__GT_node,akiee_front.node.array__GT_vec.call(null,cljs.core.PersistentVector.EMPTY,nodes_array));
return cljs.core.map.call(null,((function (nodes_array,lon_sin_pro){
return (function (x){
return cljs.core.assoc.call(null,x,new cljs.core.Keyword(null,"project","project",1124394579),akiee_front.node.project.call(null,lon_sin_pro,x));
});})(nodes_array,lon_sin_pro))
,lon_sin_pro);
});
/**
 * String -> ListOfNodes
 *   consumes the path p to the task file and produces a list of nodes
 *   TODO find way to test, without :key
 */
akiee_front.node.__GT_nodes = (function akiee_front$node$__GT_nodes(p){
return akiee_front.node.__GT_nodes_from_md.call(null,akiee_front.fileoperations.load_task_file.call(null,p));
});
/**
 * Date -> String
 *   consumes a clojurescript date and produces a org-mode timestamp
 */
akiee_front.node.__GT_timestamp = (function akiee_front$node$__GT_timestamp(d){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(d.getFullYear()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(d.getMonth())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((d.getMonth() + (1)))].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(d.getDate())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(d.getDate())].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(d.getDay())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,akiee_front.node.week,d.getDay()))].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(">")].join('');
});
akiee_front.node.lon__GT_md = (function akiee_front$node$lon__GT_md(lon){
if(cljs.core.empty_QMARK_.call(null,lon)){
return "";
} else {
var n = cljs.core.first.call(null,lon);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(n),(1)))?"# ":"## ")),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(new cljs.core.Keyword(null,"todo","todo",-1046442570).cljs$core$IFn$_invoke$arity$1(n))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"todo","todo",-1046442570).cljs$core$IFn$_invoke$arity$1(n)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" ")].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.trim.call(null,new cljs.core.Keyword(null,"headline","headline",-157157727).cljs$core$IFn$_invoke$arity$1(n))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.not_empty.call(null,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(n)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(" :"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,":",new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(n))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.not_empty.call(null,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(n)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(n)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n")].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(new cljs.core.Keyword(null,"rank","rank",-1706728502).cljs$core$IFn$_invoke$arity$1(n))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("RANK: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"rank","rank",-1706728502).cljs$core$IFn$_invoke$arity$1(n)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n")].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(new cljs.core.Keyword(null,"repeat","repeat",832692087).cljs$core$IFn$_invoke$arity$1(n))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("REPEAT: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"rate","rate",-1428659698).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"repeat","repeat",832692087).cljs$core$IFn$_invoke$arity$1(n))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"unit","unit",375175175).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"repeat","repeat",832692087).cljs$core$IFn$_invoke$arity$1(n))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n")].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(new cljs.core.Keyword(null,"scheduled","scheduled",553898551).cljs$core$IFn$_invoke$arity$1(n))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("SCHEDULED: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(akiee_front.node.__GT_timestamp.call(null,new cljs.core.Keyword(null,"scheduled","scheduled",553898551).cljs$core$IFn$_invoke$arity$1(n))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n")].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(new cljs.core.Keyword(null,"deadline","deadline",628964572).cljs$core$IFn$_invoke$arity$1(n))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("DEADLINE: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(akiee_front.node.__GT_timestamp.call(null,new cljs.core.Keyword(null,"deadline","deadline",628964572).cljs$core$IFn$_invoke$arity$1(n))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n")].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(new cljs.core.Keyword(null,"fin","fin",712246207).cljs$core$IFn$_invoke$arity$1(n))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FIN: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(akiee_front.node.__GT_timestamp.call(null,new cljs.core.Keyword(null,"fin","fin",712246207).cljs$core$IFn$_invoke$arity$1(n))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n")].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(akiee_front.node.lon__GT_md.call(null,cljs.core.rest.call(null,lon)))].join('');
}
});
try{var values__10397__auto___10724 = (function (){var x__7666__auto__ = akiee_front.node.lon__GT_md.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [akiee_front.node.__GT_node.call(null,akiee_front.constants.TODO,"Ueberschrift","Inbox",(1))], null));
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"## TODO Ueberschrift\nRANK: 1\n"),x__7666__auto__);
})();
var result__10398__auto___10725 = cljs.core.apply.call(null,cljs.core._EQ_,values__10397__auto___10724);
if(cljs.core.truth_(result__10398__auto___10725)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"lon->md","lon->md",1109904943,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"->node","->node",-1437985821,null),new cljs.core.Symbol(null,"TODO","TODO",1116736382,null),"Ueberschrift","Inbox",(1))], null)),"## TODO Ueberschrift\nRANK: 1\n"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__10397__auto___10724),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"lon->md","lon->md",1109904943,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"->node","->node",-1437985821,null),new cljs.core.Symbol(null,"TODO","TODO",1116736382,null),"Ueberschrift","Inbox",(1))], null)),"## TODO Ueberschrift\nRANK: 1\n"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__7666__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10397__auto___10724);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7666__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e10723){var t__10435__auto___10726 = e10723;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"lon->md","lon->md",1109904943,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"->node","->node",-1437985821,null),new cljs.core.Symbol(null,"TODO","TODO",1116736382,null),"Ueberschrift","Inbox",(1))], null)),"## TODO Ueberschrift\nRANK: 1\n"),new cljs.core.Keyword(null,"actual","actual",107306363),t__10435__auto___10726,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}/**
 * Node Node -> Boolean
 *   Determens if Node n1 has a higher Rank than Node n2
 */
akiee_front.node.higher_rank_QMARK_ = (function akiee_front$node$higher_rank_QMARK_(n1,n2){
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
akiee_front.node.newer_date_QMARK_ = (function akiee_front$node$newer_date_QMARK_(n1,n2){
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
akiee_front.node.tags_string = (function akiee_front$node$tags_string(n){
if(cljs.core.truth_(cljs.core.not_empty.call(null,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(n)))){
return clojure.string.join.call(null,", ",new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(n));
} else {
return "";
}
});
try{var values__10397__auto___10728 = (function (){var x__7666__auto__ = akiee_front.node.tags_string.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"headline","headline",-157157727),"node 1",new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.PersistentVector.EMPTY], null));
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,""),x__7666__auto__);
})();
var result__10398__auto___10729 = cljs.core.apply.call(null,cljs.core._EQ_,values__10397__auto___10728);
if(cljs.core.truth_(result__10398__auto___10729)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"tags-string","tags-string",904232211,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"headline","headline",-157157727),"node 1",new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.PersistentVector.EMPTY], null)),""),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__10397__auto___10728),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"tags-string","tags-string",904232211,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"headline","headline",-157157727),"node 1",new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.PersistentVector.EMPTY], null)),""),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__7666__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10397__auto___10728);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7666__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e10727){var t__10435__auto___10730 = e10727;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"tags-string","tags-string",904232211,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"headline","headline",-157157727),"node 1",new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.PersistentVector.EMPTY], null)),""),new cljs.core.Keyword(null,"actual","actual",107306363),t__10435__auto___10730,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}try{var values__10397__auto___10732 = (function (){var x__7666__auto__ = akiee_front.node.tags_string.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"headline","headline",-157157727),"node 2",new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["tag1","tag2","tag3"], null)], null));
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"tag1, tag2, tag3"),x__7666__auto__);
})();
var result__10398__auto___10733 = cljs.core.apply.call(null,cljs.core._EQ_,values__10397__auto___10732);
if(cljs.core.truth_(result__10398__auto___10733)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"tags-string","tags-string",904232211,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"headline","headline",-157157727),"node 2",new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["tag1","tag2","tag3"], null)], null)),"tag1, tag2, tag3"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__10397__auto___10732),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"tags-string","tags-string",904232211,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"headline","headline",-157157727),"node 2",new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["tag1","tag2","tag3"], null)], null)),"tag1, tag2, tag3"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__7666__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10397__auto___10732);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7666__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e10731){var t__10435__auto___10734 = e10731;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"tags-string","tags-string",904232211,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"headline","headline",-157157727),"node 2",new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["tag1","tag2","tag3"], null)], null)),"tag1, tag2, tag3"),new cljs.core.Keyword(null,"actual","actual",107306363),t__10435__auto___10734,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}/**
 * Node -> String
 *   Consumes a Node n and produces the Repeat String based on the n's RepeatInfo
 */
akiee_front.node.reps_string = (function akiee_front$node$reps_string(n){
if(cljs.core.truth_(new cljs.core.Keyword(null,"unit","unit",375175175).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"repeat","repeat",832692087).cljs$core$IFn$_invoke$arity$1(n)))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"rate","rate",-1428659698).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"repeat","repeat",832692087).cljs$core$IFn$_invoke$arity$1(n))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"unit","unit",375175175).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"repeat","repeat",832692087).cljs$core$IFn$_invoke$arity$1(n)))].join('');
} else {
return "";
}
});
akiee_front.node.n1 = new cljs.core.Keyword(null,"rank","rank",-1706728502).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"headline","headline",-157157727),"Test-Node 1",new cljs.core.Keyword(null,"rank","rank",-1706728502),(0)], null));
akiee_front.node.n2 = new cljs.core.Keyword(null,"rank","rank",-1706728502).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"headline","headline",-157157727),"Test-Node 2",new cljs.core.Keyword(null,"rank","rank",-1706728502),(5)], null));
akiee_front.node.n3 = new cljs.core.Keyword(null,"rank","rank",-1706728502).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"headline","headline",-157157727),"Test-Node 3",new cljs.core.Keyword(null,"rank","rank",-1706728502),(11)], null));
akiee_front.node.n4 = new cljs.core.Keyword(null,"rank","rank",-1706728502).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"headline","headline",-157157727),"Test-Node 11",new cljs.core.Keyword(null,"rank","rank",-1706728502),null], null));
try{var values__10397__auto___10736 = (function (){var x__7666__auto__ = akiee_front.node.higher_rank_QMARK_.call(null,akiee_front.node.n2,akiee_front.node.n1);
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,false),x__7666__auto__);
})();
var result__10398__auto___10737 = cljs.core.apply.call(null,cljs.core._EQ_,values__10397__auto___10736);
if(cljs.core.truth_(result__10398__auto___10737)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"higher-rank?","higher-rank?",1555217005,null),new cljs.core.Symbol(null,"n2","n2",-1172545453,null),new cljs.core.Symbol(null,"n1","n1",-47149660,null)),false),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__10397__auto___10736),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"higher-rank?","higher-rank?",1555217005,null),new cljs.core.Symbol(null,"n2","n2",-1172545453,null),new cljs.core.Symbol(null,"n1","n1",-47149660,null)),false),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__7666__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10397__auto___10736);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7666__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e10735){var t__10435__auto___10738 = e10735;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"higher-rank?","higher-rank?",1555217005,null),new cljs.core.Symbol(null,"n2","n2",-1172545453,null),new cljs.core.Symbol(null,"n1","n1",-47149660,null)),false),new cljs.core.Keyword(null,"actual","actual",107306363),t__10435__auto___10738,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}try{var values__10397__auto___10740 = (function (){var x__7666__auto__ = akiee_front.node.higher_rank_QMARK_.call(null,akiee_front.node.n1,akiee_front.node.n2);
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,true),x__7666__auto__);
})();
var result__10398__auto___10741 = cljs.core.apply.call(null,cljs.core._EQ_,values__10397__auto___10740);
if(cljs.core.truth_(result__10398__auto___10741)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"higher-rank?","higher-rank?",1555217005,null),new cljs.core.Symbol(null,"n1","n1",-47149660,null),new cljs.core.Symbol(null,"n2","n2",-1172545453,null)),true),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__10397__auto___10740),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"higher-rank?","higher-rank?",1555217005,null),new cljs.core.Symbol(null,"n1","n1",-47149660,null),new cljs.core.Symbol(null,"n2","n2",-1172545453,null)),true),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__7666__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10397__auto___10740);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7666__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e10739){var t__10435__auto___10742 = e10739;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"higher-rank?","higher-rank?",1555217005,null),new cljs.core.Symbol(null,"n1","n1",-47149660,null),new cljs.core.Symbol(null,"n2","n2",-1172545453,null)),true),new cljs.core.Keyword(null,"actual","actual",107306363),t__10435__auto___10742,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}try{var values__10397__auto___10744 = (function (){var x__7666__auto__ = akiee_front.node.higher_rank_QMARK_.call(null,akiee_front.node.n3,akiee_front.node.n1);
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,false),x__7666__auto__);
})();
var result__10398__auto___10745 = cljs.core.apply.call(null,cljs.core._EQ_,values__10397__auto___10744);
if(cljs.core.truth_(result__10398__auto___10745)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"higher-rank?","higher-rank?",1555217005,null),new cljs.core.Symbol(null,"n3","n3",-317220469,null),new cljs.core.Symbol(null,"n1","n1",-47149660,null)),false),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__10397__auto___10744),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"higher-rank?","higher-rank?",1555217005,null),new cljs.core.Symbol(null,"n3","n3",-317220469,null),new cljs.core.Symbol(null,"n1","n1",-47149660,null)),false),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__7666__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10397__auto___10744);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7666__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e10743){var t__10435__auto___10746 = e10743;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"higher-rank?","higher-rank?",1555217005,null),new cljs.core.Symbol(null,"n3","n3",-317220469,null),new cljs.core.Symbol(null,"n1","n1",-47149660,null)),false),new cljs.core.Keyword(null,"actual","actual",107306363),t__10435__auto___10746,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}try{var values__10397__auto___10748 = (function (){var x__7666__auto__ = akiee_front.node.higher_rank_QMARK_.call(null,akiee_front.node.n1,akiee_front.node.n3);
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,true),x__7666__auto__);
})();
var result__10398__auto___10749 = cljs.core.apply.call(null,cljs.core._EQ_,values__10397__auto___10748);
if(cljs.core.truth_(result__10398__auto___10749)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"higher-rank?","higher-rank?",1555217005,null),new cljs.core.Symbol(null,"n1","n1",-47149660,null),new cljs.core.Symbol(null,"n3","n3",-317220469,null)),true),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__10397__auto___10748),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"higher-rank?","higher-rank?",1555217005,null),new cljs.core.Symbol(null,"n1","n1",-47149660,null),new cljs.core.Symbol(null,"n3","n3",-317220469,null)),true),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__7666__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10397__auto___10748);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7666__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e10747){var t__10435__auto___10750 = e10747;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"higher-rank?","higher-rank?",1555217005,null),new cljs.core.Symbol(null,"n1","n1",-47149660,null),new cljs.core.Symbol(null,"n3","n3",-317220469,null)),true),new cljs.core.Keyword(null,"actual","actual",107306363),t__10435__auto___10750,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}try{var values__10397__auto___10752 = (function (){var x__7666__auto__ = akiee_front.node.higher_rank_QMARK_.call(null,akiee_front.node.n1,akiee_front.node.n1);
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,true),x__7666__auto__);
})();
var result__10398__auto___10753 = cljs.core.apply.call(null,cljs.core._EQ_,values__10397__auto___10752);
if(cljs.core.truth_(result__10398__auto___10753)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"higher-rank?","higher-rank?",1555217005,null),new cljs.core.Symbol(null,"n1","n1",-47149660,null),new cljs.core.Symbol(null,"n1","n1",-47149660,null)),true),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__10397__auto___10752),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"higher-rank?","higher-rank?",1555217005,null),new cljs.core.Symbol(null,"n1","n1",-47149660,null),new cljs.core.Symbol(null,"n1","n1",-47149660,null)),true),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__7666__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10397__auto___10752);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7666__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e10751){var t__10435__auto___10754 = e10751;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"higher-rank?","higher-rank?",1555217005,null),new cljs.core.Symbol(null,"n1","n1",-47149660,null),new cljs.core.Symbol(null,"n1","n1",-47149660,null)),true),new cljs.core.Keyword(null,"actual","actual",107306363),t__10435__auto___10754,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}try{var values__10397__auto___10756 = (function (){var x__7666__auto__ = akiee_front.node.higher_rank_QMARK_.call(null,akiee_front.node.n3,akiee_front.node.n3);
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,true),x__7666__auto__);
})();
var result__10398__auto___10757 = cljs.core.apply.call(null,cljs.core._EQ_,values__10397__auto___10756);
if(cljs.core.truth_(result__10398__auto___10757)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"higher-rank?","higher-rank?",1555217005,null),new cljs.core.Symbol(null,"n3","n3",-317220469,null),new cljs.core.Symbol(null,"n3","n3",-317220469,null)),true),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__10397__auto___10756),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"higher-rank?","higher-rank?",1555217005,null),new cljs.core.Symbol(null,"n3","n3",-317220469,null),new cljs.core.Symbol(null,"n3","n3",-317220469,null)),true),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__7666__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10397__auto___10756);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7666__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e10755){var t__10435__auto___10758 = e10755;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"higher-rank?","higher-rank?",1555217005,null),new cljs.core.Symbol(null,"n3","n3",-317220469,null),new cljs.core.Symbol(null,"n3","n3",-317220469,null)),true),new cljs.core.Keyword(null,"actual","actual",107306363),t__10435__auto___10758,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}try{var values__10397__auto___10760 = (function (){var x__7666__auto__ = akiee_front.node.higher_rank_QMARK_.call(null,akiee_front.node.n1,akiee_front.node.n4);
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,true),x__7666__auto__);
})();
var result__10398__auto___10761 = cljs.core.apply.call(null,cljs.core._EQ_,values__10397__auto___10760);
if(cljs.core.truth_(result__10398__auto___10761)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"higher-rank?","higher-rank?",1555217005,null),new cljs.core.Symbol(null,"n1","n1",-47149660,null),new cljs.core.Symbol(null,"n4","n4",-1711386416,null)),true),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__10397__auto___10760),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"higher-rank?","higher-rank?",1555217005,null),new cljs.core.Symbol(null,"n1","n1",-47149660,null),new cljs.core.Symbol(null,"n4","n4",-1711386416,null)),true),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__7666__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10397__auto___10760);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7666__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e10759){var t__10435__auto___10762 = e10759;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"higher-rank?","higher-rank?",1555217005,null),new cljs.core.Symbol(null,"n1","n1",-47149660,null),new cljs.core.Symbol(null,"n4","n4",-1711386416,null)),true),new cljs.core.Keyword(null,"actual","actual",107306363),t__10435__auto___10762,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}try{var values__10397__auto___10764 = (function (){var x__7666__auto__ = akiee_front.node.higher_rank_QMARK_.call(null,akiee_front.node.n4,akiee_front.node.n1);
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,false),x__7666__auto__);
})();
var result__10398__auto___10765 = cljs.core.apply.call(null,cljs.core._EQ_,values__10397__auto___10764);
if(cljs.core.truth_(result__10398__auto___10765)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"higher-rank?","higher-rank?",1555217005,null),new cljs.core.Symbol(null,"n4","n4",-1711386416,null),new cljs.core.Symbol(null,"n1","n1",-47149660,null)),false),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__10397__auto___10764),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"higher-rank?","higher-rank?",1555217005,null),new cljs.core.Symbol(null,"n4","n4",-1711386416,null),new cljs.core.Symbol(null,"n1","n1",-47149660,null)),false),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__7666__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10397__auto___10764);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7666__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e10763){var t__10435__auto___10766 = e10763;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"higher-rank?","higher-rank?",1555217005,null),new cljs.core.Symbol(null,"n4","n4",-1711386416,null),new cljs.core.Symbol(null,"n1","n1",-47149660,null)),false),new cljs.core.Keyword(null,"actual","actual",107306363),t__10435__auto___10766,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}