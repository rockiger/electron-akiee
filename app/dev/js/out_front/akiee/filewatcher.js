// Compiled by ClojureScript 1.9.495 {:elide-asserts true}
goog.provide('akiee.filewatcher');
goog.require('cljs.core');
goog.require('cljs.nodejs');
akiee.filewatcher.fs = require("fs");
akiee.filewatcher.path = cljs.nodejs.require.call(null,"path");
cljs.core.enable_console_print_BANG_.call(null);
akiee.filewatcher.watch_file = (function akiee$filewatcher$watch_file(pth,func){

return akiee.filewatcher.fs.watchFile(pth,func);
});
akiee.filewatcher.unwatch_file = (function akiee$filewatcher$unwatch_file(pth){

return akiee.filewatcher.fs.unwatchFile(pth);
});
/**
 * Consume two fs.Stat objects curr(ent) prev(ious), compares if the file was modified and reload the file
 */
akiee.filewatcher.on_file_change = (function akiee$filewatcher$on_file_change(curr,prev,func){
var c_time = curr.mtime;
var p_time = prev.mtime;
if((c_time > p_time)){
cljs.core.println.call(null,"File changed reload");

return func.call(null);
} else {
return null;
}
});

//# sourceMappingURL=filewatcher.js.map