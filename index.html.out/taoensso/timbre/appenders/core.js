// Compiled by ClojureScript 1.10.238 {:static-fns true, :optimize-constants true}
goog.provide('taoensso.timbre.appenders.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('taoensso.encore');
/**
 * Returns a simple `println` appender for Clojure/Script.
 *   Use with ClojureScript requires that `cljs.core/*print-fn*` be set.
 * 
 *   :stream (clj only) - e/o #{:auto :*out* :*err* :std-err :std-out <io-stream>}.
 */
taoensso.timbre.appenders.core.println_appender = (function taoensso$timbre$appenders$core$println_appender(var_args){
var args__4502__auto__ = [];
var len__4499__auto___13674 = arguments.length;
var i__4500__auto___13675 = (0);
while(true){
if((i__4500__auto___13675 < len__4499__auto___13674)){
args__4502__auto__.push((arguments[i__4500__auto___13675]));

var G__13676 = (i__4500__auto___13675 + (1));
i__4500__auto___13675 = G__13676;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return taoensso.timbre.appenders.core.println_appender.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

taoensso.timbre.appenders.core.println_appender.cljs$core$IFn$_invoke$arity$variadic = (function (p__13668){
var vec__13669 = p__13668;
var _opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13669,(0),null);
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$enabled_QMARK_,true,cljs.core.cst$kw$async_QMARK_,false,cljs.core.cst$kw$min_DASH_level,null,cljs.core.cst$kw$rate_DASH_limit,null,cljs.core.cst$kw$output_DASH_fn,cljs.core.cst$kw$inherit,cljs.core.cst$kw$fn,((function (vec__13669,_opts){
return (function (data){
var map__13672 = data;
var map__13672__$1 = ((((!((map__13672 == null)))?(((((map__13672.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13672.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13672):map__13672);
var output_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13672__$1,cljs.core.cst$kw$output_);
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.force(output_)], 0));
});})(vec__13669,_opts))
], null);
});

taoensso.timbre.appenders.core.println_appender.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
taoensso.timbre.appenders.core.println_appender.cljs$lang$applyTo = (function (seq13667){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13667));
});

/**
 * Returns a simple js/console appender for ClojureScript.
 * 
 *   For accurate line numbers in Chrome, add these Blackbox[1] patterns:
 *  `/taoensso/timbre/appenders/core\.js$`
 *  `/taoensso/timbre\.js$`
 *  `/cljs/core\.js$`
 * 
 *   [1] Ref. https://goo.gl/ZejSvR
 */
taoensso.timbre.appenders.core.console_appender = (function taoensso$timbre$appenders$core$console_appender(var_args){
var args__4502__auto__ = [];
var len__4499__auto___13686 = arguments.length;
var i__4500__auto___13687 = (0);
while(true){
if((i__4500__auto___13687 < len__4499__auto___13686)){
args__4502__auto__.push((arguments[i__4500__auto___13687]));

var G__13688 = (i__4500__auto___13687 + (1));
i__4500__auto___13687 = G__13688;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return taoensso.timbre.appenders.core.console_appender.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

taoensso.timbre.appenders.core.console_appender.cljs$core$IFn$_invoke$arity$variadic = (function (p__13678){
var vec__13679 = p__13678;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13679,(0),null);
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$enabled_QMARK_,true,cljs.core.cst$kw$async_QMARK_,false,cljs.core.cst$kw$min_DASH_level,null,cljs.core.cst$kw$rate_DASH_limit,null,cljs.core.cst$kw$output_DASH_fn,cljs.core.cst$kw$inherit,cljs.core.cst$kw$fn,((typeof console !== 'undefined')?(function (){var level__GT_logger = ((function (vec__13679,opts){
return (function (level){
var or__3922__auto__ = (function (){var G__13683 = level;
var G__13683__$1 = (((G__13683 instanceof cljs.core.Keyword))?G__13683.fqn:null);
switch (G__13683__$1) {
case "trace":
return console.trace;

break;
case "debug":
return console.debug;

break;
case "info":
return console.info;

break;
case "warn":
return console.warn;

break;
case "error":
return console.error;

break;
case "fatal":
return console.error;

break;
case "report":
return console.info;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__13683__$1)].join('')));

}
})();
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return console.log;
}
});})(vec__13679,opts))
;
return ((function (level__GT_logger,vec__13679,opts){
return (function (data){
var temp__5535__auto__ = level__GT_logger(cljs.core.cst$kw$level.cljs$core$IFn$_invoke$arity$1(data));
if(cljs.core.truth_(temp__5535__auto__)){
var logger = temp__5535__auto__;
if(cljs.core.truth_((function (){var or__3922__auto__ = cljs.core.cst$kw$raw_DASH_console_QMARK_.cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_QMARK_meta,cljs.core.cst$kw$raw_DASH_console_QMARK_], null));
}
})())){
var output = (function (){var G__13685 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.cst$kw$msg_,"",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$_QMARK_err,null], 0));
var fexpr__13684 = cljs.core.cst$kw$output_DASH_fn.cljs$core$IFn$_invoke$arity$1(data);
return (fexpr__13684.cljs$core$IFn$_invoke$arity$1 ? fexpr__13684.cljs$core$IFn$_invoke$arity$1(G__13685) : fexpr__13684.call(null,G__13685));
})();
var args = (function (){var vargs = cljs.core.cst$kw$vargs.cljs$core$IFn$_invoke$arity$1(data);
var temp__5533__auto__ = cljs.core.cst$kw$_QMARK_err.cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(temp__5533__auto__)){
var err = temp__5533__auto__;
return cljs.core.cons(output,cljs.core.cons(err,vargs));
} else {
return cljs.core.cons(output,vargs);
}
})();
return logger.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(args));
} else {
return logger.call(console,cljs.core.force(cljs.core.cst$kw$output_.cljs$core$IFn$_invoke$arity$1(data)));
}
} else {
return null;
}
});
;})(level__GT_logger,vec__13679,opts))
})():((function (vec__13679,opts){
return (function (data){
return null;
});})(vec__13679,opts))
)], null);
});

taoensso.timbre.appenders.core.console_appender.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
taoensso.timbre.appenders.core.console_appender.cljs$lang$applyTo = (function (seq13677){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13677));
});

/**
 * DEPRECATED
 */
taoensso.timbre.appenders.core.console__QMARK_appender = taoensso.timbre.appenders.core.console_appender;
