// Compiled by ClojureScript 1.9.495 {:elide-asserts true}
goog.provide('akiee.helpers');
goog.require('cljs.core');
akiee.helpers.error_QMARK_ = (function akiee$helpers$error_QMARK_(x){
return (x instanceof Error);
});
akiee.helpers.throw_err = (function akiee$helpers$throw_err(x){
if(cljs.core.truth_(akiee.helpers.error_QMARK_.call(null,x))){
throw x;
} else {
return x;
}
});
akiee.helpers.log = (function akiee$helpers$log(params){
return console.log(params);
});

//# sourceMappingURL=helpers.js.map