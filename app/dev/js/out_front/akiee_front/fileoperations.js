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
akiee_front.fileoperations.org = cljs.nodejs.require.call(null,"../../resources/lib/markdown-org-mode-parser");
cljs.core.enable_console_print_BANG_.call(null);
akiee_front.fileoperations.testfile = "/home/macco/Listings/rakiee/test-load-file.md";
/**
 * nil -> String
 *   produce the home directory of the user according to plattform
 */
akiee_front.fileoperations.user_home = (function akiee_front$fileoperations$user_home(){
return akiee_front.fileoperations.path.join(((cljs.core._EQ_.call(null,akiee_front.fileoperations.process.platform,"win32"))?(akiee_front.fileoperations.process.env["USERPROFILE"]):(akiee_front.fileoperations.process.env["HOME"])),akiee_front.constants.dirname,"/");
});
try{var values__28283__auto___29635 = (function (){var x__27411__auto__ = akiee_front.fileoperations.user_home.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27411__auto__);
})();
var result__28284__auto___29636 = cljs.core.apply.call(null,cljs.core.string_QMARK_,values__28283__auto___29635);
if(cljs.core.truth_(result__28284__auto___29636)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),cljs.core.list(new cljs.core.Symbol(null,"user-home","user-home",-1795645615,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core.string_QMARK_,values__28283__auto___29635),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),cljs.core.list(new cljs.core.Symbol(null,"user-home","user-home",-1795645615,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__27411__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"string?","string?",-1129175764,null),values__28283__auto___29635);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27411__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e29634){var t__28321__auto___29637 = e29634;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),cljs.core.list(new cljs.core.Symbol(null,"user-home","user-home",-1795645615,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__28321__auto___29637,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}try{var values__28283__auto___29639 = cljs.core._conj.call(null,(function (){var x__27411__auto__ = akiee_front.fileoperations.user_home.call(null).indexOf(akiee_front.constants.dirname);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27411__auto__);
})(),(-1));
var result__28284__auto___29640 = cljs.core.apply.call(null,cljs.core.not_EQ_,values__28283__auto___29639);
if(cljs.core.truth_(result__28284__auto___29640)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"not=","not=",1466536204,null),(-1),cljs.core.list(new cljs.core.Symbol(null,".indexOf",".indexOf",-1910538923,null),cljs.core.list(new cljs.core.Symbol(null,"user-home","user-home",-1795645615,null)),new cljs.core.Symbol(null,"dirname","dirname",-1339600925,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core.not_EQ_,values__28283__auto___29639),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"not=","not=",1466536204,null),(-1),cljs.core.list(new cljs.core.Symbol(null,".indexOf",".indexOf",-1910538923,null),cljs.core.list(new cljs.core.Symbol(null,"user-home","user-home",-1795645615,null)),new cljs.core.Symbol(null,"dirname","dirname",-1339600925,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__27411__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"not=","not=",1466536204,null),values__28283__auto___29639);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27411__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e29638){var t__28321__auto___29641 = e29638;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"not=","not=",1466536204,null),(-1),cljs.core.list(new cljs.core.Symbol(null,".indexOf",".indexOf",-1910538923,null),cljs.core.list(new cljs.core.Symbol(null,"user-home","user-home",-1795645615,null)),new cljs.core.Symbol(null,"dirname","dirname",-1339600925,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__28321__auto___29641,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
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
try{var values__28283__auto___29643 = (function (){var x__27411__auto__ = akiee_front.fileoperations.create_task_list_file.call(null,"/home/macco");
return cljs.core._conj.call(null,(function (){var x__27411__auto____$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("/home/macco/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(akiee_front.constants.filename)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27411__auto____$1);
})(),x__27411__auto__);
})();
var result__28284__auto___29644 = cljs.core.apply.call(null,cljs.core._EQ_,values__28283__auto___29643);
if(cljs.core.truth_(result__28284__auto___29644)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"create-task-list-file","create-task-list-file",671085225,null),"/home/macco"),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"/home/macco/",new cljs.core.Symbol(null,"filename","filename",211690744,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__28283__auto___29643),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"create-task-list-file","create-task-list-file",671085225,null),"/home/macco"),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"/home/macco/",new cljs.core.Symbol(null,"filename","filename",211690744,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__27411__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__28283__auto___29643);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27411__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e29642){var t__28321__auto___29645 = e29642;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"create-task-list-file","create-task-list-file",671085225,null),"/home/macco"),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"/home/macco/",new cljs.core.Symbol(null,"filename","filename",211690744,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__28321__auto___29645,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
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
try{var values__28283__auto___29647 = (function (){var x__27411__auto__ = akiee_front.fileoperations.load_task_file.call(null,"");
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,""),x__27411__auto__);
})();
var result__28284__auto___29648 = cljs.core.apply.call(null,cljs.core._EQ_,values__28283__auto___29647);
if(cljs.core.truth_(result__28284__auto___29648)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"load-task-file","load-task-file",-1156725967,null),""),""),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__28283__auto___29647),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"load-task-file","load-task-file",-1156725967,null),""),""),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__27411__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__28283__auto___29647);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27411__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e29646){var t__28321__auto___29649 = e29646;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"load-task-file","load-task-file",-1156725967,null),""),""),new cljs.core.Keyword(null,"actual","actual",107306363),t__28321__auto___29649,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}try{var values__28283__auto___29651 = (function (){var x__27411__auto__ = akiee_front.fileoperations.load_task_file.call(null,"eurniate");
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,""),x__27411__auto__);
})();
var result__28284__auto___29652 = cljs.core.apply.call(null,cljs.core._EQ_,values__28283__auto___29651);
if(cljs.core.truth_(result__28284__auto___29652)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"load-task-file","load-task-file",-1156725967,null),"eurniate"),""),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__28283__auto___29651),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"load-task-file","load-task-file",-1156725967,null),"eurniate"),""),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__27411__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__28283__auto___29651);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27411__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e29650){var t__28321__auto___29653 = e29650;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"load-task-file","load-task-file",-1156725967,null),"eurniate"),""),new cljs.core.Keyword(null,"actual","actual",107306363),t__28321__auto___29653,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
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

//# sourceMappingURL=fileoperations.js.map