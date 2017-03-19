// Compiled by ClojureScript 1.9.495 {:elide-asserts true}
goog.provide('jayq.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.reader');
jayq.core.crate_meta = (function jayq$core$crate_meta(func){
return func.prototype._crateGroup;
});
jayq.core.__GT_selector = (function jayq$core$__GT_selector(sel){
if(typeof sel === 'string'){
return sel;
} else {
if(cljs.core.fn_QMARK_.call(null,sel)){
var temp__4655__auto__ = jayq.core.crate_meta.call(null,sel);
if(cljs.core.truth_(temp__4655__auto__)){
var cm = temp__4655__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("[crateGroup="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cm),cljs.core.str.cljs$core$IFn$_invoke$arity$1("]")].join('');
} else {
return sel;
}
} else {
if((sel instanceof cljs.core.Keyword)){
return cljs.core.name.call(null,sel);
} else {
return sel;

}
}
}
});
jayq.core.$ = (function jayq$core$$(var_args){
var args28438 = [];
var len__27678__auto___28441 = arguments.length;
var i__27679__auto___28442 = (0);
while(true){
if((i__27679__auto___28442 < len__27678__auto___28441)){
args28438.push((arguments[i__27679__auto___28442]));

var G__28443 = (i__27679__auto___28442 + (1));
i__27679__auto___28442 = G__28443;
continue;
} else {
}
break;
}

var G__28440 = args28438.length;
switch (G__28440) {
case 1:
return jayq.core.$.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args28438.length)].join('')));

}
});

jayq.core.$.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return jQuery(jayq.core.__GT_selector.call(null,sel));
});

jayq.core.$.cljs$core$IFn$_invoke$arity$2 = (function (sel,context){
return jQuery(jayq.core.__GT_selector.call(null,sel),context);
});

jayq.core.$.cljs$lang$maxFixedArity = 2;

jQuery.prototype.cljs$core$ISeqable$ = cljs.core.PROTOCOL_SENTINEL;

jQuery.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this$__$1 = this;
if(cljs.core.truth_(this$__$1.get((0)))){
return this$__$1;
} else {
return null;
}
});

jQuery.prototype.cljs$core$ISeq$ = cljs.core.PROTOCOL_SENTINEL;

jQuery.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.get((0));
});

jQuery.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var this$__$1 = this;
if((cljs.core.count.call(null,this$__$1) > (1))){
return this$__$1.slice((1));
} else {
return cljs.core.List.EMPTY;
}
});

jQuery.prototype.cljs$core$ICounted$ = cljs.core.PROTOCOL_SENTINEL;

jQuery.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.length;
});

jQuery.prototype.cljs$core$IIndexed$ = cljs.core.PROTOCOL_SENTINEL;

jQuery.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var this$__$1 = this;
if((n < cljs.core.count.call(null,this$__$1))){
return this$__$1.slice(n,(n + (1)));
} else {
return null;
}
});

jQuery.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var this$__$1 = this;
if((n < cljs.core.count.call(null,this$__$1))){
return this$__$1.slice(n,(n + (1)));
} else {
if((void 0 === not_found)){
return null;
} else {
return not_found;
}
}
});

jQuery.prototype.cljs$core$ISequential$ = cljs.core.PROTOCOL_SENTINEL;

jQuery.prototype.cljs$core$ILookup$ = cljs.core.PROTOCOL_SENTINEL;

jQuery.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var this$__$1 = this;
var or__26569__auto__ = this$__$1.slice(k,(k + (1)));
if(cljs.core.truth_(or__26569__auto__)){
return or__26569__auto__;
} else {
return null;
}
});

jQuery.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var this$__$1 = this;
return cljs.core._nth.call(null,this$__$1,k,not_found);
});

jQuery.prototype.cljs$core$IReduce$ = cljs.core.PROTOCOL_SENTINEL;

jQuery.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (this$,f){
var this$__$1 = this;
return cljs.core.ci_reduce.call(null,this$__$1,f);
});

jQuery.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (this$,f,start){
var this$__$1 = this;
return cljs.core.ci_reduce.call(null,this$__$1,f,start);
});

jQuery.prototype.cljs$core$IFn$ = cljs.core.PROTOCOL_SENTINEL;

jQuery.prototype.call = (function() {
var G__28446 = null;
var G__28446__2 = (function (self__,k){
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k);
});
var G__28446__3 = (function (self__,k,not_found){
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k,not_found);
});
G__28446 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__28446__2.call(this,self__,k);
case 3:
return G__28446__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__28446.cljs$core$IFn$_invoke$arity$2 = G__28446__2;
G__28446.cljs$core$IFn$_invoke$arity$3 = G__28446__3;
return G__28446;
})()
;

jQuery.prototype.apply = (function (self__,args28445){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args28445)));
});

jQuery.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var this$ = this;
return cljs.core._lookup.call(null,this$,k);
});

jQuery.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var this$ = this;
return cljs.core._lookup.call(null,this$,k,not_found);
});
jayq.core.anim = (function jayq$core$anim(var_args){
var args__27685__auto__ = [];
var len__27678__auto___28454 = arguments.length;
var i__27679__auto___28455 = (0);
while(true){
if((i__27679__auto___28455 < len__27678__auto___28454)){
args__27685__auto__.push((arguments[i__27679__auto___28455]));

var G__28456 = (i__27679__auto___28455 + (1));
i__27679__auto___28455 = G__28456;
continue;
} else {
}
break;
}

var argseq__27686__auto__ = ((((2) < args__27685__auto__.length))?(new cljs.core.IndexedSeq(args__27685__auto__.slice((2)),(0),null)):null);
return jayq.core.anim.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__27686__auto__);
});

jayq.core.anim.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,props,p__28450){
var vec__28451 = p__28450;
var speed = cljs.core.nth.call(null,vec__28451,(0),null);
var on_finish = cljs.core.nth.call(null,vec__28451,(1),null);
return $elem.animate(cljs.core.clj__GT_js.call(null,props),speed,on_finish);
});

jayq.core.anim.cljs$lang$maxFixedArity = (2);

jayq.core.anim.cljs$lang$applyTo = (function (seq28447){
var G__28448 = cljs.core.first.call(null,seq28447);
var seq28447__$1 = cljs.core.next.call(null,seq28447);
var G__28449 = cljs.core.first.call(null,seq28447__$1);
var seq28447__$2 = cljs.core.next.call(null,seq28447__$1);
return jayq.core.anim.cljs$core$IFn$_invoke$arity$variadic(G__28448,G__28449,seq28447__$2);
});

jayq.core.text = (function jayq$core$text(var_args){
var args28457 = [];
var len__27678__auto___28460 = arguments.length;
var i__27679__auto___28461 = (0);
while(true){
if((i__27679__auto___28461 < len__27678__auto___28460)){
args28457.push((arguments[i__27679__auto___28461]));

var G__28462 = (i__27679__auto___28461 + (1));
i__27679__auto___28461 = G__28462;
continue;
} else {
}
break;
}

var G__28459 = args28457.length;
switch (G__28459) {
case 1:
return jayq.core.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args28457.length)].join('')));

}
});

jayq.core.text.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.text();
});

jayq.core.text.cljs$core$IFn$_invoke$arity$2 = (function ($elem,txt){
return $elem.text(txt);
});

jayq.core.text.cljs$lang$maxFixedArity = 2;

jayq.core.css = (function jayq$core$css(var_args){
var args28464 = [];
var len__27678__auto___28467 = arguments.length;
var i__27679__auto___28468 = (0);
while(true){
if((i__27679__auto___28468 < len__27678__auto___28467)){
args28464.push((arguments[i__27679__auto___28468]));

var G__28469 = (i__27679__auto___28468 + (1));
i__27679__auto___28468 = G__28469;
continue;
} else {
}
break;
}

var G__28466 = args28464.length;
switch (G__28466) {
case 2:
return jayq.core.css.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.css.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args28464.length)].join('')));

}
});

jayq.core.css.cljs$core$IFn$_invoke$arity$2 = (function ($elem,opts){
return $elem.css(cljs.core.clj__GT_js.call(null,opts));
});

jayq.core.css.cljs$core$IFn$_invoke$arity$3 = (function ($elem,p,v){
return $elem.css(cljs.core.name.call(null,p),v);
});

jayq.core.css.cljs$lang$maxFixedArity = 3;

jayq.core.attr = (function jayq$core$attr(var_args){
var args28471 = [];
var len__27678__auto___28474 = arguments.length;
var i__27679__auto___28475 = (0);
while(true){
if((i__27679__auto___28475 < len__27678__auto___28474)){
args28471.push((arguments[i__27679__auto___28475]));

var G__28476 = (i__27679__auto___28475 + (1));
i__27679__auto___28475 = G__28476;
continue;
} else {
}
break;
}

var G__28473 = args28471.length;
switch (G__28473) {
case 3:
return jayq.core.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return jayq.core.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args28471.length)].join('')));

}
});

jayq.core.attr.cljs$core$IFn$_invoke$arity$3 = (function ($elem,n,v){
return $elem.attr(cljs.core.name.call(null,n),v);
});

jayq.core.attr.cljs$core$IFn$_invoke$arity$2 = (function ($elem,x){
return $elem.attr(cljs.core.clj__GT_js.call(null,x));
});

jayq.core.attr.cljs$lang$maxFixedArity = 3;

jayq.core.prop = (function jayq$core$prop(var_args){
var args28478 = [];
var len__27678__auto___28481 = arguments.length;
var i__27679__auto___28482 = (0);
while(true){
if((i__27679__auto___28482 < len__27678__auto___28481)){
args28478.push((arguments[i__27679__auto___28482]));

var G__28483 = (i__27679__auto___28482 + (1));
i__27679__auto___28482 = G__28483;
continue;
} else {
}
break;
}

var G__28480 = args28478.length;
switch (G__28480) {
case 3:
return jayq.core.prop.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return jayq.core.prop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args28478.length)].join('')));

}
});

jayq.core.prop.cljs$core$IFn$_invoke$arity$3 = (function ($elem,n,v){
return $elem.prop(cljs.core.name.call(null,n),v);
});

jayq.core.prop.cljs$core$IFn$_invoke$arity$2 = (function ($elem,x){
return $elem.prop(cljs.core.clj__GT_js.call(null,x));
});

jayq.core.prop.cljs$lang$maxFixedArity = 3;

jayq.core.remove_attr = (function jayq$core$remove_attr($elem,a){
return $elem.removeAttr(cljs.core.name.call(null,a));
});
jayq.core.remove_prop = (function jayq$core$remove_prop($elem,a){
return $elem.removeProp(cljs.core.name.call(null,a));
});
jayq.core.data = (function jayq$core$data(var_args){
var args28485 = [];
var len__27678__auto___28488 = arguments.length;
var i__27679__auto___28489 = (0);
while(true){
if((i__27679__auto___28489 < len__27678__auto___28488)){
args28485.push((arguments[i__27679__auto___28489]));

var G__28490 = (i__27679__auto___28489 + (1));
i__27679__auto___28489 = G__28490;
continue;
} else {
}
break;
}

var G__28487 = args28485.length;
switch (G__28487) {
case 1:
return jayq.core.data.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.data.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.data.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args28485.length)].join('')));

}
});

jayq.core.data.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.data();
});

jayq.core.data.cljs$core$IFn$_invoke$arity$2 = (function ($elem,k){
return $elem.data(cljs.core.clj__GT_js.call(null,k));
});

jayq.core.data.cljs$core$IFn$_invoke$arity$3 = (function ($elem,k,v){
return $elem.data(cljs.core.name.call(null,k),cljs.core.clj__GT_js.call(null,v));
});

jayq.core.data.cljs$lang$maxFixedArity = 3;

jayq.core.add_class = (function jayq$core$add_class($elem,cl){
return $elem.addClass(cljs.core.name.call(null,cl));
});
jayq.core.remove_class = (function jayq$core$remove_class(var_args){
var args28492 = [];
var len__27678__auto___28495 = arguments.length;
var i__27679__auto___28496 = (0);
while(true){
if((i__27679__auto___28496 < len__27678__auto___28495)){
args28492.push((arguments[i__27679__auto___28496]));

var G__28497 = (i__27679__auto___28496 + (1));
i__27679__auto___28496 = G__28497;
continue;
} else {
}
break;
}

var G__28494 = args28492.length;
switch (G__28494) {
case 1:
return jayq.core.remove_class.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.remove_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args28492.length)].join('')));

}
});

jayq.core.remove_class.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.removeClass();
});

jayq.core.remove_class.cljs$core$IFn$_invoke$arity$2 = (function ($elem,cl){
return $elem.removeClass(cljs.core.name.call(null,cl));
});

jayq.core.remove_class.cljs$lang$maxFixedArity = 2;

jayq.core.toggle_class = (function jayq$core$toggle_class(var_args){
var args28499 = [];
var len__27678__auto___28502 = arguments.length;
var i__27679__auto___28503 = (0);
while(true){
if((i__27679__auto___28503 < len__27678__auto___28502)){
args28499.push((arguments[i__27679__auto___28503]));

var G__28504 = (i__27679__auto___28503 + (1));
i__27679__auto___28503 = G__28504;
continue;
} else {
}
break;
}

var G__28501 = args28499.length;
switch (G__28501) {
case 2:
return jayq.core.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args28499.length)].join('')));

}
});

jayq.core.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function ($elem,cl){
return $elem.toggleClass(cljs.core.name.call(null,cl));
});

jayq.core.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function ($elem,cl,switch$){
return $elem.toggleClass(cljs.core.name.call(null,cl),cljs.core.boolean$.call(null,switch$));
});

jayq.core.toggle_class.cljs$lang$maxFixedArity = 3;

jayq.core.has_class = (function jayq$core$has_class($elem,cl){
return $elem.hasClass(cljs.core.name.call(null,cl));
});
jayq.core.is = (function jayq$core$is($elem,selector){
return $elem.is(jayq.core.__GT_selector.call(null,selector));
});
jayq.core.after = (function jayq$core$after($elem,content){
return $elem.after(content);
});
jayq.core.before = (function jayq$core$before($elem,content){
return $elem.before(content);
});
jayq.core.append = (function jayq$core$append($elem,content){
return $elem.append(content);
});
jayq.core.prepend = (function jayq$core$prepend($elem,content){
return $elem.prepend(content);
});
jayq.core.append_to = (function jayq$core$append_to($elem,target){
return $elem.appendTo(jayq.core.__GT_selector.call(null,target));
});
jayq.core.prepend_to = (function jayq$core$prepend_to($elem,target){
return $elem.prependTo(jayq.core.__GT_selector.call(null,target));
});
jayq.core.insert_before = (function jayq$core$insert_before($elem,target){
return $elem.insertBefore(jayq.core.__GT_selector.call(null,target));
});
jayq.core.insert_after = (function jayq$core$insert_after($elem,target){
return $elem.insertAfter(jayq.core.__GT_selector.call(null,target));
});
jayq.core.replace_with = (function jayq$core$replace_with($elem,content){
return $elem.replaceWith(content);
});
jayq.core.remove = (function jayq$core$remove($elem){
return $elem.remove();
});
jayq.core.hide = (function jayq$core$hide(var_args){
var args__27685__auto__ = [];
var len__27678__auto___28512 = arguments.length;
var i__27679__auto___28513 = (0);
while(true){
if((i__27679__auto___28513 < len__27678__auto___28512)){
args__27685__auto__.push((arguments[i__27679__auto___28513]));

var G__28514 = (i__27679__auto___28513 + (1));
i__27679__auto___28513 = G__28514;
continue;
} else {
}
break;
}

var argseq__27686__auto__ = ((((1) < args__27685__auto__.length))?(new cljs.core.IndexedSeq(args__27685__auto__.slice((1)),(0),null)):null);
return jayq.core.hide.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27686__auto__);
});

jayq.core.hide.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__28508){
var vec__28509 = p__28508;
var speed = cljs.core.nth.call(null,vec__28509,(0),null);
var on_finish = cljs.core.nth.call(null,vec__28509,(1),null);
return $elem.hide(speed,on_finish);
});

jayq.core.hide.cljs$lang$maxFixedArity = (1);

jayq.core.hide.cljs$lang$applyTo = (function (seq28506){
var G__28507 = cljs.core.first.call(null,seq28506);
var seq28506__$1 = cljs.core.next.call(null,seq28506);
return jayq.core.hide.cljs$core$IFn$_invoke$arity$variadic(G__28507,seq28506__$1);
});

jayq.core.show = (function jayq$core$show(var_args){
var args__27685__auto__ = [];
var len__27678__auto___28521 = arguments.length;
var i__27679__auto___28522 = (0);
while(true){
if((i__27679__auto___28522 < len__27678__auto___28521)){
args__27685__auto__.push((arguments[i__27679__auto___28522]));

var G__28523 = (i__27679__auto___28522 + (1));
i__27679__auto___28522 = G__28523;
continue;
} else {
}
break;
}

var argseq__27686__auto__ = ((((1) < args__27685__auto__.length))?(new cljs.core.IndexedSeq(args__27685__auto__.slice((1)),(0),null)):null);
return jayq.core.show.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27686__auto__);
});

jayq.core.show.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__28517){
var vec__28518 = p__28517;
var speed = cljs.core.nth.call(null,vec__28518,(0),null);
var on_finish = cljs.core.nth.call(null,vec__28518,(1),null);
return $elem.show(speed,on_finish);
});

jayq.core.show.cljs$lang$maxFixedArity = (1);

jayq.core.show.cljs$lang$applyTo = (function (seq28515){
var G__28516 = cljs.core.first.call(null,seq28515);
var seq28515__$1 = cljs.core.next.call(null,seq28515);
return jayq.core.show.cljs$core$IFn$_invoke$arity$variadic(G__28516,seq28515__$1);
});

jayq.core.toggle = (function jayq$core$toggle(var_args){
var args__27685__auto__ = [];
var len__27678__auto___28530 = arguments.length;
var i__27679__auto___28531 = (0);
while(true){
if((i__27679__auto___28531 < len__27678__auto___28530)){
args__27685__auto__.push((arguments[i__27679__auto___28531]));

var G__28532 = (i__27679__auto___28531 + (1));
i__27679__auto___28531 = G__28532;
continue;
} else {
}
break;
}

var argseq__27686__auto__ = ((((1) < args__27685__auto__.length))?(new cljs.core.IndexedSeq(args__27685__auto__.slice((1)),(0),null)):null);
return jayq.core.toggle.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27686__auto__);
});

jayq.core.toggle.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__28526){
var vec__28527 = p__28526;
var speed = cljs.core.nth.call(null,vec__28527,(0),null);
var on_finish = cljs.core.nth.call(null,vec__28527,(1),null);
return $elem.toggle(speed,on_finish);
});

jayq.core.toggle.cljs$lang$maxFixedArity = (1);

jayq.core.toggle.cljs$lang$applyTo = (function (seq28524){
var G__28525 = cljs.core.first.call(null,seq28524);
var seq28524__$1 = cljs.core.next.call(null,seq28524);
return jayq.core.toggle.cljs$core$IFn$_invoke$arity$variadic(G__28525,seq28524__$1);
});

jayq.core.fade_out = (function jayq$core$fade_out(var_args){
var args__27685__auto__ = [];
var len__27678__auto___28539 = arguments.length;
var i__27679__auto___28540 = (0);
while(true){
if((i__27679__auto___28540 < len__27678__auto___28539)){
args__27685__auto__.push((arguments[i__27679__auto___28540]));

var G__28541 = (i__27679__auto___28540 + (1));
i__27679__auto___28540 = G__28541;
continue;
} else {
}
break;
}

var argseq__27686__auto__ = ((((1) < args__27685__auto__.length))?(new cljs.core.IndexedSeq(args__27685__auto__.slice((1)),(0),null)):null);
return jayq.core.fade_out.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27686__auto__);
});

jayq.core.fade_out.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__28535){
var vec__28536 = p__28535;
var speed = cljs.core.nth.call(null,vec__28536,(0),null);
var on_finish = cljs.core.nth.call(null,vec__28536,(1),null);
return $elem.fadeOut(speed,on_finish);
});

jayq.core.fade_out.cljs$lang$maxFixedArity = (1);

jayq.core.fade_out.cljs$lang$applyTo = (function (seq28533){
var G__28534 = cljs.core.first.call(null,seq28533);
var seq28533__$1 = cljs.core.next.call(null,seq28533);
return jayq.core.fade_out.cljs$core$IFn$_invoke$arity$variadic(G__28534,seq28533__$1);
});

jayq.core.fade_in = (function jayq$core$fade_in(var_args){
var args__27685__auto__ = [];
var len__27678__auto___28548 = arguments.length;
var i__27679__auto___28549 = (0);
while(true){
if((i__27679__auto___28549 < len__27678__auto___28548)){
args__27685__auto__.push((arguments[i__27679__auto___28549]));

var G__28550 = (i__27679__auto___28549 + (1));
i__27679__auto___28549 = G__28550;
continue;
} else {
}
break;
}

var argseq__27686__auto__ = ((((1) < args__27685__auto__.length))?(new cljs.core.IndexedSeq(args__27685__auto__.slice((1)),(0),null)):null);
return jayq.core.fade_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27686__auto__);
});

jayq.core.fade_in.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__28544){
var vec__28545 = p__28544;
var speed = cljs.core.nth.call(null,vec__28545,(0),null);
var on_finish = cljs.core.nth.call(null,vec__28545,(1),null);
return $elem.fadeIn(speed,on_finish);
});

jayq.core.fade_in.cljs$lang$maxFixedArity = (1);

jayq.core.fade_in.cljs$lang$applyTo = (function (seq28542){
var G__28543 = cljs.core.first.call(null,seq28542);
var seq28542__$1 = cljs.core.next.call(null,seq28542);
return jayq.core.fade_in.cljs$core$IFn$_invoke$arity$variadic(G__28543,seq28542__$1);
});

jayq.core.slide_up = (function jayq$core$slide_up(var_args){
var args__27685__auto__ = [];
var len__27678__auto___28557 = arguments.length;
var i__27679__auto___28558 = (0);
while(true){
if((i__27679__auto___28558 < len__27678__auto___28557)){
args__27685__auto__.push((arguments[i__27679__auto___28558]));

var G__28559 = (i__27679__auto___28558 + (1));
i__27679__auto___28558 = G__28559;
continue;
} else {
}
break;
}

var argseq__27686__auto__ = ((((1) < args__27685__auto__.length))?(new cljs.core.IndexedSeq(args__27685__auto__.slice((1)),(0),null)):null);
return jayq.core.slide_up.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27686__auto__);
});

jayq.core.slide_up.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__28553){
var vec__28554 = p__28553;
var speed = cljs.core.nth.call(null,vec__28554,(0),null);
var on_finish = cljs.core.nth.call(null,vec__28554,(1),null);
return $elem.slideUp(speed,on_finish);
});

jayq.core.slide_up.cljs$lang$maxFixedArity = (1);

jayq.core.slide_up.cljs$lang$applyTo = (function (seq28551){
var G__28552 = cljs.core.first.call(null,seq28551);
var seq28551__$1 = cljs.core.next.call(null,seq28551);
return jayq.core.slide_up.cljs$core$IFn$_invoke$arity$variadic(G__28552,seq28551__$1);
});

jayq.core.slide_down = (function jayq$core$slide_down(var_args){
var args__27685__auto__ = [];
var len__27678__auto___28566 = arguments.length;
var i__27679__auto___28567 = (0);
while(true){
if((i__27679__auto___28567 < len__27678__auto___28566)){
args__27685__auto__.push((arguments[i__27679__auto___28567]));

var G__28568 = (i__27679__auto___28567 + (1));
i__27679__auto___28567 = G__28568;
continue;
} else {
}
break;
}

var argseq__27686__auto__ = ((((1) < args__27685__auto__.length))?(new cljs.core.IndexedSeq(args__27685__auto__.slice((1)),(0),null)):null);
return jayq.core.slide_down.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27686__auto__);
});

jayq.core.slide_down.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__28562){
var vec__28563 = p__28562;
var speed = cljs.core.nth.call(null,vec__28563,(0),null);
var on_finish = cljs.core.nth.call(null,vec__28563,(1),null);
return $elem.slideDown(speed,on_finish);
});

jayq.core.slide_down.cljs$lang$maxFixedArity = (1);

jayq.core.slide_down.cljs$lang$applyTo = (function (seq28560){
var G__28561 = cljs.core.first.call(null,seq28560);
var seq28560__$1 = cljs.core.next.call(null,seq28560);
return jayq.core.slide_down.cljs$core$IFn$_invoke$arity$variadic(G__28561,seq28560__$1);
});

jayq.core.siblings = (function jayq$core$siblings(var_args){
var args28569 = [];
var len__27678__auto___28572 = arguments.length;
var i__27679__auto___28573 = (0);
while(true){
if((i__27679__auto___28573 < len__27678__auto___28572)){
args28569.push((arguments[i__27679__auto___28573]));

var G__28574 = (i__27679__auto___28573 + (1));
i__27679__auto___28573 = G__28574;
continue;
} else {
}
break;
}

var G__28571 = args28569.length;
switch (G__28571) {
case 1:
return jayq.core.siblings.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.siblings.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args28569.length)].join('')));

}
});

jayq.core.siblings.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.siblings();
});

jayq.core.siblings.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.siblings(cljs.core.name.call(null,selector));
});

jayq.core.siblings.cljs$lang$maxFixedArity = 2;

jayq.core.parent = (function jayq$core$parent($elem){
return $elem.parent();
});
jayq.core.parents = (function jayq$core$parents(var_args){
var args28576 = [];
var len__27678__auto___28579 = arguments.length;
var i__27679__auto___28580 = (0);
while(true){
if((i__27679__auto___28580 < len__27678__auto___28579)){
args28576.push((arguments[i__27679__auto___28580]));

var G__28581 = (i__27679__auto___28580 + (1));
i__27679__auto___28580 = G__28581;
continue;
} else {
}
break;
}

var G__28578 = args28576.length;
switch (G__28578) {
case 1:
return jayq.core.parents.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.parents.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args28576.length)].join('')));

}
});

jayq.core.parents.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.parents();
});

jayq.core.parents.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.parents(cljs.core.name.call(null,selector));
});

jayq.core.parents.cljs$lang$maxFixedArity = 2;

jayq.core.parents_until = (function jayq$core$parents_until(var_args){
var args28583 = [];
var len__27678__auto___28586 = arguments.length;
var i__27679__auto___28587 = (0);
while(true){
if((i__27679__auto___28587 < len__27678__auto___28586)){
args28583.push((arguments[i__27679__auto___28587]));

var G__28588 = (i__27679__auto___28587 + (1));
i__27679__auto___28587 = G__28588;
continue;
} else {
}
break;
}

var G__28585 = args28583.length;
switch (G__28585) {
case 1:
return jayq.core.parents_until.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.parents_until.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.parents_until.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args28583.length)].join('')));

}
});

jayq.core.parents_until.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.parentsUntil();
});

jayq.core.parents_until.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.parentsUntil(jayq.core.__GT_selector.call(null,selector));
});

jayq.core.parents_until.cljs$core$IFn$_invoke$arity$3 = (function ($elem,selector,filtr){
return $elem.parentsUntil(jayq.core.__GT_selector.call(null,selector),cljs.core.name.call(null,filtr));
});

jayq.core.parents_until.cljs$lang$maxFixedArity = 3;

jayq.core.children = (function jayq$core$children(var_args){
var args28590 = [];
var len__27678__auto___28593 = arguments.length;
var i__27679__auto___28594 = (0);
while(true){
if((i__27679__auto___28594 < len__27678__auto___28593)){
args28590.push((arguments[i__27679__auto___28594]));

var G__28595 = (i__27679__auto___28594 + (1));
i__27679__auto___28594 = G__28595;
continue;
} else {
}
break;
}

var G__28592 = args28590.length;
switch (G__28592) {
case 2:
return jayq.core.children.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.children.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args28590.length)].join('')));

}
});

jayq.core.children.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.children(cljs.core.name.call(null,selector));
});

jayq.core.children.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.children();
});

jayq.core.children.cljs$lang$maxFixedArity = 2;

jayq.core.next = (function jayq$core$next(var_args){
var args28597 = [];
var len__27678__auto___28600 = arguments.length;
var i__27679__auto___28601 = (0);
while(true){
if((i__27679__auto___28601 < len__27678__auto___28600)){
args28597.push((arguments[i__27679__auto___28601]));

var G__28602 = (i__27679__auto___28601 + (1));
i__27679__auto___28601 = G__28602;
continue;
} else {
}
break;
}

var G__28599 = args28597.length;
switch (G__28599) {
case 1:
return jayq.core.next.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.next.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args28597.length)].join('')));

}
});

jayq.core.next.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.next();
});

jayq.core.next.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.next(cljs.core.name.call(null,selector));
});

jayq.core.next.cljs$lang$maxFixedArity = 2;

jayq.core.prev = (function jayq$core$prev(var_args){
var args28604 = [];
var len__27678__auto___28607 = arguments.length;
var i__27679__auto___28608 = (0);
while(true){
if((i__27679__auto___28608 < len__27678__auto___28607)){
args28604.push((arguments[i__27679__auto___28608]));

var G__28609 = (i__27679__auto___28608 + (1));
i__27679__auto___28608 = G__28609;
continue;
} else {
}
break;
}

var G__28606 = args28604.length;
switch (G__28606) {
case 1:
return jayq.core.prev.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.prev.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args28604.length)].join('')));

}
});

jayq.core.prev.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.prev();
});

jayq.core.prev.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.prev(cljs.core.name.call(null,selector));
});

jayq.core.prev.cljs$lang$maxFixedArity = 2;

jayq.core.next_all = (function jayq$core$next_all(var_args){
var args28611 = [];
var len__27678__auto___28614 = arguments.length;
var i__27679__auto___28615 = (0);
while(true){
if((i__27679__auto___28615 < len__27678__auto___28614)){
args28611.push((arguments[i__27679__auto___28615]));

var G__28616 = (i__27679__auto___28615 + (1));
i__27679__auto___28615 = G__28616;
continue;
} else {
}
break;
}

var G__28613 = args28611.length;
switch (G__28613) {
case 1:
return jayq.core.next_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.next_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args28611.length)].join('')));

}
});

jayq.core.next_all.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.nextAll();
});

jayq.core.next_all.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.nextAll(cljs.core.name.call(null,selector));
});

jayq.core.next_all.cljs$lang$maxFixedArity = 2;

jayq.core.prev_all = (function jayq$core$prev_all(var_args){
var args28618 = [];
var len__27678__auto___28621 = arguments.length;
var i__27679__auto___28622 = (0);
while(true){
if((i__27679__auto___28622 < len__27678__auto___28621)){
args28618.push((arguments[i__27679__auto___28622]));

var G__28623 = (i__27679__auto___28622 + (1));
i__27679__auto___28622 = G__28623;
continue;
} else {
}
break;
}

var G__28620 = args28618.length;
switch (G__28620) {
case 1:
return jayq.core.prev_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.prev_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args28618.length)].join('')));

}
});

jayq.core.prev_all.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.prevAll();
});

jayq.core.prev_all.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.prevAll(cljs.core.name.call(null,selector));
});

jayq.core.prev_all.cljs$lang$maxFixedArity = 2;

jayq.core.next_until = (function jayq$core$next_until(var_args){
var args28625 = [];
var len__27678__auto___28628 = arguments.length;
var i__27679__auto___28629 = (0);
while(true){
if((i__27679__auto___28629 < len__27678__auto___28628)){
args28625.push((arguments[i__27679__auto___28629]));

var G__28630 = (i__27679__auto___28629 + (1));
i__27679__auto___28629 = G__28630;
continue;
} else {
}
break;
}

var G__28627 = args28625.length;
switch (G__28627) {
case 1:
return jayq.core.next_until.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.next_until.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.next_until.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args28625.length)].join('')));

}
});

jayq.core.next_until.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.nextUntil();
});

jayq.core.next_until.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.nextUntil(jayq.core.__GT_selector.call(null,selector));
});

jayq.core.next_until.cljs$core$IFn$_invoke$arity$3 = (function ($elem,selector,filtr){
return $elem.nextUntil(jayq.core.__GT_selector.call(null,selector),cljs.core.name.call(null,filtr));
});

jayq.core.next_until.cljs$lang$maxFixedArity = 3;

jayq.core.prev_until = (function jayq$core$prev_until(var_args){
var args28632 = [];
var len__27678__auto___28635 = arguments.length;
var i__27679__auto___28636 = (0);
while(true){
if((i__27679__auto___28636 < len__27678__auto___28635)){
args28632.push((arguments[i__27679__auto___28636]));

var G__28637 = (i__27679__auto___28636 + (1));
i__27679__auto___28636 = G__28637;
continue;
} else {
}
break;
}

var G__28634 = args28632.length;
switch (G__28634) {
case 1:
return jayq.core.prev_until.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.prev_until.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.prev_until.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args28632.length)].join('')));

}
});

jayq.core.prev_until.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.prevUntil();
});

jayq.core.prev_until.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.prevUntil(jayq.core.__GT_selector.call(null,selector));
});

jayq.core.prev_until.cljs$core$IFn$_invoke$arity$3 = (function ($elem,selector,filtr){
return $elem.prevUntil(jayq.core.__GT_selector.call(null,selector),cljs.core.name.call(null,filtr));
});

jayq.core.prev_until.cljs$lang$maxFixedArity = 3;

jayq.core.find = (function jayq$core$find($elem,selector){
return $elem.find(cljs.core.name.call(null,selector));
});
jayq.core.closest = (function jayq$core$closest(var_args){
var args__27685__auto__ = [];
var len__27678__auto___28646 = arguments.length;
var i__27679__auto___28647 = (0);
while(true){
if((i__27679__auto___28647 < len__27678__auto___28646)){
args__27685__auto__.push((arguments[i__27679__auto___28647]));

var G__28648 = (i__27679__auto___28647 + (1));
i__27679__auto___28647 = G__28648;
continue;
} else {
}
break;
}

var argseq__27686__auto__ = ((((2) < args__27685__auto__.length))?(new cljs.core.IndexedSeq(args__27685__auto__.slice((2)),(0),null)):null);
return jayq.core.closest.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__27686__auto__);
});

jayq.core.closest.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,selector,p__28642){
var vec__28643 = p__28642;
var context = cljs.core.nth.call(null,vec__28643,(0),null);
return $elem.closest(jayq.core.__GT_selector.call(null,selector),context);
});

jayq.core.closest.cljs$lang$maxFixedArity = (2);

jayq.core.closest.cljs$lang$applyTo = (function (seq28639){
var G__28640 = cljs.core.first.call(null,seq28639);
var seq28639__$1 = cljs.core.next.call(null,seq28639);
var G__28641 = cljs.core.first.call(null,seq28639__$1);
var seq28639__$2 = cljs.core.next.call(null,seq28639__$1);
return jayq.core.closest.cljs$core$IFn$_invoke$arity$variadic(G__28640,G__28641,seq28639__$2);
});

jayq.core.clone = (function jayq$core$clone($elem){
return $elem.clone();
});
jayq.core.html = (function jayq$core$html(var_args){
var args28649 = [];
var len__27678__auto___28652 = arguments.length;
var i__27679__auto___28653 = (0);
while(true){
if((i__27679__auto___28653 < len__27678__auto___28652)){
args28649.push((arguments[i__27679__auto___28653]));

var G__28654 = (i__27679__auto___28653 + (1));
i__27679__auto___28653 = G__28654;
continue;
} else {
}
break;
}

var G__28651 = args28649.length;
switch (G__28651) {
case 2:
return jayq.core.html.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.html.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args28649.length)].join('')));

}
});

jayq.core.html.cljs$core$IFn$_invoke$arity$2 = (function ($elem,v){
return $elem.html(v);
});

jayq.core.html.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.html();
});

jayq.core.html.cljs$lang$maxFixedArity = 2;

jayq.core.inner = jayq.core.html;
jayq.core.empty = (function jayq$core$empty($elem){
return $elem.empty();
});
jayq.core.val = (function jayq$core$val(var_args){
var args28656 = [];
var len__27678__auto___28659 = arguments.length;
var i__27679__auto___28660 = (0);
while(true){
if((i__27679__auto___28660 < len__27678__auto___28659)){
args28656.push((arguments[i__27679__auto___28660]));

var G__28661 = (i__27679__auto___28660 + (1));
i__27679__auto___28660 = G__28661;
continue;
} else {
}
break;
}

var G__28658 = args28656.length;
switch (G__28658) {
case 2:
return jayq.core.val.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.val.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args28656.length)].join('')));

}
});

jayq.core.val.cljs$core$IFn$_invoke$arity$2 = (function ($elem,v){
return $elem.val(v);
});

jayq.core.val.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.val();
});

jayq.core.val.cljs$lang$maxFixedArity = 2;

jayq.core.serialize = (function jayq$core$serialize($elem){
return $elem.serialize();
});
jayq.core.queue = (function jayq$core$queue(var_args){
var args28663 = [];
var len__27678__auto___28666 = arguments.length;
var i__27679__auto___28667 = (0);
while(true){
if((i__27679__auto___28667 < len__27678__auto___28666)){
args28663.push((arguments[i__27679__auto___28667]));

var G__28668 = (i__27679__auto___28667 + (1));
i__27679__auto___28667 = G__28668;
continue;
} else {
}
break;
}

var G__28665 = args28663.length;
switch (G__28665) {
case 3:
return jayq.core.queue.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return jayq.core.queue.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.queue.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args28663.length)].join('')));

}
});

jayq.core.queue.cljs$core$IFn$_invoke$arity$3 = (function ($elem,x,y){
return $elem.queue(x,y);
});

jayq.core.queue.cljs$core$IFn$_invoke$arity$2 = (function ($elem,x){
return $elem.queue(x);
});

jayq.core.queue.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.queue();
});

jayq.core.queue.cljs$lang$maxFixedArity = 3;

jayq.core.dequeue = (function jayq$core$dequeue(var_args){
var args28670 = [];
var len__27678__auto___28673 = arguments.length;
var i__27679__auto___28674 = (0);
while(true){
if((i__27679__auto___28674 < len__27678__auto___28673)){
args28670.push((arguments[i__27679__auto___28674]));

var G__28675 = (i__27679__auto___28674 + (1));
i__27679__auto___28674 = G__28675;
continue;
} else {
}
break;
}

var G__28672 = args28670.length;
switch (G__28672) {
case 2:
return jayq.core.dequeue.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.dequeue.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args28670.length)].join('')));

}
});

jayq.core.dequeue.cljs$core$IFn$_invoke$arity$2 = (function ($elem,queue_name){
return $elem.dequeue(queue_name);
});

jayq.core.dequeue.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.dequeue();
});

jayq.core.dequeue.cljs$lang$maxFixedArity = 2;

jayq.core.document_ready = (function jayq$core$document_ready(func){
return jayq.core.$.call(null,document).ready(func);
});
jayq.core.mimetype_converter = (function jayq$core$mimetype_converter(s){
return cljs.reader.read_string.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join(''));
});
jQuery.ajaxSetup(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"accepts","accepts",1429714104),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"edn","edn",1317840885),"application/edn, text/edn",new cljs.core.Keyword(null,"clojure","clojure",438975815),"application/clojure, text/clojure"], null),new cljs.core.Keyword(null,"contents","contents",-1567174023),new cljs.core.PersistentArrayMap(null, 1, ["clojure",/edn|clojure/], null),new cljs.core.Keyword(null,"converters","converters",195533259),new cljs.core.PersistentArrayMap(null, 2, ["text edn",jayq.core.mimetype_converter,"text clojure",jayq.core.mimetype_converter], null)], null)));
jayq.core.clj_content_type_QMARK_ = (function jayq$core$clj_content_type_QMARK_(x){
return cljs.core.re_find.call(null,/^(text|application)\/(clojure|edn)/,x);
});
jayq.core.__GT_content_type = (function jayq$core$__GT_content_type(ct){
if(typeof ct === 'string'){
return ct;
} else {
if((ct instanceof cljs.core.Keyword)){
return cljs.core.subs.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ct)].join(''),(1));
} else {
return null;
}
}
});
jayq.core.preprocess_request = (function jayq$core$preprocess_request(p__28679){
var map__28682 = p__28679;
var map__28682__$1 = ((((!((map__28682 == null)))?((((map__28682.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28682.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28682):map__28682);
var request = map__28682__$1;
var data = cljs.core.get.call(null,map__28682__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var contentType = cljs.core.get.call(null,map__28682__$1,new cljs.core.Keyword(null,"contentType","contentType",-1462509576));
var ct = jayq.core.__GT_content_type.call(null,contentType);
return ((function (ct,map__28682,map__28682__$1,request,data,contentType){
return (function (p1__28678_SHARP_){
if(cljs.core.truth_((function (){var and__26557__auto__ = ct;
if(cljs.core.truth_(and__26557__auto__)){
return jayq.core.clj_content_type_QMARK_.call(null,ct);
} else {
return and__26557__auto__;
}
})())){
return cljs.core.assoc.call(null,p1__28678_SHARP_,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.pr_str.call(null,data));
} else {
return p1__28678_SHARP_;
}
});})(ct,map__28682,map__28682__$1,request,data,contentType))
.call(null,((function (ct,map__28682,map__28682__$1,request,data,contentType){
return (function (p1__28677_SHARP_){
if(cljs.core.truth_(ct)){
return cljs.core.assoc.call(null,p1__28677_SHARP_,new cljs.core.Keyword(null,"contentType","contentType",-1462509576),ct);
} else {
return p1__28677_SHARP_;
}
});})(ct,map__28682,map__28682__$1,request,data,contentType))
.call(null,request));
});
jayq.core.__GT_ajax_settings = (function jayq$core$__GT_ajax_settings(request){
return cljs.core.clj__GT_js.call(null,jayq.core.preprocess_request.call(null,request));
});
jayq.core.ajax = (function jayq$core$ajax(var_args){
var args28684 = [];
var len__27678__auto___28687 = arguments.length;
var i__27679__auto___28688 = (0);
while(true){
if((i__27679__auto___28688 < len__27678__auto___28687)){
args28684.push((arguments[i__27679__auto___28688]));

var G__28689 = (i__27679__auto___28688 + (1));
i__27679__auto___28688 = G__28689;
continue;
} else {
}
break;
}

var G__28686 = args28684.length;
switch (G__28686) {
case 2:
return jayq.core.ajax.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.ajax.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args28684.length)].join('')));

}
});

jayq.core.ajax.cljs$core$IFn$_invoke$arity$2 = (function (url,settings){
return jQuery.ajax(url,jayq.core.__GT_ajax_settings.call(null,settings));
});

jayq.core.ajax.cljs$core$IFn$_invoke$arity$1 = (function (settings){
return jQuery.ajax(jayq.core.__GT_ajax_settings.call(null,settings));
});

jayq.core.ajax.cljs$lang$maxFixedArity = 2;

jayq.core.xhr = (function jayq$core$xhr(p__28691,content,callback){
var vec__28695 = p__28691;
var method = cljs.core.nth.call(null,vec__28695,(0),null);
var uri = cljs.core.nth.call(null,vec__28695,(1),null);
var params = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),clojure.string.upper_case.call(null,cljs.core.name.call(null,method)),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.clj__GT_js.call(null,content),new cljs.core.Keyword(null,"success","success",1890645906),callback], null));
return jQuery.ajax(uri,params);
});
/**
 * Reads clojure data from element content (preferably a script tag with type=edn/clojure)
 */
jayq.core.read = (function jayq$core$read($elem){
return cljs.reader.read_string.call(null,jayq.core.html.call(null,$elem));
});
jayq.core.$contains = jQuery.contains;
jayq.core.bind = (function jayq$core$bind($elem,ev,func){
return $elem.bind(cljs.core.name.call(null,ev),func);
});
jayq.core.unbind = (function jayq$core$unbind(var_args){
var args__27685__auto__ = [];
var len__27678__auto___28705 = arguments.length;
var i__27679__auto___28706 = (0);
while(true){
if((i__27679__auto___28706 < len__27678__auto___28705)){
args__27685__auto__.push((arguments[i__27679__auto___28706]));

var G__28707 = (i__27679__auto___28706 + (1));
i__27679__auto___28706 = G__28707;
continue;
} else {
}
break;
}

var argseq__27686__auto__ = ((((2) < args__27685__auto__.length))?(new cljs.core.IndexedSeq(args__27685__auto__.slice((2)),(0),null)):null);
return jayq.core.unbind.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__27686__auto__);
});

jayq.core.unbind.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,ev,p__28701){
var vec__28702 = p__28701;
var func = cljs.core.nth.call(null,vec__28702,(0),null);
return $elem.unbind(cljs.core.name.call(null,ev),func);
});

jayq.core.unbind.cljs$lang$maxFixedArity = (2);

jayq.core.unbind.cljs$lang$applyTo = (function (seq28698){
var G__28699 = cljs.core.first.call(null,seq28698);
var seq28698__$1 = cljs.core.next.call(null,seq28698);
var G__28700 = cljs.core.first.call(null,seq28698__$1);
var seq28698__$2 = cljs.core.next.call(null,seq28698__$1);
return jayq.core.unbind.cljs$core$IFn$_invoke$arity$variadic(G__28699,G__28700,seq28698__$2);
});

jayq.core.trigger = (function jayq$core$trigger($elem,ev){
return $elem.trigger(cljs.core.name.call(null,ev));
});
jayq.core.delegate = (function jayq$core$delegate($elem,sel,ev,func){
return $elem.delegate(jayq.core.__GT_selector.call(null,sel),cljs.core.name.call(null,ev),func);
});
jayq.core.__GT_event = (function jayq$core$__GT_event(e){
if(cljs.core.coll_QMARK_.call(null,e)){
return clojure.string.join.call(null," ",cljs.core.map.call(null,cljs.core.name,e));
} else {
return cljs.core.clj__GT_js.call(null,e);
}
});
jayq.core.on = (function jayq$core$on(var_args){
var args__27685__auto__ = [];
var len__27678__auto___28715 = arguments.length;
var i__27679__auto___28716 = (0);
while(true){
if((i__27679__auto___28716 < len__27678__auto___28715)){
args__27685__auto__.push((arguments[i__27679__auto___28716]));

var G__28717 = (i__27679__auto___28716 + (1));
i__27679__auto___28716 = G__28717;
continue;
} else {
}
break;
}

var argseq__27686__auto__ = ((((2) < args__27685__auto__.length))?(new cljs.core.IndexedSeq(args__27685__auto__.slice((2)),(0),null)):null);
return jayq.core.on.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__27686__auto__);
});

jayq.core.on.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,events,p__28711){
var vec__28712 = p__28711;
var sel = cljs.core.nth.call(null,vec__28712,(0),null);
var data = cljs.core.nth.call(null,vec__28712,(1),null);
var handler = cljs.core.nth.call(null,vec__28712,(2),null);
return $elem.on(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel),data,handler);
});

jayq.core.on.cljs$lang$maxFixedArity = (2);

jayq.core.on.cljs$lang$applyTo = (function (seq28708){
var G__28709 = cljs.core.first.call(null,seq28708);
var seq28708__$1 = cljs.core.next.call(null,seq28708);
var G__28710 = cljs.core.first.call(null,seq28708__$1);
var seq28708__$2 = cljs.core.next.call(null,seq28708__$1);
return jayq.core.on.cljs$core$IFn$_invoke$arity$variadic(G__28709,G__28710,seq28708__$2);
});

jayq.core.one = (function jayq$core$one(var_args){
var args__27685__auto__ = [];
var len__27678__auto___28725 = arguments.length;
var i__27679__auto___28726 = (0);
while(true){
if((i__27679__auto___28726 < len__27678__auto___28725)){
args__27685__auto__.push((arguments[i__27679__auto___28726]));

var G__28727 = (i__27679__auto___28726 + (1));
i__27679__auto___28726 = G__28727;
continue;
} else {
}
break;
}

var argseq__27686__auto__ = ((((2) < args__27685__auto__.length))?(new cljs.core.IndexedSeq(args__27685__auto__.slice((2)),(0),null)):null);
return jayq.core.one.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__27686__auto__);
});

jayq.core.one.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,events,p__28721){
var vec__28722 = p__28721;
var sel = cljs.core.nth.call(null,vec__28722,(0),null);
var data = cljs.core.nth.call(null,vec__28722,(1),null);
var handler = cljs.core.nth.call(null,vec__28722,(2),null);
return $elem.one(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel),data,handler);
});

jayq.core.one.cljs$lang$maxFixedArity = (2);

jayq.core.one.cljs$lang$applyTo = (function (seq28718){
var G__28719 = cljs.core.first.call(null,seq28718);
var seq28718__$1 = cljs.core.next.call(null,seq28718);
var G__28720 = cljs.core.first.call(null,seq28718__$1);
var seq28718__$2 = cljs.core.next.call(null,seq28718__$1);
return jayq.core.one.cljs$core$IFn$_invoke$arity$variadic(G__28719,G__28720,seq28718__$2);
});

jayq.core.off = (function jayq$core$off(var_args){
var args__27685__auto__ = [];
var len__27678__auto___28735 = arguments.length;
var i__27679__auto___28736 = (0);
while(true){
if((i__27679__auto___28736 < len__27678__auto___28735)){
args__27685__auto__.push((arguments[i__27679__auto___28736]));

var G__28737 = (i__27679__auto___28736 + (1));
i__27679__auto___28736 = G__28737;
continue;
} else {
}
break;
}

var argseq__27686__auto__ = ((((2) < args__27685__auto__.length))?(new cljs.core.IndexedSeq(args__27685__auto__.slice((2)),(0),null)):null);
return jayq.core.off.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__27686__auto__);
});

jayq.core.off.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,events,p__28731){
var vec__28732 = p__28731;
var sel = cljs.core.nth.call(null,vec__28732,(0),null);
var handler = cljs.core.nth.call(null,vec__28732,(1),null);
return $elem.off(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel),handler);
});

jayq.core.off.cljs$lang$maxFixedArity = (2);

jayq.core.off.cljs$lang$applyTo = (function (seq28728){
var G__28729 = cljs.core.first.call(null,seq28728);
var seq28728__$1 = cljs.core.next.call(null,seq28728);
var G__28730 = cljs.core.first.call(null,seq28728__$1);
var seq28728__$2 = cljs.core.next.call(null,seq28728__$1);
return jayq.core.off.cljs$core$IFn$_invoke$arity$variadic(G__28729,G__28730,seq28728__$2);
});

jayq.core.prevent = (function jayq$core$prevent(e){
return e.preventDefault();
});
jayq.core.height = (function jayq$core$height(var_args){
var args28738 = [];
var len__27678__auto___28741 = arguments.length;
var i__27679__auto___28742 = (0);
while(true){
if((i__27679__auto___28742 < len__27678__auto___28741)){
args28738.push((arguments[i__27679__auto___28742]));

var G__28743 = (i__27679__auto___28742 + (1));
i__27679__auto___28742 = G__28743;
continue;
} else {
}
break;
}

var G__28740 = args28738.length;
switch (G__28740) {
case 2:
return jayq.core.height.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.height.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args28738.length)].join('')));

}
});

jayq.core.height.cljs$core$IFn$_invoke$arity$2 = (function ($elem,x){
return $elem.height(x);
});

jayq.core.height.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.height();
});

jayq.core.height.cljs$lang$maxFixedArity = 2;

jayq.core.width = (function jayq$core$width(var_args){
var args28745 = [];
var len__27678__auto___28748 = arguments.length;
var i__27679__auto___28749 = (0);
while(true){
if((i__27679__auto___28749 < len__27678__auto___28748)){
args28745.push((arguments[i__27679__auto___28749]));

var G__28750 = (i__27679__auto___28749 + (1));
i__27679__auto___28749 = G__28750;
continue;
} else {
}
break;
}

var G__28747 = args28745.length;
switch (G__28747) {
case 2:
return jayq.core.width.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.width.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args28745.length)].join('')));

}
});

jayq.core.width.cljs$core$IFn$_invoke$arity$2 = (function ($elem,x){
return $elem.width(x);
});

jayq.core.width.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.width();
});

jayq.core.width.cljs$lang$maxFixedArity = 2;

jayq.core.inner_height = (function jayq$core$inner_height($elem){
return $elem.innerHeight();
});
jayq.core.inner_width = (function jayq$core$inner_width($elem){
return $elem.innerWidth();
});
jayq.core.outer_height = (function jayq$core$outer_height($elem){
return $elem.outerHeight();
});
jayq.core.outer_width = (function jayq$core$outer_width($elem){
return $elem.outerWidth();
});
jayq.core.offset = (function jayq$core$offset(var_args){
var args28752 = [];
var len__27678__auto___28755 = arguments.length;
var i__27679__auto___28756 = (0);
while(true){
if((i__27679__auto___28756 < len__27678__auto___28755)){
args28752.push((arguments[i__27679__auto___28756]));

var G__28757 = (i__27679__auto___28756 + (1));
i__27679__auto___28756 = G__28757;
continue;
} else {
}
break;
}

var G__28754 = args28752.length;
switch (G__28754) {
case 2:
return jayq.core.offset.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.offset.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args28752.length)].join('')));

}
});

jayq.core.offset.cljs$core$IFn$_invoke$arity$2 = (function ($elem,coords){
return cljs.core.clj__GT_js.call(null,coords).offset();
});

jayq.core.offset.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return cljs.core.js__GT_clj.call(null,$elem.offset(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
});

jayq.core.offset.cljs$lang$maxFixedArity = 2;

jayq.core.offset_parent = (function jayq$core$offset_parent($elem){
return $elem.offsetParent();
});
jayq.core.position = (function jayq$core$position($elem){
return cljs.core.js__GT_clj.call(null,$elem.position(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
});
jayq.core.scroll_left = (function jayq$core$scroll_left(var_args){
var args28759 = [];
var len__27678__auto___28762 = arguments.length;
var i__27679__auto___28763 = (0);
while(true){
if((i__27679__auto___28763 < len__27678__auto___28762)){
args28759.push((arguments[i__27679__auto___28763]));

var G__28764 = (i__27679__auto___28763 + (1));
i__27679__auto___28763 = G__28764;
continue;
} else {
}
break;
}

var G__28761 = args28759.length;
switch (G__28761) {
case 1:
return jayq.core.scroll_left.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.scroll_left.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args28759.length)].join('')));

}
});

jayq.core.scroll_left.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.scrollLeft();
});

jayq.core.scroll_left.cljs$core$IFn$_invoke$arity$2 = (function ($elem,x){
return $elem.scrollLeft(x);
});

jayq.core.scroll_left.cljs$lang$maxFixedArity = 2;

jayq.core.scroll_top = (function jayq$core$scroll_top(var_args){
var args28766 = [];
var len__27678__auto___28769 = arguments.length;
var i__27679__auto___28770 = (0);
while(true){
if((i__27679__auto___28770 < len__27678__auto___28769)){
args28766.push((arguments[i__27679__auto___28770]));

var G__28771 = (i__27679__auto___28770 + (1));
i__27679__auto___28770 = G__28771;
continue;
} else {
}
break;
}

var G__28768 = args28766.length;
switch (G__28768) {
case 1:
return jayq.core.scroll_top.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.scroll_top.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args28766.length)].join('')));

}
});

jayq.core.scroll_top.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.scrollTop();
});

jayq.core.scroll_top.cljs$core$IFn$_invoke$arity$2 = (function ($elem,x){
return $elem.scrollTop(x);
});

jayq.core.scroll_top.cljs$lang$maxFixedArity = 2;

jayq.core.$deferred = jQuery.Deferred;
jayq.core.$when = jQuery.when;
jayq.core.then = (function jayq$core$then(var_args){
var args28773 = [];
var len__27678__auto___28776 = arguments.length;
var i__27679__auto___28777 = (0);
while(true){
if((i__27679__auto___28777 < len__27678__auto___28776)){
args28773.push((arguments[i__27679__auto___28777]));

var G__28778 = (i__27679__auto___28777 + (1));
i__27679__auto___28777 = G__28778;
continue;
} else {
}
break;
}

var G__28775 = args28773.length;
switch (G__28775) {
case 3:
return jayq.core.then.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return jayq.core.then.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args28773.length)].join('')));

}
});

jayq.core.then.cljs$core$IFn$_invoke$arity$3 = (function (deferred,done_fn,fail_fn){
return deferred.then(cljs.core.clj__GT_js.call(null,done_fn),cljs.core.clj__GT_js.call(null,fail_fn));
});

jayq.core.then.cljs$core$IFn$_invoke$arity$4 = (function (deferred,done_fn,fail_fn,progress_fn){
return deferred.then(cljs.core.clj__GT_js.call(null,done_fn),cljs.core.clj__GT_js.call(null,fail_fn),cljs.core.clj__GT_js.call(null,progress_fn));
});

jayq.core.then.cljs$lang$maxFixedArity = 4;

jayq.core.done = (function jayq$core$done(var_args){
var args__27685__auto__ = [];
var len__27678__auto___28782 = arguments.length;
var i__27679__auto___28783 = (0);
while(true){
if((i__27679__auto___28783 < len__27678__auto___28782)){
args__27685__auto__.push((arguments[i__27679__auto___28783]));

var G__28784 = (i__27679__auto___28783 + (1));
i__27679__auto___28783 = G__28784;
continue;
} else {
}
break;
}

var argseq__27686__auto__ = ((((1) < args__27685__auto__.length))?(new cljs.core.IndexedSeq(args__27685__auto__.slice((1)),(0),null)):null);
return jayq.core.done.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27686__auto__);
});

jayq.core.done.cljs$core$IFn$_invoke$arity$variadic = (function (deferred,fns_args){
return deferred.done.apply(deferred,cljs.core.clj__GT_js.call(null,fns_args));
});

jayq.core.done.cljs$lang$maxFixedArity = (1);

jayq.core.done.cljs$lang$applyTo = (function (seq28780){
var G__28781 = cljs.core.first.call(null,seq28780);
var seq28780__$1 = cljs.core.next.call(null,seq28780);
return jayq.core.done.cljs$core$IFn$_invoke$arity$variadic(G__28781,seq28780__$1);
});

jayq.core.fail = (function jayq$core$fail(var_args){
var args__27685__auto__ = [];
var len__27678__auto___28787 = arguments.length;
var i__27679__auto___28788 = (0);
while(true){
if((i__27679__auto___28788 < len__27678__auto___28787)){
args__27685__auto__.push((arguments[i__27679__auto___28788]));

var G__28789 = (i__27679__auto___28788 + (1));
i__27679__auto___28788 = G__28789;
continue;
} else {
}
break;
}

var argseq__27686__auto__ = ((((1) < args__27685__auto__.length))?(new cljs.core.IndexedSeq(args__27685__auto__.slice((1)),(0),null)):null);
return jayq.core.fail.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27686__auto__);
});

jayq.core.fail.cljs$core$IFn$_invoke$arity$variadic = (function (deferred,fns_args){
return deferred.fail.apply(deferred,cljs.core.clj__GT_js.call(null,fns_args));
});

jayq.core.fail.cljs$lang$maxFixedArity = (1);

jayq.core.fail.cljs$lang$applyTo = (function (seq28785){
var G__28786 = cljs.core.first.call(null,seq28785);
var seq28785__$1 = cljs.core.next.call(null,seq28785);
return jayq.core.fail.cljs$core$IFn$_invoke$arity$variadic(G__28786,seq28785__$1);
});

jayq.core.progress = (function jayq$core$progress(deferred,fns_args){
return deferred.progress(cljs.core.clj__GT_js.call(null,fns_args));
});
jayq.core.promise = (function jayq$core$promise(var_args){
var args28790 = [];
var len__27678__auto___28793 = arguments.length;
var i__27679__auto___28794 = (0);
while(true){
if((i__27679__auto___28794 < len__27678__auto___28793)){
args28790.push((arguments[i__27679__auto___28794]));

var G__28795 = (i__27679__auto___28794 + (1));
i__27679__auto___28794 = G__28795;
continue;
} else {
}
break;
}

var G__28792 = args28790.length;
switch (G__28792) {
case 1:
return jayq.core.promise.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.promise.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.promise.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args28790.length)].join('')));

}
});

jayq.core.promise.cljs$core$IFn$_invoke$arity$1 = (function (deferred){
return deferred.promise();
});

jayq.core.promise.cljs$core$IFn$_invoke$arity$2 = (function (deferred,type){
return deferred.promise(type);
});

jayq.core.promise.cljs$core$IFn$_invoke$arity$3 = (function (deferred,type,target){
return deferred.promise(type,target);
});

jayq.core.promise.cljs$lang$maxFixedArity = 3;

jayq.core.always = (function jayq$core$always(var_args){
var args__27685__auto__ = [];
var len__27678__auto___28799 = arguments.length;
var i__27679__auto___28800 = (0);
while(true){
if((i__27679__auto___28800 < len__27678__auto___28799)){
args__27685__auto__.push((arguments[i__27679__auto___28800]));

var G__28801 = (i__27679__auto___28800 + (1));
i__27679__auto___28800 = G__28801;
continue;
} else {
}
break;
}

var argseq__27686__auto__ = ((((1) < args__27685__auto__.length))?(new cljs.core.IndexedSeq(args__27685__auto__.slice((1)),(0),null)):null);
return jayq.core.always.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27686__auto__);
});

jayq.core.always.cljs$core$IFn$_invoke$arity$variadic = (function (deferred,fns_args){
return deferred.always.apply(deferred,cljs.core.clj__GT_js.call(null,fns_args));
});

jayq.core.always.cljs$lang$maxFixedArity = (1);

jayq.core.always.cljs$lang$applyTo = (function (seq28797){
var G__28798 = cljs.core.first.call(null,seq28797);
var seq28797__$1 = cljs.core.next.call(null,seq28797);
return jayq.core.always.cljs$core$IFn$_invoke$arity$variadic(G__28798,seq28797__$1);
});

jayq.core.reject = (function jayq$core$reject(deferred,args){
return deferred.reject(args);
});
jayq.core.reject_with = (function jayq$core$reject_with(deferred,context,args){
return deferred.rejectWith(context,args);
});
jayq.core.notify = (function jayq$core$notify(deferred,args){
return deferred.notify(args);
});
jayq.core.notify_with = (function jayq$core$notify_with(deferred,context,args){
return deferred.notifyWith(context,args);
});
jayq.core.resolve = (function jayq$core$resolve(deferred,args){
return deferred.resolve(args);
});
jayq.core.resolve_with = (function jayq$core$resolve_with(deferred,context,args){
return deferred.resolveWith(context,args);
});
jayq.core.pipe = (function jayq$core$pipe(var_args){
var args28802 = [];
var len__27678__auto___28805 = arguments.length;
var i__27679__auto___28806 = (0);
while(true){
if((i__27679__auto___28806 < len__27678__auto___28805)){
args28802.push((arguments[i__27679__auto___28806]));

var G__28807 = (i__27679__auto___28806 + (1));
i__27679__auto___28806 = G__28807;
continue;
} else {
}
break;
}

var G__28804 = args28802.length;
switch (G__28804) {
case 2:
return jayq.core.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return jayq.core.pipe.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args28802.length)].join('')));

}
});

jayq.core.pipe.cljs$core$IFn$_invoke$arity$2 = (function (deferred,done_filter){
return deferred.pipe(done_filter);
});

jayq.core.pipe.cljs$core$IFn$_invoke$arity$3 = (function (deferred,done_filter,fail_filter){
return deferred.pipe(done_filter,fail_filter);
});

jayq.core.pipe.cljs$core$IFn$_invoke$arity$4 = (function (deferred,done_filter,fail_filter,progress_filter){
return deferred.pipe(done_filter,fail_filter,progress_filter);
});

jayq.core.pipe.cljs$lang$maxFixedArity = 4;

jayq.core.state = (function jayq$core$state(deferred){
return cljs.core.keyword.call(null,deferred.state());
});
jayq.core.deferred_m = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"return","return",-1891502105),jayq.core.$when,new cljs.core.Keyword(null,"bind","bind",-113428417),(function (x,f){
var dfd = jayq.core.$deferred.call(null);
jayq.core.done.call(null,x,((function (dfd){
return (function (v){
return jayq.core.done.call(null,f.call(null,v),cljs.core.partial.call(null,jayq.core.resolve,dfd));
});})(dfd))
);

return jayq.core.promise.call(null,dfd);
}),new cljs.core.Keyword(null,"zero","zero",-858964576),cljs.core.identity], null);
jayq.core.ajax_m = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"return","return",-1891502105),cljs.core.identity,new cljs.core.Keyword(null,"bind","bind",-113428417),(function (x,f){
return jayq.core.done.call(null,jayq.core.ajax.call(null,x),f);
}),new cljs.core.Keyword(null,"zero","zero",-858964576),cljs.core.identity], null);

//# sourceMappingURL=core.js.map