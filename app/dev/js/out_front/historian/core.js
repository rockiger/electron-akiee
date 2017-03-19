// Compiled by ClojureScript 1.9.495 {:elide-asserts true}
goog.provide('historian.core');
goog.require('cljs.core');
/**
 * The great library... store your stuff here.
 */
historian.core.alexandria = cljs.core.atom.call(null,cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY));
historian.core.get_library_atom = (function historian$core$get_library_atom(){
return cljs.core.deref.call(null,historian.core.alexandria);
});
/**
 * What will happen in the future...
 */
historian.core.nostradamus = cljs.core.atom.call(null,cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY));
historian.core.get_prophecy_atom = (function historian$core$get_prophecy_atom(){
return cljs.core.deref.call(null,historian.core.nostradamus);
});
/**
 * Who should we record?
 */
historian.core.overseer = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
historian.core.register_atom_BANG_ = (function historian$core$register_atom_BANG_(var_args){
var args27905 = [];
var len__27678__auto___27908 = arguments.length;
var i__27679__auto___27909 = (0);
while(true){
if((i__27679__auto___27909 < len__27678__auto___27908)){
args27905.push((arguments[i__27679__auto___27909]));

var G__27910 = (i__27679__auto___27909 + (1));
i__27679__auto___27909 = G__27910;
continue;
} else {
}
break;
}

var G__27907 = args27905.length;
switch (G__27907) {
case 2:
return historian.core.register_atom_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return historian.core.register_atom_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args27905.length)].join('')));

}
});

historian.core.register_atom_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (atom,k){
return historian.core.register_atom_BANG_.call(null,atom,k,null);
});

historian.core.register_atom_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (atom,k,passive_QMARK_){
return cljs.core.swap_BANG_.call(null,historian.core.overseer,cljs.core.assoc,k,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"atom","atom",-397043653),atom,new cljs.core.Keyword(null,"passive?","passive?",241346064),passive_QMARK_], null));
});

historian.core.register_atom_BANG_.cljs$lang$maxFixedArity = 3;

historian.core.de_register_atom_BANG_ = (function historian$core$de_register_atom_BANG_(k){
return cljs.core.swap_BANG_.call(null,historian.core.overseer,cljs.core.dissoc,k);
});
historian.core.snapshot = (function historian$core$snapshot(k){
var map__27914 = cljs.core.get.call(null,cljs.core.deref.call(null,historian.core.overseer),k);
var map__27914__$1 = ((((!((map__27914 == null)))?((((map__27914.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27914.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27914):map__27914);
var atom = cljs.core.get.call(null,map__27914__$1,new cljs.core.Keyword(null,"atom","atom",-397043653));
var passive_QMARK_ = cljs.core.get.call(null,map__27914__$1,new cljs.core.Keyword(null,"passive?","passive?",241346064));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,atom),new cljs.core.Keyword(null,"passive?","passive?",241346064),passive_QMARK_,new cljs.core.Keyword(null,"key","key",-1516042587),k,new cljs.core.Keyword(null,"timestamp","timestamp",579478971),goog.now()], null);
});
historian.core.take_snapshots = (function historian$core$take_snapshots(){
return cljs.core.mapv.call(null,historian.core.snapshot,cljs.core.keys.call(null,cljs.core.deref.call(null,historian.core.overseer)));
});
/**
 * Check if any non-passive snapshot is different.
 */
historian.core.different_from_QMARK_ = (function historian$core$different_from_QMARK_(new$,old){
var clean_maps = (function (p1__27916_SHARP_){
if(cljs.core.truth_(new cljs.core.Keyword(null,"passive?","passive?",241346064).cljs$core$IFn$_invoke$arity$1(p1__27916_SHARP_))){
return null;
} else {
return cljs.core.dissoc.call(null,p1__27916_SHARP_,new cljs.core.Keyword(null,"timestamp","timestamp",579478971));
}
});
return cljs.core.not_EQ_.call(null,cljs.core.map.call(null,clean_maps,old),cljs.core.map.call(null,clean_maps,new$));
});
historian.core.different_from_last_QMARK_ = (function historian$core$different_from_last_QMARK_(new$){
return historian.core.different_from_QMARK_.call(null,new$,cljs.core.peek.call(null,cljs.core.deref.call(null,historian.core.get_library_atom.call(null))));
});
historian.core.save_snapshots_BANG_ = (function historian$core$save_snapshots_BANG_(snaps){
return cljs.core.swap_BANG_.call(null,historian.core.get_library_atom.call(null),cljs.core.conj,snaps);
});
historian.core.save_if_different_BANG_ = (function historian$core$save_if_different_BANG_(snaps){
if(cljs.core.truth_(historian.core.different_from_last_QMARK_.call(null,snaps))){
historian.core.save_snapshots_BANG_.call(null,snaps);

return cljs.core.reset_BANG_.call(null,historian.core.get_prophecy_atom.call(null),cljs.core.PersistentVector.EMPTY);
} else {
return null;
}
});
historian.core.save_prophecies_BANG_ = (function historian$core$save_prophecies_BANG_(snaps){
return cljs.core.swap_BANG_.call(null,historian.core.get_prophecy_atom.call(null),cljs.core.conj,snaps);
});
historian.core._STAR_record_active_STAR_ = true;
/**
 * Restore all the atoms being watched to a previous/different state.
 */
historian.core.restore_BANG_ = (function historian$core$restore_BANG_(snaps){
var _STAR_record_active_STAR_27922 = historian.core._STAR_record_active_STAR_;
historian.core._STAR_record_active_STAR_ = false;

try{var seq__27923 = cljs.core.seq.call(null,snaps);
var chunk__27924 = null;
var count__27925 = (0);
var i__27926 = (0);
while(true){
if((i__27926 < count__27925)){
var s = cljs.core._nth.call(null,chunk__27924,i__27926);
cljs.core.reset_BANG_.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,historian.core.overseer),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(s),new cljs.core.Keyword(null,"atom","atom",-397043653)], null)),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(s));

var G__27927 = seq__27923;
var G__27928 = chunk__27924;
var G__27929 = count__27925;
var G__27930 = (i__27926 + (1));
seq__27923 = G__27927;
chunk__27924 = G__27928;
count__27925 = G__27929;
i__27926 = G__27930;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__27923);
if(temp__4657__auto__){
var seq__27923__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27923__$1)){
var c__27388__auto__ = cljs.core.chunk_first.call(null,seq__27923__$1);
var G__27931 = cljs.core.chunk_rest.call(null,seq__27923__$1);
var G__27932 = c__27388__auto__;
var G__27933 = cljs.core.count.call(null,c__27388__auto__);
var G__27934 = (0);
seq__27923 = G__27931;
chunk__27924 = G__27932;
count__27925 = G__27933;
i__27926 = G__27934;
continue;
} else {
var s = cljs.core.first.call(null,seq__27923__$1);
cljs.core.reset_BANG_.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,historian.core.overseer),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(s),new cljs.core.Keyword(null,"atom","atom",-397043653)], null)),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(s));

var G__27935 = cljs.core.next.call(null,seq__27923__$1);
var G__27936 = null;
var G__27937 = (0);
var G__27938 = (0);
seq__27923 = G__27935;
chunk__27924 = G__27936;
count__27925 = G__27937;
i__27926 = G__27938;
continue;
}
} else {
return null;
}
}
break;
}
}finally {historian.core._STAR_record_active_STAR_ = _STAR_record_active_STAR_27922;
}});
historian.core.watch_BANG_ = (function historian$core$watch_BANG_(atm){
return cljs.core.add_watch.call(null,atm,new cljs.core.Keyword("historian.core","historian-watch","historian.core/historian-watch",1998347323),(function (k,_,old_value,new_value){
if(cljs.core.not_EQ_.call(null,old_value,new_value)){
if(historian.core._STAR_record_active_STAR_){
return historian.core.save_if_different_BANG_.call(null,historian.core.take_snapshots.call(null));
} else {
return null;
}
} else {
return null;
}
}));
});
historian.core.remove_watch_BANG_ = (function historian$core$remove_watch_BANG_(a){
return cljs.core.remove_watch.call(null,a,new cljs.core.Keyword("historian.core","historian-watch","historian.core/historian-watch",1998347323));
});
historian.core.can_undo_QMARK__STAR_ = (function historian$core$can_undo_QMARK__STAR_(records){
if(cljs.core.next.call(null,records)){
return true;
} else {
return null;
}
});
historian.core.can_redo_QMARK__STAR_ = (function historian$core$can_redo_QMARK__STAR_(records){
if(cljs.core.truth_(cljs.core.first.call(null,records))){
return true;
} else {
return null;
}
});
/**
 * Trigger a record to history. The current state of at least one atom
 *   must be different from the previous one for the record to be
 *   included into history.
 */
historian.core.trigger_record_BANG_ = (function historian$core$trigger_record_BANG_(){
if(historian.core._STAR_record_active_STAR_){
return historian.core.save_if_different_BANG_.call(null,historian.core.take_snapshots.call(null));
} else {
return null;
}
});
/**
 * Overwrite the last historic entry with a new one.
 */
historian.core.overwrite_record_BANG_ = (function historian$core$overwrite_record_BANG_(var_args){
var args27939 = [];
var len__27678__auto___27942 = arguments.length;
var i__27679__auto___27943 = (0);
while(true){
if((i__27679__auto___27943 < len__27678__auto___27942)){
args27939.push((arguments[i__27679__auto___27943]));

var G__27944 = (i__27679__auto___27943 + (1));
i__27679__auto___27943 = G__27944;
continue;
} else {
}
break;
}

var G__27941 = args27939.length;
switch (G__27941) {
case 0:
return historian.core.overwrite_record_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return historian.core.overwrite_record_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args27939.length)].join('')));

}
});

historian.core.overwrite_record_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return historian.core.overwrite_record_BANG_.call(null,historian.core.take_snapshots.call(null));
});

historian.core.overwrite_record_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (snaps){
if(historian.core._STAR_record_active_STAR_){
cljs.core.swap_BANG_.call(null,historian.core.get_library_atom.call(null),cljs.core.pop);

return historian.core.save_snapshots_BANG_.call(null,snaps);
} else {
return null;
}
});

historian.core.overwrite_record_BANG_.cljs$lang$maxFixedArity = 1;

/**
 * The library atom (where all records are kept to enable 'undo') will
 *   be replaced by the new-atom. Useful if you've already done some
 *   modifications to the new-atom (like added some watchers). Depending
 *   on where you use this function, you might want to fire a
 *   `trigger-record!' just after.
 *   
 *   Usually, one would also want to use `replace-prophecy!' in order to
 *   replace the 'redo' atom.
 */
historian.core.replace_library_BANG_ = (function historian$core$replace_library_BANG_(new_atom){
return cljs.core.reset_BANG_.call(null,historian.core.alexandria,new_atom);
});
/**
 * The prophecy atom (where all records are kept to enable 'redo')
 *   will be replaced by the new-atom. Useful if you've already done some
 *   modifications to the new-atom (like added some watchers).
 * 
 *   Usually used with `replace-library'.
 */
historian.core.replace_prophecy_BANG_ = (function historian$core$replace_prophecy_BANG_(new_atom){
return cljs.core.reset_BANG_.call(null,historian.core.nostradamus,new_atom);
});
/**
 * Add the atom to the overseer watch. When any of the atom under its
 *   watch is modified, it triggers a save of every atom to history (if
 *   any of the atom is different form the last historic state). Return
 *   the atom.
 *   
 *   If `passive?' is true, the atom will NOT trigger any new save and
 *   will only be saved when another atom under watch is modified.
 */
historian.core.record_BANG_ = (function historian$core$record_BANG_(var_args){
var args27946 = [];
var len__27678__auto___27949 = arguments.length;
var i__27679__auto___27950 = (0);
while(true){
if((i__27679__auto___27950 < len__27678__auto___27949)){
args27946.push((arguments[i__27679__auto___27950]));

var G__27951 = (i__27679__auto___27950 + (1));
i__27679__auto___27950 = G__27951;
continue;
} else {
}
break;
}

var G__27948 = args27946.length;
switch (G__27948) {
case 2:
return historian.core.record_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return historian.core.record_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args27946.length)].join('')));

}
});

historian.core.record_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (atm,k){
return historian.core.record_BANG_.call(null,atm,k,null);
});

historian.core.record_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (atm,k,passive_QMARK_){
historian.core.register_atom_BANG_.call(null,atm,k,passive_QMARK_);

if(cljs.core.truth_(passive_QMARK_)){
} else {
historian.core.watch_BANG_.call(null,atm);
}

historian.core.trigger_record_BANG_.call(null);

return atm;
});

historian.core.record_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Remove the atom associated to this key from the overseer watch.
 *   This atom will no longer be watched, nor its state saved to
 *   history.
 */
historian.core.stop_record_BANG_ = (function historian$core$stop_record_BANG_(k){
historian.core.remove_watch_BANG_.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,historian.core.overseer),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.Keyword(null,"atom","atom",-397043653)], null)));

return historian.core.de_register_atom_BANG_.call(null,k);
});
/**
 * Remove all the atoms from the overseer watch. The atoms will no
 *   longer be watched, nor any of their state saved to history.
 */
historian.core.stop_all_records_BANG_ = (function historian$core$stop_all_records_BANG_(){
var ks = cljs.core.keys.call(null,cljs.core.deref.call(null,historian.core.overseer));
var seq__27957 = cljs.core.seq.call(null,ks);
var chunk__27958 = null;
var count__27959 = (0);
var i__27960 = (0);
while(true){
if((i__27960 < count__27959)){
var k = cljs.core._nth.call(null,chunk__27958,i__27960);
historian.core.stop_record_BANG_.call(null,k);

var G__27961 = seq__27957;
var G__27962 = chunk__27958;
var G__27963 = count__27959;
var G__27964 = (i__27960 + (1));
seq__27957 = G__27961;
chunk__27958 = G__27962;
count__27959 = G__27963;
i__27960 = G__27964;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__27957);
if(temp__4657__auto__){
var seq__27957__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27957__$1)){
var c__27388__auto__ = cljs.core.chunk_first.call(null,seq__27957__$1);
var G__27965 = cljs.core.chunk_rest.call(null,seq__27957__$1);
var G__27966 = c__27388__auto__;
var G__27967 = cljs.core.count.call(null,c__27388__auto__);
var G__27968 = (0);
seq__27957 = G__27965;
chunk__27958 = G__27966;
count__27959 = G__27967;
i__27960 = G__27968;
continue;
} else {
var k = cljs.core.first.call(null,seq__27957__$1);
historian.core.stop_record_BANG_.call(null,k);

var G__27969 = cljs.core.next.call(null,seq__27957__$1);
var G__27970 = null;
var G__27971 = (0);
var G__27972 = (0);
seq__27957 = G__27969;
chunk__27958 = G__27970;
count__27959 = G__27971;
i__27960 = G__27972;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Do we have enough history to undo?
 */
historian.core.can_undo_QMARK_ = (function historian$core$can_undo_QMARK_(){
return historian.core.can_undo_QMARK__STAR_.call(null,cljs.core.deref.call(null,historian.core.get_library_atom.call(null)));
});
/**
 * Can we redo?
 */
historian.core.can_redo_QMARK_ = (function historian$core$can_redo_QMARK_(){
return historian.core.can_redo_QMARK__STAR_.call(null,cljs.core.deref.call(null,historian.core.get_prophecy_atom.call(null)));
});
historian.core.undo_BANG_ = (function historian$core$undo_BANG_(){
var alex = cljs.core.deref.call(null,historian.core.get_library_atom.call(null));
if(cljs.core.truth_(historian.core.can_undo_QMARK__STAR_.call(null,alex))){
historian.core.save_prophecies_BANG_.call(null,cljs.core.peek.call(null,alex));

return historian.core.restore_BANG_.call(null,cljs.core.peek.call(null,cljs.core.reset_BANG_.call(null,historian.core.get_library_atom.call(null),cljs.core.pop.call(null,alex))));
} else {
return null;
}
});
historian.core.redo_BANG_ = (function historian$core$redo_BANG_(){
var nos = cljs.core.deref.call(null,historian.core.get_prophecy_atom.call(null));
if(cljs.core.truth_(historian.core.can_redo_QMARK__STAR_.call(null,nos))){
historian.core.save_snapshots_BANG_.call(null,cljs.core.peek.call(null,nos));

cljs.core.reset_BANG_.call(null,historian.core.get_prophecy_atom.call(null),cljs.core.pop.call(null,nos));

return historian.core.restore_BANG_.call(null,cljs.core.peek.call(null,nos));
} else {
return null;
}
});
historian.core.clear_history_BANG_ = (function historian$core$clear_history_BANG_(){
cljs.core.reset_BANG_.call(null,historian.core.get_library_atom.call(null),cljs.core.PersistentVector.EMPTY);

return cljs.core.reset_BANG_.call(null,historian.core.get_prophecy_atom.call(null),cljs.core.PersistentVector.EMPTY);
});
new cljs.core.Keyword(null,"clj","clj",-660495428).cljs$core$IFn$_invoke$arity$1((function (){
/**
 * Deactivate the watches write to history and execute the body. If
 *   any non-passive atom is modified, replace the last history with a
 *   snapshot taken just before executing the body and then take another
 *   snapshot.
 */
historian.core.with_single_before_and_after = (function historian$core$with_single_before_and_after(var_args){
var args__27685__auto__ = [];
var len__27678__auto___27978 = arguments.length;
var i__27679__auto___27979 = (0);
while(true){
if((i__27679__auto___27979 < len__27678__auto___27978)){
args__27685__auto__.push((arguments[i__27679__auto___27979]));

var G__27980 = (i__27679__auto___27979 + (1));
i__27679__auto___27979 = G__27980;
continue;
} else {
}
break;
}

var argseq__27686__auto__ = ((((2) < args__27685__auto__.length))?(new cljs.core.IndexedSeq(args__27685__auto__.slice((2)),(0),null)):null);
return historian.core.with_single_before_and_after.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__27686__auto__);
});

historian.core.with_single_before_and_after.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,content){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__27411__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"before-snaps__27973__auto__","before-snaps__27973__auto__",-2133291383,null)),(function (){var x__27411__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("historian.core","take-snapshots","historian.core/take-snapshots",-2035244807,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27411__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27411__auto__);
})(),(function (){var x__27411__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("historian.core","off-the-record","historian.core/off-the-record",1588414158,null)),content)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27411__auto__);
})(),(function (){var x__27411__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__27411__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"after-snaps__27974__auto__","after-snaps__27974__auto__",1020646096,null)),(function (){var x__27411__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("historian.core","take-snapshots","historian.core/take-snapshots",-2035244807,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27411__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27411__auto__);
})(),(function (){var x__27411__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null)),(function (){var x__27411__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("historian.core","different-from?","historian.core/different-from?",-560958704,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"after-snaps__27974__auto__","after-snaps__27974__auto__",1020646096,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"before-snaps__27973__auto__","before-snaps__27973__auto__",-2133291383,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27411__auto__);
})(),(function (){var x__27411__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("historian.core","overwrite-record!","historian.core/overwrite-record!",928719600,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"before-snaps__27973__auto__","before-snaps__27973__auto__",-2133291383,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27411__auto__);
})(),(function (){var x__27411__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("historian.core","trigger-record!","historian.core/trigger-record!",-1161558125,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27411__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27411__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27411__auto__);
})())));
});

historian.core.with_single_before_and_after.cljs$lang$maxFixedArity = (2);

historian.core.with_single_before_and_after.cljs$lang$applyTo = (function (seq27975){
var G__27976 = cljs.core.first.call(null,seq27975);
var seq27975__$1 = cljs.core.next.call(null,seq27975);
var G__27977 = cljs.core.first.call(null,seq27975__$1);
var seq27975__$2 = cljs.core.next.call(null,seq27975__$1);
return historian.core.with_single_before_and_after.cljs$core$IFn$_invoke$arity$variadic(G__27976,G__27977,seq27975__$2);
});


return historian.core.with_single_before_and_after.cljs$lang$macro = true;
})()
);

//# sourceMappingURL=core.js.map