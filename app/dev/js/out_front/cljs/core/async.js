// Compiled by ClojureScript 1.9.495 {:elide-asserts true}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args10092 = [];
var len__7933__auto___10098 = arguments.length;
var i__7934__auto___10099 = (0);
while(true){
if((i__7934__auto___10099 < len__7933__auto___10098)){
args10092.push((arguments[i__7934__auto___10099]));

var G__10100 = (i__7934__auto___10099 + (1));
i__7934__auto___10099 = G__10100;
continue;
} else {
}
break;
}

var G__10094 = args10092.length;
switch (G__10094) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args10092.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async10095 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10095 = (function (f,blockable,meta10096){
this.f = f;
this.blockable = blockable;
this.meta10096 = meta10096;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async10095.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10097,meta10096__$1){
var self__ = this;
var _10097__$1 = this;
return (new cljs.core.async.t_cljs$core$async10095(self__.f,self__.blockable,meta10096__$1));
});

cljs.core.async.t_cljs$core$async10095.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10097){
var self__ = this;
var _10097__$1 = this;
return self__.meta10096;
});

cljs.core.async.t_cljs$core$async10095.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async10095.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async10095.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async10095.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async10095.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta10096","meta10096",941163775,null)], null);
});

cljs.core.async.t_cljs$core$async10095.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10095.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10095";

cljs.core.async.t_cljs$core$async10095.cljs$lang$ctorPrWriter = (function (this__7435__auto__,writer__7436__auto__,opt__7437__auto__){
return cljs.core._write.call(null,writer__7436__auto__,"cljs.core.async/t_cljs$core$async10095");
});

cljs.core.async.__GT_t_cljs$core$async10095 = (function cljs$core$async$__GT_t_cljs$core$async10095(f__$1,blockable__$1,meta10096){
return (new cljs.core.async.t_cljs$core$async10095(f__$1,blockable__$1,meta10096));
});

}

return (new cljs.core.async.t_cljs$core$async10095(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args10104 = [];
var len__7933__auto___10107 = arguments.length;
var i__7934__auto___10108 = (0);
while(true){
if((i__7934__auto___10108 < len__7933__auto___10107)){
args10104.push((arguments[i__7934__auto___10108]));

var G__10109 = (i__7934__auto___10108 + (1));
i__7934__auto___10108 = G__10109;
continue;
} else {
}
break;
}

var G__10106 = args10104.length;
switch (G__10106) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args10104.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args10111 = [];
var len__7933__auto___10114 = arguments.length;
var i__7934__auto___10115 = (0);
while(true){
if((i__7934__auto___10115 < len__7933__auto___10114)){
args10111.push((arguments[i__7934__auto___10115]));

var G__10116 = (i__7934__auto___10115 + (1));
i__7934__auto___10115 = G__10116;
continue;
} else {
}
break;
}

var G__10113 = args10111.length;
switch (G__10113) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args10111.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args10118 = [];
var len__7933__auto___10121 = arguments.length;
var i__7934__auto___10122 = (0);
while(true){
if((i__7934__auto___10122 < len__7933__auto___10121)){
args10118.push((arguments[i__7934__auto___10122]));

var G__10123 = (i__7934__auto___10122 + (1));
i__7934__auto___10122 = G__10123;
continue;
} else {
}
break;
}

var G__10120 = args10118.length;
switch (G__10120) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args10118.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_10125 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_10125);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_10125,ret){
return (function (){
return fn1.call(null,val_10125);
});})(val_10125,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args10126 = [];
var len__7933__auto___10129 = arguments.length;
var i__7934__auto___10130 = (0);
while(true){
if((i__7934__auto___10130 < len__7933__auto___10129)){
args10126.push((arguments[i__7934__auto___10130]));

var G__10131 = (i__7934__auto___10130 + (1));
i__7934__auto___10130 = G__10131;
continue;
} else {
}
break;
}

var G__10128 = args10126.length;
switch (G__10128) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args10126.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__7747__auto___10133 = n;
var x_10134 = (0);
while(true){
if((x_10134 < n__7747__auto___10133)){
(a[x_10134] = (0));

var G__10135 = (x_10134 + (1));
x_10134 = G__10135;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__10136 = (i + (1));
i = G__10136;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async10140 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10140 = (function (flag,meta10141){
this.flag = flag;
this.meta10141 = meta10141;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async10140.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_10142,meta10141__$1){
var self__ = this;
var _10142__$1 = this;
return (new cljs.core.async.t_cljs$core$async10140(self__.flag,meta10141__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async10140.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_10142){
var self__ = this;
var _10142__$1 = this;
return self__.meta10141;
});})(flag))
;

cljs.core.async.t_cljs$core$async10140.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async10140.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async10140.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async10140.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async10140.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta10141","meta10141",-815532974,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async10140.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10140.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10140";

cljs.core.async.t_cljs$core$async10140.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__7435__auto__,writer__7436__auto__,opt__7437__auto__){
return cljs.core._write.call(null,writer__7436__auto__,"cljs.core.async/t_cljs$core$async10140");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async10140 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async10140(flag__$1,meta10141){
return (new cljs.core.async.t_cljs$core$async10140(flag__$1,meta10141));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async10140(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async10146 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10146 = (function (flag,cb,meta10147){
this.flag = flag;
this.cb = cb;
this.meta10147 = meta10147;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async10146.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10148,meta10147__$1){
var self__ = this;
var _10148__$1 = this;
return (new cljs.core.async.t_cljs$core$async10146(self__.flag,self__.cb,meta10147__$1));
});

cljs.core.async.t_cljs$core$async10146.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10148){
var self__ = this;
var _10148__$1 = this;
return self__.meta10147;
});

cljs.core.async.t_cljs$core$async10146.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async10146.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async10146.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async10146.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async10146.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta10147","meta10147",-193248713,null)], null);
});

cljs.core.async.t_cljs$core$async10146.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10146.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10146";

cljs.core.async.t_cljs$core$async10146.cljs$lang$ctorPrWriter = (function (this__7435__auto__,writer__7436__auto__,opt__7437__auto__){
return cljs.core._write.call(null,writer__7436__auto__,"cljs.core.async/t_cljs$core$async10146");
});

cljs.core.async.__GT_t_cljs$core$async10146 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async10146(flag__$1,cb__$1,meta10147){
return (new cljs.core.async.t_cljs$core$async10146(flag__$1,cb__$1,meta10147));
});

}

return (new cljs.core.async.t_cljs$core$async10146(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__10149_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10149_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__10150_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10150_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__6824__auto__ = wport;
if(cljs.core.truth_(or__6824__auto__)){
return or__6824__auto__;
} else {
return port;
}
})()], null));
} else {
var G__10151 = (i + (1));
i = G__10151;
continue;
}
} else {
return null;
}
break;
}
})();
var or__6824__auto__ = ret;
if(cljs.core.truth_(or__6824__auto__)){
return or__6824__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__6812__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__6812__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__6812__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__7940__auto__ = [];
var len__7933__auto___10157 = arguments.length;
var i__7934__auto___10158 = (0);
while(true){
if((i__7934__auto___10158 < len__7933__auto___10157)){
args__7940__auto__.push((arguments[i__7934__auto___10158]));

var G__10159 = (i__7934__auto___10158 + (1));
i__7934__auto___10158 = G__10159;
continue;
} else {
}
break;
}

var argseq__7941__auto__ = ((((1) < args__7940__auto__.length))?(new cljs.core.IndexedSeq(args__7940__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7941__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__10154){
var map__10155 = p__10154;
var map__10155__$1 = ((((!((map__10155 == null)))?((((map__10155.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10155.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10155):map__10155);
var opts = map__10155__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq10152){
var G__10153 = cljs.core.first.call(null,seq10152);
var seq10152__$1 = cljs.core.next.call(null,seq10152);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__10153,seq10152__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args10160 = [];
var len__7933__auto___10210 = arguments.length;
var i__7934__auto___10211 = (0);
while(true){
if((i__7934__auto___10211 < len__7933__auto___10210)){
args10160.push((arguments[i__7934__auto___10211]));

var G__10212 = (i__7934__auto___10211 + (1));
i__7934__auto___10211 = G__10212;
continue;
} else {
}
break;
}

var G__10162 = args10160.length;
switch (G__10162) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args10160.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__10047__auto___10214 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10047__auto___10214){
return (function (){
var f__10048__auto__ = (function (){var switch__9982__auto__ = ((function (c__10047__auto___10214){
return (function (state_10186){
var state_val_10187 = (state_10186[(1)]);
if((state_val_10187 === (7))){
var inst_10182 = (state_10186[(2)]);
var state_10186__$1 = state_10186;
var statearr_10188_10215 = state_10186__$1;
(statearr_10188_10215[(2)] = inst_10182);

(statearr_10188_10215[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10187 === (1))){
var state_10186__$1 = state_10186;
var statearr_10189_10216 = state_10186__$1;
(statearr_10189_10216[(2)] = null);

(statearr_10189_10216[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10187 === (4))){
var inst_10165 = (state_10186[(7)]);
var inst_10165__$1 = (state_10186[(2)]);
var inst_10166 = (inst_10165__$1 == null);
var state_10186__$1 = (function (){var statearr_10190 = state_10186;
(statearr_10190[(7)] = inst_10165__$1);

return statearr_10190;
})();
if(cljs.core.truth_(inst_10166)){
var statearr_10191_10217 = state_10186__$1;
(statearr_10191_10217[(1)] = (5));

} else {
var statearr_10192_10218 = state_10186__$1;
(statearr_10192_10218[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10187 === (13))){
var state_10186__$1 = state_10186;
var statearr_10193_10219 = state_10186__$1;
(statearr_10193_10219[(2)] = null);

(statearr_10193_10219[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10187 === (6))){
var inst_10165 = (state_10186[(7)]);
var state_10186__$1 = state_10186;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10186__$1,(11),to,inst_10165);
} else {
if((state_val_10187 === (3))){
var inst_10184 = (state_10186[(2)]);
var state_10186__$1 = state_10186;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10186__$1,inst_10184);
} else {
if((state_val_10187 === (12))){
var state_10186__$1 = state_10186;
var statearr_10194_10220 = state_10186__$1;
(statearr_10194_10220[(2)] = null);

(statearr_10194_10220[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10187 === (2))){
var state_10186__$1 = state_10186;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10186__$1,(4),from);
} else {
if((state_val_10187 === (11))){
var inst_10175 = (state_10186[(2)]);
var state_10186__$1 = state_10186;
if(cljs.core.truth_(inst_10175)){
var statearr_10195_10221 = state_10186__$1;
(statearr_10195_10221[(1)] = (12));

} else {
var statearr_10196_10222 = state_10186__$1;
(statearr_10196_10222[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10187 === (9))){
var state_10186__$1 = state_10186;
var statearr_10197_10223 = state_10186__$1;
(statearr_10197_10223[(2)] = null);

(statearr_10197_10223[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10187 === (5))){
var state_10186__$1 = state_10186;
if(cljs.core.truth_(close_QMARK_)){
var statearr_10198_10224 = state_10186__$1;
(statearr_10198_10224[(1)] = (8));

} else {
var statearr_10199_10225 = state_10186__$1;
(statearr_10199_10225[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10187 === (14))){
var inst_10180 = (state_10186[(2)]);
var state_10186__$1 = state_10186;
var statearr_10200_10226 = state_10186__$1;
(statearr_10200_10226[(2)] = inst_10180);

(statearr_10200_10226[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10187 === (10))){
var inst_10172 = (state_10186[(2)]);
var state_10186__$1 = state_10186;
var statearr_10201_10227 = state_10186__$1;
(statearr_10201_10227[(2)] = inst_10172);

(statearr_10201_10227[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10187 === (8))){
var inst_10169 = cljs.core.async.close_BANG_.call(null,to);
var state_10186__$1 = state_10186;
var statearr_10202_10228 = state_10186__$1;
(statearr_10202_10228[(2)] = inst_10169);

(statearr_10202_10228[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10047__auto___10214))
;
return ((function (switch__9982__auto__,c__10047__auto___10214){
return (function() {
var cljs$core$async$state_machine__9983__auto__ = null;
var cljs$core$async$state_machine__9983__auto____0 = (function (){
var statearr_10206 = [null,null,null,null,null,null,null,null];
(statearr_10206[(0)] = cljs$core$async$state_machine__9983__auto__);

(statearr_10206[(1)] = (1));

return statearr_10206;
});
var cljs$core$async$state_machine__9983__auto____1 = (function (state_10186){
while(true){
var ret_value__9984__auto__ = (function (){try{while(true){
var result__9985__auto__ = switch__9982__auto__.call(null,state_10186);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9985__auto__;
}
break;
}
}catch (e10207){if((e10207 instanceof Object)){
var ex__9986__auto__ = e10207;
var statearr_10208_10229 = state_10186;
(statearr_10208_10229[(5)] = ex__9986__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10186);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10207;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10230 = state_10186;
state_10186 = G__10230;
continue;
} else {
return ret_value__9984__auto__;
}
break;
}
});
cljs$core$async$state_machine__9983__auto__ = function(state_10186){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9983__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9983__auto____1.call(this,state_10186);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9983__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9983__auto____0;
cljs$core$async$state_machine__9983__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9983__auto____1;
return cljs$core$async$state_machine__9983__auto__;
})()
;})(switch__9982__auto__,c__10047__auto___10214))
})();
var state__10049__auto__ = (function (){var statearr_10209 = f__10048__auto__.call(null);
(statearr_10209[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10047__auto___10214);

return statearr_10209;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10049__auto__);
});})(c__10047__auto___10214))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__10418){
var vec__10419 = p__10418;
var v = cljs.core.nth.call(null,vec__10419,(0),null);
var p = cljs.core.nth.call(null,vec__10419,(1),null);
var job = vec__10419;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__10047__auto___10605 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10047__auto___10605,res,vec__10419,v,p,job,jobs,results){
return (function (){
var f__10048__auto__ = (function (){var switch__9982__auto__ = ((function (c__10047__auto___10605,res,vec__10419,v,p,job,jobs,results){
return (function (state_10426){
var state_val_10427 = (state_10426[(1)]);
if((state_val_10427 === (1))){
var state_10426__$1 = state_10426;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10426__$1,(2),res,v);
} else {
if((state_val_10427 === (2))){
var inst_10423 = (state_10426[(2)]);
var inst_10424 = cljs.core.async.close_BANG_.call(null,res);
var state_10426__$1 = (function (){var statearr_10428 = state_10426;
(statearr_10428[(7)] = inst_10423);

return statearr_10428;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10426__$1,inst_10424);
} else {
return null;
}
}
});})(c__10047__auto___10605,res,vec__10419,v,p,job,jobs,results))
;
return ((function (switch__9982__auto__,c__10047__auto___10605,res,vec__10419,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9983__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9983__auto____0 = (function (){
var statearr_10432 = [null,null,null,null,null,null,null,null];
(statearr_10432[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9983__auto__);

(statearr_10432[(1)] = (1));

return statearr_10432;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9983__auto____1 = (function (state_10426){
while(true){
var ret_value__9984__auto__ = (function (){try{while(true){
var result__9985__auto__ = switch__9982__auto__.call(null,state_10426);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9985__auto__;
}
break;
}
}catch (e10433){if((e10433 instanceof Object)){
var ex__9986__auto__ = e10433;
var statearr_10434_10606 = state_10426;
(statearr_10434_10606[(5)] = ex__9986__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10426);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10433;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10607 = state_10426;
state_10426 = G__10607;
continue;
} else {
return ret_value__9984__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9983__auto__ = function(state_10426){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9983__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9983__auto____1.call(this,state_10426);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9983__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9983__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9983__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9983__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9983__auto__;
})()
;})(switch__9982__auto__,c__10047__auto___10605,res,vec__10419,v,p,job,jobs,results))
})();
var state__10049__auto__ = (function (){var statearr_10435 = f__10048__auto__.call(null);
(statearr_10435[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10047__auto___10605);

return statearr_10435;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10049__auto__);
});})(c__10047__auto___10605,res,vec__10419,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__10436){
var vec__10437 = p__10436;
var v = cljs.core.nth.call(null,vec__10437,(0),null);
var p = cljs.core.nth.call(null,vec__10437,(1),null);
var job = vec__10437;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__7747__auto___10608 = n;
var __10609 = (0);
while(true){
if((__10609 < n__7747__auto___10608)){
var G__10440_10610 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__10440_10610) {
case "compute":
var c__10047__auto___10612 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__10609,c__10047__auto___10612,G__10440_10610,n__7747__auto___10608,jobs,results,process,async){
return (function (){
var f__10048__auto__ = (function (){var switch__9982__auto__ = ((function (__10609,c__10047__auto___10612,G__10440_10610,n__7747__auto___10608,jobs,results,process,async){
return (function (state_10453){
var state_val_10454 = (state_10453[(1)]);
if((state_val_10454 === (1))){
var state_10453__$1 = state_10453;
var statearr_10455_10613 = state_10453__$1;
(statearr_10455_10613[(2)] = null);

(statearr_10455_10613[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10454 === (2))){
var state_10453__$1 = state_10453;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10453__$1,(4),jobs);
} else {
if((state_val_10454 === (3))){
var inst_10451 = (state_10453[(2)]);
var state_10453__$1 = state_10453;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10453__$1,inst_10451);
} else {
if((state_val_10454 === (4))){
var inst_10443 = (state_10453[(2)]);
var inst_10444 = process.call(null,inst_10443);
var state_10453__$1 = state_10453;
if(cljs.core.truth_(inst_10444)){
var statearr_10456_10614 = state_10453__$1;
(statearr_10456_10614[(1)] = (5));

} else {
var statearr_10457_10615 = state_10453__$1;
(statearr_10457_10615[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10454 === (5))){
var state_10453__$1 = state_10453;
var statearr_10458_10616 = state_10453__$1;
(statearr_10458_10616[(2)] = null);

(statearr_10458_10616[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10454 === (6))){
var state_10453__$1 = state_10453;
var statearr_10459_10617 = state_10453__$1;
(statearr_10459_10617[(2)] = null);

(statearr_10459_10617[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10454 === (7))){
var inst_10449 = (state_10453[(2)]);
var state_10453__$1 = state_10453;
var statearr_10460_10618 = state_10453__$1;
(statearr_10460_10618[(2)] = inst_10449);

(statearr_10460_10618[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__10609,c__10047__auto___10612,G__10440_10610,n__7747__auto___10608,jobs,results,process,async))
;
return ((function (__10609,switch__9982__auto__,c__10047__auto___10612,G__10440_10610,n__7747__auto___10608,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9983__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9983__auto____0 = (function (){
var statearr_10464 = [null,null,null,null,null,null,null];
(statearr_10464[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9983__auto__);

(statearr_10464[(1)] = (1));

return statearr_10464;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9983__auto____1 = (function (state_10453){
while(true){
var ret_value__9984__auto__ = (function (){try{while(true){
var result__9985__auto__ = switch__9982__auto__.call(null,state_10453);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9985__auto__;
}
break;
}
}catch (e10465){if((e10465 instanceof Object)){
var ex__9986__auto__ = e10465;
var statearr_10466_10619 = state_10453;
(statearr_10466_10619[(5)] = ex__9986__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10453);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10465;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10620 = state_10453;
state_10453 = G__10620;
continue;
} else {
return ret_value__9984__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9983__auto__ = function(state_10453){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9983__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9983__auto____1.call(this,state_10453);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9983__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9983__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9983__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9983__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9983__auto__;
})()
;})(__10609,switch__9982__auto__,c__10047__auto___10612,G__10440_10610,n__7747__auto___10608,jobs,results,process,async))
})();
var state__10049__auto__ = (function (){var statearr_10467 = f__10048__auto__.call(null);
(statearr_10467[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10047__auto___10612);

return statearr_10467;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10049__auto__);
});})(__10609,c__10047__auto___10612,G__10440_10610,n__7747__auto___10608,jobs,results,process,async))
);


break;
case "async":
var c__10047__auto___10621 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__10609,c__10047__auto___10621,G__10440_10610,n__7747__auto___10608,jobs,results,process,async){
return (function (){
var f__10048__auto__ = (function (){var switch__9982__auto__ = ((function (__10609,c__10047__auto___10621,G__10440_10610,n__7747__auto___10608,jobs,results,process,async){
return (function (state_10480){
var state_val_10481 = (state_10480[(1)]);
if((state_val_10481 === (1))){
var state_10480__$1 = state_10480;
var statearr_10482_10622 = state_10480__$1;
(statearr_10482_10622[(2)] = null);

(statearr_10482_10622[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10481 === (2))){
var state_10480__$1 = state_10480;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10480__$1,(4),jobs);
} else {
if((state_val_10481 === (3))){
var inst_10478 = (state_10480[(2)]);
var state_10480__$1 = state_10480;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10480__$1,inst_10478);
} else {
if((state_val_10481 === (4))){
var inst_10470 = (state_10480[(2)]);
var inst_10471 = async.call(null,inst_10470);
var state_10480__$1 = state_10480;
if(cljs.core.truth_(inst_10471)){
var statearr_10483_10623 = state_10480__$1;
(statearr_10483_10623[(1)] = (5));

} else {
var statearr_10484_10624 = state_10480__$1;
(statearr_10484_10624[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10481 === (5))){
var state_10480__$1 = state_10480;
var statearr_10485_10625 = state_10480__$1;
(statearr_10485_10625[(2)] = null);

(statearr_10485_10625[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10481 === (6))){
var state_10480__$1 = state_10480;
var statearr_10486_10626 = state_10480__$1;
(statearr_10486_10626[(2)] = null);

(statearr_10486_10626[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10481 === (7))){
var inst_10476 = (state_10480[(2)]);
var state_10480__$1 = state_10480;
var statearr_10487_10627 = state_10480__$1;
(statearr_10487_10627[(2)] = inst_10476);

(statearr_10487_10627[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__10609,c__10047__auto___10621,G__10440_10610,n__7747__auto___10608,jobs,results,process,async))
;
return ((function (__10609,switch__9982__auto__,c__10047__auto___10621,G__10440_10610,n__7747__auto___10608,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9983__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9983__auto____0 = (function (){
var statearr_10491 = [null,null,null,null,null,null,null];
(statearr_10491[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9983__auto__);

(statearr_10491[(1)] = (1));

return statearr_10491;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9983__auto____1 = (function (state_10480){
while(true){
var ret_value__9984__auto__ = (function (){try{while(true){
var result__9985__auto__ = switch__9982__auto__.call(null,state_10480);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9985__auto__;
}
break;
}
}catch (e10492){if((e10492 instanceof Object)){
var ex__9986__auto__ = e10492;
var statearr_10493_10628 = state_10480;
(statearr_10493_10628[(5)] = ex__9986__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10480);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10492;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10629 = state_10480;
state_10480 = G__10629;
continue;
} else {
return ret_value__9984__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9983__auto__ = function(state_10480){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9983__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9983__auto____1.call(this,state_10480);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9983__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9983__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9983__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9983__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9983__auto__;
})()
;})(__10609,switch__9982__auto__,c__10047__auto___10621,G__10440_10610,n__7747__auto___10608,jobs,results,process,async))
})();
var state__10049__auto__ = (function (){var statearr_10494 = f__10048__auto__.call(null);
(statearr_10494[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10047__auto___10621);

return statearr_10494;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10049__auto__);
});})(__10609,c__10047__auto___10621,G__10440_10610,n__7747__auto___10608,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join('')));

}

var G__10630 = (__10609 + (1));
__10609 = G__10630;
continue;
} else {
}
break;
}

var c__10047__auto___10631 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10047__auto___10631,jobs,results,process,async){
return (function (){
var f__10048__auto__ = (function (){var switch__9982__auto__ = ((function (c__10047__auto___10631,jobs,results,process,async){
return (function (state_10516){
var state_val_10517 = (state_10516[(1)]);
if((state_val_10517 === (1))){
var state_10516__$1 = state_10516;
var statearr_10518_10632 = state_10516__$1;
(statearr_10518_10632[(2)] = null);

(statearr_10518_10632[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10517 === (2))){
var state_10516__$1 = state_10516;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10516__$1,(4),from);
} else {
if((state_val_10517 === (3))){
var inst_10514 = (state_10516[(2)]);
var state_10516__$1 = state_10516;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10516__$1,inst_10514);
} else {
if((state_val_10517 === (4))){
var inst_10497 = (state_10516[(7)]);
var inst_10497__$1 = (state_10516[(2)]);
var inst_10498 = (inst_10497__$1 == null);
var state_10516__$1 = (function (){var statearr_10519 = state_10516;
(statearr_10519[(7)] = inst_10497__$1);

return statearr_10519;
})();
if(cljs.core.truth_(inst_10498)){
var statearr_10520_10633 = state_10516__$1;
(statearr_10520_10633[(1)] = (5));

} else {
var statearr_10521_10634 = state_10516__$1;
(statearr_10521_10634[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10517 === (5))){
var inst_10500 = cljs.core.async.close_BANG_.call(null,jobs);
var state_10516__$1 = state_10516;
var statearr_10522_10635 = state_10516__$1;
(statearr_10522_10635[(2)] = inst_10500);

(statearr_10522_10635[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10517 === (6))){
var inst_10497 = (state_10516[(7)]);
var inst_10502 = (state_10516[(8)]);
var inst_10502__$1 = cljs.core.async.chan.call(null,(1));
var inst_10503 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10504 = [inst_10497,inst_10502__$1];
var inst_10505 = (new cljs.core.PersistentVector(null,2,(5),inst_10503,inst_10504,null));
var state_10516__$1 = (function (){var statearr_10523 = state_10516;
(statearr_10523[(8)] = inst_10502__$1);

return statearr_10523;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10516__$1,(8),jobs,inst_10505);
} else {
if((state_val_10517 === (7))){
var inst_10512 = (state_10516[(2)]);
var state_10516__$1 = state_10516;
var statearr_10524_10636 = state_10516__$1;
(statearr_10524_10636[(2)] = inst_10512);

(statearr_10524_10636[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10517 === (8))){
var inst_10502 = (state_10516[(8)]);
var inst_10507 = (state_10516[(2)]);
var state_10516__$1 = (function (){var statearr_10525 = state_10516;
(statearr_10525[(9)] = inst_10507);

return statearr_10525;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10516__$1,(9),results,inst_10502);
} else {
if((state_val_10517 === (9))){
var inst_10509 = (state_10516[(2)]);
var state_10516__$1 = (function (){var statearr_10526 = state_10516;
(statearr_10526[(10)] = inst_10509);

return statearr_10526;
})();
var statearr_10527_10637 = state_10516__$1;
(statearr_10527_10637[(2)] = null);

(statearr_10527_10637[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__10047__auto___10631,jobs,results,process,async))
;
return ((function (switch__9982__auto__,c__10047__auto___10631,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9983__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9983__auto____0 = (function (){
var statearr_10531 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_10531[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9983__auto__);

(statearr_10531[(1)] = (1));

return statearr_10531;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9983__auto____1 = (function (state_10516){
while(true){
var ret_value__9984__auto__ = (function (){try{while(true){
var result__9985__auto__ = switch__9982__auto__.call(null,state_10516);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9985__auto__;
}
break;
}
}catch (e10532){if((e10532 instanceof Object)){
var ex__9986__auto__ = e10532;
var statearr_10533_10638 = state_10516;
(statearr_10533_10638[(5)] = ex__9986__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10516);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10532;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10639 = state_10516;
state_10516 = G__10639;
continue;
} else {
return ret_value__9984__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9983__auto__ = function(state_10516){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9983__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9983__auto____1.call(this,state_10516);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9983__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9983__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9983__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9983__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9983__auto__;
})()
;})(switch__9982__auto__,c__10047__auto___10631,jobs,results,process,async))
})();
var state__10049__auto__ = (function (){var statearr_10534 = f__10048__auto__.call(null);
(statearr_10534[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10047__auto___10631);

return statearr_10534;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10049__auto__);
});})(c__10047__auto___10631,jobs,results,process,async))
);


var c__10047__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10047__auto__,jobs,results,process,async){
return (function (){
var f__10048__auto__ = (function (){var switch__9982__auto__ = ((function (c__10047__auto__,jobs,results,process,async){
return (function (state_10572){
var state_val_10573 = (state_10572[(1)]);
if((state_val_10573 === (7))){
var inst_10568 = (state_10572[(2)]);
var state_10572__$1 = state_10572;
var statearr_10574_10640 = state_10572__$1;
(statearr_10574_10640[(2)] = inst_10568);

(statearr_10574_10640[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10573 === (20))){
var state_10572__$1 = state_10572;
var statearr_10575_10641 = state_10572__$1;
(statearr_10575_10641[(2)] = null);

(statearr_10575_10641[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10573 === (1))){
var state_10572__$1 = state_10572;
var statearr_10576_10642 = state_10572__$1;
(statearr_10576_10642[(2)] = null);

(statearr_10576_10642[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10573 === (4))){
var inst_10537 = (state_10572[(7)]);
var inst_10537__$1 = (state_10572[(2)]);
var inst_10538 = (inst_10537__$1 == null);
var state_10572__$1 = (function (){var statearr_10577 = state_10572;
(statearr_10577[(7)] = inst_10537__$1);

return statearr_10577;
})();
if(cljs.core.truth_(inst_10538)){
var statearr_10578_10643 = state_10572__$1;
(statearr_10578_10643[(1)] = (5));

} else {
var statearr_10579_10644 = state_10572__$1;
(statearr_10579_10644[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10573 === (15))){
var inst_10550 = (state_10572[(8)]);
var state_10572__$1 = state_10572;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10572__$1,(18),to,inst_10550);
} else {
if((state_val_10573 === (21))){
var inst_10563 = (state_10572[(2)]);
var state_10572__$1 = state_10572;
var statearr_10580_10645 = state_10572__$1;
(statearr_10580_10645[(2)] = inst_10563);

(statearr_10580_10645[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10573 === (13))){
var inst_10565 = (state_10572[(2)]);
var state_10572__$1 = (function (){var statearr_10581 = state_10572;
(statearr_10581[(9)] = inst_10565);

return statearr_10581;
})();
var statearr_10582_10646 = state_10572__$1;
(statearr_10582_10646[(2)] = null);

(statearr_10582_10646[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10573 === (6))){
var inst_10537 = (state_10572[(7)]);
var state_10572__$1 = state_10572;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10572__$1,(11),inst_10537);
} else {
if((state_val_10573 === (17))){
var inst_10558 = (state_10572[(2)]);
var state_10572__$1 = state_10572;
if(cljs.core.truth_(inst_10558)){
var statearr_10583_10647 = state_10572__$1;
(statearr_10583_10647[(1)] = (19));

} else {
var statearr_10584_10648 = state_10572__$1;
(statearr_10584_10648[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10573 === (3))){
var inst_10570 = (state_10572[(2)]);
var state_10572__$1 = state_10572;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10572__$1,inst_10570);
} else {
if((state_val_10573 === (12))){
var inst_10547 = (state_10572[(10)]);
var state_10572__$1 = state_10572;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10572__$1,(14),inst_10547);
} else {
if((state_val_10573 === (2))){
var state_10572__$1 = state_10572;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10572__$1,(4),results);
} else {
if((state_val_10573 === (19))){
var state_10572__$1 = state_10572;
var statearr_10585_10649 = state_10572__$1;
(statearr_10585_10649[(2)] = null);

(statearr_10585_10649[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10573 === (11))){
var inst_10547 = (state_10572[(2)]);
var state_10572__$1 = (function (){var statearr_10586 = state_10572;
(statearr_10586[(10)] = inst_10547);

return statearr_10586;
})();
var statearr_10587_10650 = state_10572__$1;
(statearr_10587_10650[(2)] = null);

(statearr_10587_10650[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10573 === (9))){
var state_10572__$1 = state_10572;
var statearr_10588_10651 = state_10572__$1;
(statearr_10588_10651[(2)] = null);

(statearr_10588_10651[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10573 === (5))){
var state_10572__$1 = state_10572;
if(cljs.core.truth_(close_QMARK_)){
var statearr_10589_10652 = state_10572__$1;
(statearr_10589_10652[(1)] = (8));

} else {
var statearr_10590_10653 = state_10572__$1;
(statearr_10590_10653[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10573 === (14))){
var inst_10552 = (state_10572[(11)]);
var inst_10550 = (state_10572[(8)]);
var inst_10550__$1 = (state_10572[(2)]);
var inst_10551 = (inst_10550__$1 == null);
var inst_10552__$1 = cljs.core.not.call(null,inst_10551);
var state_10572__$1 = (function (){var statearr_10591 = state_10572;
(statearr_10591[(11)] = inst_10552__$1);

(statearr_10591[(8)] = inst_10550__$1);

return statearr_10591;
})();
if(inst_10552__$1){
var statearr_10592_10654 = state_10572__$1;
(statearr_10592_10654[(1)] = (15));

} else {
var statearr_10593_10655 = state_10572__$1;
(statearr_10593_10655[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10573 === (16))){
var inst_10552 = (state_10572[(11)]);
var state_10572__$1 = state_10572;
var statearr_10594_10656 = state_10572__$1;
(statearr_10594_10656[(2)] = inst_10552);

(statearr_10594_10656[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10573 === (10))){
var inst_10544 = (state_10572[(2)]);
var state_10572__$1 = state_10572;
var statearr_10595_10657 = state_10572__$1;
(statearr_10595_10657[(2)] = inst_10544);

(statearr_10595_10657[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10573 === (18))){
var inst_10555 = (state_10572[(2)]);
var state_10572__$1 = state_10572;
var statearr_10596_10658 = state_10572__$1;
(statearr_10596_10658[(2)] = inst_10555);

(statearr_10596_10658[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10573 === (8))){
var inst_10541 = cljs.core.async.close_BANG_.call(null,to);
var state_10572__$1 = state_10572;
var statearr_10597_10659 = state_10572__$1;
(statearr_10597_10659[(2)] = inst_10541);

(statearr_10597_10659[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10047__auto__,jobs,results,process,async))
;
return ((function (switch__9982__auto__,c__10047__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9983__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9983__auto____0 = (function (){
var statearr_10601 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10601[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9983__auto__);

(statearr_10601[(1)] = (1));

return statearr_10601;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9983__auto____1 = (function (state_10572){
while(true){
var ret_value__9984__auto__ = (function (){try{while(true){
var result__9985__auto__ = switch__9982__auto__.call(null,state_10572);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9985__auto__;
}
break;
}
}catch (e10602){if((e10602 instanceof Object)){
var ex__9986__auto__ = e10602;
var statearr_10603_10660 = state_10572;
(statearr_10603_10660[(5)] = ex__9986__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10572);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10602;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10661 = state_10572;
state_10572 = G__10661;
continue;
} else {
return ret_value__9984__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9983__auto__ = function(state_10572){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9983__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9983__auto____1.call(this,state_10572);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9983__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9983__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9983__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9983__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9983__auto__;
})()
;})(switch__9982__auto__,c__10047__auto__,jobs,results,process,async))
})();
var state__10049__auto__ = (function (){var statearr_10604 = f__10048__auto__.call(null);
(statearr_10604[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10047__auto__);

return statearr_10604;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10049__auto__);
});})(c__10047__auto__,jobs,results,process,async))
);

return c__10047__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args10662 = [];
var len__7933__auto___10665 = arguments.length;
var i__7934__auto___10666 = (0);
while(true){
if((i__7934__auto___10666 < len__7933__auto___10665)){
args10662.push((arguments[i__7934__auto___10666]));

var G__10667 = (i__7934__auto___10666 + (1));
i__7934__auto___10666 = G__10667;
continue;
} else {
}
break;
}

var G__10664 = args10662.length;
switch (G__10664) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args10662.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args10669 = [];
var len__7933__auto___10672 = arguments.length;
var i__7934__auto___10673 = (0);
while(true){
if((i__7934__auto___10673 < len__7933__auto___10672)){
args10669.push((arguments[i__7934__auto___10673]));

var G__10674 = (i__7934__auto___10673 + (1));
i__7934__auto___10673 = G__10674;
continue;
} else {
}
break;
}

var G__10671 = args10669.length;
switch (G__10671) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args10669.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args10676 = [];
var len__7933__auto___10729 = arguments.length;
var i__7934__auto___10730 = (0);
while(true){
if((i__7934__auto___10730 < len__7933__auto___10729)){
args10676.push((arguments[i__7934__auto___10730]));

var G__10731 = (i__7934__auto___10730 + (1));
i__7934__auto___10730 = G__10731;
continue;
} else {
}
break;
}

var G__10678 = args10676.length;
switch (G__10678) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args10676.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__10047__auto___10733 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10047__auto___10733,tc,fc){
return (function (){
var f__10048__auto__ = (function (){var switch__9982__auto__ = ((function (c__10047__auto___10733,tc,fc){
return (function (state_10704){
var state_val_10705 = (state_10704[(1)]);
if((state_val_10705 === (7))){
var inst_10700 = (state_10704[(2)]);
var state_10704__$1 = state_10704;
var statearr_10706_10734 = state_10704__$1;
(statearr_10706_10734[(2)] = inst_10700);

(statearr_10706_10734[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10705 === (1))){
var state_10704__$1 = state_10704;
var statearr_10707_10735 = state_10704__$1;
(statearr_10707_10735[(2)] = null);

(statearr_10707_10735[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10705 === (4))){
var inst_10681 = (state_10704[(7)]);
var inst_10681__$1 = (state_10704[(2)]);
var inst_10682 = (inst_10681__$1 == null);
var state_10704__$1 = (function (){var statearr_10708 = state_10704;
(statearr_10708[(7)] = inst_10681__$1);

return statearr_10708;
})();
if(cljs.core.truth_(inst_10682)){
var statearr_10709_10736 = state_10704__$1;
(statearr_10709_10736[(1)] = (5));

} else {
var statearr_10710_10737 = state_10704__$1;
(statearr_10710_10737[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10705 === (13))){
var state_10704__$1 = state_10704;
var statearr_10711_10738 = state_10704__$1;
(statearr_10711_10738[(2)] = null);

(statearr_10711_10738[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10705 === (6))){
var inst_10681 = (state_10704[(7)]);
var inst_10687 = p.call(null,inst_10681);
var state_10704__$1 = state_10704;
if(cljs.core.truth_(inst_10687)){
var statearr_10712_10739 = state_10704__$1;
(statearr_10712_10739[(1)] = (9));

} else {
var statearr_10713_10740 = state_10704__$1;
(statearr_10713_10740[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10705 === (3))){
var inst_10702 = (state_10704[(2)]);
var state_10704__$1 = state_10704;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10704__$1,inst_10702);
} else {
if((state_val_10705 === (12))){
var state_10704__$1 = state_10704;
var statearr_10714_10741 = state_10704__$1;
(statearr_10714_10741[(2)] = null);

(statearr_10714_10741[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10705 === (2))){
var state_10704__$1 = state_10704;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10704__$1,(4),ch);
} else {
if((state_val_10705 === (11))){
var inst_10681 = (state_10704[(7)]);
var inst_10691 = (state_10704[(2)]);
var state_10704__$1 = state_10704;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10704__$1,(8),inst_10691,inst_10681);
} else {
if((state_val_10705 === (9))){
var state_10704__$1 = state_10704;
var statearr_10715_10742 = state_10704__$1;
(statearr_10715_10742[(2)] = tc);

(statearr_10715_10742[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10705 === (5))){
var inst_10684 = cljs.core.async.close_BANG_.call(null,tc);
var inst_10685 = cljs.core.async.close_BANG_.call(null,fc);
var state_10704__$1 = (function (){var statearr_10716 = state_10704;
(statearr_10716[(8)] = inst_10684);

return statearr_10716;
})();
var statearr_10717_10743 = state_10704__$1;
(statearr_10717_10743[(2)] = inst_10685);

(statearr_10717_10743[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10705 === (14))){
var inst_10698 = (state_10704[(2)]);
var state_10704__$1 = state_10704;
var statearr_10718_10744 = state_10704__$1;
(statearr_10718_10744[(2)] = inst_10698);

(statearr_10718_10744[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10705 === (10))){
var state_10704__$1 = state_10704;
var statearr_10719_10745 = state_10704__$1;
(statearr_10719_10745[(2)] = fc);

(statearr_10719_10745[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10705 === (8))){
var inst_10693 = (state_10704[(2)]);
var state_10704__$1 = state_10704;
if(cljs.core.truth_(inst_10693)){
var statearr_10720_10746 = state_10704__$1;
(statearr_10720_10746[(1)] = (12));

} else {
var statearr_10721_10747 = state_10704__$1;
(statearr_10721_10747[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10047__auto___10733,tc,fc))
;
return ((function (switch__9982__auto__,c__10047__auto___10733,tc,fc){
return (function() {
var cljs$core$async$state_machine__9983__auto__ = null;
var cljs$core$async$state_machine__9983__auto____0 = (function (){
var statearr_10725 = [null,null,null,null,null,null,null,null,null];
(statearr_10725[(0)] = cljs$core$async$state_machine__9983__auto__);

(statearr_10725[(1)] = (1));

return statearr_10725;
});
var cljs$core$async$state_machine__9983__auto____1 = (function (state_10704){
while(true){
var ret_value__9984__auto__ = (function (){try{while(true){
var result__9985__auto__ = switch__9982__auto__.call(null,state_10704);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9985__auto__;
}
break;
}
}catch (e10726){if((e10726 instanceof Object)){
var ex__9986__auto__ = e10726;
var statearr_10727_10748 = state_10704;
(statearr_10727_10748[(5)] = ex__9986__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10704);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10726;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10749 = state_10704;
state_10704 = G__10749;
continue;
} else {
return ret_value__9984__auto__;
}
break;
}
});
cljs$core$async$state_machine__9983__auto__ = function(state_10704){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9983__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9983__auto____1.call(this,state_10704);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9983__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9983__auto____0;
cljs$core$async$state_machine__9983__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9983__auto____1;
return cljs$core$async$state_machine__9983__auto__;
})()
;})(switch__9982__auto__,c__10047__auto___10733,tc,fc))
})();
var state__10049__auto__ = (function (){var statearr_10728 = f__10048__auto__.call(null);
(statearr_10728[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10047__auto___10733);

return statearr_10728;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10049__auto__);
});})(c__10047__auto___10733,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__10047__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10047__auto__){
return (function (){
var f__10048__auto__ = (function (){var switch__9982__auto__ = ((function (c__10047__auto__){
return (function (state_10813){
var state_val_10814 = (state_10813[(1)]);
if((state_val_10814 === (7))){
var inst_10809 = (state_10813[(2)]);
var state_10813__$1 = state_10813;
var statearr_10815_10836 = state_10813__$1;
(statearr_10815_10836[(2)] = inst_10809);

(statearr_10815_10836[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10814 === (1))){
var inst_10793 = init;
var state_10813__$1 = (function (){var statearr_10816 = state_10813;
(statearr_10816[(7)] = inst_10793);

return statearr_10816;
})();
var statearr_10817_10837 = state_10813__$1;
(statearr_10817_10837[(2)] = null);

(statearr_10817_10837[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10814 === (4))){
var inst_10796 = (state_10813[(8)]);
var inst_10796__$1 = (state_10813[(2)]);
var inst_10797 = (inst_10796__$1 == null);
var state_10813__$1 = (function (){var statearr_10818 = state_10813;
(statearr_10818[(8)] = inst_10796__$1);

return statearr_10818;
})();
if(cljs.core.truth_(inst_10797)){
var statearr_10819_10838 = state_10813__$1;
(statearr_10819_10838[(1)] = (5));

} else {
var statearr_10820_10839 = state_10813__$1;
(statearr_10820_10839[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10814 === (6))){
var inst_10793 = (state_10813[(7)]);
var inst_10800 = (state_10813[(9)]);
var inst_10796 = (state_10813[(8)]);
var inst_10800__$1 = f.call(null,inst_10793,inst_10796);
var inst_10801 = cljs.core.reduced_QMARK_.call(null,inst_10800__$1);
var state_10813__$1 = (function (){var statearr_10821 = state_10813;
(statearr_10821[(9)] = inst_10800__$1);

return statearr_10821;
})();
if(inst_10801){
var statearr_10822_10840 = state_10813__$1;
(statearr_10822_10840[(1)] = (8));

} else {
var statearr_10823_10841 = state_10813__$1;
(statearr_10823_10841[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10814 === (3))){
var inst_10811 = (state_10813[(2)]);
var state_10813__$1 = state_10813;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10813__$1,inst_10811);
} else {
if((state_val_10814 === (2))){
var state_10813__$1 = state_10813;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10813__$1,(4),ch);
} else {
if((state_val_10814 === (9))){
var inst_10800 = (state_10813[(9)]);
var inst_10793 = inst_10800;
var state_10813__$1 = (function (){var statearr_10824 = state_10813;
(statearr_10824[(7)] = inst_10793);

return statearr_10824;
})();
var statearr_10825_10842 = state_10813__$1;
(statearr_10825_10842[(2)] = null);

(statearr_10825_10842[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10814 === (5))){
var inst_10793 = (state_10813[(7)]);
var state_10813__$1 = state_10813;
var statearr_10826_10843 = state_10813__$1;
(statearr_10826_10843[(2)] = inst_10793);

(statearr_10826_10843[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10814 === (10))){
var inst_10807 = (state_10813[(2)]);
var state_10813__$1 = state_10813;
var statearr_10827_10844 = state_10813__$1;
(statearr_10827_10844[(2)] = inst_10807);

(statearr_10827_10844[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10814 === (8))){
var inst_10800 = (state_10813[(9)]);
var inst_10803 = cljs.core.deref.call(null,inst_10800);
var state_10813__$1 = state_10813;
var statearr_10828_10845 = state_10813__$1;
(statearr_10828_10845[(2)] = inst_10803);

(statearr_10828_10845[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__10047__auto__))
;
return ((function (switch__9982__auto__,c__10047__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__9983__auto__ = null;
var cljs$core$async$reduce_$_state_machine__9983__auto____0 = (function (){
var statearr_10832 = [null,null,null,null,null,null,null,null,null,null];
(statearr_10832[(0)] = cljs$core$async$reduce_$_state_machine__9983__auto__);

(statearr_10832[(1)] = (1));

return statearr_10832;
});
var cljs$core$async$reduce_$_state_machine__9983__auto____1 = (function (state_10813){
while(true){
var ret_value__9984__auto__ = (function (){try{while(true){
var result__9985__auto__ = switch__9982__auto__.call(null,state_10813);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9985__auto__;
}
break;
}
}catch (e10833){if((e10833 instanceof Object)){
var ex__9986__auto__ = e10833;
var statearr_10834_10846 = state_10813;
(statearr_10834_10846[(5)] = ex__9986__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10813);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10833;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10847 = state_10813;
state_10813 = G__10847;
continue;
} else {
return ret_value__9984__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__9983__auto__ = function(state_10813){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__9983__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__9983__auto____1.call(this,state_10813);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__9983__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__9983__auto____0;
cljs$core$async$reduce_$_state_machine__9983__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__9983__auto____1;
return cljs$core$async$reduce_$_state_machine__9983__auto__;
})()
;})(switch__9982__auto__,c__10047__auto__))
})();
var state__10049__auto__ = (function (){var statearr_10835 = f__10048__auto__.call(null);
(statearr_10835[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10047__auto__);

return statearr_10835;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10049__auto__);
});})(c__10047__auto__))
);

return c__10047__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__10047__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10047__auto__,f__$1){
return (function (){
var f__10048__auto__ = (function (){var switch__9982__auto__ = ((function (c__10047__auto__,f__$1){
return (function (state_10867){
var state_val_10868 = (state_10867[(1)]);
if((state_val_10868 === (1))){
var inst_10862 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_10867__$1 = state_10867;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10867__$1,(2),inst_10862);
} else {
if((state_val_10868 === (2))){
var inst_10864 = (state_10867[(2)]);
var inst_10865 = f__$1.call(null,inst_10864);
var state_10867__$1 = state_10867;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10867__$1,inst_10865);
} else {
return null;
}
}
});})(c__10047__auto__,f__$1))
;
return ((function (switch__9982__auto__,c__10047__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__9983__auto__ = null;
var cljs$core$async$transduce_$_state_machine__9983__auto____0 = (function (){
var statearr_10872 = [null,null,null,null,null,null,null];
(statearr_10872[(0)] = cljs$core$async$transduce_$_state_machine__9983__auto__);

(statearr_10872[(1)] = (1));

return statearr_10872;
});
var cljs$core$async$transduce_$_state_machine__9983__auto____1 = (function (state_10867){
while(true){
var ret_value__9984__auto__ = (function (){try{while(true){
var result__9985__auto__ = switch__9982__auto__.call(null,state_10867);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9985__auto__;
}
break;
}
}catch (e10873){if((e10873 instanceof Object)){
var ex__9986__auto__ = e10873;
var statearr_10874_10876 = state_10867;
(statearr_10874_10876[(5)] = ex__9986__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10867);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10873;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10877 = state_10867;
state_10867 = G__10877;
continue;
} else {
return ret_value__9984__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__9983__auto__ = function(state_10867){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__9983__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__9983__auto____1.call(this,state_10867);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__9983__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__9983__auto____0;
cljs$core$async$transduce_$_state_machine__9983__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__9983__auto____1;
return cljs$core$async$transduce_$_state_machine__9983__auto__;
})()
;})(switch__9982__auto__,c__10047__auto__,f__$1))
})();
var state__10049__auto__ = (function (){var statearr_10875 = f__10048__auto__.call(null);
(statearr_10875[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10047__auto__);

return statearr_10875;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10049__auto__);
});})(c__10047__auto__,f__$1))
);

return c__10047__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args10878 = [];
var len__7933__auto___10930 = arguments.length;
var i__7934__auto___10931 = (0);
while(true){
if((i__7934__auto___10931 < len__7933__auto___10930)){
args10878.push((arguments[i__7934__auto___10931]));

var G__10932 = (i__7934__auto___10931 + (1));
i__7934__auto___10931 = G__10932;
continue;
} else {
}
break;
}

var G__10880 = args10878.length;
switch (G__10880) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args10878.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__10047__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10047__auto__){
return (function (){
var f__10048__auto__ = (function (){var switch__9982__auto__ = ((function (c__10047__auto__){
return (function (state_10905){
var state_val_10906 = (state_10905[(1)]);
if((state_val_10906 === (7))){
var inst_10887 = (state_10905[(2)]);
var state_10905__$1 = state_10905;
var statearr_10907_10934 = state_10905__$1;
(statearr_10907_10934[(2)] = inst_10887);

(statearr_10907_10934[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10906 === (1))){
var inst_10881 = cljs.core.seq.call(null,coll);
var inst_10882 = inst_10881;
var state_10905__$1 = (function (){var statearr_10908 = state_10905;
(statearr_10908[(7)] = inst_10882);

return statearr_10908;
})();
var statearr_10909_10935 = state_10905__$1;
(statearr_10909_10935[(2)] = null);

(statearr_10909_10935[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10906 === (4))){
var inst_10882 = (state_10905[(7)]);
var inst_10885 = cljs.core.first.call(null,inst_10882);
var state_10905__$1 = state_10905;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10905__$1,(7),ch,inst_10885);
} else {
if((state_val_10906 === (13))){
var inst_10899 = (state_10905[(2)]);
var state_10905__$1 = state_10905;
var statearr_10910_10936 = state_10905__$1;
(statearr_10910_10936[(2)] = inst_10899);

(statearr_10910_10936[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10906 === (6))){
var inst_10890 = (state_10905[(2)]);
var state_10905__$1 = state_10905;
if(cljs.core.truth_(inst_10890)){
var statearr_10911_10937 = state_10905__$1;
(statearr_10911_10937[(1)] = (8));

} else {
var statearr_10912_10938 = state_10905__$1;
(statearr_10912_10938[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10906 === (3))){
var inst_10903 = (state_10905[(2)]);
var state_10905__$1 = state_10905;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10905__$1,inst_10903);
} else {
if((state_val_10906 === (12))){
var state_10905__$1 = state_10905;
var statearr_10913_10939 = state_10905__$1;
(statearr_10913_10939[(2)] = null);

(statearr_10913_10939[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10906 === (2))){
var inst_10882 = (state_10905[(7)]);
var state_10905__$1 = state_10905;
if(cljs.core.truth_(inst_10882)){
var statearr_10914_10940 = state_10905__$1;
(statearr_10914_10940[(1)] = (4));

} else {
var statearr_10915_10941 = state_10905__$1;
(statearr_10915_10941[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10906 === (11))){
var inst_10896 = cljs.core.async.close_BANG_.call(null,ch);
var state_10905__$1 = state_10905;
var statearr_10916_10942 = state_10905__$1;
(statearr_10916_10942[(2)] = inst_10896);

(statearr_10916_10942[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10906 === (9))){
var state_10905__$1 = state_10905;
if(cljs.core.truth_(close_QMARK_)){
var statearr_10917_10943 = state_10905__$1;
(statearr_10917_10943[(1)] = (11));

} else {
var statearr_10918_10944 = state_10905__$1;
(statearr_10918_10944[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10906 === (5))){
var inst_10882 = (state_10905[(7)]);
var state_10905__$1 = state_10905;
var statearr_10919_10945 = state_10905__$1;
(statearr_10919_10945[(2)] = inst_10882);

(statearr_10919_10945[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10906 === (10))){
var inst_10901 = (state_10905[(2)]);
var state_10905__$1 = state_10905;
var statearr_10920_10946 = state_10905__$1;
(statearr_10920_10946[(2)] = inst_10901);

(statearr_10920_10946[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10906 === (8))){
var inst_10882 = (state_10905[(7)]);
var inst_10892 = cljs.core.next.call(null,inst_10882);
var inst_10882__$1 = inst_10892;
var state_10905__$1 = (function (){var statearr_10921 = state_10905;
(statearr_10921[(7)] = inst_10882__$1);

return statearr_10921;
})();
var statearr_10922_10947 = state_10905__$1;
(statearr_10922_10947[(2)] = null);

(statearr_10922_10947[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10047__auto__))
;
return ((function (switch__9982__auto__,c__10047__auto__){
return (function() {
var cljs$core$async$state_machine__9983__auto__ = null;
var cljs$core$async$state_machine__9983__auto____0 = (function (){
var statearr_10926 = [null,null,null,null,null,null,null,null];
(statearr_10926[(0)] = cljs$core$async$state_machine__9983__auto__);

(statearr_10926[(1)] = (1));

return statearr_10926;
});
var cljs$core$async$state_machine__9983__auto____1 = (function (state_10905){
while(true){
var ret_value__9984__auto__ = (function (){try{while(true){
var result__9985__auto__ = switch__9982__auto__.call(null,state_10905);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9985__auto__;
}
break;
}
}catch (e10927){if((e10927 instanceof Object)){
var ex__9986__auto__ = e10927;
var statearr_10928_10948 = state_10905;
(statearr_10928_10948[(5)] = ex__9986__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10905);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10927;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10949 = state_10905;
state_10905 = G__10949;
continue;
} else {
return ret_value__9984__auto__;
}
break;
}
});
cljs$core$async$state_machine__9983__auto__ = function(state_10905){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9983__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9983__auto____1.call(this,state_10905);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9983__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9983__auto____0;
cljs$core$async$state_machine__9983__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9983__auto____1;
return cljs$core$async$state_machine__9983__auto__;
})()
;})(switch__9982__auto__,c__10047__auto__))
})();
var state__10049__auto__ = (function (){var statearr_10929 = f__10048__auto__.call(null);
(statearr_10929[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10047__auto__);

return statearr_10929;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10049__auto__);
});})(c__10047__auto__))
);

return c__10047__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__7492__auto__ = (((_ == null))?null:_);
var m__7493__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__7492__auto__)]);
if(!((m__7493__auto__ == null))){
return m__7493__auto__.call(null,_);
} else {
var m__7493__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__7493__auto____$1 == null))){
return m__7493__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__7492__auto__ = (((m == null))?null:m);
var m__7493__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__7492__auto__)]);
if(!((m__7493__auto__ == null))){
return m__7493__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__7493__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__7493__auto____$1 == null))){
return m__7493__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__7492__auto__ = (((m == null))?null:m);
var m__7493__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__7492__auto__)]);
if(!((m__7493__auto__ == null))){
return m__7493__auto__.call(null,m,ch);
} else {
var m__7493__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__7493__auto____$1 == null))){
return m__7493__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__7492__auto__ = (((m == null))?null:m);
var m__7493__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__7492__auto__)]);
if(!((m__7493__auto__ == null))){
return m__7493__auto__.call(null,m);
} else {
var m__7493__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__7493__auto____$1 == null))){
return m__7493__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async11175 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11175 = (function (ch,cs,meta11176){
this.ch = ch;
this.cs = cs;
this.meta11176 = meta11176;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11175.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_11177,meta11176__$1){
var self__ = this;
var _11177__$1 = this;
return (new cljs.core.async.t_cljs$core$async11175(self__.ch,self__.cs,meta11176__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async11175.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_11177){
var self__ = this;
var _11177__$1 = this;
return self__.meta11176;
});})(cs))
;

cljs.core.async.t_cljs$core$async11175.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11175.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async11175.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11175.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async11175.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async11175.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async11175.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta11176","meta11176",337374889,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async11175.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11175.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11175";

cljs.core.async.t_cljs$core$async11175.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__7435__auto__,writer__7436__auto__,opt__7437__auto__){
return cljs.core._write.call(null,writer__7436__auto__,"cljs.core.async/t_cljs$core$async11175");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async11175 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async11175(ch__$1,cs__$1,meta11176){
return (new cljs.core.async.t_cljs$core$async11175(ch__$1,cs__$1,meta11176));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async11175(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__10047__auto___11400 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10047__auto___11400,cs,m,dchan,dctr,done){
return (function (){
var f__10048__auto__ = (function (){var switch__9982__auto__ = ((function (c__10047__auto___11400,cs,m,dchan,dctr,done){
return (function (state_11312){
var state_val_11313 = (state_11312[(1)]);
if((state_val_11313 === (7))){
var inst_11308 = (state_11312[(2)]);
var state_11312__$1 = state_11312;
var statearr_11314_11401 = state_11312__$1;
(statearr_11314_11401[(2)] = inst_11308);

(statearr_11314_11401[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11313 === (20))){
var inst_11211 = (state_11312[(7)]);
var inst_11223 = cljs.core.first.call(null,inst_11211);
var inst_11224 = cljs.core.nth.call(null,inst_11223,(0),null);
var inst_11225 = cljs.core.nth.call(null,inst_11223,(1),null);
var state_11312__$1 = (function (){var statearr_11315 = state_11312;
(statearr_11315[(8)] = inst_11224);

return statearr_11315;
})();
if(cljs.core.truth_(inst_11225)){
var statearr_11316_11402 = state_11312__$1;
(statearr_11316_11402[(1)] = (22));

} else {
var statearr_11317_11403 = state_11312__$1;
(statearr_11317_11403[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11313 === (27))){
var inst_11255 = (state_11312[(9)]);
var inst_11253 = (state_11312[(10)]);
var inst_11180 = (state_11312[(11)]);
var inst_11260 = (state_11312[(12)]);
var inst_11260__$1 = cljs.core._nth.call(null,inst_11253,inst_11255);
var inst_11261 = cljs.core.async.put_BANG_.call(null,inst_11260__$1,inst_11180,done);
var state_11312__$1 = (function (){var statearr_11318 = state_11312;
(statearr_11318[(12)] = inst_11260__$1);

return statearr_11318;
})();
if(cljs.core.truth_(inst_11261)){
var statearr_11319_11404 = state_11312__$1;
(statearr_11319_11404[(1)] = (30));

} else {
var statearr_11320_11405 = state_11312__$1;
(statearr_11320_11405[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11313 === (1))){
var state_11312__$1 = state_11312;
var statearr_11321_11406 = state_11312__$1;
(statearr_11321_11406[(2)] = null);

(statearr_11321_11406[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11313 === (24))){
var inst_11211 = (state_11312[(7)]);
var inst_11230 = (state_11312[(2)]);
var inst_11231 = cljs.core.next.call(null,inst_11211);
var inst_11189 = inst_11231;
var inst_11190 = null;
var inst_11191 = (0);
var inst_11192 = (0);
var state_11312__$1 = (function (){var statearr_11322 = state_11312;
(statearr_11322[(13)] = inst_11190);

(statearr_11322[(14)] = inst_11230);

(statearr_11322[(15)] = inst_11192);

(statearr_11322[(16)] = inst_11189);

(statearr_11322[(17)] = inst_11191);

return statearr_11322;
})();
var statearr_11323_11407 = state_11312__$1;
(statearr_11323_11407[(2)] = null);

(statearr_11323_11407[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11313 === (39))){
var state_11312__$1 = state_11312;
var statearr_11327_11408 = state_11312__$1;
(statearr_11327_11408[(2)] = null);

(statearr_11327_11408[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11313 === (4))){
var inst_11180 = (state_11312[(11)]);
var inst_11180__$1 = (state_11312[(2)]);
var inst_11181 = (inst_11180__$1 == null);
var state_11312__$1 = (function (){var statearr_11328 = state_11312;
(statearr_11328[(11)] = inst_11180__$1);

return statearr_11328;
})();
if(cljs.core.truth_(inst_11181)){
var statearr_11329_11409 = state_11312__$1;
(statearr_11329_11409[(1)] = (5));

} else {
var statearr_11330_11410 = state_11312__$1;
(statearr_11330_11410[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11313 === (15))){
var inst_11190 = (state_11312[(13)]);
var inst_11192 = (state_11312[(15)]);
var inst_11189 = (state_11312[(16)]);
var inst_11191 = (state_11312[(17)]);
var inst_11207 = (state_11312[(2)]);
var inst_11208 = (inst_11192 + (1));
var tmp11324 = inst_11190;
var tmp11325 = inst_11189;
var tmp11326 = inst_11191;
var inst_11189__$1 = tmp11325;
var inst_11190__$1 = tmp11324;
var inst_11191__$1 = tmp11326;
var inst_11192__$1 = inst_11208;
var state_11312__$1 = (function (){var statearr_11331 = state_11312;
(statearr_11331[(13)] = inst_11190__$1);

(statearr_11331[(18)] = inst_11207);

(statearr_11331[(15)] = inst_11192__$1);

(statearr_11331[(16)] = inst_11189__$1);

(statearr_11331[(17)] = inst_11191__$1);

return statearr_11331;
})();
var statearr_11332_11411 = state_11312__$1;
(statearr_11332_11411[(2)] = null);

(statearr_11332_11411[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11313 === (21))){
var inst_11234 = (state_11312[(2)]);
var state_11312__$1 = state_11312;
var statearr_11336_11412 = state_11312__$1;
(statearr_11336_11412[(2)] = inst_11234);

(statearr_11336_11412[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11313 === (31))){
var inst_11260 = (state_11312[(12)]);
var inst_11264 = done.call(null,null);
var inst_11265 = cljs.core.async.untap_STAR_.call(null,m,inst_11260);
var state_11312__$1 = (function (){var statearr_11337 = state_11312;
(statearr_11337[(19)] = inst_11264);

return statearr_11337;
})();
var statearr_11338_11413 = state_11312__$1;
(statearr_11338_11413[(2)] = inst_11265);

(statearr_11338_11413[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11313 === (32))){
var inst_11255 = (state_11312[(9)]);
var inst_11253 = (state_11312[(10)]);
var inst_11252 = (state_11312[(20)]);
var inst_11254 = (state_11312[(21)]);
var inst_11267 = (state_11312[(2)]);
var inst_11268 = (inst_11255 + (1));
var tmp11333 = inst_11253;
var tmp11334 = inst_11252;
var tmp11335 = inst_11254;
var inst_11252__$1 = tmp11334;
var inst_11253__$1 = tmp11333;
var inst_11254__$1 = tmp11335;
var inst_11255__$1 = inst_11268;
var state_11312__$1 = (function (){var statearr_11339 = state_11312;
(statearr_11339[(9)] = inst_11255__$1);

(statearr_11339[(22)] = inst_11267);

(statearr_11339[(10)] = inst_11253__$1);

(statearr_11339[(20)] = inst_11252__$1);

(statearr_11339[(21)] = inst_11254__$1);

return statearr_11339;
})();
var statearr_11340_11414 = state_11312__$1;
(statearr_11340_11414[(2)] = null);

(statearr_11340_11414[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11313 === (40))){
var inst_11280 = (state_11312[(23)]);
var inst_11284 = done.call(null,null);
var inst_11285 = cljs.core.async.untap_STAR_.call(null,m,inst_11280);
var state_11312__$1 = (function (){var statearr_11341 = state_11312;
(statearr_11341[(24)] = inst_11284);

return statearr_11341;
})();
var statearr_11342_11415 = state_11312__$1;
(statearr_11342_11415[(2)] = inst_11285);

(statearr_11342_11415[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11313 === (33))){
var inst_11271 = (state_11312[(25)]);
var inst_11273 = cljs.core.chunked_seq_QMARK_.call(null,inst_11271);
var state_11312__$1 = state_11312;
if(inst_11273){
var statearr_11343_11416 = state_11312__$1;
(statearr_11343_11416[(1)] = (36));

} else {
var statearr_11344_11417 = state_11312__$1;
(statearr_11344_11417[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11313 === (13))){
var inst_11201 = (state_11312[(26)]);
var inst_11204 = cljs.core.async.close_BANG_.call(null,inst_11201);
var state_11312__$1 = state_11312;
var statearr_11345_11418 = state_11312__$1;
(statearr_11345_11418[(2)] = inst_11204);

(statearr_11345_11418[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11313 === (22))){
var inst_11224 = (state_11312[(8)]);
var inst_11227 = cljs.core.async.close_BANG_.call(null,inst_11224);
var state_11312__$1 = state_11312;
var statearr_11346_11419 = state_11312__$1;
(statearr_11346_11419[(2)] = inst_11227);

(statearr_11346_11419[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11313 === (36))){
var inst_11271 = (state_11312[(25)]);
var inst_11275 = cljs.core.chunk_first.call(null,inst_11271);
var inst_11276 = cljs.core.chunk_rest.call(null,inst_11271);
var inst_11277 = cljs.core.count.call(null,inst_11275);
var inst_11252 = inst_11276;
var inst_11253 = inst_11275;
var inst_11254 = inst_11277;
var inst_11255 = (0);
var state_11312__$1 = (function (){var statearr_11347 = state_11312;
(statearr_11347[(9)] = inst_11255);

(statearr_11347[(10)] = inst_11253);

(statearr_11347[(20)] = inst_11252);

(statearr_11347[(21)] = inst_11254);

return statearr_11347;
})();
var statearr_11348_11420 = state_11312__$1;
(statearr_11348_11420[(2)] = null);

(statearr_11348_11420[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11313 === (41))){
var inst_11271 = (state_11312[(25)]);
var inst_11287 = (state_11312[(2)]);
var inst_11288 = cljs.core.next.call(null,inst_11271);
var inst_11252 = inst_11288;
var inst_11253 = null;
var inst_11254 = (0);
var inst_11255 = (0);
var state_11312__$1 = (function (){var statearr_11349 = state_11312;
(statearr_11349[(9)] = inst_11255);

(statearr_11349[(10)] = inst_11253);

(statearr_11349[(20)] = inst_11252);

(statearr_11349[(27)] = inst_11287);

(statearr_11349[(21)] = inst_11254);

return statearr_11349;
})();
var statearr_11350_11421 = state_11312__$1;
(statearr_11350_11421[(2)] = null);

(statearr_11350_11421[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11313 === (43))){
var state_11312__$1 = state_11312;
var statearr_11351_11422 = state_11312__$1;
(statearr_11351_11422[(2)] = null);

(statearr_11351_11422[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11313 === (29))){
var inst_11296 = (state_11312[(2)]);
var state_11312__$1 = state_11312;
var statearr_11352_11423 = state_11312__$1;
(statearr_11352_11423[(2)] = inst_11296);

(statearr_11352_11423[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11313 === (44))){
var inst_11305 = (state_11312[(2)]);
var state_11312__$1 = (function (){var statearr_11353 = state_11312;
(statearr_11353[(28)] = inst_11305);

return statearr_11353;
})();
var statearr_11354_11424 = state_11312__$1;
(statearr_11354_11424[(2)] = null);

(statearr_11354_11424[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11313 === (6))){
var inst_11244 = (state_11312[(29)]);
var inst_11243 = cljs.core.deref.call(null,cs);
var inst_11244__$1 = cljs.core.keys.call(null,inst_11243);
var inst_11245 = cljs.core.count.call(null,inst_11244__$1);
var inst_11246 = cljs.core.reset_BANG_.call(null,dctr,inst_11245);
var inst_11251 = cljs.core.seq.call(null,inst_11244__$1);
var inst_11252 = inst_11251;
var inst_11253 = null;
var inst_11254 = (0);
var inst_11255 = (0);
var state_11312__$1 = (function (){var statearr_11355 = state_11312;
(statearr_11355[(9)] = inst_11255);

(statearr_11355[(10)] = inst_11253);

(statearr_11355[(20)] = inst_11252);

(statearr_11355[(30)] = inst_11246);

(statearr_11355[(29)] = inst_11244__$1);

(statearr_11355[(21)] = inst_11254);

return statearr_11355;
})();
var statearr_11356_11425 = state_11312__$1;
(statearr_11356_11425[(2)] = null);

(statearr_11356_11425[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11313 === (28))){
var inst_11252 = (state_11312[(20)]);
var inst_11271 = (state_11312[(25)]);
var inst_11271__$1 = cljs.core.seq.call(null,inst_11252);
var state_11312__$1 = (function (){var statearr_11357 = state_11312;
(statearr_11357[(25)] = inst_11271__$1);

return statearr_11357;
})();
if(inst_11271__$1){
var statearr_11358_11426 = state_11312__$1;
(statearr_11358_11426[(1)] = (33));

} else {
var statearr_11359_11427 = state_11312__$1;
(statearr_11359_11427[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11313 === (25))){
var inst_11255 = (state_11312[(9)]);
var inst_11254 = (state_11312[(21)]);
var inst_11257 = (inst_11255 < inst_11254);
var inst_11258 = inst_11257;
var state_11312__$1 = state_11312;
if(cljs.core.truth_(inst_11258)){
var statearr_11360_11428 = state_11312__$1;
(statearr_11360_11428[(1)] = (27));

} else {
var statearr_11361_11429 = state_11312__$1;
(statearr_11361_11429[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11313 === (34))){
var state_11312__$1 = state_11312;
var statearr_11362_11430 = state_11312__$1;
(statearr_11362_11430[(2)] = null);

(statearr_11362_11430[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11313 === (17))){
var state_11312__$1 = state_11312;
var statearr_11363_11431 = state_11312__$1;
(statearr_11363_11431[(2)] = null);

(statearr_11363_11431[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11313 === (3))){
var inst_11310 = (state_11312[(2)]);
var state_11312__$1 = state_11312;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11312__$1,inst_11310);
} else {
if((state_val_11313 === (12))){
var inst_11239 = (state_11312[(2)]);
var state_11312__$1 = state_11312;
var statearr_11364_11432 = state_11312__$1;
(statearr_11364_11432[(2)] = inst_11239);

(statearr_11364_11432[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11313 === (2))){
var state_11312__$1 = state_11312;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11312__$1,(4),ch);
} else {
if((state_val_11313 === (23))){
var state_11312__$1 = state_11312;
var statearr_11365_11433 = state_11312__$1;
(statearr_11365_11433[(2)] = null);

(statearr_11365_11433[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11313 === (35))){
var inst_11294 = (state_11312[(2)]);
var state_11312__$1 = state_11312;
var statearr_11366_11434 = state_11312__$1;
(statearr_11366_11434[(2)] = inst_11294);

(statearr_11366_11434[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11313 === (19))){
var inst_11211 = (state_11312[(7)]);
var inst_11215 = cljs.core.chunk_first.call(null,inst_11211);
var inst_11216 = cljs.core.chunk_rest.call(null,inst_11211);
var inst_11217 = cljs.core.count.call(null,inst_11215);
var inst_11189 = inst_11216;
var inst_11190 = inst_11215;
var inst_11191 = inst_11217;
var inst_11192 = (0);
var state_11312__$1 = (function (){var statearr_11367 = state_11312;
(statearr_11367[(13)] = inst_11190);

(statearr_11367[(15)] = inst_11192);

(statearr_11367[(16)] = inst_11189);

(statearr_11367[(17)] = inst_11191);

return statearr_11367;
})();
var statearr_11368_11435 = state_11312__$1;
(statearr_11368_11435[(2)] = null);

(statearr_11368_11435[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11313 === (11))){
var inst_11211 = (state_11312[(7)]);
var inst_11189 = (state_11312[(16)]);
var inst_11211__$1 = cljs.core.seq.call(null,inst_11189);
var state_11312__$1 = (function (){var statearr_11369 = state_11312;
(statearr_11369[(7)] = inst_11211__$1);

return statearr_11369;
})();
if(inst_11211__$1){
var statearr_11370_11436 = state_11312__$1;
(statearr_11370_11436[(1)] = (16));

} else {
var statearr_11371_11437 = state_11312__$1;
(statearr_11371_11437[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11313 === (9))){
var inst_11241 = (state_11312[(2)]);
var state_11312__$1 = state_11312;
var statearr_11372_11438 = state_11312__$1;
(statearr_11372_11438[(2)] = inst_11241);

(statearr_11372_11438[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11313 === (5))){
var inst_11187 = cljs.core.deref.call(null,cs);
var inst_11188 = cljs.core.seq.call(null,inst_11187);
var inst_11189 = inst_11188;
var inst_11190 = null;
var inst_11191 = (0);
var inst_11192 = (0);
var state_11312__$1 = (function (){var statearr_11373 = state_11312;
(statearr_11373[(13)] = inst_11190);

(statearr_11373[(15)] = inst_11192);

(statearr_11373[(16)] = inst_11189);

(statearr_11373[(17)] = inst_11191);

return statearr_11373;
})();
var statearr_11374_11439 = state_11312__$1;
(statearr_11374_11439[(2)] = null);

(statearr_11374_11439[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11313 === (14))){
var state_11312__$1 = state_11312;
var statearr_11375_11440 = state_11312__$1;
(statearr_11375_11440[(2)] = null);

(statearr_11375_11440[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11313 === (45))){
var inst_11302 = (state_11312[(2)]);
var state_11312__$1 = state_11312;
var statearr_11376_11441 = state_11312__$1;
(statearr_11376_11441[(2)] = inst_11302);

(statearr_11376_11441[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11313 === (26))){
var inst_11244 = (state_11312[(29)]);
var inst_11298 = (state_11312[(2)]);
var inst_11299 = cljs.core.seq.call(null,inst_11244);
var state_11312__$1 = (function (){var statearr_11377 = state_11312;
(statearr_11377[(31)] = inst_11298);

return statearr_11377;
})();
if(inst_11299){
var statearr_11378_11442 = state_11312__$1;
(statearr_11378_11442[(1)] = (42));

} else {
var statearr_11379_11443 = state_11312__$1;
(statearr_11379_11443[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11313 === (16))){
var inst_11211 = (state_11312[(7)]);
var inst_11213 = cljs.core.chunked_seq_QMARK_.call(null,inst_11211);
var state_11312__$1 = state_11312;
if(inst_11213){
var statearr_11380_11444 = state_11312__$1;
(statearr_11380_11444[(1)] = (19));

} else {
var statearr_11381_11445 = state_11312__$1;
(statearr_11381_11445[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11313 === (38))){
var inst_11291 = (state_11312[(2)]);
var state_11312__$1 = state_11312;
var statearr_11382_11446 = state_11312__$1;
(statearr_11382_11446[(2)] = inst_11291);

(statearr_11382_11446[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11313 === (30))){
var state_11312__$1 = state_11312;
var statearr_11383_11447 = state_11312__$1;
(statearr_11383_11447[(2)] = null);

(statearr_11383_11447[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11313 === (10))){
var inst_11190 = (state_11312[(13)]);
var inst_11192 = (state_11312[(15)]);
var inst_11200 = cljs.core._nth.call(null,inst_11190,inst_11192);
var inst_11201 = cljs.core.nth.call(null,inst_11200,(0),null);
var inst_11202 = cljs.core.nth.call(null,inst_11200,(1),null);
var state_11312__$1 = (function (){var statearr_11384 = state_11312;
(statearr_11384[(26)] = inst_11201);

return statearr_11384;
})();
if(cljs.core.truth_(inst_11202)){
var statearr_11385_11448 = state_11312__$1;
(statearr_11385_11448[(1)] = (13));

} else {
var statearr_11386_11449 = state_11312__$1;
(statearr_11386_11449[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11313 === (18))){
var inst_11237 = (state_11312[(2)]);
var state_11312__$1 = state_11312;
var statearr_11387_11450 = state_11312__$1;
(statearr_11387_11450[(2)] = inst_11237);

(statearr_11387_11450[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11313 === (42))){
var state_11312__$1 = state_11312;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11312__$1,(45),dchan);
} else {
if((state_val_11313 === (37))){
var inst_11280 = (state_11312[(23)]);
var inst_11271 = (state_11312[(25)]);
var inst_11180 = (state_11312[(11)]);
var inst_11280__$1 = cljs.core.first.call(null,inst_11271);
var inst_11281 = cljs.core.async.put_BANG_.call(null,inst_11280__$1,inst_11180,done);
var state_11312__$1 = (function (){var statearr_11388 = state_11312;
(statearr_11388[(23)] = inst_11280__$1);

return statearr_11388;
})();
if(cljs.core.truth_(inst_11281)){
var statearr_11389_11451 = state_11312__$1;
(statearr_11389_11451[(1)] = (39));

} else {
var statearr_11390_11452 = state_11312__$1;
(statearr_11390_11452[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11313 === (8))){
var inst_11192 = (state_11312[(15)]);
var inst_11191 = (state_11312[(17)]);
var inst_11194 = (inst_11192 < inst_11191);
var inst_11195 = inst_11194;
var state_11312__$1 = state_11312;
if(cljs.core.truth_(inst_11195)){
var statearr_11391_11453 = state_11312__$1;
(statearr_11391_11453[(1)] = (10));

} else {
var statearr_11392_11454 = state_11312__$1;
(statearr_11392_11454[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10047__auto___11400,cs,m,dchan,dctr,done))
;
return ((function (switch__9982__auto__,c__10047__auto___11400,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__9983__auto__ = null;
var cljs$core$async$mult_$_state_machine__9983__auto____0 = (function (){
var statearr_11396 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11396[(0)] = cljs$core$async$mult_$_state_machine__9983__auto__);

(statearr_11396[(1)] = (1));

return statearr_11396;
});
var cljs$core$async$mult_$_state_machine__9983__auto____1 = (function (state_11312){
while(true){
var ret_value__9984__auto__ = (function (){try{while(true){
var result__9985__auto__ = switch__9982__auto__.call(null,state_11312);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9985__auto__;
}
break;
}
}catch (e11397){if((e11397 instanceof Object)){
var ex__9986__auto__ = e11397;
var statearr_11398_11455 = state_11312;
(statearr_11398_11455[(5)] = ex__9986__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11312);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11397;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11456 = state_11312;
state_11312 = G__11456;
continue;
} else {
return ret_value__9984__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__9983__auto__ = function(state_11312){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__9983__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__9983__auto____1.call(this,state_11312);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__9983__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__9983__auto____0;
cljs$core$async$mult_$_state_machine__9983__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__9983__auto____1;
return cljs$core$async$mult_$_state_machine__9983__auto__;
})()
;})(switch__9982__auto__,c__10047__auto___11400,cs,m,dchan,dctr,done))
})();
var state__10049__auto__ = (function (){var statearr_11399 = f__10048__auto__.call(null);
(statearr_11399[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10047__auto___11400);

return statearr_11399;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10049__auto__);
});})(c__10047__auto___11400,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args11457 = [];
var len__7933__auto___11460 = arguments.length;
var i__7934__auto___11461 = (0);
while(true){
if((i__7934__auto___11461 < len__7933__auto___11460)){
args11457.push((arguments[i__7934__auto___11461]));

var G__11462 = (i__7934__auto___11461 + (1));
i__7934__auto___11461 = G__11462;
continue;
} else {
}
break;
}

var G__11459 = args11457.length;
switch (G__11459) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args11457.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__7492__auto__ = (((m == null))?null:m);
var m__7493__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__7492__auto__)]);
if(!((m__7493__auto__ == null))){
return m__7493__auto__.call(null,m,ch);
} else {
var m__7493__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__7493__auto____$1 == null))){
return m__7493__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__7492__auto__ = (((m == null))?null:m);
var m__7493__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__7492__auto__)]);
if(!((m__7493__auto__ == null))){
return m__7493__auto__.call(null,m,ch);
} else {
var m__7493__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__7493__auto____$1 == null))){
return m__7493__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__7492__auto__ = (((m == null))?null:m);
var m__7493__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__7492__auto__)]);
if(!((m__7493__auto__ == null))){
return m__7493__auto__.call(null,m);
} else {
var m__7493__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__7493__auto____$1 == null))){
return m__7493__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__7492__auto__ = (((m == null))?null:m);
var m__7493__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__7492__auto__)]);
if(!((m__7493__auto__ == null))){
return m__7493__auto__.call(null,m,state_map);
} else {
var m__7493__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__7493__auto____$1 == null))){
return m__7493__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__7492__auto__ = (((m == null))?null:m);
var m__7493__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__7492__auto__)]);
if(!((m__7493__auto__ == null))){
return m__7493__auto__.call(null,m,mode);
} else {
var m__7493__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__7493__auto____$1 == null))){
return m__7493__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__7940__auto__ = [];
var len__7933__auto___11474 = arguments.length;
var i__7934__auto___11475 = (0);
while(true){
if((i__7934__auto___11475 < len__7933__auto___11474)){
args__7940__auto__.push((arguments[i__7934__auto___11475]));

var G__11476 = (i__7934__auto___11475 + (1));
i__7934__auto___11475 = G__11476;
continue;
} else {
}
break;
}

var argseq__7941__auto__ = ((((3) < args__7940__auto__.length))?(new cljs.core.IndexedSeq(args__7940__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7941__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__11468){
var map__11469 = p__11468;
var map__11469__$1 = ((((!((map__11469 == null)))?((((map__11469.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11469.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11469):map__11469);
var opts = map__11469__$1;
var statearr_11471_11477 = state;
(statearr_11471_11477[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__11469,map__11469__$1,opts){
return (function (val){
var statearr_11472_11478 = state;
(statearr_11472_11478[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__11469,map__11469__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_11473_11479 = state;
(statearr_11473_11479[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq11464){
var G__11465 = cljs.core.first.call(null,seq11464);
var seq11464__$1 = cljs.core.next.call(null,seq11464);
var G__11466 = cljs.core.first.call(null,seq11464__$1);
var seq11464__$2 = cljs.core.next.call(null,seq11464__$1);
var G__11467 = cljs.core.first.call(null,seq11464__$2);
var seq11464__$3 = cljs.core.next.call(null,seq11464__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__11465,G__11466,G__11467,seq11464__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async11647 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11647 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta11648){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta11648 = meta11648;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11647.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_11649,meta11648__$1){
var self__ = this;
var _11649__$1 = this;
return (new cljs.core.async.t_cljs$core$async11647(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta11648__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11647.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_11649){
var self__ = this;
var _11649__$1 = this;
return self__.meta11648;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11647.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11647.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11647.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11647.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11647.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11647.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11647.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11647.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11647.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta11648","meta11648",-815212145,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11647.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11647.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11647";

cljs.core.async.t_cljs$core$async11647.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__7435__auto__,writer__7436__auto__,opt__7437__auto__){
return cljs.core._write.call(null,writer__7436__auto__,"cljs.core.async/t_cljs$core$async11647");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async11647 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async11647(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta11648){
return (new cljs.core.async.t_cljs$core$async11647(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta11648));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async11647(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10047__auto___11814 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10047__auto___11814,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__10048__auto__ = (function (){var switch__9982__auto__ = ((function (c__10047__auto___11814,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_11751){
var state_val_11752 = (state_11751[(1)]);
if((state_val_11752 === (7))){
var inst_11666 = (state_11751[(2)]);
var state_11751__$1 = state_11751;
var statearr_11753_11815 = state_11751__$1;
(statearr_11753_11815[(2)] = inst_11666);

(statearr_11753_11815[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11752 === (20))){
var inst_11678 = (state_11751[(7)]);
var state_11751__$1 = state_11751;
var statearr_11754_11816 = state_11751__$1;
(statearr_11754_11816[(2)] = inst_11678);

(statearr_11754_11816[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11752 === (27))){
var state_11751__$1 = state_11751;
var statearr_11755_11817 = state_11751__$1;
(statearr_11755_11817[(2)] = null);

(statearr_11755_11817[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11752 === (1))){
var inst_11653 = (state_11751[(8)]);
var inst_11653__$1 = calc_state.call(null);
var inst_11655 = (inst_11653__$1 == null);
var inst_11656 = cljs.core.not.call(null,inst_11655);
var state_11751__$1 = (function (){var statearr_11756 = state_11751;
(statearr_11756[(8)] = inst_11653__$1);

return statearr_11756;
})();
if(inst_11656){
var statearr_11757_11818 = state_11751__$1;
(statearr_11757_11818[(1)] = (2));

} else {
var statearr_11758_11819 = state_11751__$1;
(statearr_11758_11819[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11752 === (24))){
var inst_11711 = (state_11751[(9)]);
var inst_11725 = (state_11751[(10)]);
var inst_11702 = (state_11751[(11)]);
var inst_11725__$1 = inst_11702.call(null,inst_11711);
var state_11751__$1 = (function (){var statearr_11759 = state_11751;
(statearr_11759[(10)] = inst_11725__$1);

return statearr_11759;
})();
if(cljs.core.truth_(inst_11725__$1)){
var statearr_11760_11820 = state_11751__$1;
(statearr_11760_11820[(1)] = (29));

} else {
var statearr_11761_11821 = state_11751__$1;
(statearr_11761_11821[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11752 === (4))){
var inst_11669 = (state_11751[(2)]);
var state_11751__$1 = state_11751;
if(cljs.core.truth_(inst_11669)){
var statearr_11762_11822 = state_11751__$1;
(statearr_11762_11822[(1)] = (8));

} else {
var statearr_11763_11823 = state_11751__$1;
(statearr_11763_11823[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11752 === (15))){
var inst_11696 = (state_11751[(2)]);
var state_11751__$1 = state_11751;
if(cljs.core.truth_(inst_11696)){
var statearr_11764_11824 = state_11751__$1;
(statearr_11764_11824[(1)] = (19));

} else {
var statearr_11765_11825 = state_11751__$1;
(statearr_11765_11825[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11752 === (21))){
var inst_11701 = (state_11751[(12)]);
var inst_11701__$1 = (state_11751[(2)]);
var inst_11702 = cljs.core.get.call(null,inst_11701__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_11703 = cljs.core.get.call(null,inst_11701__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_11704 = cljs.core.get.call(null,inst_11701__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_11751__$1 = (function (){var statearr_11766 = state_11751;
(statearr_11766[(12)] = inst_11701__$1);

(statearr_11766[(13)] = inst_11703);

(statearr_11766[(11)] = inst_11702);

return statearr_11766;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_11751__$1,(22),inst_11704);
} else {
if((state_val_11752 === (31))){
var inst_11733 = (state_11751[(2)]);
var state_11751__$1 = state_11751;
if(cljs.core.truth_(inst_11733)){
var statearr_11767_11826 = state_11751__$1;
(statearr_11767_11826[(1)] = (32));

} else {
var statearr_11768_11827 = state_11751__$1;
(statearr_11768_11827[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11752 === (32))){
var inst_11710 = (state_11751[(14)]);
var state_11751__$1 = state_11751;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11751__$1,(35),out,inst_11710);
} else {
if((state_val_11752 === (33))){
var inst_11701 = (state_11751[(12)]);
var inst_11678 = inst_11701;
var state_11751__$1 = (function (){var statearr_11769 = state_11751;
(statearr_11769[(7)] = inst_11678);

return statearr_11769;
})();
var statearr_11770_11828 = state_11751__$1;
(statearr_11770_11828[(2)] = null);

(statearr_11770_11828[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11752 === (13))){
var inst_11678 = (state_11751[(7)]);
var inst_11685 = inst_11678.cljs$lang$protocol_mask$partition0$;
var inst_11686 = (inst_11685 & (64));
var inst_11687 = inst_11678.cljs$core$ISeq$;
var inst_11688 = (cljs.core.PROTOCOL_SENTINEL === inst_11687);
var inst_11689 = (inst_11686) || (inst_11688);
var state_11751__$1 = state_11751;
if(cljs.core.truth_(inst_11689)){
var statearr_11771_11829 = state_11751__$1;
(statearr_11771_11829[(1)] = (16));

} else {
var statearr_11772_11830 = state_11751__$1;
(statearr_11772_11830[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11752 === (22))){
var inst_11710 = (state_11751[(14)]);
var inst_11711 = (state_11751[(9)]);
var inst_11709 = (state_11751[(2)]);
var inst_11710__$1 = cljs.core.nth.call(null,inst_11709,(0),null);
var inst_11711__$1 = cljs.core.nth.call(null,inst_11709,(1),null);
var inst_11712 = (inst_11710__$1 == null);
var inst_11713 = cljs.core._EQ_.call(null,inst_11711__$1,change);
var inst_11714 = (inst_11712) || (inst_11713);
var state_11751__$1 = (function (){var statearr_11773 = state_11751;
(statearr_11773[(14)] = inst_11710__$1);

(statearr_11773[(9)] = inst_11711__$1);

return statearr_11773;
})();
if(cljs.core.truth_(inst_11714)){
var statearr_11774_11831 = state_11751__$1;
(statearr_11774_11831[(1)] = (23));

} else {
var statearr_11775_11832 = state_11751__$1;
(statearr_11775_11832[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11752 === (36))){
var inst_11701 = (state_11751[(12)]);
var inst_11678 = inst_11701;
var state_11751__$1 = (function (){var statearr_11776 = state_11751;
(statearr_11776[(7)] = inst_11678);

return statearr_11776;
})();
var statearr_11777_11833 = state_11751__$1;
(statearr_11777_11833[(2)] = null);

(statearr_11777_11833[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11752 === (29))){
var inst_11725 = (state_11751[(10)]);
var state_11751__$1 = state_11751;
var statearr_11778_11834 = state_11751__$1;
(statearr_11778_11834[(2)] = inst_11725);

(statearr_11778_11834[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11752 === (6))){
var state_11751__$1 = state_11751;
var statearr_11779_11835 = state_11751__$1;
(statearr_11779_11835[(2)] = false);

(statearr_11779_11835[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11752 === (28))){
var inst_11721 = (state_11751[(2)]);
var inst_11722 = calc_state.call(null);
var inst_11678 = inst_11722;
var state_11751__$1 = (function (){var statearr_11780 = state_11751;
(statearr_11780[(15)] = inst_11721);

(statearr_11780[(7)] = inst_11678);

return statearr_11780;
})();
var statearr_11781_11836 = state_11751__$1;
(statearr_11781_11836[(2)] = null);

(statearr_11781_11836[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11752 === (25))){
var inst_11747 = (state_11751[(2)]);
var state_11751__$1 = state_11751;
var statearr_11782_11837 = state_11751__$1;
(statearr_11782_11837[(2)] = inst_11747);

(statearr_11782_11837[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11752 === (34))){
var inst_11745 = (state_11751[(2)]);
var state_11751__$1 = state_11751;
var statearr_11783_11838 = state_11751__$1;
(statearr_11783_11838[(2)] = inst_11745);

(statearr_11783_11838[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11752 === (17))){
var state_11751__$1 = state_11751;
var statearr_11784_11839 = state_11751__$1;
(statearr_11784_11839[(2)] = false);

(statearr_11784_11839[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11752 === (3))){
var state_11751__$1 = state_11751;
var statearr_11785_11840 = state_11751__$1;
(statearr_11785_11840[(2)] = false);

(statearr_11785_11840[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11752 === (12))){
var inst_11749 = (state_11751[(2)]);
var state_11751__$1 = state_11751;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11751__$1,inst_11749);
} else {
if((state_val_11752 === (2))){
var inst_11653 = (state_11751[(8)]);
var inst_11658 = inst_11653.cljs$lang$protocol_mask$partition0$;
var inst_11659 = (inst_11658 & (64));
var inst_11660 = inst_11653.cljs$core$ISeq$;
var inst_11661 = (cljs.core.PROTOCOL_SENTINEL === inst_11660);
var inst_11662 = (inst_11659) || (inst_11661);
var state_11751__$1 = state_11751;
if(cljs.core.truth_(inst_11662)){
var statearr_11786_11841 = state_11751__$1;
(statearr_11786_11841[(1)] = (5));

} else {
var statearr_11787_11842 = state_11751__$1;
(statearr_11787_11842[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11752 === (23))){
var inst_11710 = (state_11751[(14)]);
var inst_11716 = (inst_11710 == null);
var state_11751__$1 = state_11751;
if(cljs.core.truth_(inst_11716)){
var statearr_11788_11843 = state_11751__$1;
(statearr_11788_11843[(1)] = (26));

} else {
var statearr_11789_11844 = state_11751__$1;
(statearr_11789_11844[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11752 === (35))){
var inst_11736 = (state_11751[(2)]);
var state_11751__$1 = state_11751;
if(cljs.core.truth_(inst_11736)){
var statearr_11790_11845 = state_11751__$1;
(statearr_11790_11845[(1)] = (36));

} else {
var statearr_11791_11846 = state_11751__$1;
(statearr_11791_11846[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11752 === (19))){
var inst_11678 = (state_11751[(7)]);
var inst_11698 = cljs.core.apply.call(null,cljs.core.hash_map,inst_11678);
var state_11751__$1 = state_11751;
var statearr_11792_11847 = state_11751__$1;
(statearr_11792_11847[(2)] = inst_11698);

(statearr_11792_11847[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11752 === (11))){
var inst_11678 = (state_11751[(7)]);
var inst_11682 = (inst_11678 == null);
var inst_11683 = cljs.core.not.call(null,inst_11682);
var state_11751__$1 = state_11751;
if(inst_11683){
var statearr_11793_11848 = state_11751__$1;
(statearr_11793_11848[(1)] = (13));

} else {
var statearr_11794_11849 = state_11751__$1;
(statearr_11794_11849[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11752 === (9))){
var inst_11653 = (state_11751[(8)]);
var state_11751__$1 = state_11751;
var statearr_11795_11850 = state_11751__$1;
(statearr_11795_11850[(2)] = inst_11653);

(statearr_11795_11850[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11752 === (5))){
var state_11751__$1 = state_11751;
var statearr_11796_11851 = state_11751__$1;
(statearr_11796_11851[(2)] = true);

(statearr_11796_11851[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11752 === (14))){
var state_11751__$1 = state_11751;
var statearr_11797_11852 = state_11751__$1;
(statearr_11797_11852[(2)] = false);

(statearr_11797_11852[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11752 === (26))){
var inst_11711 = (state_11751[(9)]);
var inst_11718 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_11711);
var state_11751__$1 = state_11751;
var statearr_11798_11853 = state_11751__$1;
(statearr_11798_11853[(2)] = inst_11718);

(statearr_11798_11853[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11752 === (16))){
var state_11751__$1 = state_11751;
var statearr_11799_11854 = state_11751__$1;
(statearr_11799_11854[(2)] = true);

(statearr_11799_11854[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11752 === (38))){
var inst_11741 = (state_11751[(2)]);
var state_11751__$1 = state_11751;
var statearr_11800_11855 = state_11751__$1;
(statearr_11800_11855[(2)] = inst_11741);

(statearr_11800_11855[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11752 === (30))){
var inst_11711 = (state_11751[(9)]);
var inst_11703 = (state_11751[(13)]);
var inst_11702 = (state_11751[(11)]);
var inst_11728 = cljs.core.empty_QMARK_.call(null,inst_11702);
var inst_11729 = inst_11703.call(null,inst_11711);
var inst_11730 = cljs.core.not.call(null,inst_11729);
var inst_11731 = (inst_11728) && (inst_11730);
var state_11751__$1 = state_11751;
var statearr_11801_11856 = state_11751__$1;
(statearr_11801_11856[(2)] = inst_11731);

(statearr_11801_11856[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11752 === (10))){
var inst_11653 = (state_11751[(8)]);
var inst_11674 = (state_11751[(2)]);
var inst_11675 = cljs.core.get.call(null,inst_11674,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_11676 = cljs.core.get.call(null,inst_11674,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_11677 = cljs.core.get.call(null,inst_11674,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_11678 = inst_11653;
var state_11751__$1 = (function (){var statearr_11802 = state_11751;
(statearr_11802[(16)] = inst_11676);

(statearr_11802[(17)] = inst_11675);

(statearr_11802[(18)] = inst_11677);

(statearr_11802[(7)] = inst_11678);

return statearr_11802;
})();
var statearr_11803_11857 = state_11751__$1;
(statearr_11803_11857[(2)] = null);

(statearr_11803_11857[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11752 === (18))){
var inst_11693 = (state_11751[(2)]);
var state_11751__$1 = state_11751;
var statearr_11804_11858 = state_11751__$1;
(statearr_11804_11858[(2)] = inst_11693);

(statearr_11804_11858[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11752 === (37))){
var state_11751__$1 = state_11751;
var statearr_11805_11859 = state_11751__$1;
(statearr_11805_11859[(2)] = null);

(statearr_11805_11859[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11752 === (8))){
var inst_11653 = (state_11751[(8)]);
var inst_11671 = cljs.core.apply.call(null,cljs.core.hash_map,inst_11653);
var state_11751__$1 = state_11751;
var statearr_11806_11860 = state_11751__$1;
(statearr_11806_11860[(2)] = inst_11671);

(statearr_11806_11860[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10047__auto___11814,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__9982__auto__,c__10047__auto___11814,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__9983__auto__ = null;
var cljs$core$async$mix_$_state_machine__9983__auto____0 = (function (){
var statearr_11810 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11810[(0)] = cljs$core$async$mix_$_state_machine__9983__auto__);

(statearr_11810[(1)] = (1));

return statearr_11810;
});
var cljs$core$async$mix_$_state_machine__9983__auto____1 = (function (state_11751){
while(true){
var ret_value__9984__auto__ = (function (){try{while(true){
var result__9985__auto__ = switch__9982__auto__.call(null,state_11751);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9985__auto__;
}
break;
}
}catch (e11811){if((e11811 instanceof Object)){
var ex__9986__auto__ = e11811;
var statearr_11812_11861 = state_11751;
(statearr_11812_11861[(5)] = ex__9986__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11751);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11811;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11862 = state_11751;
state_11751 = G__11862;
continue;
} else {
return ret_value__9984__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__9983__auto__ = function(state_11751){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__9983__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__9983__auto____1.call(this,state_11751);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__9983__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__9983__auto____0;
cljs$core$async$mix_$_state_machine__9983__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__9983__auto____1;
return cljs$core$async$mix_$_state_machine__9983__auto__;
})()
;})(switch__9982__auto__,c__10047__auto___11814,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__10049__auto__ = (function (){var statearr_11813 = f__10048__auto__.call(null);
(statearr_11813[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10047__auto___11814);

return statearr_11813;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10049__auto__);
});})(c__10047__auto___11814,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__7492__auto__ = (((p == null))?null:p);
var m__7493__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__7492__auto__)]);
if(!((m__7493__auto__ == null))){
return m__7493__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__7493__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__7493__auto____$1 == null))){
return m__7493__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__7492__auto__ = (((p == null))?null:p);
var m__7493__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__7492__auto__)]);
if(!((m__7493__auto__ == null))){
return m__7493__auto__.call(null,p,v,ch);
} else {
var m__7493__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__7493__auto____$1 == null))){
return m__7493__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args11863 = [];
var len__7933__auto___11866 = arguments.length;
var i__7934__auto___11867 = (0);
while(true){
if((i__7934__auto___11867 < len__7933__auto___11866)){
args11863.push((arguments[i__7934__auto___11867]));

var G__11868 = (i__7934__auto___11867 + (1));
i__7934__auto___11867 = G__11868;
continue;
} else {
}
break;
}

var G__11865 = args11863.length;
switch (G__11865) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args11863.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__7492__auto__ = (((p == null))?null:p);
var m__7493__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__7492__auto__)]);
if(!((m__7493__auto__ == null))){
return m__7493__auto__.call(null,p);
} else {
var m__7493__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__7493__auto____$1 == null))){
return m__7493__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__7492__auto__ = (((p == null))?null:p);
var m__7493__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__7492__auto__)]);
if(!((m__7493__auto__ == null))){
return m__7493__auto__.call(null,p,v);
} else {
var m__7493__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__7493__auto____$1 == null))){
return m__7493__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args11871 = [];
var len__7933__auto___11996 = arguments.length;
var i__7934__auto___11997 = (0);
while(true){
if((i__7934__auto___11997 < len__7933__auto___11996)){
args11871.push((arguments[i__7934__auto___11997]));

var G__11998 = (i__7934__auto___11997 + (1));
i__7934__auto___11997 = G__11998;
continue;
} else {
}
break;
}

var G__11873 = args11871.length;
switch (G__11873) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args11871.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__6824__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__6824__auto__)){
return or__6824__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__6824__auto__,mults){
return (function (p1__11870_SHARP_){
if(cljs.core.truth_(p1__11870_SHARP_.call(null,topic))){
return p1__11870_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__11870_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__6824__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async11874 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11874 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta11875){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta11875 = meta11875;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11874.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_11876,meta11875__$1){
var self__ = this;
var _11876__$1 = this;
return (new cljs.core.async.t_cljs$core$async11874(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta11875__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11874.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_11876){
var self__ = this;
var _11876__$1 = this;
return self__.meta11875;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11874.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11874.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11874.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11874.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11874.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11874.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11874.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11874.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta11875","meta11875",1509474931,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11874.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11874.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11874";

cljs.core.async.t_cljs$core$async11874.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__7435__auto__,writer__7436__auto__,opt__7437__auto__){
return cljs.core._write.call(null,writer__7436__auto__,"cljs.core.async/t_cljs$core$async11874");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async11874 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async11874(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta11875){
return (new cljs.core.async.t_cljs$core$async11874(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta11875));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async11874(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10047__auto___12000 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10047__auto___12000,mults,ensure_mult,p){
return (function (){
var f__10048__auto__ = (function (){var switch__9982__auto__ = ((function (c__10047__auto___12000,mults,ensure_mult,p){
return (function (state_11948){
var state_val_11949 = (state_11948[(1)]);
if((state_val_11949 === (7))){
var inst_11944 = (state_11948[(2)]);
var state_11948__$1 = state_11948;
var statearr_11950_12001 = state_11948__$1;
(statearr_11950_12001[(2)] = inst_11944);

(statearr_11950_12001[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11949 === (20))){
var state_11948__$1 = state_11948;
var statearr_11951_12002 = state_11948__$1;
(statearr_11951_12002[(2)] = null);

(statearr_11951_12002[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11949 === (1))){
var state_11948__$1 = state_11948;
var statearr_11952_12003 = state_11948__$1;
(statearr_11952_12003[(2)] = null);

(statearr_11952_12003[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11949 === (24))){
var inst_11927 = (state_11948[(7)]);
var inst_11936 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_11927);
var state_11948__$1 = state_11948;
var statearr_11953_12004 = state_11948__$1;
(statearr_11953_12004[(2)] = inst_11936);

(statearr_11953_12004[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11949 === (4))){
var inst_11879 = (state_11948[(8)]);
var inst_11879__$1 = (state_11948[(2)]);
var inst_11880 = (inst_11879__$1 == null);
var state_11948__$1 = (function (){var statearr_11954 = state_11948;
(statearr_11954[(8)] = inst_11879__$1);

return statearr_11954;
})();
if(cljs.core.truth_(inst_11880)){
var statearr_11955_12005 = state_11948__$1;
(statearr_11955_12005[(1)] = (5));

} else {
var statearr_11956_12006 = state_11948__$1;
(statearr_11956_12006[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11949 === (15))){
var inst_11921 = (state_11948[(2)]);
var state_11948__$1 = state_11948;
var statearr_11957_12007 = state_11948__$1;
(statearr_11957_12007[(2)] = inst_11921);

(statearr_11957_12007[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11949 === (21))){
var inst_11941 = (state_11948[(2)]);
var state_11948__$1 = (function (){var statearr_11958 = state_11948;
(statearr_11958[(9)] = inst_11941);

return statearr_11958;
})();
var statearr_11959_12008 = state_11948__$1;
(statearr_11959_12008[(2)] = null);

(statearr_11959_12008[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11949 === (13))){
var inst_11903 = (state_11948[(10)]);
var inst_11905 = cljs.core.chunked_seq_QMARK_.call(null,inst_11903);
var state_11948__$1 = state_11948;
if(inst_11905){
var statearr_11960_12009 = state_11948__$1;
(statearr_11960_12009[(1)] = (16));

} else {
var statearr_11961_12010 = state_11948__$1;
(statearr_11961_12010[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11949 === (22))){
var inst_11933 = (state_11948[(2)]);
var state_11948__$1 = state_11948;
if(cljs.core.truth_(inst_11933)){
var statearr_11962_12011 = state_11948__$1;
(statearr_11962_12011[(1)] = (23));

} else {
var statearr_11963_12012 = state_11948__$1;
(statearr_11963_12012[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11949 === (6))){
var inst_11929 = (state_11948[(11)]);
var inst_11927 = (state_11948[(7)]);
var inst_11879 = (state_11948[(8)]);
var inst_11927__$1 = topic_fn.call(null,inst_11879);
var inst_11928 = cljs.core.deref.call(null,mults);
var inst_11929__$1 = cljs.core.get.call(null,inst_11928,inst_11927__$1);
var state_11948__$1 = (function (){var statearr_11964 = state_11948;
(statearr_11964[(11)] = inst_11929__$1);

(statearr_11964[(7)] = inst_11927__$1);

return statearr_11964;
})();
if(cljs.core.truth_(inst_11929__$1)){
var statearr_11965_12013 = state_11948__$1;
(statearr_11965_12013[(1)] = (19));

} else {
var statearr_11966_12014 = state_11948__$1;
(statearr_11966_12014[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11949 === (25))){
var inst_11938 = (state_11948[(2)]);
var state_11948__$1 = state_11948;
var statearr_11967_12015 = state_11948__$1;
(statearr_11967_12015[(2)] = inst_11938);

(statearr_11967_12015[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11949 === (17))){
var inst_11903 = (state_11948[(10)]);
var inst_11912 = cljs.core.first.call(null,inst_11903);
var inst_11913 = cljs.core.async.muxch_STAR_.call(null,inst_11912);
var inst_11914 = cljs.core.async.close_BANG_.call(null,inst_11913);
var inst_11915 = cljs.core.next.call(null,inst_11903);
var inst_11889 = inst_11915;
var inst_11890 = null;
var inst_11891 = (0);
var inst_11892 = (0);
var state_11948__$1 = (function (){var statearr_11968 = state_11948;
(statearr_11968[(12)] = inst_11890);

(statearr_11968[(13)] = inst_11889);

(statearr_11968[(14)] = inst_11891);

(statearr_11968[(15)] = inst_11914);

(statearr_11968[(16)] = inst_11892);

return statearr_11968;
})();
var statearr_11969_12016 = state_11948__$1;
(statearr_11969_12016[(2)] = null);

(statearr_11969_12016[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11949 === (3))){
var inst_11946 = (state_11948[(2)]);
var state_11948__$1 = state_11948;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11948__$1,inst_11946);
} else {
if((state_val_11949 === (12))){
var inst_11923 = (state_11948[(2)]);
var state_11948__$1 = state_11948;
var statearr_11970_12017 = state_11948__$1;
(statearr_11970_12017[(2)] = inst_11923);

(statearr_11970_12017[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11949 === (2))){
var state_11948__$1 = state_11948;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11948__$1,(4),ch);
} else {
if((state_val_11949 === (23))){
var state_11948__$1 = state_11948;
var statearr_11971_12018 = state_11948__$1;
(statearr_11971_12018[(2)] = null);

(statearr_11971_12018[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11949 === (19))){
var inst_11929 = (state_11948[(11)]);
var inst_11879 = (state_11948[(8)]);
var inst_11931 = cljs.core.async.muxch_STAR_.call(null,inst_11929);
var state_11948__$1 = state_11948;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11948__$1,(22),inst_11931,inst_11879);
} else {
if((state_val_11949 === (11))){
var inst_11903 = (state_11948[(10)]);
var inst_11889 = (state_11948[(13)]);
var inst_11903__$1 = cljs.core.seq.call(null,inst_11889);
var state_11948__$1 = (function (){var statearr_11972 = state_11948;
(statearr_11972[(10)] = inst_11903__$1);

return statearr_11972;
})();
if(inst_11903__$1){
var statearr_11973_12019 = state_11948__$1;
(statearr_11973_12019[(1)] = (13));

} else {
var statearr_11974_12020 = state_11948__$1;
(statearr_11974_12020[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11949 === (9))){
var inst_11925 = (state_11948[(2)]);
var state_11948__$1 = state_11948;
var statearr_11975_12021 = state_11948__$1;
(statearr_11975_12021[(2)] = inst_11925);

(statearr_11975_12021[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11949 === (5))){
var inst_11886 = cljs.core.deref.call(null,mults);
var inst_11887 = cljs.core.vals.call(null,inst_11886);
var inst_11888 = cljs.core.seq.call(null,inst_11887);
var inst_11889 = inst_11888;
var inst_11890 = null;
var inst_11891 = (0);
var inst_11892 = (0);
var state_11948__$1 = (function (){var statearr_11976 = state_11948;
(statearr_11976[(12)] = inst_11890);

(statearr_11976[(13)] = inst_11889);

(statearr_11976[(14)] = inst_11891);

(statearr_11976[(16)] = inst_11892);

return statearr_11976;
})();
var statearr_11977_12022 = state_11948__$1;
(statearr_11977_12022[(2)] = null);

(statearr_11977_12022[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11949 === (14))){
var state_11948__$1 = state_11948;
var statearr_11981_12023 = state_11948__$1;
(statearr_11981_12023[(2)] = null);

(statearr_11981_12023[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11949 === (16))){
var inst_11903 = (state_11948[(10)]);
var inst_11907 = cljs.core.chunk_first.call(null,inst_11903);
var inst_11908 = cljs.core.chunk_rest.call(null,inst_11903);
var inst_11909 = cljs.core.count.call(null,inst_11907);
var inst_11889 = inst_11908;
var inst_11890 = inst_11907;
var inst_11891 = inst_11909;
var inst_11892 = (0);
var state_11948__$1 = (function (){var statearr_11982 = state_11948;
(statearr_11982[(12)] = inst_11890);

(statearr_11982[(13)] = inst_11889);

(statearr_11982[(14)] = inst_11891);

(statearr_11982[(16)] = inst_11892);

return statearr_11982;
})();
var statearr_11983_12024 = state_11948__$1;
(statearr_11983_12024[(2)] = null);

(statearr_11983_12024[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11949 === (10))){
var inst_11890 = (state_11948[(12)]);
var inst_11889 = (state_11948[(13)]);
var inst_11891 = (state_11948[(14)]);
var inst_11892 = (state_11948[(16)]);
var inst_11897 = cljs.core._nth.call(null,inst_11890,inst_11892);
var inst_11898 = cljs.core.async.muxch_STAR_.call(null,inst_11897);
var inst_11899 = cljs.core.async.close_BANG_.call(null,inst_11898);
var inst_11900 = (inst_11892 + (1));
var tmp11978 = inst_11890;
var tmp11979 = inst_11889;
var tmp11980 = inst_11891;
var inst_11889__$1 = tmp11979;
var inst_11890__$1 = tmp11978;
var inst_11891__$1 = tmp11980;
var inst_11892__$1 = inst_11900;
var state_11948__$1 = (function (){var statearr_11984 = state_11948;
(statearr_11984[(17)] = inst_11899);

(statearr_11984[(12)] = inst_11890__$1);

(statearr_11984[(13)] = inst_11889__$1);

(statearr_11984[(14)] = inst_11891__$1);

(statearr_11984[(16)] = inst_11892__$1);

return statearr_11984;
})();
var statearr_11985_12025 = state_11948__$1;
(statearr_11985_12025[(2)] = null);

(statearr_11985_12025[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11949 === (18))){
var inst_11918 = (state_11948[(2)]);
var state_11948__$1 = state_11948;
var statearr_11986_12026 = state_11948__$1;
(statearr_11986_12026[(2)] = inst_11918);

(statearr_11986_12026[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11949 === (8))){
var inst_11891 = (state_11948[(14)]);
var inst_11892 = (state_11948[(16)]);
var inst_11894 = (inst_11892 < inst_11891);
var inst_11895 = inst_11894;
var state_11948__$1 = state_11948;
if(cljs.core.truth_(inst_11895)){
var statearr_11987_12027 = state_11948__$1;
(statearr_11987_12027[(1)] = (10));

} else {
var statearr_11988_12028 = state_11948__$1;
(statearr_11988_12028[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10047__auto___12000,mults,ensure_mult,p))
;
return ((function (switch__9982__auto__,c__10047__auto___12000,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__9983__auto__ = null;
var cljs$core$async$state_machine__9983__auto____0 = (function (){
var statearr_11992 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11992[(0)] = cljs$core$async$state_machine__9983__auto__);

(statearr_11992[(1)] = (1));

return statearr_11992;
});
var cljs$core$async$state_machine__9983__auto____1 = (function (state_11948){
while(true){
var ret_value__9984__auto__ = (function (){try{while(true){
var result__9985__auto__ = switch__9982__auto__.call(null,state_11948);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9985__auto__;
}
break;
}
}catch (e11993){if((e11993 instanceof Object)){
var ex__9986__auto__ = e11993;
var statearr_11994_12029 = state_11948;
(statearr_11994_12029[(5)] = ex__9986__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11948);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11993;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12030 = state_11948;
state_11948 = G__12030;
continue;
} else {
return ret_value__9984__auto__;
}
break;
}
});
cljs$core$async$state_machine__9983__auto__ = function(state_11948){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9983__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9983__auto____1.call(this,state_11948);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9983__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9983__auto____0;
cljs$core$async$state_machine__9983__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9983__auto____1;
return cljs$core$async$state_machine__9983__auto__;
})()
;})(switch__9982__auto__,c__10047__auto___12000,mults,ensure_mult,p))
})();
var state__10049__auto__ = (function (){var statearr_11995 = f__10048__auto__.call(null);
(statearr_11995[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10047__auto___12000);

return statearr_11995;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10049__auto__);
});})(c__10047__auto___12000,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args12031 = [];
var len__7933__auto___12034 = arguments.length;
var i__7934__auto___12035 = (0);
while(true){
if((i__7934__auto___12035 < len__7933__auto___12034)){
args12031.push((arguments[i__7934__auto___12035]));

var G__12036 = (i__7934__auto___12035 + (1));
i__7934__auto___12035 = G__12036;
continue;
} else {
}
break;
}

var G__12033 = args12031.length;
switch (G__12033) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args12031.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args12038 = [];
var len__7933__auto___12041 = arguments.length;
var i__7934__auto___12042 = (0);
while(true){
if((i__7934__auto___12042 < len__7933__auto___12041)){
args12038.push((arguments[i__7934__auto___12042]));

var G__12043 = (i__7934__auto___12042 + (1));
i__7934__auto___12042 = G__12043;
continue;
} else {
}
break;
}

var G__12040 = args12038.length;
switch (G__12040) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args12038.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args12045 = [];
var len__7933__auto___12116 = arguments.length;
var i__7934__auto___12117 = (0);
while(true){
if((i__7934__auto___12117 < len__7933__auto___12116)){
args12045.push((arguments[i__7934__auto___12117]));

var G__12118 = (i__7934__auto___12117 + (1));
i__7934__auto___12117 = G__12118;
continue;
} else {
}
break;
}

var G__12047 = args12045.length;
switch (G__12047) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args12045.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__10047__auto___12120 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10047__auto___12120,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__10048__auto__ = (function (){var switch__9982__auto__ = ((function (c__10047__auto___12120,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_12086){
var state_val_12087 = (state_12086[(1)]);
if((state_val_12087 === (7))){
var state_12086__$1 = state_12086;
var statearr_12088_12121 = state_12086__$1;
(statearr_12088_12121[(2)] = null);

(statearr_12088_12121[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12087 === (1))){
var state_12086__$1 = state_12086;
var statearr_12089_12122 = state_12086__$1;
(statearr_12089_12122[(2)] = null);

(statearr_12089_12122[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12087 === (4))){
var inst_12050 = (state_12086[(7)]);
var inst_12052 = (inst_12050 < cnt);
var state_12086__$1 = state_12086;
if(cljs.core.truth_(inst_12052)){
var statearr_12090_12123 = state_12086__$1;
(statearr_12090_12123[(1)] = (6));

} else {
var statearr_12091_12124 = state_12086__$1;
(statearr_12091_12124[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12087 === (15))){
var inst_12082 = (state_12086[(2)]);
var state_12086__$1 = state_12086;
var statearr_12092_12125 = state_12086__$1;
(statearr_12092_12125[(2)] = inst_12082);

(statearr_12092_12125[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12087 === (13))){
var inst_12075 = cljs.core.async.close_BANG_.call(null,out);
var state_12086__$1 = state_12086;
var statearr_12093_12126 = state_12086__$1;
(statearr_12093_12126[(2)] = inst_12075);

(statearr_12093_12126[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12087 === (6))){
var state_12086__$1 = state_12086;
var statearr_12094_12127 = state_12086__$1;
(statearr_12094_12127[(2)] = null);

(statearr_12094_12127[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12087 === (3))){
var inst_12084 = (state_12086[(2)]);
var state_12086__$1 = state_12086;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12086__$1,inst_12084);
} else {
if((state_val_12087 === (12))){
var inst_12072 = (state_12086[(8)]);
var inst_12072__$1 = (state_12086[(2)]);
var inst_12073 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_12072__$1);
var state_12086__$1 = (function (){var statearr_12095 = state_12086;
(statearr_12095[(8)] = inst_12072__$1);

return statearr_12095;
})();
if(cljs.core.truth_(inst_12073)){
var statearr_12096_12128 = state_12086__$1;
(statearr_12096_12128[(1)] = (13));

} else {
var statearr_12097_12129 = state_12086__$1;
(statearr_12097_12129[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12087 === (2))){
var inst_12049 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_12050 = (0);
var state_12086__$1 = (function (){var statearr_12098 = state_12086;
(statearr_12098[(7)] = inst_12050);

(statearr_12098[(9)] = inst_12049);

return statearr_12098;
})();
var statearr_12099_12130 = state_12086__$1;
(statearr_12099_12130[(2)] = null);

(statearr_12099_12130[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12087 === (11))){
var inst_12050 = (state_12086[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12086,(10),Object,null,(9));
var inst_12059 = chs__$1.call(null,inst_12050);
var inst_12060 = done.call(null,inst_12050);
var inst_12061 = cljs.core.async.take_BANG_.call(null,inst_12059,inst_12060);
var state_12086__$1 = state_12086;
var statearr_12100_12131 = state_12086__$1;
(statearr_12100_12131[(2)] = inst_12061);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12086__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12087 === (9))){
var inst_12050 = (state_12086[(7)]);
var inst_12063 = (state_12086[(2)]);
var inst_12064 = (inst_12050 + (1));
var inst_12050__$1 = inst_12064;
var state_12086__$1 = (function (){var statearr_12101 = state_12086;
(statearr_12101[(7)] = inst_12050__$1);

(statearr_12101[(10)] = inst_12063);

return statearr_12101;
})();
var statearr_12102_12132 = state_12086__$1;
(statearr_12102_12132[(2)] = null);

(statearr_12102_12132[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12087 === (5))){
var inst_12070 = (state_12086[(2)]);
var state_12086__$1 = (function (){var statearr_12103 = state_12086;
(statearr_12103[(11)] = inst_12070);

return statearr_12103;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12086__$1,(12),dchan);
} else {
if((state_val_12087 === (14))){
var inst_12072 = (state_12086[(8)]);
var inst_12077 = cljs.core.apply.call(null,f,inst_12072);
var state_12086__$1 = state_12086;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12086__$1,(16),out,inst_12077);
} else {
if((state_val_12087 === (16))){
var inst_12079 = (state_12086[(2)]);
var state_12086__$1 = (function (){var statearr_12104 = state_12086;
(statearr_12104[(12)] = inst_12079);

return statearr_12104;
})();
var statearr_12105_12133 = state_12086__$1;
(statearr_12105_12133[(2)] = null);

(statearr_12105_12133[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12087 === (10))){
var inst_12054 = (state_12086[(2)]);
var inst_12055 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_12086__$1 = (function (){var statearr_12106 = state_12086;
(statearr_12106[(13)] = inst_12054);

return statearr_12106;
})();
var statearr_12107_12134 = state_12086__$1;
(statearr_12107_12134[(2)] = inst_12055);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12086__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12087 === (8))){
var inst_12068 = (state_12086[(2)]);
var state_12086__$1 = state_12086;
var statearr_12108_12135 = state_12086__$1;
(statearr_12108_12135[(2)] = inst_12068);

(statearr_12108_12135[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10047__auto___12120,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__9982__auto__,c__10047__auto___12120,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__9983__auto__ = null;
var cljs$core$async$state_machine__9983__auto____0 = (function (){
var statearr_12112 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12112[(0)] = cljs$core$async$state_machine__9983__auto__);

(statearr_12112[(1)] = (1));

return statearr_12112;
});
var cljs$core$async$state_machine__9983__auto____1 = (function (state_12086){
while(true){
var ret_value__9984__auto__ = (function (){try{while(true){
var result__9985__auto__ = switch__9982__auto__.call(null,state_12086);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9985__auto__;
}
break;
}
}catch (e12113){if((e12113 instanceof Object)){
var ex__9986__auto__ = e12113;
var statearr_12114_12136 = state_12086;
(statearr_12114_12136[(5)] = ex__9986__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12086);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12113;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12137 = state_12086;
state_12086 = G__12137;
continue;
} else {
return ret_value__9984__auto__;
}
break;
}
});
cljs$core$async$state_machine__9983__auto__ = function(state_12086){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9983__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9983__auto____1.call(this,state_12086);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9983__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9983__auto____0;
cljs$core$async$state_machine__9983__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9983__auto____1;
return cljs$core$async$state_machine__9983__auto__;
})()
;})(switch__9982__auto__,c__10047__auto___12120,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__10049__auto__ = (function (){var statearr_12115 = f__10048__auto__.call(null);
(statearr_12115[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10047__auto___12120);

return statearr_12115;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10049__auto__);
});})(c__10047__auto___12120,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args12139 = [];
var len__7933__auto___12197 = arguments.length;
var i__7934__auto___12198 = (0);
while(true){
if((i__7934__auto___12198 < len__7933__auto___12197)){
args12139.push((arguments[i__7934__auto___12198]));

var G__12199 = (i__7934__auto___12198 + (1));
i__7934__auto___12198 = G__12199;
continue;
} else {
}
break;
}

var G__12141 = args12139.length;
switch (G__12141) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args12139.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10047__auto___12201 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10047__auto___12201,out){
return (function (){
var f__10048__auto__ = (function (){var switch__9982__auto__ = ((function (c__10047__auto___12201,out){
return (function (state_12173){
var state_val_12174 = (state_12173[(1)]);
if((state_val_12174 === (7))){
var inst_12153 = (state_12173[(7)]);
var inst_12152 = (state_12173[(8)]);
var inst_12152__$1 = (state_12173[(2)]);
var inst_12153__$1 = cljs.core.nth.call(null,inst_12152__$1,(0),null);
var inst_12154 = cljs.core.nth.call(null,inst_12152__$1,(1),null);
var inst_12155 = (inst_12153__$1 == null);
var state_12173__$1 = (function (){var statearr_12175 = state_12173;
(statearr_12175[(9)] = inst_12154);

(statearr_12175[(7)] = inst_12153__$1);

(statearr_12175[(8)] = inst_12152__$1);

return statearr_12175;
})();
if(cljs.core.truth_(inst_12155)){
var statearr_12176_12202 = state_12173__$1;
(statearr_12176_12202[(1)] = (8));

} else {
var statearr_12177_12203 = state_12173__$1;
(statearr_12177_12203[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12174 === (1))){
var inst_12142 = cljs.core.vec.call(null,chs);
var inst_12143 = inst_12142;
var state_12173__$1 = (function (){var statearr_12178 = state_12173;
(statearr_12178[(10)] = inst_12143);

return statearr_12178;
})();
var statearr_12179_12204 = state_12173__$1;
(statearr_12179_12204[(2)] = null);

(statearr_12179_12204[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12174 === (4))){
var inst_12143 = (state_12173[(10)]);
var state_12173__$1 = state_12173;
return cljs.core.async.ioc_alts_BANG_.call(null,state_12173__$1,(7),inst_12143);
} else {
if((state_val_12174 === (6))){
var inst_12169 = (state_12173[(2)]);
var state_12173__$1 = state_12173;
var statearr_12180_12205 = state_12173__$1;
(statearr_12180_12205[(2)] = inst_12169);

(statearr_12180_12205[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12174 === (3))){
var inst_12171 = (state_12173[(2)]);
var state_12173__$1 = state_12173;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12173__$1,inst_12171);
} else {
if((state_val_12174 === (2))){
var inst_12143 = (state_12173[(10)]);
var inst_12145 = cljs.core.count.call(null,inst_12143);
var inst_12146 = (inst_12145 > (0));
var state_12173__$1 = state_12173;
if(cljs.core.truth_(inst_12146)){
var statearr_12182_12206 = state_12173__$1;
(statearr_12182_12206[(1)] = (4));

} else {
var statearr_12183_12207 = state_12173__$1;
(statearr_12183_12207[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12174 === (11))){
var inst_12143 = (state_12173[(10)]);
var inst_12162 = (state_12173[(2)]);
var tmp12181 = inst_12143;
var inst_12143__$1 = tmp12181;
var state_12173__$1 = (function (){var statearr_12184 = state_12173;
(statearr_12184[(10)] = inst_12143__$1);

(statearr_12184[(11)] = inst_12162);

return statearr_12184;
})();
var statearr_12185_12208 = state_12173__$1;
(statearr_12185_12208[(2)] = null);

(statearr_12185_12208[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12174 === (9))){
var inst_12153 = (state_12173[(7)]);
var state_12173__$1 = state_12173;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12173__$1,(11),out,inst_12153);
} else {
if((state_val_12174 === (5))){
var inst_12167 = cljs.core.async.close_BANG_.call(null,out);
var state_12173__$1 = state_12173;
var statearr_12186_12209 = state_12173__$1;
(statearr_12186_12209[(2)] = inst_12167);

(statearr_12186_12209[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12174 === (10))){
var inst_12165 = (state_12173[(2)]);
var state_12173__$1 = state_12173;
var statearr_12187_12210 = state_12173__$1;
(statearr_12187_12210[(2)] = inst_12165);

(statearr_12187_12210[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12174 === (8))){
var inst_12154 = (state_12173[(9)]);
var inst_12143 = (state_12173[(10)]);
var inst_12153 = (state_12173[(7)]);
var inst_12152 = (state_12173[(8)]);
var inst_12157 = (function (){var cs = inst_12143;
var vec__12148 = inst_12152;
var v = inst_12153;
var c = inst_12154;
return ((function (cs,vec__12148,v,c,inst_12154,inst_12143,inst_12153,inst_12152,state_val_12174,c__10047__auto___12201,out){
return (function (p1__12138_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__12138_SHARP_);
});
;})(cs,vec__12148,v,c,inst_12154,inst_12143,inst_12153,inst_12152,state_val_12174,c__10047__auto___12201,out))
})();
var inst_12158 = cljs.core.filterv.call(null,inst_12157,inst_12143);
var inst_12143__$1 = inst_12158;
var state_12173__$1 = (function (){var statearr_12188 = state_12173;
(statearr_12188[(10)] = inst_12143__$1);

return statearr_12188;
})();
var statearr_12189_12211 = state_12173__$1;
(statearr_12189_12211[(2)] = null);

(statearr_12189_12211[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__10047__auto___12201,out))
;
return ((function (switch__9982__auto__,c__10047__auto___12201,out){
return (function() {
var cljs$core$async$state_machine__9983__auto__ = null;
var cljs$core$async$state_machine__9983__auto____0 = (function (){
var statearr_12193 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12193[(0)] = cljs$core$async$state_machine__9983__auto__);

(statearr_12193[(1)] = (1));

return statearr_12193;
});
var cljs$core$async$state_machine__9983__auto____1 = (function (state_12173){
while(true){
var ret_value__9984__auto__ = (function (){try{while(true){
var result__9985__auto__ = switch__9982__auto__.call(null,state_12173);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9985__auto__;
}
break;
}
}catch (e12194){if((e12194 instanceof Object)){
var ex__9986__auto__ = e12194;
var statearr_12195_12212 = state_12173;
(statearr_12195_12212[(5)] = ex__9986__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12173);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12194;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12213 = state_12173;
state_12173 = G__12213;
continue;
} else {
return ret_value__9984__auto__;
}
break;
}
});
cljs$core$async$state_machine__9983__auto__ = function(state_12173){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9983__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9983__auto____1.call(this,state_12173);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9983__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9983__auto____0;
cljs$core$async$state_machine__9983__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9983__auto____1;
return cljs$core$async$state_machine__9983__auto__;
})()
;})(switch__9982__auto__,c__10047__auto___12201,out))
})();
var state__10049__auto__ = (function (){var statearr_12196 = f__10048__auto__.call(null);
(statearr_12196[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10047__auto___12201);

return statearr_12196;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10049__auto__);
});})(c__10047__auto___12201,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args12214 = [];
var len__7933__auto___12263 = arguments.length;
var i__7934__auto___12264 = (0);
while(true){
if((i__7934__auto___12264 < len__7933__auto___12263)){
args12214.push((arguments[i__7934__auto___12264]));

var G__12265 = (i__7934__auto___12264 + (1));
i__7934__auto___12264 = G__12265;
continue;
} else {
}
break;
}

var G__12216 = args12214.length;
switch (G__12216) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args12214.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10047__auto___12267 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10047__auto___12267,out){
return (function (){
var f__10048__auto__ = (function (){var switch__9982__auto__ = ((function (c__10047__auto___12267,out){
return (function (state_12240){
var state_val_12241 = (state_12240[(1)]);
if((state_val_12241 === (7))){
var inst_12222 = (state_12240[(7)]);
var inst_12222__$1 = (state_12240[(2)]);
var inst_12223 = (inst_12222__$1 == null);
var inst_12224 = cljs.core.not.call(null,inst_12223);
var state_12240__$1 = (function (){var statearr_12242 = state_12240;
(statearr_12242[(7)] = inst_12222__$1);

return statearr_12242;
})();
if(inst_12224){
var statearr_12243_12268 = state_12240__$1;
(statearr_12243_12268[(1)] = (8));

} else {
var statearr_12244_12269 = state_12240__$1;
(statearr_12244_12269[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12241 === (1))){
var inst_12217 = (0);
var state_12240__$1 = (function (){var statearr_12245 = state_12240;
(statearr_12245[(8)] = inst_12217);

return statearr_12245;
})();
var statearr_12246_12270 = state_12240__$1;
(statearr_12246_12270[(2)] = null);

(statearr_12246_12270[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12241 === (4))){
var state_12240__$1 = state_12240;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12240__$1,(7),ch);
} else {
if((state_val_12241 === (6))){
var inst_12235 = (state_12240[(2)]);
var state_12240__$1 = state_12240;
var statearr_12247_12271 = state_12240__$1;
(statearr_12247_12271[(2)] = inst_12235);

(statearr_12247_12271[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12241 === (3))){
var inst_12237 = (state_12240[(2)]);
var inst_12238 = cljs.core.async.close_BANG_.call(null,out);
var state_12240__$1 = (function (){var statearr_12248 = state_12240;
(statearr_12248[(9)] = inst_12237);

return statearr_12248;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12240__$1,inst_12238);
} else {
if((state_val_12241 === (2))){
var inst_12217 = (state_12240[(8)]);
var inst_12219 = (inst_12217 < n);
var state_12240__$1 = state_12240;
if(cljs.core.truth_(inst_12219)){
var statearr_12249_12272 = state_12240__$1;
(statearr_12249_12272[(1)] = (4));

} else {
var statearr_12250_12273 = state_12240__$1;
(statearr_12250_12273[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12241 === (11))){
var inst_12217 = (state_12240[(8)]);
var inst_12227 = (state_12240[(2)]);
var inst_12228 = (inst_12217 + (1));
var inst_12217__$1 = inst_12228;
var state_12240__$1 = (function (){var statearr_12251 = state_12240;
(statearr_12251[(10)] = inst_12227);

(statearr_12251[(8)] = inst_12217__$1);

return statearr_12251;
})();
var statearr_12252_12274 = state_12240__$1;
(statearr_12252_12274[(2)] = null);

(statearr_12252_12274[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12241 === (9))){
var state_12240__$1 = state_12240;
var statearr_12253_12275 = state_12240__$1;
(statearr_12253_12275[(2)] = null);

(statearr_12253_12275[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12241 === (5))){
var state_12240__$1 = state_12240;
var statearr_12254_12276 = state_12240__$1;
(statearr_12254_12276[(2)] = null);

(statearr_12254_12276[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12241 === (10))){
var inst_12232 = (state_12240[(2)]);
var state_12240__$1 = state_12240;
var statearr_12255_12277 = state_12240__$1;
(statearr_12255_12277[(2)] = inst_12232);

(statearr_12255_12277[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12241 === (8))){
var inst_12222 = (state_12240[(7)]);
var state_12240__$1 = state_12240;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12240__$1,(11),out,inst_12222);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__10047__auto___12267,out))
;
return ((function (switch__9982__auto__,c__10047__auto___12267,out){
return (function() {
var cljs$core$async$state_machine__9983__auto__ = null;
var cljs$core$async$state_machine__9983__auto____0 = (function (){
var statearr_12259 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12259[(0)] = cljs$core$async$state_machine__9983__auto__);

(statearr_12259[(1)] = (1));

return statearr_12259;
});
var cljs$core$async$state_machine__9983__auto____1 = (function (state_12240){
while(true){
var ret_value__9984__auto__ = (function (){try{while(true){
var result__9985__auto__ = switch__9982__auto__.call(null,state_12240);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9985__auto__;
}
break;
}
}catch (e12260){if((e12260 instanceof Object)){
var ex__9986__auto__ = e12260;
var statearr_12261_12278 = state_12240;
(statearr_12261_12278[(5)] = ex__9986__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12240);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12260;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12279 = state_12240;
state_12240 = G__12279;
continue;
} else {
return ret_value__9984__auto__;
}
break;
}
});
cljs$core$async$state_machine__9983__auto__ = function(state_12240){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9983__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9983__auto____1.call(this,state_12240);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9983__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9983__auto____0;
cljs$core$async$state_machine__9983__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9983__auto____1;
return cljs$core$async$state_machine__9983__auto__;
})()
;})(switch__9982__auto__,c__10047__auto___12267,out))
})();
var state__10049__auto__ = (function (){var statearr_12262 = f__10048__auto__.call(null);
(statearr_12262[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10047__auto___12267);

return statearr_12262;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10049__auto__);
});})(c__10047__auto___12267,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async12287 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12287 = (function (f,ch,meta12288){
this.f = f;
this.ch = ch;
this.meta12288 = meta12288;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async12287.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12289,meta12288__$1){
var self__ = this;
var _12289__$1 = this;
return (new cljs.core.async.t_cljs$core$async12287(self__.f,self__.ch,meta12288__$1));
});

cljs.core.async.t_cljs$core$async12287.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12289){
var self__ = this;
var _12289__$1 = this;
return self__.meta12288;
});

cljs.core.async.t_cljs$core$async12287.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12287.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async12287.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async12287.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12287.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async12290 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12290 = (function (f,ch,meta12288,_,fn1,meta12291){
this.f = f;
this.ch = ch;
this.meta12288 = meta12288;
this._ = _;
this.fn1 = fn1;
this.meta12291 = meta12291;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async12290.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_12292,meta12291__$1){
var self__ = this;
var _12292__$1 = this;
return (new cljs.core.async.t_cljs$core$async12290(self__.f,self__.ch,self__.meta12288,self__._,self__.fn1,meta12291__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async12290.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_12292){
var self__ = this;
var _12292__$1 = this;
return self__.meta12291;
});})(___$1))
;

cljs.core.async.t_cljs$core$async12290.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12290.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async12290.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async12290.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__12280_SHARP_){
return f1.call(null,(((p1__12280_SHARP_ == null))?null:self__.f.call(null,p1__12280_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async12290.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12288","meta12288",1920079232,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async12287","cljs.core.async/t_cljs$core$async12287",-1063070558,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta12291","meta12291",914527127,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async12290.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12290.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12290";

cljs.core.async.t_cljs$core$async12290.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__7435__auto__,writer__7436__auto__,opt__7437__auto__){
return cljs.core._write.call(null,writer__7436__auto__,"cljs.core.async/t_cljs$core$async12290");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async12290 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async12290(f__$1,ch__$1,meta12288__$1,___$2,fn1__$1,meta12291){
return (new cljs.core.async.t_cljs$core$async12290(f__$1,ch__$1,meta12288__$1,___$2,fn1__$1,meta12291));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async12290(self__.f,self__.ch,self__.meta12288,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__6812__auto__ = ret;
if(cljs.core.truth_(and__6812__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__6812__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async12287.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12287.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async12287.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12288","meta12288",1920079232,null)], null);
});

cljs.core.async.t_cljs$core$async12287.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12287.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12287";

cljs.core.async.t_cljs$core$async12287.cljs$lang$ctorPrWriter = (function (this__7435__auto__,writer__7436__auto__,opt__7437__auto__){
return cljs.core._write.call(null,writer__7436__auto__,"cljs.core.async/t_cljs$core$async12287");
});

cljs.core.async.__GT_t_cljs$core$async12287 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async12287(f__$1,ch__$1,meta12288){
return (new cljs.core.async.t_cljs$core$async12287(f__$1,ch__$1,meta12288));
});

}

return (new cljs.core.async.t_cljs$core$async12287(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async12296 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12296 = (function (f,ch,meta12297){
this.f = f;
this.ch = ch;
this.meta12297 = meta12297;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async12296.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12298,meta12297__$1){
var self__ = this;
var _12298__$1 = this;
return (new cljs.core.async.t_cljs$core$async12296(self__.f,self__.ch,meta12297__$1));
});

cljs.core.async.t_cljs$core$async12296.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12298){
var self__ = this;
var _12298__$1 = this;
return self__.meta12297;
});

cljs.core.async.t_cljs$core$async12296.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12296.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async12296.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12296.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async12296.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12296.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async12296.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12297","meta12297",-437297399,null)], null);
});

cljs.core.async.t_cljs$core$async12296.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12296.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12296";

cljs.core.async.t_cljs$core$async12296.cljs$lang$ctorPrWriter = (function (this__7435__auto__,writer__7436__auto__,opt__7437__auto__){
return cljs.core._write.call(null,writer__7436__auto__,"cljs.core.async/t_cljs$core$async12296");
});

cljs.core.async.__GT_t_cljs$core$async12296 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async12296(f__$1,ch__$1,meta12297){
return (new cljs.core.async.t_cljs$core$async12296(f__$1,ch__$1,meta12297));
});

}

return (new cljs.core.async.t_cljs$core$async12296(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async12302 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12302 = (function (p,ch,meta12303){
this.p = p;
this.ch = ch;
this.meta12303 = meta12303;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async12302.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12304,meta12303__$1){
var self__ = this;
var _12304__$1 = this;
return (new cljs.core.async.t_cljs$core$async12302(self__.p,self__.ch,meta12303__$1));
});

cljs.core.async.t_cljs$core$async12302.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12304){
var self__ = this;
var _12304__$1 = this;
return self__.meta12303;
});

cljs.core.async.t_cljs$core$async12302.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12302.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async12302.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async12302.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12302.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async12302.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12302.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async12302.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12303","meta12303",-725433864,null)], null);
});

cljs.core.async.t_cljs$core$async12302.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12302.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12302";

cljs.core.async.t_cljs$core$async12302.cljs$lang$ctorPrWriter = (function (this__7435__auto__,writer__7436__auto__,opt__7437__auto__){
return cljs.core._write.call(null,writer__7436__auto__,"cljs.core.async/t_cljs$core$async12302");
});

cljs.core.async.__GT_t_cljs$core$async12302 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async12302(p__$1,ch__$1,meta12303){
return (new cljs.core.async.t_cljs$core$async12302(p__$1,ch__$1,meta12303));
});

}

return (new cljs.core.async.t_cljs$core$async12302(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args12305 = [];
var len__7933__auto___12349 = arguments.length;
var i__7934__auto___12350 = (0);
while(true){
if((i__7934__auto___12350 < len__7933__auto___12349)){
args12305.push((arguments[i__7934__auto___12350]));

var G__12351 = (i__7934__auto___12350 + (1));
i__7934__auto___12350 = G__12351;
continue;
} else {
}
break;
}

var G__12307 = args12305.length;
switch (G__12307) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args12305.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10047__auto___12353 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10047__auto___12353,out){
return (function (){
var f__10048__auto__ = (function (){var switch__9982__auto__ = ((function (c__10047__auto___12353,out){
return (function (state_12328){
var state_val_12329 = (state_12328[(1)]);
if((state_val_12329 === (7))){
var inst_12324 = (state_12328[(2)]);
var state_12328__$1 = state_12328;
var statearr_12330_12354 = state_12328__$1;
(statearr_12330_12354[(2)] = inst_12324);

(statearr_12330_12354[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12329 === (1))){
var state_12328__$1 = state_12328;
var statearr_12331_12355 = state_12328__$1;
(statearr_12331_12355[(2)] = null);

(statearr_12331_12355[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12329 === (4))){
var inst_12310 = (state_12328[(7)]);
var inst_12310__$1 = (state_12328[(2)]);
var inst_12311 = (inst_12310__$1 == null);
var state_12328__$1 = (function (){var statearr_12332 = state_12328;
(statearr_12332[(7)] = inst_12310__$1);

return statearr_12332;
})();
if(cljs.core.truth_(inst_12311)){
var statearr_12333_12356 = state_12328__$1;
(statearr_12333_12356[(1)] = (5));

} else {
var statearr_12334_12357 = state_12328__$1;
(statearr_12334_12357[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12329 === (6))){
var inst_12310 = (state_12328[(7)]);
var inst_12315 = p.call(null,inst_12310);
var state_12328__$1 = state_12328;
if(cljs.core.truth_(inst_12315)){
var statearr_12335_12358 = state_12328__$1;
(statearr_12335_12358[(1)] = (8));

} else {
var statearr_12336_12359 = state_12328__$1;
(statearr_12336_12359[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12329 === (3))){
var inst_12326 = (state_12328[(2)]);
var state_12328__$1 = state_12328;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12328__$1,inst_12326);
} else {
if((state_val_12329 === (2))){
var state_12328__$1 = state_12328;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12328__$1,(4),ch);
} else {
if((state_val_12329 === (11))){
var inst_12318 = (state_12328[(2)]);
var state_12328__$1 = state_12328;
var statearr_12337_12360 = state_12328__$1;
(statearr_12337_12360[(2)] = inst_12318);

(statearr_12337_12360[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12329 === (9))){
var state_12328__$1 = state_12328;
var statearr_12338_12361 = state_12328__$1;
(statearr_12338_12361[(2)] = null);

(statearr_12338_12361[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12329 === (5))){
var inst_12313 = cljs.core.async.close_BANG_.call(null,out);
var state_12328__$1 = state_12328;
var statearr_12339_12362 = state_12328__$1;
(statearr_12339_12362[(2)] = inst_12313);

(statearr_12339_12362[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12329 === (10))){
var inst_12321 = (state_12328[(2)]);
var state_12328__$1 = (function (){var statearr_12340 = state_12328;
(statearr_12340[(8)] = inst_12321);

return statearr_12340;
})();
var statearr_12341_12363 = state_12328__$1;
(statearr_12341_12363[(2)] = null);

(statearr_12341_12363[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12329 === (8))){
var inst_12310 = (state_12328[(7)]);
var state_12328__$1 = state_12328;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12328__$1,(11),out,inst_12310);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__10047__auto___12353,out))
;
return ((function (switch__9982__auto__,c__10047__auto___12353,out){
return (function() {
var cljs$core$async$state_machine__9983__auto__ = null;
var cljs$core$async$state_machine__9983__auto____0 = (function (){
var statearr_12345 = [null,null,null,null,null,null,null,null,null];
(statearr_12345[(0)] = cljs$core$async$state_machine__9983__auto__);

(statearr_12345[(1)] = (1));

return statearr_12345;
});
var cljs$core$async$state_machine__9983__auto____1 = (function (state_12328){
while(true){
var ret_value__9984__auto__ = (function (){try{while(true){
var result__9985__auto__ = switch__9982__auto__.call(null,state_12328);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9985__auto__;
}
break;
}
}catch (e12346){if((e12346 instanceof Object)){
var ex__9986__auto__ = e12346;
var statearr_12347_12364 = state_12328;
(statearr_12347_12364[(5)] = ex__9986__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12328);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12346;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12365 = state_12328;
state_12328 = G__12365;
continue;
} else {
return ret_value__9984__auto__;
}
break;
}
});
cljs$core$async$state_machine__9983__auto__ = function(state_12328){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9983__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9983__auto____1.call(this,state_12328);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9983__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9983__auto____0;
cljs$core$async$state_machine__9983__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9983__auto____1;
return cljs$core$async$state_machine__9983__auto__;
})()
;})(switch__9982__auto__,c__10047__auto___12353,out))
})();
var state__10049__auto__ = (function (){var statearr_12348 = f__10048__auto__.call(null);
(statearr_12348[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10047__auto___12353);

return statearr_12348;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10049__auto__);
});})(c__10047__auto___12353,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args12366 = [];
var len__7933__auto___12369 = arguments.length;
var i__7934__auto___12370 = (0);
while(true){
if((i__7934__auto___12370 < len__7933__auto___12369)){
args12366.push((arguments[i__7934__auto___12370]));

var G__12371 = (i__7934__auto___12370 + (1));
i__7934__auto___12370 = G__12371;
continue;
} else {
}
break;
}

var G__12368 = args12366.length;
switch (G__12368) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args12366.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__10047__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10047__auto__){
return (function (){
var f__10048__auto__ = (function (){var switch__9982__auto__ = ((function (c__10047__auto__){
return (function (state_12538){
var state_val_12539 = (state_12538[(1)]);
if((state_val_12539 === (7))){
var inst_12534 = (state_12538[(2)]);
var state_12538__$1 = state_12538;
var statearr_12540_12581 = state_12538__$1;
(statearr_12540_12581[(2)] = inst_12534);

(statearr_12540_12581[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12539 === (20))){
var inst_12504 = (state_12538[(7)]);
var inst_12515 = (state_12538[(2)]);
var inst_12516 = cljs.core.next.call(null,inst_12504);
var inst_12490 = inst_12516;
var inst_12491 = null;
var inst_12492 = (0);
var inst_12493 = (0);
var state_12538__$1 = (function (){var statearr_12541 = state_12538;
(statearr_12541[(8)] = inst_12490);

(statearr_12541[(9)] = inst_12515);

(statearr_12541[(10)] = inst_12491);

(statearr_12541[(11)] = inst_12493);

(statearr_12541[(12)] = inst_12492);

return statearr_12541;
})();
var statearr_12542_12582 = state_12538__$1;
(statearr_12542_12582[(2)] = null);

(statearr_12542_12582[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12539 === (1))){
var state_12538__$1 = state_12538;
var statearr_12543_12583 = state_12538__$1;
(statearr_12543_12583[(2)] = null);

(statearr_12543_12583[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12539 === (4))){
var inst_12479 = (state_12538[(13)]);
var inst_12479__$1 = (state_12538[(2)]);
var inst_12480 = (inst_12479__$1 == null);
var state_12538__$1 = (function (){var statearr_12544 = state_12538;
(statearr_12544[(13)] = inst_12479__$1);

return statearr_12544;
})();
if(cljs.core.truth_(inst_12480)){
var statearr_12545_12584 = state_12538__$1;
(statearr_12545_12584[(1)] = (5));

} else {
var statearr_12546_12585 = state_12538__$1;
(statearr_12546_12585[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12539 === (15))){
var state_12538__$1 = state_12538;
var statearr_12550_12586 = state_12538__$1;
(statearr_12550_12586[(2)] = null);

(statearr_12550_12586[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12539 === (21))){
var state_12538__$1 = state_12538;
var statearr_12551_12587 = state_12538__$1;
(statearr_12551_12587[(2)] = null);

(statearr_12551_12587[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12539 === (13))){
var inst_12490 = (state_12538[(8)]);
var inst_12491 = (state_12538[(10)]);
var inst_12493 = (state_12538[(11)]);
var inst_12492 = (state_12538[(12)]);
var inst_12500 = (state_12538[(2)]);
var inst_12501 = (inst_12493 + (1));
var tmp12547 = inst_12490;
var tmp12548 = inst_12491;
var tmp12549 = inst_12492;
var inst_12490__$1 = tmp12547;
var inst_12491__$1 = tmp12548;
var inst_12492__$1 = tmp12549;
var inst_12493__$1 = inst_12501;
var state_12538__$1 = (function (){var statearr_12552 = state_12538;
(statearr_12552[(14)] = inst_12500);

(statearr_12552[(8)] = inst_12490__$1);

(statearr_12552[(10)] = inst_12491__$1);

(statearr_12552[(11)] = inst_12493__$1);

(statearr_12552[(12)] = inst_12492__$1);

return statearr_12552;
})();
var statearr_12553_12588 = state_12538__$1;
(statearr_12553_12588[(2)] = null);

(statearr_12553_12588[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12539 === (22))){
var state_12538__$1 = state_12538;
var statearr_12554_12589 = state_12538__$1;
(statearr_12554_12589[(2)] = null);

(statearr_12554_12589[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12539 === (6))){
var inst_12479 = (state_12538[(13)]);
var inst_12488 = f.call(null,inst_12479);
var inst_12489 = cljs.core.seq.call(null,inst_12488);
var inst_12490 = inst_12489;
var inst_12491 = null;
var inst_12492 = (0);
var inst_12493 = (0);
var state_12538__$1 = (function (){var statearr_12555 = state_12538;
(statearr_12555[(8)] = inst_12490);

(statearr_12555[(10)] = inst_12491);

(statearr_12555[(11)] = inst_12493);

(statearr_12555[(12)] = inst_12492);

return statearr_12555;
})();
var statearr_12556_12590 = state_12538__$1;
(statearr_12556_12590[(2)] = null);

(statearr_12556_12590[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12539 === (17))){
var inst_12504 = (state_12538[(7)]);
var inst_12508 = cljs.core.chunk_first.call(null,inst_12504);
var inst_12509 = cljs.core.chunk_rest.call(null,inst_12504);
var inst_12510 = cljs.core.count.call(null,inst_12508);
var inst_12490 = inst_12509;
var inst_12491 = inst_12508;
var inst_12492 = inst_12510;
var inst_12493 = (0);
var state_12538__$1 = (function (){var statearr_12557 = state_12538;
(statearr_12557[(8)] = inst_12490);

(statearr_12557[(10)] = inst_12491);

(statearr_12557[(11)] = inst_12493);

(statearr_12557[(12)] = inst_12492);

return statearr_12557;
})();
var statearr_12558_12591 = state_12538__$1;
(statearr_12558_12591[(2)] = null);

(statearr_12558_12591[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12539 === (3))){
var inst_12536 = (state_12538[(2)]);
var state_12538__$1 = state_12538;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12538__$1,inst_12536);
} else {
if((state_val_12539 === (12))){
var inst_12524 = (state_12538[(2)]);
var state_12538__$1 = state_12538;
var statearr_12559_12592 = state_12538__$1;
(statearr_12559_12592[(2)] = inst_12524);

(statearr_12559_12592[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12539 === (2))){
var state_12538__$1 = state_12538;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12538__$1,(4),in$);
} else {
if((state_val_12539 === (23))){
var inst_12532 = (state_12538[(2)]);
var state_12538__$1 = state_12538;
var statearr_12560_12593 = state_12538__$1;
(statearr_12560_12593[(2)] = inst_12532);

(statearr_12560_12593[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12539 === (19))){
var inst_12519 = (state_12538[(2)]);
var state_12538__$1 = state_12538;
var statearr_12561_12594 = state_12538__$1;
(statearr_12561_12594[(2)] = inst_12519);

(statearr_12561_12594[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12539 === (11))){
var inst_12490 = (state_12538[(8)]);
var inst_12504 = (state_12538[(7)]);
var inst_12504__$1 = cljs.core.seq.call(null,inst_12490);
var state_12538__$1 = (function (){var statearr_12562 = state_12538;
(statearr_12562[(7)] = inst_12504__$1);

return statearr_12562;
})();
if(inst_12504__$1){
var statearr_12563_12595 = state_12538__$1;
(statearr_12563_12595[(1)] = (14));

} else {
var statearr_12564_12596 = state_12538__$1;
(statearr_12564_12596[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12539 === (9))){
var inst_12526 = (state_12538[(2)]);
var inst_12527 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_12538__$1 = (function (){var statearr_12565 = state_12538;
(statearr_12565[(15)] = inst_12526);

return statearr_12565;
})();
if(cljs.core.truth_(inst_12527)){
var statearr_12566_12597 = state_12538__$1;
(statearr_12566_12597[(1)] = (21));

} else {
var statearr_12567_12598 = state_12538__$1;
(statearr_12567_12598[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12539 === (5))){
var inst_12482 = cljs.core.async.close_BANG_.call(null,out);
var state_12538__$1 = state_12538;
var statearr_12568_12599 = state_12538__$1;
(statearr_12568_12599[(2)] = inst_12482);

(statearr_12568_12599[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12539 === (14))){
var inst_12504 = (state_12538[(7)]);
var inst_12506 = cljs.core.chunked_seq_QMARK_.call(null,inst_12504);
var state_12538__$1 = state_12538;
if(inst_12506){
var statearr_12569_12600 = state_12538__$1;
(statearr_12569_12600[(1)] = (17));

} else {
var statearr_12570_12601 = state_12538__$1;
(statearr_12570_12601[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12539 === (16))){
var inst_12522 = (state_12538[(2)]);
var state_12538__$1 = state_12538;
var statearr_12571_12602 = state_12538__$1;
(statearr_12571_12602[(2)] = inst_12522);

(statearr_12571_12602[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12539 === (10))){
var inst_12491 = (state_12538[(10)]);
var inst_12493 = (state_12538[(11)]);
var inst_12498 = cljs.core._nth.call(null,inst_12491,inst_12493);
var state_12538__$1 = state_12538;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12538__$1,(13),out,inst_12498);
} else {
if((state_val_12539 === (18))){
var inst_12504 = (state_12538[(7)]);
var inst_12513 = cljs.core.first.call(null,inst_12504);
var state_12538__$1 = state_12538;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12538__$1,(20),out,inst_12513);
} else {
if((state_val_12539 === (8))){
var inst_12493 = (state_12538[(11)]);
var inst_12492 = (state_12538[(12)]);
var inst_12495 = (inst_12493 < inst_12492);
var inst_12496 = inst_12495;
var state_12538__$1 = state_12538;
if(cljs.core.truth_(inst_12496)){
var statearr_12572_12603 = state_12538__$1;
(statearr_12572_12603[(1)] = (10));

} else {
var statearr_12573_12604 = state_12538__$1;
(statearr_12573_12604[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10047__auto__))
;
return ((function (switch__9982__auto__,c__10047__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__9983__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__9983__auto____0 = (function (){
var statearr_12577 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12577[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__9983__auto__);

(statearr_12577[(1)] = (1));

return statearr_12577;
});
var cljs$core$async$mapcat_STAR__$_state_machine__9983__auto____1 = (function (state_12538){
while(true){
var ret_value__9984__auto__ = (function (){try{while(true){
var result__9985__auto__ = switch__9982__auto__.call(null,state_12538);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9985__auto__;
}
break;
}
}catch (e12578){if((e12578 instanceof Object)){
var ex__9986__auto__ = e12578;
var statearr_12579_12605 = state_12538;
(statearr_12579_12605[(5)] = ex__9986__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12538);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12578;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12606 = state_12538;
state_12538 = G__12606;
continue;
} else {
return ret_value__9984__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__9983__auto__ = function(state_12538){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__9983__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__9983__auto____1.call(this,state_12538);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__9983__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__9983__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__9983__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__9983__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__9983__auto__;
})()
;})(switch__9982__auto__,c__10047__auto__))
})();
var state__10049__auto__ = (function (){var statearr_12580 = f__10048__auto__.call(null);
(statearr_12580[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10047__auto__);

return statearr_12580;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10049__auto__);
});})(c__10047__auto__))
);

return c__10047__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args12607 = [];
var len__7933__auto___12610 = arguments.length;
var i__7934__auto___12611 = (0);
while(true){
if((i__7934__auto___12611 < len__7933__auto___12610)){
args12607.push((arguments[i__7934__auto___12611]));

var G__12612 = (i__7934__auto___12611 + (1));
i__7934__auto___12611 = G__12612;
continue;
} else {
}
break;
}

var G__12609 = args12607.length;
switch (G__12609) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args12607.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args12614 = [];
var len__7933__auto___12617 = arguments.length;
var i__7934__auto___12618 = (0);
while(true){
if((i__7934__auto___12618 < len__7933__auto___12617)){
args12614.push((arguments[i__7934__auto___12618]));

var G__12619 = (i__7934__auto___12618 + (1));
i__7934__auto___12618 = G__12619;
continue;
} else {
}
break;
}

var G__12616 = args12614.length;
switch (G__12616) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args12614.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args12621 = [];
var len__7933__auto___12672 = arguments.length;
var i__7934__auto___12673 = (0);
while(true){
if((i__7934__auto___12673 < len__7933__auto___12672)){
args12621.push((arguments[i__7934__auto___12673]));

var G__12674 = (i__7934__auto___12673 + (1));
i__7934__auto___12673 = G__12674;
continue;
} else {
}
break;
}

var G__12623 = args12621.length;
switch (G__12623) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args12621.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10047__auto___12676 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10047__auto___12676,out){
return (function (){
var f__10048__auto__ = (function (){var switch__9982__auto__ = ((function (c__10047__auto___12676,out){
return (function (state_12647){
var state_val_12648 = (state_12647[(1)]);
if((state_val_12648 === (7))){
var inst_12642 = (state_12647[(2)]);
var state_12647__$1 = state_12647;
var statearr_12649_12677 = state_12647__$1;
(statearr_12649_12677[(2)] = inst_12642);

(statearr_12649_12677[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12648 === (1))){
var inst_12624 = null;
var state_12647__$1 = (function (){var statearr_12650 = state_12647;
(statearr_12650[(7)] = inst_12624);

return statearr_12650;
})();
var statearr_12651_12678 = state_12647__$1;
(statearr_12651_12678[(2)] = null);

(statearr_12651_12678[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12648 === (4))){
var inst_12627 = (state_12647[(8)]);
var inst_12627__$1 = (state_12647[(2)]);
var inst_12628 = (inst_12627__$1 == null);
var inst_12629 = cljs.core.not.call(null,inst_12628);
var state_12647__$1 = (function (){var statearr_12652 = state_12647;
(statearr_12652[(8)] = inst_12627__$1);

return statearr_12652;
})();
if(inst_12629){
var statearr_12653_12679 = state_12647__$1;
(statearr_12653_12679[(1)] = (5));

} else {
var statearr_12654_12680 = state_12647__$1;
(statearr_12654_12680[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12648 === (6))){
var state_12647__$1 = state_12647;
var statearr_12655_12681 = state_12647__$1;
(statearr_12655_12681[(2)] = null);

(statearr_12655_12681[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12648 === (3))){
var inst_12644 = (state_12647[(2)]);
var inst_12645 = cljs.core.async.close_BANG_.call(null,out);
var state_12647__$1 = (function (){var statearr_12656 = state_12647;
(statearr_12656[(9)] = inst_12644);

return statearr_12656;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12647__$1,inst_12645);
} else {
if((state_val_12648 === (2))){
var state_12647__$1 = state_12647;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12647__$1,(4),ch);
} else {
if((state_val_12648 === (11))){
var inst_12627 = (state_12647[(8)]);
var inst_12636 = (state_12647[(2)]);
var inst_12624 = inst_12627;
var state_12647__$1 = (function (){var statearr_12657 = state_12647;
(statearr_12657[(10)] = inst_12636);

(statearr_12657[(7)] = inst_12624);

return statearr_12657;
})();
var statearr_12658_12682 = state_12647__$1;
(statearr_12658_12682[(2)] = null);

(statearr_12658_12682[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12648 === (9))){
var inst_12627 = (state_12647[(8)]);
var state_12647__$1 = state_12647;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12647__$1,(11),out,inst_12627);
} else {
if((state_val_12648 === (5))){
var inst_12627 = (state_12647[(8)]);
var inst_12624 = (state_12647[(7)]);
var inst_12631 = cljs.core._EQ_.call(null,inst_12627,inst_12624);
var state_12647__$1 = state_12647;
if(inst_12631){
var statearr_12660_12683 = state_12647__$1;
(statearr_12660_12683[(1)] = (8));

} else {
var statearr_12661_12684 = state_12647__$1;
(statearr_12661_12684[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12648 === (10))){
var inst_12639 = (state_12647[(2)]);
var state_12647__$1 = state_12647;
var statearr_12662_12685 = state_12647__$1;
(statearr_12662_12685[(2)] = inst_12639);

(statearr_12662_12685[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12648 === (8))){
var inst_12624 = (state_12647[(7)]);
var tmp12659 = inst_12624;
var inst_12624__$1 = tmp12659;
var state_12647__$1 = (function (){var statearr_12663 = state_12647;
(statearr_12663[(7)] = inst_12624__$1);

return statearr_12663;
})();
var statearr_12664_12686 = state_12647__$1;
(statearr_12664_12686[(2)] = null);

(statearr_12664_12686[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__10047__auto___12676,out))
;
return ((function (switch__9982__auto__,c__10047__auto___12676,out){
return (function() {
var cljs$core$async$state_machine__9983__auto__ = null;
var cljs$core$async$state_machine__9983__auto____0 = (function (){
var statearr_12668 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12668[(0)] = cljs$core$async$state_machine__9983__auto__);

(statearr_12668[(1)] = (1));

return statearr_12668;
});
var cljs$core$async$state_machine__9983__auto____1 = (function (state_12647){
while(true){
var ret_value__9984__auto__ = (function (){try{while(true){
var result__9985__auto__ = switch__9982__auto__.call(null,state_12647);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9985__auto__;
}
break;
}
}catch (e12669){if((e12669 instanceof Object)){
var ex__9986__auto__ = e12669;
var statearr_12670_12687 = state_12647;
(statearr_12670_12687[(5)] = ex__9986__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12647);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12669;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12688 = state_12647;
state_12647 = G__12688;
continue;
} else {
return ret_value__9984__auto__;
}
break;
}
});
cljs$core$async$state_machine__9983__auto__ = function(state_12647){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9983__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9983__auto____1.call(this,state_12647);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9983__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9983__auto____0;
cljs$core$async$state_machine__9983__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9983__auto____1;
return cljs$core$async$state_machine__9983__auto__;
})()
;})(switch__9982__auto__,c__10047__auto___12676,out))
})();
var state__10049__auto__ = (function (){var statearr_12671 = f__10048__auto__.call(null);
(statearr_12671[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10047__auto___12676);

return statearr_12671;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10049__auto__);
});})(c__10047__auto___12676,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args12689 = [];
var len__7933__auto___12759 = arguments.length;
var i__7934__auto___12760 = (0);
while(true){
if((i__7934__auto___12760 < len__7933__auto___12759)){
args12689.push((arguments[i__7934__auto___12760]));

var G__12761 = (i__7934__auto___12760 + (1));
i__7934__auto___12760 = G__12761;
continue;
} else {
}
break;
}

var G__12691 = args12689.length;
switch (G__12691) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args12689.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10047__auto___12763 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10047__auto___12763,out){
return (function (){
var f__10048__auto__ = (function (){var switch__9982__auto__ = ((function (c__10047__auto___12763,out){
return (function (state_12729){
var state_val_12730 = (state_12729[(1)]);
if((state_val_12730 === (7))){
var inst_12725 = (state_12729[(2)]);
var state_12729__$1 = state_12729;
var statearr_12731_12764 = state_12729__$1;
(statearr_12731_12764[(2)] = inst_12725);

(statearr_12731_12764[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12730 === (1))){
var inst_12692 = (new Array(n));
var inst_12693 = inst_12692;
var inst_12694 = (0);
var state_12729__$1 = (function (){var statearr_12732 = state_12729;
(statearr_12732[(7)] = inst_12693);

(statearr_12732[(8)] = inst_12694);

return statearr_12732;
})();
var statearr_12733_12765 = state_12729__$1;
(statearr_12733_12765[(2)] = null);

(statearr_12733_12765[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12730 === (4))){
var inst_12697 = (state_12729[(9)]);
var inst_12697__$1 = (state_12729[(2)]);
var inst_12698 = (inst_12697__$1 == null);
var inst_12699 = cljs.core.not.call(null,inst_12698);
var state_12729__$1 = (function (){var statearr_12734 = state_12729;
(statearr_12734[(9)] = inst_12697__$1);

return statearr_12734;
})();
if(inst_12699){
var statearr_12735_12766 = state_12729__$1;
(statearr_12735_12766[(1)] = (5));

} else {
var statearr_12736_12767 = state_12729__$1;
(statearr_12736_12767[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12730 === (15))){
var inst_12719 = (state_12729[(2)]);
var state_12729__$1 = state_12729;
var statearr_12737_12768 = state_12729__$1;
(statearr_12737_12768[(2)] = inst_12719);

(statearr_12737_12768[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12730 === (13))){
var state_12729__$1 = state_12729;
var statearr_12738_12769 = state_12729__$1;
(statearr_12738_12769[(2)] = null);

(statearr_12738_12769[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12730 === (6))){
var inst_12694 = (state_12729[(8)]);
var inst_12715 = (inst_12694 > (0));
var state_12729__$1 = state_12729;
if(cljs.core.truth_(inst_12715)){
var statearr_12739_12770 = state_12729__$1;
(statearr_12739_12770[(1)] = (12));

} else {
var statearr_12740_12771 = state_12729__$1;
(statearr_12740_12771[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12730 === (3))){
var inst_12727 = (state_12729[(2)]);
var state_12729__$1 = state_12729;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12729__$1,inst_12727);
} else {
if((state_val_12730 === (12))){
var inst_12693 = (state_12729[(7)]);
var inst_12717 = cljs.core.vec.call(null,inst_12693);
var state_12729__$1 = state_12729;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12729__$1,(15),out,inst_12717);
} else {
if((state_val_12730 === (2))){
var state_12729__$1 = state_12729;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12729__$1,(4),ch);
} else {
if((state_val_12730 === (11))){
var inst_12709 = (state_12729[(2)]);
var inst_12710 = (new Array(n));
var inst_12693 = inst_12710;
var inst_12694 = (0);
var state_12729__$1 = (function (){var statearr_12741 = state_12729;
(statearr_12741[(7)] = inst_12693);

(statearr_12741[(10)] = inst_12709);

(statearr_12741[(8)] = inst_12694);

return statearr_12741;
})();
var statearr_12742_12772 = state_12729__$1;
(statearr_12742_12772[(2)] = null);

(statearr_12742_12772[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12730 === (9))){
var inst_12693 = (state_12729[(7)]);
var inst_12707 = cljs.core.vec.call(null,inst_12693);
var state_12729__$1 = state_12729;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12729__$1,(11),out,inst_12707);
} else {
if((state_val_12730 === (5))){
var inst_12702 = (state_12729[(11)]);
var inst_12693 = (state_12729[(7)]);
var inst_12694 = (state_12729[(8)]);
var inst_12697 = (state_12729[(9)]);
var inst_12701 = (inst_12693[inst_12694] = inst_12697);
var inst_12702__$1 = (inst_12694 + (1));
var inst_12703 = (inst_12702__$1 < n);
var state_12729__$1 = (function (){var statearr_12743 = state_12729;
(statearr_12743[(11)] = inst_12702__$1);

(statearr_12743[(12)] = inst_12701);

return statearr_12743;
})();
if(cljs.core.truth_(inst_12703)){
var statearr_12744_12773 = state_12729__$1;
(statearr_12744_12773[(1)] = (8));

} else {
var statearr_12745_12774 = state_12729__$1;
(statearr_12745_12774[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12730 === (14))){
var inst_12722 = (state_12729[(2)]);
var inst_12723 = cljs.core.async.close_BANG_.call(null,out);
var state_12729__$1 = (function (){var statearr_12747 = state_12729;
(statearr_12747[(13)] = inst_12722);

return statearr_12747;
})();
var statearr_12748_12775 = state_12729__$1;
(statearr_12748_12775[(2)] = inst_12723);

(statearr_12748_12775[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12730 === (10))){
var inst_12713 = (state_12729[(2)]);
var state_12729__$1 = state_12729;
var statearr_12749_12776 = state_12729__$1;
(statearr_12749_12776[(2)] = inst_12713);

(statearr_12749_12776[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12730 === (8))){
var inst_12702 = (state_12729[(11)]);
var inst_12693 = (state_12729[(7)]);
var tmp12746 = inst_12693;
var inst_12693__$1 = tmp12746;
var inst_12694 = inst_12702;
var state_12729__$1 = (function (){var statearr_12750 = state_12729;
(statearr_12750[(7)] = inst_12693__$1);

(statearr_12750[(8)] = inst_12694);

return statearr_12750;
})();
var statearr_12751_12777 = state_12729__$1;
(statearr_12751_12777[(2)] = null);

(statearr_12751_12777[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10047__auto___12763,out))
;
return ((function (switch__9982__auto__,c__10047__auto___12763,out){
return (function() {
var cljs$core$async$state_machine__9983__auto__ = null;
var cljs$core$async$state_machine__9983__auto____0 = (function (){
var statearr_12755 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12755[(0)] = cljs$core$async$state_machine__9983__auto__);

(statearr_12755[(1)] = (1));

return statearr_12755;
});
var cljs$core$async$state_machine__9983__auto____1 = (function (state_12729){
while(true){
var ret_value__9984__auto__ = (function (){try{while(true){
var result__9985__auto__ = switch__9982__auto__.call(null,state_12729);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9985__auto__;
}
break;
}
}catch (e12756){if((e12756 instanceof Object)){
var ex__9986__auto__ = e12756;
var statearr_12757_12778 = state_12729;
(statearr_12757_12778[(5)] = ex__9986__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12729);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12756;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12779 = state_12729;
state_12729 = G__12779;
continue;
} else {
return ret_value__9984__auto__;
}
break;
}
});
cljs$core$async$state_machine__9983__auto__ = function(state_12729){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9983__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9983__auto____1.call(this,state_12729);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9983__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9983__auto____0;
cljs$core$async$state_machine__9983__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9983__auto____1;
return cljs$core$async$state_machine__9983__auto__;
})()
;})(switch__9982__auto__,c__10047__auto___12763,out))
})();
var state__10049__auto__ = (function (){var statearr_12758 = f__10048__auto__.call(null);
(statearr_12758[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10047__auto___12763);

return statearr_12758;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10049__auto__);
});})(c__10047__auto___12763,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args12780 = [];
var len__7933__auto___12854 = arguments.length;
var i__7934__auto___12855 = (0);
while(true){
if((i__7934__auto___12855 < len__7933__auto___12854)){
args12780.push((arguments[i__7934__auto___12855]));

var G__12856 = (i__7934__auto___12855 + (1));
i__7934__auto___12855 = G__12856;
continue;
} else {
}
break;
}

var G__12782 = args12780.length;
switch (G__12782) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args12780.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10047__auto___12858 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10047__auto___12858,out){
return (function (){
var f__10048__auto__ = (function (){var switch__9982__auto__ = ((function (c__10047__auto___12858,out){
return (function (state_12824){
var state_val_12825 = (state_12824[(1)]);
if((state_val_12825 === (7))){
var inst_12820 = (state_12824[(2)]);
var state_12824__$1 = state_12824;
var statearr_12826_12859 = state_12824__$1;
(statearr_12826_12859[(2)] = inst_12820);

(statearr_12826_12859[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12825 === (1))){
var inst_12783 = [];
var inst_12784 = inst_12783;
var inst_12785 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_12824__$1 = (function (){var statearr_12827 = state_12824;
(statearr_12827[(7)] = inst_12784);

(statearr_12827[(8)] = inst_12785);

return statearr_12827;
})();
var statearr_12828_12860 = state_12824__$1;
(statearr_12828_12860[(2)] = null);

(statearr_12828_12860[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12825 === (4))){
var inst_12788 = (state_12824[(9)]);
var inst_12788__$1 = (state_12824[(2)]);
var inst_12789 = (inst_12788__$1 == null);
var inst_12790 = cljs.core.not.call(null,inst_12789);
var state_12824__$1 = (function (){var statearr_12829 = state_12824;
(statearr_12829[(9)] = inst_12788__$1);

return statearr_12829;
})();
if(inst_12790){
var statearr_12830_12861 = state_12824__$1;
(statearr_12830_12861[(1)] = (5));

} else {
var statearr_12831_12862 = state_12824__$1;
(statearr_12831_12862[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12825 === (15))){
var inst_12814 = (state_12824[(2)]);
var state_12824__$1 = state_12824;
var statearr_12832_12863 = state_12824__$1;
(statearr_12832_12863[(2)] = inst_12814);

(statearr_12832_12863[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12825 === (13))){
var state_12824__$1 = state_12824;
var statearr_12833_12864 = state_12824__$1;
(statearr_12833_12864[(2)] = null);

(statearr_12833_12864[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12825 === (6))){
var inst_12784 = (state_12824[(7)]);
var inst_12809 = inst_12784.length;
var inst_12810 = (inst_12809 > (0));
var state_12824__$1 = state_12824;
if(cljs.core.truth_(inst_12810)){
var statearr_12834_12865 = state_12824__$1;
(statearr_12834_12865[(1)] = (12));

} else {
var statearr_12835_12866 = state_12824__$1;
(statearr_12835_12866[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12825 === (3))){
var inst_12822 = (state_12824[(2)]);
var state_12824__$1 = state_12824;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12824__$1,inst_12822);
} else {
if((state_val_12825 === (12))){
var inst_12784 = (state_12824[(7)]);
var inst_12812 = cljs.core.vec.call(null,inst_12784);
var state_12824__$1 = state_12824;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12824__$1,(15),out,inst_12812);
} else {
if((state_val_12825 === (2))){
var state_12824__$1 = state_12824;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12824__$1,(4),ch);
} else {
if((state_val_12825 === (11))){
var inst_12792 = (state_12824[(10)]);
var inst_12788 = (state_12824[(9)]);
var inst_12802 = (state_12824[(2)]);
var inst_12803 = [];
var inst_12804 = inst_12803.push(inst_12788);
var inst_12784 = inst_12803;
var inst_12785 = inst_12792;
var state_12824__$1 = (function (){var statearr_12836 = state_12824;
(statearr_12836[(7)] = inst_12784);

(statearr_12836[(11)] = inst_12804);

(statearr_12836[(12)] = inst_12802);

(statearr_12836[(8)] = inst_12785);

return statearr_12836;
})();
var statearr_12837_12867 = state_12824__$1;
(statearr_12837_12867[(2)] = null);

(statearr_12837_12867[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12825 === (9))){
var inst_12784 = (state_12824[(7)]);
var inst_12800 = cljs.core.vec.call(null,inst_12784);
var state_12824__$1 = state_12824;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12824__$1,(11),out,inst_12800);
} else {
if((state_val_12825 === (5))){
var inst_12792 = (state_12824[(10)]);
var inst_12788 = (state_12824[(9)]);
var inst_12785 = (state_12824[(8)]);
var inst_12792__$1 = f.call(null,inst_12788);
var inst_12793 = cljs.core._EQ_.call(null,inst_12792__$1,inst_12785);
var inst_12794 = cljs.core.keyword_identical_QMARK_.call(null,inst_12785,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_12795 = (inst_12793) || (inst_12794);
var state_12824__$1 = (function (){var statearr_12838 = state_12824;
(statearr_12838[(10)] = inst_12792__$1);

return statearr_12838;
})();
if(cljs.core.truth_(inst_12795)){
var statearr_12839_12868 = state_12824__$1;
(statearr_12839_12868[(1)] = (8));

} else {
var statearr_12840_12869 = state_12824__$1;
(statearr_12840_12869[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12825 === (14))){
var inst_12817 = (state_12824[(2)]);
var inst_12818 = cljs.core.async.close_BANG_.call(null,out);
var state_12824__$1 = (function (){var statearr_12842 = state_12824;
(statearr_12842[(13)] = inst_12817);

return statearr_12842;
})();
var statearr_12843_12870 = state_12824__$1;
(statearr_12843_12870[(2)] = inst_12818);

(statearr_12843_12870[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12825 === (10))){
var inst_12807 = (state_12824[(2)]);
var state_12824__$1 = state_12824;
var statearr_12844_12871 = state_12824__$1;
(statearr_12844_12871[(2)] = inst_12807);

(statearr_12844_12871[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12825 === (8))){
var inst_12792 = (state_12824[(10)]);
var inst_12784 = (state_12824[(7)]);
var inst_12788 = (state_12824[(9)]);
var inst_12797 = inst_12784.push(inst_12788);
var tmp12841 = inst_12784;
var inst_12784__$1 = tmp12841;
var inst_12785 = inst_12792;
var state_12824__$1 = (function (){var statearr_12845 = state_12824;
(statearr_12845[(14)] = inst_12797);

(statearr_12845[(7)] = inst_12784__$1);

(statearr_12845[(8)] = inst_12785);

return statearr_12845;
})();
var statearr_12846_12872 = state_12824__$1;
(statearr_12846_12872[(2)] = null);

(statearr_12846_12872[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10047__auto___12858,out))
;
return ((function (switch__9982__auto__,c__10047__auto___12858,out){
return (function() {
var cljs$core$async$state_machine__9983__auto__ = null;
var cljs$core$async$state_machine__9983__auto____0 = (function (){
var statearr_12850 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12850[(0)] = cljs$core$async$state_machine__9983__auto__);

(statearr_12850[(1)] = (1));

return statearr_12850;
});
var cljs$core$async$state_machine__9983__auto____1 = (function (state_12824){
while(true){
var ret_value__9984__auto__ = (function (){try{while(true){
var result__9985__auto__ = switch__9982__auto__.call(null,state_12824);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9985__auto__;
}
break;
}
}catch (e12851){if((e12851 instanceof Object)){
var ex__9986__auto__ = e12851;
var statearr_12852_12873 = state_12824;
(statearr_12852_12873[(5)] = ex__9986__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12824);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12851;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12874 = state_12824;
state_12824 = G__12874;
continue;
} else {
return ret_value__9984__auto__;
}
break;
}
});
cljs$core$async$state_machine__9983__auto__ = function(state_12824){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9983__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9983__auto____1.call(this,state_12824);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9983__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9983__auto____0;
cljs$core$async$state_machine__9983__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9983__auto____1;
return cljs$core$async$state_machine__9983__auto__;
})()
;})(switch__9982__auto__,c__10047__auto___12858,out))
})();
var state__10049__auto__ = (function (){var statearr_12853 = f__10048__auto__.call(null);
(statearr_12853[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10047__auto___12858);

return statearr_12853;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10049__auto__);
});})(c__10047__auto___12858,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map