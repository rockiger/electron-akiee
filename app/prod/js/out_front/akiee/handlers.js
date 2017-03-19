// Compiled by ClojureScript 1.9.495 {:elide-asserts true}
goog.provide('akiee.handlers');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('jayq.core');
goog.require('historian.core');
goog.require('cljs.nodejs');
akiee.handlers.gui = require("nw.gui");
akiee.handlers.path = cljs.nodejs.require.call(null,"path");
akiee.handlers.fs = require("fs");
cljs.core.enable_console_print_BANG_.call(null);
akiee.handlers.WIN = akiee.handlers.gui.Window.get();
akiee.handlers._STAR_menu_STAR_ = (new akiee.handlers.gui.Menu());
akiee.handlers._STAR_taskmenu_STAR_ = (new akiee.handlers.gui.Menu());
akiee.handlers._STAR_open_file_chooser_STAR_ = akiee.handlers.get_element.call(null,"open-location-dialog");
akiee.handlers._STAR_save_file_chooser_STAR_ = akiee.handlers.get_element.call(null,"save-location-dialog");
akiee.handlers.on_file_change_reload = (function akiee$handlers$on_file_change_reload(pth){
return (function (){
db.set_unselected_BANG_.call(null);

return db.reset_tasklist_BANG_.call(null,pth);
});
});
/**
 * closes the entry box and hides it
 */
akiee.handlers.cancel_enter_task = (function akiee$handlers$cancel_enter_task(){
var hdln = akiee.handlers.get_element.call(null,"enter-headline");
hdln.value = "";

return db.switch_entry_BANG_.call(null);
});
/**
 * closes the search box and resets the search-string in the app-state
 */
akiee.handlers.cancel_search = (function akiee$handlers$cancel_search(){
return db.switch_search_BANG_.call(null);
});
/**
 * DOMElement -> Bool
 *   Handles the submisson of element e that are created by the enter task form
 */
akiee.handlers.handle_enter_task = (function akiee$handlers$handle_enter_task(ev){
var form = (ev["target"]);
var els = (form["elements"]);
var hdln = (els["headline"]).value;
var tast = (els["task-status"]).value;
var tapr = (els["task-project"]).value;
ev.stopPropagation();

ev.preventDefault();

if(cljs.core.not_EQ_.call(null,hdln,"")){
db.add_task_BANG_.call(null,tast,hdln,tapr);
} else {
}

akiee.handlers.cancel_enter_task.call(null);

return false;
});
/**
 * Event ->
 *   Handles the close event of win
 */
akiee.handlers.handle_close = (function akiee$handlers$handle_close(ev){
fo.save_task_file.call(null,no.lon__GT_md.call(null,db.nodes.call(null)),db.task_file_path.call(null),db.changed_QMARK_.call(null),db.set_changed_BANG_,(function (p1__9454_SHARP_,p2__9455_SHARP_){
return fw.on_file_change.call(null,p1__9454_SHARP_,p2__9455_SHARP_,akiee.handlers.on_file_change_reload.call(null,db.task_file_path.call(null)));
}));

return akiee.handlers.WIN.close(true);
});
/**
 * Event ->
 *   Handles the close event of win
 */
akiee.handlers.handle_blur = (function akiee$handlers$handle_blur(ev){
return fo.save_task_file.call(null,no.lon__GT_md.call(null,db.nodes.call(null)),db.task_file_path.call(null),db.changed_QMARK_.call(null),db.set_changed_BANG_,(function (p1__9456_SHARP_,p2__9457_SHARP_){
return fw.on_file_change.call(null,p1__9456_SHARP_,p2__9457_SHARP_,akiee.handlers.on_file_change_reload.call(null,db.task_file_path.call(null)));
}));
});
/**
 * Register the window event handlers
 */
akiee.handlers.register_winevents = (function akiee$handlers$register_winevents(){
goog.events.listen(window,"blur",akiee.handlers.handle_blur);

return akiee.handlers.WIN.on("close",akiee.handlers.handle_close);
});
/**
 * Event -> GlobalState
 *   Consumes the onchange Event ev and changes global filter string for search;
 *   returns the app-state
 */
akiee.handlers.handle_onchange_search = (function akiee$handlers$handle_onchange_search(ev){
return db.set_search_string_BANG_.call(null,ev.target.value);
});
/**
 * Event -> GlobalState
 *   Consumes the onblur Event ev and changes global lon ;
 *   returns the app-state
 */
akiee.handlers.handle_blur_editor = (function akiee$handlers$handle_blur_editor(ev){
var md = ev.target.value;
var lon = no.__GT_nodes_from_md.call(null,md);
db.reset_lon_BANG_.call(null,db.app_state,lon);

return db.set_changed_BANG_.call(null,true);
});
/**
 * Event -> GlobalState
 *   Consumes the onclick Event ev and changes global lon with task to next state;
 *   returns the app-state
 */
akiee.handlers.handle_onclick_taskstate = (function akiee$handlers$handle_onclick_taskstate(ev){
var row = ev.currentTarget.parentNode;
var shift_QMARK_ = ev.shiftKey;
var ky = row.dataset.key;
if(cljs.core.truth_(shift_QMARK_)){
db.prev_ts_BANG_.call(null,ky);
} else {
db.next_ts_BANG_.call(null,ky);
}

return ev.stopPropagation();
});
/**
 * Event -> String
 *   Consume an Event from a rank changing button and returns the key of the corresponding row
 */
akiee.handlers.rank_helper = (function akiee$handlers$rank_helper(ev){
return ev.currentTarget.parentNode.parentNode.dataset.key;
});
/**
 * Event -> GlobalState
 *   Consumes the onclick Event ev and changes the global lon with rank change down-wards
 */
akiee.handlers.handle_onclick_down = (function akiee$handlers$handle_onclick_down(ev){
var ky = akiee.handlers.rank_helper.call(null,ev);
r.down_rank.call(null,ky);

return ev.stopPropagation();
});
/**
 * Event -> GlobalState
 *   Consumes the onclick Event ev and changes the global lon with rank change up-wards
 */
akiee.handlers.handle_onclick_up = (function akiee$handlers$handle_onclick_up(ev){
var ky = akiee.handlers.rank_helper.call(null,ev);
r.up_rank.call(null,ky);

return ev.stopPropagation();
});
/**
 * Event -> GlobalState
 *   Consumes the onclick Event ev and changes the global state selected
 */
akiee.handlers.onclick_task = (function akiee$handlers$onclick_task(ev){
var ky = ev.currentTarget.dataset.key;
db.set_selected_BANG_.call(null,ky);

return ev.stopPropagation();
});
/**
 * String String -> GlobalState
 *   Consumes the name of the sidebar element n and the id and changes the global state editable
 */
akiee.handlers.onclick_sidebar_element = (function akiee$handlers$onclick_sidebar_element(n,id){
db.set_editable_BANG_.call(null,n);

return setTimeout((function (){
return akiee.handlers.get_element.call(null,id).focus();
}),(100));
});
/**
 * Event -> GlobalState
 *   Consumes the onclick Event ev and changes the global state editable
 */
akiee.handlers.onclick_hdln = (function akiee$handlers$onclick_hdln(ev){
return akiee.handlers.onclick_sidebar_element.call(null,"hdln","sidebar-headline");
});
/**
 * Event -> GlobalState
 *   Consumes the onclick Event ev and changes the global state editable
 */
akiee.handlers.onclick_body = (function akiee$handlers$onclick_body(ev){
return akiee.handlers.onclick_sidebar_element.call(null,"body","sidebar-body-ta");
});
/**
 * Event -> GlobalState
 *   Consumes the onclick Event ev and changes the global state editable
 */
akiee.handlers.onclick_state = (function akiee$handlers$onclick_state(ev){
return akiee.handlers.onclick_sidebar_element.call(null,"state","sidebar-task-state");
});
/**
 * Event -> GlobalState
 *   Consumes the onclick Event ev and changes the global state editable
 */
akiee.handlers.onclick_project = (function akiee$handlers$onclick_project(ev){
return akiee.handlers.onclick_sidebar_element.call(null,"project","sidebar-task-project");
});
/**
 * Event -> GlobalState
 *   Consumes the onclick Event ev and changes the global state scheduled
 */
akiee.handlers.onclick_scheduled = (function akiee$handlers$onclick_scheduled(ev){
return akiee.handlers.onclick_sidebar_element.call(null,"scheduled","sidebar-scheduled-form");
});
/**
 * Event -> GlobalState
 *   Consumes the onclick Event ev and changes the global state deadline
 */
akiee.handlers.onclick_deadline = (function akiee$handlers$onclick_deadline(ev){
return akiee.handlers.onclick_sidebar_element.call(null,"deadline","sidebar-deadline-form");
});
/**
 * Event -> GlobalState
 *   Consumes the onclick Event ev and changes the global state tags
 */
akiee.handlers.onclick_tags = (function akiee$handlers$onclick_tags(ev){
return akiee.handlers.onclick_sidebar_element.call(null,"tags","sidebar-tags-form");
});
/**
 * Event -> GlobalState
 *   Consumes the onclick Event ev and changes the global state tags
 */
akiee.handlers.onclick_reps = (function akiee$handlers$onclick_reps(ev){
return akiee.handlers.onclick_sidebar_element.call(null,"reps","sidebar-reps-form");
});
/**
 * Event -> Void
 *   Consumes the onclick Event ev and closes the application
 */
akiee.handlers.onclick_close = (function akiee$handlers$onclick_close(ev){
return akiee.handlers.WIN.close();
});
/**
 * Event -> Void
 *   Consumes the onclick Event ev and toggles the menu
 */
akiee.handlers.onclick_menu = (function akiee$handlers$onclick_menu(ev){
var undo = (akiee.handlers._STAR_menu_STAR_.items[(0)]);
var redo = (akiee.handlers._STAR_menu_STAR_.items[(1)]);
undo.enabled = historian.core.can_undo_QMARK_.call(null);

redo.enabled = historian.core.can_redo_QMARK_.call(null);

return akiee.handlers._STAR_menu_STAR_.popup((akiee.handlers.WIN.width - (154)),(39));
});
/**
 * Event -> Void
 *   Consumes the onclick Event ev and toggles the menu
 */
akiee.handlers.onclick_taskmenu = (function akiee$handlers$onclick_taskmenu(ev){
var ky = akiee.handlers.rank_helper.call(null,ev);
var native$ = ev.nativeEvent;
var to_top_entry = (akiee.handlers._STAR_taskmenu_STAR_.items[(0)]);
var to_bottom_entry = (akiee.handlers._STAR_taskmenu_STAR_.items[(1)]);
to_top_entry.click = ((function (ky,native$,to_top_entry,to_bottom_entry){
return (function (){
return r.to_top.call(null,ky);
});})(ky,native$,to_top_entry,to_bottom_entry))
;

to_bottom_entry.click = ((function (ky,native$,to_top_entry,to_bottom_entry){
return (function (){
return r.to_bottom.call(null,ky);
});})(ky,native$,to_top_entry,to_bottom_entry))
;

akiee.handlers._STAR_taskmenu_STAR_.popup(native$.pageX,native$.pageY);

return ev.stopPropagation();
});
/**
 * Event -> GlobalState
 *   Consumes the onclick Event ev and changes the headline of a task
 */
akiee.handlers.onblur_sidebar_input = (function akiee$handlers$onblur_sidebar_input(ev){
var content = ev.currentTarget.value;
db.set_editable_BANG_.call(null,null);

if(cljs.core.not_EQ_.call(null,content,new cljs.core.Keyword(null,"headline","headline",-157157727).cljs$core$IFn$_invoke$arity$1(db.sidebar_content.call(null)))){
return db.change_headline.call(null,content,db.sidebar_content.call(null));
} else {
return null;
}
});
/**
 * Event -> GlobalState
 *   Consumes the onclick Event ev and changes the body of a task
 */
akiee.handlers.onblur_sidebar_body = (function akiee$handlers$onblur_sidebar_body(ev){
var content = ev.currentTarget.value;
db.set_editable_BANG_.call(null,null);

if(cljs.core.not_EQ_.call(null,content,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(db.sidebar_content.call(null)))){
return db.change_body.call(null,s.replace.call(null,content,/#/,""),db.sidebar_content.call(null));
} else {
return null;
}
});
/**
 * Event -> GlobalState
 *   Consumes the onclick Event ev and changes the state of a task
 */
akiee.handlers.onblur_sidebar_state = (function akiee$handlers$onblur_sidebar_state(ev){
var content = ev.currentTarget.value;
db.set_editable_BANG_.call(null,null);

if(cljs.core.not_EQ_.call(null,content,new cljs.core.Keyword(null,"todo","todo",-1046442570).cljs$core$IFn$_invoke$arity$1(db.sidebar_content.call(null)))){
return db.change_state.call(null,content,db.sidebar_content.call(null));
} else {
return null;
}
});
/**
 * Event -> GlobalState
 *   Consumes the onclick Event ev and changes the project of a task
 */
akiee.handlers.onblur_sidebar_project = (function akiee$handlers$onblur_sidebar_project(ev){
var content = ev.currentTarget.value;
db.set_editable_BANG_.call(null,null);

if(cljs.core.not_EQ_.call(null,content,new cljs.core.Keyword(null,"project","project",1124394579).cljs$core$IFn$_invoke$arity$1(db.sidebar_content.call(null)))){
return db.change_project.call(null,content,db.sidebar_content.call(null));
} else {
return null;
}
});
/**
 * Event -> GlobalState
 *   Consumes the onclick Event ev and changes the scheduled time of a task
 */
akiee.handlers.onblur_sidebar_scheduled = (function akiee$handlers$onblur_sidebar_scheduled(ev){
var content = ev.currentTarget.value;
db.set_editable_BANG_.call(null,null);

if(cljs.core.not_EQ_.call(null,content,new cljs.core.Keyword(null,"scheduled","scheduled",553898551).cljs$core$IFn$_invoke$arity$1(db.sidebar_content.call(null)))){
return db.change_scheduled.call(null,content,db.sidebar_content.call(null));
} else {
return null;
}
});
/**
 * Event -> GlobalState
 *   Consumes the onclick Event ev and changes the project of a task
 */
akiee.handlers.onblur_sidebar_tags = (function akiee$handlers$onblur_sidebar_tags(ev){
var content = ev.currentTarget.value;
db.set_editable_BANG_.call(null,null);

if(cljs.core.not_EQ_.call(null,content,no.tags_string.call(null,db.sidebar_content.call(null)))){
return db.change_tags.call(null,content,db.sidebar_content.call(null));
} else {
return null;
}
});
/**
 * Event -> GlobalState
 *   Consumes the onclick Event ev and changes the project of a task
 */
akiee.handlers.onblur_sidebar_reps = (function akiee$handlers$onblur_sidebar_reps(ev){
var content = ev.currentTarget.value;
db.set_editable_BANG_.call(null,null);

if(cljs.core.not_EQ_.call(null,content,no.reps_string.call(null,db.sidebar_content.call(null)))){
return db.change_reps.call(null,content,db.sidebar_content.call(null));
} else {
return null;
}
});
/**
 * ->
 *   creates an on-blur-event on the sidebar-headline
 */
akiee.handlers.submit_sidebar_hdln = (function akiee$handlers$submit_sidebar_hdln(){
return akiee.handlers.get_element.call(null,"sidebar-headline").blur();
});
/**
 * ->
 *   creates an on-blur-event on the sidebar-headline
 */
akiee.handlers.submit_sidebar_body = (function akiee$handlers$submit_sidebar_body(){
return akiee.handlers.get_element.call(null,"sidebar-body").blur();
});
/**
 * ->
 *   creates an on-blur-event on the sidebar-headline
 */
akiee.handlers.submit_sidebar_state = (function akiee$handlers$submit_sidebar_state(){
return akiee.handlers.get_element.call(null,"sidebar-task-state").blur();
});
/**
 * ->
 *   creates an on-blur-event on the sidebar-headline
 */
akiee.handlers.submit_sidebar_project = (function akiee$handlers$submit_sidebar_project(){
return akiee.handlers.get_element.call(null,"sidebar-task-project").blur();
});
/**
 * ->
 *   creates an on-blur-event on the sidebar-headline
 */
akiee.handlers.submit_sidebar_tags = (function akiee$handlers$submit_sidebar_tags(){
return akiee.handlers.get_element.call(null,"sidebar-tags-form").blur();
});
/**
 * ->
 *   creates an on-blur-event on the sidebar-headline
 */
akiee.handlers.submit_sidebar_reps = (function akiee$handlers$submit_sidebar_reps(){
return akiee.handlers.get_element.call(null,"sidebar-reps-form").blur();
});
/**
 * Event -> GlobalState
 *   Handles the event when the date changed and changes the GlobalState accordingly
 */
akiee.handlers.handle_change_date = (function akiee$handlers$handle_change_date(ev){
var date = ev.date;
if(cljs.core._EQ_.call(null,db.editable.call(null),"scheduled")){
db.set_editable_BANG_.call(null,null);

return db.change_scheduled.call(null,date,db.sidebar_content.call(null));
} else {
if(cljs.core._EQ_.call(null,db.editable.call(null),"deadline")){
db.set_editable_BANG_.call(null,null);

return db.change_deadline.call(null,date,db.sidebar_content.call(null));
} else {
return null;
}
}
});
/**
 * Event -> Void
 *   Handles the event when the user clicks on a link in the details area
 */
akiee.handlers.handle_details_link_click = (function akiee$handlers$handle_details_link_click(ev){
var target = ev.target;
ev.preventDefault();

ev.stopPropagation();

return akiee.handlers.gui.Shell.openExternal(target);
});
/**
 * Event -> Void
 * Show the Task statistics
 */
akiee.handlers.show_statistics_BANG_ = (function akiee$handlers$show_statistics_BANG_(){
var n_o_t = db.no_of_tasks.call(null);
return alert([cljs.core.str.cljs$core$IFn$_invoke$arity$1("All Tasks: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"all","all",892129742).cljs$core$IFn$_invoke$arity$1(n_o_t)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\nTodo: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"todo","todo",-1046442570).cljs$core$IFn$_invoke$arity$1(n_o_t)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\nDoing: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"doing","doing",-3342172).cljs$core$IFn$_invoke$arity$1(n_o_t)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\nDone: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"done","done",-889844188).cljs$core$IFn$_invoke$arity$1(n_o_t)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n\nTask-Location: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(db.task_location.call(null))].join(''));
});
akiee.handlers.save_task_helper = (function akiee$handlers$save_task_helper(pth,fpth){
fw.unwatch_file.call(null,db.task_file_path.call(null));

db.set_task_location_BANG_.call(null,pth);

return fo.save_task_file.call(null,no.lon__GT_md.call(null,db.nodes.call(null)),fpth,true,db.set_changed_BANG_,(function (p1__9458_SHARP_,p2__9459_SHARP_){
return fw.on_file_change.call(null,p1__9458_SHARP_,p2__9459_SHARP_,akiee.handlers.on_file_change_reload.call(null,pth));
}));
});
/**
 * Event -> Void
 *   Sets the the tasks-location to the value attribute of the given Event ev
 */
akiee.handlers.save_task_location_BANG_ = (function akiee$handlers$save_task_location_BANG_(ev){
var pth = ev.target.value;
var fpth = akiee.handlers.path.join(pth,akiee.handlers.filename);
if(cljs.core.truth_(cljs.core.not_empty.call(null,pth))){
if(cljs.core.truth_(akiee.handlers.fs.existsSync(fpth))){
var confirmation_9460 = confirm("There is already a tasklist in this location.\nDo you really want to overwrite it?");
if(cljs.core.not.call(null,confirmation_9460)){
cljs.core.println.call(null,"Do not Overwrite");
} else {
cljs.core.println.call(null,"Overwrite");

console.log(fpth);

akiee.handlers.save_task_helper.call(null,pth,fpth);
}
} else {
cljs.core.println.call(null,"Save as new task list");

console.log(fpth);

akiee.handlers.save_task_helper.call(null,pth,fpth);
}

return ev.target.value = "";
} else {
return null;
}
});
/**
 * Event -> Void
 *   Show the Task statistics
 */
akiee.handlers.save_task_location_dialog_BANG_ = (function akiee$handlers$save_task_location_dialog_BANG_(){
return akiee.handlers._STAR_save_file_chooser_STAR_.click();
});
akiee.handlers.open_task_helper = (function akiee$handlers$open_task_helper(pth,fpth){
db.set_unselected_BANG_.call(null);

historian.core.clear_history_BANG_.call(null);

fw.unwatch_file.call(null,db.task_file_path.call(null));

fw.watch_file.call(null,fpth,(function (p1__9461_SHARP_,p2__9462_SHARP_){
return fw.on_file_change.call(null,p1__9461_SHARP_,p2__9462_SHARP_,akiee.handlers.on_file_change_reload.call(null,pth));
}));

db.reset_tasklist_BANG_.call(null,pth);

return db.set_task_location_BANG_.call(null,pth);
});
/**
 * Event -> Void
 *  Sets the the tasks-location to the value attribute of the given Event ev
 */
akiee.handlers.open_task_location_BANG_ = (function akiee$handlers$open_task_location_BANG_(ev){
var pth = ev.target.value;
var fpth = akiee.handlers.path.join(pth,akiee.handlers.filename);
if(cljs.core.truth_(cljs.core.not_empty.call(null,pth))){
if(cljs.core.truth_(akiee.handlers.fs.existsSync(fpth))){
console.log("Fileexists");

console.log(pth);

return akiee.handlers.open_task_helper.call(null,pth,fpth);
} else {
return alert("This is not a valid task location directory!");
}
} else {
return null;
}
});
/**
 * Event -> Void
 *   Show the Task statistics
 */
akiee.handlers.open_task_location_dialog_BANG_ = (function akiee$handlers$open_task_location_dialog_BANG_(){
return akiee.handlers._STAR_open_file_chooser_STAR_.click();
});
/**
 * Event -> Void
 * Show the Task statistics
 */
akiee.handlers.show_about_BANG_ = (function akiee$handlers$show_about_BANG_(){
var n_o_t = db.no_of_tasks.call(null);
return alert([cljs.core.str.cljs$core$IFn$_invoke$arity$1("AKIEE\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("=============\n\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("About\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("--------------\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Akiee - a Markdown-based task manager\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Version 0.0.3\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(c) 2017 Marco Laspe <marco@rockiger.com>\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Licence: GNU General Public License\n\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Librarys\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("--------------\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("* Clojure/Clojurescript\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("* Reagent\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("* Garden\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("* Jayq\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("* Historian\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("* Nwjs\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("* Marked\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("* Org-Mode-Parser")].join(''));
});
/**
 * KeyEvent -> GlobalState
 *   Handles the keyevents that are created by js/document
 */
akiee.handlers.handle_keyup = (function akiee$handlers$handle_keyup(ev){
var mac_QMARK_ = ((cljs.core._EQ_.call(null,process.platform,"darwin"))?true:false);
var ky = ((function (mac_QMARK_){
return (function (p1__9463_SHARP_){
return p1__9463_SHARP_.keyCode;
});})(mac_QMARK_))
;
var ctrl_QMARK_ = ((mac_QMARK_)?((function (mac_QMARK_,ky){
return (function (p1__9464_SHARP_){
return p1__9464_SHARP_.metaKey;
});})(mac_QMARK_,ky))
:((function (mac_QMARK_,ky){
return (function (p1__9465_SHARP_){
return p1__9465_SHARP_.ctrlKey;
});})(mac_QMARK_,ky))
);
var shift_QMARK_ = ((function (mac_QMARK_,ky,ctrl_QMARK_){
return (function (p1__9466_SHARP_){
return p1__9466_SHARP_.shiftKey;
});})(mac_QMARK_,ky,ctrl_QMARK_))
;
if(cljs.core.truth_((function (){var and__6812__auto__ = cljs.core._EQ_.call(null,ky.call(null,ev),(32));
if(and__6812__auto__){
return ctrl_QMARK_.call(null,ev);
} else {
return and__6812__auto__;
}
})())){
return db.switch_editor_BANG_.call(null);
} else {
if(cljs.core.truth_((function (){var and__6812__auto__ = (cljs.core._EQ_.call(null,ky.call(null,ev),(49))) || (cljs.core._EQ_.call(null,ky.call(null,ev),(97)));
if(and__6812__auto__){
return ctrl_QMARK_.call(null,ev);
} else {
return and__6812__auto__;
}
})())){
return db.switch_todo_BANG_.call(null);
} else {
if(cljs.core.truth_((function (){var and__6812__auto__ = (cljs.core._EQ_.call(null,ky.call(null,ev),(50))) || (cljs.core._EQ_.call(null,ky.call(null,ev),(98)));
if(and__6812__auto__){
return ctrl_QMARK_.call(null,ev);
} else {
return and__6812__auto__;
}
})())){
return db.switch_doing_BANG_.call(null);
} else {
if(cljs.core.truth_((function (){var and__6812__auto__ = (cljs.core._EQ_.call(null,ky.call(null,ev),(51))) || (cljs.core._EQ_.call(null,ky.call(null,ev),(99)));
if(and__6812__auto__){
return ctrl_QMARK_.call(null,ev);
} else {
return and__6812__auto__;
}
})())){
return db.switch_done_BANG_.call(null);
} else {
if(cljs.core.truth_((function (){var and__6812__auto__ = (cljs.core._EQ_.call(null,ky.call(null,ev),(52))) || (cljs.core._EQ_.call(null,ky.call(null,ev),(100)));
if(and__6812__auto__){
return ctrl_QMARK_.call(null,ev);
} else {
return and__6812__auto__;
}
})())){
return db.switch_all_BANG_.call(null);
} else {
if(cljs.core.truth_((function (){var and__6812__auto__ = (cljs.core._EQ_.call(null,ky.call(null,ev),(69))) || (cljs.core._EQ_.call(null,ky.call(null,ev),(101)));
if(and__6812__auto__){
return ctrl_QMARK_.call(null,ev);
} else {
return and__6812__auto__;
}
})())){
return db.switch_editor_BANG_.call(null);
} else {
if(cljs.core.truth_((function (){var and__6812__auto__ = cljs.core._EQ_.call(null,ky.call(null,ev),(13));
if(and__6812__auto__){
return ctrl_QMARK_.call(null,ev);
} else {
return and__6812__auto__;
}
})())){
return db.switch_entry_BANG_.call(null);
} else {
if(cljs.core.truth_((function (){var and__6812__auto__ = cljs.core._EQ_.call(null,ky.call(null,ev),(70));
if(and__6812__auto__){
return ctrl_QMARK_.call(null,ev);
} else {
return and__6812__auto__;
}
})())){
return db.switch_search_BANG_.call(null);
} else {
if(cljs.core.truth_((function (){var and__6812__auto__ = cljs.core._EQ_.call(null,ky.call(null,ev),(89));
if(and__6812__auto__){
return ctrl_QMARK_.call(null,ev);
} else {
return and__6812__auto__;
}
})())){
return historian.core.redo_BANG_.call(null);
} else {
if(cljs.core.truth_((function (){var and__6812__auto__ = cljs.core._EQ_.call(null,ky.call(null,ev),(90));
if(and__6812__auto__){
var and__6812__auto____$1 = ctrl_QMARK_.call(null,ev);
if(cljs.core.truth_(and__6812__auto____$1)){
return shift_QMARK_.call(null,ev);
} else {
return and__6812__auto____$1;
}
} else {
return and__6812__auto__;
}
})())){
return historian.core.redo_BANG_.call(null);
} else {
if(cljs.core.truth_((function (){var and__6812__auto__ = cljs.core._EQ_.call(null,ky.call(null,ev),(90));
if(and__6812__auto__){
return ctrl_QMARK_.call(null,ev);
} else {
return and__6812__auto__;
}
})())){
return historian.core.undo_BANG_.call(null);
} else {
if(cljs.core.truth_((function (){var and__6812__auto__ = cljs.core._EQ_.call(null,ky.call(null,ev),(27));
if(and__6812__auto__){
return db.entry_QMARK_.call(null);
} else {
return and__6812__auto__;
}
})())){
return akiee.handlers.cancel_enter_task.call(null);
} else {
if(cljs.core.truth_((function (){var and__6812__auto__ = cljs.core._EQ_.call(null,ky.call(null,ev),(27));
if(and__6812__auto__){
return db.search_QMARK_.call(null);
} else {
return and__6812__auto__;
}
})())){
return akiee.handlers.cancel_search.call(null);
} else {
if(cljs.core.truth_((function (){var and__6812__auto__ = cljs.core._EQ_.call(null,ky.call(null,ev),(27));
if(and__6812__auto__){
return db.editable.call(null);
} else {
return and__6812__auto__;
}
})())){
return db.set_editable_BANG_.call(null,null);
} else {
if((cljs.core._EQ_.call(null,ky.call(null,ev),(13))) && (cljs.core._EQ_.call(null,db.editable.call(null),"hdln"))){
return akiee.handlers.submit_sidebar_hdln.call(null);
} else {
if((cljs.core._EQ_.call(null,ky.call(null,ev),(13))) && (cljs.core._EQ_.call(null,db.editable.call(null),"tags"))){
return akiee.handlers.submit_sidebar_tags.call(null);
} else {
if((cljs.core._EQ_.call(null,ky.call(null,ev),(13))) && (cljs.core._EQ_.call(null,db.editable.call(null),"reps"))){
return akiee.handlers.submit_sidebar_reps.call(null);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
/**
 * Register the keyhandlers
 */
akiee.handlers.register_keyevents = (function akiee$handlers$register_keyevents(){
return goog.events.listen(document,"keyup",akiee.handlers.handle_keyup);
});
akiee.handlers.register_datepicker_events = (function akiee$handlers$register_datepicker_events(){
$(document).ready((function (){
return $("#sidebar-scheduled-form").datepicker().on("hide",akiee.handlers.handle_change_date);
}));

return $(document).ready((function (){
return $("#sidebar-deadline-form").datepicker().on("hide",akiee.handlers.handle_change_date);
}));
});
/**
 * Register the click events on links in the details area
 */
akiee.handlers.register_click_links = (function akiee$handlers$register_click_links(){
var $body = jayq.core.$.call(null,new cljs.core.Keyword(null,"body","body",-2049205669));
return jayq.core.on.call(null,$body,"click",new cljs.core.Keyword(null,"a","a",-2123407586),"data",akiee.handlers.handle_details_link_click);
});
akiee.handlers.register_file_watcher = (function akiee$handlers$register_file_watcher(){
var fpth = db.task_file_path.call(null);
var pth = db.task_location.call(null);
if(cljs.core.truth_(akiee.handlers.fs.existsSync(fpth))){
return fw.watch_file.call(null,fpth,((function (fpth,pth){
return (function (p1__9467_SHARP_,p2__9468_SHARP_){
return fw.on_file_change.call(null,p1__9467_SHARP_,p2__9468_SHARP_,akiee.handlers.on_file_change_reload.call(null,pth));
});})(fpth,pth))
);
} else {
return null;
}
});
/**
 * Create the menus
 */
akiee.handlers.create_menu = (function akiee$handlers$create_menu(){
akiee.handlers._STAR_open_file_chooser_STAR_.addEventListener("change",akiee.handlers.open_task_location_BANG_);

akiee.handlers._STAR_save_file_chooser_STAR_.addEventListener("change",akiee.handlers.save_task_location_BANG_);

akiee.handlers._STAR_menu_STAR_.append((new akiee.handlers.gui.MenuItem(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"Undo",new cljs.core.Keyword(null,"click","click",1912301393),historian.core.undo_BANG_,new cljs.core.Keyword(null,"enabled","enabled",1195909756),false], null)))));

akiee.handlers._STAR_menu_STAR_.append((new akiee.handlers.gui.MenuItem(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"Redo",new cljs.core.Keyword(null,"click","click",1912301393),historian.core.redo_BANG_,new cljs.core.Keyword(null,"enabled","enabled",1195909756),false], null)))));

akiee.handlers._STAR_menu_STAR_.append((new akiee.handlers.gui.MenuItem(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"separator"], null)))));

akiee.handlers._STAR_menu_STAR_.append((new akiee.handlers.gui.MenuItem(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"Task statistics",new cljs.core.Keyword(null,"click","click",1912301393),akiee.handlers.show_statistics_BANG_,new cljs.core.Keyword(null,"enabled","enabled",1195909756),true], null)))));

akiee.handlers._STAR_menu_STAR_.append((new akiee.handlers.gui.MenuItem(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"separator"], null)))));

akiee.handlers._STAR_menu_STAR_.append((new akiee.handlers.gui.MenuItem(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"Open tasks...        ",new cljs.core.Keyword(null,"click","click",1912301393),akiee.handlers.open_task_location_dialog_BANG_,new cljs.core.Keyword(null,"enabled","enabled",1195909756),true], null)))));

akiee.handlers._STAR_menu_STAR_.append((new akiee.handlers.gui.MenuItem(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"Save tasks...        ",new cljs.core.Keyword(null,"click","click",1912301393),akiee.handlers.save_task_location_dialog_BANG_,new cljs.core.Keyword(null,"enabled","enabled",1195909756),true], null)))));

akiee.handlers._STAR_menu_STAR_.append((new akiee.handlers.gui.MenuItem(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"separator"], null)))));

akiee.handlers._STAR_menu_STAR_.append((new akiee.handlers.gui.MenuItem(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"About",new cljs.core.Keyword(null,"click","click",1912301393),akiee.handlers.show_about_BANG_,new cljs.core.Keyword(null,"enabled","enabled",1195909756),true], null)))));

return mn = akiee.handlers._STAR_menu_STAR_;
});
/**
 * Create the task menu
 */
akiee.handlers.create_taskmenu = (function akiee$handlers$create_taskmenu(){
akiee.handlers._STAR_taskmenu_STAR_.append((new akiee.handlers.gui.MenuItem(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"Top",new cljs.core.Keyword(null,"click","click",1912301393),(function (){
return cljs.core.List.EMPTY;
}),new cljs.core.Keyword(null,"enabled","enabled",1195909756),true], null)))));

akiee.handlers._STAR_taskmenu_STAR_.append((new akiee.handlers.gui.MenuItem(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"Bottom",new cljs.core.Keyword(null,"click","click",1912301393),(function (){
return cljs.core.List.EMPTY;
}),new cljs.core.Keyword(null,"enabled","enabled",1195909756),true], null)))));

return mn = akiee.handlers._STAR_taskmenu_STAR_;
});
akiee.handlers.register_events = (function akiee$handlers$register_events(){
akiee.handlers.register_datepicker_events.call(null);

akiee.handlers.register_click_links.call(null);

return akiee.handlers.register_file_watcher.call(null);
});
