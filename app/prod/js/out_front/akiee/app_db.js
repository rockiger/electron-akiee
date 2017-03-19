// Compiled by ClojureScript 1.9.495 {:elide-asserts true}
goog.provide('akiee.app_db');
goog.require('cljs.core');
goog.require('akiee.fileoperations');
goog.require('akiee.datadefinitions');
goog.require('akiee.constants');
goog.require('akiee.dom_helpers');
goog.require('akiee.node');
goog.require('cljs.test');
goog.require('cljs.nodejs');
goog.require('reagent.core');
goog.require('clojure.string');
goog.require('historian.core');
goog.require('alandipert.storage_atom');
cljs.core.enable_console_print_BANG_.call(null);
akiee.app_db.null$ = null;
akiee.app_db.FP = akiee.fileoperations.create_task_list_file.call(null,akiee.fileoperations.user_home.call(null));
/**
 * String -> GS
 *   consumes the path p to the task file and produces the initial app-state
 *   TODO find way to test, without :key
 */
akiee.app_db.load_task_list = (function akiee$app_db$load_task_list(p){
return akiee.node.__GT_nodes.call(null,p);
});
if(typeof akiee.app_db.conf_state !== 'undefined'){
} else {
akiee.app_db.conf_state = alandipert.storage_atom.local_storage.call(null,reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"task-location","task-location",1147747826),""], null)),new cljs.core.Keyword(null,"conf-state","conf-state",969423917));
}
if(cljs.core.truth_((function (){var or__6824__auto__ = cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"task-location","task-location",1147747826).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,akiee.app_db.conf_state)));
if(or__6824__auto__){
return or__6824__auto__;
} else {
return null;
}
})())){
cljs.core.swap_BANG_.call(null,akiee.app_db.conf_state,cljs.core.assoc,new cljs.core.Keyword(null,"task-location","task-location",1147747826),akiee.fileoperations.user_home.call(null));
} else {
}
if(typeof akiee.app_db.app_state !== 'undefined'){
} else {
akiee.app_db.app_state = reagent.core.atom.call(null,(new akiee.datadefinitions.global_state(false,false,false,false,"",null,null,akiee.constants.DOING,null,null,null)));
}
if(typeof akiee.app_db.task_list !== 'undefined'){
} else {
akiee.app_db.task_list = (function (){var tlf = akiee.fileoperations.create_task_list_file.call(null,new cljs.core.Keyword(null,"task-location","task-location",1147747826).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,akiee.app_db.conf_state)));
return reagent.core.atom.call(null,akiee.app_db.load_task_list.call(null,tlf));
})();
}
historian.core.record_BANG_.call(null,akiee.app_db.task_list,new cljs.core.Keyword(null,"task-list","task-list",-975357719));
/**
 * String -> GlobalState
 *   Consume a Task-Location directory and produces a new GlobalState with new tasks
 */
akiee.app_db.reset_tasklist_BANG_ = (function akiee$app_db$reset_tasklist_BANG_(pth){
var tlf = akiee.fileoperations.create_task_list_file.call(null,pth);
return cljs.core.reset_BANG_.call(null,akiee.app_db.task_list,akiee.app_db.load_task_list.call(null,tlf));
});
/**
 * -> ListOfNode
 *   returns the nodes of the app-state
 */
akiee.app_db.nodes = (function akiee$app_db$nodes(){
return cljs.core.deref.call(null,akiee.app_db.task_list);
});
/**
 * -> Boolean
 *   returns the state of the editor
 */
akiee.app_db.editor_QMARK_ = (function akiee$app_db$editor_QMARK_(){
return new cljs.core.Keyword(null,"editor?","editor?",1562728713).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,akiee.app_db.app_state));
});
/**
 * -> Boolean
 *   returns the state of the task entry
 */
akiee.app_db.entry_QMARK_ = (function akiee$app_db$entry_QMARK_(){
return new cljs.core.Keyword(null,"entry?","entry?",2007901397).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,akiee.app_db.app_state));
});
/**
 * -> Boolean
 *   returns the state of the search box
 */
akiee.app_db.search_QMARK_ = (function akiee$app_db$search_QMARK_(){
return new cljs.core.Keyword(null,"search?","search?",785472524).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,akiee.app_db.app_state));
});
/**
 * -> Boolean
 */
akiee.app_db.changed_QMARK_ = (function akiee$app_db$changed_QMARK_(){
return new cljs.core.Keyword(null,"changed?","changed?",-437828330).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,akiee.app_db.app_state));
});
/**
 * -> ListStat
 *   returns the state of the List
 */
akiee.app_db.list_state = (function akiee$app_db$list_state(){
return new cljs.core.Keyword(null,"ls","ls",1195788590).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,akiee.app_db.app_state));
});
/**
 * -> String
 *   returns the state of the selected filed
 */
akiee.app_db.selected = (function akiee$app_db$selected(){
return new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,akiee.app_db.app_state));
});
/**
 * -> String
 *   returns the state of the editable filed
 */
akiee.app_db.editable = (function akiee$app_db$editable(){
return new cljs.core.Keyword(null,"editable","editable",1930280326).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,akiee.app_db.app_state));
});
/**
 * GlobalState ListState -> lon
 *   consumes an GlobalState gs , a ListState ls and  returns the tasks, according to the current ListState
 */
akiee.app_db.tasks_helper = (function akiee$app_db$tasks_helper(gs,ls){
var filter_tasks = (function (x){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(x),(2))){
return true;
} else {
return false;
}
});
var filter_state = ((function (filter_tasks){
return (function (x){
if(cljs.core._EQ_.call(null,ls,akiee.constants.ALL)){
return true;
} else {
if(cljs.core._EQ_.call(null,ls,new cljs.core.Keyword(null,"todo","todo",-1046442570).cljs$core$IFn$_invoke$arity$1(x))){
return true;
} else {
return false;

}
}
});})(filter_tasks))
;
var filter_search = ((function (filter_tasks,filter_state){
return (function (x){
if(!(cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"ss","ss",-1463049578).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gs))))){
if(cljs.core.truth_((function (){var or__6824__auto__ = cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("(?i)"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ss","ss",-1463049578).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gs)))].join('')),new cljs.core.Keyword(null,"headline","headline",-157157727).cljs$core$IFn$_invoke$arity$1(x));
if(cljs.core.truth_(or__6824__auto__)){
return or__6824__auto__;
} else {
var or__6824__auto____$1 = cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("(?i)"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ss","ss",-1463049578).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gs)))].join('')),akiee.node.tags_string.call(null,x));
if(cljs.core.truth_(or__6824__auto____$1)){
return or__6824__auto____$1;
} else {
return cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("(?i)"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ss","ss",-1463049578).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gs)))].join('')),new cljs.core.Keyword(null,"project","project",1124394579).cljs$core$IFn$_invoke$arity$1(x));
}
}
})())){
return true;
} else {
return false;
}
} else {
return true;
}
});})(filter_tasks,filter_state))
;
var max_100 = ((function (filter_tasks,filter_state,filter_search){
return (function (lon){
if(((100) < cljs.core.count.call(null,lon))){
return cljs.core.subvec.call(null,lon,(0),(100));
} else {
return lon;
}
});})(filter_tasks,filter_state,filter_search))
;
var if_done = ((function (filter_tasks,filter_state,filter_search,max_100){
return (function (lon){
if(cljs.core._EQ_.call(null,ls,akiee.constants.DONE)){
return max_100.call(null,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"fin","fin",712246207),akiee.node.newer_date_QMARK_,lon));
} else {
return lon;
}
});})(filter_tasks,filter_state,filter_search,max_100))
;
return if_done.call(null,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"rank","rank",-1706728502),akiee.node.higher_rank_QMARK_,cljs.core.filter.call(null,filter_search,cljs.core.filter.call(null,filter_state,cljs.core.filter.call(null,filter_tasks,cljs.core.deref.call(null,akiee.app_db.task_list))))));
});
/**
 * -> ListOfNode
 *   shows the tasks of the app-state, according to the current ListState
 *   ---------------------------------------------------------------------------
 *   ListState -> ListOfNode
 *   consumes a ListState ls, shows the tasks of the app-state, according to ls
 */
akiee.app_db.tasks = (function akiee$app_db$tasks(var_args){
var args11877 = [];
var len__7933__auto___11880 = arguments.length;
var i__7934__auto___11881 = (0);
while(true){
if((i__7934__auto___11881 < len__7933__auto___11880)){
args11877.push((arguments[i__7934__auto___11881]));

var G__11882 = (i__7934__auto___11881 + (1));
i__7934__auto___11881 = G__11882;
continue;
} else {
}
break;
}

var G__11879 = args11877.length;
switch (G__11879) {
case 0:
return akiee.app_db.tasks.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return akiee.app_db.tasks.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args11877.length)].join('')));

}
});

akiee.app_db.tasks.cljs$core$IFn$_invoke$arity$0 = (function (){
if(cljs.core._EQ_.call(null,akiee.app_db.list_state.call(null),akiee.constants.ALL)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [akiee.app_db.tasks_helper.call(null,akiee.app_db.app_state,akiee.constants.TODO),akiee.app_db.tasks_helper.call(null,akiee.app_db.app_state,akiee.constants.DOING),akiee.app_db.tasks_helper.call(null,akiee.app_db.app_state,akiee.constants.DONE)], null);
} else {
return akiee.app_db.tasks_helper.call(null,akiee.app_db.app_state,akiee.app_db.list_state.call(null));
}
});

akiee.app_db.tasks.cljs$core$IFn$_invoke$arity$1 = (function (ls){
if(cljs.core._EQ_.call(null,ls,akiee.constants.ALL)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [akiee.app_db.tasks_helper.call(null,akiee.app_db.app_state,akiee.constants.TODO),akiee.app_db.tasks_helper.call(null,akiee.app_db.app_state,akiee.constants.DOING),akiee.app_db.tasks_helper.call(null,akiee.app_db.app_state,akiee.constants.DONE)], null);
} else {
return akiee.app_db.tasks_helper.call(null,akiee.app_db.app_state,ls);
}
});

akiee.app_db.tasks.cljs$lang$maxFixedArity = 1;

akiee.app_db.no_of_tasks_helper = (function akiee$app_db$no_of_tasks_helper(state){
var filter_tasks = (function (x){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(x),(2))){
return true;
} else {
return false;
}
});
var filter_state = ((function (filter_tasks){
return (function (x){
if(cljs.core._EQ_.call(null,state,akiee.constants.ALL)){
return true;
} else {
if(cljs.core._EQ_.call(null,state,new cljs.core.Keyword(null,"todo","todo",-1046442570).cljs$core$IFn$_invoke$arity$1(x))){
return true;
} else {
return false;

}
}
});})(filter_tasks))
;
return cljs.core.count.call(null,cljs.core.filter.call(null,filter_state,cljs.core.filter.call(null,filter_tasks,cljs.core.deref.call(null,akiee.app_db.task_list))));
});
/**
 * -> {:all NUMBER :todo NUMBER :doing NUMBER :done NUMBER}
 *   Produces a dictionary with the number of the corresponding task-states
 */
akiee.app_db.no_of_tasks = (function akiee$app_db$no_of_tasks(){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"all","all",892129742),akiee.app_db.no_of_tasks_helper.call(null,akiee.constants.ALL),new cljs.core.Keyword(null,"todo","todo",-1046442570),akiee.app_db.no_of_tasks_helper.call(null,akiee.constants.TODO),new cljs.core.Keyword(null,"doing","doing",-3342172),akiee.app_db.no_of_tasks_helper.call(null,akiee.constants.DOING),new cljs.core.Keyword(null,"done","done",-889844188),akiee.app_db.no_of_tasks_helper.call(null,akiee.constants.DONE)], null);
});
/**
 * -> ListOfString
 *   returns a List of Strings with the projects in the app-state
 */
akiee.app_db.projects = (function akiee$app_db$projects(){
var filter_nodes = (function (x){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(x),(1))){
return true;
} else {
return false;
}
});
return cljs.core.vec.call(null,cljs.core.sort.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"headline","headline",-157157727),cljs.core.filter.call(null,filter_nodes,cljs.core.deref.call(null,akiee.app_db.task_list)))));
});
akiee.app_db.task_location = (function akiee$app_db$task_location(){
return new cljs.core.Keyword(null,"task-location","task-location",1147747826).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,akiee.app_db.conf_state));
});
/**
 * Bool -> GlobalState
 *   consumes the Bool b switches the changed? variable and return the new app-state
 */
akiee.app_db.set_changed_BANG_ = (function akiee$app_db$set_changed_BANG_(b){
return cljs.core.swap_BANG_.call(null,akiee.app_db.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"changed?","changed?",-437828330),b);
});
/**
 * String -> GlobalState
 *   consumes a String s and changes the search-string of the app-state accordingly;
 *   returns the new GlobalState
 */
akiee.app_db.set_search_string_BANG_ = (function akiee$app_db$set_search_string_BANG_(s){
return cljs.core.swap_BANG_.call(null,akiee.app_db.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"ss","ss",-1463049578),s);
});
akiee.app_db.set_unselected_BANG_ = (function akiee$app_db$set_unselected_BANG_(){

return cljs.core.swap_BANG_.call(null,akiee.app_db.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"selected","selected",574897764),null);
});
/**
 * String -> GlobalState
 *   consumes a String ky and changes the :selected GlobalState accordingly;
 *   returns the new GlobalState
 */
akiee.app_db.set_selected_BANG_ = (function akiee$app_db$set_selected_BANG_(ky){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,akiee.app_db.app_state)),ky)){
return cljs.core.swap_BANG_.call(null,akiee.app_db.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"selected","selected",574897764),null);
} else {
return cljs.core.swap_BANG_.call(null,akiee.app_db.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"selected","selected",574897764),ky);
}
});
/**
 * String -> GlobalState
 *   consumes a String attr and changes the :selected GlobalState accordingly;
 *   retruns the new GlobalState
 */
akiee.app_db.set_editable_BANG_ = (function akiee$app_db$set_editable_BANG_(attr){
return cljs.core.swap_BANG_.call(null,akiee.app_db.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"editable","editable",1930280326),attr);
});
/**
 * -> Boolean
 *   switches the editor? state and returns it
 */
akiee.app_db.switch_editor_BANG_ = (function akiee$app_db$switch_editor_BANG_(){
if(cljs.core.truth_(akiee.app_db.editor_QMARK_.call(null))){
return cljs.core.swap_BANG_.call(null,akiee.app_db.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"editor?","editor?",1562728713),false,new cljs.core.Keyword(null,"ss","ss",-1463049578),"");
} else {
var ea = akiee.dom_helpers.get_element.call(null,"editor-area");
cljs.core.swap_BANG_.call(null,akiee.app_db.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"editor?","editor?",1562728713),true,new cljs.core.Keyword(null,"search?","search?",785472524),false,new cljs.core.Keyword(null,"entry?","entry?",2007901397),false,new cljs.core.Keyword(null,"ss","ss",-1463049578),"",new cljs.core.Keyword(null,"selected","selected",574897764),null);

akiee.app_db.set_changed_BANG_.call(null,true);

ea.value = akiee.node.lon__GT_md.call(null,akiee.app_db.nodes.call(null));

ea.focus();

return ea.click();
}
});
/**
 * -> GlobalState
 *   switches the search? state and the new app-state
 */
akiee.app_db.switch_search_BANG_ = (function akiee$app_db$switch_search_BANG_(){
if(cljs.core.truth_(akiee.app_db.search_QMARK_.call(null))){
akiee.dom_helpers.get_element.call(null,"search-input").value = "";

return cljs.core.swap_BANG_.call(null,akiee.app_db.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"search?","search?",785472524),false,new cljs.core.Keyword(null,"ss","ss",-1463049578),"");
} else {
var se = akiee.dom_helpers.get_element.call(null,"search-input");
akiee.dom_helpers.get_element.call(null,"search-input").value = "";

cljs.core.swap_BANG_.call(null,akiee.app_db.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"editor?","editor?",1562728713),false,new cljs.core.Keyword(null,"search?","search?",785472524),true,new cljs.core.Keyword(null,"entry?","entry?",2007901397),false);

return se.focus();
}
});
/**
 * -> GlobalState
 *   switches the search? state and the new app-state
 */
akiee.app_db.switch_entry_BANG_ = (function akiee$app_db$switch_entry_BANG_(){
if(cljs.core.truth_(akiee.app_db.entry_QMARK_.call(null))){
return cljs.core.swap_BANG_.call(null,akiee.app_db.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"entry?","entry?",2007901397),false,new cljs.core.Keyword(null,"ss","ss",-1463049578),"");
} else {
var entry = akiee.dom_helpers.get_element.call(null,"enter-headline");
cljs.core.swap_BANG_.call(null,akiee.app_db.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"editor?","editor?",1562728713),false,new cljs.core.Keyword(null,"search?","search?",785472524),false,new cljs.core.Keyword(null,"entry?","entry?",2007901397),true,new cljs.core.Keyword(null,"ss","ss",-1463049578),"");

return entry.focus();
}
});
/**
 * String -> ConfigurationState
 *   Consumes a Path directory and return the configuration state
 */
akiee.app_db.set_task_location_BANG_ = (function akiee$app_db$set_task_location_BANG_(p){
return cljs.core.swap_BANG_.call(null,akiee.app_db.conf_state,cljs.core.assoc,new cljs.core.Keyword(null,"task-location","task-location",1147747826),p);
});
/**
 * ListState -> GlobalState
 *   Consumes a Liststate ls switches the ls variable and editor? search? search? accordingly
 */
akiee.app_db.switch_list_state_BANG_ = (function akiee$app_db$switch_list_state_BANG_(ls){
return cljs.core.swap_BANG_.call(null,akiee.app_db.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"editor?","editor?",1562728713),false,new cljs.core.Keyword(null,"search?","search?",785472524),false,new cljs.core.Keyword(null,"entry?","entry?",2007901397),false,new cljs.core.Keyword(null,"ss","ss",-1463049578),"",new cljs.core.Keyword(null,"ls","ls",1195788590),ls);
});
/**
 * -> GlobalState
 *   switches the ls variable to TODO and editor? search? search? accordingly
 */
akiee.app_db.switch_todo_BANG_ = (function akiee$app_db$switch_todo_BANG_(){
return akiee.app_db.switch_list_state_BANG_.call(null,akiee.constants.TODO);
});
/**
 * -> GlobalState
 *   switches the ls variable to DOING and editor? search? search? accordingly
 */
akiee.app_db.switch_doing_BANG_ = (function akiee$app_db$switch_doing_BANG_(){
return akiee.app_db.switch_list_state_BANG_.call(null,akiee.constants.DOING);
});
/**
 * -> GlobalState
 *   switches the ls variable to DONE and editor? search? search? accordingly
 */
akiee.app_db.switch_done_BANG_ = (function akiee$app_db$switch_done_BANG_(){
return akiee.app_db.switch_list_state_BANG_.call(null,akiee.constants.DONE);
});
/**
 * -> GlobalState
 *   switches the ls variable to ALL and editor? search? search? accordingly
 */
akiee.app_db.switch_all_BANG_ = (function akiee$app_db$switch_all_BANG_(){
return akiee.app_db.switch_list_state_BANG_.call(null,akiee.constants.ALL);
});
/**
 * GlobalState -> Int
 *   produces a new rank based on the tasks in the GlobalState gs
 */
akiee.app_db.__GT_rank_helper = (function akiee$app_db$__GT_rank_helper(gs){
var filter_tasks = (function (x){
if(cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"rank","rank",-1706728502).cljs$core$IFn$_invoke$arity$1(x),null)){
return true;
} else {
return false;
}
});
return ((new cljs.core.Keyword(null,"rank","rank",-1706728502).cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,cljs.core.vec.call(null,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"rank","rank",-1706728502),akiee.node.higher_rank_QMARK_,cljs.core.filter.call(null,filter_tasks,cljs.core.deref.call(null,gs)))))) | (0)) + (1));
});
/**
 * -> Int
 *   produces a new rank based on the app-state
 */
akiee.app_db.__GT_rank = (function akiee$app_db$__GT_rank(){
return akiee.app_db.__GT_rank_helper.call(null,akiee.app_db.task_list);
});
akiee.app_db.index_of_node_helper = (function akiee$app_db$index_of_node_helper(coll,hl,i){
if((cljs.core._EQ_.call(null,(1),(new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,coll)) | (0)))) && (cljs.core._EQ_.call(null,hl,new cljs.core.Keyword(null,"headline","headline",-157157727).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,coll))))){
return i;
} else {
if(cljs.core.empty_QMARK_.call(null,coll)){
return null;
} else {
return akiee.app_db.index_of_node_helper.call(null,cljs.core.rest.call(null,coll),hl,((1) + (1)));

}
}
});
/**
 * Collection String -> Integer
 *   Consumes a Collection coll and a healine hl;
 *   produces the position of the element with the headline hl and level 1
 */
akiee.app_db.index_of_node = (function akiee$app_db$index_of_node(coll,hl){
return akiee.app_db.index_of_node_helper.call(null,coll,hl,(0));
});
/**
 * Global-State ListOfNode -> GlobalState
 *   Resets the ListOfNode lon in the app-state; produces a new GlobalState
 */
akiee.app_db.reset_lon_BANG_ = (function akiee$app_db$reset_lon_BANG_(gs1,lon){
cljs.core.swap_BANG_.call(null,gs1,cljs.core.assoc,new cljs.core.Keyword(null,"changed?","changed?",-437828330),true);

return cljs.core.reset_BANG_.call(null,akiee.app_db.task_list,lon);
});
/**
 * Function Collection -> Integer
 *   Return the positions in positions of elements in coll that match the predicate pred 
 */
akiee.app_db.positions = (function akiee$app_db$positions(pred,coll){
return cljs.core.keep_indexed.call(null,(function (idx,x){
if(cljs.core.truth_(pred.call(null,x))){
return idx;
} else {
return null;
}
}),coll);
});
/**
 * String ListOfNode -> Integer
 *   Returns the position of the first of occurence of a node with key ky in ListOfNode lon
 */
akiee.app_db.node_pos_by_key = (function akiee$app_db$node_pos_by_key(ky,lon){
return cljs.core.first.call(null,akiee.app_db.positions.call(null,(function (x){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(x),ky)){
return true;
} else {
return false;
}
}),lon));
});
var lon_11886 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"node_2"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"node_1"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"orgode_33.##"], null)], null);
(akiee.app_db.node_pos_by_key.call(null,"node_2",lon_11886) === (0));

try{var values__10818__auto___11887 = (function (){var x__7666__auto__ = akiee.app_db.node_pos_by_key.call(null,"node_1",lon_11886);
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)),x__7666__auto__);
})();
var result__10819__auto___11888 = cljs.core.apply.call(null,cljs.core._EQ_,values__10818__auto___11887);
if(cljs.core.truth_(result__10819__auto___11888)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"node-pos-by-key","node-pos-by-key",1238423296,null),"node_1",new cljs.core.Symbol(null,"lon","lon",-2132367332,null)),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__10818__auto___11887),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"node-pos-by-key","node-pos-by-key",1238423296,null),"node_1",new cljs.core.Symbol(null,"lon","lon",-2132367332,null)),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__7666__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10818__auto___11887);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7666__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e11884){var t__10856__auto___11889 = e11884;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"node-pos-by-key","node-pos-by-key",1238423296,null),"node_1",new cljs.core.Symbol(null,"lon","lon",-2132367332,null)),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),t__10856__auto___11889,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__10818__auto___11890 = (function (){var x__7666__auto__ = akiee.app_db.node_pos_by_key.call(null,"orgode_33.##",lon_11886);
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(2)),x__7666__auto__);
})();
var result__10819__auto___11891 = cljs.core.apply.call(null,cljs.core._EQ_,values__10818__auto___11890);
if(cljs.core.truth_(result__10819__auto___11891)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"node-pos-by-key","node-pos-by-key",1238423296,null),"orgode_33.##",new cljs.core.Symbol(null,"lon","lon",-2132367332,null)),(2)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__10818__auto___11890),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"node-pos-by-key","node-pos-by-key",1238423296,null),"orgode_33.##",new cljs.core.Symbol(null,"lon","lon",-2132367332,null)),(2)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__7666__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10818__auto___11890);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7666__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e11885){var t__10856__auto___11892 = e11885;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"node-pos-by-key","node-pos-by-key",1238423296,null),"orgode_33.##",new cljs.core.Symbol(null,"lon","lon",-2132367332,null)),(2)),new cljs.core.Keyword(null,"actual","actual",107306363),t__10856__auto___11892,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}/**
 * String ListOfNode -> Integer
 *   Returns the position of the first of occurence of a node with key ky in ListOfNode lon
 */
akiee.app_db.node_pos_by_headline = (function akiee$app_db$node_pos_by_headline(hdln,lon){
return cljs.core.first.call(null,akiee.app_db.positions.call(null,(function (x){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"headline","headline",-157157727).cljs$core$IFn$_invoke$arity$1(x),hdln)){
return true;
} else {
return false;
}
}),lon));
});
var lon_11896 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"headline","headline",-157157727),"node_2"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"headline","headline",-157157727),"node_1"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"headline","headline",-157157727),"orgode_33.##"], null)], null);
try{var values__10818__auto___11897 = (function (){var x__7666__auto__ = akiee.app_db.node_pos_by_headline.call(null,"node_2",lon_11896);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7666__auto__);
})();
var result__10819__auto___11898 = cljs.core.apply.call(null,cljs.core.zero_QMARK_,values__10818__auto___11897);
if(cljs.core.truth_(result__10819__auto___11898)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"zero?","zero?",325758897,null),cljs.core.list(new cljs.core.Symbol(null,"node-pos-by-headline","node-pos-by-headline",-1674868937,null),"node_2",new cljs.core.Symbol(null,"lon","lon",-2132367332,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core.zero_QMARK_,values__10818__auto___11897),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"zero?","zero?",325758897,null),cljs.core.list(new cljs.core.Symbol(null,"node-pos-by-headline","node-pos-by-headline",-1674868937,null),"node_2",new cljs.core.Symbol(null,"lon","lon",-2132367332,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__7666__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"zero?","zero?",325758897,null),values__10818__auto___11897);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7666__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e11893){var t__10856__auto___11899 = e11893;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"zero?","zero?",325758897,null),cljs.core.list(new cljs.core.Symbol(null,"node-pos-by-headline","node-pos-by-headline",-1674868937,null),"node_2",new cljs.core.Symbol(null,"lon","lon",-2132367332,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__10856__auto___11899,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__10818__auto___11900 = (function (){var x__7666__auto__ = akiee.app_db.node_pos_by_headline.call(null,"node_1",lon_11896);
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)),x__7666__auto__);
})();
var result__10819__auto___11901 = cljs.core.apply.call(null,cljs.core._EQ_,values__10818__auto___11900);
if(cljs.core.truth_(result__10819__auto___11901)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"node-pos-by-headline","node-pos-by-headline",-1674868937,null),"node_1",new cljs.core.Symbol(null,"lon","lon",-2132367332,null)),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__10818__auto___11900),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"node-pos-by-headline","node-pos-by-headline",-1674868937,null),"node_1",new cljs.core.Symbol(null,"lon","lon",-2132367332,null)),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__7666__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10818__auto___11900);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7666__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e11894){var t__10856__auto___11902 = e11894;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"node-pos-by-headline","node-pos-by-headline",-1674868937,null),"node_1",new cljs.core.Symbol(null,"lon","lon",-2132367332,null)),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),t__10856__auto___11902,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__10818__auto___11903 = (function (){var x__7666__auto__ = akiee.app_db.node_pos_by_headline.call(null,"orgode_33.##",lon_11896);
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(2)),x__7666__auto__);
})();
var result__10819__auto___11904 = cljs.core.apply.call(null,cljs.core._EQ_,values__10818__auto___11903);
if(cljs.core.truth_(result__10819__auto___11904)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"node-pos-by-headline","node-pos-by-headline",-1674868937,null),"orgode_33.##",new cljs.core.Symbol(null,"lon","lon",-2132367332,null)),(2)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__10818__auto___11903),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"node-pos-by-headline","node-pos-by-headline",-1674868937,null),"orgode_33.##",new cljs.core.Symbol(null,"lon","lon",-2132367332,null)),(2)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__7666__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10818__auto___11903);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7666__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e11895){var t__10856__auto___11905 = e11895;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"node-pos-by-headline","node-pos-by-headline",-1674868937,null),"orgode_33.##",new cljs.core.Symbol(null,"lon","lon",-2132367332,null)),(2)),new cljs.core.Keyword(null,"actual","actual",107306363),t__10856__auto___11905,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}/**
 * Node String Lon(atom) -> GlobalState
 *   Inserts a node n at the right position in project pro and returns GlobalState gs;
 *   returns a ListOfNode
 */
akiee.app_db.insert_node_helper_BANG_ = (function akiee$app_db$insert_node_helper_BANG_(n,pro,gs){
var lon = cljs.core.vec.call(null,cljs.core.deref.call(null,akiee.app_db.task_list));
var i = (akiee.app_db.node_pos_by_headline.call(null,pro,lon) + (1));
var new_lon = cljs.core.vec.call(null,cljs.core.concat.call(null,cljs.core.subvec.call(null,lon,(0),i),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [n], null),cljs.core.subvec.call(null,lon,i)));
return akiee.app_db.reset_lon_BANG_.call(null,gs,new_lon);
});
/**
 * Node String GlobalState -> ListOfNode
 *   Inserts a node n at the right position in project pro and returns a ListOfNode
 */
akiee.app_db.insert_node_BANG_ = (function akiee$app_db$insert_node_BANG_(n,pro){
return akiee.app_db.insert_node_helper_BANG_.call(null,n,pro,akiee.app_db.app_state);
});
/**
 * TaskState String String -> GlobalState
 *   Consumes a TaskState ts a headline hl and a project pro;
 *   adds a task to the app-state
 */
akiee.app_db.add_task_BANG_ = (function akiee$app_db$add_task_BANG_(ts,hl,pro){
var n = akiee.node.__GT_node.call(null,ts,hl,pro,akiee.app_db.__GT_rank.call(null));
return akiee.app_db.insert_node_BANG_.call(null,n,pro);
});
/**
 * String -> GlobalState
 *   Consumes a key ky and changes the task-state to the next of that task in task-list;
 *   returns the app-state
 */
akiee.app_db.next_ts_BANG_ = (function akiee$app_db$next_ts_BANG_(ky){
var lon = cljs.core.vec.call(null,cljs.core.deref.call(null,akiee.app_db.task_list));
var pos = akiee.app_db.node_pos_by_key.call(null,ky,lon);
var nd = cljs.core.get.call(null,lon,pos);
var ts = new cljs.core.Keyword(null,"todo","todo",-1046442570).cljs$core$IFn$_invoke$arity$1(nd);
return akiee.app_db.reset_lon_BANG_.call(null,akiee.app_db.app_state,cljs.core.assoc.call(null,lon,pos,cljs.core.assoc.call(null,nd,new cljs.core.Keyword(null,"todo","todo",-1046442570),((cljs.core._EQ_.call(null,ts,akiee.constants.TODO))?akiee.constants.DOING:((cljs.core._EQ_.call(null,ts,akiee.constants.DOING))?akiee.constants.DONE:((cljs.core._EQ_.call(null,ts,akiee.constants.DONE))?akiee.constants.TODO:null))),((cljs.core._EQ_.call(null,ts,akiee.constants.DOING))?new cljs.core.Keyword(null,"fin","fin",712246207):null),((cljs.core._EQ_.call(null,ts,akiee.constants.DOING))?(new Date()):null))));
});
/**
 * String -> GlobalState
 *   Consumes a key ky and changes the task-state to the previous of that task in task-list;
 *   returns the app-state
 */
akiee.app_db.prev_ts_BANG_ = (function akiee$app_db$prev_ts_BANG_(ky){
var lon = cljs.core.vec.call(null,cljs.core.deref.call(null,akiee.app_db.task_list));
var pos = akiee.app_db.node_pos_by_key.call(null,ky,lon);
var nd = cljs.core.get.call(null,lon,pos);
var ts = new cljs.core.Keyword(null,"todo","todo",-1046442570).cljs$core$IFn$_invoke$arity$1(nd);
return akiee.app_db.reset_lon_BANG_.call(null,akiee.app_db.app_state,cljs.core.assoc.call(null,lon,pos,cljs.core.assoc.call(null,nd,new cljs.core.Keyword(null,"todo","todo",-1046442570),((cljs.core._EQ_.call(null,ts,akiee.constants.TODO))?akiee.constants.DONE:((cljs.core._EQ_.call(null,ts,akiee.constants.DOING))?akiee.constants.TODO:((cljs.core._EQ_.call(null,ts,akiee.constants.DONE))?akiee.constants.DOING:null))))));
});
/**
 * Integer -> Node
 *   Returns node at pos
 */
akiee.app_db.node_by_pos = (function akiee$app_db$node_by_pos(pos){
return cljs.core.nth.call(null,cljs.core.deref.call(null,akiee.app_db.task_list),pos);
});
/**
 * String -> Node
 *   Consumes a key and returns the node from the app-state
 */
akiee.app_db.node_by_key = (function akiee$app_db$node_by_key(ky){
return akiee.app_db.node_by_pos.call(null,akiee.app_db.node_pos_by_key.call(null,ky,akiee.app_db.nodes.call(null)));
});
/**
 * -> node
 */
akiee.app_db.sidebar_content = (function akiee$app_db$sidebar_content(){
if(cljs.core.truth_(akiee.app_db.selected.call(null))){
return akiee.app_db.node_by_key.call(null,akiee.app_db.selected.call(null));
} else {
return null;
}
});
akiee.app_db.task_file_path = (function akiee$app_db$task_file_path(){
return akiee.fileoperations.task_file_path.call(null,new cljs.core.Keyword(null,"task-location","task-location",1147747826).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,akiee.app_db.conf_state)));
});
/**
 * String Node Keyword -> GlobalState
 *   consumes content String c, Node n and Keyword ky;
 *   changes the content c for keywerd ky in n and safes to app-state
 */
akiee.app_db.change_sidebar_element = (function akiee$app_db$change_sidebar_element(c,n,ky){
var nn = cljs.core.assoc.call(null,n,ky,c);
var np = akiee.app_db.node_pos_by_key.call(null,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(nn),akiee.app_db.nodes.call(null));
var nlon = cljs.core.assoc.call(null,cljs.core.vec.call(null,akiee.app_db.nodes.call(null)),np,nn);
return akiee.app_db.reset_lon_BANG_.call(null,akiee.app_db.app_state,nlon);
});
/**
 * String Node -> GlobalState
 *   consumes content String c and Node n;
 *   changes the headline in n and safes to app-state
 */
akiee.app_db.change_headline = (function akiee$app_db$change_headline(c,n){
return akiee.app_db.change_sidebar_element.call(null,c,n,new cljs.core.Keyword(null,"headline","headline",-157157727));
});
/**
 * String Node -> GlobalState
 *   consumes content String c and Node n;
 *   changes the body in n and safes to app-state
 */
akiee.app_db.change_body = (function akiee$app_db$change_body(c,n){
return akiee.app_db.change_sidebar_element.call(null,c,n,new cljs.core.Keyword(null,"body","body",-2049205669));
});
/**
 * String Node -> GlobalState
 *   consumes content String c and Node n;
 *   changes the state in n and safes to app-state
 */
akiee.app_db.change_state = (function akiee$app_db$change_state(c,n){
return akiee.app_db.change_sidebar_element.call(null,c,n,new cljs.core.Keyword(null,"todo","todo",-1046442570));
});
/**
 * String Node -> GlobalState
 *   consumes content String c and Node n;
 *   changes the project in n and safes to app-state
 */
akiee.app_db.change_project = (function akiee$app_db$change_project(c,n){
return akiee.app_db.change_sidebar_element.call(null,c,n,new cljs.core.Keyword(null,"project","project",1124394579));
});
/**
 * String Node -> GlobalState
 *   consumes content String c and Node n;
 *   changes the project in n and safes to app-state
 */
akiee.app_db.change_scheduled = (function akiee$app_db$change_scheduled(c,n){
return akiee.app_db.change_sidebar_element.call(null,c,n,new cljs.core.Keyword(null,"scheduled","scheduled",553898551));
});
/**
 * String Node -> GlobalState
 *   consumes content String c and Node n;
 *   changes the project in n and safes to app-state
 */
akiee.app_db.change_deadline = (function akiee$app_db$change_deadline(c,n){
return akiee.app_db.change_sidebar_element.call(null,c,n,new cljs.core.Keyword(null,"deadline","deadline",628964572));
});
/**
 * String Node -> GlobalState
 *   consumes content commma seperated String c and Node n;
 *   changes the project in n and safes to app-state
 */
akiee.app_db.change_tags = (function akiee$app_db$change_tags(c,n){
var tags = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,c,","));
return akiee.app_db.change_sidebar_element.call(null,tags,n,new cljs.core.Keyword(null,"tags","tags",1771418977));
});
/**
 * String Node -> GlobalState
 *   consumes String c with repeat information Node n;
 *   changes the project in n and safes to app-state
 */
akiee.app_db.change_reps = (function akiee$app_db$change_reps(c,n){
return akiee.app_db.change_sidebar_element.call(null,akiee.node.__GT_repeat.call(null,c),n,new cljs.core.Keyword(null,"repeat","repeat",832692087));
});
