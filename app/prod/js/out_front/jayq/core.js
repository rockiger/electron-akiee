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
var args12070 = [];
var len__7933__auto___12073 = arguments.length;
var i__7934__auto___12074 = (0);
while(true){
if((i__7934__auto___12074 < len__7933__auto___12073)){
args12070.push((arguments[i__7934__auto___12074]));

var G__12075 = (i__7934__auto___12074 + (1));
i__7934__auto___12074 = G__12075;
continue;
} else {
}
break;
}

var G__12072 = args12070.length;
switch (G__12072) {
case 1:
return jayq.core.$.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args12070.length)].join('')));

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
var or__6824__auto__ = this$__$1.slice(k,(k + (1)));
if(cljs.core.truth_(or__6824__auto__)){
return or__6824__auto__;
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
var G__12078 = null;
var G__12078__2 = (function (self__,k){
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k);
});
var G__12078__3 = (function (self__,k,not_found){
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k,not_found);
});
G__12078 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__12078__2.call(this,self__,k);
case 3:
return G__12078__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__12078.cljs$core$IFn$_invoke$arity$2 = G__12078__2;
G__12078.cljs$core$IFn$_invoke$arity$3 = G__12078__3;
return G__12078;
})()
;

jQuery.prototype.apply = (function (self__,args12077){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args12077)));
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
var args__7940__auto__ = [];
var len__7933__auto___12086 = arguments.length;
var i__7934__auto___12087 = (0);
while(true){
if((i__7934__auto___12087 < len__7933__auto___12086)){
args__7940__auto__.push((arguments[i__7934__auto___12087]));

var G__12088 = (i__7934__auto___12087 + (1));
i__7934__auto___12087 = G__12088;
continue;
} else {
}
break;
}

var argseq__7941__auto__ = ((((2) < args__7940__auto__.length))?(new cljs.core.IndexedSeq(args__7940__auto__.slice((2)),(0),null)):null);
return jayq.core.anim.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7941__auto__);
});

jayq.core.anim.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,props,p__12082){
var vec__12083 = p__12082;
var speed = cljs.core.nth.call(null,vec__12083,(0),null);
var on_finish = cljs.core.nth.call(null,vec__12083,(1),null);
return $elem.animate(cljs.core.clj__GT_js.call(null,props),speed,on_finish);
});

jayq.core.anim.cljs$lang$maxFixedArity = (2);

jayq.core.anim.cljs$lang$applyTo = (function (seq12079){
var G__12080 = cljs.core.first.call(null,seq12079);
var seq12079__$1 = cljs.core.next.call(null,seq12079);
var G__12081 = cljs.core.first.call(null,seq12079__$1);
var seq12079__$2 = cljs.core.next.call(null,seq12079__$1);
return jayq.core.anim.cljs$core$IFn$_invoke$arity$variadic(G__12080,G__12081,seq12079__$2);
});

jayq.core.text = (function jayq$core$text(var_args){
var args12089 = [];
var len__7933__auto___12092 = arguments.length;
var i__7934__auto___12093 = (0);
while(true){
if((i__7934__auto___12093 < len__7933__auto___12092)){
args12089.push((arguments[i__7934__auto___12093]));

var G__12094 = (i__7934__auto___12093 + (1));
i__7934__auto___12093 = G__12094;
continue;
} else {
}
break;
}

var G__12091 = args12089.length;
switch (G__12091) {
case 1:
return jayq.core.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args12089.length)].join('')));

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
var args12096 = [];
var len__7933__auto___12099 = arguments.length;
var i__7934__auto___12100 = (0);
while(true){
if((i__7934__auto___12100 < len__7933__auto___12099)){
args12096.push((arguments[i__7934__auto___12100]));

var G__12101 = (i__7934__auto___12100 + (1));
i__7934__auto___12100 = G__12101;
continue;
} else {
}
break;
}

var G__12098 = args12096.length;
switch (G__12098) {
case 2:
return jayq.core.css.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.css.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args12096.length)].join('')));

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
var args12103 = [];
var len__7933__auto___12106 = arguments.length;
var i__7934__auto___12107 = (0);
while(true){
if((i__7934__auto___12107 < len__7933__auto___12106)){
args12103.push((arguments[i__7934__auto___12107]));

var G__12108 = (i__7934__auto___12107 + (1));
i__7934__auto___12107 = G__12108;
continue;
} else {
}
break;
}

var G__12105 = args12103.length;
switch (G__12105) {
case 3:
return jayq.core.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return jayq.core.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args12103.length)].join('')));

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
var args12110 = [];
var len__7933__auto___12113 = arguments.length;
var i__7934__auto___12114 = (0);
while(true){
if((i__7934__auto___12114 < len__7933__auto___12113)){
args12110.push((arguments[i__7934__auto___12114]));

var G__12115 = (i__7934__auto___12114 + (1));
i__7934__auto___12114 = G__12115;
continue;
} else {
}
break;
}

var G__12112 = args12110.length;
switch (G__12112) {
case 3:
return jayq.core.prop.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return jayq.core.prop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args12110.length)].join('')));

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
var args12117 = [];
var len__7933__auto___12120 = arguments.length;
var i__7934__auto___12121 = (0);
while(true){
if((i__7934__auto___12121 < len__7933__auto___12120)){
args12117.push((arguments[i__7934__auto___12121]));

var G__12122 = (i__7934__auto___12121 + (1));
i__7934__auto___12121 = G__12122;
continue;
} else {
}
break;
}

var G__12119 = args12117.length;
switch (G__12119) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args12117.length)].join('')));

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
var args12124 = [];
var len__7933__auto___12127 = arguments.length;
var i__7934__auto___12128 = (0);
while(true){
if((i__7934__auto___12128 < len__7933__auto___12127)){
args12124.push((arguments[i__7934__auto___12128]));

var G__12129 = (i__7934__auto___12128 + (1));
i__7934__auto___12128 = G__12129;
continue;
} else {
}
break;
}

var G__12126 = args12124.length;
switch (G__12126) {
case 1:
return jayq.core.remove_class.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.remove_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args12124.length)].join('')));

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
var args12131 = [];
var len__7933__auto___12134 = arguments.length;
var i__7934__auto___12135 = (0);
while(true){
if((i__7934__auto___12135 < len__7933__auto___12134)){
args12131.push((arguments[i__7934__auto___12135]));

var G__12136 = (i__7934__auto___12135 + (1));
i__7934__auto___12135 = G__12136;
continue;
} else {
}
break;
}

var G__12133 = args12131.length;
switch (G__12133) {
case 2:
return jayq.core.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args12131.length)].join('')));

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
var args__7940__auto__ = [];
var len__7933__auto___12144 = arguments.length;
var i__7934__auto___12145 = (0);
while(true){
if((i__7934__auto___12145 < len__7933__auto___12144)){
args__7940__auto__.push((arguments[i__7934__auto___12145]));

var G__12146 = (i__7934__auto___12145 + (1));
i__7934__auto___12145 = G__12146;
continue;
} else {
}
break;
}

var argseq__7941__auto__ = ((((1) < args__7940__auto__.length))?(new cljs.core.IndexedSeq(args__7940__auto__.slice((1)),(0),null)):null);
return jayq.core.hide.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7941__auto__);
});

jayq.core.hide.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__12140){
var vec__12141 = p__12140;
var speed = cljs.core.nth.call(null,vec__12141,(0),null);
var on_finish = cljs.core.nth.call(null,vec__12141,(1),null);
return $elem.hide(speed,on_finish);
});

jayq.core.hide.cljs$lang$maxFixedArity = (1);

jayq.core.hide.cljs$lang$applyTo = (function (seq12138){
var G__12139 = cljs.core.first.call(null,seq12138);
var seq12138__$1 = cljs.core.next.call(null,seq12138);
return jayq.core.hide.cljs$core$IFn$_invoke$arity$variadic(G__12139,seq12138__$1);
});

jayq.core.show = (function jayq$core$show(var_args){
var args__7940__auto__ = [];
var len__7933__auto___12153 = arguments.length;
var i__7934__auto___12154 = (0);
while(true){
if((i__7934__auto___12154 < len__7933__auto___12153)){
args__7940__auto__.push((arguments[i__7934__auto___12154]));

var G__12155 = (i__7934__auto___12154 + (1));
i__7934__auto___12154 = G__12155;
continue;
} else {
}
break;
}

var argseq__7941__auto__ = ((((1) < args__7940__auto__.length))?(new cljs.core.IndexedSeq(args__7940__auto__.slice((1)),(0),null)):null);
return jayq.core.show.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7941__auto__);
});

jayq.core.show.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__12149){
var vec__12150 = p__12149;
var speed = cljs.core.nth.call(null,vec__12150,(0),null);
var on_finish = cljs.core.nth.call(null,vec__12150,(1),null);
return $elem.show(speed,on_finish);
});

jayq.core.show.cljs$lang$maxFixedArity = (1);

jayq.core.show.cljs$lang$applyTo = (function (seq12147){
var G__12148 = cljs.core.first.call(null,seq12147);
var seq12147__$1 = cljs.core.next.call(null,seq12147);
return jayq.core.show.cljs$core$IFn$_invoke$arity$variadic(G__12148,seq12147__$1);
});

jayq.core.toggle = (function jayq$core$toggle(var_args){
var args__7940__auto__ = [];
var len__7933__auto___12162 = arguments.length;
var i__7934__auto___12163 = (0);
while(true){
if((i__7934__auto___12163 < len__7933__auto___12162)){
args__7940__auto__.push((arguments[i__7934__auto___12163]));

var G__12164 = (i__7934__auto___12163 + (1));
i__7934__auto___12163 = G__12164;
continue;
} else {
}
break;
}

var argseq__7941__auto__ = ((((1) < args__7940__auto__.length))?(new cljs.core.IndexedSeq(args__7940__auto__.slice((1)),(0),null)):null);
return jayq.core.toggle.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7941__auto__);
});

jayq.core.toggle.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__12158){
var vec__12159 = p__12158;
var speed = cljs.core.nth.call(null,vec__12159,(0),null);
var on_finish = cljs.core.nth.call(null,vec__12159,(1),null);
return $elem.toggle(speed,on_finish);
});

jayq.core.toggle.cljs$lang$maxFixedArity = (1);

jayq.core.toggle.cljs$lang$applyTo = (function (seq12156){
var G__12157 = cljs.core.first.call(null,seq12156);
var seq12156__$1 = cljs.core.next.call(null,seq12156);
return jayq.core.toggle.cljs$core$IFn$_invoke$arity$variadic(G__12157,seq12156__$1);
});

jayq.core.fade_out = (function jayq$core$fade_out(var_args){
var args__7940__auto__ = [];
var len__7933__auto___12171 = arguments.length;
var i__7934__auto___12172 = (0);
while(true){
if((i__7934__auto___12172 < len__7933__auto___12171)){
args__7940__auto__.push((arguments[i__7934__auto___12172]));

var G__12173 = (i__7934__auto___12172 + (1));
i__7934__auto___12172 = G__12173;
continue;
} else {
}
break;
}

var argseq__7941__auto__ = ((((1) < args__7940__auto__.length))?(new cljs.core.IndexedSeq(args__7940__auto__.slice((1)),(0),null)):null);
return jayq.core.fade_out.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7941__auto__);
});

jayq.core.fade_out.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__12167){
var vec__12168 = p__12167;
var speed = cljs.core.nth.call(null,vec__12168,(0),null);
var on_finish = cljs.core.nth.call(null,vec__12168,(1),null);
return $elem.fadeOut(speed,on_finish);
});

jayq.core.fade_out.cljs$lang$maxFixedArity = (1);

jayq.core.fade_out.cljs$lang$applyTo = (function (seq12165){
var G__12166 = cljs.core.first.call(null,seq12165);
var seq12165__$1 = cljs.core.next.call(null,seq12165);
return jayq.core.fade_out.cljs$core$IFn$_invoke$arity$variadic(G__12166,seq12165__$1);
});

jayq.core.fade_in = (function jayq$core$fade_in(var_args){
var args__7940__auto__ = [];
var len__7933__auto___12180 = arguments.length;
var i__7934__auto___12181 = (0);
while(true){
if((i__7934__auto___12181 < len__7933__auto___12180)){
args__7940__auto__.push((arguments[i__7934__auto___12181]));

var G__12182 = (i__7934__auto___12181 + (1));
i__7934__auto___12181 = G__12182;
continue;
} else {
}
break;
}

var argseq__7941__auto__ = ((((1) < args__7940__auto__.length))?(new cljs.core.IndexedSeq(args__7940__auto__.slice((1)),(0),null)):null);
return jayq.core.fade_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7941__auto__);
});

jayq.core.fade_in.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__12176){
var vec__12177 = p__12176;
var speed = cljs.core.nth.call(null,vec__12177,(0),null);
var on_finish = cljs.core.nth.call(null,vec__12177,(1),null);
return $elem.fadeIn(speed,on_finish);
});

jayq.core.fade_in.cljs$lang$maxFixedArity = (1);

jayq.core.fade_in.cljs$lang$applyTo = (function (seq12174){
var G__12175 = cljs.core.first.call(null,seq12174);
var seq12174__$1 = cljs.core.next.call(null,seq12174);
return jayq.core.fade_in.cljs$core$IFn$_invoke$arity$variadic(G__12175,seq12174__$1);
});

jayq.core.slide_up = (function jayq$core$slide_up(var_args){
var args__7940__auto__ = [];
var len__7933__auto___12189 = arguments.length;
var i__7934__auto___12190 = (0);
while(true){
if((i__7934__auto___12190 < len__7933__auto___12189)){
args__7940__auto__.push((arguments[i__7934__auto___12190]));

var G__12191 = (i__7934__auto___12190 + (1));
i__7934__auto___12190 = G__12191;
continue;
} else {
}
break;
}

var argseq__7941__auto__ = ((((1) < args__7940__auto__.length))?(new cljs.core.IndexedSeq(args__7940__auto__.slice((1)),(0),null)):null);
return jayq.core.slide_up.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7941__auto__);
});

jayq.core.slide_up.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__12185){
var vec__12186 = p__12185;
var speed = cljs.core.nth.call(null,vec__12186,(0),null);
var on_finish = cljs.core.nth.call(null,vec__12186,(1),null);
return $elem.slideUp(speed,on_finish);
});

jayq.core.slide_up.cljs$lang$maxFixedArity = (1);

jayq.core.slide_up.cljs$lang$applyTo = (function (seq12183){
var G__12184 = cljs.core.first.call(null,seq12183);
var seq12183__$1 = cljs.core.next.call(null,seq12183);
return jayq.core.slide_up.cljs$core$IFn$_invoke$arity$variadic(G__12184,seq12183__$1);
});

jayq.core.slide_down = (function jayq$core$slide_down(var_args){
var args__7940__auto__ = [];
var len__7933__auto___12198 = arguments.length;
var i__7934__auto___12199 = (0);
while(true){
if((i__7934__auto___12199 < len__7933__auto___12198)){
args__7940__auto__.push((arguments[i__7934__auto___12199]));

var G__12200 = (i__7934__auto___12199 + (1));
i__7934__auto___12199 = G__12200;
continue;
} else {
}
break;
}

var argseq__7941__auto__ = ((((1) < args__7940__auto__.length))?(new cljs.core.IndexedSeq(args__7940__auto__.slice((1)),(0),null)):null);
return jayq.core.slide_down.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7941__auto__);
});

jayq.core.slide_down.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__12194){
var vec__12195 = p__12194;
var speed = cljs.core.nth.call(null,vec__12195,(0),null);
var on_finish = cljs.core.nth.call(null,vec__12195,(1),null);
return $elem.slideDown(speed,on_finish);
});

jayq.core.slide_down.cljs$lang$maxFixedArity = (1);

jayq.core.slide_down.cljs$lang$applyTo = (function (seq12192){
var G__12193 = cljs.core.first.call(null,seq12192);
var seq12192__$1 = cljs.core.next.call(null,seq12192);
return jayq.core.slide_down.cljs$core$IFn$_invoke$arity$variadic(G__12193,seq12192__$1);
});

jayq.core.siblings = (function jayq$core$siblings(var_args){
var args12201 = [];
var len__7933__auto___12204 = arguments.length;
var i__7934__auto___12205 = (0);
while(true){
if((i__7934__auto___12205 < len__7933__auto___12204)){
args12201.push((arguments[i__7934__auto___12205]));

var G__12206 = (i__7934__auto___12205 + (1));
i__7934__auto___12205 = G__12206;
continue;
} else {
}
break;
}

var G__12203 = args12201.length;
switch (G__12203) {
case 1:
return jayq.core.siblings.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.siblings.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args12201.length)].join('')));

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
var args12208 = [];
var len__7933__auto___12211 = arguments.length;
var i__7934__auto___12212 = (0);
while(true){
if((i__7934__auto___12212 < len__7933__auto___12211)){
args12208.push((arguments[i__7934__auto___12212]));

var G__12213 = (i__7934__auto___12212 + (1));
i__7934__auto___12212 = G__12213;
continue;
} else {
}
break;
}

var G__12210 = args12208.length;
switch (G__12210) {
case 1:
return jayq.core.parents.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.parents.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args12208.length)].join('')));

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
var args12215 = [];
var len__7933__auto___12218 = arguments.length;
var i__7934__auto___12219 = (0);
while(true){
if((i__7934__auto___12219 < len__7933__auto___12218)){
args12215.push((arguments[i__7934__auto___12219]));

var G__12220 = (i__7934__auto___12219 + (1));
i__7934__auto___12219 = G__12220;
continue;
} else {
}
break;
}

var G__12217 = args12215.length;
switch (G__12217) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args12215.length)].join('')));

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
var args12222 = [];
var len__7933__auto___12225 = arguments.length;
var i__7934__auto___12226 = (0);
while(true){
if((i__7934__auto___12226 < len__7933__auto___12225)){
args12222.push((arguments[i__7934__auto___12226]));

var G__12227 = (i__7934__auto___12226 + (1));
i__7934__auto___12226 = G__12227;
continue;
} else {
}
break;
}

var G__12224 = args12222.length;
switch (G__12224) {
case 2:
return jayq.core.children.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.children.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args12222.length)].join('')));

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
var args12229 = [];
var len__7933__auto___12232 = arguments.length;
var i__7934__auto___12233 = (0);
while(true){
if((i__7934__auto___12233 < len__7933__auto___12232)){
args12229.push((arguments[i__7934__auto___12233]));

var G__12234 = (i__7934__auto___12233 + (1));
i__7934__auto___12233 = G__12234;
continue;
} else {
}
break;
}

var G__12231 = args12229.length;
switch (G__12231) {
case 1:
return jayq.core.next.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.next.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args12229.length)].join('')));

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
var args12236 = [];
var len__7933__auto___12239 = arguments.length;
var i__7934__auto___12240 = (0);
while(true){
if((i__7934__auto___12240 < len__7933__auto___12239)){
args12236.push((arguments[i__7934__auto___12240]));

var G__12241 = (i__7934__auto___12240 + (1));
i__7934__auto___12240 = G__12241;
continue;
} else {
}
break;
}

var G__12238 = args12236.length;
switch (G__12238) {
case 1:
return jayq.core.prev.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.prev.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args12236.length)].join('')));

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
var args12243 = [];
var len__7933__auto___12246 = arguments.length;
var i__7934__auto___12247 = (0);
while(true){
if((i__7934__auto___12247 < len__7933__auto___12246)){
args12243.push((arguments[i__7934__auto___12247]));

var G__12248 = (i__7934__auto___12247 + (1));
i__7934__auto___12247 = G__12248;
continue;
} else {
}
break;
}

var G__12245 = args12243.length;
switch (G__12245) {
case 1:
return jayq.core.next_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.next_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args12243.length)].join('')));

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
var args12250 = [];
var len__7933__auto___12253 = arguments.length;
var i__7934__auto___12254 = (0);
while(true){
if((i__7934__auto___12254 < len__7933__auto___12253)){
args12250.push((arguments[i__7934__auto___12254]));

var G__12255 = (i__7934__auto___12254 + (1));
i__7934__auto___12254 = G__12255;
continue;
} else {
}
break;
}

var G__12252 = args12250.length;
switch (G__12252) {
case 1:
return jayq.core.prev_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.prev_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args12250.length)].join('')));

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
var args12257 = [];
var len__7933__auto___12260 = arguments.length;
var i__7934__auto___12261 = (0);
while(true){
if((i__7934__auto___12261 < len__7933__auto___12260)){
args12257.push((arguments[i__7934__auto___12261]));

var G__12262 = (i__7934__auto___12261 + (1));
i__7934__auto___12261 = G__12262;
continue;
} else {
}
break;
}

var G__12259 = args12257.length;
switch (G__12259) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args12257.length)].join('')));

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
var args12264 = [];
var len__7933__auto___12267 = arguments.length;
var i__7934__auto___12268 = (0);
while(true){
if((i__7934__auto___12268 < len__7933__auto___12267)){
args12264.push((arguments[i__7934__auto___12268]));

var G__12269 = (i__7934__auto___12268 + (1));
i__7934__auto___12268 = G__12269;
continue;
} else {
}
break;
}

var G__12266 = args12264.length;
switch (G__12266) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args12264.length)].join('')));

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
var args__7940__auto__ = [];
var len__7933__auto___12278 = arguments.length;
var i__7934__auto___12279 = (0);
while(true){
if((i__7934__auto___12279 < len__7933__auto___12278)){
args__7940__auto__.push((arguments[i__7934__auto___12279]));

var G__12280 = (i__7934__auto___12279 + (1));
i__7934__auto___12279 = G__12280;
continue;
} else {
}
break;
}

var argseq__7941__auto__ = ((((2) < args__7940__auto__.length))?(new cljs.core.IndexedSeq(args__7940__auto__.slice((2)),(0),null)):null);
return jayq.core.closest.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7941__auto__);
});

jayq.core.closest.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,selector,p__12274){
var vec__12275 = p__12274;
var context = cljs.core.nth.call(null,vec__12275,(0),null);
return $elem.closest(jayq.core.__GT_selector.call(null,selector),context);
});

jayq.core.closest.cljs$lang$maxFixedArity = (2);

jayq.core.closest.cljs$lang$applyTo = (function (seq12271){
var G__12272 = cljs.core.first.call(null,seq12271);
var seq12271__$1 = cljs.core.next.call(null,seq12271);
var G__12273 = cljs.core.first.call(null,seq12271__$1);
var seq12271__$2 = cljs.core.next.call(null,seq12271__$1);
return jayq.core.closest.cljs$core$IFn$_invoke$arity$variadic(G__12272,G__12273,seq12271__$2);
});

jayq.core.clone = (function jayq$core$clone($elem){
return $elem.clone();
});
jayq.core.html = (function jayq$core$html(var_args){
var args12281 = [];
var len__7933__auto___12284 = arguments.length;
var i__7934__auto___12285 = (0);
while(true){
if((i__7934__auto___12285 < len__7933__auto___12284)){
args12281.push((arguments[i__7934__auto___12285]));

var G__12286 = (i__7934__auto___12285 + (1));
i__7934__auto___12285 = G__12286;
continue;
} else {
}
break;
}

var G__12283 = args12281.length;
switch (G__12283) {
case 2:
return jayq.core.html.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.html.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args12281.length)].join('')));

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
var args12288 = [];
var len__7933__auto___12291 = arguments.length;
var i__7934__auto___12292 = (0);
while(true){
if((i__7934__auto___12292 < len__7933__auto___12291)){
args12288.push((arguments[i__7934__auto___12292]));

var G__12293 = (i__7934__auto___12292 + (1));
i__7934__auto___12292 = G__12293;
continue;
} else {
}
break;
}

var G__12290 = args12288.length;
switch (G__12290) {
case 2:
return jayq.core.val.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.val.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args12288.length)].join('')));

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
var args12295 = [];
var len__7933__auto___12298 = arguments.length;
var i__7934__auto___12299 = (0);
while(true){
if((i__7934__auto___12299 < len__7933__auto___12298)){
args12295.push((arguments[i__7934__auto___12299]));

var G__12300 = (i__7934__auto___12299 + (1));
i__7934__auto___12299 = G__12300;
continue;
} else {
}
break;
}

var G__12297 = args12295.length;
switch (G__12297) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args12295.length)].join('')));

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
var args12302 = [];
var len__7933__auto___12305 = arguments.length;
var i__7934__auto___12306 = (0);
while(true){
if((i__7934__auto___12306 < len__7933__auto___12305)){
args12302.push((arguments[i__7934__auto___12306]));

var G__12307 = (i__7934__auto___12306 + (1));
i__7934__auto___12306 = G__12307;
continue;
} else {
}
break;
}

var G__12304 = args12302.length;
switch (G__12304) {
case 2:
return jayq.core.dequeue.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.dequeue.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args12302.length)].join('')));

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
jayq.core.preprocess_request = (function jayq$core$preprocess_request(p__12311){
var map__12314 = p__12311;
var map__12314__$1 = ((((!((map__12314 == null)))?((((map__12314.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12314.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12314):map__12314);
var request = map__12314__$1;
var data = cljs.core.get.call(null,map__12314__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var contentType = cljs.core.get.call(null,map__12314__$1,new cljs.core.Keyword(null,"contentType","contentType",-1462509576));
var ct = jayq.core.__GT_content_type.call(null,contentType);
return ((function (ct,map__12314,map__12314__$1,request,data,contentType){
return (function (p1__12310_SHARP_){
if(cljs.core.truth_((function (){var and__6812__auto__ = ct;
if(cljs.core.truth_(and__6812__auto__)){
return jayq.core.clj_content_type_QMARK_.call(null,ct);
} else {
return and__6812__auto__;
}
})())){
return cljs.core.assoc.call(null,p1__12310_SHARP_,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.pr_str.call(null,data));
} else {
return p1__12310_SHARP_;
}
});})(ct,map__12314,map__12314__$1,request,data,contentType))
.call(null,((function (ct,map__12314,map__12314__$1,request,data,contentType){
return (function (p1__12309_SHARP_){
if(cljs.core.truth_(ct)){
return cljs.core.assoc.call(null,p1__12309_SHARP_,new cljs.core.Keyword(null,"contentType","contentType",-1462509576),ct);
} else {
return p1__12309_SHARP_;
}
});})(ct,map__12314,map__12314__$1,request,data,contentType))
.call(null,request));
});
jayq.core.__GT_ajax_settings = (function jayq$core$__GT_ajax_settings(request){
return cljs.core.clj__GT_js.call(null,jayq.core.preprocess_request.call(null,request));
});
jayq.core.ajax = (function jayq$core$ajax(var_args){
var args12316 = [];
var len__7933__auto___12319 = arguments.length;
var i__7934__auto___12320 = (0);
while(true){
if((i__7934__auto___12320 < len__7933__auto___12319)){
args12316.push((arguments[i__7934__auto___12320]));

var G__12321 = (i__7934__auto___12320 + (1));
i__7934__auto___12320 = G__12321;
continue;
} else {
}
break;
}

var G__12318 = args12316.length;
switch (G__12318) {
case 2:
return jayq.core.ajax.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.ajax.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args12316.length)].join('')));

}
});

jayq.core.ajax.cljs$core$IFn$_invoke$arity$2 = (function (url,settings){
return jQuery.ajax(url,jayq.core.__GT_ajax_settings.call(null,settings));
});

jayq.core.ajax.cljs$core$IFn$_invoke$arity$1 = (function (settings){
return jQuery.ajax(jayq.core.__GT_ajax_settings.call(null,settings));
});

jayq.core.ajax.cljs$lang$maxFixedArity = 2;

jayq.core.xhr = (function jayq$core$xhr(p__12323,content,callback){
var vec__12327 = p__12323;
var method = cljs.core.nth.call(null,vec__12327,(0),null);
var uri = cljs.core.nth.call(null,vec__12327,(1),null);
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
var args__7940__auto__ = [];
var len__7933__auto___12337 = arguments.length;
var i__7934__auto___12338 = (0);
while(true){
if((i__7934__auto___12338 < len__7933__auto___12337)){
args__7940__auto__.push((arguments[i__7934__auto___12338]));

var G__12339 = (i__7934__auto___12338 + (1));
i__7934__auto___12338 = G__12339;
continue;
} else {
}
break;
}

var argseq__7941__auto__ = ((((2) < args__7940__auto__.length))?(new cljs.core.IndexedSeq(args__7940__auto__.slice((2)),(0),null)):null);
return jayq.core.unbind.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7941__auto__);
});

jayq.core.unbind.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,ev,p__12333){
var vec__12334 = p__12333;
var func = cljs.core.nth.call(null,vec__12334,(0),null);
return $elem.unbind(cljs.core.name.call(null,ev),func);
});

jayq.core.unbind.cljs$lang$maxFixedArity = (2);

jayq.core.unbind.cljs$lang$applyTo = (function (seq12330){
var G__12331 = cljs.core.first.call(null,seq12330);
var seq12330__$1 = cljs.core.next.call(null,seq12330);
var G__12332 = cljs.core.first.call(null,seq12330__$1);
var seq12330__$2 = cljs.core.next.call(null,seq12330__$1);
return jayq.core.unbind.cljs$core$IFn$_invoke$arity$variadic(G__12331,G__12332,seq12330__$2);
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
var args__7940__auto__ = [];
var len__7933__auto___12347 = arguments.length;
var i__7934__auto___12348 = (0);
while(true){
if((i__7934__auto___12348 < len__7933__auto___12347)){
args__7940__auto__.push((arguments[i__7934__auto___12348]));

var G__12349 = (i__7934__auto___12348 + (1));
i__7934__auto___12348 = G__12349;
continue;
} else {
}
break;
}

var argseq__7941__auto__ = ((((2) < args__7940__auto__.length))?(new cljs.core.IndexedSeq(args__7940__auto__.slice((2)),(0),null)):null);
return jayq.core.on.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7941__auto__);
});

jayq.core.on.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,events,p__12343){
var vec__12344 = p__12343;
var sel = cljs.core.nth.call(null,vec__12344,(0),null);
var data = cljs.core.nth.call(null,vec__12344,(1),null);
var handler = cljs.core.nth.call(null,vec__12344,(2),null);
return $elem.on(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel),data,handler);
});

jayq.core.on.cljs$lang$maxFixedArity = (2);

jayq.core.on.cljs$lang$applyTo = (function (seq12340){
var G__12341 = cljs.core.first.call(null,seq12340);
var seq12340__$1 = cljs.core.next.call(null,seq12340);
var G__12342 = cljs.core.first.call(null,seq12340__$1);
var seq12340__$2 = cljs.core.next.call(null,seq12340__$1);
return jayq.core.on.cljs$core$IFn$_invoke$arity$variadic(G__12341,G__12342,seq12340__$2);
});

jayq.core.one = (function jayq$core$one(var_args){
var args__7940__auto__ = [];
var len__7933__auto___12357 = arguments.length;
var i__7934__auto___12358 = (0);
while(true){
if((i__7934__auto___12358 < len__7933__auto___12357)){
args__7940__auto__.push((arguments[i__7934__auto___12358]));

var G__12359 = (i__7934__auto___12358 + (1));
i__7934__auto___12358 = G__12359;
continue;
} else {
}
break;
}

var argseq__7941__auto__ = ((((2) < args__7940__auto__.length))?(new cljs.core.IndexedSeq(args__7940__auto__.slice((2)),(0),null)):null);
return jayq.core.one.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7941__auto__);
});

jayq.core.one.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,events,p__12353){
var vec__12354 = p__12353;
var sel = cljs.core.nth.call(null,vec__12354,(0),null);
var data = cljs.core.nth.call(null,vec__12354,(1),null);
var handler = cljs.core.nth.call(null,vec__12354,(2),null);
return $elem.one(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel),data,handler);
});

jayq.core.one.cljs$lang$maxFixedArity = (2);

jayq.core.one.cljs$lang$applyTo = (function (seq12350){
var G__12351 = cljs.core.first.call(null,seq12350);
var seq12350__$1 = cljs.core.next.call(null,seq12350);
var G__12352 = cljs.core.first.call(null,seq12350__$1);
var seq12350__$2 = cljs.core.next.call(null,seq12350__$1);
return jayq.core.one.cljs$core$IFn$_invoke$arity$variadic(G__12351,G__12352,seq12350__$2);
});

jayq.core.off = (function jayq$core$off(var_args){
var args__7940__auto__ = [];
var len__7933__auto___12367 = arguments.length;
var i__7934__auto___12368 = (0);
while(true){
if((i__7934__auto___12368 < len__7933__auto___12367)){
args__7940__auto__.push((arguments[i__7934__auto___12368]));

var G__12369 = (i__7934__auto___12368 + (1));
i__7934__auto___12368 = G__12369;
continue;
} else {
}
break;
}

var argseq__7941__auto__ = ((((2) < args__7940__auto__.length))?(new cljs.core.IndexedSeq(args__7940__auto__.slice((2)),(0),null)):null);
return jayq.core.off.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7941__auto__);
});

jayq.core.off.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,events,p__12363){
var vec__12364 = p__12363;
var sel = cljs.core.nth.call(null,vec__12364,(0),null);
var handler = cljs.core.nth.call(null,vec__12364,(1),null);
return $elem.off(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel),handler);
});

jayq.core.off.cljs$lang$maxFixedArity = (2);

jayq.core.off.cljs$lang$applyTo = (function (seq12360){
var G__12361 = cljs.core.first.call(null,seq12360);
var seq12360__$1 = cljs.core.next.call(null,seq12360);
var G__12362 = cljs.core.first.call(null,seq12360__$1);
var seq12360__$2 = cljs.core.next.call(null,seq12360__$1);
return jayq.core.off.cljs$core$IFn$_invoke$arity$variadic(G__12361,G__12362,seq12360__$2);
});

jayq.core.prevent = (function jayq$core$prevent(e){
return e.preventDefault();
});
jayq.core.height = (function jayq$core$height(var_args){
var args12370 = [];
var len__7933__auto___12373 = arguments.length;
var i__7934__auto___12374 = (0);
while(true){
if((i__7934__auto___12374 < len__7933__auto___12373)){
args12370.push((arguments[i__7934__auto___12374]));

var G__12375 = (i__7934__auto___12374 + (1));
i__7934__auto___12374 = G__12375;
continue;
} else {
}
break;
}

var G__12372 = args12370.length;
switch (G__12372) {
case 2:
return jayq.core.height.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.height.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args12370.length)].join('')));

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
var args12377 = [];
var len__7933__auto___12380 = arguments.length;
var i__7934__auto___12381 = (0);
while(true){
if((i__7934__auto___12381 < len__7933__auto___12380)){
args12377.push((arguments[i__7934__auto___12381]));

var G__12382 = (i__7934__auto___12381 + (1));
i__7934__auto___12381 = G__12382;
continue;
} else {
}
break;
}

var G__12379 = args12377.length;
switch (G__12379) {
case 2:
return jayq.core.width.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.width.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args12377.length)].join('')));

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
var args12384 = [];
var len__7933__auto___12387 = arguments.length;
var i__7934__auto___12388 = (0);
while(true){
if((i__7934__auto___12388 < len__7933__auto___12387)){
args12384.push((arguments[i__7934__auto___12388]));

var G__12389 = (i__7934__auto___12388 + (1));
i__7934__auto___12388 = G__12389;
continue;
} else {
}
break;
}

var G__12386 = args12384.length;
switch (G__12386) {
case 2:
return jayq.core.offset.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.offset.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args12384.length)].join('')));

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
var args12391 = [];
var len__7933__auto___12394 = arguments.length;
var i__7934__auto___12395 = (0);
while(true){
if((i__7934__auto___12395 < len__7933__auto___12394)){
args12391.push((arguments[i__7934__auto___12395]));

var G__12396 = (i__7934__auto___12395 + (1));
i__7934__auto___12395 = G__12396;
continue;
} else {
}
break;
}

var G__12393 = args12391.length;
switch (G__12393) {
case 1:
return jayq.core.scroll_left.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.scroll_left.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args12391.length)].join('')));

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
var args12398 = [];
var len__7933__auto___12401 = arguments.length;
var i__7934__auto___12402 = (0);
while(true){
if((i__7934__auto___12402 < len__7933__auto___12401)){
args12398.push((arguments[i__7934__auto___12402]));

var G__12403 = (i__7934__auto___12402 + (1));
i__7934__auto___12402 = G__12403;
continue;
} else {
}
break;
}

var G__12400 = args12398.length;
switch (G__12400) {
case 1:
return jayq.core.scroll_top.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.scroll_top.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args12398.length)].join('')));

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
var args12405 = [];
var len__7933__auto___12408 = arguments.length;
var i__7934__auto___12409 = (0);
while(true){
if((i__7934__auto___12409 < len__7933__auto___12408)){
args12405.push((arguments[i__7934__auto___12409]));

var G__12410 = (i__7934__auto___12409 + (1));
i__7934__auto___12409 = G__12410;
continue;
} else {
}
break;
}

var G__12407 = args12405.length;
switch (G__12407) {
case 3:
return jayq.core.then.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return jayq.core.then.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args12405.length)].join('')));

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
var args__7940__auto__ = [];
var len__7933__auto___12414 = arguments.length;
var i__7934__auto___12415 = (0);
while(true){
if((i__7934__auto___12415 < len__7933__auto___12414)){
args__7940__auto__.push((arguments[i__7934__auto___12415]));

var G__12416 = (i__7934__auto___12415 + (1));
i__7934__auto___12415 = G__12416;
continue;
} else {
}
break;
}

var argseq__7941__auto__ = ((((1) < args__7940__auto__.length))?(new cljs.core.IndexedSeq(args__7940__auto__.slice((1)),(0),null)):null);
return jayq.core.done.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7941__auto__);
});

jayq.core.done.cljs$core$IFn$_invoke$arity$variadic = (function (deferred,fns_args){
return deferred.done.apply(deferred,cljs.core.clj__GT_js.call(null,fns_args));
});

jayq.core.done.cljs$lang$maxFixedArity = (1);

jayq.core.done.cljs$lang$applyTo = (function (seq12412){
var G__12413 = cljs.core.first.call(null,seq12412);
var seq12412__$1 = cljs.core.next.call(null,seq12412);
return jayq.core.done.cljs$core$IFn$_invoke$arity$variadic(G__12413,seq12412__$1);
});

jayq.core.fail = (function jayq$core$fail(var_args){
var args__7940__auto__ = [];
var len__7933__auto___12419 = arguments.length;
var i__7934__auto___12420 = (0);
while(true){
if((i__7934__auto___12420 < len__7933__auto___12419)){
args__7940__auto__.push((arguments[i__7934__auto___12420]));

var G__12421 = (i__7934__auto___12420 + (1));
i__7934__auto___12420 = G__12421;
continue;
} else {
}
break;
}

var argseq__7941__auto__ = ((((1) < args__7940__auto__.length))?(new cljs.core.IndexedSeq(args__7940__auto__.slice((1)),(0),null)):null);
return jayq.core.fail.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7941__auto__);
});

jayq.core.fail.cljs$core$IFn$_invoke$arity$variadic = (function (deferred,fns_args){
return deferred.fail.apply(deferred,cljs.core.clj__GT_js.call(null,fns_args));
});

jayq.core.fail.cljs$lang$maxFixedArity = (1);

jayq.core.fail.cljs$lang$applyTo = (function (seq12417){
var G__12418 = cljs.core.first.call(null,seq12417);
var seq12417__$1 = cljs.core.next.call(null,seq12417);
return jayq.core.fail.cljs$core$IFn$_invoke$arity$variadic(G__12418,seq12417__$1);
});

jayq.core.progress = (function jayq$core$progress(deferred,fns_args){
return deferred.progress(cljs.core.clj__GT_js.call(null,fns_args));
});
jayq.core.promise = (function jayq$core$promise(var_args){
var args12422 = [];
var len__7933__auto___12425 = arguments.length;
var i__7934__auto___12426 = (0);
while(true){
if((i__7934__auto___12426 < len__7933__auto___12425)){
args12422.push((arguments[i__7934__auto___12426]));

var G__12427 = (i__7934__auto___12426 + (1));
i__7934__auto___12426 = G__12427;
continue;
} else {
}
break;
}

var G__12424 = args12422.length;
switch (G__12424) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args12422.length)].join('')));

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
var args__7940__auto__ = [];
var len__7933__auto___12431 = arguments.length;
var i__7934__auto___12432 = (0);
while(true){
if((i__7934__auto___12432 < len__7933__auto___12431)){
args__7940__auto__.push((arguments[i__7934__auto___12432]));

var G__12433 = (i__7934__auto___12432 + (1));
i__7934__auto___12432 = G__12433;
continue;
} else {
}
break;
}

var argseq__7941__auto__ = ((((1) < args__7940__auto__.length))?(new cljs.core.IndexedSeq(args__7940__auto__.slice((1)),(0),null)):null);
return jayq.core.always.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7941__auto__);
});

jayq.core.always.cljs$core$IFn$_invoke$arity$variadic = (function (deferred,fns_args){
return deferred.always.apply(deferred,cljs.core.clj__GT_js.call(null,fns_args));
});

jayq.core.always.cljs$lang$maxFixedArity = (1);

jayq.core.always.cljs$lang$applyTo = (function (seq12429){
var G__12430 = cljs.core.first.call(null,seq12429);
var seq12429__$1 = cljs.core.next.call(null,seq12429);
return jayq.core.always.cljs$core$IFn$_invoke$arity$variadic(G__12430,seq12429__$1);
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
var args12434 = [];
var len__7933__auto___12437 = arguments.length;
var i__7934__auto___12438 = (0);
while(true){
if((i__7934__auto___12438 < len__7933__auto___12437)){
args12434.push((arguments[i__7934__auto___12438]));

var G__12439 = (i__7934__auto___12438 + (1));
i__7934__auto___12438 = G__12439;
continue;
} else {
}
break;
}

var G__12436 = args12434.length;
switch (G__12436) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args12434.length)].join('')));

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
