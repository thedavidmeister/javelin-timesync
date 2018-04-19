// Compiled by ClojureScript 1.10.238 {:static-fns true, :optimize-constants true}
goog.provide('hoplon.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.Uri');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('javelin.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('cljs.spec.alpha');
goog.require('cljs.spec.test.alpha');
goog.require('hoplon.spec');
goog.require('clojure.data');
cljs.core.enable_console_print_BANG_();






hoplon.core.child_vec = (function hoplon$core$child_vec(this$){
var x = this$.childNodes;
var l = x.length;
var i = (0);
var ret = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
while(true){
var or__3922__auto__ = (function (){var and__3911__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,l);
if(and__3911__auto__){
return cljs.core.persistent_BANG_(ret);
} else {
return and__3911__auto__;
}
})();
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var G__10363 = (i + (1));
var G__10364 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(ret,x.item(i));
i = G__10363;
ret = G__10364;
continue;
}
break;
}
});
hoplon.core.vflatten = (function hoplon$core$vflatten(var_args){
var G__10366 = arguments.length;
switch (G__10366) {
case 1:
return hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1 = (function (tree){
return cljs.core.persistent_BANG_(hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$2(tree,cljs.core.transient$(cljs.core.PersistentVector.EMPTY)));
});

hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$2 = (function (tree,ret){
var l = cljs.core.count(tree);
var i = (0);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,l)){
return ret;
} else {
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(tree,i);
if(!(cljs.core.sequential_QMARK_(x))){
cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(ret,x);
} else {
hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$2(x,ret);
}

var G__10368 = (i + (1));
i = G__10368;
continue;
}
break;
}
});

hoplon.core.vflatten.cljs$lang$maxFixedArity = 2;

hoplon.core.merge_kids = (function hoplon$core$merge_kids(this$,_,new$){
var new$__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(hoplon.core.__GT_node,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__10370_SHARP_,p2__10369_SHARP_){
if((p2__10369_SHARP_ == null)){
return p1__10370_SHARP_;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__10370_SHARP_,p2__10369_SHARP_);
}
}),cljs.core.PersistentVector.EMPTY,hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1(new$)));
var old = hoplon.core.child_vec(this$);
var G__10377 = old;
var vec__10379 = G__10377;
var seq__10380 = cljs.core.seq(vec__10379);
var first__10381 = cljs.core.first(seq__10380);
var seq__10380__$1 = cljs.core.next(seq__10380);
var o = first__10381;
var os = seq__10380__$1;
var G__10378 = new$__$1;
var vec__10382 = G__10378;
var seq__10383 = cljs.core.seq(vec__10382);
var first__10384 = cljs.core.first(seq__10383);
var seq__10383__$1 = cljs.core.next(seq__10383);
var x = first__10384;
var xs = seq__10383__$1;
var G__10377__$1 = G__10377;
var G__10378__$1 = G__10378;
while(true){
var vec__10385 = G__10377__$1;
var seq__10386 = cljs.core.seq(vec__10385);
var first__10387 = cljs.core.first(seq__10386);
var seq__10386__$1 = cljs.core.next(seq__10386);
var o__$1 = first__10387;
var os__$1 = seq__10386__$1;
var vec__10388 = G__10378__$1;
var seq__10389 = cljs.core.seq(vec__10388);
var first__10390 = cljs.core.first(seq__10389);
var seq__10389__$1 = cljs.core.next(seq__10389);
var x__$1 = first__10390;
var xs__$1 = seq__10389__$1;
if(cljs.core.truth_((function (){var or__3922__auto__ = o__$1;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return x__$1;
}
})())){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x__$1,o__$1)){
} else {
if(cljs.core.truth_((function (){var and__3911__auto__ = x__$1;
if(cljs.core.truth_(and__3911__auto__)){
return o__$1;
} else {
return and__3911__auto__;
}
})())){
this$.replaceChild(x__$1,o__$1);
} else {
if(cljs.core.truth_(x__$1)){
this$.appendChild(x__$1);
} else {
if(cljs.core.truth_(o__$1)){
this$.removeChild(o__$1);
} else {
}
}
}
}

var G__10391 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([x__$1]),os__$1);
var G__10392 = xs__$1;
G__10377__$1 = G__10391;
G__10378__$1 = G__10392;
continue;
} else {
return null;
}
break;
}
});
hoplon.core._do_BANG_ = (function hoplon$core$_do_BANG_(elem,this$,value){
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(elem,this$,value) : hoplon.core.do_BANG_.call(null,elem,this$,value));
});
cljs.spec.alpha.def_impl(cljs.core.cst$sym$hoplon$core_SLASH__DASH_do_BANG_,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.cst$kw$hoplon$spec_SLASH_do_BANG_,cljs.core.cst$kw$ret,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$hoplon$spec_SLASH_do_BANG_,cljs.core.cst$kw$hoplon$spec_SLASH_do_BANG_,null,null),cljs.core.cst$kw$hoplon$spec_SLASH_do_BANG_,cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.any_QMARK_,null,null),cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,null,null,null));
hoplon.core._on_BANG_ = (function hoplon$core$_on_BANG_(elem,this$,value){
return (hoplon.core.on_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.on_BANG_.cljs$core$IFn$_invoke$arity$3(elem,this$,value) : hoplon.core.on_BANG_.call(null,elem,this$,value));
});
cljs.spec.alpha.def_impl(cljs.core.cst$sym$hoplon$core_SLASH__DASH_on_BANG_,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.cst$kw$hoplon$spec_SLASH_on_BANG_,cljs.core.cst$kw$ret,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$hoplon$spec_SLASH_on_BANG_,cljs.core.cst$kw$hoplon$spec_SLASH_on_BANG_,null,null),cljs.core.cst$kw$hoplon$spec_SLASH_on_BANG_,cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.any_QMARK_,null,null),cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,null,null,null));
hoplon.core._elem_BANG_ = (function hoplon$core$_elem_BANG_(elem,this$,value){
return (hoplon.core.elem_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.elem_BANG_.cljs$core$IFn$_invoke$arity$3(elem,this$,value) : hoplon.core.elem_BANG_.call(null,elem,this$,value));
});
cljs.spec.alpha.def_impl(cljs.core.cst$sym$hoplon$core_SLASH__DASH_elem_BANG_,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.cst$kw$hoplon$spec_SLASH_elem_BANG_,cljs.core.cst$kw$ret,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$hoplon$spec_SLASH_elem_BANG_,cljs.core.cst$kw$hoplon$spec_SLASH_elem_BANG_,null,null),cljs.core.cst$kw$hoplon$spec_SLASH_elem_BANG_,cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.any_QMARK_,null,null),cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,null,null,null));
/**
 * Is the application running in a prerendering container (eg. PhantomJS via
 *   the prerender task)?
 */
hoplon.core.prerendering_QMARK_ = (new goog.Uri(window.location.href)).getParameterValue("prerendering");
/**
 * Adds f as a watcher to ref and evaluates (f init @ref) once. The watcher
 *   f is a function of two arguments: the previous and next values. If init is
 *   not provided the default (nil) will be used.
 */
hoplon.core.do_watch = (function hoplon$core$do_watch(var_args){
var G__10394 = arguments.length;
switch (G__10394) {
case 2:
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2 = (function (ref,f){
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3(ref,null,f);
});

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3 = (function (ref,init,f){
var k = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var G__10395_10398 = init;
var G__10396_10399 = cljs.core.deref(ref);
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__10395_10398,G__10396_10399) : f.call(null,G__10395_10398,G__10396_10399));

cljs.core.add_watch(ref,k,((function (k){
return (function (_,___$1,old,new$){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(old,new$) : f.call(null,old,new$));
});})(k))
);

return k;
});

hoplon.core.do_watch.cljs$lang$maxFixedArity = 3;

/**
 * Class normalization for attribute providers. Converts from strings and
 *   sequences to hashmaps.
 */
hoplon.core.normalize_class = (function hoplon$core$normalize_class(kvs){
var __GT_map = (function (p1__10400_SHARP_){
return cljs.core.zipmap(p1__10400_SHARP_,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(true));
});
if(cljs.core.map_QMARK_(kvs)){
return kvs;
} else {
return __GT_map(((typeof kvs === 'string')?kvs.split(/\s+/):cljs.core.seq(kvs)));
}
});
/**
 * Executes a fuction after a delay, if no delay is passed, 0 is used as a default.
 */
hoplon.core.timeout = (function hoplon$core$timeout(var_args){
var G__10402 = arguments.length;
switch (G__10402) {
case 1:
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

hoplon.core.timeout.cljs$core$IFn$_invoke$arity$1 = (function (f){
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$2(f,(0));
});

hoplon.core.timeout.cljs$core$IFn$_invoke$arity$2 = (function (f,t){
return window.setTimeout(f,t);
});

hoplon.core.timeout.cljs$lang$maxFixedArity = 2;

/**
 * Executes a function once an element has been attached to the DOM.
 */
hoplon.core.when_dom = (function hoplon$core$when_dom(this$,f){
if(!((this$ instanceof Element))){
return setTimeout((function (){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}),(0));
} else {
var temp__5533__auto__ = goog.object.get(this$,"_hoplonWhenDom");
if(cljs.core.truth_(temp__5533__auto__)){
var v = temp__5533__auto__;
return v.push(f);
} else {
var G__10404_10416 = this$;
var G__10405_10417 = "_hoplonWhenDom";
var G__10406_10418 = [f];
goog.object.set(G__10404_10416,G__10405_10417,G__10406_10418);

return setTimeout(((function (temp__5533__auto__){
return (function (){
var fexpr__10411 = ((function (temp__5533__auto__){
return (function hoplon$core$when_dom_$_doit(){
if(cljs.core.not(document.documentElement.contains(this$))){
return setTimeout(((function (temp__5533__auto__){
return (function (){
return hoplon$core$when_dom_$_doit();
});})(temp__5533__auto__))
,(20));
} else {
var seq__10412_10419 = cljs.core.seq(goog.object.get(this$,"_hoplonWhenDom"));
var chunk__10413_10420 = null;
var count__10414_10421 = (0);
var i__10415_10422 = (0);
while(true){
if((i__10415_10422 < count__10414_10421)){
var f_10423__$1 = chunk__10413_10420.cljs$core$IIndexed$_nth$arity$2(null,i__10415_10422);
(f_10423__$1.cljs$core$IFn$_invoke$arity$0 ? f_10423__$1.cljs$core$IFn$_invoke$arity$0() : f_10423__$1.call(null));


var G__10424 = seq__10412_10419;
var G__10425 = chunk__10413_10420;
var G__10426 = count__10414_10421;
var G__10427 = (i__10415_10422 + (1));
seq__10412_10419 = G__10424;
chunk__10413_10420 = G__10425;
count__10414_10421 = G__10426;
i__10415_10422 = G__10427;
continue;
} else {
var temp__5535__auto___10428 = cljs.core.seq(seq__10412_10419);
if(temp__5535__auto___10428){
var seq__10412_10429__$1 = temp__5535__auto___10428;
if(cljs.core.chunked_seq_QMARK_(seq__10412_10429__$1)){
var c__4319__auto___10430 = cljs.core.chunk_first(seq__10412_10429__$1);
var G__10431 = cljs.core.chunk_rest(seq__10412_10429__$1);
var G__10432 = c__4319__auto___10430;
var G__10433 = cljs.core.count(c__4319__auto___10430);
var G__10434 = (0);
seq__10412_10419 = G__10431;
chunk__10413_10420 = G__10432;
count__10414_10421 = G__10433;
i__10415_10422 = G__10434;
continue;
} else {
var f_10435__$1 = cljs.core.first(seq__10412_10429__$1);
(f_10435__$1.cljs$core$IFn$_invoke$arity$0 ? f_10435__$1.cljs$core$IFn$_invoke$arity$0() : f_10435__$1.call(null));


var G__10436 = cljs.core.next(seq__10412_10429__$1);
var G__10437 = null;
var G__10438 = (0);
var G__10439 = (0);
seq__10412_10419 = G__10436;
chunk__10413_10420 = G__10437;
count__10414_10421 = G__10438;
i__10415_10422 = G__10439;
continue;
}
} else {
}
}
break;
}

return goog.object.set(this$,"_hoplonWhenDom",null);
}
});})(temp__5533__auto__))
;
return fexpr__10411();
});})(temp__5533__auto__))
,(0));
}
}
});
/**
 * Executes a function once the window load event is fired.
 */
hoplon.core.add_initfn_BANG_ = (function hoplon$core$add_initfn_BANG_(f){
return window.addEventListener("load",(function (){
return setTimeout((function (){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}),(0));
}));
});
/**
 * Parses a sequence of element arguments into attributes and children.
 */
hoplon.core.parse_args = (function hoplon$core$parse_args(args){
var attr = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
var kids = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
var G__10445 = args;
var vec__10446 = G__10445;
var seq__10447 = cljs.core.seq(vec__10446);
var first__10448 = cljs.core.first(seq__10447);
var seq__10447__$1 = cljs.core.next(seq__10447);
var arg = first__10448;
var args__$1 = seq__10447__$1;
var attr__$1 = attr;
var kids__$1 = kids;
var G__10445__$1 = G__10445;
while(true){
var attr__$2 = attr__$1;
var kids__$2 = kids__$1;
var vec__10449 = G__10445__$1;
var seq__10450 = cljs.core.seq(vec__10449);
var first__10451 = cljs.core.first(seq__10450);
var seq__10450__$1 = cljs.core.next(seq__10450);
var arg__$1 = first__10451;
var args__$2 = seq__10450__$1;
if(cljs.core.not((function (){var or__3922__auto__ = arg__$1;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return args__$2;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.persistent_BANG_(attr__$2),cljs.core.persistent_BANG_(kids__$2)], null);
} else {
if(cljs.core.map_QMARK_(arg__$1)){
var G__10452 = cljs.core.reduce_kv(cljs.core.assoc_BANG_,attr__$2,arg__$1);
var G__10453 = kids__$2;
var G__10454 = args__$2;
attr__$1 = G__10452;
kids__$1 = G__10453;
G__10445__$1 = G__10454;
continue;
} else {
if(cljs.core.set_QMARK_(arg__$1)){
var G__10455 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (attr__$1,kids__$1,G__10445__$1,attr__$2,kids__$2,vec__10449,seq__10450,first__10451,seq__10450__$1,arg__$1,args__$2,attr,kids,G__10445,vec__10446,seq__10447,first__10448,seq__10447__$1,arg,args__$1){
return (function (p1__10440_SHARP_,p2__10441_SHARP_){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(p1__10440_SHARP_,p2__10441_SHARP_,true);
});})(attr__$1,kids__$1,G__10445__$1,attr__$2,kids__$2,vec__10449,seq__10450,first__10451,seq__10450__$1,arg__$1,args__$2,attr,kids,G__10445,vec__10446,seq__10447,first__10448,seq__10447__$1,arg,args__$1))
,attr__$2,arg__$1);
var G__10456 = kids__$2;
var G__10457 = args__$2;
attr__$1 = G__10455;
kids__$1 = G__10456;
G__10445__$1 = G__10457;
continue;
} else {
if(cljs.core.truth_((hoplon.core.attribute_QMARK_.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.attribute_QMARK_.cljs$core$IFn$_invoke$arity$1(arg__$1) : hoplon.core.attribute_QMARK_.call(null,arg__$1)))){
var G__10458 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(attr__$2,arg__$1,cljs.core.first(args__$2));
var G__10459 = kids__$2;
var G__10460 = cljs.core.rest(args__$2);
attr__$1 = G__10458;
kids__$1 = G__10459;
G__10445__$1 = G__10460;
continue;
} else {
if(cljs.core.seq_QMARK_(arg__$1)){
var G__10461 = attr__$2;
var G__10462 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,kids__$2,hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1(arg__$1));
var G__10463 = args__$2;
attr__$1 = G__10461;
kids__$1 = G__10462;
G__10445__$1 = G__10463;
continue;
} else {
if(cljs.core.vector_QMARK_(arg__$1)){
var G__10464 = attr__$2;
var G__10465 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,kids__$2,hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1(arg__$1));
var G__10466 = args__$2;
attr__$1 = G__10464;
kids__$1 = G__10465;
G__10445__$1 = G__10466;
continue;
} else {
var G__10467 = attr__$2;
var G__10468 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(kids__$2,arg__$1);
var G__10469 = args__$2;
attr__$1 = G__10467;
kids__$1 = G__10468;
G__10445__$1 = G__10469;
continue;

}
}
}
}
}
}
break;
}
});
/**
 * A multi-method dispatch function.
 * 
 * Will dispatch against three arguments:
 * 
 *   * `elem` - the target DOM Element containing the attribute
 *   * `key` - the attribute keyword or symbol
 *   * `value` - the attribute value
 * 
 * The dispatcher will attempt to dispatch agains the key namespace or key.
 * 
 * ex. when key is `:namespace/key` will dispatch on `:namespace/*` otherwise `key`
 */
hoplon.core.dispatcher = (function hoplon$core$dispatcher(elem,key,value){
var temp__5533__auto__ = cljs.core.namespace(key);
if(cljs.core.truth_(temp__5533__auto__)){
var n = temp__5533__auto__;
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(n,"*");
} else {
return key;
}
});

/**
 * @interface
 */
hoplon.core.IHoplonNode = function(){};

hoplon.core._node = (function hoplon$core$_node(this$){
if(((!((this$ == null))) && (!((this$.hoplon$core$IHoplonNode$_node$arity$1 == null))))){
return this$.hoplon$core$IHoplonNode$_node$arity$1(this$);
} else {
var x__4211__auto__ = (((this$ == null))?null:this$);
var m__4212__auto__ = (hoplon.core._node[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4212__auto__.call(null,this$));
} else {
var m__4212__auto____$1 = (hoplon.core._node["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4212__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IHoplonNode.-node",this$);
}
}
}
});

hoplon.core.node_QMARK_ = (function hoplon$core$node_QMARK_(this$){
if(!((this$ == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === this$.hoplon$core$IHoplonNode$)))){
return true;
} else {
if((!this$.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(hoplon.core.IHoplonNode,this$);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(hoplon.core.IHoplonNode,this$);
}
});
goog.object.set(hoplon.core.IHoplonNode,"string",true);

var G__10471_10478 = hoplon.core._node;
var G__10472_10479 = "string";
var G__10473_10480 = ((function (G__10471_10478,G__10472_10479){
return (function (this$){
return (hoplon.core.$text.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.$text.cljs$core$IFn$_invoke$arity$1(this$) : hoplon.core.$text.call(null,this$));
});})(G__10471_10478,G__10472_10479))
;
goog.object.set(G__10471_10478,G__10472_10479,G__10473_10480);

goog.object.set(hoplon.core.IHoplonNode,"number",true);

var G__10474_10481 = hoplon.core._node;
var G__10475_10482 = "number";
var G__10476_10483 = ((function (G__10474_10481,G__10475_10482){
return (function (this$){
var G__10477 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)].join('');
return (hoplon.core.$text.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.$text.cljs$core$IFn$_invoke$arity$1(G__10477) : hoplon.core.$text.call(null,G__10477));
});})(G__10474_10481,G__10475_10482))
;
goog.object.set(G__10474_10481,G__10475_10482,G__10476_10483);
hoplon.core.__GT_node = (function hoplon$core$__GT_node(x){
if(cljs.core.truth_(hoplon.core.node_QMARK_(x))){
return hoplon.core._node(x);
} else {
return x;
}
});

/**
 * @interface
 */
hoplon.core.IHoplonAttribute = function(){};

hoplon.core._attribute_BANG_ = (function hoplon$core$_attribute_BANG_(this$,elem,value){
if(((!((this$ == null))) && (!((this$.hoplon$core$IHoplonAttribute$_attribute_BANG_$arity$3 == null))))){
return this$.hoplon$core$IHoplonAttribute$_attribute_BANG_$arity$3(this$,elem,value);
} else {
var x__4211__auto__ = (((this$ == null))?null:this$);
var m__4212__auto__ = (hoplon.core._attribute_BANG_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$3(this$,elem,value) : m__4212__auto__.call(null,this$,elem,value));
} else {
var m__4212__auto____$1 = (hoplon.core._attribute_BANG_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,elem,value) : m__4212__auto____$1.call(null,this$,elem,value));
} else {
throw cljs.core.missing_protocol("IHoplonAttribute.-attribute!",this$);
}
}
}
});

hoplon.core.attribute_QMARK_ = (function hoplon$core$attribute_QMARK_(this$){
if(!((this$ == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === this$.hoplon$core$IHoplonAttribute$)))){
return true;
} else {
if((!this$.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(hoplon.core.IHoplonAttribute,this$);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(hoplon.core.IHoplonAttribute,this$);
}
});
cljs.core.Keyword.prototype.hoplon$core$IHoplonAttribute$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.hoplon$core$IHoplonAttribute$_attribute_BANG_$arity$3 = (function (this$,elem,value){
var this$__$1 = this;
return hoplon.core._elem_BANG_(elem,this$__$1,value);
});
hoplon.core.spec_BANG_ = (function hoplon$core$spec_BANG_(){
var opts10487_10515 = null;
cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (opts10487_10515){
return (function (ret__9804__auto__,p__10488){
var vec__10489 = p__10488;
var ___9805__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10489,(0),null);
var f__9806__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10489,(1),null);
var sym__9807__auto__ = (f__9806__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9806__auto__.cljs$core$IFn$_invoke$arity$0() : f__9806__auto__.call(null));
var G__10492 = ret__9804__auto__;
if(cljs.core.truth_(sym__9807__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__10492,sym__9807__auto__);
} else {
return G__10492;
}
});})(opts10487_10515))
,cljs.core.PersistentVector.EMPTY,cljs.spec.test.alpha.distinct_by(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (opts10487_10515){
return (function (p1__9803__9808__auto__){
var G__10494 = cljs.core.first(p1__9803__9808__auto__);
var fexpr__10493 = cljs.spec.test.alpha.instrumentable_syms.cljs$core$IFn$_invoke$arity$1(opts10487_10515);
return (fexpr__10493.cljs$core$IFn$_invoke$arity$1 ? fexpr__10493.cljs$core$IFn$_invoke$arity$1(G__10494) : fexpr__10493.call(null,G__10494));
});})(opts10487_10515))
,cljs.core.zipmap(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$hoplon$core_SLASH__DASH_elem_BANG_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (opts10487_10515){
return (function (){
var checked__9772__auto__ = cljs.spec.test.alpha.instrument_1_STAR_(cljs.core.cst$sym$hoplon$core_SLASH__DASH_elem_BANG_,new cljs.core.Var(function(){return hoplon.core._elem_BANG_;},cljs.core.cst$sym$hoplon$core_SLASH__DASH_elem_BANG_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$private,cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[true,cljs.core.cst$sym$hoplon$core,cljs.core.cst$sym$_DASH_elem_BANG_,"/Users/davidmeister/.boot/cache/tmp/Users/davidmeister/javelin-timesync/1mfz/7xhqgu/index.html.out/hoplon/core.cljs",14,1,88,88,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$elem,cljs.core.cst$sym$this,cljs.core.cst$sym$value], null)),null,(cljs.core.truth_(hoplon.core._elem_BANG_)?hoplon.core._elem_BANG_.cljs$lang$test:null)])),opts10487_10515);
if(cljs.core.truth_(checked__9772__auto__)){
hoplon.core._elem_BANG_ = checked__9772__auto__;
} else {
}

return cljs.core.cst$sym$hoplon$core_SLASH__DASH_elem_BANG_;
});})(opts10487_10515))
], null)))));

var opts10497_10516 = null;
cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (opts10497_10516){
return (function (ret__9804__auto__,p__10498){
var vec__10499 = p__10498;
var ___9805__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10499,(0),null);
var f__9806__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10499,(1),null);
var sym__9807__auto__ = (f__9806__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9806__auto__.cljs$core$IFn$_invoke$arity$0() : f__9806__auto__.call(null));
var G__10502 = ret__9804__auto__;
if(cljs.core.truth_(sym__9807__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__10502,sym__9807__auto__);
} else {
return G__10502;
}
});})(opts10497_10516))
,cljs.core.PersistentVector.EMPTY,cljs.spec.test.alpha.distinct_by(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (opts10497_10516){
return (function (p1__9803__9808__auto__){
var G__10504 = cljs.core.first(p1__9803__9808__auto__);
var fexpr__10503 = cljs.spec.test.alpha.instrumentable_syms.cljs$core$IFn$_invoke$arity$1(opts10497_10516);
return (fexpr__10503.cljs$core$IFn$_invoke$arity$1 ? fexpr__10503.cljs$core$IFn$_invoke$arity$1(G__10504) : fexpr__10503.call(null,G__10504));
});})(opts10497_10516))
,cljs.core.zipmap(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$hoplon$core_SLASH__DASH_do_BANG_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (opts10497_10516){
return (function (){
var checked__9772__auto__ = cljs.spec.test.alpha.instrument_1_STAR_(cljs.core.cst$sym$hoplon$core_SLASH__DASH_do_BANG_,new cljs.core.Var(function(){return hoplon.core._do_BANG_;},cljs.core.cst$sym$hoplon$core_SLASH__DASH_do_BANG_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$private,cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[true,cljs.core.cst$sym$hoplon$core,cljs.core.cst$sym$_DASH_do_BANG_,"/Users/davidmeister/.boot/cache/tmp/Users/davidmeister/javelin-timesync/1mfz/7xhqgu/index.html.out/hoplon/core.cljs",12,1,78,78,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$elem,cljs.core.cst$sym$this,cljs.core.cst$sym$value], null)),null,(cljs.core.truth_(hoplon.core._do_BANG_)?hoplon.core._do_BANG_.cljs$lang$test:null)])),opts10497_10516);
if(cljs.core.truth_(checked__9772__auto__)){
hoplon.core._do_BANG_ = checked__9772__auto__;
} else {
}

return cljs.core.cst$sym$hoplon$core_SLASH__DASH_do_BANG_;
});})(opts10497_10516))
], null)))));

var opts10507 = null;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (opts10507){
return (function (ret__9804__auto__,p__10508){
var vec__10509 = p__10508;
var ___9805__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10509,(0),null);
var f__9806__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10509,(1),null);
var sym__9807__auto__ = (f__9806__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9806__auto__.cljs$core$IFn$_invoke$arity$0() : f__9806__auto__.call(null));
var G__10512 = ret__9804__auto__;
if(cljs.core.truth_(sym__9807__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__10512,sym__9807__auto__);
} else {
return G__10512;
}
});})(opts10507))
,cljs.core.PersistentVector.EMPTY,cljs.spec.test.alpha.distinct_by(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (opts10507){
return (function (p1__9803__9808__auto__){
var G__10514 = cljs.core.first(p1__9803__9808__auto__);
var fexpr__10513 = cljs.spec.test.alpha.instrumentable_syms.cljs$core$IFn$_invoke$arity$1(opts10507);
return (fexpr__10513.cljs$core$IFn$_invoke$arity$1 ? fexpr__10513.cljs$core$IFn$_invoke$arity$1(G__10514) : fexpr__10513.call(null,G__10514));
});})(opts10507))
,cljs.core.zipmap(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$hoplon$core_SLASH__DASH_on_BANG_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (opts10507){
return (function (){
var checked__9772__auto__ = cljs.spec.test.alpha.instrument_1_STAR_(cljs.core.cst$sym$hoplon$core_SLASH__DASH_on_BANG_,new cljs.core.Var(function(){return hoplon.core._on_BANG_;},cljs.core.cst$sym$hoplon$core_SLASH__DASH_on_BANG_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$private,cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[true,cljs.core.cst$sym$hoplon$core,cljs.core.cst$sym$_DASH_on_BANG_,"/Users/davidmeister/.boot/cache/tmp/Users/davidmeister/javelin-timesync/1mfz/7xhqgu/index.html.out/hoplon/core.cljs",12,1,83,83,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$elem,cljs.core.cst$sym$this,cljs.core.cst$sym$value], null)),null,(cljs.core.truth_(hoplon.core._on_BANG_)?hoplon.core._on_BANG_.cljs$lang$test:null)])),opts10507);
if(cljs.core.truth_(checked__9772__auto__)){
hoplon.core._on_BANG_ = checked__9772__auto__;
} else {
}

return cljs.core.cst$sym$hoplon$core_SLASH__DASH_on_BANG_;
});})(opts10507))
], null)))));
});

/**
 * @interface
 */
hoplon.core.IHoplonElement = function(){};

/**
 * Sets attributes on a managed element using native functionality.
 */
hoplon.core._set_attributes_BANG_ = (function hoplon$core$_set_attributes_BANG_(this$,kvs){
if(((!((this$ == null))) && (!((this$.hoplon$core$IHoplonElement$_set_attributes_BANG_$arity$2 == null))))){
return this$.hoplon$core$IHoplonElement$_set_attributes_BANG_$arity$2(this$,kvs);
} else {
var x__4211__auto__ = (((this$ == null))?null:this$);
var m__4212__auto__ = (hoplon.core._set_attributes_BANG_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$2(this$,kvs) : m__4212__auto__.call(null,this$,kvs));
} else {
var m__4212__auto____$1 = (hoplon.core._set_attributes_BANG_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,kvs) : m__4212__auto____$1.call(null,this$,kvs));
} else {
throw cljs.core.missing_protocol("IHoplonElement.-set-attributes!",this$);
}
}
}
});

/**
 * Sets styles on a managed element using native functionality.
 */
hoplon.core._set_styles_BANG_ = (function hoplon$core$_set_styles_BANG_(this$,kvs){
if(((!((this$ == null))) && (!((this$.hoplon$core$IHoplonElement$_set_styles_BANG_$arity$2 == null))))){
return this$.hoplon$core$IHoplonElement$_set_styles_BANG_$arity$2(this$,kvs);
} else {
var x__4211__auto__ = (((this$ == null))?null:this$);
var m__4212__auto__ = (hoplon.core._set_styles_BANG_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$2(this$,kvs) : m__4212__auto__.call(null,this$,kvs));
} else {
var m__4212__auto____$1 = (hoplon.core._set_styles_BANG_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,kvs) : m__4212__auto____$1.call(null,this$,kvs));
} else {
throw cljs.core.missing_protocol("IHoplonElement.-set-styles!",this$);
}
}
}
});

/**
 * Returns the hoplon managed kids atom, or creates it if missing exist.
 */
hoplon.core._hoplon_kids = (function hoplon$core$_hoplon_kids(this$){
if(((!((this$ == null))) && (!((this$.hoplon$core$IHoplonElement$_hoplon_kids$arity$1 == null))))){
return this$.hoplon$core$IHoplonElement$_hoplon_kids$arity$1(this$);
} else {
var x__4211__auto__ = (((this$ == null))?null:this$);
var m__4212__auto__ = (hoplon.core._hoplon_kids[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4212__auto__.call(null,this$));
} else {
var m__4212__auto____$1 = (hoplon.core._hoplon_kids["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4212__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IHoplonElement.-hoplon-kids",this$);
}
}
}
});

/**
 * Appends `child` to `this` for the case of `this` being a managed element.
 */
hoplon.core._append_child_BANG_ = (function hoplon$core$_append_child_BANG_(this$,child){
if(((!((this$ == null))) && (!((this$.hoplon$core$IHoplonElement$_append_child_BANG_$arity$2 == null))))){
return this$.hoplon$core$IHoplonElement$_append_child_BANG_$arity$2(this$,child);
} else {
var x__4211__auto__ = (((this$ == null))?null:this$);
var m__4212__auto__ = (hoplon.core._append_child_BANG_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$2(this$,child) : m__4212__auto__.call(null,this$,child));
} else {
var m__4212__auto____$1 = (hoplon.core._append_child_BANG_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,child) : m__4212__auto____$1.call(null,this$,child));
} else {
throw cljs.core.missing_protocol("IHoplonElement.-append-child!",this$);
}
}
}
});

/**
 * Removes `child` from `this` for the case of `this` being a managed element.
 */
hoplon.core._remove_child_BANG_ = (function hoplon$core$_remove_child_BANG_(this$,child){
if(((!((this$ == null))) && (!((this$.hoplon$core$IHoplonElement$_remove_child_BANG_$arity$2 == null))))){
return this$.hoplon$core$IHoplonElement$_remove_child_BANG_$arity$2(this$,child);
} else {
var x__4211__auto__ = (((this$ == null))?null:this$);
var m__4212__auto__ = (hoplon.core._remove_child_BANG_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$2(this$,child) : m__4212__auto__.call(null,this$,child));
} else {
var m__4212__auto____$1 = (hoplon.core._remove_child_BANG_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,child) : m__4212__auto____$1.call(null,this$,child));
} else {
throw cljs.core.missing_protocol("IHoplonElement.-remove-child!",this$);
}
}
}
});

/**
 * Replaces `existing` with `new` in `this` for the case of `this` being a managed element.
 */
hoplon.core._replace_child_BANG_ = (function hoplon$core$_replace_child_BANG_(this$,new$,existing){
if(((!((this$ == null))) && (!((this$.hoplon$core$IHoplonElement$_replace_child_BANG_$arity$3 == null))))){
return this$.hoplon$core$IHoplonElement$_replace_child_BANG_$arity$3(this$,new$,existing);
} else {
var x__4211__auto__ = (((this$ == null))?null:this$);
var m__4212__auto__ = (hoplon.core._replace_child_BANG_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$3(this$,new$,existing) : m__4212__auto__.call(null,this$,new$,existing));
} else {
var m__4212__auto____$1 = (hoplon.core._replace_child_BANG_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,new$,existing) : m__4212__auto____$1.call(null,this$,new$,existing));
} else {
throw cljs.core.missing_protocol("IHoplonElement.-replace-child!",this$);
}
}
}
});

/**
 * Inserts `existing` before `new` in `this` for the case of `this` being a managed element.
 */
hoplon.core._insert_before_BANG_ = (function hoplon$core$_insert_before_BANG_(this$,new$,existing){
if(((!((this$ == null))) && (!((this$.hoplon$core$IHoplonElement$_insert_before_BANG_$arity$3 == null))))){
return this$.hoplon$core$IHoplonElement$_insert_before_BANG_$arity$3(this$,new$,existing);
} else {
var x__4211__auto__ = (((this$ == null))?null:this$);
var m__4212__auto__ = (hoplon.core._insert_before_BANG_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$3(this$,new$,existing) : m__4212__auto__.call(null,this$,new$,existing));
} else {
var m__4212__auto____$1 = (hoplon.core._insert_before_BANG_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,new$,existing) : m__4212__auto____$1.call(null,this$,new$,existing));
} else {
throw cljs.core.missing_protocol("IHoplonElement.-insert-before!",this$);
}
}
}
});

/**
 * Returns true if elem is a managed element. Managed elements have
 *   their children managed by Hoplon and implement the IHoplonElement protocol.
 */
hoplon.core.element_QMARK_ = (function hoplon$core$element_QMARK_(this$){
var and__3911__auto__ = (this$ instanceof Element);
if(and__3911__auto__){
if(!((this$ == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === this$.hoplon$core$IHoplonElement$)))){
return true;
} else {
if((!this$.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(hoplon.core.IHoplonElement,this$);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(hoplon.core.IHoplonElement,this$);
}
} else {
return and__3911__auto__;
}
});
/**
 * Returns true if elem is a native element. Native elements' children
 *   are not managed by Hoplon, and have not been extended with IHoplonElement.
 */
hoplon.core.native_QMARK_ = (function hoplon$core$native_QMARK_(elem){
return (((elem instanceof Element)) && (cljs.core.not(hoplon.core.element_QMARK_(elem))));
});
hoplon.core.native_node_QMARK_ = (function hoplon$core$native_node_QMARK_(node){

return (((node instanceof Node)) && (cljs.core.not(hoplon.core.element_QMARK_(node))));
});
hoplon.core.hoplonify_BANG_ = (function hoplon$core$hoplonify_BANG_(elem){
var x10525 = elem;
x10525.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

x10525.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = ((function (x10525){
return (function (this$,writer,opts){
var this$__$1 = this;
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["#<HoplonElement: ",this$__$1.tagName,">"], 0));
});})(x10525))
;

x10525.cljs$core$ILookup$ = cljs.core.PROTOCOL_SENTINEL;

x10525.cljs$core$ILookup$_lookup$arity$2 = ((function (x10525){
return (function (this$,k){
var this$__$1 = this;
if(cljs.core.truth_(hoplon.core.attribute_QMARK_(k))){
return this$__$1.getAttribute(cljs.core.name(k));
} else {
var G__10526 = this$__$1.children;
var G__10527 = k;
return goog.object.get(G__10526,G__10527);
}
});})(x10525))
;

x10525.cljs$core$ILookup$_lookup$arity$3 = ((function (x10525){
return (function (this$,k,not_found){
var this$__$1 = this;
var or__3922__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(this$__$1,k);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return not_found;
}
});})(x10525))
;

x10525.hoplon$core$IHoplonElement$ = cljs.core.PROTOCOL_SENTINEL;

x10525.hoplon$core$IHoplonElement$_set_attributes_BANG_$arity$2 = ((function (x10525){
return (function (this$,kvs){
var this$__$1 = this;
var e = this$__$1;
var seq__10528 = cljs.core.seq(kvs);
var chunk__10530 = null;
var count__10531 = (0);
var i__10532 = (0);
while(true){
if((i__10532 < count__10531)){
var vec__10534 = chunk__10530.cljs$core$IIndexed$_nth$arity$2(null,i__10532);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10534,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10534,(1),null);
var k_10556__$1 = cljs.core.name(k);
if(cljs.core.not(v)){
e.removeAttribute(k_10556__$1);
} else {
e.setAttribute(k_10556__$1,((v === true)?k_10556__$1:v));
}


var G__10557 = seq__10528;
var G__10558 = chunk__10530;
var G__10559 = count__10531;
var G__10560 = (i__10532 + (1));
seq__10528 = G__10557;
chunk__10530 = G__10558;
count__10531 = G__10559;
i__10532 = G__10560;
continue;
} else {
var temp__5535__auto__ = cljs.core.seq(seq__10528);
if(temp__5535__auto__){
var seq__10528__$1 = temp__5535__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10528__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__10528__$1);
var G__10561 = cljs.core.chunk_rest(seq__10528__$1);
var G__10562 = c__4319__auto__;
var G__10563 = cljs.core.count(c__4319__auto__);
var G__10564 = (0);
seq__10528 = G__10561;
chunk__10530 = G__10562;
count__10531 = G__10563;
i__10532 = G__10564;
continue;
} else {
var vec__10537 = cljs.core.first(seq__10528__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10537,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10537,(1),null);
var k_10565__$1 = cljs.core.name(k);
if(cljs.core.not(v)){
e.removeAttribute(k_10565__$1);
} else {
e.setAttribute(k_10565__$1,((v === true)?k_10565__$1:v));
}


var G__10566 = cljs.core.next(seq__10528__$1);
var G__10567 = null;
var G__10568 = (0);
var G__10569 = (0);
seq__10528 = G__10566;
chunk__10530 = G__10567;
count__10531 = G__10568;
i__10532 = G__10569;
continue;
}
} else {
return null;
}
}
break;
}
});})(x10525))
;

x10525.hoplon$core$IHoplonElement$_set_styles_BANG_$arity$2 = ((function (x10525){
return (function (this$,kvs){
var this$__$1 = this;
var e = this$__$1;
var seq__10540 = cljs.core.seq(kvs);
var chunk__10541 = null;
var count__10542 = (0);
var i__10543 = (0);
while(true){
if((i__10543 < count__10542)){
var vec__10544 = chunk__10541.cljs$core$IIndexed$_nth$arity$2(null,i__10543);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10544,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10544,(1),null);
var G__10547_10570 = e.style;
var G__10548_10571 = cljs.core.name(k);
var G__10549_10572 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('');
goog.object.set(G__10547_10570,G__10548_10571,G__10549_10572);


var G__10573 = seq__10540;
var G__10574 = chunk__10541;
var G__10575 = count__10542;
var G__10576 = (i__10543 + (1));
seq__10540 = G__10573;
chunk__10541 = G__10574;
count__10542 = G__10575;
i__10543 = G__10576;
continue;
} else {
var temp__5535__auto__ = cljs.core.seq(seq__10540);
if(temp__5535__auto__){
var seq__10540__$1 = temp__5535__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10540__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__10540__$1);
var G__10577 = cljs.core.chunk_rest(seq__10540__$1);
var G__10578 = c__4319__auto__;
var G__10579 = cljs.core.count(c__4319__auto__);
var G__10580 = (0);
seq__10540 = G__10577;
chunk__10541 = G__10578;
count__10542 = G__10579;
i__10543 = G__10580;
continue;
} else {
var vec__10550 = cljs.core.first(seq__10540__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10550,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10550,(1),null);
var G__10553_10581 = e.style;
var G__10554_10582 = cljs.core.name(k);
var G__10555_10583 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('');
goog.object.set(G__10553_10581,G__10554_10582,G__10555_10583);


var G__10584 = cljs.core.next(seq__10540__$1);
var G__10585 = null;
var G__10586 = (0);
var G__10587 = (0);
seq__10540 = G__10584;
chunk__10541 = G__10585;
count__10542 = G__10586;
i__10543 = G__10587;
continue;
}
} else {
return null;
}
}
break;
}
});})(x10525))
;

x10525.hoplon$core$IHoplonElement$_hoplon_kids$arity$1 = ((function (x10525){
return (function (this$){
var this$__$1 = this;
var temp__5533__auto__ = this$__$1.hoplonKids;
if(cljs.core.truth_(temp__5533__auto__)){
var hl_kids = temp__5533__auto__;
return hl_kids;
} else {
var kids = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(hoplon.core.child_vec(this$__$1));
this$__$1.hoplonKids = kids;

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(kids,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(hoplon.core.merge_kids,this$__$1));

return kids;
}
});})(x10525))
;

x10525.hoplon$core$IHoplonElement$_append_child_BANG_$arity$2 = ((function (x10525){
return (function (this$,child){
var this$__$1 = this;
var child__$1 = child;
var kids_10588 = hoplon.core._hoplon_kids(this$__$1);
var i_10589 = cljs.core.count(cljs.core.deref(kids_10588));
if(cljs.core.truth_(javelin.core.cell_QMARK_(child__$1))){
hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(child__$1,((function (kids_10588,i_10589,child__$1,this$__$1,x10525){
return (function (p1__10520_SHARP_,p2__10519_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kids_10588,cljs.core.assoc,i_10589,p2__10519_SHARP_);
});})(kids_10588,i_10589,child__$1,this$__$1,x10525))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kids_10588,cljs.core.assoc,i_10589,child__$1);
}

return child__$1;
});})(x10525))
;

x10525.hoplon$core$IHoplonElement$_remove_child_BANG_$arity$2 = ((function (x10525){
return (function (this$,child){
var this$__$1 = this;
var child__$1 = child;
var kids_10590 = hoplon.core._hoplon_kids(this$__$1);
var before_count_10591 = cljs.core.count(cljs.core.deref(kids_10590));
if(cljs.core.truth_(javelin.core.cell_QMARK_(child__$1))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(kids_10590,((function (kids_10590,before_count_10591,child__$1,this$__$1,x10525){
return (function (p1__10521_SHARP_){
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,cljs.core.deref(child__$1)),p1__10521_SHARP_));
});})(kids_10590,before_count_10591,child__$1,this$__$1,x10525))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(kids_10590,((function (kids_10590,before_count_10591,child__$1,this$__$1,x10525){
return (function (p1__10522_SHARP_){
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,child__$1),p1__10522_SHARP_));
});})(kids_10590,before_count_10591,child__$1,this$__$1,x10525))
);
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.deref(kids_10590)),(before_count_10591 - (1)))){
} else {
throw (new Error("Attempted to remove a node that is not a child of parent."));
}

return child__$1;
});})(x10525))
;

x10525.hoplon$core$IHoplonElement$_replace_child_BANG_$arity$3 = ((function (x10525){
return (function (this$,new$,existing){
var this$__$1 = this;
var existing__$1 = existing;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(hoplon.core._hoplon_kids(this$__$1),((function (existing__$1,this$__$1,x10525){
return (function (p1__10523_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (existing__$1,this$__$1,x10525){
return (function (el){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(el,existing__$1)){
return new$;
} else {
return el;
}
});})(existing__$1,this$__$1,x10525))
,p1__10523_SHARP_);
});})(existing__$1,this$__$1,x10525))
);

return existing__$1;
});})(x10525))
;

x10525.hoplon$core$IHoplonElement$_insert_before_BANG_$arity$3 = ((function (x10525){
return (function (this$,new$,existing){
var this$__$1 = this;
var new$__$1 = new$;
if(cljs.core.not(existing)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(hoplon.core._hoplon_kids(this$__$1),cljs.core.conj,new$__$1);
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new$__$1,existing)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(hoplon.core._hoplon_kids(this$__$1),((function (new$__$1,this$__$1,x10525){
return (function (p1__10524_SHARP_){
return cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (new$__$1,this$__$1,x10525){
return (function (el){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(el,existing)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new$__$1,el], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [el], null);
}
});})(new$__$1,this$__$1,x10525))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__10524_SHARP_], 0)));
});})(new$__$1,this$__$1,x10525))
);
} else {
}
}

return new$__$1;
});})(x10525))
;

return x10525;
});
hoplon.core.__GT_hoplon = (function hoplon$core$__GT_hoplon(elem){
if(cljs.core.truth_(hoplon.core.element_QMARK_(elem))){
return elem;
} else {
var _ = elem;
hoplon.core.hoplonify_BANG_(elem);

return _;
}
});
hoplon.core.set_attributes_BANG_ = (function hoplon$core$set_attributes_BANG_(var_args){
var G__10597 = arguments.length;
switch (G__10597) {
case 2:
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4514__auto__ = [];
var len__4499__auto___10599 = arguments.length;
var i__4500__auto___10600 = (0);
while(true){
if((i__4500__auto___10600 < len__4499__auto___10599)){
args_arr__4514__auto__.push((arguments[i__4500__auto___10600]));

var G__10601 = (i__4500__auto___10600 + (1));
i__4500__auto___10600 = G__10601;
continue;
} else {
}
break;
}

var argseq__4515__auto__ = (new cljs.core.IndexedSeq(args_arr__4514__auto__.slice((3)),(0),null));
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4515__auto__);

}
});

hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
return hoplon.core._set_attributes_BANG_(hoplon.core.__GT_hoplon(this$),kvs);
});

hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,k,v,kvs){
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.hash_map,k,v,kvs));
});

/** @this {Function} */
hoplon.core.set_attributes_BANG_.cljs$lang$applyTo = (function (seq10593){
var G__10594 = cljs.core.first(seq10593);
var seq10593__$1 = cljs.core.next(seq10593);
var G__10595 = cljs.core.first(seq10593__$1);
var seq10593__$2 = cljs.core.next(seq10593__$1);
var G__10596 = cljs.core.first(seq10593__$2);
var seq10593__$3 = cljs.core.next(seq10593__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10594,G__10595,G__10596,seq10593__$3);
});

hoplon.core.set_attributes_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.core.set_styles_BANG_ = (function hoplon$core$set_styles_BANG_(var_args){
var G__10607 = arguments.length;
switch (G__10607) {
case 2:
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4514__auto__ = [];
var len__4499__auto___10609 = arguments.length;
var i__4500__auto___10610 = (0);
while(true){
if((i__4500__auto___10610 < len__4499__auto___10609)){
args_arr__4514__auto__.push((arguments[i__4500__auto___10610]));

var G__10611 = (i__4500__auto___10610 + (1));
i__4500__auto___10610 = G__10611;
continue;
} else {
}
break;
}

var argseq__4515__auto__ = (new cljs.core.IndexedSeq(args_arr__4514__auto__.slice((3)),(0),null));
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4515__auto__);

}
});

hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
return hoplon.core._set_styles_BANG_(hoplon.core.__GT_hoplon(this$),kvs);
});

hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,k,v,kvs){
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.hash_map,k,v,kvs));
});

/** @this {Function} */
hoplon.core.set_styles_BANG_.cljs$lang$applyTo = (function (seq10603){
var G__10604 = cljs.core.first(seq10603);
var seq10603__$1 = cljs.core.next(seq10603);
var G__10605 = cljs.core.first(seq10603__$1);
var seq10603__$2 = cljs.core.next(seq10603__$1);
var G__10606 = cljs.core.first(seq10603__$2);
var seq10603__$3 = cljs.core.next(seq10603__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10604,G__10605,G__10606,seq10603__$3);
});

hoplon.core.set_styles_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.core.append_child_BANG_ = (function hoplon$core$append_child_BANG_(this$,child){
return hoplon.core._append_child_BANG_(hoplon.core.__GT_hoplon(this$),child);
});
hoplon.core.remove_child_BANG_ = (function hoplon$core$remove_child_BANG_(this$,child){
return hoplon.core._remove_child_BANG_(hoplon.core.__GT_hoplon(this$),child);
});
hoplon.core.replace_child_BANG_ = (function hoplon$core$replace_child_BANG_(this$,new$,existing){
return hoplon.core._replace_child_BANG_(hoplon.core.__GT_hoplon(this$),new$,existing);
});
hoplon.core.insert_before_BANG_ = (function hoplon$core$insert_before_BANG_(this$,new$,existing){
return hoplon.core._insert_before_BANG_(hoplon.core.__GT_hoplon(this$),new$,existing);
});
hoplon.core.add_attributes_BANG_ = (function hoplon$core$add_attributes_BANG_(this$,attr){
return cljs.core.reduce_kv((function (p1__10613_SHARP_,p2__10612_SHARP_,p3__10614_SHARP_){
hoplon.core._attribute_BANG_(p2__10612_SHARP_,p1__10613_SHARP_,p3__10614_SHARP_);

return p1__10613_SHARP_;
}),this$,attr);
});
hoplon.core.add_children_BANG_ = (function hoplon$core$add_children_BANG_(this$,p__10615){
var vec__10616 = p__10615;
var seq__10617 = cljs.core.seq(vec__10616);
var first__10618 = cljs.core.first(seq__10617);
var seq__10617__$1 = cljs.core.next(seq__10617);
var child_cell = first__10618;
var _ = seq__10617__$1;
var kids = vec__10616;
var this$__$1 = this$;
var seq__10619_10623 = cljs.core.seq(hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1(kids));
var chunk__10620_10624 = null;
var count__10621_10625 = (0);
var i__10622_10626 = (0);
while(true){
if((i__10622_10626 < count__10621_10625)){
var x_10627 = chunk__10620_10624.cljs$core$IIndexed$_nth$arity$2(null,i__10622_10626);
var temp__5535__auto___10628 = hoplon.core.__GT_node(x_10627);
if(cljs.core.truth_(temp__5535__auto___10628)){
var x_10629__$1 = temp__5535__auto___10628;
hoplon.core._append_child_BANG_(this$__$1,x_10629__$1);
} else {
}


var G__10630 = seq__10619_10623;
var G__10631 = chunk__10620_10624;
var G__10632 = count__10621_10625;
var G__10633 = (i__10622_10626 + (1));
seq__10619_10623 = G__10630;
chunk__10620_10624 = G__10631;
count__10621_10625 = G__10632;
i__10622_10626 = G__10633;
continue;
} else {
var temp__5535__auto___10634 = cljs.core.seq(seq__10619_10623);
if(temp__5535__auto___10634){
var seq__10619_10635__$1 = temp__5535__auto___10634;
if(cljs.core.chunked_seq_QMARK_(seq__10619_10635__$1)){
var c__4319__auto___10636 = cljs.core.chunk_first(seq__10619_10635__$1);
var G__10637 = cljs.core.chunk_rest(seq__10619_10635__$1);
var G__10638 = c__4319__auto___10636;
var G__10639 = cljs.core.count(c__4319__auto___10636);
var G__10640 = (0);
seq__10619_10623 = G__10637;
chunk__10620_10624 = G__10638;
count__10621_10625 = G__10639;
i__10622_10626 = G__10640;
continue;
} else {
var x_10641 = cljs.core.first(seq__10619_10635__$1);
var temp__5535__auto___10642__$1 = hoplon.core.__GT_node(x_10641);
if(cljs.core.truth_(temp__5535__auto___10642__$1)){
var x_10643__$1 = temp__5535__auto___10642__$1;
hoplon.core._append_child_BANG_(this$__$1,x_10643__$1);
} else {
}


var G__10644 = cljs.core.next(seq__10619_10635__$1);
var G__10645 = null;
var G__10646 = (0);
var G__10647 = (0);
seq__10619_10623 = G__10644;
chunk__10620_10624 = G__10645;
count__10621_10625 = G__10646;
i__10622_10626 = G__10647;
continue;
}
} else {
}
}
break;
}

return this$__$1;
});
hoplon.core.invoke_BANG_ = (function hoplon$core$invoke_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___10654 = arguments.length;
var i__4500__auto___10655 = (0);
while(true){
if((i__4500__auto___10655 < len__4499__auto___10654)){
args__4502__auto__.push((arguments[i__4500__auto___10655]));

var G__10656 = (i__4500__auto___10655 + (1));
i__4500__auto___10655 = G__10656;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
var vec__10650 = hoplon.core.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10650,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10650,(1),null);
var G__10653 = hoplon.core.__GT_hoplon(this$);
hoplon.core.add_attributes_BANG_(G__10653,attr);

hoplon.core.add_children_BANG_(G__10653,kids);

return G__10653;
});

hoplon.core.invoke_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
hoplon.core.invoke_BANG_.cljs$lang$applyTo = (function (seq10648){
var G__10649 = cljs.core.first(seq10648);
var seq10648__$1 = cljs.core.next(seq10648);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10649,seq10648__$1);
});

Element.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

Element.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var this$__$1 = this;
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["#<Element: ",this$__$1.tagName,">"], 0));
});

Element.prototype.cljs$core$IFn$ = cljs.core.PROTOCOL_SENTINEL;

Element.prototype.call = (function() {
var G__10658 = null;
var G__10658__1 = (function (self__){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_(this$);
});
var G__10658__2 = (function (self__,a){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a], 0));
});
var G__10658__3 = (function (self__,a,b){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b], 0));
});
var G__10658__4 = (function (self__,a,b,c){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c], 0));
});
var G__10658__5 = (function (self__,a,b,c,d){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d], 0));
});
var G__10658__6 = (function (self__,a,b,c,d,e){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e], 0));
});
var G__10658__7 = (function (self__,a,b,c,d,e,f){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f], 0));
});
var G__10658__8 = (function (self__,a,b,c,d,e,f,g){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g], 0));
});
var G__10658__9 = (function (self__,a,b,c,d,e,f,g,h){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h], 0));
});
var G__10658__10 = (function (self__,a,b,c,d,e,f,g,h,i){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i], 0));
});
var G__10658__11 = (function (self__,a,b,c,d,e,f,g,h,i,j){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j], 0));
});
var G__10658__12 = (function (self__,a,b,c,d,e,f,g,h,i,j,k){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k], 0));
});
var G__10658__13 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l], 0));
});
var G__10658__14 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m], 0));
});
var G__10658__15 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n], 0));
});
var G__10658__16 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o], 0));
});
var G__10658__17 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p], 0));
});
var G__10658__18 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q], 0));
});
var G__10658__19 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r], 0));
});
var G__10658__20 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s], 0));
});
var G__10658__21 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t], 0));
});
var G__10658__22 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest], 0));
});
G__10658 = function(self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
switch(arguments.length){
case 1:
return G__10658__1.call(this,self__);
case 2:
return G__10658__2.call(this,self__,a);
case 3:
return G__10658__3.call(this,self__,a,b);
case 4:
return G__10658__4.call(this,self__,a,b,c);
case 5:
return G__10658__5.call(this,self__,a,b,c,d);
case 6:
return G__10658__6.call(this,self__,a,b,c,d,e);
case 7:
return G__10658__7.call(this,self__,a,b,c,d,e,f);
case 8:
return G__10658__8.call(this,self__,a,b,c,d,e,f,g);
case 9:
return G__10658__9.call(this,self__,a,b,c,d,e,f,g,h);
case 10:
return G__10658__10.call(this,self__,a,b,c,d,e,f,g,h,i);
case 11:
return G__10658__11.call(this,self__,a,b,c,d,e,f,g,h,i,j);
case 12:
return G__10658__12.call(this,self__,a,b,c,d,e,f,g,h,i,j,k);
case 13:
return G__10658__13.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l);
case 14:
return G__10658__14.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m);
case 15:
return G__10658__15.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case 16:
return G__10658__16.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case 17:
return G__10658__17.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case 18:
return G__10658__18.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return G__10658__19.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
case 20:
return G__10658__20.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);
case 21:
return G__10658__21.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
case 22:
return G__10658__22.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__10658.cljs$core$IFn$_invoke$arity$1 = G__10658__1;
G__10658.cljs$core$IFn$_invoke$arity$2 = G__10658__2;
G__10658.cljs$core$IFn$_invoke$arity$3 = G__10658__3;
G__10658.cljs$core$IFn$_invoke$arity$4 = G__10658__4;
G__10658.cljs$core$IFn$_invoke$arity$5 = G__10658__5;
G__10658.cljs$core$IFn$_invoke$arity$6 = G__10658__6;
G__10658.cljs$core$IFn$_invoke$arity$7 = G__10658__7;
G__10658.cljs$core$IFn$_invoke$arity$8 = G__10658__8;
G__10658.cljs$core$IFn$_invoke$arity$9 = G__10658__9;
G__10658.cljs$core$IFn$_invoke$arity$10 = G__10658__10;
G__10658.cljs$core$IFn$_invoke$arity$11 = G__10658__11;
G__10658.cljs$core$IFn$_invoke$arity$12 = G__10658__12;
G__10658.cljs$core$IFn$_invoke$arity$13 = G__10658__13;
G__10658.cljs$core$IFn$_invoke$arity$14 = G__10658__14;
G__10658.cljs$core$IFn$_invoke$arity$15 = G__10658__15;
G__10658.cljs$core$IFn$_invoke$arity$16 = G__10658__16;
G__10658.cljs$core$IFn$_invoke$arity$17 = G__10658__17;
G__10658.cljs$core$IFn$_invoke$arity$18 = G__10658__18;
G__10658.cljs$core$IFn$_invoke$arity$19 = G__10658__19;
G__10658.cljs$core$IFn$_invoke$arity$20 = G__10658__20;
G__10658.cljs$core$IFn$_invoke$arity$21 = G__10658__21;
G__10658.cljs$core$IFn$_invoke$arity$22 = G__10658__22;
return G__10658;
})()
;

Element.prototype.apply = (function (self__,args10657){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args10657)));
});

Element.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var this$ = this;
return hoplon.core.invoke_BANG_(this$);
});

Element.prototype.cljs$core$IFn$_invoke$arity$1 = (function (a){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$6 = (function (a,b,c,d,e,f){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$7 = (function (a,b,c,d,e,f,g){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$8 = (function (a,b,c,d,e,f,g,h){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$9 = (function (a,b,c,d,e,f,g,h,i){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$10 = (function (a,b,c,d,e,f,g,h,i,j){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$11 = (function (a,b,c,d,e,f,g,h,i,j,k){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$12 = (function (a,b,c,d,e,f,g,h,i,j,k,l){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$13 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$14 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$15 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$16 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$17 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$18 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$19 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$20 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$21 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest], 0));
});
DocumentFragment.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

DocumentFragment.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var this$__$1 = this;
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["#<DocumentFragment>"], 0));
});

DocumentFragment.prototype.cljs$core$IFn$ = cljs.core.PROTOCOL_SENTINEL;

DocumentFragment.prototype.call = (function() {
var G__10660 = null;
var G__10660__1 = (function (self__){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_(this$);
});
var G__10660__2 = (function (self__,a){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a], 0));
});
var G__10660__3 = (function (self__,a,b){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b], 0));
});
var G__10660__4 = (function (self__,a,b,c){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c], 0));
});
var G__10660__5 = (function (self__,a,b,c,d){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d], 0));
});
var G__10660__6 = (function (self__,a,b,c,d,e){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e], 0));
});
var G__10660__7 = (function (self__,a,b,c,d,e,f){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f], 0));
});
var G__10660__8 = (function (self__,a,b,c,d,e,f,g){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g], 0));
});
var G__10660__9 = (function (self__,a,b,c,d,e,f,g,h){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h], 0));
});
var G__10660__10 = (function (self__,a,b,c,d,e,f,g,h,i){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i], 0));
});
var G__10660__11 = (function (self__,a,b,c,d,e,f,g,h,i,j){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j], 0));
});
var G__10660__12 = (function (self__,a,b,c,d,e,f,g,h,i,j,k){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k], 0));
});
var G__10660__13 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l], 0));
});
var G__10660__14 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m], 0));
});
var G__10660__15 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n], 0));
});
var G__10660__16 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o], 0));
});
var G__10660__17 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p], 0));
});
var G__10660__18 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q], 0));
});
var G__10660__19 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r], 0));
});
var G__10660__20 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s], 0));
});
var G__10660__21 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t], 0));
});
var G__10660__22 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest], 0));
});
G__10660 = function(self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
switch(arguments.length){
case 1:
return G__10660__1.call(this,self__);
case 2:
return G__10660__2.call(this,self__,a);
case 3:
return G__10660__3.call(this,self__,a,b);
case 4:
return G__10660__4.call(this,self__,a,b,c);
case 5:
return G__10660__5.call(this,self__,a,b,c,d);
case 6:
return G__10660__6.call(this,self__,a,b,c,d,e);
case 7:
return G__10660__7.call(this,self__,a,b,c,d,e,f);
case 8:
return G__10660__8.call(this,self__,a,b,c,d,e,f,g);
case 9:
return G__10660__9.call(this,self__,a,b,c,d,e,f,g,h);
case 10:
return G__10660__10.call(this,self__,a,b,c,d,e,f,g,h,i);
case 11:
return G__10660__11.call(this,self__,a,b,c,d,e,f,g,h,i,j);
case 12:
return G__10660__12.call(this,self__,a,b,c,d,e,f,g,h,i,j,k);
case 13:
return G__10660__13.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l);
case 14:
return G__10660__14.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m);
case 15:
return G__10660__15.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case 16:
return G__10660__16.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case 17:
return G__10660__17.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case 18:
return G__10660__18.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return G__10660__19.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
case 20:
return G__10660__20.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);
case 21:
return G__10660__21.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
case 22:
return G__10660__22.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__10660.cljs$core$IFn$_invoke$arity$1 = G__10660__1;
G__10660.cljs$core$IFn$_invoke$arity$2 = G__10660__2;
G__10660.cljs$core$IFn$_invoke$arity$3 = G__10660__3;
G__10660.cljs$core$IFn$_invoke$arity$4 = G__10660__4;
G__10660.cljs$core$IFn$_invoke$arity$5 = G__10660__5;
G__10660.cljs$core$IFn$_invoke$arity$6 = G__10660__6;
G__10660.cljs$core$IFn$_invoke$arity$7 = G__10660__7;
G__10660.cljs$core$IFn$_invoke$arity$8 = G__10660__8;
G__10660.cljs$core$IFn$_invoke$arity$9 = G__10660__9;
G__10660.cljs$core$IFn$_invoke$arity$10 = G__10660__10;
G__10660.cljs$core$IFn$_invoke$arity$11 = G__10660__11;
G__10660.cljs$core$IFn$_invoke$arity$12 = G__10660__12;
G__10660.cljs$core$IFn$_invoke$arity$13 = G__10660__13;
G__10660.cljs$core$IFn$_invoke$arity$14 = G__10660__14;
G__10660.cljs$core$IFn$_invoke$arity$15 = G__10660__15;
G__10660.cljs$core$IFn$_invoke$arity$16 = G__10660__16;
G__10660.cljs$core$IFn$_invoke$arity$17 = G__10660__17;
G__10660.cljs$core$IFn$_invoke$arity$18 = G__10660__18;
G__10660.cljs$core$IFn$_invoke$arity$19 = G__10660__19;
G__10660.cljs$core$IFn$_invoke$arity$20 = G__10660__20;
G__10660.cljs$core$IFn$_invoke$arity$21 = G__10660__21;
G__10660.cljs$core$IFn$_invoke$arity$22 = G__10660__22;
return G__10660;
})()
;

DocumentFragment.prototype.apply = (function (self__,args10659){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args10659)));
});

DocumentFragment.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var this$ = this;
return hoplon.core.invoke_BANG_(this$);
});

DocumentFragment.prototype.cljs$core$IFn$_invoke$arity$1 = (function (a){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a], 0));
});

DocumentFragment.prototype.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b], 0));
});

DocumentFragment.prototype.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c], 0));
});

DocumentFragment.prototype.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d], 0));
});

DocumentFragment.prototype.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e], 0));
});

DocumentFragment.prototype.cljs$core$IFn$_invoke$arity$6 = (function (a,b,c,d,e,f){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f], 0));
});

DocumentFragment.prototype.cljs$core$IFn$_invoke$arity$7 = (function (a,b,c,d,e,f,g){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g], 0));
});

DocumentFragment.prototype.cljs$core$IFn$_invoke$arity$8 = (function (a,b,c,d,e,f,g,h){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h], 0));
});

DocumentFragment.prototype.cljs$core$IFn$_invoke$arity$9 = (function (a,b,c,d,e,f,g,h,i){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i], 0));
});

DocumentFragment.prototype.cljs$core$IFn$_invoke$arity$10 = (function (a,b,c,d,e,f,g,h,i,j){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j], 0));
});

DocumentFragment.prototype.cljs$core$IFn$_invoke$arity$11 = (function (a,b,c,d,e,f,g,h,i,j,k){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k], 0));
});

DocumentFragment.prototype.cljs$core$IFn$_invoke$arity$12 = (function (a,b,c,d,e,f,g,h,i,j,k,l){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l], 0));
});

DocumentFragment.prototype.cljs$core$IFn$_invoke$arity$13 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m], 0));
});

DocumentFragment.prototype.cljs$core$IFn$_invoke$arity$14 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n], 0));
});

DocumentFragment.prototype.cljs$core$IFn$_invoke$arity$15 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o], 0));
});

DocumentFragment.prototype.cljs$core$IFn$_invoke$arity$16 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p], 0));
});

DocumentFragment.prototype.cljs$core$IFn$_invoke$arity$17 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q], 0));
});

DocumentFragment.prototype.cljs$core$IFn$_invoke$arity$18 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r], 0));
});

DocumentFragment.prototype.cljs$core$IFn$_invoke$arity$19 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s], 0));
});

DocumentFragment.prototype.cljs$core$IFn$_invoke$arity$20 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t], 0));
});

DocumentFragment.prototype.cljs$core$IFn$_invoke$arity$21 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest], 0));
});
hoplon.core.mksingleton = (function hoplon$core$mksingleton(elem){

return (function() { 
var G__10667__delegate = function (args){
var oelem = goog.object.get(document,elem);
if(cljs.core.truth_(oelem)){
} else {
var G__10661_10668 = document;
var G__10662_10669 = elem;
var G__10663_10670 = document.createElement(elem);
goog.object.set(G__10661_10668,G__10662_10669,G__10663_10670);
}

var helem = hoplon.core.__GT_hoplon(oelem);
var vec__10664_10671 = hoplon.core.parse_args(args);
var attrs_10672 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10664_10671,(0),null);
var kids_10673 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10664_10671,(1),null);
if(cljs.core.truth_(cljs.core.cst$kw$static.cljs$core$IFn$_invoke$arity$1(attrs_10672))){
} else {
hoplon.core.merge_kids(helem,null,null);

hoplon.core.add_attributes_BANG_(helem,attrs_10672);

hoplon.core.add_children_BANG_(helem,kids_10673);
}

return helem;
};
var G__10667 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10674__i = 0, G__10674__a = new Array(arguments.length -  0);
while (G__10674__i < G__10674__a.length) {G__10674__a[G__10674__i] = arguments[G__10674__i + 0]; ++G__10674__i;}
  args = new cljs.core.IndexedSeq(G__10674__a,0,null);
} 
return G__10667__delegate.call(this,args);};
G__10667.cljs$lang$maxFixedArity = 0;
G__10667.cljs$lang$applyTo = (function (arglist__10675){
var args = cljs.core.seq(arglist__10675);
return G__10667__delegate(args);
});
G__10667.cljs$core$IFn$_invoke$arity$variadic = G__10667__delegate;
return G__10667;
})()
;
});
hoplon.core.mkelem = (function hoplon$core$mkelem(tag){

return (function() { 
var G__10679__delegate = function (args){
var vec__10676 = hoplon.core.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10676,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10676,(1),null);
var elem = document.createElement(tag);
var hl = hoplon.core.__GT_hoplon(elem);
return (hl.cljs$core$IFn$_invoke$arity$2 ? hl.cljs$core$IFn$_invoke$arity$2(attr,kids) : hl.call(null,attr,kids));
};
var G__10679 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10680__i = 0, G__10680__a = new Array(arguments.length -  0);
while (G__10680__i < G__10680__a.length) {G__10680__a[G__10680__i] = arguments[G__10680__i + 0]; ++G__10680__i;}
  args = new cljs.core.IndexedSeq(G__10680__a,0,null);
} 
return G__10679__delegate.call(this,args);};
G__10679.cljs$lang$maxFixedArity = 0;
G__10679.cljs$lang$applyTo = (function (arglist__10681){
var args = cljs.core.seq(arglist__10681);
return G__10679__delegate(args);
});
G__10679.cljs$core$IFn$_invoke$arity$variadic = G__10679__delegate;
return G__10679;
})()
;
});
hoplon.core.html = (function hoplon$core$html(var_args){
var args__4502__auto__ = [];
var len__4499__auto___10683 = arguments.length;
var i__4500__auto___10684 = (0);
while(true){
if((i__4500__auto___10684 < len__4499__auto___10683)){
args__4502__auto__.push((arguments[i__4500__auto___10684]));

var G__10685 = (i__4500__auto___10684 + (1));
i__4500__auto___10684 = G__10685;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic = (function (args){

var el = document.documentElement;
hoplon.core.add_attributes_BANG_(hoplon.core.__GT_hoplon(el),cljs.core.first(hoplon.core.parse_args(args)));

return el;
});

hoplon.core.html.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
hoplon.core.html.cljs$lang$applyTo = (function (seq10682){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq10682));
});

/**
 * Updates and returns the document's `head` element in place.
 */
hoplon.core.head = hoplon.core.mksingleton("head");
/**
 * Updates and returns the document's `body` element in place.
 */
hoplon.core.body = hoplon.core.mksingleton("body");
hoplon.core.a = hoplon.core.mkelem("a");
hoplon.core.abbr = hoplon.core.mkelem("abbr");
hoplon.core.address = hoplon.core.mkelem("address");
hoplon.core.area = hoplon.core.mkelem("area");
hoplon.core.article = hoplon.core.mkelem("article");
hoplon.core.aside = hoplon.core.mkelem("aside");
hoplon.core.audio = hoplon.core.mkelem("audio");
hoplon.core.b = hoplon.core.mkelem("b");
hoplon.core.base = hoplon.core.mkelem("base");
hoplon.core.bdi = hoplon.core.mkelem("bdi");
hoplon.core.bdo = hoplon.core.mkelem("bdo");
hoplon.core.blockquote = hoplon.core.mkelem("blockquote");
hoplon.core.br = hoplon.core.mkelem("br");
hoplon.core.button = hoplon.core.mkelem("button");
hoplon.core.canvas = hoplon.core.mkelem("canvas");
hoplon.core.caption = hoplon.core.mkelem("caption");
hoplon.core.cite = hoplon.core.mkelem("cite");
hoplon.core.code = hoplon.core.mkelem("code");
hoplon.core.col = hoplon.core.mkelem("col");
hoplon.core.colgroup = hoplon.core.mkelem("colgroup");
hoplon.core.data = hoplon.core.mkelem("data");
hoplon.core.datalist = hoplon.core.mkelem("datalist");
hoplon.core.dd = hoplon.core.mkelem("dd");
hoplon.core.del = hoplon.core.mkelem("del");
hoplon.core.details = hoplon.core.mkelem("details");
hoplon.core.dfn = hoplon.core.mkelem("dfn");
hoplon.core.dialog = hoplon.core.mkelem("dialog");
hoplon.core.div = hoplon.core.mkelem("div");
hoplon.core.dl = hoplon.core.mkelem("dl");
hoplon.core.dt = hoplon.core.mkelem("dt");
hoplon.core.em = hoplon.core.mkelem("em");
hoplon.core.embed = hoplon.core.mkelem("embed");
hoplon.core.fieldset = hoplon.core.mkelem("fieldset");
hoplon.core.figcaption = hoplon.core.mkelem("figcaption");
hoplon.core.figure = hoplon.core.mkelem("figure");
hoplon.core.footer = hoplon.core.mkelem("footer");
hoplon.core.form = hoplon.core.mkelem("form");
hoplon.core.h1 = hoplon.core.mkelem("h1");
hoplon.core.h2 = hoplon.core.mkelem("h2");
hoplon.core.h3 = hoplon.core.mkelem("h3");
hoplon.core.h4 = hoplon.core.mkelem("h4");
hoplon.core.h5 = hoplon.core.mkelem("h5");
hoplon.core.h6 = hoplon.core.mkelem("h6");
hoplon.core.header = hoplon.core.mkelem("header");
hoplon.core.hgroup = hoplon.core.mkelem("hgroup");
hoplon.core.hr = hoplon.core.mkelem("hr");
hoplon.core.i = hoplon.core.mkelem("i");
hoplon.core.iframe = hoplon.core.mkelem("iframe");
hoplon.core.img = hoplon.core.mkelem("img");
hoplon.core.input = hoplon.core.mkelem("input");
hoplon.core.ins = hoplon.core.mkelem("ins");
hoplon.core.kbd = hoplon.core.mkelem("kbd");
hoplon.core.keygen = hoplon.core.mkelem("keygen");
hoplon.core.label = hoplon.core.mkelem("label");
hoplon.core.legend = hoplon.core.mkelem("legend");
hoplon.core.li = hoplon.core.mkelem("li");
hoplon.core.link = hoplon.core.mkelem("link");
hoplon.core.main = hoplon.core.mkelem("main");
hoplon.core.html_map = hoplon.core.mkelem("map");
hoplon.core.mark = hoplon.core.mkelem("mark");
hoplon.core.menu = hoplon.core.mkelem("menu");
hoplon.core.menuitem = hoplon.core.mkelem("menuitem");
hoplon.core.html_meta = hoplon.core.mkelem("meta");
hoplon.core.meter = hoplon.core.mkelem("meter");
hoplon.core.multicol = hoplon.core.mkelem("multicol");
hoplon.core.nav = hoplon.core.mkelem("nav");
hoplon.core.noframes = hoplon.core.mkelem("noframes");
hoplon.core.noscript = hoplon.core.mkelem("noscript");
hoplon.core.html_object = hoplon.core.mkelem("object");
hoplon.core.ol = hoplon.core.mkelem("ol");
hoplon.core.optgroup = hoplon.core.mkelem("optgroup");
hoplon.core.option = hoplon.core.mkelem("option");
hoplon.core.output = hoplon.core.mkelem("output");
hoplon.core.p = hoplon.core.mkelem("p");
hoplon.core.param = hoplon.core.mkelem("param");
hoplon.core.picture = hoplon.core.mkelem("picture");
hoplon.core.pre = hoplon.core.mkelem("pre");
hoplon.core.progress = hoplon.core.mkelem("progress");
hoplon.core.q = hoplon.core.mkelem("q");
hoplon.core.rp = hoplon.core.mkelem("rp");
hoplon.core.rt = hoplon.core.mkelem("rt");
hoplon.core.rtc = hoplon.core.mkelem("rtc");
hoplon.core.ruby = hoplon.core.mkelem("ruby");
hoplon.core.s = hoplon.core.mkelem("s");
hoplon.core.samp = hoplon.core.mkelem("samp");
hoplon.core.script = hoplon.core.mkelem("script");
hoplon.core.section = hoplon.core.mkelem("section");
hoplon.core.select = hoplon.core.mkelem("select");
hoplon.core.shadow = hoplon.core.mkelem("shadow");
hoplon.core.small = hoplon.core.mkelem("small");
hoplon.core.source = hoplon.core.mkelem("source");
hoplon.core.span = hoplon.core.mkelem("span");
hoplon.core.strong = hoplon.core.mkelem("strong");
hoplon.core.style = hoplon.core.mkelem("style");
hoplon.core.sub = hoplon.core.mkelem("sub");
hoplon.core.summary = hoplon.core.mkelem("summary");
hoplon.core.sup = hoplon.core.mkelem("sup");
hoplon.core.table = hoplon.core.mkelem("table");
hoplon.core.tbody = hoplon.core.mkelem("tbody");
hoplon.core.td = hoplon.core.mkelem("td");
hoplon.core.template = hoplon.core.mkelem("template");
hoplon.core.textarea = hoplon.core.mkelem("textarea");
hoplon.core.tfoot = hoplon.core.mkelem("tfoot");
hoplon.core.th = hoplon.core.mkelem("th");
hoplon.core.thead = hoplon.core.mkelem("thead");
hoplon.core.html_time = hoplon.core.mkelem("time");
hoplon.core.title = hoplon.core.mkelem("title");
hoplon.core.tr = hoplon.core.mkelem("tr");
hoplon.core.track = hoplon.core.mkelem("track");
hoplon.core.u = hoplon.core.mkelem("u");
hoplon.core.ul = hoplon.core.mkelem("ul");
hoplon.core.html_var = hoplon.core.mkelem("var");
hoplon.core.video = hoplon.core.mkelem("video");
hoplon.core.wbr = hoplon.core.mkelem("wbr");
hoplon.core.spliced = cljs.core.vector;
hoplon.core.$text = (function hoplon$core$$text(p1__10686_SHARP_){
return document.createTextNode(p1__10686_SHARP_);
});
hoplon.core.$comment = (function hoplon$core$$comment(p1__10687_SHARP_){
return document.createComment(p1__10687_SHARP_);
});
hoplon.core._LT__BANG___ = hoplon.core.$comment;
hoplon.core.___GT_ = cljs.core.cst$kw$hoplon$core_SLASH__DASH__DASH__GT_;
if(typeof hoplon.core.elem_BANG_ !== 'undefined'){
} else {
hoplon.core.elem_BANG_ = (function (){var method_table__4382__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4383__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4384__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4385__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4386__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$default,cljs.core.cst$kw$hoplon$core_SLASH_default], null),cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("hoplon.core","elem!"),hoplon.core.dispatcher,cljs.core.cst$kw$hoplon$core_SLASH_default,hierarchy__4386__auto__,method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__));
})();
}
hoplon.core.elem_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$hoplon$core_SLASH_default,(function (elem,key,value){
if(cljs.core.truth_(javelin.core.cell_QMARK_(value))){
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(value,(function (p1__10689_SHARP_,p2__10688_SHARP_){
return hoplon.core._do_BANG_(elem,key,p2__10688_SHARP_);
}));
} else {
if(cljs.core.fn_QMARK_(value)){
return hoplon.core._on_BANG_(elem,key,value);
} else {
return hoplon.core._do_BANG_(elem,key,value);

}
}
}));
if(typeof hoplon.core.do_BANG_ !== 'undefined'){
} else {
hoplon.core.do_BANG_ = (function (){var method_table__4382__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4383__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4384__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4385__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4386__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$default,cljs.core.cst$kw$hoplon$core_SLASH_default], null),cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("hoplon.core","do!"),hoplon.core.dispatcher,cljs.core.cst$kw$hoplon$core_SLASH_default,hierarchy__4386__auto__,method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__));
})();
}
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$hoplon$core_SLASH_default,(function (elem,key,val){
var G__10690 = elem;
var G__10691 = cljs.core.cst$kw$attr;
var G__10692 = cljs.core.PersistentArrayMap.createAsIfByAssoc([key,val]);
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__10690,G__10691,G__10692) : hoplon.core.do_BANG_.call(null,G__10690,G__10691,G__10692));
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$attr,(function (elem,_,kvs){
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2(elem,kvs);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$html_SLASH__STAR_,(function (elem,key,val){
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2(elem,val);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$svg_SLASH__STAR_,(function (elem,key,val){
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2(elem,val);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$css,(function (elem,_,kvs){
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2(elem,kvs);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$css_SLASH__STAR_,(function (elem,key,val){
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2(elem,val);
}));
if(typeof hoplon.core.on_BANG_ !== 'undefined'){
} else {
hoplon.core.on_BANG_ = (function (){var method_table__4382__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4383__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4384__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4385__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4386__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$default,cljs.core.cst$kw$hoplon$core_SLASH_default], null),cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("hoplon.core","on!"),hoplon.core.dispatcher,cljs.core.cst$kw$hoplon$core_SLASH_default,hierarchy__4386__auto__,method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__));
})();
}
hoplon.core.on_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$hoplon$core_SLASH_default,(function (elem,event,callback){
return elem.addEventListener(cljs.core.name(event),callback);
}));
hoplon.core.on_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$html_SLASH__STAR_,(function (elem,event,callback){
return elem.addEventListener(cljs.core.name(event),callback);
}));
/**
 * Given a cell items containing a seqable collection, constructs a cell that
 *   works like a fill vector. The template `tpl` is a function of one argument: the
 *   formula cell containing the ith item in items. The tpl function is called
 *   once (and only once) for each index in items. When the items collection
 *   shrinks the DOM element created by the template is not destroyed--it is only
 *   removed from the DOM and cached. When the items collection grows again those
 *   cached elements will be reinserted into the DOM at their original index.
 */
hoplon.core.loop_tpl_STAR_ = (function hoplon$core$loop_tpl_STAR_(items,tpl){
var on_deck = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.List.EMPTY);
var items_seq = (function (){var fexpr__10697 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (on_deck){
return (function (G__10695,G__10696){
return (G__10695.cljs$core$IFn$_invoke$arity$1 ? G__10695.cljs$core$IFn$_invoke$arity$1(G__10696) : G__10695.call(null,G__10696));
});})(on_deck))
);
return (fexpr__10697.cljs$core$IFn$_invoke$arity$2 ? fexpr__10697.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,items) : fexpr__10697.call(null,cljs.core.seq,items));
})();
var ith_item = ((function (on_deck,items_seq){
return (function (p1__10693_SHARP_){
var fexpr__10701 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (on_deck,items_seq){
return (function (G__10700,G__10699,G__10698){
return (G__10698.cljs$core$IFn$_invoke$arity$3 ? G__10698.cljs$core$IFn$_invoke$arity$3(G__10699,G__10700,null) : G__10698.call(null,G__10699,G__10700,null));
});})(on_deck,items_seq))
);
return (fexpr__10701.cljs$core$IFn$_invoke$arity$3 ? fexpr__10701.cljs$core$IFn$_invoke$arity$3(p1__10693_SHARP_,items_seq,cljs.core.nth) : fexpr__10701.call(null,p1__10693_SHARP_,items_seq,cljs.core.nth));
});})(on_deck,items_seq))
;
var shift_BANG_ = ((function (on_deck,items_seq,ith_item){
return (function (p1__10694_SHARP_){
var x = cljs.core.first(cljs.core.deref(p1__10694_SHARP_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(p1__10694_SHARP_,cljs.core.rest);

return x;
});})(on_deck,items_seq,ith_item))
;
var current = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(items_seq,((function (current,on_deck,items_seq,ith_item,shift_BANG_){
return (function (old_items,new_items){
var old = cljs.core.count(old_items);
var new$ = cljs.core.count(new_items);
var diff = (new$ - old);
if((diff > (0))){
var seq__10702 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(old,new$));
var chunk__10703 = null;
var count__10704 = (0);
var i__10705 = (0);
while(true){
if((i__10705 < count__10704)){
var i = chunk__10703.cljs$core$IIndexed$_nth$arity$2(null,i__10705);
var e_10708 = (function (){var or__3922__auto__ = shift_BANG_(on_deck);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var G__10706 = ith_item(i);
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__10706) : tpl.call(null,G__10706));
}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(current,cljs.core.conj,e_10708);


var G__10709 = seq__10702;
var G__10710 = chunk__10703;
var G__10711 = count__10704;
var G__10712 = (i__10705 + (1));
seq__10702 = G__10709;
chunk__10703 = G__10710;
count__10704 = G__10711;
i__10705 = G__10712;
continue;
} else {
var temp__5535__auto__ = cljs.core.seq(seq__10702);
if(temp__5535__auto__){
var seq__10702__$1 = temp__5535__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10702__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__10702__$1);
var G__10713 = cljs.core.chunk_rest(seq__10702__$1);
var G__10714 = c__4319__auto__;
var G__10715 = cljs.core.count(c__4319__auto__);
var G__10716 = (0);
seq__10702 = G__10713;
chunk__10703 = G__10714;
count__10704 = G__10715;
i__10705 = G__10716;
continue;
} else {
var i = cljs.core.first(seq__10702__$1);
var e_10717 = (function (){var or__3922__auto__ = shift_BANG_(on_deck);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var G__10707 = ith_item(i);
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__10707) : tpl.call(null,G__10707));
}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(current,cljs.core.conj,e_10717);


var G__10718 = cljs.core.next(seq__10702__$1);
var G__10719 = null;
var G__10720 = (0);
var G__10721 = (0);
seq__10702 = G__10718;
chunk__10703 = G__10719;
count__10704 = G__10720;
i__10705 = G__10721;
continue;
}
} else {
return null;
}
}
break;
}
} else {
if((diff < (0))){
var n__4376__auto__ = (- diff);
var _ = (0);
while(true){
if((_ < n__4376__auto__)){
var e_10722 = cljs.core.peek(cljs.core.deref(current));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(current,cljs.core.pop);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(on_deck,cljs.core.conj,e_10722);

var G__10723 = (_ + (1));
_ = G__10723;
continue;
} else {
return null;
}
break;
}
} else {
return null;
}
}
});})(current,on_deck,items_seq,ith_item,shift_BANG_))
);

return current;
});
var els_state_10761 = cljs.core.memoize((function (scope){
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}));
var items_state_10762 = cljs.core.memoize(((function (els_state_10761){
return (function (scope){
return javelin.core.cell.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
});})(els_state_10761))
);
/**
 * Like `loop-tpl*` but accepts a `key-fn` which, given a list item returns an
 *   (immutable) key under which to cache and reuse the rendered DOM element.
 *   Also accepts a `scope` allowing keyed items to be tracked across multiple lists
 *   for use in e.g. drag and drop applications.
 *   Only one item per key is supported per scope, it is the application's
 *   responsibility to ensure that item values are consistent and correct across
 *   multiple lists.
 */
hoplon.core.keyed_loop_tpl_STAR_ = ((function (els_state_10761,items_state_10762){
return (function hoplon$core$keyed_loop_tpl_STAR_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___10763 = arguments.length;
var i__4500__auto___10764 = (0);
while(true){
if((i__4500__auto___10764 < len__4499__auto___10763)){
args__4502__auto__.push((arguments[i__4500__auto___10764]));

var G__10765 = (i__4500__auto___10764 + (1));
i__4500__auto___10764 = G__10765;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((2) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((2)),(0),null)):null);
return hoplon.core.keyed_loop_tpl_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4503__auto__);
});})(els_state_10761,items_state_10762))
;

hoplon.core.keyed_loop_tpl_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (els_state_10761,items_state_10762){
return (function (items,tpl,p__10728){
var map__10729 = p__10728;
var map__10729__$1 = ((((!((map__10729 == null)))?(((((map__10729.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10729.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10729):map__10729);
var scope = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10729__$1,cljs.core.cst$kw$scope);
var key_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10729__$1,cljs.core.cst$kw$key_DASH_fn);
var key_fn__$1 = (function (){var or__3922__auto__ = key_fn;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.identity;
}
})();
var ks = (function (){var fexpr__10734 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (key_fn__$1,map__10729,map__10729__$1,scope,key_fn,els_state_10761,items_state_10762){
return (function (G__10733,G__10731,G__10732){
return (G__10731.cljs$core$IFn$_invoke$arity$2 ? G__10731.cljs$core$IFn$_invoke$arity$2(G__10732,G__10733) : G__10731.call(null,G__10732,G__10733));
});})(key_fn__$1,map__10729,map__10729__$1,scope,key_fn,els_state_10761,items_state_10762))
);
return (fexpr__10734.cljs$core$IFn$_invoke$arity$3 ? fexpr__10734.cljs$core$IFn$_invoke$arity$3(items,cljs.core.map,key_fn__$1) : fexpr__10734.call(null,items,cljs.core.map,key_fn__$1));
})();
var els = (cljs.core.truth_(scope)?(els_state_10761.cljs$core$IFn$_invoke$arity$1 ? els_state_10761.cljs$core$IFn$_invoke$arity$1(scope) : els_state_10761.call(null,scope)):cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY));
var scoped_items = (cljs.core.truth_(scope)?(items_state_10762.cljs$core$IFn$_invoke$arity$1 ? items_state_10762.cljs$core$IFn$_invoke$arity$1(scope) : items_state_10762.call(null,scope)):(function (){var fexpr__10738 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (key_fn__$1,ks,els,map__10729,map__10729__$1,scope,key_fn,els_state_10761,items_state_10762){
return (function (G__10737,G__10735,G__10736){
return (G__10735.cljs$core$IFn$_invoke$arity$2 ? G__10735.cljs$core$IFn$_invoke$arity$2(G__10736,G__10737) : G__10735.call(null,G__10736,G__10737));
});})(key_fn__$1,ks,els,map__10729,map__10729__$1,scope,key_fn,els_state_10761,items_state_10762))
);
return (fexpr__10738.cljs$core$IFn$_invoke$arity$3 ? fexpr__10738.cljs$core$IFn$_invoke$arity$3(items,cljs.core.zipmap,ks) : fexpr__10738.call(null,items,cljs.core.zipmap,ks));
})());
var k__GT_el = ((function (key_fn__$1,ks,els,scoped_items,map__10729,map__10729__$1,scope,key_fn,els_state_10761,items_state_10762){
return (function (p1__10724_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(els),p1__10724_SHARP_);
});})(key_fn__$1,ks,els,scoped_items,map__10729,map__10729__$1,scope,key_fn,els_state_10761,items_state_10762))
;
if(cljs.core.truth_(scope)){
hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(items,((function (key_fn__$1,ks,els,scoped_items,k__GT_el,map__10729,map__10729__$1,scope,key_fn,els_state_10761,items_state_10762){
return (function (_,n){
return javelin.core.dosync_STAR_(((function (key_fn__$1,ks,els,scoped_items,k__GT_el,map__10729,map__10729__$1,scope,key_fn,els_state_10761,items_state_10762){
return (function (){
var seq__10739 = cljs.core.seq(n);
var chunk__10740 = null;
var count__10741 = (0);
var i__10742 = (0);
while(true){
if((i__10742 < count__10741)){
var i = chunk__10740.cljs$core$IIndexed$_nth$arity$2(null,i__10742);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(scoped_items,cljs.core.assoc,(key_fn__$1.cljs$core$IFn$_invoke$arity$1 ? key_fn__$1.cljs$core$IFn$_invoke$arity$1(i) : key_fn__$1.call(null,i)),i);


var G__10766 = seq__10739;
var G__10767 = chunk__10740;
var G__10768 = count__10741;
var G__10769 = (i__10742 + (1));
seq__10739 = G__10766;
chunk__10740 = G__10767;
count__10741 = G__10768;
i__10742 = G__10769;
continue;
} else {
var temp__5535__auto__ = cljs.core.seq(seq__10739);
if(temp__5535__auto__){
var seq__10739__$1 = temp__5535__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10739__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__10739__$1);
var G__10770 = cljs.core.chunk_rest(seq__10739__$1);
var G__10771 = c__4319__auto__;
var G__10772 = cljs.core.count(c__4319__auto__);
var G__10773 = (0);
seq__10739 = G__10770;
chunk__10740 = G__10771;
count__10741 = G__10772;
i__10742 = G__10773;
continue;
} else {
var i = cljs.core.first(seq__10739__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(scoped_items,cljs.core.assoc,(key_fn__$1.cljs$core$IFn$_invoke$arity$1 ? key_fn__$1.cljs$core$IFn$_invoke$arity$1(i) : key_fn__$1.call(null,i)),i);


var G__10774 = cljs.core.next(seq__10739__$1);
var G__10775 = null;
var G__10776 = (0);
var G__10777 = (0);
seq__10739 = G__10774;
chunk__10740 = G__10775;
count__10741 = G__10776;
i__10742 = G__10777;
continue;
}
} else {
return null;
}
}
break;
}
});})(key_fn__$1,ks,els,scoped_items,k__GT_el,map__10729,map__10729__$1,scope,key_fn,els_state_10761,items_state_10762))
);
});})(key_fn__$1,ks,els,scoped_items,k__GT_el,map__10729,map__10729__$1,scope,key_fn,els_state_10761,items_state_10762))
);
} else {
}

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(ks,((function (key_fn__$1,ks,els,scoped_items,k__GT_el,map__10729,map__10729__$1,scope,key_fn,els_state_10761,items_state_10762){
return (function (_,n){
var seq__10743 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.contains_QMARK_,cljs.core.deref(els)),n));
var chunk__10744 = null;
var count__10745 = (0);
var i__10746 = (0);
while(true){
if((i__10746 < count__10745)){
var k = chunk__10744.cljs$core$IIndexed$_nth$arity$2(null,i__10746);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(els,cljs.core.assoc,k,(function (){var G__10747 = (function (){var fexpr__10751 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (seq__10743,chunk__10744,count__10745,i__10746,k,key_fn__$1,ks,els,scoped_items,k__GT_el,map__10729,map__10729__$1,scope,key_fn,els_state_10761,items_state_10762){
return (function (G__10749,G__10748,G__10750){
return (G__10748.cljs$core$IFn$_invoke$arity$2 ? G__10748.cljs$core$IFn$_invoke$arity$2(G__10749,G__10750) : G__10748.call(null,G__10749,G__10750));
});})(seq__10743,chunk__10744,count__10745,i__10746,k,key_fn__$1,ks,els,scoped_items,k__GT_el,map__10729,map__10729__$1,scope,key_fn,els_state_10761,items_state_10762))
);
return (fexpr__10751.cljs$core$IFn$_invoke$arity$3 ? fexpr__10751.cljs$core$IFn$_invoke$arity$3(scoped_items,cljs.core.get,k) : fexpr__10751.call(null,scoped_items,cljs.core.get,k));
})();
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__10747) : tpl.call(null,G__10747));
})());


var G__10778 = seq__10743;
var G__10779 = chunk__10744;
var G__10780 = count__10745;
var G__10781 = (i__10746 + (1));
seq__10743 = G__10778;
chunk__10744 = G__10779;
count__10745 = G__10780;
i__10746 = G__10781;
continue;
} else {
var temp__5535__auto__ = cljs.core.seq(seq__10743);
if(temp__5535__auto__){
var seq__10743__$1 = temp__5535__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10743__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__10743__$1);
var G__10782 = cljs.core.chunk_rest(seq__10743__$1);
var G__10783 = c__4319__auto__;
var G__10784 = cljs.core.count(c__4319__auto__);
var G__10785 = (0);
seq__10743 = G__10782;
chunk__10744 = G__10783;
count__10745 = G__10784;
i__10746 = G__10785;
continue;
} else {
var k = cljs.core.first(seq__10743__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(els,cljs.core.assoc,k,(function (){var G__10752 = (function (){var fexpr__10756 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (seq__10743,chunk__10744,count__10745,i__10746,k,seq__10743__$1,temp__5535__auto__,key_fn__$1,ks,els,scoped_items,k__GT_el,map__10729,map__10729__$1,scope,key_fn,els_state_10761,items_state_10762){
return (function (G__10754,G__10753,G__10755){
return (G__10753.cljs$core$IFn$_invoke$arity$2 ? G__10753.cljs$core$IFn$_invoke$arity$2(G__10754,G__10755) : G__10753.call(null,G__10754,G__10755));
});})(seq__10743,chunk__10744,count__10745,i__10746,k,seq__10743__$1,temp__5535__auto__,key_fn__$1,ks,els,scoped_items,k__GT_el,map__10729,map__10729__$1,scope,key_fn,els_state_10761,items_state_10762))
);
return (fexpr__10756.cljs$core$IFn$_invoke$arity$3 ? fexpr__10756.cljs$core$IFn$_invoke$arity$3(scoped_items,cljs.core.get,k) : fexpr__10756.call(null,scoped_items,cljs.core.get,k));
})();
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__10752) : tpl.call(null,G__10752));
})());


var G__10786 = cljs.core.next(seq__10743__$1);
var G__10787 = null;
var G__10788 = (0);
var G__10789 = (0);
seq__10743 = G__10786;
chunk__10744 = G__10787;
count__10745 = G__10788;
i__10746 = G__10789;
continue;
}
} else {
return null;
}
}
break;
}
});})(key_fn__$1,ks,els,scoped_items,k__GT_el,map__10729,map__10729__$1,scope,key_fn,els_state_10761,items_state_10762))
);

var fexpr__10760 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (key_fn__$1,ks,els,scoped_items,k__GT_el,map__10729,map__10729__$1,scope,key_fn,els_state_10761,items_state_10762){
return (function (G__10757,G__10759,G__10758){
return (G__10757.cljs$core$IFn$_invoke$arity$2 ? G__10757.cljs$core$IFn$_invoke$arity$2(G__10758,G__10759) : G__10757.call(null,G__10758,G__10759));
});})(key_fn__$1,ks,els,scoped_items,k__GT_el,map__10729,map__10729__$1,scope,key_fn,els_state_10761,items_state_10762))
);
return (fexpr__10760.cljs$core$IFn$_invoke$arity$3 ? fexpr__10760.cljs$core$IFn$_invoke$arity$3(cljs.core.map,ks,k__GT_el) : fexpr__10760.call(null,cljs.core.map,ks,k__GT_el));
});})(els_state_10761,items_state_10762))
;

hoplon.core.keyed_loop_tpl_STAR_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
hoplon.core.keyed_loop_tpl_STAR_.cljs$lang$applyTo = ((function (els_state_10761,items_state_10762){
return (function (seq10725){
var G__10726 = cljs.core.first(seq10725);
var seq10725__$1 = cljs.core.next(seq10725);
var G__10727 = cljs.core.first(seq10725__$1);
var seq10725__$2 = cljs.core.next(seq10725__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10726,G__10727,seq10725__$2);
});})(els_state_10761,items_state_10762))
;

