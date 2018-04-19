// Compiled by ClojureScript 1.10.238 {:static-fns true, :optimize-constants true}
goog.provide('camel_snake_kebab.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('camel_snake_kebab.internals.misc');
goog.require('camel_snake_kebab.internals.alter_name');
/**
 * Converts the case of a string according to the rule for the first
 *   word, remaining words, and the separator.
 */
camel_snake_kebab.core.convert_case = (function camel_snake_kebab$core$convert_case(var_args){
var args__4502__auto__ = [];
var len__4499__auto___14870 = arguments.length;
var i__4500__auto___14871 = (0);
while(true){
if((i__4500__auto___14871 < len__4499__auto___14870)){
args__4502__auto__.push((arguments[i__4500__auto___14871]));

var G__14872 = (i__4500__auto___14871 + (1));
i__4500__auto___14871 = G__14872;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((4) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((4)),(0),null)):null);
return camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4503__auto__);
});

camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic = (function (first_fn,rest_fn,sep,s,rest){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,first_fn,rest_fn,sep,s,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest], 0));
});

camel_snake_kebab.core.convert_case.cljs$lang$maxFixedArity = (4);

/** @this {Function} */
camel_snake_kebab.core.convert_case.cljs$lang$applyTo = (function (seq14865){
var G__14866 = cljs.core.first(seq14865);
var seq14865__$1 = cljs.core.next(seq14865);
var G__14867 = cljs.core.first(seq14865__$1);
var seq14865__$2 = cljs.core.next(seq14865__$1);
var G__14868 = cljs.core.first(seq14865__$2);
var seq14865__$3 = cljs.core.next(seq14865__$2);
var G__14869 = cljs.core.first(seq14865__$3);
var seq14865__$4 = cljs.core.next(seq14865__$3);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14866,G__14867,G__14868,G__14869,seq14865__$4);
});

camel_snake_kebab.core.__GT_PascalCase = (function camel_snake_kebab$core$__GT_PascalCase(var_args){
var args__4502__auto__ = [];
var len__4499__auto___14881 = arguments.length;
var i__4500__auto___14882 = (0);
while(true){
if((i__4500__auto___14882 < len__4499__auto___14881)){
args__4502__auto__.push((arguments[i__4500__auto___14882]));

var G__14883 = (i__4500__auto___14882 + (1));
i__4500__auto___14882 = G__14883;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__14828__auto__,rest__14829__auto__){
var convert_case__14830__auto__ = (function (p1__14827__14831__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",p1__14827__14831__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__14829__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__14828__auto__,convert_case__14830__auto__);
});

camel_snake_kebab.core.__GT_PascalCase.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_PascalCase.cljs$lang$applyTo = (function (seq14873){
var G__14874 = cljs.core.first(seq14873);
var seq14873__$1 = cljs.core.next(seq14873);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14874,seq14873__$1);
});


camel_snake_kebab.core.__GT_PascalCaseString = (function camel_snake_kebab$core$__GT_PascalCaseString(var_args){
var args__4502__auto__ = [];
var len__4499__auto___14884 = arguments.length;
var i__4500__auto___14885 = (0);
while(true){
if((i__4500__auto___14885 < len__4499__auto___14884)){
args__4502__auto__.push((arguments[i__4500__auto___14885]));

var G__14886 = (i__4500__auto___14885 + (1));
i__4500__auto___14885 = G__14886;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__14833__auto__,rest__14834__auto__){
if(!((s__14833__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__14833__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__14833__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__14834__auto__], 0)));
});

camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$applyTo = (function (seq14875){
var G__14876 = cljs.core.first(seq14875);
var seq14875__$1 = cljs.core.next(seq14875);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14876,seq14875__$1);
});


camel_snake_kebab.core.__GT_PascalCaseSymbol = (function camel_snake_kebab$core$__GT_PascalCaseSymbol(var_args){
var args__4502__auto__ = [];
var len__4499__auto___14887 = arguments.length;
var i__4500__auto___14888 = (0);
while(true){
if((i__4500__auto___14888 < len__4499__auto___14887)){
args__4502__auto__.push((arguments[i__4500__auto___14888]));

var G__14889 = (i__4500__auto___14888 + (1));
i__4500__auto___14888 = G__14889;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__14833__auto__,rest__14834__auto__){
if(!((s__14833__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__14833__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__14833__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__14834__auto__], 0)));
});

camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$applyTo = (function (seq14877){
var G__14878 = cljs.core.first(seq14877);
var seq14877__$1 = cljs.core.next(seq14877);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14878,seq14877__$1);
});


camel_snake_kebab.core.__GT_PascalCaseKeyword = (function camel_snake_kebab$core$__GT_PascalCaseKeyword(var_args){
var args__4502__auto__ = [];
var len__4499__auto___14890 = arguments.length;
var i__4500__auto___14891 = (0);
while(true){
if((i__4500__auto___14891 < len__4499__auto___14890)){
args__4502__auto__.push((arguments[i__4500__auto___14891]));

var G__14892 = (i__4500__auto___14891 + (1));
i__4500__auto___14891 = G__14892;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__14833__auto__,rest__14834__auto__){
if(!((s__14833__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__14833__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__14833__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__14834__auto__], 0)));
});

camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$applyTo = (function (seq14879){
var G__14880 = cljs.core.first(seq14879);
var seq14879__$1 = cljs.core.next(seq14879);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14880,seq14879__$1);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case = (function camel_snake_kebab$core$__GT_Camel_Snake_Case(var_args){
var args__4502__auto__ = [];
var len__4499__auto___14901 = arguments.length;
var i__4500__auto___14902 = (0);
while(true){
if((i__4500__auto___14902 < len__4499__auto___14901)){
args__4502__auto__.push((arguments[i__4500__auto___14902]));

var G__14903 = (i__4500__auto___14902 + (1));
i__4500__auto___14902 = G__14903;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__14828__auto__,rest__14829__auto__){
var convert_case__14830__auto__ = (function (p1__14827__14831__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",p1__14827__14831__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__14829__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__14828__auto__,convert_case__14830__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$applyTo = (function (seq14893){
var G__14894 = cljs.core.first(seq14893);
var seq14893__$1 = cljs.core.next(seq14893);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14894,seq14893__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_String = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_String(var_args){
var args__4502__auto__ = [];
var len__4499__auto___14904 = arguments.length;
var i__4500__auto___14905 = (0);
while(true){
if((i__4500__auto___14905 < len__4499__auto___14904)){
args__4502__auto__.push((arguments[i__4500__auto___14905]));

var G__14906 = (i__4500__auto___14905 + (1));
i__4500__auto___14905 = G__14906;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__14833__auto__,rest__14834__auto__){
if(!((s__14833__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__14833__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__14833__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__14834__auto__], 0)));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$applyTo = (function (seq14895){
var G__14896 = cljs.core.first(seq14895);
var seq14895__$1 = cljs.core.next(seq14895);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14896,seq14895__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Symbol(var_args){
var args__4502__auto__ = [];
var len__4499__auto___14907 = arguments.length;
var i__4500__auto___14908 = (0);
while(true){
if((i__4500__auto___14908 < len__4499__auto___14907)){
args__4502__auto__.push((arguments[i__4500__auto___14908]));

var G__14909 = (i__4500__auto___14908 + (1));
i__4500__auto___14908 = G__14909;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__14833__auto__,rest__14834__auto__){
if(!((s__14833__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__14833__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__14833__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__14834__auto__], 0)));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$applyTo = (function (seq14897){
var G__14898 = cljs.core.first(seq14897);
var seq14897__$1 = cljs.core.next(seq14897);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14898,seq14897__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Keyword(var_args){
var args__4502__auto__ = [];
var len__4499__auto___14910 = arguments.length;
var i__4500__auto___14911 = (0);
while(true){
if((i__4500__auto___14911 < len__4499__auto___14910)){
args__4502__auto__.push((arguments[i__4500__auto___14911]));

var G__14912 = (i__4500__auto___14911 + (1));
i__4500__auto___14911 = G__14912;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__14833__auto__,rest__14834__auto__){
if(!((s__14833__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__14833__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__14833__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__14834__auto__], 0)));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$applyTo = (function (seq14899){
var G__14900 = cljs.core.first(seq14899);
var seq14899__$1 = cljs.core.next(seq14899);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14900,seq14899__$1);
});

camel_snake_kebab.core.__GT_camelCase = (function camel_snake_kebab$core$__GT_camelCase(var_args){
var args__4502__auto__ = [];
var len__4499__auto___14921 = arguments.length;
var i__4500__auto___14922 = (0);
while(true){
if((i__4500__auto___14922 < len__4499__auto___14921)){
args__4502__auto__.push((arguments[i__4500__auto___14922]));

var G__14923 = (i__4500__auto___14922 + (1));
i__4500__auto___14922 = G__14923;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__14828__auto__,rest__14829__auto__){
var convert_case__14830__auto__ = (function (p1__14827__14831__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",p1__14827__14831__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__14829__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__14828__auto__,convert_case__14830__auto__);
});

camel_snake_kebab.core.__GT_camelCase.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_camelCase.cljs$lang$applyTo = (function (seq14913){
var G__14914 = cljs.core.first(seq14913);
var seq14913__$1 = cljs.core.next(seq14913);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14914,seq14913__$1);
});


camel_snake_kebab.core.__GT_camelCaseString = (function camel_snake_kebab$core$__GT_camelCaseString(var_args){
var args__4502__auto__ = [];
var len__4499__auto___14924 = arguments.length;
var i__4500__auto___14925 = (0);
while(true){
if((i__4500__auto___14925 < len__4499__auto___14924)){
args__4502__auto__.push((arguments[i__4500__auto___14925]));

var G__14926 = (i__4500__auto___14925 + (1));
i__4500__auto___14925 = G__14926;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__14833__auto__,rest__14834__auto__){
if(!((s__14833__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__14833__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__14833__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__14834__auto__], 0)));
});

camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$applyTo = (function (seq14915){
var G__14916 = cljs.core.first(seq14915);
var seq14915__$1 = cljs.core.next(seq14915);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14916,seq14915__$1);
});


camel_snake_kebab.core.__GT_camelCaseSymbol = (function camel_snake_kebab$core$__GT_camelCaseSymbol(var_args){
var args__4502__auto__ = [];
var len__4499__auto___14927 = arguments.length;
var i__4500__auto___14928 = (0);
while(true){
if((i__4500__auto___14928 < len__4499__auto___14927)){
args__4502__auto__.push((arguments[i__4500__auto___14928]));

var G__14929 = (i__4500__auto___14928 + (1));
i__4500__auto___14928 = G__14929;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__14833__auto__,rest__14834__auto__){
if(!((s__14833__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__14833__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__14833__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__14834__auto__], 0)));
});

camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$applyTo = (function (seq14917){
var G__14918 = cljs.core.first(seq14917);
var seq14917__$1 = cljs.core.next(seq14917);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14918,seq14917__$1);
});


camel_snake_kebab.core.__GT_camelCaseKeyword = (function camel_snake_kebab$core$__GT_camelCaseKeyword(var_args){
var args__4502__auto__ = [];
var len__4499__auto___14930 = arguments.length;
var i__4500__auto___14931 = (0);
while(true){
if((i__4500__auto___14931 < len__4499__auto___14930)){
args__4502__auto__.push((arguments[i__4500__auto___14931]));

var G__14932 = (i__4500__auto___14931 + (1));
i__4500__auto___14931 = G__14932;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__14833__auto__,rest__14834__auto__){
if(!((s__14833__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__14833__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__14833__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__14834__auto__], 0)));
});

camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$applyTo = (function (seq14919){
var G__14920 = cljs.core.first(seq14919);
var seq14919__$1 = cljs.core.next(seq14919);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14920,seq14919__$1);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE(var_args){
var args__4502__auto__ = [];
var len__4499__auto___14941 = arguments.length;
var i__4500__auto___14942 = (0);
while(true){
if((i__4500__auto___14942 < len__4499__auto___14941)){
args__4502__auto__.push((arguments[i__4500__auto___14942]));

var G__14943 = (i__4500__auto___14942 + (1));
i__4500__auto___14942 = G__14943;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic = (function (s__14828__auto__,rest__14829__auto__){
var convert_case__14830__auto__ = (function (p1__14827__14831__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",p1__14827__14831__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__14829__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__14828__auto__,convert_case__14830__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$applyTo = (function (seq14933){
var G__14934 = cljs.core.first(seq14933);
var seq14933__$1 = cljs.core.next(seq14933);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14934,seq14933__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_STRING(var_args){
var args__4502__auto__ = [];
var len__4499__auto___14944 = arguments.length;
var i__4500__auto___14945 = (0);
while(true){
if((i__4500__auto___14945 < len__4499__auto___14944)){
args__4502__auto__.push((arguments[i__4500__auto___14945]));

var G__14946 = (i__4500__auto___14945 + (1));
i__4500__auto___14945 = G__14946;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic = (function (s__14833__auto__,rest__14834__auto__){
if(!((s__14833__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__14833__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__14833__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__14834__auto__], 0)));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$applyTo = (function (seq14935){
var G__14936 = cljs.core.first(seq14935);
var seq14935__$1 = cljs.core.next(seq14935);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14936,seq14935__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_SYMBOL(var_args){
var args__4502__auto__ = [];
var len__4499__auto___14947 = arguments.length;
var i__4500__auto___14948 = (0);
while(true){
if((i__4500__auto___14948 < len__4499__auto___14947)){
args__4502__auto__.push((arguments[i__4500__auto___14948]));

var G__14949 = (i__4500__auto___14948 + (1));
i__4500__auto___14948 = G__14949;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic = (function (s__14833__auto__,rest__14834__auto__){
if(!((s__14833__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__14833__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__14833__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__14834__auto__], 0)));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$applyTo = (function (seq14937){
var G__14938 = cljs.core.first(seq14937);
var seq14937__$1 = cljs.core.next(seq14937);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14938,seq14937__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_KEYWORD(var_args){
var args__4502__auto__ = [];
var len__4499__auto___14950 = arguments.length;
var i__4500__auto___14951 = (0);
while(true){
if((i__4500__auto___14951 < len__4499__auto___14950)){
args__4502__auto__.push((arguments[i__4500__auto___14951]));

var G__14952 = (i__4500__auto___14951 + (1));
i__4500__auto___14951 = G__14952;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic = (function (s__14833__auto__,rest__14834__auto__){
if(!((s__14833__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__14833__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__14833__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__14834__auto__], 0)));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$applyTo = (function (seq14939){
var G__14940 = cljs.core.first(seq14939);
var seq14939__$1 = cljs.core.next(seq14939);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14940,seq14939__$1);
});

camel_snake_kebab.core.__GT_snake_case = (function camel_snake_kebab$core$__GT_snake_case(var_args){
var args__4502__auto__ = [];
var len__4499__auto___14961 = arguments.length;
var i__4500__auto___14962 = (0);
while(true){
if((i__4500__auto___14962 < len__4499__auto___14961)){
args__4502__auto__.push((arguments[i__4500__auto___14962]));

var G__14963 = (i__4500__auto___14962 + (1));
i__4500__auto___14962 = G__14963;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__14828__auto__,rest__14829__auto__){
var convert_case__14830__auto__ = (function (p1__14827__14831__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",p1__14827__14831__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__14829__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__14828__auto__,convert_case__14830__auto__);
});

camel_snake_kebab.core.__GT_snake_case.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_snake_case.cljs$lang$applyTo = (function (seq14953){
var G__14954 = cljs.core.first(seq14953);
var seq14953__$1 = cljs.core.next(seq14953);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14954,seq14953__$1);
});


camel_snake_kebab.core.__GT_snake_case_string = (function camel_snake_kebab$core$__GT_snake_case_string(var_args){
var args__4502__auto__ = [];
var len__4499__auto___14964 = arguments.length;
var i__4500__auto___14965 = (0);
while(true){
if((i__4500__auto___14965 < len__4499__auto___14964)){
args__4502__auto__.push((arguments[i__4500__auto___14965]));

var G__14966 = (i__4500__auto___14965 + (1));
i__4500__auto___14965 = G__14966;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__14833__auto__,rest__14834__auto__){
if(!((s__14833__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__14833__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__14833__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__14834__auto__], 0)));
});

camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$applyTo = (function (seq14955){
var G__14956 = cljs.core.first(seq14955);
var seq14955__$1 = cljs.core.next(seq14955);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14956,seq14955__$1);
});


camel_snake_kebab.core.__GT_snake_case_symbol = (function camel_snake_kebab$core$__GT_snake_case_symbol(var_args){
var args__4502__auto__ = [];
var len__4499__auto___14967 = arguments.length;
var i__4500__auto___14968 = (0);
while(true){
if((i__4500__auto___14968 < len__4499__auto___14967)){
args__4502__auto__.push((arguments[i__4500__auto___14968]));

var G__14969 = (i__4500__auto___14968 + (1));
i__4500__auto___14968 = G__14969;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__14833__auto__,rest__14834__auto__){
if(!((s__14833__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__14833__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__14833__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__14834__auto__], 0)));
});

camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$applyTo = (function (seq14957){
var G__14958 = cljs.core.first(seq14957);
var seq14957__$1 = cljs.core.next(seq14957);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14958,seq14957__$1);
});


camel_snake_kebab.core.__GT_snake_case_keyword = (function camel_snake_kebab$core$__GT_snake_case_keyword(var_args){
var args__4502__auto__ = [];
var len__4499__auto___14970 = arguments.length;
var i__4500__auto___14971 = (0);
while(true){
if((i__4500__auto___14971 < len__4499__auto___14970)){
args__4502__auto__.push((arguments[i__4500__auto___14971]));

var G__14972 = (i__4500__auto___14971 + (1));
i__4500__auto___14971 = G__14972;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__14833__auto__,rest__14834__auto__){
if(!((s__14833__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__14833__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__14833__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__14834__auto__], 0)));
});

camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$applyTo = (function (seq14959){
var G__14960 = cljs.core.first(seq14959);
var seq14959__$1 = cljs.core.next(seq14959);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14960,seq14959__$1);
});

camel_snake_kebab.core.__GT_kebab_case = (function camel_snake_kebab$core$__GT_kebab_case(var_args){
var args__4502__auto__ = [];
var len__4499__auto___14981 = arguments.length;
var i__4500__auto___14982 = (0);
while(true){
if((i__4500__auto___14982 < len__4499__auto___14981)){
args__4502__auto__.push((arguments[i__4500__auto___14982]));

var G__14983 = (i__4500__auto___14982 + (1));
i__4500__auto___14982 = G__14983;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__14828__auto__,rest__14829__auto__){
var convert_case__14830__auto__ = (function (p1__14827__14831__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",p1__14827__14831__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__14829__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__14828__auto__,convert_case__14830__auto__);
});

camel_snake_kebab.core.__GT_kebab_case.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_kebab_case.cljs$lang$applyTo = (function (seq14973){
var G__14974 = cljs.core.first(seq14973);
var seq14973__$1 = cljs.core.next(seq14973);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14974,seq14973__$1);
});


camel_snake_kebab.core.__GT_kebab_case_string = (function camel_snake_kebab$core$__GT_kebab_case_string(var_args){
var args__4502__auto__ = [];
var len__4499__auto___14984 = arguments.length;
var i__4500__auto___14985 = (0);
while(true){
if((i__4500__auto___14985 < len__4499__auto___14984)){
args__4502__auto__.push((arguments[i__4500__auto___14985]));

var G__14986 = (i__4500__auto___14985 + (1));
i__4500__auto___14985 = G__14986;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__14833__auto__,rest__14834__auto__){
if(!((s__14833__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__14833__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__14833__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__14834__auto__], 0)));
});

camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$applyTo = (function (seq14975){
var G__14976 = cljs.core.first(seq14975);
var seq14975__$1 = cljs.core.next(seq14975);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14976,seq14975__$1);
});


camel_snake_kebab.core.__GT_kebab_case_symbol = (function camel_snake_kebab$core$__GT_kebab_case_symbol(var_args){
var args__4502__auto__ = [];
var len__4499__auto___14987 = arguments.length;
var i__4500__auto___14988 = (0);
while(true){
if((i__4500__auto___14988 < len__4499__auto___14987)){
args__4502__auto__.push((arguments[i__4500__auto___14988]));

var G__14989 = (i__4500__auto___14988 + (1));
i__4500__auto___14988 = G__14989;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__14833__auto__,rest__14834__auto__){
if(!((s__14833__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__14833__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__14833__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__14834__auto__], 0)));
});

camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$applyTo = (function (seq14977){
var G__14978 = cljs.core.first(seq14977);
var seq14977__$1 = cljs.core.next(seq14977);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14978,seq14977__$1);
});


camel_snake_kebab.core.__GT_kebab_case_keyword = (function camel_snake_kebab$core$__GT_kebab_case_keyword(var_args){
var args__4502__auto__ = [];
var len__4499__auto___14990 = arguments.length;
var i__4500__auto___14991 = (0);
while(true){
if((i__4500__auto___14991 < len__4499__auto___14990)){
args__4502__auto__.push((arguments[i__4500__auto___14991]));

var G__14992 = (i__4500__auto___14991 + (1));
i__4500__auto___14991 = G__14992;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__14833__auto__,rest__14834__auto__){
if(!((s__14833__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__14833__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__14833__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__14834__auto__], 0)));
});

camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$applyTo = (function (seq14979){
var G__14980 = cljs.core.first(seq14979);
var seq14979__$1 = cljs.core.next(seq14979);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14980,seq14979__$1);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case = (function camel_snake_kebab$core$__GT_HTTP_Header_Case(var_args){
var args__4502__auto__ = [];
var len__4499__auto___15001 = arguments.length;
var i__4500__auto___15002 = (0);
while(true){
if((i__4500__auto___15002 < len__4499__auto___15001)){
args__4502__auto__.push((arguments[i__4500__auto___15002]));

var G__15003 = (i__4500__auto___15002 + (1));
i__4500__auto___15002 = G__15003;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__14828__auto__,rest__14829__auto__){
var convert_case__14830__auto__ = (function (p1__14827__14831__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",p1__14827__14831__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__14829__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__14828__auto__,convert_case__14830__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$applyTo = (function (seq14993){
var G__14994 = cljs.core.first(seq14993);
var seq14993__$1 = cljs.core.next(seq14993);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14994,seq14993__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_String = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_String(var_args){
var args__4502__auto__ = [];
var len__4499__auto___15004 = arguments.length;
var i__4500__auto___15005 = (0);
while(true){
if((i__4500__auto___15005 < len__4499__auto___15004)){
args__4502__auto__.push((arguments[i__4500__auto___15005]));

var G__15006 = (i__4500__auto___15005 + (1));
i__4500__auto___15005 = G__15006;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__14833__auto__,rest__14834__auto__){
if(!((s__14833__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__14833__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__14833__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__14834__auto__], 0)));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$applyTo = (function (seq14995){
var G__14996 = cljs.core.first(seq14995);
var seq14995__$1 = cljs.core.next(seq14995);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14996,seq14995__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Symbol(var_args){
var args__4502__auto__ = [];
var len__4499__auto___15007 = arguments.length;
var i__4500__auto___15008 = (0);
while(true){
if((i__4500__auto___15008 < len__4499__auto___15007)){
args__4502__auto__.push((arguments[i__4500__auto___15008]));

var G__15009 = (i__4500__auto___15008 + (1));
i__4500__auto___15008 = G__15009;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__14833__auto__,rest__14834__auto__){
if(!((s__14833__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__14833__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__14833__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__14834__auto__], 0)));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$applyTo = (function (seq14997){
var G__14998 = cljs.core.first(seq14997);
var seq14997__$1 = cljs.core.next(seq14997);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14998,seq14997__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Keyword(var_args){
var args__4502__auto__ = [];
var len__4499__auto___15010 = arguments.length;
var i__4500__auto___15011 = (0);
while(true){
if((i__4500__auto___15011 < len__4499__auto___15010)){
args__4502__auto__.push((arguments[i__4500__auto___15011]));

var G__15012 = (i__4500__auto___15011 + (1));
i__4500__auto___15011 = G__15012;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__14833__auto__,rest__14834__auto__){
if(!((s__14833__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__14833__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__14833__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__14834__auto__], 0)));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$applyTo = (function (seq14999){
var G__15000 = cljs.core.first(seq14999);
var seq14999__$1 = cljs.core.next(seq14999);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15000,seq14999__$1);
});

