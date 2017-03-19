// Compiled by ClojureScript 1.9.495 {:elide-asserts true}
goog.provide('reagent.dom');
goog.require('cljs.core');
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
var _STAR_always_update_STAR_12883 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.module.call(null)["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_12883){
return (function (){
var _STAR_always_update_STAR_12884 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render.call(null);

if(!((callback == null))){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_12884;
}});})(_STAR_always_update_STAR_12883))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_12883;
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
var args12885 = [];
var len__7933__auto___12888 = arguments.length;
var i__7934__auto___12889 = (0);
while(true){
if((i__7934__auto___12889 < len__7933__auto___12888)){
args12885.push((arguments[i__7934__auto___12889]));

var G__12890 = (i__7934__auto___12889 + (1));
i__7934__auto___12889 = G__12890;
continue;
} else {
}
break;
}

var G__12887 = args12885.length;
switch (G__12887) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args12885.length)].join('')));

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

var seq__12896_12900 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__12897_12901 = null;
var count__12898_12902 = (0);
var i__12899_12903 = (0);
while(true){
if((i__12899_12903 < count__12898_12902)){
var v_12904 = cljs.core._nth.call(null,chunk__12897_12901,i__12899_12903);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_12904);

var G__12905 = seq__12896_12900;
var G__12906 = chunk__12897_12901;
var G__12907 = count__12898_12902;
var G__12908 = (i__12899_12903 + (1));
seq__12896_12900 = G__12905;
chunk__12897_12901 = G__12906;
count__12898_12902 = G__12907;
i__12899_12903 = G__12908;
continue;
} else {
var temp__4657__auto___12909 = cljs.core.seq.call(null,seq__12896_12900);
if(temp__4657__auto___12909){
var seq__12896_12910__$1 = temp__4657__auto___12909;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12896_12910__$1)){
var c__7643__auto___12911 = cljs.core.chunk_first.call(null,seq__12896_12910__$1);
var G__12912 = cljs.core.chunk_rest.call(null,seq__12896_12910__$1);
var G__12913 = c__7643__auto___12911;
var G__12914 = cljs.core.count.call(null,c__7643__auto___12911);
var G__12915 = (0);
seq__12896_12900 = G__12912;
chunk__12897_12901 = G__12913;
count__12898_12902 = G__12914;
i__12899_12903 = G__12915;
continue;
} else {
var v_12916 = cljs.core.first.call(null,seq__12896_12910__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_12916);

var G__12917 = cljs.core.next.call(null,seq__12896_12910__$1);
var G__12918 = null;
var G__12919 = (0);
var G__12920 = (0);
seq__12896_12900 = G__12917;
chunk__12897_12901 = G__12918;
count__12898_12902 = G__12919;
i__12899_12903 = G__12920;
continue;
}
} else {
}
}
break;
}

return "Updated";
});
