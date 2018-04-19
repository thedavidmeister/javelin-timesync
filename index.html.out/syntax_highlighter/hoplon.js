// Compiled by ClojureScript 1.10.238 {:static-fns true, :optimize-constants true}
goog.provide('syntax_highlighter.hoplon');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
goog.require('javelin.core');
goog.require('syntax_highlighter.data');
syntax_highlighter.hoplon.stylesheet = (function syntax_highlighter$hoplon$stylesheet(var_args){
var G__15018 = arguments.length;
switch (G__15018) {
case 0:
return syntax_highlighter.hoplon.stylesheet.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return syntax_highlighter.hoplon.stylesheet.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

syntax_highlighter.hoplon.stylesheet.cljs$core$IFn$_invoke$arity$0 = (function (){
return syntax_highlighter.hoplon.stylesheet.cljs$core$IFn$_invoke$arity$1(syntax_highlighter.data.fallback_theme);
});

syntax_highlighter.hoplon.stylesheet.cljs$core$IFn$_invoke$arity$1 = (function (theme_name){
var G__15019 = cljs.core.cst$kw$href;
var G__15020 = ["https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.6.0/styles/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(theme_name),".min.css"].join('');
var G__15021 = cljs.core.cst$kw$rel;
var G__15022 = "stylesheet";
var G__15023 = cljs.core.cst$kw$type;
var G__15024 = "text/css";
return (hoplon.core.link.cljs$core$IFn$_invoke$arity$6 ? hoplon.core.link.cljs$core$IFn$_invoke$arity$6(G__15019,G__15020,G__15021,G__15022,G__15023,G__15024) : hoplon.core.link.call(null,G__15019,G__15020,G__15021,G__15022,G__15023,G__15024));
});

syntax_highlighter.hoplon.stylesheet.cljs$lang$maxFixedArity = 1;

syntax_highlighter.hoplon.highlight_BANG_ = (function syntax_highlighter$hoplon$highlight_BANG_(el){
return hljs.highlightBlock(el);
});
syntax_highlighter.hoplon.with_syntax_highlighter = (function syntax_highlighter$hoplon$with_syntax_highlighter(el){
var el__$1 = el;
hoplon.core.when_dom(el__$1,((function (el__$1){
return (function (){
return syntax_highlighter.hoplon.highlight_BANG_(el__$1);
});})(el__$1))
);

return el__$1;
});
