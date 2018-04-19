// Compiled by ClojureScript 1.10.238 {:static-fns true, :optimize-constants true}
goog.provide('camel_snake_kebab.internals.misc');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('camel_snake_kebab.internals.string_separator');
goog.require('clojure.string');
camel_snake_kebab.internals.misc.convert_case = (function camel_snake_kebab$internals$misc$convert_case(var_args){
var args__4502__auto__ = [];
var len__4499__auto___14669 = arguments.length;
var i__4500__auto___14670 = (0);
while(true){
if((i__4500__auto___14670 < len__4499__auto___14669)){
args__4502__auto__.push((arguments[i__4500__auto___14670]));

var G__14671 = (i__4500__auto___14670 + (1));
i__4500__auto___14670 = G__14671;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((4) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((4)),(0),null)):null);
return camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4503__auto__);
});

camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic = (function (first_fn,rest_fn,sep,s,p__14663){
var map__14664 = p__14663;
var map__14664__$1 = ((((!((map__14664 == null)))?(((((map__14664.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14664.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14664):map__14664);
var separator = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__14664__$1,cljs.core.cst$kw$separator,camel_snake_kebab.internals.string_separator.generic_separator);
var vec__14666 = camel_snake_kebab.internals.string_separator.split(separator,s);
var seq__14667 = cljs.core.seq(vec__14666);
var first__14668 = cljs.core.first(seq__14667);
var seq__14667__$1 = cljs.core.next(seq__14667);
var first = first__14668;
var rest = seq__14667__$1;
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(sep,cljs.core.cons((first_fn.cljs$core$IFn$_invoke$arity$1 ? first_fn.cljs$core$IFn$_invoke$arity$1(first) : first_fn.call(null,first)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(rest_fn,rest)));
});

camel_snake_kebab.internals.misc.convert_case.cljs$lang$maxFixedArity = (4);

/** @this {Function} */
camel_snake_kebab.internals.misc.convert_case.cljs$lang$applyTo = (function (seq14658){
var G__14659 = cljs.core.first(seq14658);
var seq14658__$1 = cljs.core.next(seq14658);
var G__14660 = cljs.core.first(seq14658__$1);
var seq14658__$2 = cljs.core.next(seq14658__$1);
var G__14661 = cljs.core.first(seq14658__$2);
var seq14658__$3 = cljs.core.next(seq14658__$2);
var G__14662 = cljs.core.first(seq14658__$3);
var seq14658__$4 = cljs.core.next(seq14658__$3);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14659,G__14660,G__14661,G__14662,seq14658__$4);
});

camel_snake_kebab.internals.misc.upper_case_http_headers = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, ["WWW",null,"TE",null,"CSP",null,"CPU",null,"IP",null,"WAP",null,"HTTP",null,"DNT",null,"UA",null,"ATT",null,"SSL",null,"MD5",null,"XSS",null], null), null);
camel_snake_kebab.internals.misc.capitalize_http_header = (function camel_snake_kebab$internals$misc$capitalize_http_header(s){
var or__3922__auto__ = (function (){var G__14673 = clojure.string.upper_case(s);
return (camel_snake_kebab.internals.misc.upper_case_http_headers.cljs$core$IFn$_invoke$arity$1 ? camel_snake_kebab.internals.misc.upper_case_http_headers.cljs$core$IFn$_invoke$arity$1(G__14673) : camel_snake_kebab.internals.misc.upper_case_http_headers.call(null,G__14673));
})();
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return clojure.string.capitalize(s);
}
});
