// Compiled by ClojureScript 1.9.495 {:elide-asserts true}
goog.provide('akiee_front.helpers');
goog.require('cljs.core');
akiee_front.helpers.error_QMARK_ = (function akiee_front$helpers$error_QMARK_(x){
return (x instanceof Error);
});
akiee_front.helpers.throw_err = (function akiee_front$helpers$throw_err(x){
if(cljs.core.truth_(akiee_front.helpers.error_QMARK_.call(null,x))){
throw x;
} else {
return x;
}
});
akiee_front.helpers.log = (function akiee_front$helpers$log(params){
return console.log(params);
});

//# sourceMappingURL=helpers.js.map