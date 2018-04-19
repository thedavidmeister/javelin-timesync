// Compiled by ClojureScript 1.10.238 {:static-fns true, :optimize-constants true}
goog.provide('elem_lib.hoplon');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('javelin.core');
goog.require('hoplon.core');
goog.require('camel_snake_kebab.core');
goog.require('syntax_highlighter.hoplon');
elem_lib.hoplon.code = (function elem_lib$hoplon$code(code_cell){
var code_block = (hoplon.core.code.cljs$core$IFn$_invoke$arity$0 ? hoplon.core.code.cljs$core$IFn$_invoke$arity$0() : hoplon.core.code.call(null));
var G__15028_15032 = cljs.core.cst$kw$class_SLASH_elem_DASH_lib;
var G__15029_15033 = "clojure";
var G__15030_15034 = (function (){var fexpr__15031 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__15028_15032,G__15029_15033,code_block){
return (function (code_cell__$1){
window.requestAnimationFrame(((function (G__15028_15032,G__15029_15033,code_block){
return (function (){
return syntax_highlighter.hoplon.highlight_BANG_(code_block);
});})(G__15028_15032,G__15029_15033,code_block))
);

return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([code_cell__$1], 0));
});})(G__15028_15032,G__15029_15033,code_block))
);
return (fexpr__15031.cljs$core$IFn$_invoke$arity$1 ? fexpr__15031.cljs$core$IFn$_invoke$arity$1(code_cell) : fexpr__15031.call(null,code_cell));
})();
(code_block.cljs$core$IFn$_invoke$arity$3 ? code_block.cljs$core$IFn$_invoke$arity$3(G__15028_15032,G__15029_15033,G__15030_15034) : code_block.call(null,G__15028_15032,G__15029_15033,G__15030_15034));

return code_block;
});
elem_lib.hoplon.elem = (function elem_lib$hoplon$elem(name,desc,f,examples){
var G__15035 = cljs.core.cst$kw$class_SLASH_elem_DASH_lib;
var G__15036 = "elem-lib-item";
var G__15037 = cljs.core.cst$kw$id;
var G__15038 = camel_snake_kebab.core.__GT_kebab_case_string(name);
var G__15039 = (hoplon.core.h2.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.h2.cljs$core$IFn$_invoke$arity$1(name) : hoplon.core.h2.call(null,name));
var G__15040 = (function (){var G__15043 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join('');
return (hoplon.core.code.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.code.cljs$core$IFn$_invoke$arity$1(G__15043) : hoplon.core.code.call(null,G__15043));
})();
var G__15041 = (hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1(desc) : hoplon.core.p.call(null,desc));
var G__15042 = hoplon.core.loop_tpl_STAR_(examples,((function (G__15035,G__15036,G__15037,G__15038,G__15039,G__15040,G__15041){
return (function (item__10269__auto__){
var vec__15050 = javelin.core.cell_map(cljs.core.identity,(function (){var fexpr__15057 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__15035,G__15036,G__15037,G__15038,G__15039,G__15040,G__15041){
return (function (p__15058){
var vec__15059 = p__15058;
var seq__15060 = cljs.core.seq(vec__15059);
var first__15061 = cljs.core.first(seq__15060);
var seq__15060__$1 = cljs.core.next(seq__15060);
var d = first__15061;
var args = seq__15060__$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [args,d], null);
});})(G__15035,G__15036,G__15037,G__15038,G__15039,G__15040,G__15041))
);
return (fexpr__15057.cljs$core$IFn$_invoke$arity$1 ? fexpr__15057.cljs$core$IFn$_invoke$arity$1(item__10269__auto__) : fexpr__15057.call(null,item__10269__auto__));
})());
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15050,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15050,(1),null);
var G__15062 = cljs.core.cst$kw$class_SLASH_elem_DASH_lib;
var G__15063 = "elem-lib-example";
var G__15064 = (hoplon.core.h3.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.h3.cljs$core$IFn$_invoke$arity$1(d) : hoplon.core.h3.call(null,d));
var G__15065 = "Arguments:";
var G__15066 = hoplon.core.loop_tpl_STAR_(args,((function (G__15062,G__15063,G__15064,G__15065,vec__15050,args,d,G__15035,G__15036,G__15037,G__15038,G__15039,G__15040,G__15041){
return (function (item__10269__auto____$1){
var vec__15068 = javelin.core.cell_map(cljs.core.identity,(function (){var fexpr__15071 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__15062,G__15063,G__15064,G__15065,vec__15050,args,d,G__15035,G__15036,G__15037,G__15038,G__15039,G__15040,G__15041){
return (function (arg){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null);
});})(G__15062,G__15063,G__15064,G__15065,vec__15050,args,d,G__15035,G__15036,G__15037,G__15038,G__15039,G__15040,G__15041))
);
return (fexpr__15071.cljs$core$IFn$_invoke$arity$1 ? fexpr__15071.cljs$core$IFn$_invoke$arity$1(item__10269__auto____$1) : fexpr__15071.call(null,item__10269__auto____$1));
})());
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15068,(0),null);
return elem_lib.hoplon.code(cljs.core.deref(arg));
});})(G__15062,G__15063,G__15064,G__15065,vec__15050,args,d,G__15035,G__15036,G__15037,G__15038,G__15039,G__15040,G__15041))
);
var G__15067 = (function (){var result = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(f),cljs.core.deref(args));
if(cljs.core.truth_(javelin.core.cell_QMARK_(result))){
var G__15072 = "Javelin cell value:";
var G__15073 = (hoplon.core.br.cljs$core$IFn$_invoke$arity$0 ? hoplon.core.br.cljs$core$IFn$_invoke$arity$0() : hoplon.core.br.call(null));
var G__15074 = elem_lib.hoplon.code(result);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__15072,G__15073,G__15074) : hoplon.core.div.call(null,G__15072,G__15073,G__15074));
} else {
return result;
}
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$6 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$6(G__15062,G__15063,G__15064,G__15065,G__15066,G__15067) : hoplon.core.div.call(null,G__15062,G__15063,G__15064,G__15065,G__15066,G__15067));
});})(G__15035,G__15036,G__15037,G__15038,G__15039,G__15040,G__15041))
);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$8 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$8(G__15035,G__15036,G__15037,G__15038,G__15039,G__15040,G__15041,G__15042) : hoplon.core.div.call(null,G__15035,G__15036,G__15037,G__15038,G__15039,G__15040,G__15041,G__15042));
});
