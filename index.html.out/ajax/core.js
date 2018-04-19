// Compiled by ClojureScript 1.10.238 {:static-fns true, :optimize-constants true}
goog.provide('ajax.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('ajax.url');
goog.require('ajax.json');
goog.require('ajax.transit');
goog.require('ajax.ring');
goog.require('ajax.formats');
goog.require('ajax.util');
goog.require('ajax.interceptors');
goog.require('ajax.simple');
goog.require('ajax.easy');
goog.require('ajax.protocols');
goog.require('ajax.xhrio');
goog.require('ajax.xml_http_request');
ajax.core.to_interceptor = ajax.interceptors.to_interceptor;
ajax.core.abort = (function ajax$core$abort(this$){

return ajax.protocols._abort(this$);
});
ajax.core.json_request_format = ajax.json.json_request_format;
ajax.core.json_response_format = ajax.json.json_response_format;
ajax.core.transit_request_format = ajax.transit.transit_request_format;
ajax.core.transit_response_format = ajax.transit.transit_response_format;
ajax.core.ring_response_format = ajax.ring.ring_response_format;
ajax.core.url_request_format = ajax.url.url_request_format;
ajax.core.text_request_format = ajax.formats.text_request_format;
ajax.core.text_response_format = ajax.formats.text_response_format;
ajax.core.raw_response_format = ajax.formats.raw_response_format;
ajax.core.default_interceptors = ajax.simple.default_interceptors;
ajax.core.ajax_request = ajax.simple.ajax_request;
ajax.core.default_formats = ajax.easy.default_formats;
ajax.core.detect_response_format = ajax.easy.detect_response_format;
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.GET = (function ajax$core$GET(var_args){
var args__4502__auto__ = [];
var len__4499__auto___5856 = arguments.length;
var i__4500__auto___5857 = (0);
while(true){
if((i__4500__auto___5857 < len__4499__auto___5856)){
args__4502__auto__.push((arguments[i__4500__auto___5857]));

var G__5858 = (i__4500__auto___5857 + (1));
i__4500__auto___5857 = G__5858;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__5404__auto__ = cljs.core.first(opts);
return ajax.easy.easy_ajax_request(uri,"GET",(((f__5404__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__5404__auto__));
});

ajax.core.GET.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
ajax.core.GET.cljs$lang$applyTo = (function (seq5854){
var G__5855 = cljs.core.first(seq5854);
var seq5854__$1 = cljs.core.next(seq5854);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5855,seq5854__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.HEAD = (function ajax$core$HEAD(var_args){
var args__4502__auto__ = [];
var len__4499__auto___5861 = arguments.length;
var i__4500__auto___5862 = (0);
while(true){
if((i__4500__auto___5862 < len__4499__auto___5861)){
args__4502__auto__.push((arguments[i__4500__auto___5862]));

var G__5863 = (i__4500__auto___5862 + (1));
i__4500__auto___5862 = G__5863;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__5404__auto__ = cljs.core.first(opts);
return ajax.easy.easy_ajax_request(uri,"HEAD",(((f__5404__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__5404__auto__));
});

ajax.core.HEAD.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
ajax.core.HEAD.cljs$lang$applyTo = (function (seq5859){
var G__5860 = cljs.core.first(seq5859);
var seq5859__$1 = cljs.core.next(seq5859);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5860,seq5859__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.POST = (function ajax$core$POST(var_args){
var args__4502__auto__ = [];
var len__4499__auto___5866 = arguments.length;
var i__4500__auto___5867 = (0);
while(true){
if((i__4500__auto___5867 < len__4499__auto___5866)){
args__4502__auto__.push((arguments[i__4500__auto___5867]));

var G__5868 = (i__4500__auto___5867 + (1));
i__4500__auto___5867 = G__5868;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__5404__auto__ = cljs.core.first(opts);
return ajax.easy.easy_ajax_request(uri,"POST",(((f__5404__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__5404__auto__));
});

ajax.core.POST.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
ajax.core.POST.cljs$lang$applyTo = (function (seq5864){
var G__5865 = cljs.core.first(seq5864);
var seq5864__$1 = cljs.core.next(seq5864);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5865,seq5864__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.PUT = (function ajax$core$PUT(var_args){
var args__4502__auto__ = [];
var len__4499__auto___5871 = arguments.length;
var i__4500__auto___5872 = (0);
while(true){
if((i__4500__auto___5872 < len__4499__auto___5871)){
args__4502__auto__.push((arguments[i__4500__auto___5872]));

var G__5873 = (i__4500__auto___5872 + (1));
i__4500__auto___5872 = G__5873;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__5404__auto__ = cljs.core.first(opts);
return ajax.easy.easy_ajax_request(uri,"PUT",(((f__5404__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__5404__auto__));
});

ajax.core.PUT.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
ajax.core.PUT.cljs$lang$applyTo = (function (seq5869){
var G__5870 = cljs.core.first(seq5869);
var seq5869__$1 = cljs.core.next(seq5869);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5870,seq5869__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.DELETE = (function ajax$core$DELETE(var_args){
var args__4502__auto__ = [];
var len__4499__auto___5876 = arguments.length;
var i__4500__auto___5877 = (0);
while(true){
if((i__4500__auto___5877 < len__4499__auto___5876)){
args__4502__auto__.push((arguments[i__4500__auto___5877]));

var G__5878 = (i__4500__auto___5877 + (1));
i__4500__auto___5877 = G__5878;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__5404__auto__ = cljs.core.first(opts);
return ajax.easy.easy_ajax_request(uri,"DELETE",(((f__5404__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__5404__auto__));
});

ajax.core.DELETE.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
ajax.core.DELETE.cljs$lang$applyTo = (function (seq5874){
var G__5875 = cljs.core.first(seq5874);
var seq5874__$1 = cljs.core.next(seq5874);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5875,seq5874__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.OPTIONS = (function ajax$core$OPTIONS(var_args){
var args__4502__auto__ = [];
var len__4499__auto___5881 = arguments.length;
var i__4500__auto___5882 = (0);
while(true){
if((i__4500__auto___5882 < len__4499__auto___5881)){
args__4502__auto__.push((arguments[i__4500__auto___5882]));

var G__5883 = (i__4500__auto___5882 + (1));
i__4500__auto___5882 = G__5883;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__5404__auto__ = cljs.core.first(opts);
return ajax.easy.easy_ajax_request(uri,"OPTIONS",(((f__5404__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__5404__auto__));
});

ajax.core.OPTIONS.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
ajax.core.OPTIONS.cljs$lang$applyTo = (function (seq5879){
var G__5880 = cljs.core.first(seq5879);
var seq5879__$1 = cljs.core.next(seq5879);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5880,seq5879__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.TRACE = (function ajax$core$TRACE(var_args){
var args__4502__auto__ = [];
var len__4499__auto___5886 = arguments.length;
var i__4500__auto___5887 = (0);
while(true){
if((i__4500__auto___5887 < len__4499__auto___5886)){
args__4502__auto__.push((arguments[i__4500__auto___5887]));

var G__5888 = (i__4500__auto___5887 + (1));
i__4500__auto___5887 = G__5888;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__5404__auto__ = cljs.core.first(opts);
return ajax.easy.easy_ajax_request(uri,"TRACE",(((f__5404__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__5404__auto__));
});

ajax.core.TRACE.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
ajax.core.TRACE.cljs$lang$applyTo = (function (seq5884){
var G__5885 = cljs.core.first(seq5884);
var seq5884__$1 = cljs.core.next(seq5884);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5885,seq5884__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.PATCH = (function ajax$core$PATCH(var_args){
var args__4502__auto__ = [];
var len__4499__auto___5891 = arguments.length;
var i__4500__auto___5892 = (0);
while(true){
if((i__4500__auto___5892 < len__4499__auto___5891)){
args__4502__auto__.push((arguments[i__4500__auto___5892]));

var G__5893 = (i__4500__auto___5892 + (1));
i__4500__auto___5892 = G__5893;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__5404__auto__ = cljs.core.first(opts);
return ajax.easy.easy_ajax_request(uri,"PATCH",(((f__5404__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__5404__auto__));
});

ajax.core.PATCH.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
ajax.core.PATCH.cljs$lang$applyTo = (function (seq5889){
var G__5890 = cljs.core.first(seq5889);
var seq5889__$1 = cljs.core.next(seq5889);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5890,seq5889__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.PURGE = (function ajax$core$PURGE(var_args){
var args__4502__auto__ = [];
var len__4499__auto___5896 = arguments.length;
var i__4500__auto___5897 = (0);
while(true){
if((i__4500__auto___5897 < len__4499__auto___5896)){
args__4502__auto__.push((arguments[i__4500__auto___5897]));

var G__5898 = (i__4500__auto___5897 + (1));
i__4500__auto___5897 = G__5898;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return ajax.core.PURGE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

ajax.core.PURGE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__5404__auto__ = cljs.core.first(opts);
return ajax.easy.easy_ajax_request(uri,"PURGE",(((f__5404__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__5404__auto__));
});

ajax.core.PURGE.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
ajax.core.PURGE.cljs$lang$applyTo = (function (seq5894){
var G__5895 = cljs.core.first(seq5894);
var seq5894__$1 = cljs.core.next(seq5894);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5895,seq5894__$1);
});

