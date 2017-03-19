// Compiled by ClojureScript 1.9.495 {:elide-asserts true}
goog.provide('akiee.rank');
goog.require('cljs.core');
goog.require('akiee.app_db');
goog.require('akiee.constants');
goog.require('akiee.node');
goog.require('cljs.test');
/**
 * Integer -> Node
 *   Returns node at pos
 *   -------------------------
 *   Integer ListState -> Node
 *   Returns node at pos
 */
akiee.rank.task_by_pos = (function akiee$rank$task_by_pos(var_args){
var args11908 = [];
var len__7933__auto___11911 = arguments.length;
var i__7934__auto___11912 = (0);
while(true){
if((i__7934__auto___11912 < len__7933__auto___11911)){
args11908.push((arguments[i__7934__auto___11912]));

var G__11913 = (i__7934__auto___11912 + (1));
i__7934__auto___11912 = G__11913;
continue;
} else {
}
break;
}

var G__11910 = args11908.length;
switch (G__11910) {
case 1:
return akiee.rank.task_by_pos.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return akiee.rank.task_by_pos.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args11908.length)].join('')));

}
});

akiee.rank.task_by_pos.cljs$core$IFn$_invoke$arity$1 = (function (pos){
return cljs.core.get.call(null,akiee.app_db.tasks.call(null),pos);
});

akiee.rank.task_by_pos.cljs$core$IFn$_invoke$arity$2 = (function (pos,ls){
return cljs.core.nth.call(null,akiee.app_db.tasks.call(null,ls),pos);
});

akiee.rank.task_by_pos.cljs$lang$maxFixedArity = 2;

/**
 * String Integer Integer -> ?
 */
akiee.rank.move_rank_BANG_ = (function akiee$rank$move_rank_BANG_(ky,direction){
var ls = new cljs.core.Keyword(null,"todo","todo",-1046442570).cljs$core$IFn$_invoke$arity$1(akiee.app_db.node_by_pos.call(null,akiee.app_db.node_pos_by_key.call(null,ky,akiee.app_db.nodes.call(null))));
var sp = akiee.app_db.node_pos_by_key.call(null,ky,akiee.app_db.tasks.call(null,ls));
var tp = ((cljs.core._EQ_.call(null,direction,"up"))?(akiee.app_db.node_pos_by_key.call(null,ky,akiee.app_db.tasks.call(null,ls)) - (1)):(akiee.app_db.node_pos_by_key.call(null,ky,akiee.app_db.tasks.call(null,ls)) + (1)));
var source_task = akiee.rank.task_by_pos.call(null,sp,ls);
var target_task = akiee.rank.task_by_pos.call(null,tp,ls);
var source_rank = new cljs.core.Keyword(null,"rank","rank",-1706728502).cljs$core$IFn$_invoke$arity$1(source_task);
var target_rank = new cljs.core.Keyword(null,"rank","rank",-1706728502).cljs$core$IFn$_invoke$arity$1(target_task);
var pred_QMARK_ = ((cljs.core._EQ_.call(null,direction,"up"))?((function (ls,sp,tp,source_task,target_task,source_rank,target_rank){
return (function (x){
if(((new cljs.core.Keyword(null,"rank","rank",-1706728502).cljs$core$IFn$_invoke$arity$1(x) >= target_rank)) && ((new cljs.core.Keyword(null,"rank","rank",-1706728502).cljs$core$IFn$_invoke$arity$1(x) < source_rank))){
return cljs.core.update_in.call(null,x,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rank","rank",-1706728502)], null),cljs.core.inc);
} else {
return x;
}
});})(ls,sp,tp,source_task,target_task,source_rank,target_rank))
:((function (ls,sp,tp,source_task,target_task,source_rank,target_rank){
return (function (x){
if(((new cljs.core.Keyword(null,"rank","rank",-1706728502).cljs$core$IFn$_invoke$arity$1(x) <= target_rank)) && ((new cljs.core.Keyword(null,"rank","rank",-1706728502).cljs$core$IFn$_invoke$arity$1(x) > source_rank))){
return cljs.core.update_in.call(null,x,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rank","rank",-1706728502)], null),cljs.core.dec);
} else {
return x;
}
});})(ls,sp,tp,source_task,target_task,source_rank,target_rank))
);
var new_lon = cljs.core.vec.call(null,cljs.core.map.call(null,pred_QMARK_,akiee.app_db.nodes.call(null)));
var new_task = cljs.core.assoc.call(null,source_task,new cljs.core.Keyword(null,"rank","rank",-1706728502),target_rank);
var np = akiee.app_db.node_pos_by_key.call(null,ky,akiee.app_db.nodes.call(null));
var newer_lon = cljs.core.assoc.call(null,new_lon,np,new_task);
if(cljs.core.truth_(target_rank)){
return akiee.app_db.reset_lon_BANG_.call(null,akiee.app_db.app_state,newer_lon);
} else {
return cljs.core.println.call(null,"No target task");
}
});
/**
 * String ->
 *   Consumes a key-String ky;
 *   changes the rank of the corresponding node to rank higher
 */
akiee.rank.up_rank = (function akiee$rank$up_rank(ky){
return akiee.rank.move_rank_BANG_.call(null,ky,"up");
});
/**
 * String ->
 *   Consumes a key-String ky;
 *   changes the rank of the corresponding node to rank lower
 */
akiee.rank.down_rank = (function akiee$rank$down_rank(ky){
return akiee.rank.move_rank_BANG_.call(null,ky,"down");
});
/**
 * String Integer Integer -> ?
 */
akiee.rank.jump_rank_BANG_ = (function akiee$rank$jump_rank_BANG_(ky,direction){
var ls = new cljs.core.Keyword(null,"todo","todo",-1046442570).cljs$core$IFn$_invoke$arity$1(akiee.app_db.node_by_pos.call(null,akiee.app_db.node_pos_by_key.call(null,ky,akiee.app_db.nodes.call(null))));
var sp = akiee.app_db.node_pos_by_key.call(null,ky,akiee.app_db.tasks.call(null,ls));
var tp = ((cljs.core._EQ_.call(null,direction,"up"))?(akiee.app_db.node_pos_by_key.call(null,ky,akiee.app_db.tasks.call(null,ls)) - (1)):(akiee.app_db.node_pos_by_key.call(null,ky,akiee.app_db.tasks.call(null,ls)) + (1)));
var source_task = akiee.rank.task_by_pos.call(null,sp,ls);
var target_task = ((cljs.core._EQ_.call(null,direction,"up"))?cljs.core.first.call(null,akiee.app_db.tasks.call(null,ls)):cljs.core.last.call(null,akiee.app_db.tasks.call(null,ls)));
var source_rank = new cljs.core.Keyword(null,"rank","rank",-1706728502).cljs$core$IFn$_invoke$arity$1(source_task);
var target_rank = new cljs.core.Keyword(null,"rank","rank",-1706728502).cljs$core$IFn$_invoke$arity$1(target_task);
var pred_QMARK_ = ((cljs.core._EQ_.call(null,direction,"up"))?((function (ls,sp,tp,source_task,target_task,source_rank,target_rank){
return (function (x){
if(((new cljs.core.Keyword(null,"rank","rank",-1706728502).cljs$core$IFn$_invoke$arity$1(x) >= target_rank)) && ((new cljs.core.Keyword(null,"rank","rank",-1706728502).cljs$core$IFn$_invoke$arity$1(x) < source_rank))){
return cljs.core.update_in.call(null,x,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rank","rank",-1706728502)], null),cljs.core.inc);
} else {
return x;
}
});})(ls,sp,tp,source_task,target_task,source_rank,target_rank))
:((function (ls,sp,tp,source_task,target_task,source_rank,target_rank){
return (function (x){
if(((new cljs.core.Keyword(null,"rank","rank",-1706728502).cljs$core$IFn$_invoke$arity$1(x) <= target_rank)) && ((new cljs.core.Keyword(null,"rank","rank",-1706728502).cljs$core$IFn$_invoke$arity$1(x) > source_rank))){
return cljs.core.update_in.call(null,x,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rank","rank",-1706728502)], null),cljs.core.dec);
} else {
return x;
}
});})(ls,sp,tp,source_task,target_task,source_rank,target_rank))
);
var new_lon = cljs.core.vec.call(null,cljs.core.map.call(null,pred_QMARK_,akiee.app_db.nodes.call(null)));
var new_task = cljs.core.assoc.call(null,source_task,new cljs.core.Keyword(null,"rank","rank",-1706728502),target_rank);
var np = akiee.app_db.node_pos_by_key.call(null,ky,akiee.app_db.nodes.call(null));
var newer_lon = cljs.core.assoc.call(null,new_lon,np,new_task);
if(cljs.core.truth_(target_rank)){
return akiee.app_db.reset_lon_BANG_.call(null,akiee.app_db.app_state,newer_lon);
} else {
return cljs.core.println.call(null,"No target task");
}
});
/**
 * String ->
 *   Consumes a key-String ky;
 *   changes the rank of the highest of the current :todo
 */
akiee.rank.to_top = (function akiee$rank$to_top(ky){
akiee.rank.jump_rank_BANG_.call(null,ky,"up");

return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("to-top:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ky)].join(''));
});
/**
 * String ->
 *   Consumes a key-String ky;
 *   changes the rank of the lowest of the current :todo
 */
akiee.rank.to_bottom = (function akiee$rank$to_bottom(ky){
akiee.rank.jump_rank_BANG_.call(null,ky,"down");

return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("to-bottom: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ky)].join(''));
});
