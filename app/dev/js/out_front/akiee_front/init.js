// Compiled by ClojureScript 1.9.495 {:elide-asserts true}
goog.provide('akiee_front.init');
goog.require('cljs.core');
goog.require('figwheel.client');
goog.require('akiee_front.core');
goog.require('akiee_front.conf');
cljs.core.enable_console_print_BANG_.call(null);
figwheel.client.watch_and_reload.call(null,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws",new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369),new cljs.core.Symbol(null,"start-descjop!","start-descjop!",-2023242547,null));
akiee_front.init.start_descjop_BANG_ = (function akiee_front$init$start_descjop_BANG_(){
return akiee_front.core.init_BANG_.call(null,akiee_front.conf.setting);
});
akiee_front.init.start_descjop_BANG_.call(null);

//# sourceMappingURL=init.js.map