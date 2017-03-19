// Compiled by ClojureScript 1.9.495 {:elide-asserts true}
goog.provide('akiee_front.fileoperations');
goog.require('cljs.core');
goog.require('akiee_front.filewatcher');
goog.require('akiee_front.constants');
goog.require('cljs.test');
goog.require('cljs.nodejs');
akiee_front.fileoperations.fs = require("fs");
akiee_front.fileoperations.path = cljs.nodejs.require.call(null,"path");
akiee_front.fileoperations.process = cljs.nodejs.require.call(null,"process");
akiee_front.fileoperations.org = cljs.nodejs.require.call(null,"../../lib/markdown-org-mode-parser");
cljs.core.enable_console_print_BANG_.call(null);
akiee_front.fileoperations.testfile = "/home/macco/Listings/rakiee/test-load-file.md";
/**
 * nil -> String
 *   produce the home directory of the user according to plattform
 */
akiee_front.fileoperations.user_home = (function akiee_front$fileoperations$user_home(){
return akiee_front.fileoperations.path.join(((cljs.core._EQ_.call(null,akiee_front.fileoperations.process.platform,"win32"))?(akiee_front.fileoperations.process.env["USERPROFILE"]):(akiee_front.fileoperations.process.env["HOME"])),akiee_front.constants.dirname,"/");
});
try{var values__10397__auto___10612 = (function (){var x__7666__auto__ = akiee_front.fileoperations.user_home.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7666__auto__);
})();
var result__10398__auto___10613 = cljs.core.apply.call(null,cljs.core.string_QMARK_,values__10397__auto___10612);
if(cljs.core.truth_(result__10398__auto___10613)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),cljs.core.list(new cljs.core.Symbol(null,"user-home","user-home",-1795645615,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core.string_QMARK_,values__10397__auto___10612),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),cljs.core.list(new cljs.core.Symbol(null,"user-home","user-home",-1795645615,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__7666__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"string?","string?",-1129175764,null),values__10397__auto___10612);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7666__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e10611){var t__10435__auto___10614 = e10611;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),cljs.core.list(new cljs.core.Symbol(null,"user-home","user-home",-1795645615,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__10435__auto___10614,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}try{var values__10397__auto___10616 = cljs.core._conj.call(null,(function (){var x__7666__auto__ = akiee_front.fileoperations.user_home.call(null).indexOf(akiee_front.constants.dirname);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7666__auto__);
})(),(-1));
var result__10398__auto___10617 = cljs.core.apply.call(null,cljs.core.not_EQ_,values__10397__auto___10616);
if(cljs.core.truth_(result__10398__auto___10617)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"not=","not=",1466536204,null),(-1),cljs.core.list(new cljs.core.Symbol(null,".indexOf",".indexOf",-1910538923,null),cljs.core.list(new cljs.core.Symbol(null,"user-home","user-home",-1795645615,null)),new cljs.core.Symbol(null,"dirname","dirname",-1339600925,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core.not_EQ_,values__10397__auto___10616),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"not=","not=",1466536204,null),(-1),cljs.core.list(new cljs.core.Symbol(null,".indexOf",".indexOf",-1910538923,null),cljs.core.list(new cljs.core.Symbol(null,"user-home","user-home",-1795645615,null)),new cljs.core.Symbol(null,"dirname","dirname",-1339600925,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__7666__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"not=","not=",1466536204,null),values__10397__auto___10616);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7666__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e10615){var t__10435__auto___10618 = e10615;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"not=","not=",1466536204,null),(-1),cljs.core.list(new cljs.core.Symbol(null,".indexOf",".indexOf",-1910538923,null),cljs.core.list(new cljs.core.Symbol(null,"user-home","user-home",-1795645615,null)),new cljs.core.Symbol(null,"dirname","dirname",-1339600925,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__10435__auto___10618,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}/**
 * String -> String
 *   consumes the directory of the task file and return the file path of task list,
 *   if file is not present, it get's created
 */
akiee_front.fileoperations.create_task_list_file = (function akiee_front$fileoperations$create_task_list_file(h){
var dir_path = akiee_front.fileoperations.path.join(h,"/");
var file_path = akiee_front.fileoperations.path.join(dir_path,akiee_front.constants.filename);
if(cljs.core.truth_(akiee_front.fileoperations.fs.existsSync(dir_path))){
if(cljs.core.truth_(akiee_front.fileoperations.fs.existsSync(file_path))){
return file_path;
} else {
akiee_front.fileoperations.fs.writeFileSync(file_path,"# Inbox");

return file_path;
}
} else {
akiee_front.fileoperations.fs.mkdirSync(dir_path);

akiee_front.fileoperations.fs.writeFileSync(file_path,"# Inbox");

return file_path;
}
});
try{var values__10397__auto___10620 = (function (){var x__7666__auto__ = akiee_front.fileoperations.create_task_list_file.call(null,"/home/macco");
return cljs.core._conj.call(null,(function (){var x__7666__auto____$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("/home/macco/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(akiee_front.constants.filename)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7666__auto____$1);
})(),x__7666__auto__);
})();
var result__10398__auto___10621 = cljs.core.apply.call(null,cljs.core._EQ_,values__10397__auto___10620);
if(cljs.core.truth_(result__10398__auto___10621)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"create-task-list-file","create-task-list-file",671085225,null),"/home/macco"),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"/home/macco/",new cljs.core.Symbol(null,"filename","filename",211690744,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__10397__auto___10620),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"create-task-list-file","create-task-list-file",671085225,null),"/home/macco"),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"/home/macco/",new cljs.core.Symbol(null,"filename","filename",211690744,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__7666__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10397__auto___10620);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7666__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e10619){var t__10435__auto___10622 = e10619;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"create-task-list-file","create-task-list-file",671085225,null),"/home/macco"),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"/home/macco/",new cljs.core.Symbol(null,"filename","filename",211690744,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__10435__auto___10622,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}/**
 * String -> String
 *   Consumes a directory path d and produce the path of the task file
 */
akiee_front.fileoperations.task_file_path = (function akiee_front$fileoperations$task_file_path(d){
return akiee_front.fileoperations.create_task_list_file.call(null,d);
});
/**
 * String -> String
 *   consumes the path p for a file and returns the content of the file
 */
akiee_front.fileoperations.load_task_file = (function akiee_front$fileoperations$load_task_file(p){
if(cljs.core.truth_(akiee_front.fileoperations.fs.existsSync(p))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(akiee_front.fileoperations.fs.readFileSync(p,"utf8"))].join('');
} else {
return "";
}
});
try{var values__10397__auto___10624 = (function (){var x__7666__auto__ = akiee_front.fileoperations.load_task_file.call(null,"");
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,""),x__7666__auto__);
})();
var result__10398__auto___10625 = cljs.core.apply.call(null,cljs.core._EQ_,values__10397__auto___10624);
if(cljs.core.truth_(result__10398__auto___10625)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"load-task-file","load-task-file",-1156725967,null),""),""),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__10397__auto___10624),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"load-task-file","load-task-file",-1156725967,null),""),""),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__7666__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10397__auto___10624);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7666__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e10623){var t__10435__auto___10626 = e10623;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"load-task-file","load-task-file",-1156725967,null),""),""),new cljs.core.Keyword(null,"actual","actual",107306363),t__10435__auto___10626,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}try{var values__10397__auto___10628 = (function (){var x__7666__auto__ = akiee_front.fileoperations.load_task_file.call(null,"eurniate");
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,""),x__7666__auto__);
})();
var result__10398__auto___10629 = cljs.core.apply.call(null,cljs.core._EQ_,values__10397__auto___10628);
if(cljs.core.truth_(result__10398__auto___10629)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"load-task-file","load-task-file",-1156725967,null),"eurniate"),""),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__10397__auto___10628),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"load-task-file","load-task-file",-1156725967,null),"eurniate"),""),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__7666__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10397__auto___10628);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7666__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e10627){var t__10435__auto___10630 = e10627;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"load-task-file","load-task-file",-1156725967,null),"eurniate"),""),new cljs.core.Keyword(null,"actual","actual",107306363),t__10435__auto___10630,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}akiee_front.fileoperations.save_task_file = (function akiee_front$fileoperations$save_task_file(c,p,changed_QMARK_,chfn_BANG_,wffn){

if(cljs.core.truth_(changed_QMARK_)){
akiee_front.filewatcher.unwatch_file.call(null,p);

akiee_front.fileoperations.fs.writeFileSync(p,c);

chfn_BANG_.call(null,false);

akiee_front.filewatcher.watch_file.call(null,p,wffn);

return cljs.core.println.call(null,"Saved: ",p);
} else {
return cljs.core.println.call(null,"not changed");
}
});
