// Compiled by ClojureScript 1.10.238 {:static-fns true, :optimize-constants true}
goog.provide('javelin_timesync.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('ajax.core');
goog.require('taoensso.timbre');
goog.require('javelin_timesync.data');
goog.require('javelin_timesync.math');
goog.require('javelin_timesync.time');
goog.require('javelin_timesync.spec');
goog.require('cljs.spec.alpha');
goog.require('javelin.core');
goog.require('hoplon.core');
javelin_timesync.core.data_points__GT_processed_points = (function javelin_timesync$core$data_points__GT_processed_points(data_points){
if(cljs.core.truth_(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$timesync_SLASH_data_DASH_points,data_points))){
} else {
throw (new Error("Assert failed: (spec/valid? :timesync/data-points data-points)"));
}

var _PERCENT_ = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (data_point){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([data_point,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$timesync_SLASH_latency,javelin_timesync.math.data_point__GT_latency(data_point),cljs.core.cst$kw$timesync_SLASH_clock_DASH_delta,javelin_timesync.math.data_point__GT_clock_delta(data_point)], null)], 0));
}),data_points);
if(cljs.core.truth_(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$timesync_SLASH_data_DASH_points_DASH__DASH_processed,_PERCENT_))){
} else {
throw (new Error("Assert failed: (spec/valid? :timesync/data-points--processed %)"));
}

return _PERCENT_;
});
javelin_timesync.core.processed_points__GT_median_data_point = (function javelin_timesync$core$processed_points__GT_median_data_point(processed_points){
if(cljs.core.truth_(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$timesync_SLASH_data_DASH_points_DASH__DASH_processed,processed_points))){
} else {
throw (new Error("Assert failed: (spec/valid? :timesync/data-points--processed processed-points)"));
}

var _PERCENT_ = javelin_timesync.math.median_by(cljs.core.cst$kw$timesync_SLASH_latency,processed_points);
if(cljs.core.truth_(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(cljs.spec.alpha.nilable_impl(cljs.core.cst$kw$timesync_SLASH_data_DASH_point_DASH__DASH_processed,cljs.core.cst$kw$timesync_SLASH_data_DASH_point_DASH__DASH_processed,null),_PERCENT_))){
} else {
throw (new Error("Assert failed: (spec/valid? (spec/nilable :timesync/data-point--processed) %)"));
}

return _PERCENT_;
});
javelin_timesync.core.processed_points__GT_filtered_points = (function javelin_timesync$core$processed_points__GT_filtered_points(processed_points){
if(cljs.core.truth_(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$timesync_SLASH_data_DASH_points_DASH__DASH_processed,processed_points))){
} else {
throw (new Error("Assert failed: (spec/valid? :timesync/data-points--processed processed-points)"));
}

var _PERCENT_ = (function (){var mid_point_sample = javelin_timesync.core.processed_points__GT_median_data_point(processed_points);
var latency_median = cljs.core.cst$kw$timesync_SLASH_latency.cljs$core$IFn$_invoke$arity$1(mid_point_sample);
var latency_std_dev = javelin_timesync.math.std_dev(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$timesync_SLASH_latency,processed_points));
var remaining_samples = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (mid_point_sample,latency_median,latency_std_dev){
return (function (processed_point){
return (Math.ceil(latency_std_dev) < (function (){var G__14616 = (cljs.core.cst$kw$timesync_SLASH_latency.cljs$core$IFn$_invoke$arity$1(processed_point) - latency_median);
return Math.abs(G__14616);
})());
});})(mid_point_sample,latency_median,latency_std_dev))
,processed_points);
if(cljs.core.seq(remaining_samples)){
return cljs.core.vec(remaining_samples);
} else {
if(cljs.core.truth_(mid_point_sample)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mid_point_sample], null);
} else {
return cljs.core.PersistentVector.EMPTY;
}
}
})();
if(cljs.core.truth_((function (){var or__3922__auto__ = cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$timesync_SLASH_data_DASH_points_DASH__DASH_processed,_PERCENT_);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.spec.alpha.explain(cljs.core.cst$kw$timesync_SLASH_data_DASH_points_DASH__DASH_processed,_PERCENT_);
}
})())){
} else {
throw (new Error("Assert failed: (or (spec/valid? :timesync/data-points--processed %) (spec/explain :timesync/data-points--processed %))"));
}

return _PERCENT_;
});
javelin_timesync.core.processed_points__GT_mean_clock_delta = (function javelin_timesync$core$processed_points__GT_mean_clock_delta(processed_points){
if(cljs.core.truth_(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$timesync_SLASH_data_DASH_points_DASH__DASH_processed,processed_points))){
} else {
throw (new Error("Assert failed: (spec/valid? :timesync/data-points--processed processed-points)"));
}

var _PERCENT_ = javelin_timesync.math.mean(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$timesync_SLASH_clock_DASH_delta,processed_points));
if(cljs.core.truth_(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$timesync_SLASH_clock_DASH_delta,_PERCENT_))){
} else {
throw (new Error("Assert failed: (spec/valid? :timesync/clock-delta %)"));
}

return _PERCENT_;
});
javelin_timesync.core.data_points__GT_offset = (function javelin_timesync$core$data_points__GT_offset(data_points){
if(cljs.core.truth_(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$timesync_SLASH_data_DASH_points,data_points))){
} else {
throw (new Error("Assert failed: (spec/valid? :timesync/data-points data-points)"));
}

var _PERCENT_ = javelin_timesync.math.latency__GT_offset(javelin_timesync.core.processed_points__GT_mean_clock_delta(javelin_timesync.core.processed_points__GT_filtered_points(javelin_timesync.core.data_points__GT_processed_points(data_points))));
if(cljs.core.truth_(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$timesync_SLASH_offset,_PERCENT_))){
} else {
throw (new Error("Assert failed: (spec/valid? :timesync/offset %)"));
}

return _PERCENT_;
});
javelin_timesync.core._offset_cell = (function javelin_timesync$core$_offset_cell(var_args){
var args__4502__auto__ = [];
var len__4499__auto___14627 = arguments.length;
var i__4500__auto___14628 = (0);
while(true){
if((i__4500__auto___14628 < len__4499__auto___14627)){
args__4502__auto__.push((arguments[i__4500__auto___14628]));

var G__14629 = (i__4500__auto___14628 + (1));
i__4500__auto___14628 = G__14629;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return javelin_timesync.core._offset_cell.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

javelin_timesync.core._offset_cell.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__14620){
var map__14621 = p__14620;
var map__14621__$1 = ((((!((map__14621 == null)))?(((((map__14621.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14621.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14621):map__14621);
var parse = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14621__$1,cljs.core.cst$kw$parse);
var error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14621__$1,cljs.core.cst$kw$error_DASH_handler);
var interval = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14621__$1,cljs.core.cst$kw$interval);
var data_points = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14621__$1,cljs.core.cst$kw$data_DASH_points);
if(typeof url === 'string'){
} else {
throw (new Error("Assert failed: (string? url)"));
}

var data = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var parse__$1 = (function (){var or__3922__auto__ = parse;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return javelin_timesync.data.parse;
}
})();
var interval__$1 = (function (){var or__3922__auto__ = interval;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return javelin_timesync.data.interval;
}
})();
var data_points__$1 = (function (){var or__3922__auto__ = data_points;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return javelin_timesync.data.data_points;
}
})();
var handler = ((function (data,parse__$1,interval__$1,data_points__$1,map__14621,map__14621__$1,parse,error_handler,interval,data_points){
return (function (r,start,end){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(data,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$timesync_SLASH_start,start,cljs.core.cst$kw$timesync_SLASH_server,(parse__$1.cljs$core$IFn$_invoke$arity$1 ? parse__$1.cljs$core$IFn$_invoke$arity$1(r) : parse__$1.call(null,r)),cljs.core.cst$kw$timesync_SLASH_end,end], null));
});})(data,parse__$1,interval__$1,data_points__$1,map__14621,map__14621__$1,parse,error_handler,interval,data_points))
;
var error_handler__$1 = (function (){var or__3922__auto__ = error_handler;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return ((function (or__3922__auto__,data,parse__$1,interval__$1,data_points__$1,handler,map__14621,map__14621__$1,parse,error_handler,interval,data_points){
return (function (e){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$warn,"javelin-timesync.core",null,94,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (or__3922__auto__,data,parse__$1,interval__$1,data_points__$1,handler,map__14621,map__14621__$1,parse,error_handler,interval,data_points){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e], null);
});})(or__3922__auto__,data,parse__$1,interval__$1,data_points__$1,handler,map__14621,map__14621__$1,parse,error_handler,interval,data_points))
,null)),null,-359344981);
});
;})(or__3922__auto__,data,parse__$1,interval__$1,data_points__$1,handler,map__14621,map__14621__$1,parse,error_handler,interval,data_points))
}
})();
var fetch = ((function (data,parse__$1,interval__$1,data_points__$1,handler,error_handler__$1,map__14621,map__14621__$1,parse,error_handler,interval,data_points){
return (function (handler__$1){
var start = javelin_timesync.time.now_millis();
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$handler,((function (start,data,parse__$1,interval__$1,data_points__$1,handler,error_handler__$1,map__14621,map__14621__$1,parse,error_handler,interval,data_points){
return (function (p1__14617_SHARP_){
var G__14623 = p1__14617_SHARP_;
var G__14624 = start;
var G__14625 = javelin_timesync.time.now_millis();
return (handler__$1.cljs$core$IFn$_invoke$arity$3 ? handler__$1.cljs$core$IFn$_invoke$arity$3(G__14623,G__14624,G__14625) : handler__$1.call(null,G__14623,G__14624,G__14625));
});})(start,data,parse__$1,interval__$1,data_points__$1,handler,error_handler__$1,map__14621,map__14621__$1,parse,error_handler,interval,data_points))
,cljs.core.cst$kw$error_DASH_handler,error_handler__$1], null)], 0));
});})(data,parse__$1,interval__$1,data_points__$1,handler,error_handler__$1,map__14621,map__14621__$1,parse,error_handler,interval,data_points))
;
var return_cell = (function (){var fexpr__14626 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (data,parse__$1,interval__$1,data_points__$1,handler,error_handler__$1,fetch,map__14621,map__14621__$1,parse,error_handler,interval,data_points){
return (function (data__$1){
return javelin_timesync.core.data_points__GT_offset(data__$1);
});})(data,parse__$1,interval__$1,data_points__$1,handler,error_handler__$1,fetch,map__14621,map__14621__$1,parse,error_handler,interval,data_points))
);
return (fexpr__14626.cljs$core$IFn$_invoke$arity$1 ? fexpr__14626.cljs$core$IFn$_invoke$arity$1(data) : fexpr__14626.call(null,data));
})();
var loop_BANG__14630 = ((function (data,parse__$1,interval__$1,data_points__$1,handler,error_handler__$1,fetch,return_cell,map__14621,map__14621__$1,parse,error_handler,interval,data_points){
return (function javelin_timesync$core$loop_BANG_(){
fetch(handler);

if((cljs.core.count(cljs.core.deref(data)) < data_points__$1)){
return setTimeout(((function (data,parse__$1,interval__$1,data_points__$1,handler,error_handler__$1,fetch,return_cell,map__14621,map__14621__$1,parse,error_handler,interval,data_points){
return (function (){
return javelin_timesync$core$loop_BANG_();
});})(data,parse__$1,interval__$1,data_points__$1,handler,error_handler__$1,fetch,return_cell,map__14621,map__14621__$1,parse,error_handler,interval,data_points))
,interval__$1);
} else {
return null;
}
});})(data,parse__$1,interval__$1,data_points__$1,handler,error_handler__$1,fetch,return_cell,map__14621,map__14621__$1,parse,error_handler,interval,data_points))
;
loop_BANG__14630();

return return_cell;
});

javelin_timesync.core._offset_cell.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
javelin_timesync.core._offset_cell.cljs$lang$applyTo = (function (seq14618){
var G__14619 = cljs.core.first(seq14618);
var seq14618__$1 = cljs.core.next(seq14618);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14619,seq14618__$1);
});

javelin_timesync.core.offset_cell = cljs.core.memoize(javelin_timesync.core._offset_cell);
javelin_timesync.core.server_time = (function javelin_timesync$core$server_time(offset){
return (javelin_timesync.time.now_millis() + offset);
});
