// Compiled by ClojureScript 1.10.238 {:static-fns true, :optimize-constants true}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('ajax.protocols');
goog.require('goog.string');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__5578 = e.target.readyState;
var fexpr__5577 = new cljs.core.PersistentArrayMap(null, 5, [(0),cljs.core.cst$kw$not_DASH_initialized,(1),cljs.core.cst$kw$connection_DASH_established,(2),cljs.core.cst$kw$request_DASH_received,(3),cljs.core.cst$kw$processing_DASH_request,(4),cljs.core.cst$kw$response_DASH_ready], null);
return (fexpr__5577.cljs$core$IFn$_invoke$arity$1 ? fexpr__5577.cljs$core$IFn$_invoke$arity$1(G__5578) : fexpr__5577.call(null,G__5578));
});
ajax.xml_http_request.append = (function ajax$xml_http_request$append(current,next){
if(cljs.core.truth_(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next)].join('');
} else {
return next;
}
});
ajax.xml_http_request.process_headers = (function ajax$xml_http_request$process_headers(header_str){
if(cljs.core.truth_(header_str)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (headers,header_line){
if(cljs.core.truth_(goog.string.isEmptyOrWhitespace(header_line))){
return headers;
} else {
var key_value = goog.string.splitLimit(header_line,": ",(2));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(headers,(key_value[(0)]),ajax.xml_http_request.append,(key_value[(1)]));
}
}),cljs.core.PersistentArrayMap.EMPTY,header_str.split("\r\n"));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
ajax.xml_http_request.xmlhttprequest = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_target_STAR_,"nodejs"))?(function (){var xmlhttprequest = require("xmlhttprequest").XMLHttpRequest;
goog.object.set(global,"XMLHttpRequest",xmlhttprequest);

return xmlhttprequest;
})():window.XMLHttpRequest);
ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__5580,handler){
var map__5581 = p__5580;
var map__5581__$1 = ((((!((map__5581 == null)))?(((((map__5581.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5581.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5581):map__5581);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5581__$1,cljs.core.cst$kw$uri);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5581__$1,cljs.core.cst$kw$method);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5581__$1,cljs.core.cst$kw$body);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5581__$1,cljs.core.cst$kw$headers);
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__5581__$1,cljs.core.cst$kw$timeout,(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__5581__$1,cljs.core.cst$kw$with_DASH_credentials,false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5581__$1,cljs.core.cst$kw$response_DASH_format);
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__5581,map__5581__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__5579_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$response_DASH_ready,ajax.xml_http_request.ready_state(p1__5579_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
});})(this$__$1,map__5581,map__5581__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__5535__auto___5593 = cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5535__auto___5593)){
var response_type_5594 = temp__5535__auto___5593;
this$__$1.responseType = cljs.core.name(response_type_5594);
} else {
}

var seq__5583_5595 = cljs.core.seq(headers);
var chunk__5584_5596 = null;
var count__5585_5597 = (0);
var i__5586_5598 = (0);
while(true){
if((i__5586_5598 < count__5585_5597)){
var vec__5587_5599 = chunk__5584_5596.cljs$core$IIndexed$_nth$arity$2(null,i__5586_5598);
var k_5600 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5587_5599,(0),null);
var v_5601 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5587_5599,(1),null);
this$__$1.setRequestHeader(k_5600,v_5601);


var G__5602 = seq__5583_5595;
var G__5603 = chunk__5584_5596;
var G__5604 = count__5585_5597;
var G__5605 = (i__5586_5598 + (1));
seq__5583_5595 = G__5602;
chunk__5584_5596 = G__5603;
count__5585_5597 = G__5604;
i__5586_5598 = G__5605;
continue;
} else {
var temp__5535__auto___5606 = cljs.core.seq(seq__5583_5595);
if(temp__5535__auto___5606){
var seq__5583_5607__$1 = temp__5535__auto___5606;
if(cljs.core.chunked_seq_QMARK_(seq__5583_5607__$1)){
var c__4319__auto___5608 = cljs.core.chunk_first(seq__5583_5607__$1);
var G__5609 = cljs.core.chunk_rest(seq__5583_5607__$1);
var G__5610 = c__4319__auto___5608;
var G__5611 = cljs.core.count(c__4319__auto___5608);
var G__5612 = (0);
seq__5583_5595 = G__5609;
chunk__5584_5596 = G__5610;
count__5585_5597 = G__5611;
i__5586_5598 = G__5612;
continue;
} else {
var vec__5590_5613 = cljs.core.first(seq__5583_5607__$1);
var k_5614 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5590_5613,(0),null);
var v_5615 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5590_5613,(1),null);
this$__$1.setRequestHeader(k_5614,v_5615);


var G__5616 = cljs.core.next(seq__5583_5607__$1);
var G__5617 = null;
var G__5618 = (0);
var G__5619 = (0);
seq__5583_5595 = G__5616;
chunk__5584_5596 = G__5617;
count__5585_5597 = G__5618;
i__5586_5598 = G__5619;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__3922__auto__ = body;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return "";
}
})());

return this$__$1;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = (function (this$){
var this$__$1 = this;
return ajax.xml_http_request.process_headers(this$__$1.getAllResponseHeaders());
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),this$__$1.readyState);
});
