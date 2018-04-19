// Compiled by ClojureScript 1.10.238 {:static-fns true, :optimize-constants true}
goog.provide('cljs.spec.test.alpha');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.object');
goog.require('goog.userAgent.product');
goog.require('clojure.string');
goog.require('cljs.stacktrace');
goog.require('cljs.pprint');
goog.require('cljs.spec.alpha');
goog.require('cljs.spec.gen.alpha');
goog.require('clojure.test.check');
goog.require('clojure.test.check.properties');
cljs.spec.test.alpha.distinct_by = (function cljs$spec$test$alpha$distinct_by(f,coll){
var step = (function cljs$spec$test$alpha$distinct_by_$_step(xs,seen){
return (new cljs.core.LazySeq(null,(function (){
var fexpr__9869 = (function (p__9870,seen__$1){
while(true){
var vec__9871 = p__9870;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9871,(0),null);
var xs__$1 = vec__9871;
var temp__5535__auto__ = cljs.core.seq(xs__$1);
if(temp__5535__auto__){
var s = temp__5535__auto__;
var v = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));
if(cljs.core.contains_QMARK_(seen__$1,v)){
var G__9874 = cljs.core.rest(s);
var G__9875 = seen__$1;
p__9870 = G__9874;
seen__$1 = G__9875;
continue;
} else {
return cljs.core.cons(x,cljs$spec$test$alpha$distinct_by_$_step(cljs.core.rest(s),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen__$1,v)));
}
} else {
return null;
}
break;
}
});
return fexpr__9869(xs,seen);
}),null,null));
});
return step(coll,cljs.core.PersistentHashSet.EMPTY);
});
cljs.spec.test.alpha.__GT_sym = (function cljs$spec$test$alpha$__GT_sym(x){
var fexpr__9876 = cljs.core.deref(new cljs.core.Var(function(){return cljs.spec.alpha.__GT_sym;},cljs.core.cst$sym$cljs$spec$alpha_SLASH__DASH__GT_sym,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$private,cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[true,cljs.core.cst$sym$cljs$spec$alpha,cljs.core.cst$sym$_DASH__GT_sym,"/Users/davidmeister/.boot/cache/tmp/Users/davidmeister/javelin-timesync/1mfz/7xhqgu/index.html.out/cljs/spec/alpha.cljs",13,1,308,308,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$x], null)),"Returns a symbol from a symbol or var",(cljs.core.truth_(cljs.spec.alpha.__GT_sym)?cljs.spec.alpha.__GT_sym.cljs$lang$test:null)])));
return (fexpr__9876.cljs$core$IFn$_invoke$arity$1 ? fexpr__9876.cljs$core$IFn$_invoke$arity$1(x) : fexpr__9876.call(null,x));
});
/**
 * if false, instrumented fns call straight through
 */
cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = true;
cljs.spec.test.alpha.get_host_port = (function cljs$spec$test$alpha$get_host_port(){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("browser",cljs.core._STAR_target_STAR_)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$host,window.location.host,cljs.core.cst$kw$port,window.location.port], null);
}
});
cljs.spec.test.alpha.get_ua_product = (function cljs$spec$test$alpha$get_ua_product(){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("browser",cljs.core._STAR_target_STAR_)){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core._STAR_target_STAR_);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return cljs.core.cst$kw$safari;
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return cljs.core.cst$kw$chrome;
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return cljs.core.cst$kw$firefox;
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return cljs.core.cst$kw$ie;
} else {
return null;
}
}
}
}
}
});
cljs.spec.test.alpha.get_env = (function cljs$spec$test$alpha$get_env(){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ua_DASH_product,cljs.spec.test.alpha.get_ua_product()], null);
});
/**
 * Fn-spec must include at least :args or :ret specs.
 */
cljs.spec.test.alpha.fn_spec_QMARK_ = (function cljs$spec$test$alpha$fn_spec_QMARK_(m){
var or__3922__auto__ = cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.cst$kw$ret.cljs$core$IFn$_invoke$arity$1(m);
}
});
cljs.spec.test.alpha.explain_data_STAR_ = (function cljs$spec$test$alpha$explain_data_STAR_(spec,v){
if(cljs.core.truth_(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$3(spec,v,null))){
return null;
} else {
return cljs.spec.alpha.explain_data(spec,v);
}
});
cljs.spec.test.alpha.find_caller = (function cljs$spec$test$alpha$find_caller(st){
var search_spec_fn = (function cljs$spec$test$alpha$find_caller_$_search_spec_fn(frame){
if(cljs.core.truth_(frame)){
var s = cljs.core.cst$kw$function.cljs$core$IFn$_invoke$arity$1(frame);
var and__3911__auto__ = typeof s === 'string';
if(and__3911__auto__){
var and__3911__auto____$1 = !(clojure.string.blank_QMARK_(s));
if(and__3911__auto____$1){
return cljs.core.re_find(/cljs\.spec\.test\.spec_checking_fn/,s);
} else {
return and__3911__auto____$1;
}
} else {
return and__3911__auto__;
}
} else {
return null;
}
});
return cljs.core.first(cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(search_spec_fn,cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2((function (p1__9877_SHARP_){
return cljs.core.not(search_spec_fn(p1__9877_SHARP_));
}),st)));
});
cljs.spec.test.alpha.spec_checking_fn = (function cljs$spec$test$alpha$spec_checking_fn(v,f,fn_spec){
var fn_spec__$1 = (function (){var fexpr__9878 = cljs.core.deref(new cljs.core.Var(function(){return cljs.spec.alpha.maybe_spec;},cljs.core.cst$sym$cljs$spec$alpha_SLASH_maybe_DASH_spec,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$private,cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[true,cljs.core.cst$sym$cljs$spec$alpha,cljs.core.cst$sym$maybe_DASH_spec,"/Users/davidmeister/.boot/cache/tmp/Users/davidmeister/javelin-timesync/1mfz/7xhqgu/index.html.out/cljs/spec/alpha.cljs",18,1,105,105,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$spec_DASH_or_DASH_k], null)),"spec-or-k must be a spec, regex or resolvable kw/sym, else returns nil.",(cljs.core.truth_(cljs.spec.alpha.maybe_spec)?cljs.spec.alpha.maybe_spec.cljs$lang$test:null)])));
return (fexpr__9878.cljs$core$IFn$_invoke$arity$1 ? fexpr__9878.cljs$core$IFn$_invoke$arity$1(fn_spec) : fexpr__9878.call(null,fn_spec));
})();
var conform_BANG_ = ((function (fn_spec__$1){
return (function (v__$1,role,spec,data,args){
var conformed = cljs.spec.alpha.conform(spec,data);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid,conformed)){
var caller = cljs.spec.test.alpha.find_caller((function (){var G__9879 = cljs.spec.test.alpha.get_host_port();
var G__9880 = (new Error()).stack;
var G__9881 = cljs.spec.test.alpha.get_env();
var G__9882 = null;
return (cljs.stacktrace.parse_stacktrace.cljs$core$IFn$_invoke$arity$4 ? cljs.stacktrace.parse_stacktrace.cljs$core$IFn$_invoke$arity$4(G__9879,G__9880,G__9881,G__9882) : cljs.stacktrace.parse_stacktrace.call(null,G__9879,G__9880,G__9881,G__9882));
})());
var ed = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.spec.alpha.explain_data_STAR_(spec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [role], null),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,data),cljs.core.cst$kw$cljs$spec$alpha_SLASH_args,args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$cljs$spec$alpha_SLASH_failure,cljs.core.cst$kw$instrument], 0)),(cljs.core.truth_(caller)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cljs$spec$test$alpha_SLASH_caller,caller], null):null)], 0));
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Call to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v__$1)," did not conform to spec:\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__4430__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_9883_9892 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_9884_9893 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_9883_9892,_STAR_print_fn_STAR_9884_9893,sb__4430__auto__,caller,ed,conformed,fn_spec__$1){
return (function (x__4431__auto__){
return sb__4430__auto__.append(x__4431__auto__);
});})(_STAR_print_newline_STAR_9883_9892,_STAR_print_fn_STAR_9884_9893,sb__4430__auto__,caller,ed,conformed,fn_spec__$1))
;

try{cljs.spec.alpha.explain_out(ed);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_9884_9893;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_9883_9892;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4430__auto__)].join('');
})())].join(''),ed);
} else {
return conformed;
}
});})(fn_spec__$1))
;
var G__9885 = ((function (fn_spec__$1,conform_BANG_){
return (function() { 
var G__9894__delegate = function (args){
if(cljs.spec.test.alpha._STAR_instrument_enabled_STAR_){
var _STAR_instrument_enabled_STAR_9886 = cljs.spec.test.alpha._STAR_instrument_enabled_STAR_;
cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = null;

try{if(cljs.core.truth_(cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(fn_spec__$1))){
conform_BANG_(v,cljs.core.cst$kw$args,cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(fn_spec__$1),args,args);
} else {
}

var _STAR_instrument_enabled_STAR_9887 = cljs.spec.test.alpha._STAR_instrument_enabled_STAR_;
cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = true;

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
}finally {cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = _STAR_instrument_enabled_STAR_9887;
}}finally {cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = _STAR_instrument_enabled_STAR_9886;
}} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
}
};
var G__9894 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9895__i = 0, G__9895__a = new Array(arguments.length -  0);
while (G__9895__i < G__9895__a.length) {G__9895__a[G__9895__i] = arguments[G__9895__i + 0]; ++G__9895__i;}
  args = new cljs.core.IndexedSeq(G__9895__a,0,null);
} 
return G__9894__delegate.call(this,args);};
G__9894.cljs$lang$maxFixedArity = 0;
G__9894.cljs$lang$applyTo = (function (arglist__9896){
var args = cljs.core.seq(arglist__9896);
return G__9894__delegate(args);
});
G__9894.cljs$core$IFn$_invoke$arity$variadic = G__9894__delegate;
return G__9894;
})()
;})(fn_spec__$1,conform_BANG_))
;
var G__9888_9897 = G__9885;
var G__9889_9898 = (new cljs.core.MetaFn(((function (G__9888_9897,G__9885,fn_spec__$1,conform_BANG_){
return (function() { 
var G__9899__delegate = function (args){
if(cljs.spec.test.alpha._STAR_instrument_enabled_STAR_){
var _STAR_instrument_enabled_STAR_9890 = cljs.spec.test.alpha._STAR_instrument_enabled_STAR_;
cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = null;

try{if(cljs.core.truth_(cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(fn_spec__$1))){
conform_BANG_(v,cljs.core.cst$kw$args,cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(fn_spec__$1),args,args);
} else {
}

var _STAR_instrument_enabled_STAR_9891 = cljs.spec.test.alpha._STAR_instrument_enabled_STAR_;
cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = true;

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
}finally {cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = _STAR_instrument_enabled_STAR_9891;
}}finally {cljs.spec.test.alpha._STAR_instrument_enabled_STAR_ = _STAR_instrument_enabled_STAR_9890;
}} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
}
};
var G__9899 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9900__i = 0, G__9900__a = new Array(arguments.length -  0);
while (G__9900__i < G__9900__a.length) {G__9900__a[G__9900__i] = arguments[G__9900__i + 0]; ++G__9900__i;}
  args = new cljs.core.IndexedSeq(G__9900__a,0,null);
} 
return G__9899__delegate.call(this,args);};
G__9899.cljs$lang$maxFixedArity = 0;
G__9899.cljs$lang$applyTo = (function (arglist__9901){
var args = cljs.core.seq(arglist__9901);
return G__9899__delegate(args);
});
G__9899.cljs$core$IFn$_invoke$arity$variadic = G__9899__delegate;
return G__9899;
})()
;})(G__9888_9897,G__9885,fn_spec__$1,conform_BANG_))
,null));
goog.object.extend(G__9888_9897,G__9889_9898);

return G__9885;
});
cljs.spec.test.alpha.no_fspec = (function cljs$spec$test$alpha$no_fspec(v,spec){
return cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Fn at ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)," is not spec'ed."].join(''),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$var,v,cljs.core.cst$kw$spec,spec,cljs.core.cst$kw$cljs$spec$alpha_SLASH_failure,cljs.core.cst$kw$no_DASH_fspec], null));
});
if(typeof cljs.spec.test.alpha.instrumented_vars !== 'undefined'){
} else {
cljs.spec.test.alpha.instrumented_vars = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
/**
 * Helper for instrument.
 */
cljs.spec.test.alpha.instrument_choose_fn = (function cljs$spec$test$alpha$instrument_choose_fn(f,spec,sym,p__9902){
var map__9903 = p__9902;
var map__9903__$1 = ((((!((map__9903 == null)))?(((((map__9903.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9903.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9903):map__9903);
var over = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9903__$1,cljs.core.cst$kw$gen);
var stub = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9903__$1,cljs.core.cst$kw$stub);
var replace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9903__$1,cljs.core.cst$kw$replace);
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([sym]),stub))){
return cljs.spec.gen.alpha.generate(cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$2(spec,over));
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(replace,sym,f);
}
});
/**
 * Helper for instrument
 */
cljs.spec.test.alpha.instrument_choose_spec = (function cljs$spec$test$alpha$instrument_choose_spec(spec,sym,p__9905){
var map__9906 = p__9905;
var map__9906__$1 = ((((!((map__9906 == null)))?(((((map__9906.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9906.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9906):map__9906);
var overrides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9906__$1,cljs.core.cst$kw$spec);
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(overrides,sym,spec);
});
cljs.spec.test.alpha.instrument_1_STAR_ = (function cljs$spec$test$alpha$instrument_1_STAR_(s,v,opts){
var spec = cljs.spec.alpha.get_spec(v);
var map__9908 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.spec.test.alpha.instrumented_vars),v);
var map__9908__$1 = ((((!((map__9908 == null)))?(((((map__9908.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9908.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9908):map__9908);
var raw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9908__$1,cljs.core.cst$kw$raw);
var wrapped = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9908__$1,cljs.core.cst$kw$wrapped);
var current = cljs.core.deref(v);
var to_wrap = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(wrapped,current))?raw:current);
var ospec = (function (){var or__3922__auto__ = cljs.spec.test.alpha.instrument_choose_spec(spec,s,opts);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
throw cljs.spec.test.alpha.no_fspec(v,spec);
}
})();
var ofn = cljs.spec.test.alpha.instrument_choose_fn(to_wrap,ospec,s,opts);
var checked = cljs.spec.test.alpha.spec_checking_fn(v,ofn,ospec);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.spec.test.alpha.instrumented_vars,cljs.core.assoc,v,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$raw,to_wrap,cljs.core.cst$kw$wrapped,checked], null));

return checked;
});
cljs.spec.test.alpha.unstrument_1_STAR_ = (function cljs$spec$test$alpha$unstrument_1_STAR_(s,v){
if(cljs.core.truth_(v)){
var temp__5535__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.spec.test.alpha.instrumented_vars),v);
if(cljs.core.truth_(temp__5535__auto__)){
var map__9910 = temp__5535__auto__;
var map__9910__$1 = ((((!((map__9910 == null)))?(((((map__9910.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9910.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9910):map__9910);
var raw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9910__$1,cljs.core.cst$kw$raw);
var wrapped = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9910__$1,cljs.core.cst$kw$wrapped);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.spec.test.alpha.instrumented_vars,cljs.core.dissoc,v);

var current = cljs.core.deref(v);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(wrapped,current)){
return raw;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
cljs.spec.test.alpha.fn_spec_name_QMARK_ = (function cljs$spec$test$alpha$fn_spec_name_QMARK_(s){
return (s instanceof cljs.core.Symbol);
});
cljs.spec.test.alpha.collectionize = (function cljs$spec$test$alpha$collectionize(x){
if((x instanceof cljs.core.Symbol)){
return (new cljs.core.List(null,x,null,(1),null));
} else {
return x;
}
});
/**
 * Given an opts map as per instrument, returns the set of syms
 * that can be instrumented.
 */
cljs.spec.test.alpha.instrumentable_syms = (function cljs$spec$test$alpha$instrumentable_syms(var_args){
var G__9913 = arguments.length;
switch (G__9913) {
case 0:
return cljs.spec.test.alpha.instrumentable_syms.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.spec.test.alpha.instrumentable_syms.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.spec.test.alpha.instrumentable_syms.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.spec.test.alpha.instrumentable_syms.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.spec.test.alpha.instrumentable_syms.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if(cljs.core.every_QMARK_(cljs.core.ident_QMARK_,cljs.core.keys(cljs.core.cst$kw$gen.cljs$core$IFn$_invoke$arity$1(opts)))){
} else {
throw (new Error(["Assert failed: ","instrument :gen expects ident keys","\n","(every? ident? (keys (:gen opts)))"].join('')));
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.into,cljs.core.PersistentHashSet.EMPTY,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.spec.test.alpha.fn_spec_name_QMARK_,cljs.core.keys(cljs.spec.alpha.registry())),cljs.core.keys(cljs.core.cst$kw$spec.cljs$core$IFn$_invoke$arity$1(opts)),cljs.core.cst$kw$stub.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.keys(cljs.core.cst$kw$replace.cljs$core$IFn$_invoke$arity$1(opts))], null));
});

cljs.spec.test.alpha.instrumentable_syms.cljs$lang$maxFixedArity = 1;

cljs.spec.test.alpha.explain_check = (function cljs$spec$test$alpha$explain_check(args,spec,v,role){
return cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Specification-based check failed",(cljs.core.truth_(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$3(spec,v,null))?null:cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.spec.alpha.explain_data_STAR_(spec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [role], null),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,v),cljs.core.cst$kw$cljs$spec$test$alpha_SLASH_args,args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$cljs$spec$test$alpha_SLASH_val,v,cljs.core.cst$kw$cljs$spec$alpha_SLASH_failure,cljs.core.cst$kw$check_DASH_failed], 0))));
});
/**
 * Returns true if call passes specs, otherwise *returns* an exception
 * with explain-data + ::s/failure.
 */
cljs.spec.test.alpha.check_call = (function cljs$spec$test$alpha$check_call(f,specs,args){
var cargs = (cljs.core.truth_(cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(specs))?cljs.spec.alpha.conform(cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(specs),args):null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cargs,cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid)){
return cljs.spec.test.alpha.explain_check(args,cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(specs),args,cljs.core.cst$kw$args);
} else {
var ret = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
var cret = (cljs.core.truth_(cljs.core.cst$kw$ret.cljs$core$IFn$_invoke$arity$1(specs))?cljs.spec.alpha.conform(cljs.core.cst$kw$ret.cljs$core$IFn$_invoke$arity$1(specs),ret):null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cret,cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid)){
return cljs.spec.test.alpha.explain_check(args,cljs.core.cst$kw$ret.cljs$core$IFn$_invoke$arity$1(specs),ret,cljs.core.cst$kw$ret);
} else {
if(cljs.core.truth_((function (){var and__3911__auto__ = cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(specs);
if(cljs.core.truth_(and__3911__auto__)){
var and__3911__auto____$1 = cljs.core.cst$kw$ret.cljs$core$IFn$_invoke$arity$1(specs);
if(cljs.core.truth_(and__3911__auto____$1)){
return cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(specs);
} else {
return and__3911__auto____$1;
}
} else {
return and__3911__auto__;
}
})())){
if(cljs.core.truth_(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(specs),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$args,cargs,cljs.core.cst$kw$ret,cret], null)))){
return true;
} else {
return cljs.spec.test.alpha.explain_check(args,cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(specs),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$args,cargs,cljs.core.cst$kw$ret,cret], null),cljs.core.cst$kw$fn);
}
} else {
return true;
}
}
}
});
cljs.spec.test.alpha.quick_check = (function cljs$spec$test$alpha$quick_check(f,specs,p__9916){
var map__9917 = p__9916;
var map__9917__$1 = ((((!((map__9917 == null)))?(((((map__9917.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9917.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9917):map__9917);
var gen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9917__$1,cljs.core.cst$kw$gen);
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9917__$1,cljs.core.cst$kw$clojure$test$check_SLASH_opts);
var map__9919 = opts;
var map__9919__$1 = ((((!((map__9919 == null)))?(((((map__9919.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9919.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9919):map__9919);
var num_tests = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__9919__$1,cljs.core.cst$kw$num_DASH_tests,(1000));
var g = (function (){try{return cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(specs),gen);
}catch (e9921){if((e9921 instanceof Error)){
var t = e9921;
return t;
} else {
throw e9921;

}
}})();
if((g instanceof Error)){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$result,g], null);
} else {
var prop = cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [g], null),((function (map__9919,map__9919__$1,num_tests,g,map__9917,map__9917__$1,gen,opts){
return (function (p1__9915_SHARP_){
return cljs.spec.test.alpha.check_call(f,specs,p1__9915_SHARP_);
});})(map__9919,map__9919__$1,num_tests,g,map__9917,map__9917__$1,gen,opts))
], 0));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.spec.gen.alpha.quick_check,num_tests,prop,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts], 0)));
}
});
/**
 * Builds spec result map.
 */
cljs.spec.test.alpha.make_check_result = (function cljs$spec$test$alpha$make_check_result(check_sym,spec,test_check_ret){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$spec,spec,cljs.core.cst$kw$clojure$test$check_SLASH_ret,test_check_ret], null),(cljs.core.truth_(check_sym)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$sym,check_sym], null):null),(function (){var temp__5535__auto__ = cljs.core.cst$kw$result.cljs$core$IFn$_invoke$arity$1(test_check_ret);
if(cljs.core.truth_(temp__5535__auto__)){
var result = temp__5535__auto__;
if(result === true){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$failure,result], null);
}
} else {
return null;
}
})(),(function (){var temp__5535__auto__ = cljs.core.cst$kw$shrunk.cljs$core$IFn$_invoke$arity$1(test_check_ret);
if(cljs.core.truth_(temp__5535__auto__)){
var shrunk = temp__5535__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$failure,cljs.core.cst$kw$result.cljs$core$IFn$_invoke$arity$1(shrunk)], null);
} else {
return null;
}
})()], 0));
});
cljs.spec.test.alpha.validate_check_opts = (function cljs$spec$test$alpha$validate_check_opts(opts){
if(cljs.core.every_QMARK_(cljs.core.ident_QMARK_,cljs.core.keys(cljs.core.cst$kw$gen.cljs$core$IFn$_invoke$arity$1(opts)))){
return null;
} else {
throw (new Error(["Assert failed: ","check :gen expects ident keys","\n","(every? ident? (keys (:gen opts)))"].join('')));
}
});
cljs.spec.test.alpha.failure_type = (function cljs$spec$test$alpha$failure_type(x){
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_failure.cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(x));
});
cljs.spec.test.alpha.unwrap_failure = (function cljs$spec$test$alpha$unwrap_failure(x){
if(cljs.core.truth_(cljs.spec.test.alpha.failure_type(x))){
return cljs.core.ex_data(x);
} else {
return x;
}
});
/**
 * Returns the type of the check result. This can be any of the
 * ::s/failure keywords documented in 'check', or:
 * 
 *   :check-passed   all checked fn returns conformed
 *   :check-threw    checked fn threw an exception
 */
cljs.spec.test.alpha.result_type = (function cljs$spec$test$alpha$result_type(ret){
var failure = cljs.core.cst$kw$failure.cljs$core$IFn$_invoke$arity$1(ret);
if((failure == null)){
return cljs.core.cst$kw$check_DASH_passed;
} else {
if(cljs.core.truth_(cljs.spec.test.alpha.failure_type(failure))){
return cljs.spec.test.alpha.failure_type(failure);
} else {
return cljs.core.cst$kw$check_DASH_threw;

}
}
});
/**
 * Given a check result, returns an abbreviated version
 * suitable for summary use.
 */
cljs.spec.test.alpha.abbrev_result = (function cljs$spec$test$alpha$abbrev_result(x){
if(cljs.core.truth_(cljs.core.cst$kw$failure.cljs$core$IFn$_invoke$arity$1(x))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(x,cljs.core.cst$kw$clojure$test$check_SLASH_ret),cljs.core.cst$kw$spec,cljs.spec.alpha.describe),cljs.core.cst$kw$failure,cljs.spec.test.alpha.unwrap_failure);
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(x,cljs.core.cst$kw$spec,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$clojure$test$check_SLASH_ret], 0));
}
});
/**
 * Given a collection of check-results, e.g. from 'check', pretty
 * prints the summary-result (default abbrev-result) of each.
 * 
 * Returns a map with :total, the total number of results, plus a
 * key with a count for each different :type of result.
 */
cljs.spec.test.alpha.summarize_results = (function cljs$spec$test$alpha$summarize_results(var_args){
var G__9923 = arguments.length;
switch (G__9923) {
case 1:
return cljs.spec.test.alpha.summarize_results.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.spec.test.alpha.summarize_results.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.spec.test.alpha.summarize_results.cljs$core$IFn$_invoke$arity$1 = (function (check_results){
return cljs.spec.test.alpha.summarize_results.cljs$core$IFn$_invoke$arity$2(check_results,cljs.spec.test.alpha.abbrev_result);
});

cljs.spec.test.alpha.summarize_results.cljs$core$IFn$_invoke$arity$2 = (function (check_results,summary_result){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (summary,result){
cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1((summary_result.cljs$core$IFn$_invoke$arity$1 ? summary_result.cljs$core$IFn$_invoke$arity$1(result) : summary_result.call(null,result)));

return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(summary,cljs.core.cst$kw$total,cljs.core.inc),cljs.spec.test.alpha.result_type(result),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,(0)));
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$total,(0)], null),check_results);
});

cljs.spec.test.alpha.summarize_results.cljs$lang$maxFixedArity = 2;

