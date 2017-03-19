// Compiled by ClojureScript 1.9.495 {:elide-asserts true}
goog.provide('akiee_front.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljs.nodejs');
goog.require('akiee_front.app_db');
goog.require('akiee_front.constants');
goog.require('akiee_front.handlers');
cljs.core.enable_console_print_BANG_.call(null);
akiee_front.core.modifier = ((cljs.core._EQ_.call(null,process.platform,"darwin"))?"Cmd":"Ctrl");
akiee_front.core.path = cljs.nodejs.require.call(null,"path");
/**
 * String String String -> Component
 *   Consumes the text tx, the id and the title t, the state,
 *   the test function tfn, the on-click function onfn of the button;
 *   produces the component for the button.
 */
akiee_front.core.list_state_button = (function akiee_front$core$list_state_button(tx,id,t,state,tfn,onfn){
var active_QMARK_ = (((cljs.core._EQ_.call(null,tfn.call(null),state)) && (cljs.core.not.call(null,akiee_front.app_db.editor_QMARK_.call(null))))?"active":"");
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default.navbar-btn.btn-state.toolbar-button","button.btn.btn-default.navbar-btn.btn-state.toolbar-button",-799489622),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"title","title",636505583),t,new cljs.core.Keyword(null,"class","class",-2030961996),active_QMARK_,new cljs.core.Keyword(null,"on-click","on-click",1632826543),onfn], null),tx], null);
});
akiee_front.core.todo_button = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [akiee_front.core.list_state_button,"Todo","show-todo",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(akiee_front.core.modifier),cljs.core.str.cljs$core$IFn$_invoke$arity$1("+1")].join(''),akiee_front.constants.TODO,akiee_front.app_db.list_state,akiee_front.app_db.switch_todo_BANG_], null);
akiee_front.core.doing_button = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [akiee_front.core.list_state_button,"Doing","show-doing",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(akiee_front.core.modifier),cljs.core.str.cljs$core$IFn$_invoke$arity$1("+2 / "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(akiee_front.core.modifier),cljs.core.str.cljs$core$IFn$_invoke$arity$1("+Space")].join(''),akiee_front.constants.DOING,akiee_front.app_db.list_state,akiee_front.app_db.switch_doing_BANG_], null);
akiee_front.core.done_button = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [akiee_front.core.list_state_button,"Done","show-done",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(akiee_front.core.modifier),cljs.core.str.cljs$core$IFn$_invoke$arity$1("+3")].join(''),akiee_front.constants.DONE,akiee_front.app_db.list_state,akiee_front.app_db.switch_done_BANG_], null);
akiee_front.core.board_button = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [akiee_front.core.list_state_button,"Board","show-all",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(akiee_front.core.modifier),cljs.core.str.cljs$core$IFn$_invoke$arity$1("+4")].join(''),akiee_front.constants.ALL,akiee_front.app_db.list_state,akiee_front.app_db.switch_all_BANG_], null);
/**
 * String String String -> Component
 *   Consumes the icon name in, the id and title t of the button, the test function tfn?,
 *   the on-click function onfn of the button.
 *   produces the component for the button.
 */
akiee_front.core.switch_button = (function akiee_front$core$switch_button(in$,id,t,tfn_QMARK_,onfn){
var icon_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("fa-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(in$)].join('');
var active_QMARK_ = (cljs.core.truth_(tfn_QMARK_.call(null))?"active":"");
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default.navbar-btn.btn-square.toolbar-button","button.btn.btn-default.navbar-btn.btn-square.toolbar-button",-1577311189),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"title","title",636505583),t,new cljs.core.Keyword(null,"class","class",-2030961996),active_QMARK_,new cljs.core.Keyword(null,"on-click","on-click",1632826543),onfn], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.fa.fa-fw","span.fa.fa-fw",150090794),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),icon_name], null)], null)], null);
});
akiee_front.core.editor_switch = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [akiee_front.core.switch_button,"code","show-editor",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(akiee_front.core.modifier),cljs.core.str.cljs$core$IFn$_invoke$arity$1("+E / "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(akiee_front.core.modifier),cljs.core.str.cljs$core$IFn$_invoke$arity$1("+Space")].join(''),akiee_front.app_db.editor_QMARK_,akiee_front.app_db.switch_editor_BANG_], null);
akiee_front.core.search_switch = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [akiee_front.core.switch_button,"search","show-searchbox",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(akiee_front.core.modifier),cljs.core.str.cljs$core$IFn$_invoke$arity$1("+F")].join(''),akiee_front.app_db.search_QMARK_,akiee_front.app_db.switch_search_BANG_], null);
akiee_front.core.entry_switch = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [akiee_front.core.switch_button,"plus","show-enter-task",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(akiee_front.core.modifier),cljs.core.str.cljs$core$IFn$_invoke$arity$1("+Enter")].join(''),akiee_front.app_db.entry_QMARK_,akiee_front.app_db.switch_entry_BANG_], null);
akiee_front.core.menu_button = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [akiee_front.core.switch_button,"ellipsis-v","show-menu",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(akiee_front.core.modifier),cljs.core.str.cljs$core$IFn$_invoke$arity$1("+M")].join(''),(function (){
return false;
}),akiee_front.handlers.onclick_menu], null);
akiee_front.core.entry_close = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.hover-button","button.hover-button",-1848477294),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"close-app",new cljs.core.Keyword(null,"title","title",636505583),"Alt-F4",new cljs.core.Keyword(null,"on-click","on-click",1632826543),akiee_front.handlers.onclick_close], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"./css/img/window-close.svg"], null)], null)], null);
/**
 * -> Component
 *   The toolbar for changing the state of the Akiee
 */
akiee_front.core.toolbar = (function akiee_front$core$toolbar(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav#toolbar.navbar.navbar-default","nav#toolbar.navbar.navbar-default",-1269321238),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"role","role",-736691072),"navigation"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#toolbar-fluid.container-fluid","div#toolbar-fluid.container-fluid",-1893262592),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#toolbar-inside.navbar-flex","div#toolbar-inside.navbar-flex",1775857984),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#taskbuttons.btn-group","div#taskbuttons.btn-group",510226813),akiee_front.core.todo_button,akiee_front.core.doing_button,akiee_front.core.done_button], null)], null),akiee_front.core.board_button,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#toolbar-spacer.spacer","div#toolbar-spacer.spacer",656726554)], null)], null)], null);
});
/**
 *  -> Component
 *  Produces the base comment
 */
akiee_front.core.app = (function akiee_front$core$app(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#app","div#app",840279329),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Lorem ipsum"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [akiee_front.core.toolbar], null)], null);
});
akiee_front.core.big_bang = (function akiee_front$core$big_bang(){
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [akiee_front.core.app], null),document.getElementById("root"));
});
akiee_front.core.init_BANG_ = (function akiee_front$core$init_BANG_(setting){
cljs.core.println.call(null,setting);

return akiee_front.core.big_bang.call(null);
});
