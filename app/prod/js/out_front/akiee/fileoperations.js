// Compiled by ClojureScript 1.9.495 {:elide-asserts true}
goog.provide('akiee.fileoperations');
goog.require('cljs.core');
goog.require('akiee.filewatcher');
goog.require('akiee.constants');
goog.require('cljs.test');
goog.require('cljs.nodejs');
goog.require('akiee.helpers');
akiee.fileoperations.fs = require("fs");
akiee.fileoperations.path = cljs.nodejs.require.call(null,"path");
akiee.fileoperations.process = cljs.nodejs.require.call(null,"process");
akiee.fileoperations.org = cljs.nodejs.require.call(null,"./lib/markdown-org-mode-parser");
cljs.core.enable_console_print_BANG_.call(null);
akiee.fileoperations.testfile = "/home/macco/Listings/rakiee/test-load-file.md";
/**
 * nil -> String
 *   produce the home directory of the user according to plattform
 */
akiee.fileoperations.user_home = (function akiee$fileoperations$user_home(){
return akiee.fileoperations.path.join(((cljs.core._EQ_.call(null,akiee.fileoperations.process.platform,"win32"))?(akiee.fileoperations.process.env["USERPROFILE"]):(akiee.fileoperations.process.env["HOME"])),akiee.constants.dirname,"/");
});
try{var values__10818__auto___11080 = (function (){var x__7666__auto__ = akiee.fileoperations.user_home.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7666__auto__);
})();
var result__10819__auto___11081 = cljs.core.apply.call(null,cljs.core.string_QMARK_,values__10818__auto___11080);
if(cljs.core.truth_(result__10819__auto___11081)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),cljs.core.list(new cljs.core.Symbol(null,"user-home","user-home",-1795645615,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core.string_QMARK_,values__10818__auto___11080),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),cljs.core.list(new cljs.core.Symbol(null,"user-home","user-home",-1795645615,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__7666__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"string?","string?",-1129175764,null),values__10818__auto___11080);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7666__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e11079){var t__10856__auto___11082 = e11079;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),cljs.core.list(new cljs.core.Symbol(null,"user-home","user-home",-1795645615,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__10856__auto___11082,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}try{var values__10818__auto___11084 = cljs.core._conj.call(null,(function (){var x__7666__auto__ = akiee.fileoperations.user_home.call(null).indexOf(akiee.constants.dirname);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7666__auto__);
})(),(-1));
var result__10819__auto___11085 = cljs.core.apply.call(null,cljs.core.not_EQ_,values__10818__auto___11084);
if(cljs.core.truth_(result__10819__auto___11085)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"not=","not=",1466536204,null),(-1),cljs.core.list(new cljs.core.Symbol(null,".indexOf",".indexOf",-1910538923,null),cljs.core.list(new cljs.core.Symbol(null,"user-home","user-home",-1795645615,null)),new cljs.core.Symbol(null,"dirname","dirname",-1339600925,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core.not_EQ_,values__10818__auto___11084),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"not=","not=",1466536204,null),(-1),cljs.core.list(new cljs.core.Symbol(null,".indexOf",".indexOf",-1910538923,null),cljs.core.list(new cljs.core.Symbol(null,"user-home","user-home",-1795645615,null)),new cljs.core.Symbol(null,"dirname","dirname",-1339600925,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__7666__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"not=","not=",1466536204,null),values__10818__auto___11084);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7666__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e11083){var t__10856__auto___11086 = e11083;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"not=","not=",1466536204,null),(-1),cljs.core.list(new cljs.core.Symbol(null,".indexOf",".indexOf",-1910538923,null),cljs.core.list(new cljs.core.Symbol(null,"user-home","user-home",-1795645615,null)),new cljs.core.Symbol(null,"dirname","dirname",-1339600925,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__10856__auto___11086,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}/**
 * String -> String
 *   consumes the directory of the task file and return the file path of task list,
 *   if file is not present, it get's created
 */
akiee.fileoperations.create_task_list_file = (function akiee$fileoperations$create_task_list_file(h){
var dir_path = akiee.fileoperations.path.join(h,"/");
var file_path = akiee.fileoperations.path.join(dir_path,akiee.constants.filename);
if(cljs.core.truth_(akiee.fileoperations.fs.existsSync(dir_path))){
if(cljs.core.truth_(akiee.fileoperations.fs.existsSync(file_path))){
return file_path;
} else {
akiee.fileoperations.fs.writeFileSync(file_path,"# Inbox");

return file_path;
}
} else {
akiee.fileoperations.fs.mkdirSync(dir_path);

akiee.fileoperations.fs.writeFileSync(file_path,"# Inbox");

return file_path;
}
});
try{var values__10818__auto___11088 = (function (){var x__7666__auto__ = akiee.fileoperations.create_task_list_file.call(null,"/home/macco");
return cljs.core._conj.call(null,(function (){var x__7666__auto____$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("/home/macco/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(akiee.constants.filename)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7666__auto____$1);
})(),x__7666__auto__);
})();
var result__10819__auto___11089 = cljs.core.apply.call(null,cljs.core._EQ_,values__10818__auto___11088);
if(cljs.core.truth_(result__10819__auto___11089)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"create-task-list-file","create-task-list-file",671085225,null),"/home/macco"),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"/home/macco/",new cljs.core.Symbol(null,"filename","filename",211690744,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__10818__auto___11088),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"create-task-list-file","create-task-list-file",671085225,null),"/home/macco"),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"/home/macco/",new cljs.core.Symbol(null,"filename","filename",211690744,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__7666__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10818__auto___11088);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7666__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e11087){var t__10856__auto___11090 = e11087;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"create-task-list-file","create-task-list-file",671085225,null),"/home/macco"),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"/home/macco/",new cljs.core.Symbol(null,"filename","filename",211690744,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__10856__auto___11090,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}/**
 * String -> String
 *   Consumes a directory path d and produce the path of the task file
 */
akiee.fileoperations.task_file_path = (function akiee$fileoperations$task_file_path(d){
return akiee.fileoperations.create_task_list_file.call(null,d);
});
/**
 * String -> String
 *   consumes the path p for a file and returns the content of the file
 */
akiee.fileoperations.load_task_file = (function akiee$fileoperations$load_task_file(p){
if(cljs.core.truth_(akiee.fileoperations.fs.existsSync(p))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(akiee.fileoperations.fs.readFileSync(p,"utf8"))].join('');
} else {
return "";
}
});
try{var values__10818__auto___11092 = (function (){var x__7666__auto__ = akiee.fileoperations.load_task_file.call(null,"");
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,""),x__7666__auto__);
})();
var result__10819__auto___11093 = cljs.core.apply.call(null,cljs.core._EQ_,values__10818__auto___11092);
if(cljs.core.truth_(result__10819__auto___11093)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"load-task-file","load-task-file",-1156725967,null),""),""),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__10818__auto___11092),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"load-task-file","load-task-file",-1156725967,null),""),""),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__7666__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10818__auto___11092);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7666__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e11091){var t__10856__auto___11094 = e11091;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"load-task-file","load-task-file",-1156725967,null),""),""),new cljs.core.Keyword(null,"actual","actual",107306363),t__10856__auto___11094,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}try{var values__10818__auto___11096 = (function (){var x__7666__auto__ = akiee.fileoperations.load_task_file.call(null,"eurniate");
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,""),x__7666__auto__);
})();
var result__10819__auto___11097 = cljs.core.apply.call(null,cljs.core._EQ_,values__10818__auto___11096);
if(cljs.core.truth_(result__10819__auto___11097)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"load-task-file","load-task-file",-1156725967,null),"eurniate"),""),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__10818__auto___11096),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"load-task-file","load-task-file",-1156725967,null),"eurniate"),""),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__7666__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10818__auto___11096);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7666__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e11095){var t__10856__auto___11098 = e11095;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"load-task-file","load-task-file",-1156725967,null),"eurniate"),""),new cljs.core.Keyword(null,"actual","actual",107306363),t__10856__auto___11098,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}akiee.fileoperations.save_task_file = (function akiee$fileoperations$save_task_file(c,p,changed_QMARK_,chfn_BANG_,wffn){

if(cljs.core.truth_(changed_QMARK_)){
akiee.filewatcher.unwatch_file.call(null,p);

akiee.fileoperations.fs.writeFileSync(p,c);

chfn_BANG_.call(null,false);

akiee.filewatcher.watch_file.call(null,p,wffn);

return cljs.core.println.call(null,"Saved: ",p);
} else {
return cljs.core.println.call(null,"not changed");
}
});
