// Compiled by ClojureScript 1.9.495 {:elide-asserts true}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('cljsjs.react.dom');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('reagent.ratom');
goog.require('reagent.debug');
goog.require('reagent.interop');
if(typeof reagent.dom.imported !== 'undefined'){
} else {
reagent.dom.imported = null;
}
reagent.dom.module = (function reagent$dom$module(){
if(!((reagent.dom.imported == null))){
return reagent.dom.imported;
} else {
if(typeof ReactDOM !== 'undefined'){
return reagent.dom.imported = ReactDOM;
} else {
if(typeof require !== 'undefined'){
var or__6824__auto__ = reagent.dom.imported = require("react-dom");
if(cljs.core.truth_(or__6824__auto__)){
return or__6824__auto__;
} else {
throw (new Error("require('react-dom') failed"));
}
} else {
throw (new Error("js/ReactDOM is missing"));

}
}
}
});
if(typeof reagent.dom.roots !== 'undefined'){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return (reagent.dom.module.call(null)["unmountComponentAtNode"])(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_8636 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.module.call(null)["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_8636){
return (function (){
var _STAR_always_update_STAR_8637 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render.call(null);

if(!((callback == null))){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_8637;
}});})(_STAR_always_update_STAR_8636))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_8636;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var args8638 = [];
var len__7933__auto___8641 = arguments.length;
var i__7934__auto___8642 = (0);
while(true){
if((i__7934__auto___8642 < len__7933__auto___8641)){
args8638.push((arguments[i__7934__auto___8642]));

var G__8643 = (i__7934__auto___8642 + (1));
i__7934__auto___8642 = G__8643;
continue;
} else {
}
break;
}

var G__8640 = args8638.length;
switch (G__8640) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args8638.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_.call(null);

var f = (function (){
return reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;

reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return (reagent.dom.module.call(null)["findDOMNode"])(this$);
});
reagent.impl.template.find_dom_node = reagent.dom.dom_node;
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_.call(null);

var seq__8649_8653 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__8650_8654 = null;
var count__8651_8655 = (0);
var i__8652_8656 = (0);
while(true){
if((i__8652_8656 < count__8651_8655)){
var v_8657 = cljs.core._nth.call(null,chunk__8650_8654,i__8652_8656);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_8657);

var G__8658 = seq__8649_8653;
var G__8659 = chunk__8650_8654;
var G__8660 = count__8651_8655;
var G__8661 = (i__8652_8656 + (1));
seq__8649_8653 = G__8658;
chunk__8650_8654 = G__8659;
count__8651_8655 = G__8660;
i__8652_8656 = G__8661;
continue;
} else {
var temp__4657__auto___8662 = cljs.core.seq.call(null,seq__8649_8653);
if(temp__4657__auto___8662){
var seq__8649_8663__$1 = temp__4657__auto___8662;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8649_8663__$1)){
var c__7643__auto___8664 = cljs.core.chunk_first.call(null,seq__8649_8663__$1);
var G__8665 = cljs.core.chunk_rest.call(null,seq__8649_8663__$1);
var G__8666 = c__7643__auto___8664;
var G__8667 = cljs.core.count.call(null,c__7643__auto___8664);
var G__8668 = (0);
seq__8649_8653 = G__8665;
chunk__8650_8654 = G__8666;
count__8651_8655 = G__8667;
i__8652_8656 = G__8668;
continue;
} else {
var v_8669 = cljs.core.first.call(null,seq__8649_8663__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_8669);

var G__8670 = cljs.core.next.call(null,seq__8649_8663__$1);
var G__8671 = null;
var G__8672 = (0);
var G__8673 = (0);
seq__8649_8653 = G__8670;
chunk__8650_8654 = G__8671;
count__8651_8655 = G__8672;
i__8652_8656 = G__8673;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=dom.js.map