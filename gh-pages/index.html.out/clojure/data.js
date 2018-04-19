// Compiled by ClojureScript 1.10.238 {:static-fns true, :optimize-constants true}
goog.provide('clojure.data');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.set');
/**
 * Internal helper for diff.
 */
clojure.data.atom_diff = (function clojure$data$atom_diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,null], null);
}
});
/**
 * Convert an associative-by-numeric-index collection into
 * an equivalent vector, with nil for any missing keys
 */
clojure.data.vectorize = (function clojure$data$vectorize(m){
if(cljs.core.seq(m)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__9930){
var vec__9931 = p__9930;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9931,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9931,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,k,v);
}),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.keys(m)),null)),m);
} else {
return null;
}
});
/**
 * Diff associative things a and b, comparing only the key k.
 */
clojure.data.diff_associative_key = (function clojure$data$diff_associative_key(a,b,k){
var va = cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,k);
var vb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,k);
var vec__9934 = (clojure.data.diff.cljs$core$IFn$_invoke$arity$2 ? clojure.data.diff.cljs$core$IFn$_invoke$arity$2(va,vb) : clojure.data.diff.call(null,va,vb));
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9934,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9934,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9934,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = ((in_a) && (in_b) && (((!((ab == null))) || ((((va == null)) && ((vb == null)))))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((in_a) && (((!((a_STAR_ == null))) || (!(same))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),((((in_b) && (((!((b_STAR_ == null))) || (!(same))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__9938 = arguments.length;
switch (G__9938) {
case 2:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(a,b,clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(a),cljs.core.keys(b)));
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3 = (function (a,b,ks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (diff1,diff2){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,diff1,diff2));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(clojure.data.diff_associative_key,a,b),ks));
});

clojure.data.diff_associative.cljs$lang$maxFixedArity = 3;

clojure.data.diff_sequential = (function clojure$data$diff_sequential(a,b){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.data.vectorize,clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(((cljs.core.vector_QMARK_(a))?a:cljs.core.vec(a)),((cljs.core.vector_QMARK_(b))?b:cljs.core.vec(b)),cljs.core.range.cljs$core$IFn$_invoke$arity$1((function (){var x__4006__auto__ = cljs.core.count(a);
var y__4007__auto__ = cljs.core.count(b);
return ((x__4006__auto__ > y__4007__auto__) ? x__4006__auto__ : y__4007__auto__);
})()))));
});
clojure.data.diff_set = (function clojure$data$diff_set(a,b){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(a,b)),cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(b,a)),cljs.core.not_empty(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(a,b))], null);
});

/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.EqualityPartition = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.equality_partition = (function clojure$data$equality_partition(x){
if(((!((x == null))) && (!((x.clojure$data$EqualityPartition$equality_partition$arity$1 == null))))){
return x.clojure$data$EqualityPartition$equality_partition$arity$1(x);
} else {
var x__4211__auto__ = (((x == null))?null:x);
var m__4212__auto__ = (clojure.data.equality_partition[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4212__auto__.call(null,x));
} else {
var m__4212__auto____$1 = (clojure.data.equality_partition["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(x) : m__4212__auto____$1.call(null,x));
} else {
throw cljs.core.missing_protocol("EqualityPartition.equality-partition",x);
}
}
}
});


/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.Diff = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.diff_similar = (function clojure$data$diff_similar(a,b){
if(((!((a == null))) && (!((a.clojure$data$Diff$diff_similar$arity$2 == null))))){
return a.clojure$data$Diff$diff_similar$arity$2(a,b);
} else {
var x__4211__auto__ = (((a == null))?null:a);
var m__4212__auto__ = (clojure.data.diff_similar[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4212__auto__.call(null,a,b));
} else {
var m__4212__auto____$1 = (clojure.data.diff_similar["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2(a,b) : m__4212__auto____$1.call(null,a,b));
} else {
throw cljs.core.missing_protocol("Diff.diff-similar",a);
}
}
}
});

goog.object.set(clojure.data.EqualityPartition,"null",true);

var G__9940_9964 = clojure.data.equality_partition;
var G__9941_9965 = "null";
var G__9942_9966 = ((function (G__9940_9964,G__9941_9965){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__9940_9964,G__9941_9965))
;
goog.object.set(G__9940_9964,G__9941_9965,G__9942_9966);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__9943_9967 = clojure.data.equality_partition;
var G__9944_9968 = "string";
var G__9945_9969 = ((function (G__9943_9967,G__9944_9968){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__9943_9967,G__9944_9968))
;
goog.object.set(G__9943_9967,G__9944_9968,G__9945_9969);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__9946_9970 = clojure.data.equality_partition;
var G__9947_9971 = "number";
var G__9948_9972 = ((function (G__9946_9970,G__9947_9971){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__9946_9970,G__9947_9971))
;
goog.object.set(G__9946_9970,G__9947_9971,G__9948_9972);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__9949_9973 = clojure.data.equality_partition;
var G__9950_9974 = "array";
var G__9951_9975 = ((function (G__9949_9973,G__9950_9974){
return (function (x){
return cljs.core.cst$kw$sequential;
});})(G__9949_9973,G__9950_9974))
;
goog.object.set(G__9949_9973,G__9950_9974,G__9951_9975);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__9952_9976 = clojure.data.equality_partition;
var G__9953_9977 = "function";
var G__9954_9978 = ((function (G__9952_9976,G__9953_9977){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__9952_9976,G__9953_9977))
;
goog.object.set(G__9952_9976,G__9953_9977,G__9954_9978);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__9955_9979 = clojure.data.equality_partition;
var G__9956_9980 = "boolean";
var G__9957_9981 = ((function (G__9955_9979,G__9956_9980){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__9955_9979,G__9956_9980))
;
goog.object.set(G__9955_9979,G__9956_9980,G__9957_9981);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__9958_9982 = clojure.data.equality_partition;
var G__9959_9983 = "_";
var G__9960_9984 = ((function (G__9958_9982,G__9959_9983){
return (function (x){
if(((!((x == null)))?(((((x.cljs$lang$protocol_mask$partition0$ & (1024))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IMap$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x))){
return cljs.core.cst$kw$map;
} else {
if(((!((x == null)))?(((((x.cljs$lang$protocol_mask$partition0$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISet$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x))){
return cljs.core.cst$kw$set;
} else {
if(((!((x == null)))?(((((x.cljs$lang$protocol_mask$partition0$ & (16777216))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISequential$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x))){
return cljs.core.cst$kw$sequential;
} else {
return cljs.core.cst$kw$atom;

}
}
}
});})(G__9958_9982,G__9959_9983))
;
goog.object.set(G__9958_9982,G__9959_9983,G__9960_9984);
goog.object.set(clojure.data.Diff,"null",true);

var G__9985_10009 = clojure.data.diff_similar;
var G__9986_10010 = "null";
var G__9987_10011 = ((function (G__9985_10009,G__9986_10010){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__9985_10009,G__9986_10010))
;
goog.object.set(G__9985_10009,G__9986_10010,G__9987_10011);

goog.object.set(clojure.data.Diff,"string",true);

var G__9988_10012 = clojure.data.diff_similar;
var G__9989_10013 = "string";
var G__9990_10014 = ((function (G__9988_10012,G__9989_10013){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__9988_10012,G__9989_10013))
;
goog.object.set(G__9988_10012,G__9989_10013,G__9990_10014);

goog.object.set(clojure.data.Diff,"number",true);

var G__9991_10015 = clojure.data.diff_similar;
var G__9992_10016 = "number";
var G__9993_10017 = ((function (G__9991_10015,G__9992_10016){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__9991_10015,G__9992_10016))
;
goog.object.set(G__9991_10015,G__9992_10016,G__9993_10017);

goog.object.set(clojure.data.Diff,"array",true);

var G__9994_10018 = clojure.data.diff_similar;
var G__9995_10019 = "array";
var G__9996_10020 = ((function (G__9994_10018,G__9995_10019){
return (function (a,b){
return clojure.data.diff_sequential(a,b);
});})(G__9994_10018,G__9995_10019))
;
goog.object.set(G__9994_10018,G__9995_10019,G__9996_10020);

goog.object.set(clojure.data.Diff,"function",true);

var G__9997_10021 = clojure.data.diff_similar;
var G__9998_10022 = "function";
var G__9999_10023 = ((function (G__9997_10021,G__9998_10022){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__9997_10021,G__9998_10022))
;
goog.object.set(G__9997_10021,G__9998_10022,G__9999_10023);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__10000_10024 = clojure.data.diff_similar;
var G__10001_10025 = "boolean";
var G__10002_10026 = ((function (G__10000_10024,G__10001_10025){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__10000_10024,G__10001_10025))
;
goog.object.set(G__10000_10024,G__10001_10025,G__10002_10026);

goog.object.set(clojure.data.Diff,"_",true);

var G__10003_10027 = clojure.data.diff_similar;
var G__10004_10028 = "_";
var G__10005_10029 = ((function (G__10003_10027,G__10004_10028){
return (function (a,b){
var fexpr__10007 = (function (){var G__10008 = clojure.data.equality_partition(a);
var G__10008__$1 = (((G__10008 instanceof cljs.core.Keyword))?G__10008.fqn:null);
switch (G__10008__$1) {
case "atom":
return clojure.data.atom_diff;

break;
case "set":
return clojure.data.diff_set;

break;
case "sequential":
return clojure.data.diff_sequential;

break;
case "map":
return clojure.data.diff_associative;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10008__$1)].join('')));

}
})();
return (fexpr__10007.cljs$core$IFn$_invoke$arity$2 ? fexpr__10007.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__10007.call(null,a,b));
});})(G__10003_10027,G__10004_10028))
;
goog.object.set(G__10003_10027,G__10004_10028,G__10005_10029);
/**
 * Recursively compares a and b, returning a tuple of
 *   [things-only-in-a things-only-in-b things-in-both].
 *   Comparison rules:
 * 
 *   * For equal a and b, return [nil nil a].
 *   * Maps are subdiffed where keys match and values differ.
 *   * Sets are never subdiffed.
 *   * All sequential things are treated as associative collections
 *  by their indexes, with results returned as vectors.
 *   * Everything else (including strings!) is treated as
 *  an atom and compared for equality.
 */
clojure.data.diff = (function clojure$data$diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.data.equality_partition(a),clojure.data.equality_partition(b))){
return clojure.data.diff_similar(a,b);
} else {
return clojure.data.atom_diff(a,b);
}
}
});
