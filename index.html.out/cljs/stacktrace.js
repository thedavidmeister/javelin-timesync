// Compiled by ClojureScript 1.10.238 {:static-fns true, :optimize-constants true}
goog.provide('cljs.stacktrace');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.string');
goog.require('clojure.string');
if(typeof cljs.stacktrace.parse_stacktrace !== 'undefined'){
} else {
/**
 * Parse a JavaScript stacktrace string into a canonical data form. The
 *   arguments:
 * 
 *   repl-env - the repl environment, an optional map with :host and :port keys
 *           if the stacktrace includes url, not file references
 *   st       - the original stacktrace string to parse
 *   err      - an error map. :ua-product key defines the type of stacktrace parser
 *           to use, for example :chrome
 *   opts     - additional options. :output-dir maybe given in this argument if
 *           :host and :port do not apply, for example, a file path
 * 
 *   The canonical stacktrace representation can easily be mapped to a
 *   ClojureScript one see mapped-stacktrace and mapped-stacktrace-str
 */
cljs.stacktrace.parse_stacktrace = (function (){var method_table__4382__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4383__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4384__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4385__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4386__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.stacktrace","parse-stacktrace"),((function (method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__,hierarchy__4386__auto__){
return (function (repl_env,st,err,opts){
return cljs.core.cst$kw$ua_DASH_product.cljs$core$IFn$_invoke$arity$1(err);
});})(method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__,hierarchy__4386__auto__))
,cljs.core.cst$kw$default,hierarchy__4386__auto__,method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__));
})();
}
cljs.stacktrace.parse_int = (function cljs$stacktrace$parse_int(s){
return parseInt(s,(10));
});
cljs.stacktrace.starts_with_QMARK_ = (function cljs$stacktrace$starts_with_QMARK_(s0,s1){
return goog.string.startsWith(s0,s1);
});
cljs.stacktrace.ends_with_QMARK_ = (function cljs$stacktrace$ends_with_QMARK_(s0,s1){
return goog.string.endsWith(s0,s1);
});
cljs.stacktrace.string__GT_regex = (function cljs$stacktrace$string__GT_regex(s){
return (new RegExp(s));
});
cljs.stacktrace.output_directory = (function cljs$stacktrace$output_directory(opts){
var or__3922__auto__ = cljs.core.cst$kw$output_DASH_dir.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return "out";
}
});
cljs.stacktrace.parse_stacktrace.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (repl_env,st,err,opts){
return st;
}));
cljs.stacktrace.parse_file_line_column = (function cljs$stacktrace$parse_file_line_column(flc){
if(cljs.core.not(cljs.core.re_find(/:/,flc))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [flc,null,null], null);
} else {
var xs = clojure.string.split.cljs$core$IFn$_invoke$arity$2(flc,/:/);
var vec__7630 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (xs){
return (function (p__7636,p__7637){
var vec__7638 = p__7636;
var pre = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7638,(0),null);
var post = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7638,(1),null);
var vec__7641 = p__7637;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7641,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7641,(1),null);
if((i <= (2))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pre,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(post,x)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(pre,x),post], null);
}
});})(xs))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY], null),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,xs,cljs.core.range.cljs$core$IFn$_invoke$arity$3(cljs.core.count(xs),(0),(-1))));
var pre = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7630,(0),null);
var vec__7633 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7630,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7633,(0),null);
var column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7633,(1),null);
var file = clojure.string.join.cljs$core$IFn$_invoke$arity$2(":",pre);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__7644 = file;
if(cljs.stacktrace.starts_with_QMARK_(file,"(")){
return clojure.string.replace(G__7644,"(","");
} else {
return G__7644;
}
})(),cljs.stacktrace.parse_int((function (){var G__7645 = line;
if(cljs.stacktrace.ends_with_QMARK_(line,")")){
return clojure.string.replace(G__7645,")","");
} else {
return G__7645;
}
})()),cljs.stacktrace.parse_int((function (){var G__7646 = column;
if(cljs.stacktrace.ends_with_QMARK_(column,")")){
return clojure.string.replace(G__7646,")","");
} else {
return G__7646;
}
})())], null);
}
});
/**
 * Given a browser file url convert it into a relative path that can be used
 * to locate the original source.
 */
cljs.stacktrace.parse_file = (function cljs$stacktrace$parse_file(p__7647,file,p__7648){
var map__7649 = p__7647;
var map__7649__$1 = ((((!((map__7649 == null)))?(((((map__7649.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7649.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7649):map__7649);
var repl_env = map__7649__$1;
var host = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7649__$1,cljs.core.cst$kw$host);
var host_port = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7649__$1,cljs.core.cst$kw$host_DASH_port);
var port = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7649__$1,cljs.core.cst$kw$port);
var map__7650 = p__7648;
var map__7650__$1 = ((((!((map__7650 == null)))?(((((map__7650.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7650.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7650):map__7650);
var opts = map__7650__$1;
var asset_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7650__$1,cljs.core.cst$kw$asset_DASH_path);
var urlpat = (cljs.core.truth_(host)?cljs.stacktrace.string__GT_regex(["http://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(host),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__3922__auto__ = host_port;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return port;
}
})()),"/"].join('')):"");
var match = (cljs.core.truth_(host)?cljs.core.re_find(urlpat,file):cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$output_DASH_dir));
if(cljs.core.truth_(match)){
return clojure.string.replace(clojure.string.replace(file,urlpat,""),cljs.stacktrace.string__GT_regex(["^",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__3922__auto__ = (function (){var and__3911__auto__ = asset_path;
if(cljs.core.truth_(and__3911__auto__)){
return clojure.string.replace(asset_path,/^\//,"");
} else {
return and__3911__auto__;
}
})();
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.stacktrace.output_directory(opts);
}
})()),"/"].join('')),"");
} else {
var temp__5533__auto__ = cljs.core.cst$kw$asset_DASH_root.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5533__auto__)){
var asset_root = temp__5533__auto__;
return clojure.string.replace(file,asset_root,"");
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Could not relativize URL ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$parse_DASH_stacktrace,cljs.core.cst$kw$reason,cljs.core.cst$kw$relativize_DASH_url], null));
}
}
});
cljs.stacktrace.chrome_st_el__GT_frame = (function cljs$stacktrace$chrome_st_el__GT_frame(repl_env,st_el,opts){
var xs = clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.replace(st_el,/\s+at\s+/,""),/\s+/);
var vec__7653 = ((((1) === cljs.core.count(xs)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.first(xs)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(xs),cljs.core.last(xs)], null));
var function$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7653,(0),null);
var flc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7653,(1),null);
var vec__7656 = cljs.stacktrace.parse_file_line_column(flc);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7656,(0),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7656,(1),null);
var column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7656,(2),null);
if(cljs.core.truth_((function (){var and__3911__auto__ = file;
if(cljs.core.truth_(and__3911__auto__)){
var and__3911__auto____$1 = function$;
if(cljs.core.truth_(and__3911__auto____$1)){
var and__3911__auto____$2 = line;
if(cljs.core.truth_(and__3911__auto____$2)){
return column;
} else {
return and__3911__auto____$2;
}
} else {
return and__3911__auto____$1;
}
} else {
return and__3911__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$file,cljs.stacktrace.parse_file(repl_env,file,opts),cljs.core.cst$kw$function,clojure.string.replace(function$,/Object\./,""),cljs.core.cst$kw$line,line,cljs.core.cst$kw$column,column], null);
} else {
if(clojure.string.blank_QMARK_(function$)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$file,null,cljs.core.cst$kw$function,clojure.string.replace(function$,/Object\./,""),cljs.core.cst$kw$line,null,cljs.core.cst$kw$column,null], null);
}
}
});
cljs.stacktrace.parse_stacktrace.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$chrome,(function (repl_env,st,err,opts){
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__7661_SHARP_){
return cljs.stacktrace.chrome_st_el__GT_frame(repl_env,p1__7661_SHARP_,opts);
}),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__7660_SHARP_){
return !(cljs.stacktrace.starts_with_QMARK_(p1__7660_SHARP_,"    at eval"));
}),cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2((function (p1__7659_SHARP_){
return cljs.stacktrace.starts_with_QMARK_(p1__7659_SHARP_,"Error");
}),clojure.string.split_lines(st))))));
}));
cljs.stacktrace.safari_st_el__GT_frame = (function cljs$stacktrace$safari_st_el__GT_frame(repl_env,st_el,opts){
var vec__7662 = (cljs.core.truth_(cljs.core.re_find(/@/,st_el))?clojure.string.split.cljs$core$IFn$_invoke$arity$2(st_el,/@/):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,st_el], null));
var function$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7662,(0),null);
var flc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7662,(1),null);
var vec__7665 = cljs.stacktrace.parse_file_line_column(flc);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7665,(0),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7665,(1),null);
var column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7665,(2),null);
if(cljs.core.truth_((function (){var and__3911__auto__ = file;
if(cljs.core.truth_(and__3911__auto__)){
var and__3911__auto____$1 = function$;
if(cljs.core.truth_(and__3911__auto____$1)){
var and__3911__auto____$2 = line;
if(cljs.core.truth_(and__3911__auto____$2)){
return column;
} else {
return and__3911__auto____$2;
}
} else {
return and__3911__auto____$1;
}
} else {
return and__3911__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$file,cljs.stacktrace.parse_file(repl_env,file,opts),cljs.core.cst$kw$function,clojure.string.trim(function$),cljs.core.cst$kw$line,line,cljs.core.cst$kw$column,column], null);
} else {
if(clojure.string.blank_QMARK_(function$)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$file,null,cljs.core.cst$kw$function,clojure.string.trim(function$),cljs.core.cst$kw$line,null,cljs.core.cst$kw$column,null], null);
}
}
});
cljs.stacktrace.parse_stacktrace.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$safari,(function (repl_env,st,err,opts){
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__7670_SHARP_){
return cljs.stacktrace.safari_st_el__GT_frame(repl_env,p1__7670_SHARP_,opts);
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__7669_SHARP_){
return !(cljs.stacktrace.starts_with_QMARK_(p1__7669_SHARP_,"eval code"));
}),cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2((function (p1__7668_SHARP_){
return cljs.stacktrace.starts_with_QMARK_(p1__7668_SHARP_,"Error");
}),clojure.string.split_lines(st)))))));
}));
cljs.stacktrace.firefox_clean_function = (function cljs$stacktrace$firefox_clean_function(f){
var f__$1 = f;
var f__$2 = ((clojure.string.blank_QMARK_(f__$1))?null:((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(f__$1.indexOf("</"),(-1)))?(function (){var idx = f__$1.indexOf("</");
return f__$1.substring((idx + (2)));
})():f__$1
));
return clojure.string.replace(clojure.string.replace(f__$2,/</,""),(new RegExp("\\/")),"");
});
cljs.stacktrace.firefox_st_el__GT_frame = (function cljs$stacktrace$firefox_st_el__GT_frame(repl_env,st_el,opts){
var vec__7671 = (cljs.core.truth_(cljs.core.re_find(/@/,st_el))?clojure.string.split.cljs$core$IFn$_invoke$arity$2(st_el,/@/):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,st_el], null));
var function$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7671,(0),null);
var flc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7671,(1),null);
var vec__7674 = cljs.stacktrace.parse_file_line_column(flc);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7674,(0),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7674,(1),null);
var column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7674,(2),null);
if(cljs.core.truth_((function (){var and__3911__auto__ = file;
if(cljs.core.truth_(and__3911__auto__)){
var and__3911__auto____$1 = function$;
if(cljs.core.truth_(and__3911__auto____$1)){
var and__3911__auto____$2 = line;
if(cljs.core.truth_(and__3911__auto____$2)){
return column;
} else {
return and__3911__auto____$2;
}
} else {
return and__3911__auto____$1;
}
} else {
return and__3911__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$file,cljs.stacktrace.parse_file(repl_env,file,opts),cljs.core.cst$kw$function,cljs.stacktrace.firefox_clean_function(function$),cljs.core.cst$kw$line,line,cljs.core.cst$kw$column,column], null);
} else {
if(clojure.string.blank_QMARK_(function$)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$file,null,cljs.core.cst$kw$function,cljs.stacktrace.firefox_clean_function(function$),cljs.core.cst$kw$line,null,cljs.core.cst$kw$column,null], null);
}
}
});
cljs.stacktrace.parse_stacktrace.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$firefox,(function (repl_env,st,err,opts){
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__7679_SHARP_){
return cljs.stacktrace.firefox_st_el__GT_frame(repl_env,p1__7679_SHARP_,opts);
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__7678_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__7678_SHARP_.indexOf("> eval"),(-1));
}),cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2((function (p1__7677_SHARP_){
return cljs.stacktrace.starts_with_QMARK_(p1__7677_SHARP_,"Error");
}),clojure.string.split_lines(st)))))));
}));
cljs.stacktrace.parse_stacktrace.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$rhino,(function (repl_env,st,err,p__7680){
var map__7681 = p__7680;
var map__7681__$1 = ((((!((map__7681 == null)))?(((((map__7681.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7681.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7681):map__7681);
var opts = map__7681__$1;
var output_dir = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7681__$1,cljs.core.cst$kw$output_DASH_dir);
var process_frame = ((function (map__7681,map__7681__$1,opts,output_dir){
return (function cljs$stacktrace$process_frame(frame_str){
if(((clojure.string.blank_QMARK_(frame_str)) || (((-1) === frame_str.indexOf("\tat"))))){
return null;
} else {
var vec__7689 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(frame_str,/:/);
var file_side = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7689,(0),null);
var line_fn_side = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7689,(1),null);
var file = clojure.string.replace(file_side,/\s+at\s+/,"");
var vec__7692 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(line_fn_side,/\s+/);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7692,(0),null);
var function$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7692,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$file,clojure.string.replace(file,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_dir),"/"].join(''),""),cljs.core.cst$kw$function,(cljs.core.truth_(function$)?clojure.string.replace(clojure.string.replace(function$,"(",""),")",""):null),cljs.core.cst$kw$line,(cljs.core.truth_((function (){var and__3911__auto__ = line;
if(cljs.core.truth_(and__3911__auto__)){
return !(clojure.string.blank_QMARK_(line));
} else {
return and__3911__auto__;
}
})())?cljs.stacktrace.parse_int(line):null),cljs.core.cst$kw$column,(0)], null);
}
});})(map__7681,map__7681__$1,opts,output_dir))
;
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(process_frame,clojure.string.split.cljs$core$IFn$_invoke$arity$2(st,/\n/))));
}));
cljs.stacktrace.parse_stacktrace.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$nashorn,(function (repl_env,st,err,p__7695){
var map__7696 = p__7695;
var map__7696__$1 = ((((!((map__7696 == null)))?(((((map__7696.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7696.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7696):map__7696);
var opts = map__7696__$1;
var output_dir = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7696__$1,cljs.core.cst$kw$output_DASH_dir);
var process_frame = ((function (map__7696,map__7696__$1,opts,output_dir){
return (function cljs$stacktrace$process_frame(frame_str){
if(((clojure.string.blank_QMARK_(frame_str)) || (((-1) === frame_str.indexOf("\tat"))))){
return null;
} else {
var frame_str__$1 = clojure.string.replace(frame_str,/\s+at\s+/,"");
var vec__7704 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(frame_str__$1,/\s+/);
var function$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7704,(0),null);
var file_and_line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7704,(1),null);
var vec__7707 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(file_and_line,/:/);
var file_part = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7707,(0),null);
var line_part = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7707,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$file,clojure.string.replace(file_part.substring((1)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_dir),"/"].join(''),""),cljs.core.cst$kw$function,function$,cljs.core.cst$kw$line,(cljs.core.truth_((function (){var and__3911__auto__ = line_part;
if(cljs.core.truth_(and__3911__auto__)){
return !(clojure.string.blank_QMARK_(line_part));
} else {
return and__3911__auto__;
}
})())?cljs.stacktrace.parse_int(line_part.substring((0),(cljs.core.count(line_part) - (1)))):null),cljs.core.cst$kw$column,(0)], null);
}
});})(map__7696,map__7696__$1,opts,output_dir))
;
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(process_frame,clojure.string.split.cljs$core$IFn$_invoke$arity$2(st,/\n/))));
}));
cljs.stacktrace.parse_stacktrace.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$nodejs,(function (repl_env,st,err,p__7710){
var map__7711 = p__7710;
var map__7711__$1 = ((((!((map__7711 == null)))?(((((map__7711.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7711.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7711):map__7711);
var opts = map__7711__$1;
var output_dir = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7711__$1,cljs.core.cst$kw$output_DASH_dir);
var parse_source_loc_info = ((function (map__7711,map__7711__$1,opts,output_dir){
return (function cljs$stacktrace$parse_source_loc_info(x){
if(cljs.core.truth_((function (){var and__3911__auto__ = x;
if(cljs.core.truth_(and__3911__auto__)){
return !(clojure.string.blank_QMARK_(x));
} else {
return and__3911__auto__;
}
})())){
return cljs.stacktrace.parse_int(x);
} else {
return null;
}
});})(map__7711,map__7711__$1,opts,output_dir))
;
var process_frame = ((function (map__7711,map__7711__$1,opts,output_dir){
return (function cljs$stacktrace$process_frame(frame_str){
if(((clojure.string.blank_QMARK_(frame_str)) || ((cljs.core.re_find(/^\s+at/,frame_str) == null)))){
return null;
} else {
var frame_str__$1 = clojure.string.replace(frame_str,/\s+at\s+/,"");
if(clojure.string.starts_with_QMARK_(frame_str__$1,"repl:")){
return null;
} else {
var parts = clojure.string.split.cljs$core$IFn$_invoke$arity$2(frame_str__$1,/\s+/);
var vec__7720 = ((((2) === cljs.core.count(parts)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(parts),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(cljs.core.second(parts),(1),(cljs.core.count(cljs.core.second(parts)) - (1)))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.first(parts)], null));
var function$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7720,(0),null);
var file_AMPERSAND_line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7720,(1),null);
var vec__7723 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(file_AMPERSAND_line,/:/);
var file_part = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7723,(0),null);
var line_part = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7723,(1),null);
var col_part = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7723,(2),null);
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$file,(cljs.core.truth_(function$)?(function (){var G__7726 = file_part;
if(cljs.core.truth_(output_dir)){
return clojure.string.replace(G__7726,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_dir),"/"].join(''),"");
} else {
return G__7726;
}
})():file_part),cljs.core.cst$kw$function,function$,cljs.core.cst$kw$line,parse_source_loc_info(line_part),cljs.core.cst$kw$column,parse_source_loc_info(col_part)], null);
}
}
});})(map__7711,map__7711__$1,opts,output_dir))
;
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(process_frame,clojure.string.split.cljs$core$IFn$_invoke$arity$2(st,/\n/))));
}));
cljs.stacktrace.remove_ext = (function cljs$stacktrace$remove_ext(file){
return clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(file,/\.js$/,""),/\.cljs$/,""),/\.cljc$/,""),/\.clj$/,"");
});
/**
 * Given a cljs.source-map source map data structure map a generated line
 * and column back to the original line, column, and function called.
 */
cljs.stacktrace.mapped_line_column_call = (function cljs$stacktrace$mapped_line_column_call(sms,file,line,column){
var source_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(sms,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(clojure.string.replace(cljs.stacktrace.remove_ext(file),"/",".")));
var get_best_column = ((function (source_map){
return (function cljs$stacktrace$mapped_line_column_call_$_get_best_column(columns,column__$1){
return cljs.core.last((function (){var or__3922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(columns,cljs.core.last(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (source_map){
return (function (p1__7727_SHARP_){
return (p1__7727_SHARP_ <= (column__$1 - (1)));
});})(source_map))
,cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.keys(columns)))));
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.second(cljs.core.first(columns));
}
})());
});})(source_map))
;
var adjust = ((function (source_map){
return (function cljs$stacktrace$mapped_line_column_call_$_adjust(mapped){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (source_map){
return (function (p1__7728_SHARP_,p2__7729_SHARP_){
return (p1__7728_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__7728_SHARP_.cljs$core$IFn$_invoke$arity$1(p2__7729_SHARP_) : p1__7728_SHARP_.call(null,p2__7729_SHARP_));
});})(source_map))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.inc,cljs.core.inc,cljs.core.identity], null),mapped));
});})(source_map))
;
var default$ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,column,null], null);
var temp__5533__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(source_map,(line - (1)));
if(cljs.core.truth_(temp__5533__auto__)){
var columns = temp__5533__auto__;
return adjust(cljs.core.map.cljs$core$IFn$_invoke$arity$2(get_best_column(columns,column),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line,cljs.core.cst$kw$col,cljs.core.cst$kw$name], null)));
} else {
return default$;
}
});
/**
 * Given opts and a canonicalized JavaScript stacktrace frame, return the
 *   ClojureScript frame.
 */
cljs.stacktrace.mapped_frame = (function cljs$stacktrace$mapped_frame(p__7730,sms,opts){
var map__7731 = p__7730;
var map__7731__$1 = ((((!((map__7731 == null)))?(((((map__7731.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7731.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7731):map__7731);
var function$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7731__$1,cljs.core.cst$kw$function);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7731__$1,cljs.core.cst$kw$file);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7731__$1,cljs.core.cst$kw$line);
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7731__$1,cljs.core.cst$kw$column);
var no_source_file_QMARK_ = ((cljs.core.not(file))?true:cljs.stacktrace.starts_with_QMARK_(file,"<"));
var vec__7733 = ((no_source_file_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,column,null], null):cljs.stacktrace.mapped_line_column_call(sms,file,line,column));
var line_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7733,(0),null);
var column_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7733,(1),null);
var call = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7733,(2),null);
var file_SINGLEQUOTE_ = ((no_source_file_QMARK_)?null:((cljs.stacktrace.ends_with_QMARK_(file,".js"))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(file,(0),(cljs.core.count(file) - (3)))),".cljs"].join(''):file));
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$function,function$,cljs.core.cst$kw$call,call,cljs.core.cst$kw$file,((no_source_file_QMARK_)?["NO_SOURCE_FILE",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(file)?[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):null))].join(''):file_SINGLEQUOTE_),cljs.core.cst$kw$line,line_SINGLEQUOTE_,cljs.core.cst$kw$column,column_SINGLEQUOTE_], null);
});
/**
 * Given a vector representing the canonicalized JavaScript stacktrace
 * return the ClojureScript stacktrace. The canonical stacktrace must be
 * in the form:
 * 
 *  [{:file <string>
 *    :function <string>
 *    :line <integer>
 *    :column <integer>}*]
 * 
 * :file must be a URL path (without protocol) relative to :output-dir or a
 * identifier delimited by angle brackets. The returned mapped stacktrace will
 * also contain :url entries to the original sources if it can be determined
 * from the classpath.
 */
cljs.stacktrace.mapped_stacktrace = (function cljs$stacktrace$mapped_stacktrace(var_args){
var G__7739 = arguments.length;
switch (G__7739) {
case 2:
return cljs.stacktrace.mapped_stacktrace.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.stacktrace.mapped_stacktrace.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.stacktrace.mapped_stacktrace.cljs$core$IFn$_invoke$arity$2 = (function (stacktrace,sms){
return cljs.stacktrace.mapped_stacktrace.cljs$core$IFn$_invoke$arity$3(stacktrace,sms,null);
});

cljs.stacktrace.mapped_stacktrace.cljs$core$IFn$_invoke$arity$3 = (function (stacktrace,sms,opts){
var call__GT_function = (function cljs$stacktrace$call__GT_function(x){
if(cljs.core.truth_(cljs.core.cst$kw$call.cljs$core$IFn$_invoke$arity$1(x))){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$function],[cljs.core.cst$kw$call.cljs$core$IFn$_invoke$arity$1(x)]);
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
var call_merge = (function cljs$stacktrace$call_merge(function$,call){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic((function (munged_fn_name,unmunged_call_name){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(munged_fn_name,clojure.string.replace(cljs.core.munge(unmunged_call_name),".","$"))){
return unmunged_call_name;
} else {
return munged_fn_name;
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([function$,call], 0));
});
var mapped_frames = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.memoize((function (p1__7736_SHARP_){
return cljs.stacktrace.mapped_frame(p1__7736_SHARP_,sms,opts);
})),stacktrace);
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$3(call_merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (mapped_frames){
return (function (p1__7737_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__7737_SHARP_,cljs.core.cst$kw$call);
});})(mapped_frames))
,mapped_frames),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.rest(cljs.core.map.cljs$core$IFn$_invoke$arity$2(call__GT_function,mapped_frames)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY], null))));
});

cljs.stacktrace.mapped_stacktrace.cljs$lang$maxFixedArity = 3;

/**
 * Given a vector representing the canonicalized JavaScript stacktrace and a map
 *   of library names to decoded source maps, print the ClojureScript stacktrace .
 *   See mapped-stacktrace.
 */
cljs.stacktrace.mapped_stacktrace_str = (function cljs$stacktrace$mapped_stacktrace_str(var_args){
var G__7742 = arguments.length;
switch (G__7742) {
case 2:
return cljs.stacktrace.mapped_stacktrace_str.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.stacktrace.mapped_stacktrace_str.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.stacktrace.mapped_stacktrace_str.cljs$core$IFn$_invoke$arity$2 = (function (stacktrace,sms){
return cljs.stacktrace.mapped_stacktrace_str.cljs$core$IFn$_invoke$arity$3(stacktrace,sms,null);
});

cljs.stacktrace.mapped_stacktrace_str.cljs$core$IFn$_invoke$arity$3 = (function (stacktrace,sms,opts){
var sb__4430__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_7743_7754 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_7744_7755 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_7743_7754,_STAR_print_fn_STAR_7744_7755,sb__4430__auto__){
return (function (x__4431__auto__){
return sb__4430__auto__.append(x__4431__auto__);
});})(_STAR_print_newline_STAR_7743_7754,_STAR_print_fn_STAR_7744_7755,sb__4430__auto__))
;

try{var seq__7745_7756 = cljs.core.seq(cljs.stacktrace.mapped_stacktrace.cljs$core$IFn$_invoke$arity$3(stacktrace,sms,opts));
var chunk__7746_7757 = null;
var count__7747_7758 = (0);
var i__7748_7759 = (0);
while(true){
if((i__7748_7759 < count__7747_7758)){
var map__7749_7760 = chunk__7746_7757.cljs$core$IIndexed$_nth$arity$2(null,i__7748_7759);
var map__7749_7761__$1 = ((((!((map__7749_7760 == null)))?(((((map__7749_7760.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7749_7760.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7749_7760):map__7749_7760);
var function_7762 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7749_7761__$1,cljs.core.cst$kw$function);
var file_7763 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7749_7761__$1,cljs.core.cst$kw$file);
var line_7764 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7749_7761__$1,cljs.core.cst$kw$line);
var column_7765 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7749_7761__$1,cljs.core.cst$kw$column);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\t",[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(function_7762)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(function_7762)," "].join(''):null)),"(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_7763),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(line_7764)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_7764)].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(column_7765)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_7765)].join(''):null)),")"].join('')], 0));


var G__7766 = seq__7745_7756;
var G__7767 = chunk__7746_7757;
var G__7768 = count__7747_7758;
var G__7769 = (i__7748_7759 + (1));
seq__7745_7756 = G__7766;
chunk__7746_7757 = G__7767;
count__7747_7758 = G__7768;
i__7748_7759 = G__7769;
continue;
} else {
var temp__5535__auto___7770 = cljs.core.seq(seq__7745_7756);
if(temp__5535__auto___7770){
var seq__7745_7771__$1 = temp__5535__auto___7770;
if(cljs.core.chunked_seq_QMARK_(seq__7745_7771__$1)){
var c__4319__auto___7772 = cljs.core.chunk_first(seq__7745_7771__$1);
var G__7773 = cljs.core.chunk_rest(seq__7745_7771__$1);
var G__7774 = c__4319__auto___7772;
var G__7775 = cljs.core.count(c__4319__auto___7772);
var G__7776 = (0);
seq__7745_7756 = G__7773;
chunk__7746_7757 = G__7774;
count__7747_7758 = G__7775;
i__7748_7759 = G__7776;
continue;
} else {
var map__7751_7777 = cljs.core.first(seq__7745_7771__$1);
var map__7751_7778__$1 = ((((!((map__7751_7777 == null)))?(((((map__7751_7777.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7751_7777.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7751_7777):map__7751_7777);
var function_7779 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7751_7778__$1,cljs.core.cst$kw$function);
var file_7780 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7751_7778__$1,cljs.core.cst$kw$file);
var line_7781 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7751_7778__$1,cljs.core.cst$kw$line);
var column_7782 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7751_7778__$1,cljs.core.cst$kw$column);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\t",[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(function_7779)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(function_7779)," "].join(''):null)),"(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_7780),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(line_7781)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_7781)].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(column_7782)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_7782)].join(''):null)),")"].join('')], 0));


var G__7783 = cljs.core.next(seq__7745_7771__$1);
var G__7784 = null;
var G__7785 = (0);
var G__7786 = (0);
seq__7745_7756 = G__7783;
chunk__7746_7757 = G__7784;
count__7747_7758 = G__7785;
i__7748_7759 = G__7786;
continue;
}
} else {
}
}
break;
}
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_7744_7755;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_7743_7754;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4430__auto__)].join('');
});

cljs.stacktrace.mapped_stacktrace_str.cljs$lang$maxFixedArity = 3;

