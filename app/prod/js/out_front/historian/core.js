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
var args11402 = [];
var len__7933__auto___11405 = arguments.length;
var i__7934__auto___11406 = (0);
while(true){
if((i__7934__auto___11406 < len__7933__auto___11405)){
args11402.push((arguments[i__7934__auto___11406]));

var G__11407 = (i__7934__auto___11406 + (1));
i__7934__auto___11406 = G__11407;
continue;
} else {
}
break;
}

var G__11404 = args11402.length;
switch (G__11404) {
case 2:
return historian.core.register_atom_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return historian.core.register_atom_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args11402.length)].join('')));

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
var map__11411 = cljs.core.get.call(null,cljs.core.deref.call(null,historian.core.overseer),k);
var map__11411__$1 = ((((!((map__11411 == null)))?((((map__11411.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11411.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11411):map__11411);
var atom = cljs.core.get.call(null,map__11411__$1,new cljs.core.Keyword(null,"atom","atom",-397043653));
var passive_QMARK_ = cljs.core.get.call(null,map__11411__$1,new cljs.core.Keyword(null,"passive?","passive?",241346064));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,atom),new cljs.core.Keyword(null,"passive?","passive?",241346064),passive_QMARK_,new cljs.core.Keyword(null,"key","key",-1516042587),k,new cljs.core.Keyword(null,"timestamp","timestamp",579478971),goog.now()], null);
});
historian.core.take_snapshots = (function historian$core$take_snapshots(){
return cljs.core.mapv.call(null,historian.core.snapshot,cljs.core.keys.call(null,cljs.core.deref.call(null,historian.core.overseer)));
});
/**
 * Check if any non-passive snapshot is different.
 */
historian.core.different_from_QMARK_ = (function historian$core$different_from_QMARK_(new$,old){
var clean_maps = (function (p1__11413_SHARP_){
if(cljs.core.truth_(new cljs.core.Keyword(null,"passive?","passive?",241346064).cljs$core$IFn$_invoke$arity$1(p1__11413_SHARP_))){
return null;
} else {
return cljs.core.dissoc.call(null,p1__11413_SHARP_,new cljs.core.Keyword(null,"timestamp","timestamp",579478971));
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
var _STAR_record_active_STAR_11419 = historian.core._STAR_record_active_STAR_;
historian.core._STAR_record_active_STAR_ = false;

try{var seq__11420 = cljs.core.seq.call(null,snaps);
var chunk__11421 = null;
var count__11422 = (0);
var i__11423 = (0);
while(true){
if((i__11423 < count__11422)){
var s = cljs.core._nth.call(null,chunk__11421,i__11423);
cljs.core.reset_BANG_.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,historian.core.overseer),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(s),new cljs.core.Keyword(null,"atom","atom",-397043653)], null)),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(s));

var G__11424 = seq__11420;
var G__11425 = chunk__11421;
var G__11426 = count__11422;
var G__11427 = (i__11423 + (1));
seq__11420 = G__11424;
chunk__11421 = G__11425;
count__11422 = G__11426;
i__11423 = G__11427;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__11420);
if(temp__4657__auto__){
var seq__11420__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11420__$1)){
var c__7643__auto__ = cljs.core.chunk_first.call(null,seq__11420__$1);
var G__11428 = cljs.core.chunk_rest.call(null,seq__11420__$1);
var G__11429 = c__7643__auto__;
var G__11430 = cljs.core.count.call(null,c__7643__auto__);
var G__11431 = (0);
seq__11420 = G__11428;
chunk__11421 = G__11429;
count__11422 = G__11430;
i__11423 = G__11431;
continue;
} else {
var s = cljs.core.first.call(null,seq__11420__$1);
cljs.core.reset_BANG_.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,historian.core.overseer),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(s),new cljs.core.Keyword(null,"atom","atom",-397043653)], null)),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(s));

var G__11432 = cljs.core.next.call(null,seq__11420__$1);
var G__11433 = null;
var G__11434 = (0);
var G__11435 = (0);
seq__11420 = G__11432;
chunk__11421 = G__11433;
count__11422 = G__11434;
i__11423 = G__11435;
continue;
}
} else {
return null;
}
}
break;
}
}finally {historian.core._STAR_record_active_STAR_ = _STAR_record_active_STAR_11419;
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
var args11436 = [];
var len__7933__auto___11439 = arguments.length;
var i__7934__auto___11440 = (0);
while(true){
if((i__7934__auto___11440 < len__7933__auto___11439)){
args11436.push((arguments[i__7934__auto___11440]));

var G__11441 = (i__7934__auto___11440 + (1));
i__7934__auto___11440 = G__11441;
continue;
} else {
}
break;
}

var G__11438 = args11436.length;
switch (G__11438) {
case 0:
return historian.core.overwrite_record_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return historian.core.overwrite_record_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args11436.length)].join('')));

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
var args11443 = [];
var len__7933__auto___11446 = arguments.length;
var i__7934__auto___11447 = (0);
while(true){
if((i__7934__auto___11447 < len__7933__auto___11446)){
args11443.push((arguments[i__7934__auto___11447]));

var G__11448 = (i__7934__auto___11447 + (1));
i__7934__auto___11447 = G__11448;
continue;
} else {
}
break;
}

var G__11445 = args11443.length;
switch (G__11445) {
case 2:
return historian.core.record_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return historian.core.record_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args11443.length)].join('')));

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
var seq__11454 = cljs.core.seq.call(null,ks);
var chunk__11455 = null;
var count__11456 = (0);
var i__11457 = (0);
while(true){
if((i__11457 < count__11456)){
var k = cljs.core._nth.call(null,chunk__11455,i__11457);
historian.core.stop_record_BANG_.call(null,k);

var G__11458 = seq__11454;
var G__11459 = chunk__11455;
var G__11460 = count__11456;
var G__11461 = (i__11457 + (1));
seq__11454 = G__11458;
chunk__11455 = G__11459;
count__11456 = G__11460;
i__11457 = G__11461;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__11454);
if(temp__4657__auto__){
var seq__11454__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11454__$1)){
var c__7643__auto__ = cljs.core.chunk_first.call(null,seq__11454__$1);
var G__11462 = cljs.core.chunk_rest.call(null,seq__11454__$1);
var G__11463 = c__7643__auto__;
var G__11464 = cljs.core.count.call(null,c__7643__auto__);
var G__11465 = (0);
seq__11454 = G__11462;
chunk__11455 = G__11463;
count__11456 = G__11464;
i__11457 = G__11465;
continue;
} else {
var k = cljs.core.first.call(null,seq__11454__$1);
historian.core.stop_record_BANG_.call(null,k);

var G__11466 = cljs.core.next.call(null,seq__11454__$1);
var G__11467 = null;
var G__11468 = (0);
var G__11469 = (0);
seq__11454 = G__11466;
chunk__11455 = G__11467;
count__11456 = G__11468;
i__11457 = G__11469;
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
var args__7940__auto__ = [];
var len__7933__auto___11475 = arguments.length;
var i__7934__auto___11476 = (0);
while(true){
if((i__7934__auto___11476 < len__7933__auto___11475)){
args__7940__auto__.push((arguments[i__7934__auto___11476]));

var G__11477 = (i__7934__auto___11476 + (1));
i__7934__auto___11476 = G__11477;
continue;
} else {
}
break;
}

var argseq__7941__auto__ = ((((2) < args__7940__auto__.length))?(new cljs.core.IndexedSeq(args__7940__auto__.slice((2)),(0),null)):null);
return historian.core.with_single_before_and_after.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7941__auto__);
});

historian.core.with_single_before_and_after.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,content){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__7666__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"before-snaps__11470__auto__","before-snaps__11470__auto__",1960504224,null)),(function (){var x__7666__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("historian.core","take-snapshots","historian.core/take-snapshots",-2035244807,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7666__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7666__auto__);
})(),(function (){var x__7666__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("historian.core","off-the-record","historian.core/off-the-record",1588414158,null)),content)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7666__auto__);
})(),(function (){var x__7666__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__7666__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"after-snaps__11471__auto__","after-snaps__11471__auto__",-252035734,null)),(function (){var x__7666__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("historian.core","take-snapshots","historian.core/take-snapshots",-2035244807,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7666__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7666__auto__);
})(),(function (){var x__7666__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null)),(function (){var x__7666__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("historian.core","different-from?","historian.core/different-from?",-560958704,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"after-snaps__11471__auto__","after-snaps__11471__auto__",-252035734,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"before-snaps__11470__auto__","before-snaps__11470__auto__",1960504224,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7666__auto__);
})(),(function (){var x__7666__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("historian.core","overwrite-record!","historian.core/overwrite-record!",928719600,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"before-snaps__11470__auto__","before-snaps__11470__auto__",1960504224,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7666__auto__);
})(),(function (){var x__7666__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("historian.core","trigger-record!","historian.core/trigger-record!",-1161558125,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7666__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7666__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7666__auto__);
})())));
});

historian.core.with_single_before_and_after.cljs$lang$maxFixedArity = (2);

historian.core.with_single_before_and_after.cljs$lang$applyTo = (function (seq11472){
var G__11473 = cljs.core.first.call(null,seq11472);
var seq11472__$1 = cljs.core.next.call(null,seq11472);
var G__11474 = cljs.core.first.call(null,seq11472__$1);
var seq11472__$2 = cljs.core.next.call(null,seq11472__$1);
return historian.core.with_single_before_and_after.cljs$core$IFn$_invoke$arity$variadic(G__11473,G__11474,seq11472__$2);
});


return historian.core.with_single_before_and_after.cljs$lang$macro = true;
})()
);
