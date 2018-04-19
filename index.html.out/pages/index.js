// Compiled by ClojureScript 1.10.238 {:static-fns true, :optimize-constants true}
goog.provide('pages.index');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
goog.require('javelin.core');
goog.require('syntax_highlighter.hoplon');
goog.require('elem_lib.hoplon');
goog.require('javelin_timesync.core');
pages.index.halving_cell = (function pages$index$halving_cell(c){
var fexpr__15078 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1((function (G__15077){
return (0.5 * G__15077);
}));
return (fexpr__15078.cljs$core$IFn$_invoke$arity$1 ? fexpr__15078.cljs$core$IFn$_invoke$arity$1(c) : fexpr__15078.call(null,c));
});
hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__15079 = syntax_highlighter.hoplon.stylesheet.cljs$core$IFn$_invoke$arity$0();
return (hoplon.core.head.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.head.cljs$core$IFn$_invoke$arity$1(G__15079) : hoplon.core.head.call(null,G__15079));
})(),(function (){var G__15080 = elem_lib.hoplon.elem("Offset cell","Offset cell generator",new cljs.core.Var(function(){return javelin_timesync.core.offset_cell;},cljs.core.cst$sym$javelin_DASH_timesync$core_SLASH_offset_DASH_cell,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$javelin_DASH_timesync$core,cljs.core.cst$sym$offset_DASH_cell,"/Users/davidmeister/.boot/cache/tmp/Users/davidmeister/javelin-timesync/1mfz/uanrg/javelin_timesync/core.cljs",17,1,112,112,cljs.core.List.EMPTY,null,(cljs.core.truth_(javelin_timesync.core.offset_cell)?javelin_timesync.core.offset_cell.cljs$lang$test:null)])),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Ably offset cell","https://rest.ably.io/time?v=1.0",cljs.core.cst$kw$parse,cljs.core.first,cljs.core.cst$kw$interval,(2000),cljs.core.cst$kw$data_DASH_points,(10)], null)], null));
return (hoplon.core.body.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.body.cljs$core$IFn$_invoke$arity$1(G__15080) : hoplon.core.body.call(null,G__15080));
})()], 0));
