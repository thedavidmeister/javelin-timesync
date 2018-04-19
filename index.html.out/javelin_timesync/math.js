// Compiled by ClojureScript 1.10.238 {:static-fns true, :optimize-constants true}
goog.provide('javelin_timesync.math');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('javelin_timesync.spec');
goog.require('cljs.spec.alpha');
javelin_timesync.math.data_point__GT_latency = (function javelin_timesync$math$data_point__GT_latency(data_point){
if(cljs.core.truth_(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$timesync_SLASH_data_DASH_point,data_point))){
} else {
throw (new Error("Assert failed: (spec/valid? :timesync/data-point data-point)"));
}

return (0.5 * (cljs.core.cst$kw$timesync_SLASH_start.cljs$core$IFn$_invoke$arity$1(data_point) - cljs.core.cst$kw$timesync_SLASH_end.cljs$core$IFn$_invoke$arity$1(data_point)));
});
javelin_timesync.math.data_point__GT_clock_delta = (function javelin_timesync$math$data_point__GT_clock_delta(data_point){
if(cljs.core.truth_(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$timesync_SLASH_data_DASH_point,data_point))){
} else {
throw (new Error("Assert failed: (spec/valid? :timesync/data-point data-point)"));
}

var client_server_delta = (cljs.core.cst$kw$timesync_SLASH_server.cljs$core$IFn$_invoke$arity$1(data_point) - cljs.core.cst$kw$timesync_SLASH_end.cljs$core$IFn$_invoke$arity$1(data_point));
return (client_server_delta - javelin_timesync.math.data_point__GT_latency(data_point));
});
javelin_timesync.math.latency__GT_offset = (function javelin_timesync$math$latency__GT_offset(x){
var _PERCENT_ = Math.round(x);
if(cljs.core.truth_(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$timesync_SLASH_offset,_PERCENT_))){
} else {
throw (new Error("Assert failed: (spec/valid? :timesync/offset %)"));
}

return _PERCENT_;
});
javelin_timesync.math.mean = (function javelin_timesync$math$mean(xs){
if(cljs.core.sequential_QMARK_(xs)){
} else {
throw (new Error("Assert failed: (sequential? xs)"));
}

if(cljs.core.seq(xs)){
return (cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,xs) / cljs.core.count(xs));
} else {
return (0);
}
});
javelin_timesync.math.median_by = (function javelin_timesync$math$median_by(keyfn,xs){
if(cljs.core.sequential_QMARK_(xs)){
} else {
throw (new Error("Assert failed: (sequential? xs)"));
}

if(cljs.core.seq(xs)){
var cnt = cljs.core.count(xs);
var pos = (cnt >> (1));
var sorted = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(keyfn,xs);
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(sorted,pos);
} else {
return null;
}
});
javelin_timesync.math.std_dev = (function javelin_timesync$math$std_dev(xs){
if(cljs.core.sequential_QMARK_(xs)){
} else {
throw (new Error("Assert failed: (sequential? xs)"));
}

if(cljs.core.seq(xs)){
var m = javelin_timesync.math.mean(xs);
var diffs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (m){
return (function (x){
return (x - m);
});})(m))
,xs);
var squared = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (m,diffs){
return (function (x){
return (x * x);
});})(m,diffs))
,diffs);
var variance = javelin_timesync.math.mean(squared);
return Math.sqrt(variance);
} else {
return (0);
}
});
