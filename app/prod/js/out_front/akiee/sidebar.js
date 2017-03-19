// Compiled by ClojureScript 1.9.495 {:elide-asserts true}
goog.provide('akiee.sidebar');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('akiee.constants');
goog.require('akiee.app_db');
goog.require('akiee.handlers');
goog.require('akiee.node');
cljs.core.enable_console_print_BANG_.call(null);
akiee.sidebar.headline = (function akiee$sidebar$headline(node){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),akiee.handlers.onclick_hdln], null),(cljs.core.truth_((function (){var and__6812__auto__ = akiee.app_db.selected.call(null);
if(cljs.core.truth_(and__6812__auto__)){
return cljs.core._EQ_.call(null,akiee.app_db.editable.call(null),"hdln");
} else {
return and__6812__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#sidebar-headline.sidebar-input.form-control","input#sidebar-headline.sidebar-input.form-control",-1569973219),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"default-value","default-value",232220170),new cljs.core.Keyword(null,"headline","headline",-157157727).cljs$core$IFn$_invoke$arity$1(node),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),akiee.handlers.onblur_sidebar_input,new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),akiee.handlers.onblur_sidebar_input], null)], null):new cljs.core.Keyword(null,"headline","headline",-157157727).cljs$core$IFn$_invoke$arity$1(node)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.fa.fa-pencil-square-o","span.fa.fa-pencil-square-o",663555654)], null)], null);
});
akiee.sidebar.markdown_body = (function akiee$sidebar$markdown_body(node){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"details",new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),marked([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(node))].join(''))], null)], null)], null);
});
akiee.sidebar.body = (function akiee$sidebar$body(node){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#sidebar-body","div#sidebar-body",1227887633),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),akiee.handlers.onclick_body], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.details-left","span.details-left",585347392),"Details:"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.fa.fa-file-text-o","span.fa.fa-file-text-o",1922467234)], null),(cljs.core.truth_((function (){var and__6812__auto__ = akiee.app_db.selected.call(null);
if(cljs.core.truth_(and__6812__auto__)){
return cljs.core._EQ_.call(null,akiee.app_db.editable.call(null),"body");
} else {
return and__6812__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea#sidebar-body-ta.sidebar-input.form-control","textarea#sidebar-body-ta.sidebar-input.form-control",-17906056),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"default-value","default-value",232220170),new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(node),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),akiee.handlers.onblur_sidebar_body,new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),akiee.handlers.onblur_sidebar_body], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button#sidebar-body-submit.btn.btn-default","button#sidebar-body-submit.btn.btn-default",-1748119586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"title","title",636505583),"Tab",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"float","float",-1732389368),"right",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"5px"], null)], null),"Save"], null)], null):akiee.sidebar.markdown_body.call(null,node))], null);
});
akiee.sidebar.state = (function akiee$sidebar$state(node){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#sidebar-state","div#sidebar-state",2059292986),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),akiee.handlers.onclick_state], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.details-left","span.details-left",585347392),"State:"], null),(cljs.core.truth_((function (){var and__6812__auto__ = akiee.app_db.selected.call(null);
if(cljs.core.truth_(and__6812__auto__)){
return cljs.core._EQ_.call(null,akiee.app_db.editable.call(null),"state");
} else {
return and__6812__auto__;
}
})())?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select#sidebar-task-state.form-control","select#sidebar-task-state.form-control",-1461886244),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),"task-status",new cljs.core.Keyword(null,"defaultValue","defaultValue",-586131910),new cljs.core.Keyword(null,"todo","todo",-1046442570).cljs$core$IFn$_invoke$arity$1(node),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),akiee.handlers.onblur_sidebar_state,new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),akiee.handlers.onblur_sidebar_state,new cljs.core.Keyword(null,"on-change","on-change",-732046149),akiee.handlers.onblur_sidebar_state,new cljs.core.Keyword(null,"on-click","on-click",1632826543),akiee.handlers.submit_sidebar_state], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),"TODO"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),"DOING"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),"DONE"], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"todo","todo",-1046442570).cljs$core$IFn$_invoke$arity$1(node)], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.fa.fa-check-square-o","span.fa.fa-check-square-o",1628598986)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"fin","fin",712246207).cljs$core$IFn$_invoke$arity$1(node))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.fin.label","span.fin.label",-402814575),new cljs.core.Keyword(null,"fin","fin",712246207).cljs$core$IFn$_invoke$arity$1(node).toLocaleDateString()], null):null)], null);
});
akiee.sidebar.project = (function akiee$sidebar$project(node){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#sidebar-project","div#sidebar-project",1692106605),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),akiee.handlers.onclick_project], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.details-left","span.details-left",585347392),"Project:"], null),(cljs.core.truth_((function (){var and__6812__auto__ = akiee.app_db.selected.call(null);
if(cljs.core.truth_(and__6812__auto__)){
return cljs.core._EQ_.call(null,akiee.app_db.editable.call(null),"project");
} else {
return and__6812__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select#sidebar-task-project.form-control","select#sidebar-task-project.form-control",-556150370),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),"task-project",new cljs.core.Keyword(null,"defaultValue","defaultValue",-586131910),new cljs.core.Keyword(null,"project","project",1124394579).cljs$core$IFn$_invoke$arity$1(node),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),akiee.handlers.onblur_sidebar_project,new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),akiee.handlers.onblur_sidebar_project,new cljs.core.Keyword(null,"on-change","on-change",-732046149),akiee.handlers.onblur_sidebar_project,new cljs.core.Keyword(null,"on-click","on-click",1632826543),akiee.handlers.submit_sidebar_project], null),(function (){var iter__7612__auto__ = (function akiee$sidebar$project_$_iter__11444(s__11445){
return (new cljs.core.LazySeq(null,(function (){
var s__11445__$1 = s__11445;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__11445__$1);
if(temp__4657__auto__){
var s__11445__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11445__$2)){
var c__7610__auto__ = cljs.core.chunk_first.call(null,s__11445__$2);
var size__7611__auto__ = cljs.core.count.call(null,c__7610__auto__);
var b__11447 = cljs.core.chunk_buffer.call(null,size__7611__auto__);
if((function (){var i__11446 = (0);
while(true){
if((i__11446 < size__7611__auto__)){
var p = cljs.core._nth.call(null,c__7610__auto__,i__11446);
cljs.core.chunk_append.call(null,b__11447,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),p], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),p], null)));

var G__11448 = (i__11446 + (1));
i__11446 = G__11448;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11447),akiee$sidebar$project_$_iter__11444.call(null,cljs.core.chunk_rest.call(null,s__11445__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11447),null);
}
} else {
var p = cljs.core.first.call(null,s__11445__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),p], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),p], null)),akiee$sidebar$project_$_iter__11444.call(null,cljs.core.rest.call(null,s__11445__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7612__auto__.call(null,akiee.app_db.projects.call(null));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"project","project",1124394579).cljs$core$IFn$_invoke$arity$1(node)], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.fa.fa-list-alt","span.fa.fa-list-alt",2018706724)], null)], null);
});
akiee.sidebar.input_date = (function akiee$sidebar$input_date(date){
if(cljs.core.truth_(date)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((date.getMonth() + (1))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(date.getDate()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(date.getFullYear())].join('');
} else {
return "";
}
});
akiee.sidebar.scheduled = (function akiee$sidebar$scheduled(node){
var style = (cljs.core.truth_((function (){var and__6812__auto__ = akiee.app_db.selected.call(null);
if(cljs.core.truth_(and__6812__auto__)){
return cljs.core._EQ_.call(null,akiee.app_db.editable.call(null),"scheduled");
} else {
return and__6812__auto__;
}
})())?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"inline-block"], null):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"none"], null));
var span_style = (cljs.core.truth_((function (){var and__6812__auto__ = akiee.app_db.selected.call(null);
if(cljs.core.truth_(and__6812__auto__)){
return cljs.core._EQ_.call(null,akiee.app_db.editable.call(null),"scheduled");
} else {
return and__6812__auto__;
}
})())?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"none"], null):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"inline"], null));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#sidebar-scheduled","div#sidebar-scheduled",1432635199),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),akiee.handlers.onclick_scheduled], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.details-left","span.details-left",585347392),"Planned:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#sidebar-scheduled-form.sidebar-input.form-control","input#sidebar-scheduled-form.sidebar-input.form-control",685937833),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),akiee.sidebar.input_date.call(null,new cljs.core.Keyword(null,"scheduled","scheduled",553898551).cljs$core$IFn$_invoke$arity$1(node)),new cljs.core.Keyword(null,"data-provide","data-provide",-1800808185),"datepicker",new cljs.core.Keyword(null,"style","style",-496642736),style], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),span_style], null),(cljs.core.truth_(new cljs.core.Keyword(null,"scheduled","scheduled",553898551).cljs$core$IFn$_invoke$arity$1(node))?new cljs.core.Keyword(null,"scheduled","scheduled",553898551).cljs$core$IFn$_invoke$arity$1(node).toLocaleDateString():"Never")], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.fa.fa-calendar","span.fa.fa-calendar",-195026738)], null)], null);
});
akiee.sidebar.deadline = (function akiee$sidebar$deadline(node){
var style = (cljs.core.truth_((function (){var and__6812__auto__ = akiee.app_db.selected.call(null);
if(cljs.core.truth_(and__6812__auto__)){
return cljs.core._EQ_.call(null,akiee.app_db.editable.call(null),"deadline");
} else {
return and__6812__auto__;
}
})())?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"inline-block"], null):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"none"], null));
var span_style = (cljs.core.truth_((function (){var and__6812__auto__ = akiee.app_db.selected.call(null);
if(cljs.core.truth_(and__6812__auto__)){
return cljs.core._EQ_.call(null,akiee.app_db.editable.call(null),"deadline");
} else {
return and__6812__auto__;
}
})())?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"none"], null):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"inline"], null));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#sidebar-deadline","div#sidebar-deadline",1552227581),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),akiee.handlers.onclick_deadline], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.details-left","span.details-left",585347392),"Due:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#sidebar-deadline-form.sidebar-input.form-control","input#sidebar-deadline-form.sidebar-input.form-control",317523234),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),akiee.sidebar.input_date.call(null,new cljs.core.Keyword(null,"deadline","deadline",628964572).cljs$core$IFn$_invoke$arity$1(node)),new cljs.core.Keyword(null,"data-provide","data-provide",-1800808185),"datepicker",new cljs.core.Keyword(null,"style","style",-496642736),style], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),span_style], null),(cljs.core.truth_(new cljs.core.Keyword(null,"deadline","deadline",628964572).cljs$core$IFn$_invoke$arity$1(node))?new cljs.core.Keyword(null,"deadline","deadline",628964572).cljs$core$IFn$_invoke$arity$1(node).toLocaleDateString():"Never")], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.fa.fa-calendar","span.fa.fa-calendar",-195026738)], null)], null);
});
akiee.sidebar.tags = (function akiee$sidebar$tags(node){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#sidebar-tags","div#sidebar-tags",-2057064167),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),akiee.handlers.onclick_tags], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.details-left","span.details-left",585347392),"Tags:"], null),(cljs.core.truth_((function (){var and__6812__auto__ = akiee.app_db.selected.call(null);
if(cljs.core.truth_(and__6812__auto__)){
return cljs.core._EQ_.call(null,akiee.app_db.editable.call(null),"tags");
} else {
return and__6812__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#sidebar-tags-form.form-control","input#sidebar-tags-form.form-control",-1410782008),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"default-value","default-value",232220170),akiee.node.tags_string.call(null,node),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),akiee.handlers.onblur_sidebar_tags,new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),akiee.handlers.onblur_sidebar_tags], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(function (){var or__6824__auto__ = akiee.node.tags_string.call(null,node);
if(cljs.core.truth_(or__6824__auto__)){
return or__6824__auto__;
} else {
return "None";
}
})()], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.fa.fa-tags","span.fa.fa-tags",309003278)], null)], null);
});
akiee.sidebar.reps = (function akiee$sidebar$reps(node){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#sidebar-reps","div#sidebar-reps",1608505200),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),akiee.handlers.onclick_reps], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.details-left","span.details-left",585347392),"Repeat:"], null),(cljs.core.truth_((function (){var and__6812__auto__ = akiee.app_db.selected.call(null);
if(cljs.core.truth_(and__6812__auto__)){
return cljs.core._EQ_.call(null,akiee.app_db.editable.call(null),"reps");
} else {
return and__6812__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#sidebar-reps-form.form-control","input#sidebar-reps-form.form-control",-222832575),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"default-value","default-value",232220170),akiee.node.reps_string.call(null,node),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),akiee.handlers.onblur_sidebar_reps,new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),akiee.handlers.onblur_sidebar_reps], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),akiee.node.reps_string.call(null,node)], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.fa.fa-repeat","span.fa.fa-repeat",775764832)], null)], null);
});
akiee.sidebar.sidebar = (function akiee$sidebar$sidebar(){
var node = akiee.app_db.sidebar_content.call(null);
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#details","div#details",1011999171),akiee.sidebar.headline.call(null,node),akiee.sidebar.scheduled.call(null,node),akiee.sidebar.deadline.call(null,node),akiee.sidebar.reps.call(null,node),akiee.sidebar.tags.call(null,node),akiee.sidebar.state.call(null,node),akiee.sidebar.project.call(null,node),akiee.sidebar.body.call(null,node)], null);
});
akiee.sidebar.datepicker_config = (function akiee$sidebar$datepicker_config(){
return $(document).ready((function (){
$.fn.datepicker.defaults.autoclose = true;

$.fn.datepicker.defaults.toggleActive = true;

return $.fn.datepicker.defaults.todayHighlight = true;
})()
);
});
