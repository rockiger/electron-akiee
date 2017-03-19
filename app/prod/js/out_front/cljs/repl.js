// Compiled by ClojureScript 1.9.495 {:elide-asserts true}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__14532){
var map__14557 = p__14532;
var map__14557__$1 = ((((!((map__14557 == null)))?((((map__14557.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14557.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14557):map__14557);
var m = map__14557__$1;
var n = cljs.core.get.call(null,map__14557__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__14557__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/")].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__14559_14581 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__14560_14582 = null;
var count__14561_14583 = (0);
var i__14562_14584 = (0);
while(true){
if((i__14562_14584 < count__14561_14583)){
var f_14585 = cljs.core._nth.call(null,chunk__14560_14582,i__14562_14584);
cljs.core.println.call(null,"  ",f_14585);

var G__14586 = seq__14559_14581;
var G__14587 = chunk__14560_14582;
var G__14588 = count__14561_14583;
var G__14589 = (i__14562_14584 + (1));
seq__14559_14581 = G__14586;
chunk__14560_14582 = G__14587;
count__14561_14583 = G__14588;
i__14562_14584 = G__14589;
continue;
} else {
var temp__4657__auto___14590 = cljs.core.seq.call(null,seq__14559_14581);
if(temp__4657__auto___14590){
var seq__14559_14591__$1 = temp__4657__auto___14590;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14559_14591__$1)){
var c__7643__auto___14592 = cljs.core.chunk_first.call(null,seq__14559_14591__$1);
var G__14593 = cljs.core.chunk_rest.call(null,seq__14559_14591__$1);
var G__14594 = c__7643__auto___14592;
var G__14595 = cljs.core.count.call(null,c__7643__auto___14592);
var G__14596 = (0);
seq__14559_14581 = G__14593;
chunk__14560_14582 = G__14594;
count__14561_14583 = G__14595;
i__14562_14584 = G__14596;
continue;
} else {
var f_14597 = cljs.core.first.call(null,seq__14559_14591__$1);
cljs.core.println.call(null,"  ",f_14597);

var G__14598 = cljs.core.next.call(null,seq__14559_14591__$1);
var G__14599 = null;
var G__14600 = (0);
var G__14601 = (0);
seq__14559_14581 = G__14598;
chunk__14560_14582 = G__14599;
count__14561_14583 = G__14600;
i__14562_14584 = G__14601;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_14602 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__6824__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__6824__auto__)){
return or__6824__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_14602);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_14602)))?cljs.core.second.call(null,arglists_14602):arglists_14602));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/special_forms#"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__14563_14603 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__14564_14604 = null;
var count__14565_14605 = (0);
var i__14566_14606 = (0);
while(true){
if((i__14566_14606 < count__14565_14605)){
var vec__14567_14607 = cljs.core._nth.call(null,chunk__14564_14604,i__14566_14606);
var name_14608 = cljs.core.nth.call(null,vec__14567_14607,(0),null);
var map__14570_14609 = cljs.core.nth.call(null,vec__14567_14607,(1),null);
var map__14570_14610__$1 = ((((!((map__14570_14609 == null)))?((((map__14570_14609.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14570_14609.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14570_14609):map__14570_14609);
var doc_14611 = cljs.core.get.call(null,map__14570_14610__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_14612 = cljs.core.get.call(null,map__14570_14610__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_14608);

cljs.core.println.call(null," ",arglists_14612);

if(cljs.core.truth_(doc_14611)){
cljs.core.println.call(null," ",doc_14611);
} else {
}

var G__14613 = seq__14563_14603;
var G__14614 = chunk__14564_14604;
var G__14615 = count__14565_14605;
var G__14616 = (i__14566_14606 + (1));
seq__14563_14603 = G__14613;
chunk__14564_14604 = G__14614;
count__14565_14605 = G__14615;
i__14566_14606 = G__14616;
continue;
} else {
var temp__4657__auto___14617 = cljs.core.seq.call(null,seq__14563_14603);
if(temp__4657__auto___14617){
var seq__14563_14618__$1 = temp__4657__auto___14617;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14563_14618__$1)){
var c__7643__auto___14619 = cljs.core.chunk_first.call(null,seq__14563_14618__$1);
var G__14620 = cljs.core.chunk_rest.call(null,seq__14563_14618__$1);
var G__14621 = c__7643__auto___14619;
var G__14622 = cljs.core.count.call(null,c__7643__auto___14619);
var G__14623 = (0);
seq__14563_14603 = G__14620;
chunk__14564_14604 = G__14621;
count__14565_14605 = G__14622;
i__14566_14606 = G__14623;
continue;
} else {
var vec__14572_14624 = cljs.core.first.call(null,seq__14563_14618__$1);
var name_14625 = cljs.core.nth.call(null,vec__14572_14624,(0),null);
var map__14575_14626 = cljs.core.nth.call(null,vec__14572_14624,(1),null);
var map__14575_14627__$1 = ((((!((map__14575_14626 == null)))?((((map__14575_14626.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14575_14626.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14575_14626):map__14575_14626);
var doc_14628 = cljs.core.get.call(null,map__14575_14627__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_14629 = cljs.core.get.call(null,map__14575_14627__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_14625);

cljs.core.println.call(null," ",arglists_14629);

if(cljs.core.truth_(doc_14628)){
cljs.core.println.call(null," ",doc_14628);
} else {
}

var G__14630 = cljs.core.next.call(null,seq__14563_14618__$1);
var G__14631 = null;
var G__14632 = (0);
var G__14633 = (0);
seq__14563_14603 = G__14630;
chunk__14564_14604 = G__14631;
count__14565_14605 = G__14632;
i__14566_14606 = G__14633;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__14577 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__14578 = null;
var count__14579 = (0);
var i__14580 = (0);
while(true){
if((i__14580 < count__14579)){
var role = cljs.core._nth.call(null,chunk__14578,i__14580);
var temp__4657__auto___14634__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___14634__$1)){
var spec_14635 = temp__4657__auto___14634__$1;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_14635));
} else {
}

var G__14636 = seq__14577;
var G__14637 = chunk__14578;
var G__14638 = count__14579;
var G__14639 = (i__14580 + (1));
seq__14577 = G__14636;
chunk__14578 = G__14637;
count__14579 = G__14638;
i__14580 = G__14639;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__14577);
if(temp__4657__auto____$1){
var seq__14577__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14577__$1)){
var c__7643__auto__ = cljs.core.chunk_first.call(null,seq__14577__$1);
var G__14640 = cljs.core.chunk_rest.call(null,seq__14577__$1);
var G__14641 = c__7643__auto__;
var G__14642 = cljs.core.count.call(null,c__7643__auto__);
var G__14643 = (0);
seq__14577 = G__14640;
chunk__14578 = G__14641;
count__14579 = G__14642;
i__14580 = G__14643;
continue;
} else {
var role = cljs.core.first.call(null,seq__14577__$1);
var temp__4657__auto___14644__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___14644__$2)){
var spec_14645 = temp__4657__auto___14644__$2;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_14645));
} else {
}

var G__14646 = cljs.core.next.call(null,seq__14577__$1);
var G__14647 = null;
var G__14648 = (0);
var G__14649 = (0);
seq__14577 = G__14646;
chunk__14578 = G__14647;
count__14579 = G__14648;
i__14580 = G__14649;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
