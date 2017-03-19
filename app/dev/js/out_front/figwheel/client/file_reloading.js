// Compiled by ClojureScript 1.9.495 {:elide-asserts true}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__6824__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__6824__auto__){
return or__6824__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__6824__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__6824__auto__)){
return or__6824__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__14689_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__14689_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__14694 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__14695 = null;
var count__14696 = (0);
var i__14697 = (0);
while(true){
if((i__14697 < count__14696)){
var n = cljs.core._nth.call(null,chunk__14695,i__14697);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__14698 = seq__14694;
var G__14699 = chunk__14695;
var G__14700 = count__14696;
var G__14701 = (i__14697 + (1));
seq__14694 = G__14698;
chunk__14695 = G__14699;
count__14696 = G__14700;
i__14697 = G__14701;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__14694);
if(temp__4657__auto__){
var seq__14694__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14694__$1)){
var c__7643__auto__ = cljs.core.chunk_first.call(null,seq__14694__$1);
var G__14702 = cljs.core.chunk_rest.call(null,seq__14694__$1);
var G__14703 = c__7643__auto__;
var G__14704 = cljs.core.count.call(null,c__7643__auto__);
var G__14705 = (0);
seq__14694 = G__14702;
chunk__14695 = G__14703;
count__14696 = G__14704;
i__14697 = G__14705;
continue;
} else {
var n = cljs.core.first.call(null,seq__14694__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__14706 = cljs.core.next.call(null,seq__14694__$1);
var G__14707 = null;
var G__14708 = (0);
var G__14709 = (0);
seq__14694 = G__14706;
chunk__14695 = G__14707;
count__14696 = G__14708;
i__14697 = G__14709;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__14760_14771 = cljs.core.seq.call(null,deps);
var chunk__14761_14772 = null;
var count__14762_14773 = (0);
var i__14763_14774 = (0);
while(true){
if((i__14763_14774 < count__14762_14773)){
var dep_14775 = cljs.core._nth.call(null,chunk__14761_14772,i__14763_14774);
topo_sort_helper_STAR_.call(null,dep_14775,(depth + (1)),state);

var G__14776 = seq__14760_14771;
var G__14777 = chunk__14761_14772;
var G__14778 = count__14762_14773;
var G__14779 = (i__14763_14774 + (1));
seq__14760_14771 = G__14776;
chunk__14761_14772 = G__14777;
count__14762_14773 = G__14778;
i__14763_14774 = G__14779;
continue;
} else {
var temp__4657__auto___14780 = cljs.core.seq.call(null,seq__14760_14771);
if(temp__4657__auto___14780){
var seq__14760_14781__$1 = temp__4657__auto___14780;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14760_14781__$1)){
var c__7643__auto___14782 = cljs.core.chunk_first.call(null,seq__14760_14781__$1);
var G__14783 = cljs.core.chunk_rest.call(null,seq__14760_14781__$1);
var G__14784 = c__7643__auto___14782;
var G__14785 = cljs.core.count.call(null,c__7643__auto___14782);
var G__14786 = (0);
seq__14760_14771 = G__14783;
chunk__14761_14772 = G__14784;
count__14762_14773 = G__14785;
i__14763_14774 = G__14786;
continue;
} else {
var dep_14787 = cljs.core.first.call(null,seq__14760_14781__$1);
topo_sort_helper_STAR_.call(null,dep_14787,(depth + (1)),state);

var G__14788 = cljs.core.next.call(null,seq__14760_14781__$1);
var G__14789 = null;
var G__14790 = (0);
var G__14791 = (0);
seq__14760_14771 = G__14788;
chunk__14761_14772 = G__14789;
count__14762_14773 = G__14790;
i__14763_14774 = G__14791;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__14764){
var vec__14768 = p__14764;
var seq__14769 = cljs.core.seq.call(null,vec__14768);
var first__14770 = cljs.core.first.call(null,seq__14769);
var seq__14769__$1 = cljs.core.next.call(null,seq__14769);
var x = first__14770;
var xs = seq__14769__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__14768,seq__14769,first__14770,seq__14769__$1,x,xs,get_deps__$1){
return (function (p1__14710_SHARP_){
return clojure.set.difference.call(null,p1__14710_SHARP_,x);
});})(vec__14768,seq__14769,first__14770,seq__14769__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__14804 = cljs.core.seq.call(null,provides);
var chunk__14805 = null;
var count__14806 = (0);
var i__14807 = (0);
while(true){
if((i__14807 < count__14806)){
var prov = cljs.core._nth.call(null,chunk__14805,i__14807);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__14808_14816 = cljs.core.seq.call(null,requires);
var chunk__14809_14817 = null;
var count__14810_14818 = (0);
var i__14811_14819 = (0);
while(true){
if((i__14811_14819 < count__14810_14818)){
var req_14820 = cljs.core._nth.call(null,chunk__14809_14817,i__14811_14819);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_14820,prov);

var G__14821 = seq__14808_14816;
var G__14822 = chunk__14809_14817;
var G__14823 = count__14810_14818;
var G__14824 = (i__14811_14819 + (1));
seq__14808_14816 = G__14821;
chunk__14809_14817 = G__14822;
count__14810_14818 = G__14823;
i__14811_14819 = G__14824;
continue;
} else {
var temp__4657__auto___14825 = cljs.core.seq.call(null,seq__14808_14816);
if(temp__4657__auto___14825){
var seq__14808_14826__$1 = temp__4657__auto___14825;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14808_14826__$1)){
var c__7643__auto___14827 = cljs.core.chunk_first.call(null,seq__14808_14826__$1);
var G__14828 = cljs.core.chunk_rest.call(null,seq__14808_14826__$1);
var G__14829 = c__7643__auto___14827;
var G__14830 = cljs.core.count.call(null,c__7643__auto___14827);
var G__14831 = (0);
seq__14808_14816 = G__14828;
chunk__14809_14817 = G__14829;
count__14810_14818 = G__14830;
i__14811_14819 = G__14831;
continue;
} else {
var req_14832 = cljs.core.first.call(null,seq__14808_14826__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_14832,prov);

var G__14833 = cljs.core.next.call(null,seq__14808_14826__$1);
var G__14834 = null;
var G__14835 = (0);
var G__14836 = (0);
seq__14808_14816 = G__14833;
chunk__14809_14817 = G__14834;
count__14810_14818 = G__14835;
i__14811_14819 = G__14836;
continue;
}
} else {
}
}
break;
}

var G__14837 = seq__14804;
var G__14838 = chunk__14805;
var G__14839 = count__14806;
var G__14840 = (i__14807 + (1));
seq__14804 = G__14837;
chunk__14805 = G__14838;
count__14806 = G__14839;
i__14807 = G__14840;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__14804);
if(temp__4657__auto__){
var seq__14804__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14804__$1)){
var c__7643__auto__ = cljs.core.chunk_first.call(null,seq__14804__$1);
var G__14841 = cljs.core.chunk_rest.call(null,seq__14804__$1);
var G__14842 = c__7643__auto__;
var G__14843 = cljs.core.count.call(null,c__7643__auto__);
var G__14844 = (0);
seq__14804 = G__14841;
chunk__14805 = G__14842;
count__14806 = G__14843;
i__14807 = G__14844;
continue;
} else {
var prov = cljs.core.first.call(null,seq__14804__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__14812_14845 = cljs.core.seq.call(null,requires);
var chunk__14813_14846 = null;
var count__14814_14847 = (0);
var i__14815_14848 = (0);
while(true){
if((i__14815_14848 < count__14814_14847)){
var req_14849 = cljs.core._nth.call(null,chunk__14813_14846,i__14815_14848);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_14849,prov);

var G__14850 = seq__14812_14845;
var G__14851 = chunk__14813_14846;
var G__14852 = count__14814_14847;
var G__14853 = (i__14815_14848 + (1));
seq__14812_14845 = G__14850;
chunk__14813_14846 = G__14851;
count__14814_14847 = G__14852;
i__14815_14848 = G__14853;
continue;
} else {
var temp__4657__auto___14854__$1 = cljs.core.seq.call(null,seq__14812_14845);
if(temp__4657__auto___14854__$1){
var seq__14812_14855__$1 = temp__4657__auto___14854__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14812_14855__$1)){
var c__7643__auto___14856 = cljs.core.chunk_first.call(null,seq__14812_14855__$1);
var G__14857 = cljs.core.chunk_rest.call(null,seq__14812_14855__$1);
var G__14858 = c__7643__auto___14856;
var G__14859 = cljs.core.count.call(null,c__7643__auto___14856);
var G__14860 = (0);
seq__14812_14845 = G__14857;
chunk__14813_14846 = G__14858;
count__14814_14847 = G__14859;
i__14815_14848 = G__14860;
continue;
} else {
var req_14861 = cljs.core.first.call(null,seq__14812_14855__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_14861,prov);

var G__14862 = cljs.core.next.call(null,seq__14812_14855__$1);
var G__14863 = null;
var G__14864 = (0);
var G__14865 = (0);
seq__14812_14845 = G__14862;
chunk__14813_14846 = G__14863;
count__14814_14847 = G__14864;
i__14815_14848 = G__14865;
continue;
}
} else {
}
}
break;
}

var G__14866 = cljs.core.next.call(null,seq__14804__$1);
var G__14867 = null;
var G__14868 = (0);
var G__14869 = (0);
seq__14804 = G__14866;
chunk__14805 = G__14867;
count__14806 = G__14868;
i__14807 = G__14869;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__14874_14878 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__14875_14879 = null;
var count__14876_14880 = (0);
var i__14877_14881 = (0);
while(true){
if((i__14877_14881 < count__14876_14880)){
var ns_14882 = cljs.core._nth.call(null,chunk__14875_14879,i__14877_14881);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_14882);

var G__14883 = seq__14874_14878;
var G__14884 = chunk__14875_14879;
var G__14885 = count__14876_14880;
var G__14886 = (i__14877_14881 + (1));
seq__14874_14878 = G__14883;
chunk__14875_14879 = G__14884;
count__14876_14880 = G__14885;
i__14877_14881 = G__14886;
continue;
} else {
var temp__4657__auto___14887 = cljs.core.seq.call(null,seq__14874_14878);
if(temp__4657__auto___14887){
var seq__14874_14888__$1 = temp__4657__auto___14887;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14874_14888__$1)){
var c__7643__auto___14889 = cljs.core.chunk_first.call(null,seq__14874_14888__$1);
var G__14890 = cljs.core.chunk_rest.call(null,seq__14874_14888__$1);
var G__14891 = c__7643__auto___14889;
var G__14892 = cljs.core.count.call(null,c__7643__auto___14889);
var G__14893 = (0);
seq__14874_14878 = G__14890;
chunk__14875_14879 = G__14891;
count__14876_14880 = G__14892;
i__14877_14881 = G__14893;
continue;
} else {
var ns_14894 = cljs.core.first.call(null,seq__14874_14888__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_14894);

var G__14895 = cljs.core.next.call(null,seq__14874_14888__$1);
var G__14896 = null;
var G__14897 = (0);
var G__14898 = (0);
seq__14874_14878 = G__14895;
chunk__14875_14879 = G__14896;
count__14876_14880 = G__14897;
i__14877_14881 = G__14898;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__6824__auto__ = goog.require__;
if(cljs.core.truth_(or__6824__auto__)){
return or__6824__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__14899__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__14899 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14900__i = 0, G__14900__a = new Array(arguments.length -  0);
while (G__14900__i < G__14900__a.length) {G__14900__a[G__14900__i] = arguments[G__14900__i + 0]; ++G__14900__i;}
  args = new cljs.core.IndexedSeq(G__14900__a,0);
} 
return G__14899__delegate.call(this,args);};
G__14899.cljs$lang$maxFixedArity = 0;
G__14899.cljs$lang$applyTo = (function (arglist__14901){
var args = cljs.core.seq(arglist__14901);
return G__14899__delegate(args);
});
G__14899.cljs$core$IFn$_invoke$arity$variadic = G__14899__delegate;
return G__14899;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__14902 = cljs.core._EQ_;
var expr__14903 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__14902.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__14903))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__14902,expr__14903){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__14902,expr__14903))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__14902,expr__14903){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e14905){if((e14905 instanceof Error)){
var e = e14905;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e14905;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__14902,expr__14903))
} else {
if(cljs.core.truth_(pred__14902.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__14903))){
return ((function (pred__14902,expr__14903){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__14902,expr__14903){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__14902,expr__14903))
);

return deferred.addErrback(((function (deferred,pred__14902,expr__14903){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__14902,expr__14903))
);
});
;})(pred__14902,expr__14903))
} else {
if(cljs.core.truth_(pred__14902.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__14903))){
return ((function (pred__14902,expr__14903){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e14906){if((e14906 instanceof Error)){
var e = e14906;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e14906;

}
}})());
});
;})(pred__14902,expr__14903))
} else {
return ((function (pred__14902,expr__14903){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__14902,expr__14903))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__14907,callback){
var map__14910 = p__14907;
var map__14910__$1 = ((((!((map__14910 == null)))?((((map__14910.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14910.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14910):map__14910);
var file_msg = map__14910__$1;
var request_url = cljs.core.get.call(null,map__14910__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Attempting to load "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__14910,map__14910__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Successfully loaded "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__14910,map__14910__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__10047__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10047__auto__){
return (function (){
var f__10048__auto__ = (function (){var switch__9982__auto__ = ((function (c__10047__auto__){
return (function (state_14934){
var state_val_14935 = (state_14934[(1)]);
if((state_val_14935 === (7))){
var inst_14930 = (state_14934[(2)]);
var state_14934__$1 = state_14934;
var statearr_14936_14956 = state_14934__$1;
(statearr_14936_14956[(2)] = inst_14930);

(statearr_14936_14956[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14935 === (1))){
var state_14934__$1 = state_14934;
var statearr_14937_14957 = state_14934__$1;
(statearr_14937_14957[(2)] = null);

(statearr_14937_14957[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14935 === (4))){
var inst_14914 = (state_14934[(7)]);
var inst_14914__$1 = (state_14934[(2)]);
var state_14934__$1 = (function (){var statearr_14938 = state_14934;
(statearr_14938[(7)] = inst_14914__$1);

return statearr_14938;
})();
if(cljs.core.truth_(inst_14914__$1)){
var statearr_14939_14958 = state_14934__$1;
(statearr_14939_14958[(1)] = (5));

} else {
var statearr_14940_14959 = state_14934__$1;
(statearr_14940_14959[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14935 === (6))){
var state_14934__$1 = state_14934;
var statearr_14941_14960 = state_14934__$1;
(statearr_14941_14960[(2)] = null);

(statearr_14941_14960[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14935 === (3))){
var inst_14932 = (state_14934[(2)]);
var state_14934__$1 = state_14934;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14934__$1,inst_14932);
} else {
if((state_val_14935 === (2))){
var state_14934__$1 = state_14934;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14934__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_14935 === (11))){
var inst_14926 = (state_14934[(2)]);
var state_14934__$1 = (function (){var statearr_14942 = state_14934;
(statearr_14942[(8)] = inst_14926);

return statearr_14942;
})();
var statearr_14943_14961 = state_14934__$1;
(statearr_14943_14961[(2)] = null);

(statearr_14943_14961[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14935 === (9))){
var inst_14918 = (state_14934[(9)]);
var inst_14920 = (state_14934[(10)]);
var inst_14922 = inst_14920.call(null,inst_14918);
var state_14934__$1 = state_14934;
var statearr_14944_14962 = state_14934__$1;
(statearr_14944_14962[(2)] = inst_14922);

(statearr_14944_14962[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14935 === (5))){
var inst_14914 = (state_14934[(7)]);
var inst_14916 = figwheel.client.file_reloading.blocking_load.call(null,inst_14914);
var state_14934__$1 = state_14934;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14934__$1,(8),inst_14916);
} else {
if((state_val_14935 === (10))){
var inst_14918 = (state_14934[(9)]);
var inst_14924 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_14918);
var state_14934__$1 = state_14934;
var statearr_14945_14963 = state_14934__$1;
(statearr_14945_14963[(2)] = inst_14924);

(statearr_14945_14963[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14935 === (8))){
var inst_14914 = (state_14934[(7)]);
var inst_14920 = (state_14934[(10)]);
var inst_14918 = (state_14934[(2)]);
var inst_14919 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_14920__$1 = cljs.core.get.call(null,inst_14919,inst_14914);
var state_14934__$1 = (function (){var statearr_14946 = state_14934;
(statearr_14946[(9)] = inst_14918);

(statearr_14946[(10)] = inst_14920__$1);

return statearr_14946;
})();
if(cljs.core.truth_(inst_14920__$1)){
var statearr_14947_14964 = state_14934__$1;
(statearr_14947_14964[(1)] = (9));

} else {
var statearr_14948_14965 = state_14934__$1;
(statearr_14948_14965[(1)] = (10));

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
});})(c__10047__auto__))
;
return ((function (switch__9982__auto__,c__10047__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__9983__auto__ = null;
var figwheel$client$file_reloading$state_machine__9983__auto____0 = (function (){
var statearr_14952 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14952[(0)] = figwheel$client$file_reloading$state_machine__9983__auto__);

(statearr_14952[(1)] = (1));

return statearr_14952;
});
var figwheel$client$file_reloading$state_machine__9983__auto____1 = (function (state_14934){
while(true){
var ret_value__9984__auto__ = (function (){try{while(true){
var result__9985__auto__ = switch__9982__auto__.call(null,state_14934);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9985__auto__;
}
break;
}
}catch (e14953){if((e14953 instanceof Object)){
var ex__9986__auto__ = e14953;
var statearr_14954_14966 = state_14934;
(statearr_14954_14966[(5)] = ex__9986__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14934);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14953;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14967 = state_14934;
state_14934 = G__14967;
continue;
} else {
return ret_value__9984__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__9983__auto__ = function(state_14934){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__9983__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__9983__auto____1.call(this,state_14934);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__9983__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__9983__auto____0;
figwheel$client$file_reloading$state_machine__9983__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__9983__auto____1;
return figwheel$client$file_reloading$state_machine__9983__auto__;
})()
;})(switch__9982__auto__,c__10047__auto__))
})();
var state__10049__auto__ = (function (){var statearr_14955 = f__10048__auto__.call(null);
(statearr_14955[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10047__auto__);

return statearr_14955;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10049__auto__);
});})(c__10047__auto__))
);

return c__10047__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__14968,callback){
var map__14971 = p__14968;
var map__14971__$1 = ((((!((map__14971 == null)))?((((map__14971.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14971.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14971):map__14971);
var file_msg = map__14971__$1;
var namespace = cljs.core.get.call(null,map__14971__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__14971,map__14971__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__14971,map__14971__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__14973){
var map__14976 = p__14973;
var map__14976__$1 = ((((!((map__14976 == null)))?((((map__14976.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14976.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14976):map__14976);
var file_msg = map__14976__$1;
var namespace = cljs.core.get.call(null,map__14976__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__14978){
var map__14981 = p__14978;
var map__14981__$1 = ((((!((map__14981 == null)))?((((map__14981.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14981.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14981):map__14981);
var file_msg = map__14981__$1;
var namespace = cljs.core.get.call(null,map__14981__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__6812__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__6812__auto__){
var or__6824__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__6824__auto__)){
return or__6824__auto__;
} else {
var or__6824__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__6824__auto____$1)){
return or__6824__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__6812__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__14983,callback){
var map__14986 = p__14983;
var map__14986__$1 = ((((!((map__14986 == null)))?((((map__14986.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14986.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14986):map__14986);
var file_msg = map__14986__$1;
var request_url = cljs.core.get.call(null,map__14986__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__14986__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Not trying to load file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__10047__auto___15090 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10047__auto___15090,out){
return (function (){
var f__10048__auto__ = (function (){var switch__9982__auto__ = ((function (c__10047__auto___15090,out){
return (function (state_15072){
var state_val_15073 = (state_15072[(1)]);
if((state_val_15073 === (1))){
var inst_15046 = cljs.core.seq.call(null,files);
var inst_15047 = cljs.core.first.call(null,inst_15046);
var inst_15048 = cljs.core.next.call(null,inst_15046);
var inst_15049 = files;
var state_15072__$1 = (function (){var statearr_15074 = state_15072;
(statearr_15074[(7)] = inst_15047);

(statearr_15074[(8)] = inst_15049);

(statearr_15074[(9)] = inst_15048);

return statearr_15074;
})();
var statearr_15075_15091 = state_15072__$1;
(statearr_15075_15091[(2)] = null);

(statearr_15075_15091[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15073 === (2))){
var inst_15049 = (state_15072[(8)]);
var inst_15055 = (state_15072[(10)]);
var inst_15054 = cljs.core.seq.call(null,inst_15049);
var inst_15055__$1 = cljs.core.first.call(null,inst_15054);
var inst_15056 = cljs.core.next.call(null,inst_15054);
var inst_15057 = (inst_15055__$1 == null);
var inst_15058 = cljs.core.not.call(null,inst_15057);
var state_15072__$1 = (function (){var statearr_15076 = state_15072;
(statearr_15076[(11)] = inst_15056);

(statearr_15076[(10)] = inst_15055__$1);

return statearr_15076;
})();
if(inst_15058){
var statearr_15077_15092 = state_15072__$1;
(statearr_15077_15092[(1)] = (4));

} else {
var statearr_15078_15093 = state_15072__$1;
(statearr_15078_15093[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15073 === (3))){
var inst_15070 = (state_15072[(2)]);
var state_15072__$1 = state_15072;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15072__$1,inst_15070);
} else {
if((state_val_15073 === (4))){
var inst_15055 = (state_15072[(10)]);
var inst_15060 = figwheel.client.file_reloading.reload_js_file.call(null,inst_15055);
var state_15072__$1 = state_15072;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15072__$1,(7),inst_15060);
} else {
if((state_val_15073 === (5))){
var inst_15066 = cljs.core.async.close_BANG_.call(null,out);
var state_15072__$1 = state_15072;
var statearr_15079_15094 = state_15072__$1;
(statearr_15079_15094[(2)] = inst_15066);

(statearr_15079_15094[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15073 === (6))){
var inst_15068 = (state_15072[(2)]);
var state_15072__$1 = state_15072;
var statearr_15080_15095 = state_15072__$1;
(statearr_15080_15095[(2)] = inst_15068);

(statearr_15080_15095[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15073 === (7))){
var inst_15056 = (state_15072[(11)]);
var inst_15062 = (state_15072[(2)]);
var inst_15063 = cljs.core.async.put_BANG_.call(null,out,inst_15062);
var inst_15049 = inst_15056;
var state_15072__$1 = (function (){var statearr_15081 = state_15072;
(statearr_15081[(8)] = inst_15049);

(statearr_15081[(12)] = inst_15063);

return statearr_15081;
})();
var statearr_15082_15096 = state_15072__$1;
(statearr_15082_15096[(2)] = null);

(statearr_15082_15096[(1)] = (2));


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
});})(c__10047__auto___15090,out))
;
return ((function (switch__9982__auto__,c__10047__auto___15090,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__9983__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__9983__auto____0 = (function (){
var statearr_15086 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15086[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__9983__auto__);

(statearr_15086[(1)] = (1));

return statearr_15086;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__9983__auto____1 = (function (state_15072){
while(true){
var ret_value__9984__auto__ = (function (){try{while(true){
var result__9985__auto__ = switch__9982__auto__.call(null,state_15072);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9985__auto__;
}
break;
}
}catch (e15087){if((e15087 instanceof Object)){
var ex__9986__auto__ = e15087;
var statearr_15088_15097 = state_15072;
(statearr_15088_15097[(5)] = ex__9986__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15072);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15087;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15098 = state_15072;
state_15072 = G__15098;
continue;
} else {
return ret_value__9984__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__9983__auto__ = function(state_15072){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__9983__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__9983__auto____1.call(this,state_15072);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__9983__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__9983__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__9983__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__9983__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__9983__auto__;
})()
;})(switch__9982__auto__,c__10047__auto___15090,out))
})();
var state__10049__auto__ = (function (){var statearr_15089 = f__10048__auto__.call(null);
(statearr_15089[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10047__auto___15090);

return statearr_15089;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10049__auto__);
});})(c__10047__auto___15090,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__15099,opts){
var map__15103 = p__15099;
var map__15103__$1 = ((((!((map__15103 == null)))?((((map__15103.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15103.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15103):map__15103);
var eval_body = cljs.core.get.call(null,map__15103__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__15103__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__6812__auto__ = eval_body;
if(cljs.core.truth_(and__6812__auto__)){
return typeof eval_body === 'string';
} else {
return and__6812__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Evaling file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e15105){var e = e15105;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unable to evaluate "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__15106_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__15106_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__15115){
var vec__15116 = p__15115;
var k = cljs.core.nth.call(null,vec__15116,(0),null);
var v = cljs.core.nth.call(null,vec__15116,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__15119){
var vec__15120 = p__15119;
var k = cljs.core.nth.call(null,vec__15120,(0),null);
var v = cljs.core.nth.call(null,vec__15120,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__15126,p__15127){
var map__15375 = p__15126;
var map__15375__$1 = ((((!((map__15375 == null)))?((((map__15375.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15375.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15375):map__15375);
var opts = map__15375__$1;
var before_jsload = cljs.core.get.call(null,map__15375__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__15375__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__15375__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__15376 = p__15127;
var map__15376__$1 = ((((!((map__15376 == null)))?((((map__15376.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15376.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15376):map__15376);
var msg = map__15376__$1;
var files = cljs.core.get.call(null,map__15376__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__15376__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__15376__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__10047__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10047__auto__,map__15375,map__15375__$1,opts,before_jsload,on_jsload,reload_dependents,map__15376,map__15376__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__10048__auto__ = (function (){var switch__9982__auto__ = ((function (c__10047__auto__,map__15375,map__15375__$1,opts,before_jsload,on_jsload,reload_dependents,map__15376,map__15376__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_15530){
var state_val_15531 = (state_15530[(1)]);
if((state_val_15531 === (7))){
var inst_15392 = (state_15530[(7)]);
var inst_15390 = (state_15530[(8)]);
var inst_15391 = (state_15530[(9)]);
var inst_15393 = (state_15530[(10)]);
var inst_15398 = cljs.core._nth.call(null,inst_15391,inst_15393);
var inst_15399 = figwheel.client.file_reloading.eval_body.call(null,inst_15398,opts);
var inst_15400 = (inst_15393 + (1));
var tmp15532 = inst_15392;
var tmp15533 = inst_15390;
var tmp15534 = inst_15391;
var inst_15390__$1 = tmp15533;
var inst_15391__$1 = tmp15534;
var inst_15392__$1 = tmp15532;
var inst_15393__$1 = inst_15400;
var state_15530__$1 = (function (){var statearr_15535 = state_15530;
(statearr_15535[(7)] = inst_15392__$1);

(statearr_15535[(8)] = inst_15390__$1);

(statearr_15535[(11)] = inst_15399);

(statearr_15535[(9)] = inst_15391__$1);

(statearr_15535[(10)] = inst_15393__$1);

return statearr_15535;
})();
var statearr_15536_15622 = state_15530__$1;
(statearr_15536_15622[(2)] = null);

(statearr_15536_15622[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15531 === (20))){
var inst_15433 = (state_15530[(12)]);
var inst_15441 = figwheel.client.file_reloading.sort_files.call(null,inst_15433);
var state_15530__$1 = state_15530;
var statearr_15537_15623 = state_15530__$1;
(statearr_15537_15623[(2)] = inst_15441);

(statearr_15537_15623[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15531 === (27))){
var state_15530__$1 = state_15530;
var statearr_15538_15624 = state_15530__$1;
(statearr_15538_15624[(2)] = null);

(statearr_15538_15624[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15531 === (1))){
var inst_15382 = (state_15530[(13)]);
var inst_15379 = before_jsload.call(null,files);
var inst_15380 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_15381 = (function (){return ((function (inst_15382,inst_15379,inst_15380,state_val_15531,c__10047__auto__,map__15375,map__15375__$1,opts,before_jsload,on_jsload,reload_dependents,map__15376,map__15376__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__15123_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__15123_SHARP_);
});
;})(inst_15382,inst_15379,inst_15380,state_val_15531,c__10047__auto__,map__15375,map__15375__$1,opts,before_jsload,on_jsload,reload_dependents,map__15376,map__15376__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_15382__$1 = cljs.core.filter.call(null,inst_15381,files);
var inst_15383 = cljs.core.not_empty.call(null,inst_15382__$1);
var state_15530__$1 = (function (){var statearr_15539 = state_15530;
(statearr_15539[(14)] = inst_15379);

(statearr_15539[(15)] = inst_15380);

(statearr_15539[(13)] = inst_15382__$1);

return statearr_15539;
})();
if(cljs.core.truth_(inst_15383)){
var statearr_15540_15625 = state_15530__$1;
(statearr_15540_15625[(1)] = (2));

} else {
var statearr_15541_15626 = state_15530__$1;
(statearr_15541_15626[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15531 === (24))){
var state_15530__$1 = state_15530;
var statearr_15542_15627 = state_15530__$1;
(statearr_15542_15627[(2)] = null);

(statearr_15542_15627[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15531 === (39))){
var inst_15483 = (state_15530[(16)]);
var state_15530__$1 = state_15530;
var statearr_15543_15628 = state_15530__$1;
(statearr_15543_15628[(2)] = inst_15483);

(statearr_15543_15628[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15531 === (46))){
var inst_15525 = (state_15530[(2)]);
var state_15530__$1 = state_15530;
var statearr_15544_15629 = state_15530__$1;
(statearr_15544_15629[(2)] = inst_15525);

(statearr_15544_15629[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15531 === (4))){
var inst_15427 = (state_15530[(2)]);
var inst_15428 = cljs.core.List.EMPTY;
var inst_15429 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_15428);
var inst_15430 = (function (){return ((function (inst_15427,inst_15428,inst_15429,state_val_15531,c__10047__auto__,map__15375,map__15375__$1,opts,before_jsload,on_jsload,reload_dependents,map__15376,map__15376__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__15124_SHARP_){
var and__6812__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__15124_SHARP_);
if(cljs.core.truth_(and__6812__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__15124_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__15124_SHARP_)));
} else {
return and__6812__auto__;
}
});
;})(inst_15427,inst_15428,inst_15429,state_val_15531,c__10047__auto__,map__15375,map__15375__$1,opts,before_jsload,on_jsload,reload_dependents,map__15376,map__15376__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_15431 = cljs.core.filter.call(null,inst_15430,files);
var inst_15432 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_15433 = cljs.core.concat.call(null,inst_15431,inst_15432);
var state_15530__$1 = (function (){var statearr_15545 = state_15530;
(statearr_15545[(17)] = inst_15427);

(statearr_15545[(18)] = inst_15429);

(statearr_15545[(12)] = inst_15433);

return statearr_15545;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_15546_15630 = state_15530__$1;
(statearr_15546_15630[(1)] = (16));

} else {
var statearr_15547_15631 = state_15530__$1;
(statearr_15547_15631[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15531 === (15))){
var inst_15417 = (state_15530[(2)]);
var state_15530__$1 = state_15530;
var statearr_15548_15632 = state_15530__$1;
(statearr_15548_15632[(2)] = inst_15417);

(statearr_15548_15632[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15531 === (21))){
var inst_15443 = (state_15530[(19)]);
var inst_15443__$1 = (state_15530[(2)]);
var inst_15444 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_15443__$1);
var state_15530__$1 = (function (){var statearr_15549 = state_15530;
(statearr_15549[(19)] = inst_15443__$1);

return statearr_15549;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15530__$1,(22),inst_15444);
} else {
if((state_val_15531 === (31))){
var inst_15528 = (state_15530[(2)]);
var state_15530__$1 = state_15530;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15530__$1,inst_15528);
} else {
if((state_val_15531 === (32))){
var inst_15483 = (state_15530[(16)]);
var inst_15488 = inst_15483.cljs$lang$protocol_mask$partition0$;
var inst_15489 = (inst_15488 & (64));
var inst_15490 = inst_15483.cljs$core$ISeq$;
var inst_15491 = (cljs.core.PROTOCOL_SENTINEL === inst_15490);
var inst_15492 = (inst_15489) || (inst_15491);
var state_15530__$1 = state_15530;
if(cljs.core.truth_(inst_15492)){
var statearr_15550_15633 = state_15530__$1;
(statearr_15550_15633[(1)] = (35));

} else {
var statearr_15551_15634 = state_15530__$1;
(statearr_15551_15634[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15531 === (40))){
var inst_15505 = (state_15530[(20)]);
var inst_15504 = (state_15530[(2)]);
var inst_15505__$1 = cljs.core.get.call(null,inst_15504,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_15506 = cljs.core.get.call(null,inst_15504,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_15507 = cljs.core.not_empty.call(null,inst_15505__$1);
var state_15530__$1 = (function (){var statearr_15552 = state_15530;
(statearr_15552[(21)] = inst_15506);

(statearr_15552[(20)] = inst_15505__$1);

return statearr_15552;
})();
if(cljs.core.truth_(inst_15507)){
var statearr_15553_15635 = state_15530__$1;
(statearr_15553_15635[(1)] = (41));

} else {
var statearr_15554_15636 = state_15530__$1;
(statearr_15554_15636[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15531 === (33))){
var state_15530__$1 = state_15530;
var statearr_15555_15637 = state_15530__$1;
(statearr_15555_15637[(2)] = false);

(statearr_15555_15637[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15531 === (13))){
var inst_15403 = (state_15530[(22)]);
var inst_15407 = cljs.core.chunk_first.call(null,inst_15403);
var inst_15408 = cljs.core.chunk_rest.call(null,inst_15403);
var inst_15409 = cljs.core.count.call(null,inst_15407);
var inst_15390 = inst_15408;
var inst_15391 = inst_15407;
var inst_15392 = inst_15409;
var inst_15393 = (0);
var state_15530__$1 = (function (){var statearr_15556 = state_15530;
(statearr_15556[(7)] = inst_15392);

(statearr_15556[(8)] = inst_15390);

(statearr_15556[(9)] = inst_15391);

(statearr_15556[(10)] = inst_15393);

return statearr_15556;
})();
var statearr_15557_15638 = state_15530__$1;
(statearr_15557_15638[(2)] = null);

(statearr_15557_15638[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15531 === (22))){
var inst_15451 = (state_15530[(23)]);
var inst_15446 = (state_15530[(24)]);
var inst_15447 = (state_15530[(25)]);
var inst_15443 = (state_15530[(19)]);
var inst_15446__$1 = (state_15530[(2)]);
var inst_15447__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_15446__$1);
var inst_15448 = (function (){var all_files = inst_15443;
var res_SINGLEQUOTE_ = inst_15446__$1;
var res = inst_15447__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_15451,inst_15446,inst_15447,inst_15443,inst_15446__$1,inst_15447__$1,state_val_15531,c__10047__auto__,map__15375,map__15375__$1,opts,before_jsload,on_jsload,reload_dependents,map__15376,map__15376__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__15125_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__15125_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_15451,inst_15446,inst_15447,inst_15443,inst_15446__$1,inst_15447__$1,state_val_15531,c__10047__auto__,map__15375,map__15375__$1,opts,before_jsload,on_jsload,reload_dependents,map__15376,map__15376__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_15449 = cljs.core.filter.call(null,inst_15448,inst_15446__$1);
var inst_15450 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_15451__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_15450);
var inst_15452 = cljs.core.not_empty.call(null,inst_15451__$1);
var state_15530__$1 = (function (){var statearr_15558 = state_15530;
(statearr_15558[(23)] = inst_15451__$1);

(statearr_15558[(24)] = inst_15446__$1);

(statearr_15558[(26)] = inst_15449);

(statearr_15558[(25)] = inst_15447__$1);

return statearr_15558;
})();
if(cljs.core.truth_(inst_15452)){
var statearr_15559_15639 = state_15530__$1;
(statearr_15559_15639[(1)] = (23));

} else {
var statearr_15560_15640 = state_15530__$1;
(statearr_15560_15640[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15531 === (36))){
var state_15530__$1 = state_15530;
var statearr_15561_15641 = state_15530__$1;
(statearr_15561_15641[(2)] = false);

(statearr_15561_15641[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15531 === (41))){
var inst_15505 = (state_15530[(20)]);
var inst_15509 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_15510 = cljs.core.map.call(null,inst_15509,inst_15505);
var inst_15511 = cljs.core.pr_str.call(null,inst_15510);
var inst_15512 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("figwheel-no-load meta-data: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_15511)].join('');
var inst_15513 = figwheel.client.utils.log.call(null,inst_15512);
var state_15530__$1 = state_15530;
var statearr_15562_15642 = state_15530__$1;
(statearr_15562_15642[(2)] = inst_15513);

(statearr_15562_15642[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15531 === (43))){
var inst_15506 = (state_15530[(21)]);
var inst_15516 = (state_15530[(2)]);
var inst_15517 = cljs.core.not_empty.call(null,inst_15506);
var state_15530__$1 = (function (){var statearr_15563 = state_15530;
(statearr_15563[(27)] = inst_15516);

return statearr_15563;
})();
if(cljs.core.truth_(inst_15517)){
var statearr_15564_15643 = state_15530__$1;
(statearr_15564_15643[(1)] = (44));

} else {
var statearr_15565_15644 = state_15530__$1;
(statearr_15565_15644[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15531 === (29))){
var inst_15451 = (state_15530[(23)]);
var inst_15446 = (state_15530[(24)]);
var inst_15449 = (state_15530[(26)]);
var inst_15483 = (state_15530[(16)]);
var inst_15447 = (state_15530[(25)]);
var inst_15443 = (state_15530[(19)]);
var inst_15479 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_15482 = (function (){var all_files = inst_15443;
var res_SINGLEQUOTE_ = inst_15446;
var res = inst_15447;
var files_not_loaded = inst_15449;
var dependencies_that_loaded = inst_15451;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_15451,inst_15446,inst_15449,inst_15483,inst_15447,inst_15443,inst_15479,state_val_15531,c__10047__auto__,map__15375,map__15375__$1,opts,before_jsload,on_jsload,reload_dependents,map__15376,map__15376__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__15481){
var map__15566 = p__15481;
var map__15566__$1 = ((((!((map__15566 == null)))?((((map__15566.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15566.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15566):map__15566);
var namespace = cljs.core.get.call(null,map__15566__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_15451,inst_15446,inst_15449,inst_15483,inst_15447,inst_15443,inst_15479,state_val_15531,c__10047__auto__,map__15375,map__15375__$1,opts,before_jsload,on_jsload,reload_dependents,map__15376,map__15376__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_15483__$1 = cljs.core.group_by.call(null,inst_15482,inst_15449);
var inst_15485 = (inst_15483__$1 == null);
var inst_15486 = cljs.core.not.call(null,inst_15485);
var state_15530__$1 = (function (){var statearr_15568 = state_15530;
(statearr_15568[(16)] = inst_15483__$1);

(statearr_15568[(28)] = inst_15479);

return statearr_15568;
})();
if(inst_15486){
var statearr_15569_15645 = state_15530__$1;
(statearr_15569_15645[(1)] = (32));

} else {
var statearr_15570_15646 = state_15530__$1;
(statearr_15570_15646[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15531 === (44))){
var inst_15506 = (state_15530[(21)]);
var inst_15519 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_15506);
var inst_15520 = cljs.core.pr_str.call(null,inst_15519);
var inst_15521 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("not required: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_15520)].join('');
var inst_15522 = figwheel.client.utils.log.call(null,inst_15521);
var state_15530__$1 = state_15530;
var statearr_15571_15647 = state_15530__$1;
(statearr_15571_15647[(2)] = inst_15522);

(statearr_15571_15647[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15531 === (6))){
var inst_15424 = (state_15530[(2)]);
var state_15530__$1 = state_15530;
var statearr_15572_15648 = state_15530__$1;
(statearr_15572_15648[(2)] = inst_15424);

(statearr_15572_15648[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15531 === (28))){
var inst_15449 = (state_15530[(26)]);
var inst_15476 = (state_15530[(2)]);
var inst_15477 = cljs.core.not_empty.call(null,inst_15449);
var state_15530__$1 = (function (){var statearr_15573 = state_15530;
(statearr_15573[(29)] = inst_15476);

return statearr_15573;
})();
if(cljs.core.truth_(inst_15477)){
var statearr_15574_15649 = state_15530__$1;
(statearr_15574_15649[(1)] = (29));

} else {
var statearr_15575_15650 = state_15530__$1;
(statearr_15575_15650[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15531 === (25))){
var inst_15447 = (state_15530[(25)]);
var inst_15463 = (state_15530[(2)]);
var inst_15464 = cljs.core.not_empty.call(null,inst_15447);
var state_15530__$1 = (function (){var statearr_15576 = state_15530;
(statearr_15576[(30)] = inst_15463);

return statearr_15576;
})();
if(cljs.core.truth_(inst_15464)){
var statearr_15577_15651 = state_15530__$1;
(statearr_15577_15651[(1)] = (26));

} else {
var statearr_15578_15652 = state_15530__$1;
(statearr_15578_15652[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15531 === (34))){
var inst_15499 = (state_15530[(2)]);
var state_15530__$1 = state_15530;
if(cljs.core.truth_(inst_15499)){
var statearr_15579_15653 = state_15530__$1;
(statearr_15579_15653[(1)] = (38));

} else {
var statearr_15580_15654 = state_15530__$1;
(statearr_15580_15654[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15531 === (17))){
var state_15530__$1 = state_15530;
var statearr_15581_15655 = state_15530__$1;
(statearr_15581_15655[(2)] = recompile_dependents);

(statearr_15581_15655[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15531 === (3))){
var state_15530__$1 = state_15530;
var statearr_15582_15656 = state_15530__$1;
(statearr_15582_15656[(2)] = null);

(statearr_15582_15656[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15531 === (12))){
var inst_15420 = (state_15530[(2)]);
var state_15530__$1 = state_15530;
var statearr_15583_15657 = state_15530__$1;
(statearr_15583_15657[(2)] = inst_15420);

(statearr_15583_15657[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15531 === (2))){
var inst_15382 = (state_15530[(13)]);
var inst_15389 = cljs.core.seq.call(null,inst_15382);
var inst_15390 = inst_15389;
var inst_15391 = null;
var inst_15392 = (0);
var inst_15393 = (0);
var state_15530__$1 = (function (){var statearr_15584 = state_15530;
(statearr_15584[(7)] = inst_15392);

(statearr_15584[(8)] = inst_15390);

(statearr_15584[(9)] = inst_15391);

(statearr_15584[(10)] = inst_15393);

return statearr_15584;
})();
var statearr_15585_15658 = state_15530__$1;
(statearr_15585_15658[(2)] = null);

(statearr_15585_15658[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15531 === (23))){
var inst_15451 = (state_15530[(23)]);
var inst_15446 = (state_15530[(24)]);
var inst_15449 = (state_15530[(26)]);
var inst_15447 = (state_15530[(25)]);
var inst_15443 = (state_15530[(19)]);
var inst_15454 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_15456 = (function (){var all_files = inst_15443;
var res_SINGLEQUOTE_ = inst_15446;
var res = inst_15447;
var files_not_loaded = inst_15449;
var dependencies_that_loaded = inst_15451;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_15451,inst_15446,inst_15449,inst_15447,inst_15443,inst_15454,state_val_15531,c__10047__auto__,map__15375,map__15375__$1,opts,before_jsload,on_jsload,reload_dependents,map__15376,map__15376__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__15455){
var map__15586 = p__15455;
var map__15586__$1 = ((((!((map__15586 == null)))?((((map__15586.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15586.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15586):map__15586);
var request_url = cljs.core.get.call(null,map__15586__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_15451,inst_15446,inst_15449,inst_15447,inst_15443,inst_15454,state_val_15531,c__10047__auto__,map__15375,map__15375__$1,opts,before_jsload,on_jsload,reload_dependents,map__15376,map__15376__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_15457 = cljs.core.reverse.call(null,inst_15451);
var inst_15458 = cljs.core.map.call(null,inst_15456,inst_15457);
var inst_15459 = cljs.core.pr_str.call(null,inst_15458);
var inst_15460 = figwheel.client.utils.log.call(null,inst_15459);
var state_15530__$1 = (function (){var statearr_15588 = state_15530;
(statearr_15588[(31)] = inst_15454);

return statearr_15588;
})();
var statearr_15589_15659 = state_15530__$1;
(statearr_15589_15659[(2)] = inst_15460);

(statearr_15589_15659[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15531 === (35))){
var state_15530__$1 = state_15530;
var statearr_15590_15660 = state_15530__$1;
(statearr_15590_15660[(2)] = true);

(statearr_15590_15660[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15531 === (19))){
var inst_15433 = (state_15530[(12)]);
var inst_15439 = figwheel.client.file_reloading.expand_files.call(null,inst_15433);
var state_15530__$1 = state_15530;
var statearr_15591_15661 = state_15530__$1;
(statearr_15591_15661[(2)] = inst_15439);

(statearr_15591_15661[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15531 === (11))){
var state_15530__$1 = state_15530;
var statearr_15592_15662 = state_15530__$1;
(statearr_15592_15662[(2)] = null);

(statearr_15592_15662[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15531 === (9))){
var inst_15422 = (state_15530[(2)]);
var state_15530__$1 = state_15530;
var statearr_15593_15663 = state_15530__$1;
(statearr_15593_15663[(2)] = inst_15422);

(statearr_15593_15663[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15531 === (5))){
var inst_15392 = (state_15530[(7)]);
var inst_15393 = (state_15530[(10)]);
var inst_15395 = (inst_15393 < inst_15392);
var inst_15396 = inst_15395;
var state_15530__$1 = state_15530;
if(cljs.core.truth_(inst_15396)){
var statearr_15594_15664 = state_15530__$1;
(statearr_15594_15664[(1)] = (7));

} else {
var statearr_15595_15665 = state_15530__$1;
(statearr_15595_15665[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15531 === (14))){
var inst_15403 = (state_15530[(22)]);
var inst_15412 = cljs.core.first.call(null,inst_15403);
var inst_15413 = figwheel.client.file_reloading.eval_body.call(null,inst_15412,opts);
var inst_15414 = cljs.core.next.call(null,inst_15403);
var inst_15390 = inst_15414;
var inst_15391 = null;
var inst_15392 = (0);
var inst_15393 = (0);
var state_15530__$1 = (function (){var statearr_15596 = state_15530;
(statearr_15596[(32)] = inst_15413);

(statearr_15596[(7)] = inst_15392);

(statearr_15596[(8)] = inst_15390);

(statearr_15596[(9)] = inst_15391);

(statearr_15596[(10)] = inst_15393);

return statearr_15596;
})();
var statearr_15597_15666 = state_15530__$1;
(statearr_15597_15666[(2)] = null);

(statearr_15597_15666[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15531 === (45))){
var state_15530__$1 = state_15530;
var statearr_15598_15667 = state_15530__$1;
(statearr_15598_15667[(2)] = null);

(statearr_15598_15667[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15531 === (26))){
var inst_15451 = (state_15530[(23)]);
var inst_15446 = (state_15530[(24)]);
var inst_15449 = (state_15530[(26)]);
var inst_15447 = (state_15530[(25)]);
var inst_15443 = (state_15530[(19)]);
var inst_15466 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_15468 = (function (){var all_files = inst_15443;
var res_SINGLEQUOTE_ = inst_15446;
var res = inst_15447;
var files_not_loaded = inst_15449;
var dependencies_that_loaded = inst_15451;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_15451,inst_15446,inst_15449,inst_15447,inst_15443,inst_15466,state_val_15531,c__10047__auto__,map__15375,map__15375__$1,opts,before_jsload,on_jsload,reload_dependents,map__15376,map__15376__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__15467){
var map__15599 = p__15467;
var map__15599__$1 = ((((!((map__15599 == null)))?((((map__15599.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15599.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15599):map__15599);
var namespace = cljs.core.get.call(null,map__15599__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__15599__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_15451,inst_15446,inst_15449,inst_15447,inst_15443,inst_15466,state_val_15531,c__10047__auto__,map__15375,map__15375__$1,opts,before_jsload,on_jsload,reload_dependents,map__15376,map__15376__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_15469 = cljs.core.map.call(null,inst_15468,inst_15447);
var inst_15470 = cljs.core.pr_str.call(null,inst_15469);
var inst_15471 = figwheel.client.utils.log.call(null,inst_15470);
var inst_15472 = (function (){var all_files = inst_15443;
var res_SINGLEQUOTE_ = inst_15446;
var res = inst_15447;
var files_not_loaded = inst_15449;
var dependencies_that_loaded = inst_15451;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_15451,inst_15446,inst_15449,inst_15447,inst_15443,inst_15466,inst_15468,inst_15469,inst_15470,inst_15471,state_val_15531,c__10047__auto__,map__15375,map__15375__$1,opts,before_jsload,on_jsload,reload_dependents,map__15376,map__15376__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_15451,inst_15446,inst_15449,inst_15447,inst_15443,inst_15466,inst_15468,inst_15469,inst_15470,inst_15471,state_val_15531,c__10047__auto__,map__15375,map__15375__$1,opts,before_jsload,on_jsload,reload_dependents,map__15376,map__15376__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_15473 = setTimeout(inst_15472,(10));
var state_15530__$1 = (function (){var statearr_15601 = state_15530;
(statearr_15601[(33)] = inst_15466);

(statearr_15601[(34)] = inst_15471);

return statearr_15601;
})();
var statearr_15602_15668 = state_15530__$1;
(statearr_15602_15668[(2)] = inst_15473);

(statearr_15602_15668[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15531 === (16))){
var state_15530__$1 = state_15530;
var statearr_15603_15669 = state_15530__$1;
(statearr_15603_15669[(2)] = reload_dependents);

(statearr_15603_15669[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15531 === (38))){
var inst_15483 = (state_15530[(16)]);
var inst_15501 = cljs.core.apply.call(null,cljs.core.hash_map,inst_15483);
var state_15530__$1 = state_15530;
var statearr_15604_15670 = state_15530__$1;
(statearr_15604_15670[(2)] = inst_15501);

(statearr_15604_15670[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15531 === (30))){
var state_15530__$1 = state_15530;
var statearr_15605_15671 = state_15530__$1;
(statearr_15605_15671[(2)] = null);

(statearr_15605_15671[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15531 === (10))){
var inst_15403 = (state_15530[(22)]);
var inst_15405 = cljs.core.chunked_seq_QMARK_.call(null,inst_15403);
var state_15530__$1 = state_15530;
if(inst_15405){
var statearr_15606_15672 = state_15530__$1;
(statearr_15606_15672[(1)] = (13));

} else {
var statearr_15607_15673 = state_15530__$1;
(statearr_15607_15673[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15531 === (18))){
var inst_15437 = (state_15530[(2)]);
var state_15530__$1 = state_15530;
if(cljs.core.truth_(inst_15437)){
var statearr_15608_15674 = state_15530__$1;
(statearr_15608_15674[(1)] = (19));

} else {
var statearr_15609_15675 = state_15530__$1;
(statearr_15609_15675[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15531 === (42))){
var state_15530__$1 = state_15530;
var statearr_15610_15676 = state_15530__$1;
(statearr_15610_15676[(2)] = null);

(statearr_15610_15676[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15531 === (37))){
var inst_15496 = (state_15530[(2)]);
var state_15530__$1 = state_15530;
var statearr_15611_15677 = state_15530__$1;
(statearr_15611_15677[(2)] = inst_15496);

(statearr_15611_15677[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15531 === (8))){
var inst_15403 = (state_15530[(22)]);
var inst_15390 = (state_15530[(8)]);
var inst_15403__$1 = cljs.core.seq.call(null,inst_15390);
var state_15530__$1 = (function (){var statearr_15612 = state_15530;
(statearr_15612[(22)] = inst_15403__$1);

return statearr_15612;
})();
if(inst_15403__$1){
var statearr_15613_15678 = state_15530__$1;
(statearr_15613_15678[(1)] = (10));

} else {
var statearr_15614_15679 = state_15530__$1;
(statearr_15614_15679[(1)] = (11));

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
}
});})(c__10047__auto__,map__15375,map__15375__$1,opts,before_jsload,on_jsload,reload_dependents,map__15376,map__15376__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__9982__auto__,c__10047__auto__,map__15375,map__15375__$1,opts,before_jsload,on_jsload,reload_dependents,map__15376,map__15376__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__9983__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__9983__auto____0 = (function (){
var statearr_15618 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15618[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__9983__auto__);

(statearr_15618[(1)] = (1));

return statearr_15618;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__9983__auto____1 = (function (state_15530){
while(true){
var ret_value__9984__auto__ = (function (){try{while(true){
var result__9985__auto__ = switch__9982__auto__.call(null,state_15530);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9985__auto__;
}
break;
}
}catch (e15619){if((e15619 instanceof Object)){
var ex__9986__auto__ = e15619;
var statearr_15620_15680 = state_15530;
(statearr_15620_15680[(5)] = ex__9986__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15530);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15619;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15681 = state_15530;
state_15530 = G__15681;
continue;
} else {
return ret_value__9984__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__9983__auto__ = function(state_15530){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__9983__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__9983__auto____1.call(this,state_15530);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__9983__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__9983__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__9983__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__9983__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__9983__auto__;
})()
;})(switch__9982__auto__,c__10047__auto__,map__15375,map__15375__$1,opts,before_jsload,on_jsload,reload_dependents,map__15376,map__15376__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__10049__auto__ = (function (){var statearr_15621 = f__10048__auto__.call(null);
(statearr_15621[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10047__auto__);

return statearr_15621;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10049__auto__);
});})(c__10047__auto__,map__15375,map__15375__$1,opts,before_jsload,on_jsload,reload_dependents,map__15376,map__15376__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__10047__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),cljs.core.str.cljs$core$IFn$_invoke$arity$1("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__15684,link){
var map__15687 = p__15684;
var map__15687__$1 = ((((!((map__15687 == null)))?((((map__15687.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15687.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15687):map__15687);
var file = cljs.core.get.call(null,map__15687__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__15687,map__15687__$1,file){
return (function (p1__15682_SHARP_,p2__15683_SHARP_){
if(cljs.core._EQ_.call(null,p1__15682_SHARP_,p2__15683_SHARP_)){
return p1__15682_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__15687,map__15687__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__15693){
var map__15694 = p__15693;
var map__15694__$1 = ((((!((map__15694 == null)))?((((map__15694.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15694.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15694):map__15694);
var match_length = cljs.core.get.call(null,map__15694__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__15694__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__15689_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__15689_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__15696_SHARP_,p2__15697_SHARP_){
return cljs.core.assoc.call(null,p1__15696_SHARP_,cljs.core.get.call(null,p2__15697_SHARP_,key),p2__15697_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__4655__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4655__auto__)){
var link = temp__4655__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__4655__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__4655__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_15698 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_15698);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_15698);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__15699,p__15700){
var map__15705 = p__15699;
var map__15705__$1 = ((((!((map__15705 == null)))?((((map__15705.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15705.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15705):map__15705);
var on_cssload = cljs.core.get.call(null,map__15705__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__15706 = p__15700;
var map__15706__$1 = ((((!((map__15706 == null)))?((((map__15706.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15706.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15706):map__15706);
var files_msg = map__15706__$1;
var files = cljs.core.get.call(null,map__15706__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__4657__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__4657__auto__)){
var f_datas = temp__4657__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map