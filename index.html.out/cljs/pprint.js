// Compiled by ClojureScript 1.10.238 {:static-fns true, :optimize-constants true}
goog.provide('cljs.pprint');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
cljs.pprint.print = (function cljs$pprint$print(var_args){
var args__4502__auto__ = [];
var len__4499__auto___8224 = arguments.length;
var i__4500__auto___8225 = (0);
while(true){
if((i__4500__auto___8225 < len__4499__auto___8224)){
args__4502__auto__.push((arguments[i__4500__auto___8225]));

var G__8226 = (i__4500__auto___8225 + (1));
i__4500__auto___8225 = G__8226;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic = (function (more){
return cljs.core._write(cljs.core._STAR_out_STAR_,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print_str,more));
});

cljs.pprint.print.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.pprint.print.cljs$lang$applyTo = (function (seq8223){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq8223));
});

cljs.pprint.println = (function cljs$pprint$println(var_args){
var args__4502__auto__ = [];
var len__4499__auto___8228 = arguments.length;
var i__4500__auto___8229 = (0);
while(true){
if((i__4500__auto___8229 < len__4499__auto___8228)){
args__4502__auto__.push((arguments[i__4500__auto___8229]));

var G__8230 = (i__4500__auto___8229 + (1));
i__4500__auto___8229 = G__8230;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.pprint.println.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs.pprint.println.cljs$core$IFn$_invoke$arity$variadic = (function (more){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.pprint.print,more);

return cljs.core._write(cljs.core._STAR_out_STAR_,"\n");
});

cljs.pprint.println.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.pprint.println.cljs$lang$applyTo = (function (seq8227){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq8227));
});

cljs.pprint.print_char = (function cljs$pprint$print_char(c){
return cljs.core._write(cljs.core._STAR_out_STAR_,(function (){var pred__8231 = cljs.core._EQ_;
var expr__8232 = c;
if(cljs.core.truth_((function (){var G__8234 = "\b";
var G__8235 = expr__8232;
return (pred__8231.cljs$core$IFn$_invoke$arity$2 ? pred__8231.cljs$core$IFn$_invoke$arity$2(G__8234,G__8235) : pred__8231.call(null,G__8234,G__8235));
})())){
return "\\backspace";
} else {
if(cljs.core.truth_((function (){var G__8236 = "\t";
var G__8237 = expr__8232;
return (pred__8231.cljs$core$IFn$_invoke$arity$2 ? pred__8231.cljs$core$IFn$_invoke$arity$2(G__8236,G__8237) : pred__8231.call(null,G__8236,G__8237));
})())){
return "\\tab";
} else {
if(cljs.core.truth_((function (){var G__8238 = "\n";
var G__8239 = expr__8232;
return (pred__8231.cljs$core$IFn$_invoke$arity$2 ? pred__8231.cljs$core$IFn$_invoke$arity$2(G__8238,G__8239) : pred__8231.call(null,G__8238,G__8239));
})())){
return "\\newline";
} else {
if(cljs.core.truth_((function (){var G__8240 = "\f";
var G__8241 = expr__8232;
return (pred__8231.cljs$core$IFn$_invoke$arity$2 ? pred__8231.cljs$core$IFn$_invoke$arity$2(G__8240,G__8241) : pred__8231.call(null,G__8240,G__8241));
})())){
return "\\formfeed";
} else {
if(cljs.core.truth_((function (){var G__8242 = "\r";
var G__8243 = expr__8232;
return (pred__8231.cljs$core$IFn$_invoke$arity$2 ? pred__8231.cljs$core$IFn$_invoke$arity$2(G__8242,G__8243) : pred__8231.call(null,G__8242,G__8243));
})())){
return "\\return";
} else {
if(cljs.core.truth_((function (){var G__8244 = "\"";
var G__8245 = expr__8232;
return (pred__8231.cljs$core$IFn$_invoke$arity$2 ? pred__8231.cljs$core$IFn$_invoke$arity$2(G__8244,G__8245) : pred__8231.call(null,G__8244,G__8245));
})())){
return "\\\"";
} else {
if(cljs.core.truth_((function (){var G__8246 = "\\";
var G__8247 = expr__8232;
return (pred__8231.cljs$core$IFn$_invoke$arity$2 ? pred__8231.cljs$core$IFn$_invoke$arity$2(G__8246,G__8247) : pred__8231.call(null,G__8246,G__8247));
})())){
return "\\\\";
} else {
return ["\\",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)].join('');
}
}
}
}
}
}
}
})());
});
cljs.pprint.pr = (function cljs$pprint$pr(var_args){
var args__4502__auto__ = [];
var len__4499__auto___8249 = arguments.length;
var i__4500__auto___8250 = (0);
while(true){
if((i__4500__auto___8250 < len__4499__auto___8249)){
args__4502__auto__.push((arguments[i__4500__auto___8250]));

var G__8251 = (i__4500__auto___8250 + (1));
i__4500__auto___8250 = G__8251;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.pprint.pr.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs.pprint.pr.cljs$core$IFn$_invoke$arity$variadic = (function (more){
return cljs.core._write(cljs.core._STAR_out_STAR_,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,more));
});

cljs.pprint.pr.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.pprint.pr.cljs$lang$applyTo = (function (seq8248){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq8248));
});

cljs.pprint.prn = (function cljs$pprint$prn(var_args){
var args__4502__auto__ = [];
var len__4499__auto___8253 = arguments.length;
var i__4500__auto___8254 = (0);
while(true){
if((i__4500__auto___8254 < len__4499__auto___8253)){
args__4502__auto__.push((arguments[i__4500__auto___8254]));

var G__8255 = (i__4500__auto___8254 + (1));
i__4500__auto___8254 = G__8255;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.pprint.prn.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs.pprint.prn.cljs$core$IFn$_invoke$arity$variadic = (function (more){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.pprint.pr,more);

return cljs.core._write(cljs.core._STAR_out_STAR_,"\n");
});

cljs.pprint.prn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.pprint.prn.cljs$lang$applyTo = (function (seq8252){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq8252));
});

/**
 * Returns true if n is an float.
 */
cljs.pprint.float_QMARK_ = (function cljs$pprint$float_QMARK_(n){
return ((typeof n === 'number') && (!(isNaN(n))) && (!((n === Infinity))) && (!((parseFloat(n) === parseInt(n,(10))))));
});
/**
 * Convert char to int
 */
cljs.pprint.char_code = (function cljs$pprint$char_code(c){
if(typeof c === 'number'){
return c;
} else {
if(((typeof c === 'string') && ((c.length === (1))))){
return c.charCodeAt((0));
} else {
throw (new Error("Argument to char must be a character or number"));

}
}
});
cljs.pprint.map_passing_context = (function cljs$pprint$map_passing_context(func,initial_context,lis){
var context = initial_context;
var lis__$1 = lis;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_(lis__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,context], null);
} else {
var this$ = cljs.core.first(lis__$1);
var remainder = cljs.core.next(lis__$1);
var vec__8256 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,context], null));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8256,(0),null);
var new_context = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8256,(1),null);
var G__8259 = new_context;
var G__8260 = remainder;
var G__8261 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,result);
context = G__8259;
lis__$1 = G__8260;
acc = G__8261;
continue;
}
break;
}
});
cljs.pprint.consume = (function cljs$pprint$consume(func,initial_context){
var context = initial_context;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
var vec__8262 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [context], null));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8262,(0),null);
var new_context = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8262,(1),null);
if(cljs.core.not(result)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,new_context], null);
} else {
var G__8265 = new_context;
var G__8266 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,result);
context = G__8265;
acc = G__8266;
continue;
}
break;
}
});
cljs.pprint.consume_while = (function cljs$pprint$consume_while(func,initial_context){
var context = initial_context;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
var vec__8267 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [context], null));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8267,(0),null);
var continue$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8267,(1),null);
var new_context = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8267,(2),null);
if(cljs.core.not(continue$)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,context], null);
} else {
var G__8270 = new_context;
var G__8271 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,result);
context = G__8270;
acc = G__8271;
continue;
}
break;
}
});
cljs.pprint.unzip_map = (function cljs$pprint$unzip_map(m){

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4292__auto__ = (function cljs$pprint$unzip_map_$_iter__8272(s__8273){
return (new cljs.core.LazySeq(null,(function (){
var s__8273__$1 = s__8273;
while(true){
var temp__5535__auto__ = cljs.core.seq(s__8273__$1);
if(temp__5535__auto__){
var s__8273__$2 = temp__5535__auto__;
if(cljs.core.chunked_seq_QMARK_(s__8273__$2)){
var c__4290__auto__ = cljs.core.chunk_first(s__8273__$2);
var size__4291__auto__ = cljs.core.count(c__4290__auto__);
var b__8275 = cljs.core.chunk_buffer(size__4291__auto__);
if((function (){var i__8274 = (0);
while(true){
if((i__8274 < size__4291__auto__)){
var vec__8276 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4290__auto__,i__8274);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8276,(0),null);
var vec__8279 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8276,(1),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8279,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8279,(1),null);
cljs.core.chunk_append(b__8275,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v1], null));

var G__8304 = (i__8274 + (1));
i__8274 = G__8304;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__8275),cljs$pprint$unzip_map_$_iter__8272(cljs.core.chunk_rest(s__8273__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__8275),null);
}
} else {
var vec__8282 = cljs.core.first(s__8273__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8282,(0),null);
var vec__8285 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8282,(1),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8285,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8285,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v1], null),cljs$pprint$unzip_map_$_iter__8272(cljs.core.rest(s__8273__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__(m);
})()),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4292__auto__ = (function cljs$pprint$unzip_map_$_iter__8288(s__8289){
return (new cljs.core.LazySeq(null,(function (){
var s__8289__$1 = s__8289;
while(true){
var temp__5535__auto__ = cljs.core.seq(s__8289__$1);
if(temp__5535__auto__){
var s__8289__$2 = temp__5535__auto__;
if(cljs.core.chunked_seq_QMARK_(s__8289__$2)){
var c__4290__auto__ = cljs.core.chunk_first(s__8289__$2);
var size__4291__auto__ = cljs.core.count(c__4290__auto__);
var b__8291 = cljs.core.chunk_buffer(size__4291__auto__);
if((function (){var i__8290 = (0);
while(true){
if((i__8290 < size__4291__auto__)){
var vec__8292 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4290__auto__,i__8290);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8292,(0),null);
var vec__8295 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8292,(1),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8295,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8295,(1),null);
cljs.core.chunk_append(b__8291,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v2], null));

var G__8305 = (i__8290 + (1));
i__8290 = G__8305;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__8291),cljs$pprint$unzip_map_$_iter__8288(cljs.core.chunk_rest(s__8289__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__8291),null);
}
} else {
var vec__8298 = cljs.core.first(s__8289__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8298,(0),null);
var vec__8301 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8298,(1),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8301,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8301,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v2], null),cljs$pprint$unzip_map_$_iter__8288(cljs.core.rest(s__8289__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__(m);
})())], null);
});
cljs.pprint.tuple_map = (function cljs$pprint$tuple_map(m,v1){

return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4292__auto__ = (function cljs$pprint$tuple_map_$_iter__8306(s__8307){
return (new cljs.core.LazySeq(null,(function (){
var s__8307__$1 = s__8307;
while(true){
var temp__5535__auto__ = cljs.core.seq(s__8307__$1);
if(temp__5535__auto__){
var s__8307__$2 = temp__5535__auto__;
if(cljs.core.chunked_seq_QMARK_(s__8307__$2)){
var c__4290__auto__ = cljs.core.chunk_first(s__8307__$2);
var size__4291__auto__ = cljs.core.count(c__4290__auto__);
var b__8309 = cljs.core.chunk_buffer(size__4291__auto__);
if((function (){var i__8308 = (0);
while(true){
if((i__8308 < size__4291__auto__)){
var vec__8310 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4290__auto__,i__8308);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8310,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8310,(1),null);
cljs.core.chunk_append(b__8309,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,v1], null)], null));

var G__8316 = (i__8308 + (1));
i__8308 = G__8316;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__8309),cljs$pprint$tuple_map_$_iter__8306(cljs.core.chunk_rest(s__8307__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__8309),null);
}
} else {
var vec__8313 = cljs.core.first(s__8307__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8313,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8313,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,v1], null)], null),cljs$pprint$tuple_map_$_iter__8306(cljs.core.rest(s__8307__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__(m);
})());
});
cljs.pprint.rtrim = (function cljs$pprint$rtrim(s,c){

var len = cljs.core.count(s);
if((((len > (0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,(cljs.core.count(s) - (1))),c)))){
var n = (len - (1));
while(true){
if((n < (0))){
return "";
} else {
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,n),c))){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),(n + (1)));
} else {
var G__8317 = (n - (1));
n = G__8317;
continue;

}
}
break;
}
} else {
return s;
}
});
cljs.pprint.ltrim = (function cljs$pprint$ltrim(s,c){

var len = cljs.core.count(s);
if((((len > (0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,(0)),c)))){
var n = (0);
while(true){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,len)) || (!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,n),c))))){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,n);
} else {
var G__8318 = (n + (1));
n = G__8318;
continue;
}
break;
}
} else {
return s;
}
});
cljs.pprint.prefix_count = (function cljs$pprint$prefix_count(aseq,val){

var test = ((cljs.core.coll_QMARK_(val))?cljs.core.set(val):cljs.core.PersistentHashSet.createAsIfByAssoc([val]));
var pos = (0);
while(true){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pos,cljs.core.count(aseq))) || (cljs.core.not((function (){var G__8320 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(aseq,pos);
return (test.cljs$core$IFn$_invoke$arity$1 ? test.cljs$core$IFn$_invoke$arity$1(G__8320) : test.call(null,G__8320));
})())))){
return pos;
} else {
var G__8321 = (pos + (1));
pos = G__8321;
continue;
}
break;
}
});

/**
 * @interface
 */
cljs.pprint.IPrettyFlush = function(){};

cljs.pprint._ppflush = (function cljs$pprint$_ppflush(pp){
if(((!((pp == null))) && (!((pp.cljs$pprint$IPrettyFlush$_ppflush$arity$1 == null))))){
return pp.cljs$pprint$IPrettyFlush$_ppflush$arity$1(pp);
} else {
var x__4211__auto__ = (((pp == null))?null:pp);
var m__4212__auto__ = (cljs.pprint._ppflush[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(pp) : m__4212__auto__.call(null,pp));
} else {
var m__4212__auto____$1 = (cljs.pprint._ppflush["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(pp) : m__4212__auto____$1.call(null,pp));
} else {
throw cljs.core.missing_protocol("IPrettyFlush.-ppflush",pp);
}
}
}
});

cljs.pprint._STAR_default_page_width_STAR_ = (72);
cljs.pprint.get_field = (function cljs$pprint$get_field(this$,sym){
var G__8322 = cljs.core.deref(cljs.core.deref(this$));
return (sym.cljs$core$IFn$_invoke$arity$1 ? sym.cljs$core$IFn$_invoke$arity$1(G__8322) : sym.call(null,G__8322));
});
cljs.pprint.set_field = (function cljs$pprint$set_field(this$,sym,new_val){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,sym,new_val);
});
cljs.pprint.get_column = (function cljs$pprint$get_column(this$){
return cljs.pprint.get_field(this$,cljs.core.cst$kw$cur);
});
cljs.pprint.get_line = (function cljs$pprint$get_line(this$){
return cljs.pprint.get_field(this$,cljs.core.cst$kw$line);
});
cljs.pprint.get_max_column = (function cljs$pprint$get_max_column(this$){
return cljs.pprint.get_field(this$,cljs.core.cst$kw$max);
});
cljs.pprint.set_max_column = (function cljs$pprint$set_max_column(this$,new_max){
cljs.pprint.set_field(this$,cljs.core.cst$kw$max,new_max);

return null;
});
cljs.pprint.get_writer = (function cljs$pprint$get_writer(this$){
return cljs.pprint.get_field(this$,cljs.core.cst$kw$base);
});
cljs.pprint.c_write_char = (function cljs$pprint$c_write_char(this$,c){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c,"\n")){
cljs.pprint.set_field(this$,cljs.core.cst$kw$cur,(0));

cljs.pprint.set_field(this$,cljs.core.cst$kw$line,(cljs.pprint.get_field(this$,cljs.core.cst$kw$line) + (1)));
} else {
cljs.pprint.set_field(this$,cljs.core.cst$kw$cur,(cljs.pprint.get_field(this$,cljs.core.cst$kw$cur) + (1)));
}

return cljs.core._write(cljs.pprint.get_field(this$,cljs.core.cst$kw$base),c);
});
cljs.pprint.column_writer = (function cljs$pprint$column_writer(var_args){
var G__8325 = arguments.length;
switch (G__8325) {
case 1:
return cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$1 = (function (writer){
return cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2(writer,cljs.pprint._STAR_default_page_width_STAR_);
});

cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2 = (function (writer,max_columns){
var fields = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$max,max_columns,cljs.core.cst$kw$cur,(0),cljs.core.cst$kw$line,(0),cljs.core.cst$kw$base,writer], null));
if(typeof cljs.pprint.t_cljs$pprint8326 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint8326 = (function (writer,max_columns,fields,meta8327){
this.writer = writer;
this.max_columns = max_columns;
this.fields = fields;
this.meta8327 = meta8327;
this.cljs$lang$protocol_mask$partition0$ = 1074167808;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint8326.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (fields){
return (function (_8328,meta8327__$1){
var self__ = this;
var _8328__$1 = this;
return (new cljs.pprint.t_cljs$pprint8326(self__.writer,self__.max_columns,self__.fields,meta8327__$1));
});})(fields))
;

cljs.pprint.t_cljs$pprint8326.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (fields){
return (function (_8328){
var self__ = this;
var _8328__$1 = this;
return self__.meta8327;
});})(fields))
;

cljs.pprint.t_cljs$pprint8326.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (fields){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.fields;
});})(fields))
;

cljs.pprint.t_cljs$pprint8326.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (fields){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
});})(fields))
;

cljs.pprint.t_cljs$pprint8326.prototype.cljs$core$IWriter$_write$arity$2 = ((function (fields){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__8329 = cljs.core._EQ_;
var expr__8330 = cljs.core.type(x);
if(cljs.core.truth_((pred__8329.cljs$core$IFn$_invoke$arity$2 ? pred__8329.cljs$core$IFn$_invoke$arity$2(String,expr__8330) : pred__8329.call(null,String,expr__8330)))){
var s = x;
var nl = s.lastIndexOf("\n");
if((nl < (0))){
cljs.pprint.set_field(this$__$1,cljs.core.cst$kw$cur,(cljs.pprint.get_field(this$__$1,cljs.core.cst$kw$cur) + cljs.core.count(s)));
} else {
cljs.pprint.set_field(this$__$1,cljs.core.cst$kw$cur,((cljs.core.count(s) - nl) - (1)));

cljs.pprint.set_field(this$__$1,cljs.core.cst$kw$line,(cljs.pprint.get_field(this$__$1,cljs.core.cst$kw$line) + cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (s,nl,pred__8329,expr__8330,this$__$1,fields){
return (function (p1__8323_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__8323_SHARP_,"\n");
});})(s,nl,pred__8329,expr__8330,this$__$1,fields))
,s))));
}

return cljs.core._write(cljs.pprint.get_field(this$__$1,cljs.core.cst$kw$base),s);
} else {
if(cljs.core.truth_((pred__8329.cljs$core$IFn$_invoke$arity$2 ? pred__8329.cljs$core$IFn$_invoke$arity$2(Number,expr__8330) : pred__8329.call(null,Number,expr__8330)))){
return cljs.pprint.c_write_char(this$__$1,x);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__8330)].join('')));
}
}
});})(fields))
;

cljs.pprint.t_cljs$pprint8326.getBasis = ((function (fields){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$writer,cljs.core.cst$sym$max_DASH_columns,cljs.core.cst$sym$fields,cljs.core.cst$sym$meta8327], null);
});})(fields))
;

cljs.pprint.t_cljs$pprint8326.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint8326.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint8326";

cljs.pprint.t_cljs$pprint8326.cljs$lang$ctorPrWriter = ((function (fields){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.pprint/t_cljs$pprint8326");
});})(fields))
;

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint8326.
 */
cljs.pprint.__GT_t_cljs$pprint8326 = ((function (fields){
return (function cljs$pprint$__GT_t_cljs$pprint8326(writer__$1,max_columns__$1,fields__$1,meta8327){
return (new cljs.pprint.t_cljs$pprint8326(writer__$1,max_columns__$1,fields__$1,meta8327));
});})(fields))
;

}

return (new cljs.pprint.t_cljs$pprint8326(writer,max_columns,fields,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.pprint.column_writer.cljs$lang$maxFixedArity = 2;


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.logical_block = (function (parent,section,start_col,indent,done_nl,intra_block_nl,prefix,per_line_prefix,suffix,logical_block_callback,__meta,__extmap,__hash){
this.parent = parent;
this.section = section;
this.start_col = start_col;
this.indent = indent;
this.done_nl = done_nl;
this.intra_block_nl = intra_block_nl;
this.prefix = prefix;
this.per_line_prefix = per_line_prefix;
this.suffix = suffix;
this.logical_block_callback = logical_block_callback;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.logical_block.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4172__auto__,k__4173__auto__){
var self__ = this;
var this__4172__auto____$1 = this;
return this__4172__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4173__auto__,null);
});

cljs.pprint.logical_block.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4174__auto__,k8334,else__4175__auto__){
var self__ = this;
var this__4174__auto____$1 = this;
var G__8338 = k8334;
var G__8338__$1 = (((G__8338 instanceof cljs.core.Keyword))?G__8338.fqn:null);
switch (G__8338__$1) {
case "parent":
return self__.parent;

break;
case "section":
return self__.section;

break;
case "start-col":
return self__.start_col;

break;
case "indent":
return self__.indent;

break;
case "done-nl":
return self__.done_nl;

break;
case "intra-block-nl":
return self__.intra_block_nl;

break;
case "prefix":
return self__.prefix;

break;
case "per-line-prefix":
return self__.per_line_prefix;

break;
case "suffix":
return self__.suffix;

break;
case "logical-block-callback":
return self__.logical_block_callback;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k8334,else__4175__auto__);

}
});

cljs.pprint.logical_block.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4186__auto__,writer__4187__auto__,opts__4188__auto__){
var self__ = this;
var this__4186__auto____$1 = this;
var pr_pair__4189__auto__ = ((function (this__4186__auto____$1){
return (function (keyval__4190__auto__){
return cljs.core.pr_sequential_writer(writer__4187__auto__,cljs.core.pr_writer,""," ","",opts__4188__auto__,keyval__4190__auto__);
});})(this__4186__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4187__auto__,pr_pair__4189__auto__,"#cljs.pprint.logical-block{",", ","}",opts__4188__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$parent,self__.parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$section,self__.section],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_col,self__.start_col],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$indent,self__.indent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$done_DASH_nl,self__.done_nl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$intra_DASH_block_DASH_nl,self__.intra_block_nl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$prefix,self__.prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$per_DASH_line_DASH_prefix,self__.per_line_prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$suffix,self__.suffix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block_DASH_callback,self__.logical_block_callback],null))], null),self__.__extmap));
});

cljs.pprint.logical_block.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__8333){
var self__ = this;
var G__8333__$1 = this;
return (new cljs.core.RecordIter((0),G__8333__$1,10,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$parent,cljs.core.cst$kw$section,cljs.core.cst$kw$start_DASH_col,cljs.core.cst$kw$indent,cljs.core.cst$kw$done_DASH_nl,cljs.core.cst$kw$intra_DASH_block_DASH_nl,cljs.core.cst$kw$prefix,cljs.core.cst$kw$per_DASH_line_DASH_prefix,cljs.core.cst$kw$suffix,cljs.core.cst$kw$logical_DASH_block_DASH_callback], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs.pprint.logical_block.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4170__auto__){
var self__ = this;
var this__4170__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.logical_block.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4167__auto__){
var self__ = this;
var this__4167__auto____$1 = this;
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.logical_block.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4176__auto__){
var self__ = this;
var this__4176__auto____$1 = this;
return (10 + cljs.core.count(self__.__extmap));
});

cljs.pprint.logical_block.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4168__auto__){
var self__ = this;
var this__4168__auto____$1 = this;
var h__4030__auto__ = self__.__hash;
if(!((h__4030__auto__ == null))){
return h__4030__auto__;
} else {
var h__4030__auto____$1 = (function (){var fexpr__8339 = ((function (h__4030__auto__,this__4168__auto____$1){
return (function (coll__4169__auto__){
return (1977012399 ^ cljs.core.hash_unordered_coll(coll__4169__auto__));
});})(h__4030__auto__,this__4168__auto____$1))
;
return fexpr__8339(this__4168__auto____$1);
})();
self__.__hash = h__4030__auto____$1;

return h__4030__auto____$1;
}
});

cljs.pprint.logical_block.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this8335,other8336){
var self__ = this;
var this8335__$1 = this;
return ((!((other8336 == null))) && ((this8335__$1.constructor === other8336.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8335__$1.parent,other8336.parent)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8335__$1.section,other8336.section)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8335__$1.start_col,other8336.start_col)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8335__$1.indent,other8336.indent)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8335__$1.done_nl,other8336.done_nl)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8335__$1.intra_block_nl,other8336.intra_block_nl)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8335__$1.prefix,other8336.prefix)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8335__$1.per_line_prefix,other8336.per_line_prefix)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8335__$1.suffix,other8336.suffix)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8335__$1.logical_block_callback,other8336.logical_block_callback)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8335__$1.__extmap,other8336.__extmap)));
});

cljs.pprint.logical_block.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4181__auto__,k__4182__auto__){
var self__ = this;
var this__4181__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [cljs.core.cst$kw$suffix,null,cljs.core.cst$kw$indent,null,cljs.core.cst$kw$parent,null,cljs.core.cst$kw$section,null,cljs.core.cst$kw$done_DASH_nl,null,cljs.core.cst$kw$start_DASH_col,null,cljs.core.cst$kw$prefix,null,cljs.core.cst$kw$per_DASH_line_DASH_prefix,null,cljs.core.cst$kw$logical_DASH_block_DASH_callback,null,cljs.core.cst$kw$intra_DASH_block_DASH_nl,null], null), null),k__4182__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4181__auto____$1),self__.__meta),k__4182__auto__);
} else {
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4182__auto__)),null));
}
});

cljs.pprint.logical_block.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4179__auto__,k__4180__auto__,G__8333){
var self__ = this;
var this__4179__auto____$1 = this;
var pred__8340 = cljs.core.keyword_identical_QMARK_;
var expr__8341 = k__4180__auto__;
if(cljs.core.truth_((function (){var G__8343 = cljs.core.cst$kw$parent;
var G__8344 = expr__8341;
return (pred__8340.cljs$core$IFn$_invoke$arity$2 ? pred__8340.cljs$core$IFn$_invoke$arity$2(G__8343,G__8344) : pred__8340.call(null,G__8343,G__8344));
})())){
return (new cljs.pprint.logical_block(G__8333,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__8345 = cljs.core.cst$kw$section;
var G__8346 = expr__8341;
return (pred__8340.cljs$core$IFn$_invoke$arity$2 ? pred__8340.cljs$core$IFn$_invoke$arity$2(G__8345,G__8346) : pred__8340.call(null,G__8345,G__8346));
})())){
return (new cljs.pprint.logical_block(self__.parent,G__8333,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__8347 = cljs.core.cst$kw$start_DASH_col;
var G__8348 = expr__8341;
return (pred__8340.cljs$core$IFn$_invoke$arity$2 ? pred__8340.cljs$core$IFn$_invoke$arity$2(G__8347,G__8348) : pred__8340.call(null,G__8347,G__8348));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,G__8333,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__8349 = cljs.core.cst$kw$indent;
var G__8350 = expr__8341;
return (pred__8340.cljs$core$IFn$_invoke$arity$2 ? pred__8340.cljs$core$IFn$_invoke$arity$2(G__8349,G__8350) : pred__8340.call(null,G__8349,G__8350));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,G__8333,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__8351 = cljs.core.cst$kw$done_DASH_nl;
var G__8352 = expr__8341;
return (pred__8340.cljs$core$IFn$_invoke$arity$2 ? pred__8340.cljs$core$IFn$_invoke$arity$2(G__8351,G__8352) : pred__8340.call(null,G__8351,G__8352));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,G__8333,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__8353 = cljs.core.cst$kw$intra_DASH_block_DASH_nl;
var G__8354 = expr__8341;
return (pred__8340.cljs$core$IFn$_invoke$arity$2 ? pred__8340.cljs$core$IFn$_invoke$arity$2(G__8353,G__8354) : pred__8340.call(null,G__8353,G__8354));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,G__8333,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__8355 = cljs.core.cst$kw$prefix;
var G__8356 = expr__8341;
return (pred__8340.cljs$core$IFn$_invoke$arity$2 ? pred__8340.cljs$core$IFn$_invoke$arity$2(G__8355,G__8356) : pred__8340.call(null,G__8355,G__8356));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,G__8333,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__8357 = cljs.core.cst$kw$per_DASH_line_DASH_prefix;
var G__8358 = expr__8341;
return (pred__8340.cljs$core$IFn$_invoke$arity$2 ? pred__8340.cljs$core$IFn$_invoke$arity$2(G__8357,G__8358) : pred__8340.call(null,G__8357,G__8358));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,G__8333,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__8359 = cljs.core.cst$kw$suffix;
var G__8360 = expr__8341;
return (pred__8340.cljs$core$IFn$_invoke$arity$2 ? pred__8340.cljs$core$IFn$_invoke$arity$2(G__8359,G__8360) : pred__8340.call(null,G__8359,G__8360));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,G__8333,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__8361 = cljs.core.cst$kw$logical_DASH_block_DASH_callback;
var G__8362 = expr__8341;
return (pred__8340.cljs$core$IFn$_invoke$arity$2 ? pred__8340.cljs$core$IFn$_invoke$arity$2(G__8361,G__8362) : pred__8340.call(null,G__8361,G__8362));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,G__8333,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4180__auto__,G__8333),null));
}
}
}
}
}
}
}
}
}
}
});

cljs.pprint.logical_block.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4184__auto__){
var self__ = this;
var this__4184__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$parent,self__.parent,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$section,self__.section,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$start_DASH_col,self__.start_col,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$indent,self__.indent,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$done_DASH_nl,self__.done_nl,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$intra_DASH_block_DASH_nl,self__.intra_block_nl,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$prefix,self__.prefix,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$per_DASH_line_DASH_prefix,self__.per_line_prefix,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$suffix,self__.suffix,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$logical_DASH_block_DASH_callback,self__.logical_block_callback,null))], null),self__.__extmap));
});

cljs.pprint.logical_block.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4171__auto__,G__8333){
var self__ = this;
var this__4171__auto____$1 = this;
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,G__8333,self__.__extmap,self__.__hash));
});

cljs.pprint.logical_block.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4177__auto__,entry__4178__auto__){
var self__ = this;
var this__4177__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4178__auto__)){
return this__4177__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4178__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4178__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4177__auto____$1,entry__4178__auto__);
}
});

cljs.pprint.logical_block.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$parent,cljs.core.cst$sym$section,cljs.core.cst$sym$start_DASH_col,cljs.core.cst$sym$indent,cljs.core.cst$sym$done_DASH_nl,cljs.core.cst$sym$intra_DASH_block_DASH_nl,cljs.core.cst$sym$prefix,cljs.core.cst$sym$per_DASH_line_DASH_prefix,cljs.core.cst$sym$suffix,cljs.core.cst$sym$logical_DASH_block_DASH_callback], null);
});

cljs.pprint.logical_block.cljs$lang$type = true;

cljs.pprint.logical_block.cljs$lang$ctorPrSeq = (function (this__4208__auto__){
return (new cljs.core.List(null,"cljs.pprint/logical-block",null,(1),null));
});

cljs.pprint.logical_block.cljs$lang$ctorPrWriter = (function (this__4208__auto__,writer__4209__auto__){
return cljs.core._write(writer__4209__auto__,"cljs.pprint/logical-block");
});

/**
 * Positional factory function for cljs.pprint/logical-block.
 */
cljs.pprint.__GT_logical_block = (function cljs$pprint$__GT_logical_block(parent,section,start_col,indent,done_nl,intra_block_nl,prefix,per_line_prefix,suffix,logical_block_callback){
return (new cljs.pprint.logical_block(parent,section,start_col,indent,done_nl,intra_block_nl,prefix,per_line_prefix,suffix,logical_block_callback,null,null,null));
});

/**
 * Factory function for cljs.pprint/logical-block, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_logical_block = (function cljs$pprint$map__GT_logical_block(G__8337){
return (new cljs.pprint.logical_block(cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(G__8337),cljs.core.cst$kw$section.cljs$core$IFn$_invoke$arity$1(G__8337),cljs.core.cst$kw$start_DASH_col.cljs$core$IFn$_invoke$arity$1(G__8337),cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(G__8337),cljs.core.cst$kw$done_DASH_nl.cljs$core$IFn$_invoke$arity$1(G__8337),cljs.core.cst$kw$intra_DASH_block_DASH_nl.cljs$core$IFn$_invoke$arity$1(G__8337),cljs.core.cst$kw$prefix.cljs$core$IFn$_invoke$arity$1(G__8337),cljs.core.cst$kw$per_DASH_line_DASH_prefix.cljs$core$IFn$_invoke$arity$1(G__8337),cljs.core.cst$kw$suffix.cljs$core$IFn$_invoke$arity$1(G__8337),cljs.core.cst$kw$logical_DASH_block_DASH_callback.cljs$core$IFn$_invoke$arity$1(G__8337),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__8337,cljs.core.cst$kw$parent,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$section,cljs.core.cst$kw$start_DASH_col,cljs.core.cst$kw$indent,cljs.core.cst$kw$done_DASH_nl,cljs.core.cst$kw$intra_DASH_block_DASH_nl,cljs.core.cst$kw$prefix,cljs.core.cst$kw$per_DASH_line_DASH_prefix,cljs.core.cst$kw$suffix,cljs.core.cst$kw$logical_DASH_block_DASH_callback], 0))),null));
});

cljs.pprint.ancestor_QMARK_ = (function cljs$pprint$ancestor_QMARK_(parent,child){
var child__$1 = cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(child);
while(true){
if((child__$1 == null)){
return false;
} else {
if((parent === child__$1)){
return true;
} else {
var G__8364 = cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(child__$1);
child__$1 = G__8364;
continue;

}
}
break;
}
});
cljs.pprint.buffer_length = (function cljs$pprint$buffer_length(l){
var l__$1 = cljs.core.seq(l);
if(l__$1){
return (cljs.core.cst$kw$end_DASH_pos.cljs$core$IFn$_invoke$arity$1(cljs.core.last(l__$1)) - cljs.core.cst$kw$start_DASH_pos.cljs$core$IFn$_invoke$arity$1(cljs.core.first(l__$1)));
} else {
return (0);
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.buffer_blob = (function (type_tag,data,trailing_white_space,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.data = data;
this.trailing_white_space = trailing_white_space;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.buffer_blob.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4172__auto__,k__4173__auto__){
var self__ = this;
var this__4172__auto____$1 = this;
return this__4172__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4173__auto__,null);
});

cljs.pprint.buffer_blob.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4174__auto__,k8366,else__4175__auto__){
var self__ = this;
var this__4174__auto____$1 = this;
var G__8370 = k8366;
var G__8370__$1 = (((G__8370 instanceof cljs.core.Keyword))?G__8370.fqn:null);
switch (G__8370__$1) {
case "type-tag":
return self__.type_tag;

break;
case "data":
return self__.data;

break;
case "trailing-white-space":
return self__.trailing_white_space;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k8366,else__4175__auto__);

}
});

cljs.pprint.buffer_blob.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4186__auto__,writer__4187__auto__,opts__4188__auto__){
var self__ = this;
var this__4186__auto____$1 = this;
var pr_pair__4189__auto__ = ((function (this__4186__auto____$1){
return (function (keyval__4190__auto__){
return cljs.core.pr_sequential_writer(writer__4187__auto__,cljs.core.pr_writer,""," ","",opts__4188__auto__,keyval__4190__auto__);
});})(this__4186__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4187__auto__,pr_pair__4189__auto__,"#cljs.pprint.buffer-blob{",", ","}",opts__4188__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$data,self__.data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$trailing_DASH_white_DASH_space,self__.trailing_white_space],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__8365){
var self__ = this;
var G__8365__$1 = this;
return (new cljs.core.RecordIter((0),G__8365__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$type_DASH_tag,cljs.core.cst$kw$data,cljs.core.cst$kw$trailing_DASH_white_DASH_space,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4170__auto__){
var self__ = this;
var this__4170__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.buffer_blob.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4167__auto__){
var self__ = this;
var this__4167__auto____$1 = this;
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.buffer_blob.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4176__auto__){
var self__ = this;
var this__4176__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4168__auto__){
var self__ = this;
var this__4168__auto____$1 = this;
var h__4030__auto__ = self__.__hash;
if(!((h__4030__auto__ == null))){
return h__4030__auto__;
} else {
var h__4030__auto____$1 = (function (){var fexpr__8371 = ((function (h__4030__auto__,this__4168__auto____$1){
return (function (coll__4169__auto__){
return (1809113693 ^ cljs.core.hash_unordered_coll(coll__4169__auto__));
});})(h__4030__auto__,this__4168__auto____$1))
;
return fexpr__8371(this__4168__auto____$1);
})();
self__.__hash = h__4030__auto____$1;

return h__4030__auto____$1;
}
});

cljs.pprint.buffer_blob.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this8367,other8368){
var self__ = this;
var this8367__$1 = this;
return ((!((other8368 == null))) && ((this8367__$1.constructor === other8368.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8367__$1.type_tag,other8368.type_tag)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8367__$1.data,other8368.data)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8367__$1.trailing_white_space,other8368.trailing_white_space)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8367__$1.start_pos,other8368.start_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8367__$1.end_pos,other8368.end_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8367__$1.__extmap,other8368.__extmap)));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4181__auto__,k__4182__auto__){
var self__ = this;
var this__4181__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$end_DASH_pos,null,cljs.core.cst$kw$trailing_DASH_white_DASH_space,null,cljs.core.cst$kw$type_DASH_tag,null,cljs.core.cst$kw$start_DASH_pos,null,cljs.core.cst$kw$data,null], null), null),k__4182__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4181__auto____$1),self__.__meta),k__4182__auto__);
} else {
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4182__auto__)),null));
}
});

cljs.pprint.buffer_blob.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4179__auto__,k__4180__auto__,G__8365){
var self__ = this;
var this__4179__auto____$1 = this;
var pred__8372 = cljs.core.keyword_identical_QMARK_;
var expr__8373 = k__4180__auto__;
if(cljs.core.truth_((function (){var G__8375 = cljs.core.cst$kw$type_DASH_tag;
var G__8376 = expr__8373;
return (pred__8372.cljs$core$IFn$_invoke$arity$2 ? pred__8372.cljs$core$IFn$_invoke$arity$2(G__8375,G__8376) : pred__8372.call(null,G__8375,G__8376));
})())){
return (new cljs.pprint.buffer_blob(G__8365,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__8377 = cljs.core.cst$kw$data;
var G__8378 = expr__8373;
return (pred__8372.cljs$core$IFn$_invoke$arity$2 ? pred__8372.cljs$core$IFn$_invoke$arity$2(G__8377,G__8378) : pred__8372.call(null,G__8377,G__8378));
})())){
return (new cljs.pprint.buffer_blob(self__.type_tag,G__8365,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__8379 = cljs.core.cst$kw$trailing_DASH_white_DASH_space;
var G__8380 = expr__8373;
return (pred__8372.cljs$core$IFn$_invoke$arity$2 ? pred__8372.cljs$core$IFn$_invoke$arity$2(G__8379,G__8380) : pred__8372.call(null,G__8379,G__8380));
})())){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,G__8365,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__8381 = cljs.core.cst$kw$start_DASH_pos;
var G__8382 = expr__8373;
return (pred__8372.cljs$core$IFn$_invoke$arity$2 ? pred__8372.cljs$core$IFn$_invoke$arity$2(G__8381,G__8382) : pred__8372.call(null,G__8381,G__8382));
})())){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,G__8365,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__8383 = cljs.core.cst$kw$end_DASH_pos;
var G__8384 = expr__8373;
return (pred__8372.cljs$core$IFn$_invoke$arity$2 ? pred__8372.cljs$core$IFn$_invoke$arity$2(G__8383,G__8384) : pred__8372.call(null,G__8383,G__8384));
})())){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,G__8365,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4180__auto__,G__8365),null));
}
}
}
}
}
});

cljs.pprint.buffer_blob.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4184__auto__){
var self__ = this;
var this__4184__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$type_DASH_tag,self__.type_tag,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$data,self__.data,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$trailing_DASH_white_DASH_space,self__.trailing_white_space,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$start_DASH_pos,self__.start_pos,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$end_DASH_pos,self__.end_pos,null))], null),self__.__extmap));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4171__auto__,G__8365){
var self__ = this;
var this__4171__auto____$1 = this;
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,G__8365,self__.__extmap,self__.__hash));
});

cljs.pprint.buffer_blob.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4177__auto__,entry__4178__auto__){
var self__ = this;
var this__4177__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4178__auto__)){
return this__4177__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4178__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4178__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4177__auto____$1,entry__4178__auto__);
}
});

cljs.pprint.buffer_blob.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$type_DASH_tag,cljs.core.cst$sym$data,cljs.core.cst$sym$trailing_DASH_white_DASH_space,cljs.core.cst$sym$start_DASH_pos,cljs.core.cst$sym$end_DASH_pos], null);
});

cljs.pprint.buffer_blob.cljs$lang$type = true;

cljs.pprint.buffer_blob.cljs$lang$ctorPrSeq = (function (this__4208__auto__){
return (new cljs.core.List(null,"cljs.pprint/buffer-blob",null,(1),null));
});

cljs.pprint.buffer_blob.cljs$lang$ctorPrWriter = (function (this__4208__auto__,writer__4209__auto__){
return cljs.core._write(writer__4209__auto__,"cljs.pprint/buffer-blob");
});

/**
 * Positional factory function for cljs.pprint/buffer-blob.
 */
cljs.pprint.__GT_buffer_blob = (function cljs$pprint$__GT_buffer_blob(type_tag,data,trailing_white_space,start_pos,end_pos){
return (new cljs.pprint.buffer_blob(type_tag,data,trailing_white_space,start_pos,end_pos,null,null,null));
});

/**
 * Factory function for cljs.pprint/buffer-blob, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_buffer_blob = (function cljs$pprint$map__GT_buffer_blob(G__8369){
return (new cljs.pprint.buffer_blob(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(G__8369),cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(G__8369),cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(G__8369),cljs.core.cst$kw$start_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__8369),cljs.core.cst$kw$end_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__8369),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__8369,cljs.core.cst$kw$type_DASH_tag,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$data,cljs.core.cst$kw$trailing_DASH_white_DASH_space,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], 0))),null));
});


cljs.pprint.make_buffer_blob = (function cljs$pprint$make_buffer_blob(data,trailing_white_space,start_pos,end_pos){
return (new cljs.pprint.buffer_blob(cljs.core.cst$kw$buffer_DASH_blob,data,trailing_white_space,start_pos,end_pos,null,null,null));
});

cljs.pprint.buffer_blob_QMARK_ = (function cljs$pprint$buffer_blob_QMARK_(x__8154__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(x__8154__auto__),cljs.core.cst$kw$buffer_DASH_blob);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.nl_t = (function (type_tag,type,logical_block,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.type = type;
this.logical_block = logical_block;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.nl_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4172__auto__,k__4173__auto__){
var self__ = this;
var this__4172__auto____$1 = this;
return this__4172__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4173__auto__,null);
});

cljs.pprint.nl_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4174__auto__,k8387,else__4175__auto__){
var self__ = this;
var this__4174__auto____$1 = this;
var G__8391 = k8387;
var G__8391__$1 = (((G__8391 instanceof cljs.core.Keyword))?G__8391.fqn:null);
switch (G__8391__$1) {
case "type-tag":
return self__.type_tag;

break;
case "type":
return self__.type;

break;
case "logical-block":
return self__.logical_block;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k8387,else__4175__auto__);

}
});

cljs.pprint.nl_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4186__auto__,writer__4187__auto__,opts__4188__auto__){
var self__ = this;
var this__4186__auto____$1 = this;
var pr_pair__4189__auto__ = ((function (this__4186__auto____$1){
return (function (keyval__4190__auto__){
return cljs.core.pr_sequential_writer(writer__4187__auto__,cljs.core.pr_writer,""," ","",opts__4188__auto__,keyval__4190__auto__);
});})(this__4186__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4187__auto__,pr_pair__4189__auto__,"#cljs.pprint.nl-t{",", ","}",opts__4188__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type,self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block,self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.nl_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__8386){
var self__ = this;
var G__8386__$1 = this;
return (new cljs.core.RecordIter((0),G__8386__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$type_DASH_tag,cljs.core.cst$kw$type,cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs.pprint.nl_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4170__auto__){
var self__ = this;
var this__4170__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.nl_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4167__auto__){
var self__ = this;
var this__4167__auto____$1 = this;
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.nl_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4176__auto__){
var self__ = this;
var this__4176__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
});

cljs.pprint.nl_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4168__auto__){
var self__ = this;
var this__4168__auto____$1 = this;
var h__4030__auto__ = self__.__hash;
if(!((h__4030__auto__ == null))){
return h__4030__auto__;
} else {
var h__4030__auto____$1 = (function (){var fexpr__8392 = ((function (h__4030__auto__,this__4168__auto____$1){
return (function (coll__4169__auto__){
return (-1640656800 ^ cljs.core.hash_unordered_coll(coll__4169__auto__));
});})(h__4030__auto__,this__4168__auto____$1))
;
return fexpr__8392(this__4168__auto____$1);
})();
self__.__hash = h__4030__auto____$1;

return h__4030__auto____$1;
}
});

cljs.pprint.nl_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this8388,other8389){
var self__ = this;
var this8388__$1 = this;
return ((!((other8389 == null))) && ((this8388__$1.constructor === other8389.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8388__$1.type_tag,other8389.type_tag)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8388__$1.type,other8389.type)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8388__$1.logical_block,other8389.logical_block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8388__$1.start_pos,other8389.start_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8388__$1.end_pos,other8389.end_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8388__$1.__extmap,other8389.__extmap)));
});

cljs.pprint.nl_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4181__auto__,k__4182__auto__){
var self__ = this;
var this__4181__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$end_DASH_pos,null,cljs.core.cst$kw$type,null,cljs.core.cst$kw$logical_DASH_block,null,cljs.core.cst$kw$type_DASH_tag,null,cljs.core.cst$kw$start_DASH_pos,null], null), null),k__4182__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4181__auto____$1),self__.__meta),k__4182__auto__);
} else {
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4182__auto__)),null));
}
});

cljs.pprint.nl_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4179__auto__,k__4180__auto__,G__8386){
var self__ = this;
var this__4179__auto____$1 = this;
var pred__8393 = cljs.core.keyword_identical_QMARK_;
var expr__8394 = k__4180__auto__;
if(cljs.core.truth_((function (){var G__8396 = cljs.core.cst$kw$type_DASH_tag;
var G__8397 = expr__8394;
return (pred__8393.cljs$core$IFn$_invoke$arity$2 ? pred__8393.cljs$core$IFn$_invoke$arity$2(G__8396,G__8397) : pred__8393.call(null,G__8396,G__8397));
})())){
return (new cljs.pprint.nl_t(G__8386,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__8398 = cljs.core.cst$kw$type;
var G__8399 = expr__8394;
return (pred__8393.cljs$core$IFn$_invoke$arity$2 ? pred__8393.cljs$core$IFn$_invoke$arity$2(G__8398,G__8399) : pred__8393.call(null,G__8398,G__8399));
})())){
return (new cljs.pprint.nl_t(self__.type_tag,G__8386,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__8400 = cljs.core.cst$kw$logical_DASH_block;
var G__8401 = expr__8394;
return (pred__8393.cljs$core$IFn$_invoke$arity$2 ? pred__8393.cljs$core$IFn$_invoke$arity$2(G__8400,G__8401) : pred__8393.call(null,G__8400,G__8401));
})())){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,G__8386,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__8402 = cljs.core.cst$kw$start_DASH_pos;
var G__8403 = expr__8394;
return (pred__8393.cljs$core$IFn$_invoke$arity$2 ? pred__8393.cljs$core$IFn$_invoke$arity$2(G__8402,G__8403) : pred__8393.call(null,G__8402,G__8403));
})())){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,G__8386,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__8404 = cljs.core.cst$kw$end_DASH_pos;
var G__8405 = expr__8394;
return (pred__8393.cljs$core$IFn$_invoke$arity$2 ? pred__8393.cljs$core$IFn$_invoke$arity$2(G__8404,G__8405) : pred__8393.call(null,G__8404,G__8405));
})())){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,G__8386,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4180__auto__,G__8386),null));
}
}
}
}
}
});

cljs.pprint.nl_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4184__auto__){
var self__ = this;
var this__4184__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$type_DASH_tag,self__.type_tag,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$type,self__.type,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$logical_DASH_block,self__.logical_block,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$start_DASH_pos,self__.start_pos,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$end_DASH_pos,self__.end_pos,null))], null),self__.__extmap));
});

cljs.pprint.nl_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4171__auto__,G__8386){
var self__ = this;
var this__4171__auto____$1 = this;
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,G__8386,self__.__extmap,self__.__hash));
});

cljs.pprint.nl_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4177__auto__,entry__4178__auto__){
var self__ = this;
var this__4177__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4178__auto__)){
return this__4177__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4178__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4178__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4177__auto____$1,entry__4178__auto__);
}
});

cljs.pprint.nl_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$type_DASH_tag,cljs.core.cst$sym$type,cljs.core.cst$sym$logical_DASH_block,cljs.core.cst$sym$start_DASH_pos,cljs.core.cst$sym$end_DASH_pos], null);
});

cljs.pprint.nl_t.cljs$lang$type = true;

cljs.pprint.nl_t.cljs$lang$ctorPrSeq = (function (this__4208__auto__){
return (new cljs.core.List(null,"cljs.pprint/nl-t",null,(1),null));
});

cljs.pprint.nl_t.cljs$lang$ctorPrWriter = (function (this__4208__auto__,writer__4209__auto__){
return cljs.core._write(writer__4209__auto__,"cljs.pprint/nl-t");
});

/**
 * Positional factory function for cljs.pprint/nl-t.
 */
cljs.pprint.__GT_nl_t = (function cljs$pprint$__GT_nl_t(type_tag,type,logical_block,start_pos,end_pos){
return (new cljs.pprint.nl_t(type_tag,type,logical_block,start_pos,end_pos,null,null,null));
});

/**
 * Factory function for cljs.pprint/nl-t, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_nl_t = (function cljs$pprint$map__GT_nl_t(G__8390){
return (new cljs.pprint.nl_t(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(G__8390),cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(G__8390),cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(G__8390),cljs.core.cst$kw$start_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__8390),cljs.core.cst$kw$end_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__8390),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__8390,cljs.core.cst$kw$type_DASH_tag,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$type,cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], 0))),null));
});


cljs.pprint.make_nl_t = (function cljs$pprint$make_nl_t(type,logical_block,start_pos,end_pos){
return (new cljs.pprint.nl_t(cljs.core.cst$kw$nl_DASH_t,type,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.nl_t_QMARK_ = (function cljs$pprint$nl_t_QMARK_(x__8154__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(x__8154__auto__),cljs.core.cst$kw$nl_DASH_t);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.start_block_t = (function (type_tag,logical_block,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.logical_block = logical_block;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.start_block_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4172__auto__,k__4173__auto__){
var self__ = this;
var this__4172__auto____$1 = this;
return this__4172__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4173__auto__,null);
});

cljs.pprint.start_block_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4174__auto__,k8408,else__4175__auto__){
var self__ = this;
var this__4174__auto____$1 = this;
var G__8412 = k8408;
var G__8412__$1 = (((G__8412 instanceof cljs.core.Keyword))?G__8412.fqn:null);
switch (G__8412__$1) {
case "type-tag":
return self__.type_tag;

break;
case "logical-block":
return self__.logical_block;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k8408,else__4175__auto__);

}
});

cljs.pprint.start_block_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4186__auto__,writer__4187__auto__,opts__4188__auto__){
var self__ = this;
var this__4186__auto____$1 = this;
var pr_pair__4189__auto__ = ((function (this__4186__auto____$1){
return (function (keyval__4190__auto__){
return cljs.core.pr_sequential_writer(writer__4187__auto__,cljs.core.pr_writer,""," ","",opts__4188__auto__,keyval__4190__auto__);
});})(this__4186__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4187__auto__,pr_pair__4189__auto__,"#cljs.pprint.start-block-t{",", ","}",opts__4188__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block,self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.start_block_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__8407){
var self__ = this;
var G__8407__$1 = this;
return (new cljs.core.RecordIter((0),G__8407__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$type_DASH_tag,cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs.pprint.start_block_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4170__auto__){
var self__ = this;
var this__4170__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.start_block_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4167__auto__){
var self__ = this;
var this__4167__auto____$1 = this;
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.start_block_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4176__auto__){
var self__ = this;
var this__4176__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
});

cljs.pprint.start_block_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4168__auto__){
var self__ = this;
var this__4168__auto____$1 = this;
var h__4030__auto__ = self__.__hash;
if(!((h__4030__auto__ == null))){
return h__4030__auto__;
} else {
var h__4030__auto____$1 = (function (){var fexpr__8413 = ((function (h__4030__auto__,this__4168__auto____$1){
return (function (coll__4169__auto__){
return (-414877272 ^ cljs.core.hash_unordered_coll(coll__4169__auto__));
});})(h__4030__auto__,this__4168__auto____$1))
;
return fexpr__8413(this__4168__auto____$1);
})();
self__.__hash = h__4030__auto____$1;

return h__4030__auto____$1;
}
});

cljs.pprint.start_block_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this8409,other8410){
var self__ = this;
var this8409__$1 = this;
return ((!((other8410 == null))) && ((this8409__$1.constructor === other8410.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8409__$1.type_tag,other8410.type_tag)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8409__$1.logical_block,other8410.logical_block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8409__$1.start_pos,other8410.start_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8409__$1.end_pos,other8410.end_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8409__$1.__extmap,other8410.__extmap)));
});

cljs.pprint.start_block_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4181__auto__,k__4182__auto__){
var self__ = this;
var this__4181__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$end_DASH_pos,null,cljs.core.cst$kw$logical_DASH_block,null,cljs.core.cst$kw$type_DASH_tag,null,cljs.core.cst$kw$start_DASH_pos,null], null), null),k__4182__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4181__auto____$1),self__.__meta),k__4182__auto__);
} else {
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4182__auto__)),null));
}
});

cljs.pprint.start_block_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4179__auto__,k__4180__auto__,G__8407){
var self__ = this;
var this__4179__auto____$1 = this;
var pred__8414 = cljs.core.keyword_identical_QMARK_;
var expr__8415 = k__4180__auto__;
if(cljs.core.truth_((function (){var G__8417 = cljs.core.cst$kw$type_DASH_tag;
var G__8418 = expr__8415;
return (pred__8414.cljs$core$IFn$_invoke$arity$2 ? pred__8414.cljs$core$IFn$_invoke$arity$2(G__8417,G__8418) : pred__8414.call(null,G__8417,G__8418));
})())){
return (new cljs.pprint.start_block_t(G__8407,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__8419 = cljs.core.cst$kw$logical_DASH_block;
var G__8420 = expr__8415;
return (pred__8414.cljs$core$IFn$_invoke$arity$2 ? pred__8414.cljs$core$IFn$_invoke$arity$2(G__8419,G__8420) : pred__8414.call(null,G__8419,G__8420));
})())){
return (new cljs.pprint.start_block_t(self__.type_tag,G__8407,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__8421 = cljs.core.cst$kw$start_DASH_pos;
var G__8422 = expr__8415;
return (pred__8414.cljs$core$IFn$_invoke$arity$2 ? pred__8414.cljs$core$IFn$_invoke$arity$2(G__8421,G__8422) : pred__8414.call(null,G__8421,G__8422));
})())){
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,G__8407,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__8423 = cljs.core.cst$kw$end_DASH_pos;
var G__8424 = expr__8415;
return (pred__8414.cljs$core$IFn$_invoke$arity$2 ? pred__8414.cljs$core$IFn$_invoke$arity$2(G__8423,G__8424) : pred__8414.call(null,G__8423,G__8424));
})())){
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,G__8407,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4180__auto__,G__8407),null));
}
}
}
}
});

cljs.pprint.start_block_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4184__auto__){
var self__ = this;
var this__4184__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$type_DASH_tag,self__.type_tag,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$logical_DASH_block,self__.logical_block,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$start_DASH_pos,self__.start_pos,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$end_DASH_pos,self__.end_pos,null))], null),self__.__extmap));
});

cljs.pprint.start_block_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4171__auto__,G__8407){
var self__ = this;
var this__4171__auto____$1 = this;
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,G__8407,self__.__extmap,self__.__hash));
});

cljs.pprint.start_block_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4177__auto__,entry__4178__auto__){
var self__ = this;
var this__4177__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4178__auto__)){
return this__4177__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4178__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4178__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4177__auto____$1,entry__4178__auto__);
}
});

cljs.pprint.start_block_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$type_DASH_tag,cljs.core.cst$sym$logical_DASH_block,cljs.core.cst$sym$start_DASH_pos,cljs.core.cst$sym$end_DASH_pos], null);
});

cljs.pprint.start_block_t.cljs$lang$type = true;

cljs.pprint.start_block_t.cljs$lang$ctorPrSeq = (function (this__4208__auto__){
return (new cljs.core.List(null,"cljs.pprint/start-block-t",null,(1),null));
});

cljs.pprint.start_block_t.cljs$lang$ctorPrWriter = (function (this__4208__auto__,writer__4209__auto__){
return cljs.core._write(writer__4209__auto__,"cljs.pprint/start-block-t");
});

/**
 * Positional factory function for cljs.pprint/start-block-t.
 */
cljs.pprint.__GT_start_block_t = (function cljs$pprint$__GT_start_block_t(type_tag,logical_block,start_pos,end_pos){
return (new cljs.pprint.start_block_t(type_tag,logical_block,start_pos,end_pos,null,null,null));
});

/**
 * Factory function for cljs.pprint/start-block-t, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_start_block_t = (function cljs$pprint$map__GT_start_block_t(G__8411){
return (new cljs.pprint.start_block_t(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(G__8411),cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(G__8411),cljs.core.cst$kw$start_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__8411),cljs.core.cst$kw$end_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__8411),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__8411,cljs.core.cst$kw$type_DASH_tag,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], 0))),null));
});


cljs.pprint.make_start_block_t = (function cljs$pprint$make_start_block_t(logical_block,start_pos,end_pos){
return (new cljs.pprint.start_block_t(cljs.core.cst$kw$start_DASH_block_DASH_t,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.start_block_t_QMARK_ = (function cljs$pprint$start_block_t_QMARK_(x__8154__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(x__8154__auto__),cljs.core.cst$kw$start_DASH_block_DASH_t);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.end_block_t = (function (type_tag,logical_block,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.logical_block = logical_block;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.end_block_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4172__auto__,k__4173__auto__){
var self__ = this;
var this__4172__auto____$1 = this;
return this__4172__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4173__auto__,null);
});

cljs.pprint.end_block_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4174__auto__,k8427,else__4175__auto__){
var self__ = this;
var this__4174__auto____$1 = this;
var G__8431 = k8427;
var G__8431__$1 = (((G__8431 instanceof cljs.core.Keyword))?G__8431.fqn:null);
switch (G__8431__$1) {
case "type-tag":
return self__.type_tag;

break;
case "logical-block":
return self__.logical_block;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k8427,else__4175__auto__);

}
});

cljs.pprint.end_block_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4186__auto__,writer__4187__auto__,opts__4188__auto__){
var self__ = this;
var this__4186__auto____$1 = this;
var pr_pair__4189__auto__ = ((function (this__4186__auto____$1){
return (function (keyval__4190__auto__){
return cljs.core.pr_sequential_writer(writer__4187__auto__,cljs.core.pr_writer,""," ","",opts__4188__auto__,keyval__4190__auto__);
});})(this__4186__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4187__auto__,pr_pair__4189__auto__,"#cljs.pprint.end-block-t{",", ","}",opts__4188__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block,self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.end_block_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__8426){
var self__ = this;
var G__8426__$1 = this;
return (new cljs.core.RecordIter((0),G__8426__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$type_DASH_tag,cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs.pprint.end_block_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4170__auto__){
var self__ = this;
var this__4170__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.end_block_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4167__auto__){
var self__ = this;
var this__4167__auto____$1 = this;
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.end_block_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4176__auto__){
var self__ = this;
var this__4176__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
});

cljs.pprint.end_block_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4168__auto__){
var self__ = this;
var this__4168__auto____$1 = this;
var h__4030__auto__ = self__.__hash;
if(!((h__4030__auto__ == null))){
return h__4030__auto__;
} else {
var h__4030__auto____$1 = (function (){var fexpr__8432 = ((function (h__4030__auto__,this__4168__auto____$1){
return (function (coll__4169__auto__){
return (1365867980 ^ cljs.core.hash_unordered_coll(coll__4169__auto__));
});})(h__4030__auto__,this__4168__auto____$1))
;
return fexpr__8432(this__4168__auto____$1);
})();
self__.__hash = h__4030__auto____$1;

return h__4030__auto____$1;
}
});

cljs.pprint.end_block_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this8428,other8429){
var self__ = this;
var this8428__$1 = this;
return ((!((other8429 == null))) && ((this8428__$1.constructor === other8429.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8428__$1.type_tag,other8429.type_tag)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8428__$1.logical_block,other8429.logical_block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8428__$1.start_pos,other8429.start_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8428__$1.end_pos,other8429.end_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8428__$1.__extmap,other8429.__extmap)));
});

cljs.pprint.end_block_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4181__auto__,k__4182__auto__){
var self__ = this;
var this__4181__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$end_DASH_pos,null,cljs.core.cst$kw$logical_DASH_block,null,cljs.core.cst$kw$type_DASH_tag,null,cljs.core.cst$kw$start_DASH_pos,null], null), null),k__4182__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4181__auto____$1),self__.__meta),k__4182__auto__);
} else {
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4182__auto__)),null));
}
});

cljs.pprint.end_block_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4179__auto__,k__4180__auto__,G__8426){
var self__ = this;
var this__4179__auto____$1 = this;
var pred__8433 = cljs.core.keyword_identical_QMARK_;
var expr__8434 = k__4180__auto__;
if(cljs.core.truth_((function (){var G__8436 = cljs.core.cst$kw$type_DASH_tag;
var G__8437 = expr__8434;
return (pred__8433.cljs$core$IFn$_invoke$arity$2 ? pred__8433.cljs$core$IFn$_invoke$arity$2(G__8436,G__8437) : pred__8433.call(null,G__8436,G__8437));
})())){
return (new cljs.pprint.end_block_t(G__8426,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__8438 = cljs.core.cst$kw$logical_DASH_block;
var G__8439 = expr__8434;
return (pred__8433.cljs$core$IFn$_invoke$arity$2 ? pred__8433.cljs$core$IFn$_invoke$arity$2(G__8438,G__8439) : pred__8433.call(null,G__8438,G__8439));
})())){
return (new cljs.pprint.end_block_t(self__.type_tag,G__8426,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__8440 = cljs.core.cst$kw$start_DASH_pos;
var G__8441 = expr__8434;
return (pred__8433.cljs$core$IFn$_invoke$arity$2 ? pred__8433.cljs$core$IFn$_invoke$arity$2(G__8440,G__8441) : pred__8433.call(null,G__8440,G__8441));
})())){
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,G__8426,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__8442 = cljs.core.cst$kw$end_DASH_pos;
var G__8443 = expr__8434;
return (pred__8433.cljs$core$IFn$_invoke$arity$2 ? pred__8433.cljs$core$IFn$_invoke$arity$2(G__8442,G__8443) : pred__8433.call(null,G__8442,G__8443));
})())){
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,G__8426,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4180__auto__,G__8426),null));
}
}
}
}
});

cljs.pprint.end_block_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4184__auto__){
var self__ = this;
var this__4184__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$type_DASH_tag,self__.type_tag,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$logical_DASH_block,self__.logical_block,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$start_DASH_pos,self__.start_pos,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$end_DASH_pos,self__.end_pos,null))], null),self__.__extmap));
});

cljs.pprint.end_block_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4171__auto__,G__8426){
var self__ = this;
var this__4171__auto____$1 = this;
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,G__8426,self__.__extmap,self__.__hash));
});

cljs.pprint.end_block_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4177__auto__,entry__4178__auto__){
var self__ = this;
var this__4177__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4178__auto__)){
return this__4177__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4178__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4178__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4177__auto____$1,entry__4178__auto__);
}
});

cljs.pprint.end_block_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$type_DASH_tag,cljs.core.cst$sym$logical_DASH_block,cljs.core.cst$sym$start_DASH_pos,cljs.core.cst$sym$end_DASH_pos], null);
});

cljs.pprint.end_block_t.cljs$lang$type = true;

cljs.pprint.end_block_t.cljs$lang$ctorPrSeq = (function (this__4208__auto__){
return (new cljs.core.List(null,"cljs.pprint/end-block-t",null,(1),null));
});

cljs.pprint.end_block_t.cljs$lang$ctorPrWriter = (function (this__4208__auto__,writer__4209__auto__){
return cljs.core._write(writer__4209__auto__,"cljs.pprint/end-block-t");
});

/**
 * Positional factory function for cljs.pprint/end-block-t.
 */
cljs.pprint.__GT_end_block_t = (function cljs$pprint$__GT_end_block_t(type_tag,logical_block,start_pos,end_pos){
return (new cljs.pprint.end_block_t(type_tag,logical_block,start_pos,end_pos,null,null,null));
});

/**
 * Factory function for cljs.pprint/end-block-t, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_end_block_t = (function cljs$pprint$map__GT_end_block_t(G__8430){
return (new cljs.pprint.end_block_t(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(G__8430),cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(G__8430),cljs.core.cst$kw$start_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__8430),cljs.core.cst$kw$end_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__8430),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__8430,cljs.core.cst$kw$type_DASH_tag,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], 0))),null));
});


cljs.pprint.make_end_block_t = (function cljs$pprint$make_end_block_t(logical_block,start_pos,end_pos){
return (new cljs.pprint.end_block_t(cljs.core.cst$kw$end_DASH_block_DASH_t,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.end_block_t_QMARK_ = (function cljs$pprint$end_block_t_QMARK_(x__8154__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(x__8154__auto__),cljs.core.cst$kw$end_DASH_block_DASH_t);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.indent_t = (function (type_tag,logical_block,relative_to,offset,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.logical_block = logical_block;
this.relative_to = relative_to;
this.offset = offset;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.indent_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4172__auto__,k__4173__auto__){
var self__ = this;
var this__4172__auto____$1 = this;
return this__4172__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4173__auto__,null);
});

cljs.pprint.indent_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4174__auto__,k8446,else__4175__auto__){
var self__ = this;
var this__4174__auto____$1 = this;
var G__8450 = k8446;
var G__8450__$1 = (((G__8450 instanceof cljs.core.Keyword))?G__8450.fqn:null);
switch (G__8450__$1) {
case "type-tag":
return self__.type_tag;

break;
case "logical-block":
return self__.logical_block;

break;
case "relative-to":
return self__.relative_to;

break;
case "offset":
return self__.offset;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k8446,else__4175__auto__);

}
});

cljs.pprint.indent_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4186__auto__,writer__4187__auto__,opts__4188__auto__){
var self__ = this;
var this__4186__auto____$1 = this;
var pr_pair__4189__auto__ = ((function (this__4186__auto____$1){
return (function (keyval__4190__auto__){
return cljs.core.pr_sequential_writer(writer__4187__auto__,cljs.core.pr_writer,""," ","",opts__4188__auto__,keyval__4190__auto__);
});})(this__4186__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4187__auto__,pr_pair__4189__auto__,"#cljs.pprint.indent-t{",", ","}",opts__4188__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block,self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$relative_DASH_to,self__.relative_to],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$offset,self__.offset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.indent_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__8445){
var self__ = this;
var G__8445__$1 = this;
return (new cljs.core.RecordIter((0),G__8445__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$type_DASH_tag,cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$relative_DASH_to,cljs.core.cst$kw$offset,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs.pprint.indent_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4170__auto__){
var self__ = this;
var this__4170__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.indent_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4167__auto__){
var self__ = this;
var this__4167__auto____$1 = this;
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.indent_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4176__auto__){
var self__ = this;
var this__4176__auto____$1 = this;
return (6 + cljs.core.count(self__.__extmap));
});

cljs.pprint.indent_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4168__auto__){
var self__ = this;
var this__4168__auto____$1 = this;
var h__4030__auto__ = self__.__hash;
if(!((h__4030__auto__ == null))){
return h__4030__auto__;
} else {
var h__4030__auto____$1 = (function (){var fexpr__8451 = ((function (h__4030__auto__,this__4168__auto____$1){
return (function (coll__4169__auto__){
return (-1602780238 ^ cljs.core.hash_unordered_coll(coll__4169__auto__));
});})(h__4030__auto__,this__4168__auto____$1))
;
return fexpr__8451(this__4168__auto____$1);
})();
self__.__hash = h__4030__auto____$1;

return h__4030__auto____$1;
}
});

cljs.pprint.indent_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this8447,other8448){
var self__ = this;
var this8447__$1 = this;
return ((!((other8448 == null))) && ((this8447__$1.constructor === other8448.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8447__$1.type_tag,other8448.type_tag)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8447__$1.logical_block,other8448.logical_block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8447__$1.relative_to,other8448.relative_to)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8447__$1.offset,other8448.offset)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8447__$1.start_pos,other8448.start_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8447__$1.end_pos,other8448.end_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8447__$1.__extmap,other8448.__extmap)));
});

cljs.pprint.indent_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4181__auto__,k__4182__auto__){
var self__ = this;
var this__4181__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$offset,null,cljs.core.cst$kw$end_DASH_pos,null,cljs.core.cst$kw$relative_DASH_to,null,cljs.core.cst$kw$logical_DASH_block,null,cljs.core.cst$kw$type_DASH_tag,null,cljs.core.cst$kw$start_DASH_pos,null], null), null),k__4182__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4181__auto____$1),self__.__meta),k__4182__auto__);
} else {
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4182__auto__)),null));
}
});

cljs.pprint.indent_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4179__auto__,k__4180__auto__,G__8445){
var self__ = this;
var this__4179__auto____$1 = this;
var pred__8452 = cljs.core.keyword_identical_QMARK_;
var expr__8453 = k__4180__auto__;
if(cljs.core.truth_((function (){var G__8455 = cljs.core.cst$kw$type_DASH_tag;
var G__8456 = expr__8453;
return (pred__8452.cljs$core$IFn$_invoke$arity$2 ? pred__8452.cljs$core$IFn$_invoke$arity$2(G__8455,G__8456) : pred__8452.call(null,G__8455,G__8456));
})())){
return (new cljs.pprint.indent_t(G__8445,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__8457 = cljs.core.cst$kw$logical_DASH_block;
var G__8458 = expr__8453;
return (pred__8452.cljs$core$IFn$_invoke$arity$2 ? pred__8452.cljs$core$IFn$_invoke$arity$2(G__8457,G__8458) : pred__8452.call(null,G__8457,G__8458));
})())){
return (new cljs.pprint.indent_t(self__.type_tag,G__8445,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__8459 = cljs.core.cst$kw$relative_DASH_to;
var G__8460 = expr__8453;
return (pred__8452.cljs$core$IFn$_invoke$arity$2 ? pred__8452.cljs$core$IFn$_invoke$arity$2(G__8459,G__8460) : pred__8452.call(null,G__8459,G__8460));
})())){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,G__8445,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__8461 = cljs.core.cst$kw$offset;
var G__8462 = expr__8453;
return (pred__8452.cljs$core$IFn$_invoke$arity$2 ? pred__8452.cljs$core$IFn$_invoke$arity$2(G__8461,G__8462) : pred__8452.call(null,G__8461,G__8462));
})())){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,G__8445,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__8463 = cljs.core.cst$kw$start_DASH_pos;
var G__8464 = expr__8453;
return (pred__8452.cljs$core$IFn$_invoke$arity$2 ? pred__8452.cljs$core$IFn$_invoke$arity$2(G__8463,G__8464) : pred__8452.call(null,G__8463,G__8464));
})())){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,G__8445,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__8465 = cljs.core.cst$kw$end_DASH_pos;
var G__8466 = expr__8453;
return (pred__8452.cljs$core$IFn$_invoke$arity$2 ? pred__8452.cljs$core$IFn$_invoke$arity$2(G__8465,G__8466) : pred__8452.call(null,G__8465,G__8466));
})())){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,G__8445,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4180__auto__,G__8445),null));
}
}
}
}
}
}
});

cljs.pprint.indent_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4184__auto__){
var self__ = this;
var this__4184__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$type_DASH_tag,self__.type_tag,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$logical_DASH_block,self__.logical_block,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$relative_DASH_to,self__.relative_to,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$offset,self__.offset,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$start_DASH_pos,self__.start_pos,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$end_DASH_pos,self__.end_pos,null))], null),self__.__extmap));
});

cljs.pprint.indent_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4171__auto__,G__8445){
var self__ = this;
var this__4171__auto____$1 = this;
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,G__8445,self__.__extmap,self__.__hash));
});

cljs.pprint.indent_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4177__auto__,entry__4178__auto__){
var self__ = this;
var this__4177__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4178__auto__)){
return this__4177__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4178__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4178__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4177__auto____$1,entry__4178__auto__);
}
});

cljs.pprint.indent_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$type_DASH_tag,cljs.core.cst$sym$logical_DASH_block,cljs.core.cst$sym$relative_DASH_to,cljs.core.cst$sym$offset,cljs.core.cst$sym$start_DASH_pos,cljs.core.cst$sym$end_DASH_pos], null);
});

cljs.pprint.indent_t.cljs$lang$type = true;

cljs.pprint.indent_t.cljs$lang$ctorPrSeq = (function (this__4208__auto__){
return (new cljs.core.List(null,"cljs.pprint/indent-t",null,(1),null));
});

cljs.pprint.indent_t.cljs$lang$ctorPrWriter = (function (this__4208__auto__,writer__4209__auto__){
return cljs.core._write(writer__4209__auto__,"cljs.pprint/indent-t");
});

/**
 * Positional factory function for cljs.pprint/indent-t.
 */
cljs.pprint.__GT_indent_t = (function cljs$pprint$__GT_indent_t(type_tag,logical_block,relative_to,offset,start_pos,end_pos){
return (new cljs.pprint.indent_t(type_tag,logical_block,relative_to,offset,start_pos,end_pos,null,null,null));
});

/**
 * Factory function for cljs.pprint/indent-t, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_indent_t = (function cljs$pprint$map__GT_indent_t(G__8449){
return (new cljs.pprint.indent_t(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(G__8449),cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(G__8449),cljs.core.cst$kw$relative_DASH_to.cljs$core$IFn$_invoke$arity$1(G__8449),cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(G__8449),cljs.core.cst$kw$start_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__8449),cljs.core.cst$kw$end_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__8449),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__8449,cljs.core.cst$kw$type_DASH_tag,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$relative_DASH_to,cljs.core.cst$kw$offset,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], 0))),null));
});


cljs.pprint.make_indent_t = (function cljs$pprint$make_indent_t(logical_block,relative_to,offset,start_pos,end_pos){
return (new cljs.pprint.indent_t(cljs.core.cst$kw$indent_DASH_t,logical_block,relative_to,offset,start_pos,end_pos,null,null,null));
});

cljs.pprint.indent_t_QMARK_ = (function cljs$pprint$indent_t_QMARK_(x__8154__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(x__8154__auto__),cljs.core.cst$kw$indent_DASH_t);
});
cljs.pprint.pp_newline = (function cljs$pprint$pp_newline(){
return "\n";
});
if(typeof cljs.pprint.write_token !== 'undefined'){
} else {
cljs.pprint.write_token = (function (){var method_table__4382__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4383__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4384__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4385__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4386__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.pprint","write-token"),((function (method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__,hierarchy__4386__auto__){
return (function (p1__8469_SHARP_,p2__8468_SHARP_){
return cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(p2__8468_SHARP_);
});})(method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__,hierarchy__4386__auto__))
,cljs.core.cst$kw$default,hierarchy__4386__auto__,method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__));
})();
}
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$start_DASH_block_DASH_t,(function (this$,token){
var temp__5535__auto___8471 = cljs.core.cst$kw$logical_DASH_block_DASH_callback.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5535__auto___8471)){
var cb_8472 = temp__5535__auto___8471;
var G__8470_8473 = cljs.core.cst$kw$start;
(cb_8472.cljs$core$IFn$_invoke$arity$1 ? cb_8472.cljs$core$IFn$_invoke$arity$1(G__8470_8473) : cb_8472.call(null,G__8470_8473));
} else {
}

var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(token);
var temp__5535__auto___8474 = cljs.core.cst$kw$prefix.cljs$core$IFn$_invoke$arity$1(lb);
if(cljs.core.truth_(temp__5535__auto___8474)){
var prefix_8475 = temp__5535__auto___8474;
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),prefix_8475);
} else {
}

var col = cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
cljs.core.reset_BANG_(cljs.core.cst$kw$start_DASH_col.cljs$core$IFn$_invoke$arity$1(lb),col);

return cljs.core.reset_BANG_(cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(lb),col);
}));
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$end_DASH_block_DASH_t,(function (this$,token){
var temp__5535__auto___8477 = cljs.core.cst$kw$logical_DASH_block_DASH_callback.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5535__auto___8477)){
var cb_8478 = temp__5535__auto___8477;
var G__8476_8479 = cljs.core.cst$kw$end;
(cb_8478.cljs$core$IFn$_invoke$arity$1 ? cb_8478.cljs$core$IFn$_invoke$arity$1(G__8476_8479) : cb_8478.call(null,G__8476_8479));
} else {
}

var temp__5535__auto__ = cljs.core.cst$kw$suffix.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(token));
if(cljs.core.truth_(temp__5535__auto__)){
var suffix = temp__5535__auto__;
return cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),suffix);
} else {
return null;
}
}));
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$indent_DASH_t,(function (this$,token){
var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(token);
return cljs.core.reset_BANG_(cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(lb),(cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(token) + (function (){var pred__8480 = cljs.core._EQ_;
var expr__8481 = cljs.core.cst$kw$relative_DASH_to.cljs$core$IFn$_invoke$arity$1(token);
if(cljs.core.truth_((function (){var G__8483 = cljs.core.cst$kw$block;
var G__8484 = expr__8481;
return (pred__8480.cljs$core$IFn$_invoke$arity$2 ? pred__8480.cljs$core$IFn$_invoke$arity$2(G__8483,G__8484) : pred__8480.call(null,G__8483,G__8484));
})())){
return cljs.core.deref(cljs.core.cst$kw$start_DASH_col.cljs$core$IFn$_invoke$arity$1(lb));
} else {
if(cljs.core.truth_((function (){var G__8485 = cljs.core.cst$kw$current;
var G__8486 = expr__8481;
return (pred__8480.cljs$core$IFn$_invoke$arity$2 ? pred__8480.cljs$core$IFn$_invoke$arity$2(G__8485,G__8486) : pred__8480.call(null,G__8485,G__8486));
})())){
return cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__8481)].join('')));
}
}
})()));
}));
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$buffer_DASH_blob,(function (this$,token){
return cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(token));
}));
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$nl_DASH_t,(function (this$,token){
if(cljs.core.truth_((function (){var or__3922__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(token),cljs.core.cst$kw$mandatory);
if(or__3922__auto__){
return or__3922__auto__;
} else {
var and__3911__auto__ = !(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(token),cljs.core.cst$kw$fill));
if(and__3911__auto__){
return cljs.core.deref(cljs.core.cst$kw$done_DASH_nl.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(token)));
} else {
return and__3911__auto__;
}
}
})())){
(cljs.pprint.emit_nl.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.emit_nl.cljs$core$IFn$_invoke$arity$2(this$,token) : cljs.pprint.emit_nl.call(null,this$,token));
} else {
var temp__5533__auto___8487 = cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5533__auto___8487)){
var tws_8488 = temp__5533__auto___8487;
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws_8488);
} else {
}
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,null);
}));
cljs.pprint.write_tokens = (function cljs$pprint$write_tokens(this$,tokens,force_trailing_whitespace){
var seq__8489 = cljs.core.seq(tokens);
var chunk__8490 = null;
var count__8491 = (0);
var i__8492 = (0);
while(true){
if((i__8492 < count__8491)){
var token = chunk__8490.cljs$core$IIndexed$_nth$arity$2(null,i__8492);
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(token),cljs.core.cst$kw$nl_DASH_t))){
var temp__5533__auto___8493 = cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5533__auto___8493)){
var tws_8494 = temp__5533__auto___8493;
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws_8494);
} else {
}
} else {
}

(cljs.pprint.write_token.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.write_token.cljs$core$IFn$_invoke$arity$2(this$,token) : cljs.pprint.write_token.call(null,this$,token));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(token));

var tws_8495 = cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_((function (){var and__3911__auto__ = force_trailing_whitespace;
if(cljs.core.truth_(and__3911__auto__)){
return tws_8495;
} else {
return and__3911__auto__;
}
})())){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws_8495);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,null);
} else {
}


var G__8496 = seq__8489;
var G__8497 = chunk__8490;
var G__8498 = count__8491;
var G__8499 = (i__8492 + (1));
seq__8489 = G__8496;
chunk__8490 = G__8497;
count__8491 = G__8498;
i__8492 = G__8499;
continue;
} else {
var temp__5535__auto__ = cljs.core.seq(seq__8489);
if(temp__5535__auto__){
var seq__8489__$1 = temp__5535__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__8489__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__8489__$1);
var G__8500 = cljs.core.chunk_rest(seq__8489__$1);
var G__8501 = c__4319__auto__;
var G__8502 = cljs.core.count(c__4319__auto__);
var G__8503 = (0);
seq__8489 = G__8500;
chunk__8490 = G__8501;
count__8491 = G__8502;
i__8492 = G__8503;
continue;
} else {
var token = cljs.core.first(seq__8489__$1);
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(token),cljs.core.cst$kw$nl_DASH_t))){
var temp__5533__auto___8504 = cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5533__auto___8504)){
var tws_8505 = temp__5533__auto___8504;
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws_8505);
} else {
}
} else {
}

(cljs.pprint.write_token.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.write_token.cljs$core$IFn$_invoke$arity$2(this$,token) : cljs.pprint.write_token.call(null,this$,token));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(token));

var tws_8506 = cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_((function (){var and__3911__auto__ = force_trailing_whitespace;
if(cljs.core.truth_(and__3911__auto__)){
return tws_8506;
} else {
return and__3911__auto__;
}
})())){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws_8506);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,null);
} else {
}


var G__8507 = cljs.core.next(seq__8489__$1);
var G__8508 = null;
var G__8509 = (0);
var G__8510 = (0);
seq__8489 = G__8507;
chunk__8490 = G__8508;
count__8491 = G__8509;
i__8492 = G__8510;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.pprint.tokens_fit_QMARK_ = (function cljs$pprint$tokens_fit_QMARK_(this$,tokens){
var maxcol = cljs.pprint.get_max_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
return (((maxcol == null)) || (((cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)))) + cljs.pprint.buffer_length(tokens)) < maxcol)));
});
cljs.pprint.linear_nl_QMARK_ = (function cljs$pprint$linear_nl_QMARK_(this$,lb,section){
var or__3922__auto__ = cljs.core.deref(cljs.core.cst$kw$done_DASH_nl.cljs$core$IFn$_invoke$arity$1(lb));
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.not(cljs.pprint.tokens_fit_QMARK_(this$,section));
}
});
cljs.pprint.miser_nl_QMARK_ = (function cljs$pprint$miser_nl_QMARK_(this$,lb,section){
var miser_width = (cljs.pprint.get_miser_width.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.get_miser_width.cljs$core$IFn$_invoke$arity$1(this$) : cljs.pprint.get_miser_width.call(null,this$));
var maxcol = cljs.pprint.get_max_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
var and__3911__auto__ = miser_width;
if(cljs.core.truth_(and__3911__auto__)){
var and__3911__auto____$1 = maxcol;
if(cljs.core.truth_(and__3911__auto____$1)){
var and__3911__auto____$2 = (cljs.core.deref(cljs.core.cst$kw$start_DASH_col.cljs$core$IFn$_invoke$arity$1(lb)) >= (maxcol - miser_width));
if(and__3911__auto____$2){
return cljs.pprint.linear_nl_QMARK_(this$,lb,section);
} else {
return and__3911__auto____$2;
}
} else {
return and__3911__auto____$1;
}
} else {
return and__3911__auto__;
}
});
if(typeof cljs.pprint.emit_nl_QMARK_ !== 'undefined'){
} else {
cljs.pprint.emit_nl_QMARK_ = (function (){var method_table__4382__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4383__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4384__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4385__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4386__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.pprint","emit-nl?"),((function (method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__,hierarchy__4386__auto__){
return (function (t,_,___$1,___$2){
return cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(t);
});})(method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__,hierarchy__4386__auto__))
,cljs.core.cst$kw$default,hierarchy__4386__auto__,method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__));
})();
}
cljs.pprint.emit_nl_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$linear,(function (newl,this$,section,_){
var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(newl);
return cljs.pprint.linear_nl_QMARK_(this$,lb,section);
}));
cljs.pprint.emit_nl_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$miser,(function (newl,this$,section,_){
var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(newl);
return cljs.pprint.miser_nl_QMARK_(this$,lb,section);
}));
cljs.pprint.emit_nl_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$fill,(function (newl,this$,section,subsection){
var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(newl);
var or__3922__auto__ = cljs.core.deref(cljs.core.cst$kw$intra_DASH_block_DASH_nl.cljs$core$IFn$_invoke$arity$1(lb));
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = cljs.core.not(cljs.pprint.tokens_fit_QMARK_(this$,subsection));
if(or__3922__auto____$1){
return or__3922__auto____$1;
} else {
return cljs.pprint.miser_nl_QMARK_(this$,lb,section);
}
}
}));
cljs.pprint.emit_nl_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$mandatory,(function (_,___$1,___$2,___$3){
return true;
}));
cljs.pprint.get_section = (function cljs$pprint$get_section(buffer){
var nl = cljs.core.first(buffer);
var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(nl);
var section = cljs.core.seq(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(((function (nl,lb){
return (function (p1__8511_SHARP_){
return cljs.core.not((function (){var and__3911__auto__ = cljs.pprint.nl_t_QMARK_(p1__8511_SHARP_);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.pprint.ancestor_QMARK_(cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(p1__8511_SHARP_),lb);
} else {
return and__3911__auto__;
}
})());
});})(nl,lb))
,cljs.core.next(buffer)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [section,cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((cljs.core.count(section) + (1)),buffer))], null);
});
cljs.pprint.get_sub_section = (function cljs$pprint$get_sub_section(buffer){
var nl = cljs.core.first(buffer);
var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(nl);
var section = cljs.core.seq(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(((function (nl,lb){
return (function (p1__8512_SHARP_){
var nl_lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(p1__8512_SHARP_);
return cljs.core.not((function (){var and__3911__auto__ = cljs.pprint.nl_t_QMARK_(p1__8512_SHARP_);
if(cljs.core.truth_(and__3911__auto__)){
var or__3922__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(nl_lb,lb);
if(or__3922__auto__){
return or__3922__auto__;
} else {
return cljs.pprint.ancestor_QMARK_(nl_lb,lb);
}
} else {
return and__3911__auto__;
}
})());
});})(nl,lb))
,cljs.core.next(buffer)));
return section;
});
cljs.pprint.update_nl_state = (function cljs$pprint$update_nl_state(lb){
cljs.core.reset_BANG_(cljs.core.cst$kw$intra_DASH_block_DASH_nl.cljs$core$IFn$_invoke$arity$1(lb),true);

cljs.core.reset_BANG_(cljs.core.cst$kw$done_DASH_nl.cljs$core$IFn$_invoke$arity$1(lb),true);

var lb__$1 = cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(lb);
while(true){
if(cljs.core.truth_(lb__$1)){
cljs.core.reset_BANG_(cljs.core.cst$kw$done_DASH_nl.cljs$core$IFn$_invoke$arity$1(lb__$1),true);

cljs.core.reset_BANG_(cljs.core.cst$kw$intra_DASH_block_DASH_nl.cljs$core$IFn$_invoke$arity$1(lb__$1),true);

var G__8513 = cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(lb__$1);
lb__$1 = G__8513;
continue;
} else {
return null;
}
break;
}
});
cljs.pprint.emit_nl = (function cljs$pprint$emit_nl(this$,nl){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.pprint.pp_newline());

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,null);

var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(nl);
var prefix = cljs.core.cst$kw$per_DASH_line_DASH_prefix.cljs$core$IFn$_invoke$arity$1(lb);
if(cljs.core.truth_(prefix)){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),prefix);
} else {
}

var istr_8514 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((cljs.core.deref(cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(lb)) - cljs.core.count(prefix))," "));
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),istr_8514);

return cljs.pprint.update_nl_state(lb);
});
cljs.pprint.split_at_newline = (function cljs$pprint$split_at_newline(tokens){
var pre = cljs.core.seq(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__8515_SHARP_){
return cljs.core.not(cljs.pprint.nl_t_QMARK_(p1__8515_SHARP_));
}),tokens));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pre,cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(cljs.core.count(pre),tokens))], null);
});
cljs.pprint.write_token_string = (function cljs$pprint$write_token_string(this$,tokens){
var vec__8516 = cljs.pprint.split_at_newline(tokens);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8516,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8516,(1),null);
if(cljs.core.truth_(a)){
cljs.pprint.write_tokens(this$,a,false);
} else {
}

if(cljs.core.truth_(b)){
var vec__8519 = cljs.pprint.get_section(b);
var section = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8519,(0),null);
var remainder = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8519,(1),null);
var newl = cljs.core.first(b);
var do_nl = (function (){var G__8522 = newl;
var G__8523 = this$;
var G__8524 = section;
var G__8525 = cljs.pprint.get_sub_section(b);
return (cljs.pprint.emit_nl_QMARK_.cljs$core$IFn$_invoke$arity$4 ? cljs.pprint.emit_nl_QMARK_.cljs$core$IFn$_invoke$arity$4(G__8522,G__8523,G__8524,G__8525) : cljs.pprint.emit_nl_QMARK_.call(null,G__8522,G__8523,G__8524,G__8525));
})();
var result = (cljs.core.truth_(do_nl)?(function (){
cljs.pprint.emit_nl(this$,newl);

return cljs.core.next(b);
})()
:b);
var long_section = cljs.core.not(cljs.pprint.tokens_fit_QMARK_(this$,result));
var result__$1 = ((long_section)?(function (){var rem2 = (cljs.pprint.write_token_string.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.write_token_string.cljs$core$IFn$_invoke$arity$2(this$,section) : cljs.pprint.write_token_string.call(null,this$,section));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rem2,section)){
cljs.pprint.write_tokens(this$,section,false);

return remainder;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(rem2,remainder));
}
})():result);
return result__$1;
} else {
return null;
}
});
cljs.pprint.write_line = (function cljs$pprint$write_line(this$){
var buffer = cljs.core.cst$kw$buffer.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
while(true){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$buffer,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,buffer));

if(cljs.core.not(cljs.pprint.tokens_fit_QMARK_(this$,buffer))){
var new_buffer = cljs.pprint.write_token_string(this$,buffer);
if(!((buffer === new_buffer))){
var G__8526 = new_buffer;
buffer = G__8526;
continue;
} else {
return null;
}
} else {
return null;
}
break;
}
});
cljs.pprint.add_to_buffer = (function cljs$pprint$add_to_buffer(this$,token){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$buffer,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$buffer.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),token));

if(cljs.core.not(cljs.pprint.tokens_fit_QMARK_(this$,cljs.core.cst$kw$buffer.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)))))){
return cljs.pprint.write_line(this$);
} else {
return null;
}
});
cljs.pprint.write_buffered_output = (function cljs$pprint$write_buffered_output(this$){
cljs.pprint.write_line(this$);

var temp__5533__auto__ = cljs.core.cst$kw$buffer.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5533__auto__)){
var buf = temp__5533__auto__;
cljs.pprint.write_tokens(this$,buf,true);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$buffer,cljs.core.PersistentVector.EMPTY);
} else {
return null;
}
});
cljs.pprint.write_white_space = (function cljs$pprint$write_white_space(this$){
var temp__5535__auto__ = cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5535__auto__)){
var tws = temp__5535__auto__;
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,null);
} else {
return null;
}
});
cljs.pprint.write_initial_lines = (function cljs$pprint$write_initial_lines(this$,s){
var lines = clojure.string.split.cljs$core$IFn$_invoke$arity$3(s,"\n",(-1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(lines),(1))){
return s;
} else {
var prefix = cljs.core.cst$kw$per_DASH_line_DASH_prefix.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.cst$kw$logical_DASH_blocks.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)))));
var l = cljs.core.first(lines);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$buffering,cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))))){
var oldpos_8531 = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
var newpos_8532 = (oldpos_8531 + cljs.core.count(l));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$pos,newpos_8532);

cljs.pprint.add_to_buffer(this$,cljs.pprint.make_buffer_blob(l,null,oldpos_8531,newpos_8532));

cljs.pprint.write_buffered_output(this$);
} else {
cljs.pprint.write_white_space(this$);

cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),l);
}

cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),"\n");

var seq__8527_8533 = cljs.core.seq(cljs.core.next(cljs.core.butlast(lines)));
var chunk__8528_8534 = null;
var count__8529_8535 = (0);
var i__8530_8536 = (0);
while(true){
if((i__8530_8536 < count__8529_8535)){
var l_8537__$1 = chunk__8528_8534.cljs$core$IIndexed$_nth$arity$2(null,i__8530_8536);
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),l_8537__$1);

cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.pprint.pp_newline());

if(cljs.core.truth_(prefix)){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),prefix);
} else {
}


var G__8538 = seq__8527_8533;
var G__8539 = chunk__8528_8534;
var G__8540 = count__8529_8535;
var G__8541 = (i__8530_8536 + (1));
seq__8527_8533 = G__8538;
chunk__8528_8534 = G__8539;
count__8529_8535 = G__8540;
i__8530_8536 = G__8541;
continue;
} else {
var temp__5535__auto___8542 = cljs.core.seq(seq__8527_8533);
if(temp__5535__auto___8542){
var seq__8527_8543__$1 = temp__5535__auto___8542;
if(cljs.core.chunked_seq_QMARK_(seq__8527_8543__$1)){
var c__4319__auto___8544 = cljs.core.chunk_first(seq__8527_8543__$1);
var G__8545 = cljs.core.chunk_rest(seq__8527_8543__$1);
var G__8546 = c__4319__auto___8544;
var G__8547 = cljs.core.count(c__4319__auto___8544);
var G__8548 = (0);
seq__8527_8533 = G__8545;
chunk__8528_8534 = G__8546;
count__8529_8535 = G__8547;
i__8530_8536 = G__8548;
continue;
} else {
var l_8549__$1 = cljs.core.first(seq__8527_8543__$1);
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),l_8549__$1);

cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.pprint.pp_newline());

if(cljs.core.truth_(prefix)){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),prefix);
} else {
}


var G__8550 = cljs.core.next(seq__8527_8543__$1);
var G__8551 = null;
var G__8552 = (0);
var G__8553 = (0);
seq__8527_8533 = G__8550;
chunk__8528_8534 = G__8551;
count__8529_8535 = G__8552;
i__8530_8536 = G__8553;
continue;
}
} else {
}
}
break;
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$buffering,cljs.core.cst$kw$writing);

return cljs.core.last(lines);
}
});
cljs.pprint.p_write_char = (function cljs$pprint$p_write_char(this$,c){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.core.cst$kw$writing)){
cljs.pprint.write_white_space(this$);

return cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),c);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c,"\n")){
return cljs.pprint.write_initial_lines(this$,"\n");
} else {
var oldpos = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
var newpos = (oldpos + (1));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$pos,newpos);

return cljs.pprint.add_to_buffer(this$,cljs.pprint.make_buffer_blob(cljs.core.char$(c),null,oldpos,newpos));
}
}
});
cljs.pprint.pretty_writer = (function cljs$pprint$pretty_writer(writer,max_columns,miser_width){
var lb = (new cljs.pprint.logical_block(null,null,cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)),cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false),null,null,null,null,null,null,null));
var fields = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$logical_DASH_blocks,cljs.core.cst$kw$miser_DASH_width,cljs.core.cst$kw$buffer_DASH_block,cljs.core.cst$kw$pretty_DASH_writer,cljs.core.cst$kw$sections,cljs.core.cst$kw$mode,cljs.core.cst$kw$pos,cljs.core.cst$kw$trailing_DASH_white_DASH_space,cljs.core.cst$kw$base,cljs.core.cst$kw$buffer_DASH_level,cljs.core.cst$kw$buffer],[lb,miser_width,lb,true,null,cljs.core.cst$kw$writing,(0),null,cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2(writer,max_columns),(1),cljs.core.PersistentVector.EMPTY]));
if(typeof cljs.pprint.t_cljs$pprint8554 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.pprint.IPrettyFlush}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint8554 = (function (writer,max_columns,miser_width,lb,fields,meta8555){
this.writer = writer;
this.max_columns = max_columns;
this.miser_width = miser_width;
this.lb = lb;
this.fields = fields;
this.meta8555 = meta8555;
this.cljs$lang$protocol_mask$partition0$ = 1074167808;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint8554.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (lb,fields){
return (function (_8556,meta8555__$1){
var self__ = this;
var _8556__$1 = this;
return (new cljs.pprint.t_cljs$pprint8554(self__.writer,self__.max_columns,self__.miser_width,self__.lb,self__.fields,meta8555__$1));
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint8554.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (lb,fields){
return (function (_8556){
var self__ = this;
var _8556__$1 = this;
return self__.meta8555;
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint8554.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (lb,fields){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.fields;
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint8554.prototype.cljs$core$IWriter$_write$arity$2 = ((function (lb,fields){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__8557 = cljs.core._EQ_;
var expr__8558 = cljs.core.type(x);
if(cljs.core.truth_((pred__8557.cljs$core$IFn$_invoke$arity$2 ? pred__8557.cljs$core$IFn$_invoke$arity$2(String,expr__8558) : pred__8557.call(null,String,expr__8558)))){
var s0 = cljs.pprint.write_initial_lines(this$__$1,x);
var s = clojure.string.replace_first(s0,/\s+$/,"");
var white_space = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s0,cljs.core.count(s));
var mode = cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$__$1)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.cst$kw$writing)){
cljs.pprint.write_white_space(this$__$1);

cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$__$1))),s);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$__$1),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,white_space);
} else {
var oldpos = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$__$1)));
var newpos = (oldpos + cljs.core.count(s0));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$__$1),cljs.core.assoc,cljs.core.cst$kw$pos,newpos);

return cljs.pprint.add_to_buffer(this$__$1,cljs.pprint.make_buffer_blob(s,white_space,oldpos,newpos));
}
} else {
if(cljs.core.truth_((pred__8557.cljs$core$IFn$_invoke$arity$2 ? pred__8557.cljs$core$IFn$_invoke$arity$2(Number,expr__8558) : pred__8557.call(null,Number,expr__8558)))){
return cljs.pprint.p_write_char(this$__$1,x);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__8558)].join('')));
}
}
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint8554.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (lb,fields){
return (function (this$){
var self__ = this;
var this$__$1 = this;
this$__$1.cljs$pprint$IPrettyFlush$_ppflush$arity$1(null);

return cljs.core._flush(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$__$1))));
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint8554.prototype.cljs$pprint$IPrettyFlush$ = cljs.core.PROTOCOL_SENTINEL;

cljs.pprint.t_cljs$pprint8554.prototype.cljs$pprint$IPrettyFlush$_ppflush$arity$1 = ((function (lb,fields){
return (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$__$1))),cljs.core.cst$kw$buffering)){
cljs.pprint.write_tokens(this$__$1,cljs.core.cst$kw$buffer.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$__$1))),true);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$__$1),cljs.core.assoc,cljs.core.cst$kw$buffer,cljs.core.PersistentVector.EMPTY);
} else {
return cljs.pprint.write_white_space(this$__$1);
}
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint8554.getBasis = ((function (lb,fields){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$writer,cljs.core.cst$sym$max_DASH_columns,cljs.core.cst$sym$miser_DASH_width,cljs.core.cst$sym$lb,cljs.core.cst$sym$fields,cljs.core.cst$sym$meta8555], null);
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint8554.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint8554.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint8554";

cljs.pprint.t_cljs$pprint8554.cljs$lang$ctorPrWriter = ((function (lb,fields){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.pprint/t_cljs$pprint8554");
});})(lb,fields))
;

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint8554.
 */
cljs.pprint.__GT_t_cljs$pprint8554 = ((function (lb,fields){
return (function cljs$pprint$pretty_writer_$___GT_t_cljs$pprint8554(writer__$1,max_columns__$1,miser_width__$1,lb__$1,fields__$1,meta8555){
return (new cljs.pprint.t_cljs$pprint8554(writer__$1,max_columns__$1,miser_width__$1,lb__$1,fields__$1,meta8555));
});})(lb,fields))
;

}

return (new cljs.pprint.t_cljs$pprint8554(writer,max_columns,miser_width,lb,fields,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.pprint.start_block = (function cljs$pprint$start_block(this$,prefix,per_line_prefix,suffix){
var lb = (new cljs.pprint.logical_block(cljs.core.cst$kw$logical_DASH_blocks.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),null,cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)),cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false),prefix,per_line_prefix,suffix,null,null,null,null));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$logical_DASH_blocks,lb);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.core.cst$kw$writing)){
cljs.pprint.write_white_space(this$);

var temp__5535__auto___8561 = cljs.core.cst$kw$logical_DASH_block_DASH_callback.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5535__auto___8561)){
var cb_8562 = temp__5535__auto___8561;
var G__8560_8563 = cljs.core.cst$kw$start;
(cb_8562.cljs$core$IFn$_invoke$arity$1 ? cb_8562.cljs$core$IFn$_invoke$arity$1(G__8560_8563) : cb_8562.call(null,G__8560_8563));
} else {
}

if(cljs.core.truth_(prefix)){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),prefix);
} else {
}

var col = cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
cljs.core.reset_BANG_(cljs.core.cst$kw$start_DASH_col.cljs$core$IFn$_invoke$arity$1(lb),col);

return cljs.core.reset_BANG_(cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(lb),col);
} else {
var oldpos = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
var newpos = (oldpos + (cljs.core.truth_(prefix)?cljs.core.count(prefix):(0)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$pos,newpos);

return cljs.pprint.add_to_buffer(this$,cljs.pprint.make_start_block_t(lb,oldpos,newpos));
}
});
cljs.pprint.end_block = (function cljs$pprint$end_block(this$){
var lb = cljs.core.cst$kw$logical_DASH_blocks.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
var suffix = cljs.core.cst$kw$suffix.cljs$core$IFn$_invoke$arity$1(lb);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.core.cst$kw$writing)){
cljs.pprint.write_white_space(this$);

if(cljs.core.truth_(suffix)){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),suffix);
} else {
}

var temp__5535__auto___8565 = cljs.core.cst$kw$logical_DASH_block_DASH_callback.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5535__auto___8565)){
var cb_8566 = temp__5535__auto___8565;
var G__8564_8567 = cljs.core.cst$kw$end;
(cb_8566.cljs$core$IFn$_invoke$arity$1 ? cb_8566.cljs$core$IFn$_invoke$arity$1(G__8564_8567) : cb_8566.call(null,G__8564_8567));
} else {
}
} else {
var oldpos_8568 = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
var newpos_8569 = (oldpos_8568 + (cljs.core.truth_(suffix)?cljs.core.count(suffix):(0)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$pos,newpos_8569);

cljs.pprint.add_to_buffer(this$,cljs.pprint.make_end_block_t(lb,oldpos_8568,newpos_8569));
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$logical_DASH_blocks,cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(lb));
});
cljs.pprint.nl = (function cljs$pprint$nl(this$,type){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$mode,cljs.core.cst$kw$buffering);

var pos = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
return cljs.pprint.add_to_buffer(this$,cljs.pprint.make_nl_t(type,cljs.core.cst$kw$logical_DASH_blocks.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),pos,pos));
});
cljs.pprint.indent = (function cljs$pprint$indent(this$,relative_to,offset){
var lb = cljs.core.cst$kw$logical_DASH_blocks.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.core.cst$kw$writing)){
cljs.pprint.write_white_space(this$);

return cljs.core.reset_BANG_(cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(lb),(offset + (function (){var pred__8570 = cljs.core._EQ_;
var expr__8571 = relative_to;
if(cljs.core.truth_((function (){var G__8573 = cljs.core.cst$kw$block;
var G__8574 = expr__8571;
return (pred__8570.cljs$core$IFn$_invoke$arity$2 ? pred__8570.cljs$core$IFn$_invoke$arity$2(G__8573,G__8574) : pred__8570.call(null,G__8573,G__8574));
})())){
return cljs.core.deref(cljs.core.cst$kw$start_DASH_col.cljs$core$IFn$_invoke$arity$1(lb));
} else {
if(cljs.core.truth_((function (){var G__8575 = cljs.core.cst$kw$current;
var G__8576 = expr__8571;
return (pred__8570.cljs$core$IFn$_invoke$arity$2 ? pred__8570.cljs$core$IFn$_invoke$arity$2(G__8575,G__8576) : pred__8570.call(null,G__8575,G__8576));
})())){
return cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__8571)].join('')));
}
}
})()));
} else {
var pos = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
return cljs.pprint.add_to_buffer(this$,cljs.pprint.make_indent_t(lb,relative_to,offset,pos,pos));
}
});
cljs.pprint.get_miser_width = (function cljs$pprint$get_miser_width(this$){
return cljs.core.cst$kw$miser_DASH_width.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
});
/**
 * Bind to true if you want write to use pretty printing
 */
cljs.pprint._STAR_print_pretty_STAR_ = true;
if(typeof cljs.pprint._STAR_print_pprint_dispatch_STAR_ !== 'undefined'){
} else {
/**
 * The pretty print dispatch function. Use with-pprint-dispatch or
 * set-pprint-dispatch to modify.
 */
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = null;
}
/**
 * Pretty printing will try to avoid anything going beyond this column.
 * Set it to nil to have pprint let the line be arbitrarily long. This will ignore all
 * non-mandatory newlines.
 */
cljs.pprint._STAR_print_right_margin_STAR_ = (72);
/**
 * The column at which to enter miser style. Depending on the dispatch table,
 * miser style add newlines in more places to try to keep lines short allowing for further
 * levels of nesting.
 */
cljs.pprint._STAR_print_miser_width_STAR_ = (40);
/**
 * Maximum number of lines to print in a pretty print instance (N.B. This is not yet used)
 */
cljs.pprint._STAR_print_lines_STAR_ = null;
/**
 * Mark circular structures (N.B. This is not yet used)
 */
cljs.pprint._STAR_print_circle_STAR_ = null;
/**
 * Mark repeated structures rather than repeat them (N.B. This is not yet used)
 */
cljs.pprint._STAR_print_shared_STAR_ = null;
/**
 * Don't print namespaces with symbols. This is particularly useful when
 * pretty printing the results of macro expansions
 */
cljs.pprint._STAR_print_suppress_namespaces_STAR_ = null;
/**
 * Print a radix specifier in front of integers and rationals. If *print-base* is 2, 8,
 * or 16, then the radix specifier used is #b, #o, or #x, respectively. Otherwise the
 * radix specifier is in the form #XXr where XX is the decimal value of *print-base* 
 */
cljs.pprint._STAR_print_radix_STAR_ = null;
/**
 * The base to use for printing integers and rationals.
 */
cljs.pprint._STAR_print_base_STAR_ = (10);
cljs.pprint._STAR_current_level_STAR_ = (0);
cljs.pprint._STAR_current_length_STAR_ = null;
cljs.pprint.table_ize = (function cljs$pprint$table_ize(t,m){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__8577_SHARP_){
var temp__5535__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(t,cljs.core.key(p1__8577_SHARP_));
if(cljs.core.truth_(temp__5535__auto__)){
var v = temp__5535__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,cljs.core.val(p1__8577_SHARP_)], null);
} else {
return null;
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m], 0)));
});
/**
 * Return true iff x is a PrettyWriter
 */
cljs.pprint.pretty_writer_QMARK_ = (function cljs$pprint$pretty_writer_QMARK_(x){
var and__3911__auto__ = ((!((x == null)))?(((((x.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IDeref$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x));
if(and__3911__auto__){
return cljs.core.cst$kw$pretty_DASH_writer.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(x)));
} else {
return and__3911__auto__;
}
});
/**
 * Wrap base-writer in a PrettyWriter with the specified right-margin and miser-width
 */
cljs.pprint.make_pretty_writer = (function cljs$pprint$make_pretty_writer(base_writer,right_margin,miser_width){
return cljs.pprint.pretty_writer(base_writer,right_margin,miser_width);
});
/**
 * Write an object to *out* subject to the current bindings of the printer control
 * variables. Use the kw-args argument to override individual variables for this call (and
 * any recursive calls).
 * 
 * *out* must be a PrettyWriter if pretty printing is enabled. This is the responsibility
 * of the caller.
 * 
 * This method is primarily intended for use by pretty print dispatch functions that
 * already know that the pretty printer will have set up their environment appropriately.
 * Normal library clients should use the standard "write" interface. 
 */
cljs.pprint.write_out = (function cljs$pprint$write_out(object){
var length_reached = (function (){var and__3911__auto__ = cljs.pprint._STAR_current_length_STAR_;
if(cljs.core.truth_(and__3911__auto__)){
var and__3911__auto____$1 = cljs.core._STAR_print_length_STAR_;
if(cljs.core.truth_(and__3911__auto____$1)){
return (cljs.pprint._STAR_current_length_STAR_ >= cljs.core._STAR_print_length_STAR_);
} else {
return and__3911__auto____$1;
}
} else {
return and__3911__auto__;
}
})();
if(!(cljs.pprint._STAR_print_pretty_STAR_)){
(cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1(object) : cljs.pprint.pr.call(null,object));
} else {
if(cljs.core.truth_(length_reached)){
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
} else {
if(cljs.core.truth_(cljs.pprint._STAR_current_length_STAR_)){
cljs.pprint._STAR_current_length_STAR_ = (cljs.pprint._STAR_current_length_STAR_ + (1));
} else {
}

(cljs.pprint._STAR_print_pprint_dispatch_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint._STAR_print_pprint_dispatch_STAR_.cljs$core$IFn$_invoke$arity$1(object) : cljs.pprint._STAR_print_pprint_dispatch_STAR_.call(null,object));
}
}

return length_reached;
});
/**
 * Write an object subject to the current bindings of the printer control variables.
 * Use the kw-args argument to override individual variables for this call (and any
 * recursive calls). Returns the string result if :stream is nil or nil otherwise.
 * 
 * The following keyword arguments can be passed with values:
 *   Keyword              Meaning                              Default value
 *   :stream              Writer for output or nil             true (indicates *out*)
 *   :base                Base to use for writing rationals    Current value of *print-base*
 *   :circle*             If true, mark circular structures    Current value of *print-circle*
 *   :length              Maximum elements to show in sublists Current value of *print-length*
 *   :level               Maximum depth                        Current value of *print-level*
 *   :lines*              Maximum lines of output              Current value of *print-lines*
 *   :miser-width         Width to enter miser mode            Current value of *print-miser-width*
 *   :dispatch            The pretty print dispatch function   Current value of *print-pprint-dispatch*
 *   :pretty              If true, do pretty printing          Current value of *print-pretty*
 *   :radix               If true, prepend a radix specifier   Current value of *print-radix*
 *   :readably*           If true, print readably              Current value of *print-readably*
 *   :right-margin        The column for the right margin      Current value of *print-right-margin*
 *   :suppress-namespaces If true, no namespaces in symbols    Current value of *print-suppress-namespaces*
 * 
 *   * = not yet supported
 */
cljs.pprint.write = (function cljs$pprint$write(var_args){
var args__4502__auto__ = [];
var len__4499__auto___8596 = arguments.length;
var i__4500__auto___8597 = (0);
while(true){
if((i__4500__auto___8597 < len__4499__auto___8596)){
args__4502__auto__.push((arguments[i__4500__auto___8597]));

var G__8598 = (i__4500__auto___8597 + (1));
i__4500__auto___8597 = G__8598;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs.pprint.write.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs.pprint.write.cljs$core$IFn$_invoke$arity$variadic = (function (object,kw_args){
var options = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stream,true], null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,kw_args)], 0));
var _STAR_print_base_STAR_8582 = cljs.pprint._STAR_print_base_STAR_;
var _STAR_print_circle_STAR_8583 = cljs.pprint._STAR_print_circle_STAR_;
var _STAR_print_length_STAR_8584 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR_8585 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_lines_STAR_8586 = cljs.pprint._STAR_print_lines_STAR_;
var _STAR_print_miser_width_STAR_8587 = cljs.pprint._STAR_print_miser_width_STAR_;
var _STAR_print_pprint_dispatch_STAR_8588 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
var _STAR_print_pretty_STAR_8589 = cljs.pprint._STAR_print_pretty_STAR_;
var _STAR_print_radix_STAR_8590 = cljs.pprint._STAR_print_radix_STAR_;
var _STAR_print_readably_STAR_8591 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_right_margin_STAR_8592 = cljs.pprint._STAR_print_right_margin_STAR_;
var _STAR_print_suppress_namespaces_STAR_8593 = cljs.pprint._STAR_print_suppress_namespaces_STAR_;
cljs.pprint._STAR_print_base_STAR_ = cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_base_STAR_);

cljs.pprint._STAR_print_circle_STAR_ = cljs.core.cst$kw$circle.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_circle_STAR_);

cljs.core._STAR_print_length_STAR_ = cljs.core.cst$kw$length.cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_length_STAR_);

cljs.core._STAR_print_level_STAR_ = cljs.core.cst$kw$level.cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_level_STAR_);

cljs.pprint._STAR_print_lines_STAR_ = cljs.core.cst$kw$lines.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_lines_STAR_);

cljs.pprint._STAR_print_miser_width_STAR_ = cljs.core.cst$kw$miser_DASH_width.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_miser_width_STAR_);

cljs.pprint._STAR_print_pprint_dispatch_STAR_ = cljs.core.cst$kw$dispatch.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_pprint_dispatch_STAR_);

cljs.pprint._STAR_print_pretty_STAR_ = cljs.core.cst$kw$pretty.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_pretty_STAR_);

cljs.pprint._STAR_print_radix_STAR_ = cljs.core.cst$kw$radix.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_radix_STAR_);

cljs.core._STAR_print_readably_STAR_ = cljs.core.cst$kw$readably.cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_readably_STAR_);

cljs.pprint._STAR_print_right_margin_STAR_ = cljs.core.cst$kw$right_DASH_margin.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_right_margin_STAR_);

cljs.pprint._STAR_print_suppress_namespaces_STAR_ = cljs.core.cst$kw$suppress_DASH_namespaces.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_suppress_namespaces_STAR_);

try{try{var sb = (new goog.string.StringBuffer());
var optval = ((cljs.core.contains_QMARK_(options,cljs.core.cst$kw$stream))?cljs.core.cst$kw$stream.cljs$core$IFn$_invoke$arity$1(options):true);
var base_writer = ((((optval === true) || ((optval == null))))?(new cljs.core.StringBufferWriter(sb)):optval);
if(cljs.pprint._STAR_print_pretty_STAR_){
var base_writer__8137__auto___8599 = base_writer;
var new_writer__8138__auto___8600 = cljs.core.not(cljs.pprint.pretty_writer_QMARK_(base_writer__8137__auto___8599));
var _STAR_out_STAR_8594_8601 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = ((new_writer__8138__auto___8600)?cljs.pprint.make_pretty_writer(base_writer__8137__auto___8599,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_):base_writer__8137__auto___8599);

try{cljs.pprint.write_out(object);

cljs.pprint._ppflush(cljs.core._STAR_out_STAR_);
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_8594_8601;
}} else {
var _STAR_out_STAR_8595_8602 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = base_writer;

try{(cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1(object) : cljs.pprint.pr.call(null,object));
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_8595_8602;
}}

if(optval === true){
cljs.core.string_print([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''));
} else {
}

if((optval == null)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join('');
} else {
return null;
}
}finally {}}finally {cljs.pprint._STAR_print_suppress_namespaces_STAR_ = _STAR_print_suppress_namespaces_STAR_8593;

cljs.pprint._STAR_print_right_margin_STAR_ = _STAR_print_right_margin_STAR_8592;

cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR_8591;

cljs.pprint._STAR_print_radix_STAR_ = _STAR_print_radix_STAR_8590;

cljs.pprint._STAR_print_pretty_STAR_ = _STAR_print_pretty_STAR_8589;

cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR_8588;

cljs.pprint._STAR_print_miser_width_STAR_ = _STAR_print_miser_width_STAR_8587;

cljs.pprint._STAR_print_lines_STAR_ = _STAR_print_lines_STAR_8586;

cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_8585;

cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR_8584;

cljs.pprint._STAR_print_circle_STAR_ = _STAR_print_circle_STAR_8583;

cljs.pprint._STAR_print_base_STAR_ = _STAR_print_base_STAR_8582;
}});

cljs.pprint.write.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.pprint.write.cljs$lang$applyTo = (function (seq8580){
var G__8581 = cljs.core.first(seq8580);
var seq8580__$1 = cljs.core.next(seq8580);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8581,seq8580__$1);
});

cljs.pprint.pprint = (function cljs$pprint$pprint(var_args){
var G__8604 = arguments.length;
switch (G__8604) {
case 1:
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1 = (function (object){
var sb = (new goog.string.StringBuffer());
var _STAR_out_STAR_8605 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = (new cljs.core.StringBufferWriter(sb));

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2(object,cljs.core._STAR_out_STAR_);

return cljs.core.string_print([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''));
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_8605;
}});

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2 = (function (object,writer){
var base_writer__8137__auto__ = writer;
var new_writer__8138__auto__ = cljs.core.not(cljs.pprint.pretty_writer_QMARK_(base_writer__8137__auto__));
var _STAR_out_STAR_8606 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = ((new_writer__8138__auto__)?cljs.pprint.make_pretty_writer(base_writer__8137__auto__,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_):base_writer__8137__auto__);

try{var _STAR_print_pretty_STAR_8607_8609 = cljs.pprint._STAR_print_pretty_STAR_;
cljs.pprint._STAR_print_pretty_STAR_ = true;

try{cljs.pprint.write_out(object);
}finally {cljs.pprint._STAR_print_pretty_STAR_ = _STAR_print_pretty_STAR_8607_8609;
}
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.pprint.get_column(cljs.core._STAR_out_STAR_)))){
cljs.core._write(cljs.core._STAR_out_STAR_,"\n");
} else {
}

return cljs.pprint._ppflush(cljs.core._STAR_out_STAR_);
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_8606;
}});

cljs.pprint.pprint.cljs$lang$maxFixedArity = 2;

cljs.pprint.set_pprint_dispatch = (function cljs$pprint$set_pprint_dispatch(function$){
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = function$;

return null;
});
cljs.pprint.check_enumerated_arg = (function cljs$pprint$check_enumerated_arg(arg,choices){
if(cljs.core.not((choices.cljs$core$IFn$_invoke$arity$1 ? choices.cljs$core$IFn$_invoke$arity$1(arg) : choices.call(null,arg)))){
throw (new Error(["Bad argument: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg),". It must be one of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(choices)].join('')));
} else {
return null;
}
});
cljs.pprint.level_exceeded = (function cljs$pprint$level_exceeded(){
var and__3911__auto__ = cljs.core._STAR_print_level_STAR_;
if(cljs.core.truth_(and__3911__auto__)){
return (cljs.pprint._STAR_current_level_STAR_ >= cljs.core._STAR_print_level_STAR_);
} else {
return and__3911__auto__;
}
});
/**
 * Print a conditional newline to a pretty printing stream. kind specifies if the
 *   newline is :linear, :miser, :fill, or :mandatory.
 * 
 *   This function is intended for use when writing custom dispatch functions.
 * 
 *   Output is sent to *out* which must be a pretty printing writer.
 */
cljs.pprint.pprint_newline = (function cljs$pprint$pprint_newline(kind){
cljs.pprint.check_enumerated_arg(kind,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$mandatory,null,cljs.core.cst$kw$miser,null,cljs.core.cst$kw$fill,null,cljs.core.cst$kw$linear,null], null), null));

return cljs.pprint.nl(cljs.core._STAR_out_STAR_,kind);
});
/**
 * Create an indent at this point in the pretty printing stream. This defines how
 * following lines are indented. relative-to can be either :block or :current depending
 * whether the indent should be computed relative to the start of the logical block or
 * the current column position. n is an offset.
 * 
 * This function is intended for use when writing custom dispatch functions.
 * 
 * Output is sent to *out* which must be a pretty printing writer.
 */
cljs.pprint.pprint_indent = (function cljs$pprint$pprint_indent(relative_to,n){
cljs.pprint.check_enumerated_arg(relative_to,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$block,null,cljs.core.cst$kw$current,null], null), null));

return cljs.pprint.indent(cljs.core._STAR_out_STAR_,relative_to,n);
});
/**
 * Tab at this point in the pretty printing stream. kind specifies whether the tab
 * is :line, :section, :line-relative, or :section-relative.
 * 
 * Colnum and colinc specify the target column and the increment to move the target
 * forward if the output is already past the original target.
 * 
 * This function is intended for use when writing custom dispatch functions.
 * 
 * Output is sent to *out* which must be a pretty printing writer.
 * 
 * THIS FUNCTION IS NOT YET IMPLEMENTED.
 */
cljs.pprint.pprint_tab = (function cljs$pprint$pprint_tab(kind,colnum,colinc){
cljs.pprint.check_enumerated_arg(kind,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$section,null,cljs.core.cst$kw$line,null,cljs.core.cst$kw$line_DASH_relative,null,cljs.core.cst$kw$section_DASH_relative,null], null), null));

throw (new Error("pprint-tab is not yet implemented"));
});
/**
 * An implementation of a Common Lisp compatible format function. cl-format formats its
 * arguments to an output stream or string based on the format control string given. It
 * supports sophisticated formatting of structured data.
 * 
 * Writer satisfies IWriter, true to output via *print-fn* or nil to output
 * to a string, format-in is the format control string and the remaining arguments
 * are the data to be formatted.
 * 
 * The format control string is a string to be output with embedded 'format directives'
 * describing how to format the various arguments passed in.
 * 
 * If writer is nil, cl-format returns the formatted result string. Otherwise, cl-format
 * returns nil.
 * 
 * For example:
 *  (let [results [46 38 22]]
 *      (cl-format true "There ~[are~;is~:;are~]~:* ~d result~:p: ~{~d~^, ~}~%"
 *                 (count results) results))
 * 
 * Prints via *print-fn*:
 *  There are 3 results: 46, 38, 22
 * 
 * Detailed documentation on format control strings is available in the "Common Lisp the
 * Language, 2nd edition", Chapter 22 (available online at:
 * http://www.cs.cmu.edu/afs/cs.cmu.edu/project/ai-repository/ai/html/cltl/clm/node200.html#SECTION002633000000000000000)
 * and in the Common Lisp HyperSpec at
 * http://www.lispworks.com/documentation/HyperSpec/Body/22_c.htm
 */
cljs.pprint.cl_format = (function cljs$pprint$cl_format(var_args){
var args__4502__auto__ = [];
var len__4499__auto___8613 = arguments.length;
var i__4500__auto___8614 = (0);
while(true){
if((i__4500__auto___8614 < len__4499__auto___8613)){
args__4502__auto__.push((arguments[i__4500__auto___8614]));

var G__8615 = (i__4500__auto___8614 + (1));
i__4500__auto___8614 = G__8615;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((2) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((2)),(0),null)):null);
return cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4503__auto__);
});

cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic = (function (writer,format_in,args){
var compiled_format = ((typeof format_in === 'string')?(cljs.pprint.compile_format.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.compile_format.cljs$core$IFn$_invoke$arity$1(format_in) : cljs.pprint.compile_format.call(null,format_in)):format_in);
var navigator = (cljs.pprint.init_navigator.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.init_navigator.cljs$core$IFn$_invoke$arity$1(args) : cljs.pprint.init_navigator.call(null,args));
return (cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$3 ? cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$3(writer,compiled_format,navigator) : cljs.pprint.execute_format.call(null,writer,compiled_format,navigator));
});

cljs.pprint.cl_format.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
cljs.pprint.cl_format.cljs$lang$applyTo = (function (seq8610){
var G__8611 = cljs.core.first(seq8610);
var seq8610__$1 = cljs.core.next(seq8610);
var G__8612 = cljs.core.first(seq8610__$1);
var seq8610__$2 = cljs.core.next(seq8610__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8611,G__8612,seq8610__$2);
});

cljs.pprint._STAR_format_str_STAR_ = null;
cljs.pprint.format_error = (function cljs$pprint$format_error(message,offset){
var full_message = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(message),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.pprint._STAR_format_str_STAR_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(offset," "))),"^",cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n")].join('');
throw Error(full_message);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.arg_navigator = (function (seq,rest,pos,__meta,__extmap,__hash){
this.seq = seq;
this.rest = rest;
this.pos = pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.arg_navigator.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4172__auto__,k__4173__auto__){
var self__ = this;
var this__4172__auto____$1 = this;
return this__4172__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4173__auto__,null);
});

cljs.pprint.arg_navigator.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4174__auto__,k8617,else__4175__auto__){
var self__ = this;
var this__4174__auto____$1 = this;
var G__8621 = k8617;
var G__8621__$1 = (((G__8621 instanceof cljs.core.Keyword))?G__8621.fqn:null);
switch (G__8621__$1) {
case "seq":
return self__.seq;

break;
case "rest":
return self__.rest;

break;
case "pos":
return self__.pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k8617,else__4175__auto__);

}
});

cljs.pprint.arg_navigator.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4186__auto__,writer__4187__auto__,opts__4188__auto__){
var self__ = this;
var this__4186__auto____$1 = this;
var pr_pair__4189__auto__ = ((function (this__4186__auto____$1){
return (function (keyval__4190__auto__){
return cljs.core.pr_sequential_writer(writer__4187__auto__,cljs.core.pr_writer,""," ","",opts__4188__auto__,keyval__4190__auto__);
});})(this__4186__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4187__auto__,pr_pair__4189__auto__,"#cljs.pprint.arg-navigator{",", ","}",opts__4188__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$seq,self__.seq],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$rest,self__.rest],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$pos,self__.pos],null))], null),self__.__extmap));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__8616){
var self__ = this;
var G__8616__$1 = this;
return (new cljs.core.RecordIter((0),G__8616__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$seq,cljs.core.cst$kw$rest,cljs.core.cst$kw$pos], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4170__auto__){
var self__ = this;
var this__4170__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.arg_navigator.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4167__auto__){
var self__ = this;
var this__4167__auto____$1 = this;
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.arg_navigator.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4176__auto__){
var self__ = this;
var this__4176__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4168__auto__){
var self__ = this;
var this__4168__auto____$1 = this;
var h__4030__auto__ = self__.__hash;
if(!((h__4030__auto__ == null))){
return h__4030__auto__;
} else {
var h__4030__auto____$1 = (function (){var fexpr__8622 = ((function (h__4030__auto__,this__4168__auto____$1){
return (function (coll__4169__auto__){
return (-402038447 ^ cljs.core.hash_unordered_coll(coll__4169__auto__));
});})(h__4030__auto__,this__4168__auto____$1))
;
return fexpr__8622(this__4168__auto____$1);
})();
self__.__hash = h__4030__auto____$1;

return h__4030__auto____$1;
}
});

cljs.pprint.arg_navigator.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this8618,other8619){
var self__ = this;
var this8618__$1 = this;
return ((!((other8619 == null))) && ((this8618__$1.constructor === other8619.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8618__$1.seq,other8619.seq)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8618__$1.rest,other8619.rest)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8618__$1.pos,other8619.pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8618__$1.__extmap,other8619.__extmap)));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4181__auto__,k__4182__auto__){
var self__ = this;
var this__4181__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$pos,null,cljs.core.cst$kw$seq,null,cljs.core.cst$kw$rest,null], null), null),k__4182__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4181__auto____$1),self__.__meta),k__4182__auto__);
} else {
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4182__auto__)),null));
}
});

cljs.pprint.arg_navigator.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4179__auto__,k__4180__auto__,G__8616){
var self__ = this;
var this__4179__auto____$1 = this;
var pred__8623 = cljs.core.keyword_identical_QMARK_;
var expr__8624 = k__4180__auto__;
if(cljs.core.truth_((function (){var G__8626 = cljs.core.cst$kw$seq;
var G__8627 = expr__8624;
return (pred__8623.cljs$core$IFn$_invoke$arity$2 ? pred__8623.cljs$core$IFn$_invoke$arity$2(G__8626,G__8627) : pred__8623.call(null,G__8626,G__8627));
})())){
return (new cljs.pprint.arg_navigator(G__8616,self__.rest,self__.pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__8628 = cljs.core.cst$kw$rest;
var G__8629 = expr__8624;
return (pred__8623.cljs$core$IFn$_invoke$arity$2 ? pred__8623.cljs$core$IFn$_invoke$arity$2(G__8628,G__8629) : pred__8623.call(null,G__8628,G__8629));
})())){
return (new cljs.pprint.arg_navigator(self__.seq,G__8616,self__.pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__8630 = cljs.core.cst$kw$pos;
var G__8631 = expr__8624;
return (pred__8623.cljs$core$IFn$_invoke$arity$2 ? pred__8623.cljs$core$IFn$_invoke$arity$2(G__8630,G__8631) : pred__8623.call(null,G__8630,G__8631));
})())){
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,G__8616,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4180__auto__,G__8616),null));
}
}
}
});

cljs.pprint.arg_navigator.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4184__auto__){
var self__ = this;
var this__4184__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$seq,self__.seq,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$rest,self__.rest,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$pos,self__.pos,null))], null),self__.__extmap));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4171__auto__,G__8616){
var self__ = this;
var this__4171__auto____$1 = this;
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,G__8616,self__.__extmap,self__.__hash));
});

cljs.pprint.arg_navigator.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4177__auto__,entry__4178__auto__){
var self__ = this;
var this__4177__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4178__auto__)){
return this__4177__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4178__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4178__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4177__auto____$1,entry__4178__auto__);
}
});

cljs.pprint.arg_navigator.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$seq,cljs.core.cst$sym$rest,cljs.core.cst$sym$pos], null);
});

cljs.pprint.arg_navigator.cljs$lang$type = true;

cljs.pprint.arg_navigator.cljs$lang$ctorPrSeq = (function (this__4208__auto__){
return (new cljs.core.List(null,"cljs.pprint/arg-navigator",null,(1),null));
});

cljs.pprint.arg_navigator.cljs$lang$ctorPrWriter = (function (this__4208__auto__,writer__4209__auto__){
return cljs.core._write(writer__4209__auto__,"cljs.pprint/arg-navigator");
});

/**
 * Positional factory function for cljs.pprint/arg-navigator.
 */
cljs.pprint.__GT_arg_navigator = (function cljs$pprint$__GT_arg_navigator(seq,rest,pos){
return (new cljs.pprint.arg_navigator(seq,rest,pos,null,null,null));
});

/**
 * Factory function for cljs.pprint/arg-navigator, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_arg_navigator = (function cljs$pprint$map__GT_arg_navigator(G__8620){
return (new cljs.pprint.arg_navigator(cljs.core.cst$kw$seq.cljs$core$IFn$_invoke$arity$1(G__8620),cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(G__8620),cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(G__8620),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__8620,cljs.core.cst$kw$seq,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$rest,cljs.core.cst$kw$pos], 0))),null));
});

/**
 * Create a new arg-navigator from the sequence with the position set to 0
 */
cljs.pprint.init_navigator = (function cljs$pprint$init_navigator(s){
var s__$1 = cljs.core.seq(s);
return (new cljs.pprint.arg_navigator(s__$1,s__$1,(0),null,null,null));
});
cljs.pprint.next_arg = (function cljs$pprint$next_arg(navigator){
var rst = cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator);
if(cljs.core.truth_(rst)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(rst),(new cljs.pprint.arg_navigator(cljs.core.cst$kw$seq.cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.next(rst),(cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator) + (1)),null,null,null))], null);
} else {
throw Error("Not enough arguments for format definition");
}
});
cljs.pprint.next_arg_or_nil = (function cljs$pprint$next_arg_or_nil(navigator){
var rst = cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator);
if(cljs.core.truth_(rst)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(rst),(new cljs.pprint.arg_navigator(cljs.core.cst$kw$seq.cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.next(rst),(cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator) + (1)),null,null,null))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,navigator], null);
}
});
cljs.pprint.get_format_arg = (function cljs$pprint$get_format_arg(navigator){
var vec__8633 = cljs.pprint.next_arg(navigator);
var raw_format = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8633,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8633,(1),null);
var compiled_format = ((typeof raw_format === 'string')?(cljs.pprint.compile_format.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.compile_format.cljs$core$IFn$_invoke$arity$1(raw_format) : cljs.pprint.compile_format.call(null,raw_format)):raw_format);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [compiled_format,navigator__$1], null);
});
cljs.pprint.absolute_reposition = (function cljs$pprint$absolute_reposition(navigator,position){
if((position >= cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator))){
var G__8636 = navigator;
var G__8637 = (cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator) - position);
return (cljs.pprint.relative_reposition.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.relative_reposition.cljs$core$IFn$_invoke$arity$2(G__8636,G__8637) : cljs.pprint.relative_reposition.call(null,G__8636,G__8637));
} else {
return (new cljs.pprint.arg_navigator(cljs.core.cst$kw$seq.cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.drop.cljs$core$IFn$_invoke$arity$2(position,cljs.core.cst$kw$seq.cljs$core$IFn$_invoke$arity$1(navigator)),position,null,null,null));
}
});
cljs.pprint.relative_reposition = (function cljs$pprint$relative_reposition(navigator,position){
var newpos = (cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator) + position);
if((position < (0))){
return cljs.pprint.absolute_reposition(navigator,newpos);
} else {
return (new cljs.pprint.arg_navigator(cljs.core.cst$kw$seq.cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.drop.cljs$core$IFn$_invoke$arity$2(position,cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator)),newpos,null,null,null));
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.compiled_directive = (function (func,def,params,offset,__meta,__extmap,__hash){
this.func = func;
this.def = def;
this.params = params;
this.offset = offset;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.compiled_directive.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4172__auto__,k__4173__auto__){
var self__ = this;
var this__4172__auto____$1 = this;
return this__4172__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4173__auto__,null);
});

cljs.pprint.compiled_directive.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4174__auto__,k8639,else__4175__auto__){
var self__ = this;
var this__4174__auto____$1 = this;
var G__8643 = k8639;
var G__8643__$1 = (((G__8643 instanceof cljs.core.Keyword))?G__8643.fqn:null);
switch (G__8643__$1) {
case "func":
return self__.func;

break;
case "def":
return self__.def;

break;
case "params":
return self__.params;

break;
case "offset":
return self__.offset;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k8639,else__4175__auto__);

}
});

cljs.pprint.compiled_directive.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4186__auto__,writer__4187__auto__,opts__4188__auto__){
var self__ = this;
var this__4186__auto____$1 = this;
var pr_pair__4189__auto__ = ((function (this__4186__auto____$1){
return (function (keyval__4190__auto__){
return cljs.core.pr_sequential_writer(writer__4187__auto__,cljs.core.pr_writer,""," ","",opts__4188__auto__,keyval__4190__auto__);
});})(this__4186__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4187__auto__,pr_pair__4189__auto__,"#cljs.pprint.compiled-directive{",", ","}",opts__4188__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$func,self__.func],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$def,self__.def],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$params,self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$offset,self__.offset],null))], null),self__.__extmap));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__8638){
var self__ = this;
var G__8638__$1 = this;
return (new cljs.core.RecordIter((0),G__8638__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$func,cljs.core.cst$kw$def,cljs.core.cst$kw$params,cljs.core.cst$kw$offset], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4170__auto__){
var self__ = this;
var this__4170__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.compiled_directive.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4167__auto__){
var self__ = this;
var this__4167__auto____$1 = this;
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.compiled_directive.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4176__auto__){
var self__ = this;
var this__4176__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4168__auto__){
var self__ = this;
var this__4168__auto____$1 = this;
var h__4030__auto__ = self__.__hash;
if(!((h__4030__auto__ == null))){
return h__4030__auto__;
} else {
var h__4030__auto____$1 = (function (){var fexpr__8644 = ((function (h__4030__auto__,this__4168__auto____$1){
return (function (coll__4169__auto__){
return (-829256337 ^ cljs.core.hash_unordered_coll(coll__4169__auto__));
});})(h__4030__auto__,this__4168__auto____$1))
;
return fexpr__8644(this__4168__auto____$1);
})();
self__.__hash = h__4030__auto____$1;

return h__4030__auto____$1;
}
});

cljs.pprint.compiled_directive.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this8640,other8641){
var self__ = this;
var this8640__$1 = this;
return ((!((other8641 == null))) && ((this8640__$1.constructor === other8641.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8640__$1.func,other8641.func)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8640__$1.def,other8641.def)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8640__$1.params,other8641.params)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8640__$1.offset,other8641.offset)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8640__$1.__extmap,other8641.__extmap)));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4181__auto__,k__4182__auto__){
var self__ = this;
var this__4181__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$offset,null,cljs.core.cst$kw$func,null,cljs.core.cst$kw$params,null,cljs.core.cst$kw$def,null], null), null),k__4182__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4181__auto____$1),self__.__meta),k__4182__auto__);
} else {
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4182__auto__)),null));
}
});

cljs.pprint.compiled_directive.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4179__auto__,k__4180__auto__,G__8638){
var self__ = this;
var this__4179__auto____$1 = this;
var pred__8645 = cljs.core.keyword_identical_QMARK_;
var expr__8646 = k__4180__auto__;
if(cljs.core.truth_((function (){var G__8648 = cljs.core.cst$kw$func;
var G__8649 = expr__8646;
return (pred__8645.cljs$core$IFn$_invoke$arity$2 ? pred__8645.cljs$core$IFn$_invoke$arity$2(G__8648,G__8649) : pred__8645.call(null,G__8648,G__8649));
})())){
return (new cljs.pprint.compiled_directive(G__8638,self__.def,self__.params,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__8650 = cljs.core.cst$kw$def;
var G__8651 = expr__8646;
return (pred__8645.cljs$core$IFn$_invoke$arity$2 ? pred__8645.cljs$core$IFn$_invoke$arity$2(G__8650,G__8651) : pred__8645.call(null,G__8650,G__8651));
})())){
return (new cljs.pprint.compiled_directive(self__.func,G__8638,self__.params,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__8652 = cljs.core.cst$kw$params;
var G__8653 = expr__8646;
return (pred__8645.cljs$core$IFn$_invoke$arity$2 ? pred__8645.cljs$core$IFn$_invoke$arity$2(G__8652,G__8653) : pred__8645.call(null,G__8652,G__8653));
})())){
return (new cljs.pprint.compiled_directive(self__.func,self__.def,G__8638,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__8654 = cljs.core.cst$kw$offset;
var G__8655 = expr__8646;
return (pred__8645.cljs$core$IFn$_invoke$arity$2 ? pred__8645.cljs$core$IFn$_invoke$arity$2(G__8654,G__8655) : pred__8645.call(null,G__8654,G__8655));
})())){
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,G__8638,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4180__auto__,G__8638),null));
}
}
}
}
});

cljs.pprint.compiled_directive.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4184__auto__){
var self__ = this;
var this__4184__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$func,self__.func,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$def,self__.def,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$params,self__.params,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$offset,self__.offset,null))], null),self__.__extmap));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4171__auto__,G__8638){
var self__ = this;
var this__4171__auto____$1 = this;
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,G__8638,self__.__extmap,self__.__hash));
});

cljs.pprint.compiled_directive.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4177__auto__,entry__4178__auto__){
var self__ = this;
var this__4177__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4178__auto__)){
return this__4177__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4178__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4178__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4177__auto____$1,entry__4178__auto__);
}
});

cljs.pprint.compiled_directive.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$func,cljs.core.cst$sym$def,cljs.core.cst$sym$params,cljs.core.cst$sym$offset], null);
});

cljs.pprint.compiled_directive.cljs$lang$type = true;

cljs.pprint.compiled_directive.cljs$lang$ctorPrSeq = (function (this__4208__auto__){
return (new cljs.core.List(null,"cljs.pprint/compiled-directive",null,(1),null));
});

cljs.pprint.compiled_directive.cljs$lang$ctorPrWriter = (function (this__4208__auto__,writer__4209__auto__){
return cljs.core._write(writer__4209__auto__,"cljs.pprint/compiled-directive");
});

/**
 * Positional factory function for cljs.pprint/compiled-directive.
 */
cljs.pprint.__GT_compiled_directive = (function cljs$pprint$__GT_compiled_directive(func,def,params,offset){
return (new cljs.pprint.compiled_directive(func,def,params,offset,null,null,null));
});

/**
 * Factory function for cljs.pprint/compiled-directive, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_compiled_directive = (function cljs$pprint$map__GT_compiled_directive(G__8642){
return (new cljs.pprint.compiled_directive(cljs.core.cst$kw$func.cljs$core$IFn$_invoke$arity$1(G__8642),cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(G__8642),cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(G__8642),cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(G__8642),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__8642,cljs.core.cst$kw$func,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$def,cljs.core.cst$kw$params,cljs.core.cst$kw$offset], 0))),null));
});

cljs.pprint.realize_parameter = (function cljs$pprint$realize_parameter(p__8657,navigator){
var vec__8658 = p__8657;
var param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8658,(0),null);
var vec__8661 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8658,(1),null);
var raw_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8661,(0),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8661,(1),null);
var vec__8664 = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null], null), null),param))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [raw_val,navigator], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(raw_val,cljs.core.cst$kw$parameter_DASH_from_DASH_args))?cljs.pprint.next_arg(navigator):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(raw_val,cljs.core.cst$kw$remaining_DASH_arg_DASH_count))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count(cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator)),navigator], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [raw_val,navigator], null)
)));
var real_param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8664,(0),null);
var new_navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8664,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [real_param,offset], null)], null),new_navigator], null);
});
cljs.pprint.realize_parameter_list = (function cljs$pprint$realize_parameter_list(parameter_map,navigator){
var vec__8667 = cljs.pprint.map_passing_context(cljs.pprint.realize_parameter,navigator,parameter_map);
var pairs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8667,(0),null);
var new_navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8667,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,pairs),new_navigator], null);
});
cljs.pprint.special_radix_markers = new cljs.core.PersistentArrayMap(null, 3, [(2),"#b",(8),"#o",(16),"#x"], null);
cljs.pprint.format_simple_number = (function cljs$pprint$format_simple_number(n){
if(cljs.core.integer_QMARK_(n)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.pprint._STAR_print_base_STAR_,(10))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.pprint._STAR_print_radix_STAR_)?".":null))].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.pprint._STAR_print_radix_STAR_)?(function (){var or__3922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.pprint.special_radix_markers,cljs.pprint._STAR_print_base_STAR_);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return ["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.pprint._STAR_print_base_STAR_),"r"].join('');
}
})():null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.pprint.opt_base_str.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.opt_base_str.cljs$core$IFn$_invoke$arity$2(cljs.pprint._STAR_print_base_STAR_,n) : cljs.pprint.opt_base_str.call(null,cljs.pprint._STAR_print_base_STAR_,n)))].join('');
}
} else {
return null;

}
});
cljs.pprint.format_ascii = (function cljs$pprint$format_ascii(print_func,params,arg_navigator,offsets){
var vec__8670 = cljs.pprint.next_arg(arg_navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8670,(0),null);
var arg_navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8670,(1),null);
var base_output = (function (){var or__3922__auto__ = cljs.pprint.format_simple_number(arg);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return (print_func.cljs$core$IFn$_invoke$arity$1 ? print_func.cljs$core$IFn$_invoke$arity$1(arg) : print_func.call(null,arg));
}
})();
var base_width = base_output.length;
var min_width = (base_width + cljs.core.cst$kw$minpad.cljs$core$IFn$_invoke$arity$1(params));
var width = (((min_width >= cljs.core.cst$kw$mincol.cljs$core$IFn$_invoke$arity$1(params)))?min_width:(min_width + ((cljs.core.quot(((cljs.core.cst$kw$mincol.cljs$core$IFn$_invoke$arity$1(params) - min_width) - (1)),cljs.core.cst$kw$colinc.cljs$core$IFn$_invoke$arity$1(params)) + (1)) * cljs.core.cst$kw$colinc.cljs$core$IFn$_invoke$arity$1(params))));
var chars = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((width - base_width),cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params)));
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chars),cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_output)].join('')], 0));
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_output),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chars)].join('')], 0));
}

return arg_navigator__$1;
});
/**
 * returns true if a number is actually an integer (that is, has no fractional part)
 */
cljs.pprint.integral_QMARK_ = (function cljs$pprint$integral_QMARK_(x){
if(cljs.core.integer_QMARK_(x)){
return true;
} else {
if(cljs.pprint.float_QMARK_(x)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,Math.floor(x));
} else {
return false;

}
}
});
/**
 * Return the list of remainders (essentially the 'digits') of val in the given base
 */
cljs.pprint.remainders = (function cljs$pprint$remainders(base,val){
return cljs.core.reverse(cljs.core.first(cljs.pprint.consume((function (p1__8673_SHARP_){
if((p1__8673_SHARP_ > (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rem(p1__8673_SHARP_,base),cljs.core.quot(p1__8673_SHARP_,base)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null);
}
}),val)));
});
/**
 * Return val as a string in the given base
 */
cljs.pprint.base_str = (function cljs$pprint$base_str(base,val){
if((val === (0))){
return "0";
} else {
var xlated_val = val
;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (xlated_val){
return (function (p1__8674_SHARP_){
if((p1__8674_SHARP_ < (10))){
return cljs.core.char$((cljs.pprint.char_code("0") + p1__8674_SHARP_));
} else {
return cljs.core.char$((cljs.pprint.char_code("a") + (p1__8674_SHARP_ - (10))));
}
});})(xlated_val))
,cljs.pprint.remainders(base,val)));
}
});
cljs.pprint.javascript_base_formats = new cljs.core.PersistentArrayMap(null, 3, [(8),"%o",(10),"%d",(16),"%x"], null);
/**
 * Return val as a string in the given base. No cljs format, so no improved performance.
 */
cljs.pprint.opt_base_str = (function cljs$pprint$opt_base_str(base,val){
return cljs.pprint.base_str(base,val);
});
cljs.pprint.group_by_STAR_ = (function cljs$pprint$group_by_STAR_(unit,lis){
return cljs.core.reverse(cljs.core.first(cljs.pprint.consume((function (x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(cljs.core.reverse(cljs.core.take.cljs$core$IFn$_invoke$arity$2(unit,x))),cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(unit,x))], null);
}),cljs.core.reverse(lis))));
});
cljs.pprint.format_integer = (function cljs$pprint$format_integer(base,params,arg_navigator,offsets){
var vec__8676 = cljs.pprint.next_arg(arg_navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8676,(0),null);
var arg_navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8676,(1),null);
if(cljs.core.truth_(cljs.pprint.integral_QMARK_(arg))){
var neg_8679 = (arg < (0));
var pos_arg_8680 = ((neg_8679)?(- arg):arg);
var raw_str_8681 = cljs.pprint.opt_base_str(base,pos_arg_8680);
var group_str_8682 = (cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?(function (){var groups = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (neg_8679,pos_arg_8680,raw_str_8681,vec__8676,arg,arg_navigator__$1){
return (function (p1__8675_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,p1__8675_SHARP_);
});})(neg_8679,pos_arg_8680,raw_str_8681,vec__8676,arg,arg_navigator__$1))
,cljs.pprint.group_by_STAR_(cljs.core.cst$kw$commainterval.cljs$core$IFn$_invoke$arity$1(params),raw_str_8681));
var commas = cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(groups),cljs.core.cst$kw$commachar.cljs$core$IFn$_invoke$arity$1(params));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.next(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(commas,groups)));
})():raw_str_8681);
var signed_str_8683 = ((neg_8679)?["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_str_8682)].join(''):(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))?["+",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_str_8682)].join(''):group_str_8682
));
var padded_str_8684 = (((signed_str_8683.length < cljs.core.cst$kw$mincol.cljs$core$IFn$_invoke$arity$1(params)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((cljs.core.cst$kw$mincol.cljs$core$IFn$_invoke$arity$1(params) - signed_str_8683.length),cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(signed_str_8683)].join(''):signed_str_8683);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([padded_str_8684], 0));
} else {
cljs.pprint.format_ascii(cljs.core.print_str,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$mincol,cljs.core.cst$kw$mincol.cljs$core$IFn$_invoke$arity$1(params),cljs.core.cst$kw$colinc,(1),cljs.core.cst$kw$minpad,(0),cljs.core.cst$kw$padchar,cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params),cljs.core.cst$kw$at,true], null),cljs.pprint.init_navigator(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),null);
}

return arg_navigator__$1;
});
cljs.pprint.english_cardinal_units = new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, ["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"], null);
cljs.pprint.english_ordinal_units = new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, ["zeroth","first","second","third","fourth","fifth","sixth","seventh","eighth","ninth","tenth","eleventh","twelfth","thirteenth","fourteenth","fifteenth","sixteenth","seventeenth","eighteenth","nineteenth"], null);
cljs.pprint.english_cardinal_tens = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"], null);
cljs.pprint.english_ordinal_tens = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","","twentieth","thirtieth","fortieth","fiftieth","sixtieth","seventieth","eightieth","ninetieth"], null);
cljs.pprint.english_scale_numbers = new cljs.core.PersistentVector(null, 22, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","thousand","million","billion","trillion","quadrillion","quintillion","sextillion","septillion","octillion","nonillion","decillion","undecillion","duodecillion","tredecillion","quattuordecillion","quindecillion","sexdecillion","septendecillion","octodecillion","novemdecillion","vigintillion"], null);
/**
 * Convert a number less than 1000 to a cardinal english string
 */
cljs.pprint.format_simple_cardinal = (function cljs$pprint$format_simple_cardinal(num){
var hundreds = cljs.core.quot(num,(100));
var tens = cljs.core.rem(num,(100));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((hundreds > (0)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_units,hundreds))," hundred"].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((((hundreds > (0))) && ((tens > (0)))))?" ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((tens > (0)))?(((tens < (20)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_units,tens):(function (){var ten_digit = cljs.core.quot(tens,(10));
var unit_digit = cljs.core.rem(tens,(10));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((ten_digit > (0)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_tens,ten_digit):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((((ten_digit > (0))) && ((unit_digit > (0)))))?"-":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((unit_digit > (0)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_units,unit_digit):null))].join('');
})()):null))].join('');
});
/**
 * Take a sequence of parts, add scale numbers (e.g., million) and combine into a string
 *   offset is a factor of 10^3 to multiply by
 */
cljs.pprint.add_english_scales = (function cljs$pprint$add_english_scales(parts,offset){
var cnt = cljs.core.count(parts);
var acc = cljs.core.PersistentVector.EMPTY;
var pos = (cnt - (1));
var this$ = cljs.core.first(parts);
var remainder = cljs.core.next(parts);
while(true){
if((remainder == null)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(", ",acc))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((!(cljs.core.empty_QMARK_(this$))) && (!(cljs.core.empty_QMARK_(acc)))))?", ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((!(cljs.core.empty_QMARK_(this$))) && (((pos + offset) > (0)))))?[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_scale_numbers,(pos + offset)))].join(''):null))].join('');
} else {
var G__8685 = ((cljs.core.empty_QMARK_(this$))?acc:cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_scale_numbers,(pos + offset)))].join('')));
var G__8686 = (pos - (1));
var G__8687 = cljs.core.first(remainder);
var G__8688 = cljs.core.next(remainder);
acc = G__8685;
pos = G__8686;
this$ = G__8687;
remainder = G__8688;
continue;
}
break;
}
});
cljs.pprint.format_cardinal_english = (function cljs$pprint$format_cardinal_english(params,navigator,offsets){
var vec__8689 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8689,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8689,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),arg)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["zero"], 0));
} else {
var abs_arg_8692 = (((arg < (0)))?(- arg):arg);
var parts_8693 = cljs.pprint.remainders((1000),abs_arg_8692);
if((cljs.core.count(parts_8693) <= cljs.core.count(cljs.pprint.english_scale_numbers))){
var parts_strs_8694 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.pprint.format_simple_cardinal,parts_8693);
var full_str_8695 = cljs.pprint.add_english_scales(parts_strs_8694,(0));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1((((arg < (0)))?"minus ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(full_str_8695)].join('')], 0));
} else {
cljs.pprint.format_integer((10),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$mincol,(0),cljs.core.cst$kw$padchar," ",cljs.core.cst$kw$commachar,",",cljs.core.cst$kw$commainterval,(3),cljs.core.cst$kw$colon,true], null),cljs.pprint.init_navigator(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$mincol,(0),cljs.core.cst$kw$padchar,(0),cljs.core.cst$kw$commachar,(0),cljs.core.cst$kw$commainterval,(0)], null));
}
}

return navigator__$1;
});
/**
 * Convert a number less than 1000 to a ordinal english string
 *   Note this should only be used for the last one in the sequence
 */
cljs.pprint.format_simple_ordinal = (function cljs$pprint$format_simple_ordinal(num){
var hundreds = cljs.core.quot(num,(100));
var tens = cljs.core.rem(num,(100));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((hundreds > (0)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_units,hundreds))," hundred"].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((((hundreds > (0))) && ((tens > (0)))))?" ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((tens > (0)))?(((tens < (20)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_ordinal_units,tens):(function (){var ten_digit = cljs.core.quot(tens,(10));
var unit_digit = cljs.core.rem(tens,(10));
if((((ten_digit > (0))) && (!((unit_digit > (0)))))){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_ordinal_tens,ten_digit);
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((ten_digit > (0)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_tens,ten_digit):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((((ten_digit > (0))) && ((unit_digit > (0)))))?"-":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((unit_digit > (0)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_ordinal_units,unit_digit):null))].join('');
}
})()):(((hundreds > (0)))?"th":null)))].join('');
});
cljs.pprint.format_ordinal_english = (function cljs$pprint$format_ordinal_english(params,navigator,offsets){
var vec__8696 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8696,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8696,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),arg)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["zeroth"], 0));
} else {
var abs_arg_8699 = (((arg < (0)))?(- arg):arg);
var parts_8700 = cljs.pprint.remainders((1000),abs_arg_8699);
if((cljs.core.count(parts_8700) <= cljs.core.count(cljs.pprint.english_scale_numbers))){
var parts_strs_8701 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.pprint.format_simple_cardinal,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(parts_8700));
var head_str_8702 = cljs.pprint.add_english_scales(parts_strs_8701,(1));
var tail_str_8703 = cljs.pprint.format_simple_ordinal(cljs.core.last(parts_8700));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1((((arg < (0)))?"minus ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((!(cljs.core.empty_QMARK_(head_str_8702))) && (!(cljs.core.empty_QMARK_(tail_str_8703)))))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(head_str_8702),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tail_str_8703)].join(''):((!(cljs.core.empty_QMARK_(head_str_8702)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(head_str_8702),"th"].join(''):tail_str_8703
)))].join('')], 0));
} else {
cljs.pprint.format_integer((10),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$mincol,(0),cljs.core.cst$kw$padchar," ",cljs.core.cst$kw$commachar,",",cljs.core.cst$kw$commainterval,(3),cljs.core.cst$kw$colon,true], null),cljs.pprint.init_navigator(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$mincol,(0),cljs.core.cst$kw$padchar,(0),cljs.core.cst$kw$commachar,(0),cljs.core.cst$kw$commainterval,(0)], null));

var low_two_digits_8704 = cljs.core.rem(arg,(100));
var not_teens_8705 = ((((11) < low_two_digits_8704)) || (((19) > low_two_digits_8704)));
var low_digit_8706 = cljs.core.rem(low_two_digits_8704,(10));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(((((low_digit_8706 === (1))) && (not_teens_8705)))?"st":(((((low_digit_8706 === (2))) && (not_teens_8705)))?"nd":(((((low_digit_8706 === (3))) && (not_teens_8705)))?"rd":"th"
)))], 0));
}
}

return navigator__$1;
});
cljs.pprint.old_roman_table = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["I","II","III","IIII","V","VI","VII","VIII","VIIII"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","XX","XXX","XXXX","L","LX","LXX","LXXX","LXXXX"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["C","CC","CCC","CCCC","D","DC","DCC","DCCC","DCCCC"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M","MM","MMM"], null)], null);
cljs.pprint.new_roman_table = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["I","II","III","IV","V","VI","VII","VIII","IX"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","XX","XXX","XL","L","LX","LXX","LXXX","XC"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["C","CC","CCC","CD","D","DC","DCC","DCCC","CM"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M","MM","MMM"], null)], null);
/**
 * Format a roman numeral using the specified look-up table
 */
cljs.pprint.format_roman = (function cljs$pprint$format_roman(table,params,navigator,offsets){
var vec__8707 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8707,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8707,(1),null);
if(((typeof arg === 'number') && ((arg > (0))) && ((arg < (4000))))){
var digits_8710 = cljs.pprint.remainders((10),arg);
var acc_8711 = cljs.core.PersistentVector.EMPTY;
var pos_8712 = (cljs.core.count(digits_8710) - (1));
var digits_8713__$1 = digits_8710;
while(true){
if(cljs.core.empty_QMARK_(digits_8713__$1)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,acc_8711)], 0));
} else {
var digit_8714 = cljs.core.first(digits_8713__$1);
var G__8715 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),digit_8714))?acc_8711:cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc_8711,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(table,pos_8712),(digit_8714 - (1)))));
var G__8716 = (pos_8712 - (1));
var G__8717 = cljs.core.next(digits_8713__$1);
acc_8711 = G__8715;
pos_8712 = G__8716;
digits_8713__$1 = G__8717;
continue;
}
break;
}
} else {
cljs.pprint.format_integer((10),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$mincol,(0),cljs.core.cst$kw$padchar," ",cljs.core.cst$kw$commachar,",",cljs.core.cst$kw$commainterval,(3),cljs.core.cst$kw$colon,true], null),cljs.pprint.init_navigator(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$mincol,(0),cljs.core.cst$kw$padchar,(0),cljs.core.cst$kw$commachar,(0),cljs.core.cst$kw$commainterval,(0)], null));
}

return navigator__$1;
});
cljs.pprint.format_old_roman = (function cljs$pprint$format_old_roman(params,navigator,offsets){
return cljs.pprint.format_roman(cljs.pprint.old_roman_table,params,navigator,offsets);
});
cljs.pprint.format_new_roman = (function cljs$pprint$format_new_roman(params,navigator,offsets){
return cljs.pprint.format_roman(cljs.pprint.new_roman_table,params,navigator,offsets);
});
cljs.pprint.special_chars = new cljs.core.PersistentArrayMap(null, 5, [(8),"Backspace",(9),"Tab",(10),"Newline",(13),"Return",(32),"Space"], null);
cljs.pprint.pretty_character = (function cljs$pprint$pretty_character(params,navigator,offsets){
var vec__8718 = cljs.pprint.next_arg(navigator);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8718,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8718,(1),null);
var as_int = cljs.pprint.char_code(c);
var base_char = (as_int & (127));
var meta = (as_int & (128));
var special = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.pprint.special_chars,base_char);
if((meta > (0))){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Meta-"], 0));
} else {
}

cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(special)?special:(((base_char < (32)))?["Control-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.char$((base_char + (64))))].join(''):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(base_char,(127)))?"Control-?":cljs.core.char$(base_char)
)))], 0));

return navigator__$1;
});
cljs.pprint.readable_character = (function cljs$pprint$readable_character(params,navigator,offsets){
var vec__8721 = cljs.pprint.next_arg(navigator);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8721,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8721,(1),null);
var pred__8724_8731 = cljs.core._EQ_;
var expr__8725_8732 = cljs.core.cst$kw$char_DASH_format.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_((function (){var G__8727 = "o";
var G__8728 = expr__8725_8732;
return (pred__8724_8731.cljs$core$IFn$_invoke$arity$2 ? pred__8724_8731.cljs$core$IFn$_invoke$arity$2(G__8727,G__8728) : pred__8724_8731.call(null,G__8727,G__8728));
})())){
cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(true,"\\o~3, '0o",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.pprint.char_code(c)], 0));
} else {
if(cljs.core.truth_((function (){var G__8729 = "u";
var G__8730 = expr__8725_8732;
return (pred__8724_8731.cljs$core$IFn$_invoke$arity$2 ? pred__8724_8731.cljs$core$IFn$_invoke$arity$2(G__8729,G__8730) : pred__8724_8731.call(null,G__8729,G__8730));
})())){
cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(true,"\\u~4, '0x",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.pprint.char_code(c)], 0));
} else {
if(cljs.core.truth_((pred__8724_8731.cljs$core$IFn$_invoke$arity$2 ? pred__8724_8731.cljs$core$IFn$_invoke$arity$2(null,expr__8725_8732) : pred__8724_8731.call(null,null,expr__8725_8732)))){
cljs.pprint.print_char(c);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__8725_8732)].join('')));
}
}
}

return navigator__$1;
});
cljs.pprint.plain_character = (function cljs$pprint$plain_character(params,navigator,offsets){
var vec__8733 = cljs.pprint.next_arg(navigator);
var char$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8733,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8733,(1),null);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([char$], 0));

return navigator__$1;
});
cljs.pprint.abort_QMARK_ = (function cljs$pprint$abort_QMARK_(context){
var token = cljs.core.first(context);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$up_DASH_arrow,token)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$colon_DASH_up_DASH_arrow,token)));
});
cljs.pprint.execute_sub_format = (function cljs$pprint$execute_sub_format(format,args,base_args){
return cljs.core.second(cljs.pprint.map_passing_context((function (element,context){
if(cljs.core.truth_(cljs.pprint.abort_QMARK_(context))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,context], null);
} else {
var vec__8736 = cljs.pprint.realize_parameter_list(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(element),context);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8736,(0),null);
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8736,(1),null);
var vec__8739 = cljs.pprint.unzip_map(params);
var params__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8739,(0),null);
var offsets = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8739,(1),null);
var params__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(params__$1,cljs.core.cst$kw$base_DASH_args,base_args);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$func.cljs$core$IFn$_invoke$arity$1(element),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [params__$2,args__$1,offsets], null))], null);
}
}),args,format));
});
/**
 * Produce string parts for the mantissa (normalize 1-9) and exponent
 */
cljs.pprint.float_parts_base = (function cljs$pprint$float_parts_base(f){
var s = clojure.string.lower_case([cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));
var exploc = s.indexOf("e");
var dotloc = s.indexOf(".");
if((exploc < (0))){
if((dotloc < (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.count(s) - (1)))].join('')], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),dotloc)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(dotloc + (1))))].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((dotloc - (1)))].join('')], null);
}
} else {
if((dotloc < (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),exploc),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(exploc + (1)))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),(1))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(2),exploc))].join(''),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(exploc + (1)))], null);
}
}
});
/**
 * Take care of leading and trailing zeros in decomposed floats
 */
cljs.pprint.float_parts = (function cljs$pprint$float_parts(f){
var vec__8742 = cljs.pprint.float_parts_base(f);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8742,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8742,(1),null);
var m1 = cljs.pprint.rtrim(m,"0");
var m2 = cljs.pprint.ltrim(m1,"0");
var delta = (cljs.core.count(m1) - cljs.core.count(m2));
var e__$1 = (((((cljs.core.count(e) > (0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(e,(0)),"+"))))?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(e,(1)):e);
if(cljs.core.empty_QMARK_(m2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["0",(0)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m2,(parseInt(e__$1,(10)) - delta)], null);
}
});
/**
 * Assumption: The input string consists of one or more decimal digits,
 *   and no other characters. Return a string containing one or more
 *   decimal digits containing a decimal number one larger than the input
 *   string. The output string will always be the same length as the input
 *   string, or one character longer.
 */
cljs.pprint.inc_s = (function cljs$pprint$inc_s(s){
var len_1 = (cljs.core.count(s) - (1));
var i = (len_1 | (0));
while(true){
if((i < (0))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,"1",cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((len_1 + (1)),"0"));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("9",s.charAt(i))){
var G__8745 = (i - (1));
i = G__8745;
continue;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.str,cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),i),cljs.core.char$((cljs.pprint.char_code(s.charAt(i)) + (1))),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((len_1 - i),"0"));

}
}
break;
}
});
cljs.pprint.round_str = (function cljs$pprint$round_str(m,e,d,w){
if(cljs.core.truth_((function (){var or__3922__auto__ = d;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return w;
}
})())){
var len = cljs.core.count(m);
var w__$1 = (cljs.core.truth_(w)?(function (){var x__4006__auto__ = (2);
var y__4007__auto__ = w;
return ((x__4006__auto__ > y__4007__auto__) ? x__4006__auto__ : y__4007__auto__);
})():(0));
var round_pos = (cljs.core.truth_(d)?((e + d) + (1)):(((e >= (0)))?(function (){var x__4006__auto__ = (e + (1));
var y__4007__auto__ = (w__$1 - (1));
return ((x__4006__auto__ > y__4007__auto__) ? x__4006__auto__ : y__4007__auto__);
})():(w__$1 + e)
));
var vec__8746 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(round_pos,(0)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [["0",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join(''),(e + (1)),(1),(len + (1))], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,round_pos,len], null));
var m1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8746,(0),null);
var e1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8746,(1),null);
var round_pos__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8746,(2),null);
var len__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8746,(3),null);
if(cljs.core.truth_(round_pos__$1)){
if((round_pos__$1 < (0))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["0",(0),false], null);
} else {
if((len__$1 > round_pos__$1)){
var round_char = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m1,round_pos__$1);
var result = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(m1,(0),round_pos__$1);
if((cljs.pprint.char_code(round_char) >= cljs.pprint.char_code("5"))){
var round_up_result = cljs.pprint.inc_s(result);
var expanded = (cljs.core.count(round_up_result) > cljs.core.count(result));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((expanded)?cljs.core.subs.cljs$core$IFn$_invoke$arity$3(round_up_result,(0),(cljs.core.count(round_up_result) - (1))):round_up_result),e1,expanded], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,e1,false], null);
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,false], null);
}
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,false], null);
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,false], null);
}
});
cljs.pprint.expand_fixed = (function cljs$pprint$expand_fixed(m,e,d){
var vec__8749 = (((e < (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((- e) - (1)),"0"))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join(''),(-1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e], null));
var m1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8749,(0),null);
var e1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8749,(1),null);
var len = cljs.core.count(m1);
var target_len = (cljs.core.truth_(d)?((e1 + d) + (1)):(e1 + (1)));
if((len < target_len)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(m1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((target_len - len),"0")))].join('');
} else {
return m1;
}
});
/**
 * Insert the decimal point at the right spot in the number to match an exponent
 */
cljs.pprint.insert_decimal = (function cljs$pprint$insert_decimal(m,e){
if((e < (0))){
return [".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join('');
} else {
var loc = (e + (1));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(m,(0),loc)),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(m,loc))].join('');
}
});
cljs.pprint.get_fixed = (function cljs$pprint$get_fixed(m,e,d){
return cljs.pprint.insert_decimal(cljs.pprint.expand_fixed(m,e,d),e);
});
/**
 * Insert the decimal point at the right spot in the number to match an exponent
 */
cljs.pprint.insert_scaled_decimal = (function cljs$pprint$insert_scaled_decimal(m,k){
if((k < (0))){
return [".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(m,(0),k)),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(m,k))].join('');
}
});
cljs.pprint.convert_ratio = (function cljs$pprint$convert_ratio(x){
return x;
});
cljs.pprint.fixed_float = (function cljs$pprint$fixed_float(params,navigator,offsets){
var w = cljs.core.cst$kw$w.cljs$core$IFn$_invoke$arity$1(params);
var d = cljs.core.cst$kw$d.cljs$core$IFn$_invoke$arity$1(params);
var vec__8752 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8752,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8752,(1),null);
var vec__8755 = (((arg < (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-",(- arg)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["+",arg], null));
var sign = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8755,(0),null);
var abs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8755,(1),null);
var abs__$1 = cljs.pprint.convert_ratio(abs);
var vec__8758 = cljs.pprint.float_parts(abs__$1);
var mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8758,(0),null);
var exp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8758,(1),null);
var scaled_exp = (exp + cljs.core.cst$kw$k.cljs$core$IFn$_invoke$arity$1(params));
var add_sign = (function (){var or__3922__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return (arg < (0));
}
})();
var append_zero = ((cljs.core.not(d)) && (((cljs.core.count(mantissa) - (1)) <= scaled_exp)));
var vec__8761 = cljs.pprint.round_str(mantissa,scaled_exp,d,(cljs.core.truth_(w)?(w - (cljs.core.truth_(add_sign)?(1):(0))):null));
var rounded_mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8761,(0),null);
var scaled_exp__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8761,(1),null);
var expanded = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8761,(2),null);
var fixed_repr = cljs.pprint.get_fixed(rounded_mantissa,(cljs.core.truth_(expanded)?(scaled_exp__$1 + (1)):scaled_exp__$1),d);
var fixed_repr__$1 = (cljs.core.truth_((function (){var and__3911__auto__ = w;
if(cljs.core.truth_(and__3911__auto__)){
var and__3911__auto____$1 = d;
if(cljs.core.truth_(and__3911__auto____$1)){
return (((d >= (1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fixed_repr.charAt((0)),"0")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fixed_repr.charAt((1)),".")) && ((cljs.core.count(fixed_repr) > (w - (cljs.core.truth_(add_sign)?(1):(0))))));
} else {
return and__3911__auto____$1;
}
} else {
return and__3911__auto__;
}
})())?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(fixed_repr,(1)):fixed_repr);
var prepend_zero = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(fixed_repr__$1),".");
if(cljs.core.truth_(w)){
var len_8764 = cljs.core.count(fixed_repr__$1);
var signed_len_8765 = (cljs.core.truth_(add_sign)?(len_8764 + (1)):len_8764);
var prepend_zero_8766__$1 = ((prepend_zero) && (!((signed_len_8765 >= w))));
var append_zero_8767__$1 = ((append_zero) && (!((signed_len_8765 >= w))));
var full_len_8768 = ((((prepend_zero_8766__$1) || (append_zero_8767__$1)))?(signed_len_8765 + (1)):signed_len_8765);
if(cljs.core.truth_((function (){var and__3911__auto__ = (full_len_8768 > w);
if(and__3911__auto__){
return cljs.core.cst$kw$overflowchar.cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__3911__auto__;
}
})())){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(w,cljs.core.cst$kw$overflowchar.cljs$core$IFn$_invoke$arity$1(params)))], 0));
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((w - full_len_8768),cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(add_sign)?sign:null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((prepend_zero_8766__$1)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fixed_repr__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((append_zero_8767__$1)?"0":null))].join('')], 0));
}
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(add_sign)?sign:null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((prepend_zero)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fixed_repr__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((append_zero)?"0":null))].join('')], 0));
}

return navigator__$1;
});
cljs.pprint.exponential_float = (function cljs$pprint$exponential_float(params,navigator,offset){
var vec__8769 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8769,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8769,(1),null);
var arg__$1 = cljs.pprint.convert_ratio(arg);
var G__8775_8785 = cljs.pprint.float_parts((((arg__$1 < (0)))?(- arg__$1):arg__$1));
var vec__8776_8786 = G__8775_8785;
var mantissa_8787 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8776_8786,(0),null);
var exp_8788 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8776_8786,(1),null);
var G__8775_8789__$1 = G__8775_8785;
while(true){
var vec__8779_8790 = G__8775_8789__$1;
var mantissa_8791__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8779_8790,(0),null);
var exp_8792__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8779_8790,(1),null);
var w_8793 = cljs.core.cst$kw$w.cljs$core$IFn$_invoke$arity$1(params);
var d_8794 = cljs.core.cst$kw$d.cljs$core$IFn$_invoke$arity$1(params);
var e_8795 = cljs.core.cst$kw$e.cljs$core$IFn$_invoke$arity$1(params);
var k_8796 = cljs.core.cst$kw$k.cljs$core$IFn$_invoke$arity$1(params);
var expchar_8797 = (function (){var or__3922__auto__ = cljs.core.cst$kw$exponentchar.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return "E";
}
})();
var add_sign_8798 = (function (){var or__3922__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return (arg__$1 < (0));
}
})();
var prepend_zero_8799 = (k_8796 <= (0));
var scaled_exp_8800 = (exp_8792__$1 - (k_8796 - (1)));
var scaled_exp_str_8801 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.abs(scaled_exp_8800))].join('');
var scaled_exp_str_8802__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(expchar_8797),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((scaled_exp_8800 < (0)))?"-":"+")),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(e_8795)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((e_8795 - cljs.core.count(scaled_exp_str_8801)),"0")):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(scaled_exp_str_8801)].join('');
var exp_width_8803 = cljs.core.count(scaled_exp_str_8802__$1);
var base_mantissa_width_8804 = cljs.core.count(mantissa_8791__$1);
var scaled_mantissa_8805 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((- k_8796),"0"))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mantissa_8791__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(d_8794)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((d_8794 - (base_mantissa_width_8804 - (1))) - (((k_8796 < (0)))?(- k_8796):(0))),"0")):null))].join('');
var w_mantissa_8806 = (cljs.core.truth_(w_8793)?(w_8793 - exp_width_8803):null);
var vec__8782_8807 = cljs.pprint.round_str(scaled_mantissa_8805,(0),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k_8796,(0)))?(d_8794 - (1)):(((k_8796 > (0)))?d_8794:(((k_8796 < (0)))?(d_8794 - (1)):null))),(cljs.core.truth_(w_mantissa_8806)?(w_mantissa_8806 - (cljs.core.truth_(add_sign_8798)?(1):(0))):null));
var rounded_mantissa_8808 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8782_8807,(0),null);
var __8809 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8782_8807,(1),null);
var incr_exp_8810 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8782_8807,(2),null);
var full_mantissa_8811 = cljs.pprint.insert_scaled_decimal(rounded_mantissa_8808,k_8796);
var append_zero_8812 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k_8796,cljs.core.count(rounded_mantissa_8808))) && ((d_8794 == null)));
if(cljs.core.not(incr_exp_8810)){
if(cljs.core.truth_(w_8793)){
var len_8813 = (cljs.core.count(full_mantissa_8811) + exp_width_8803);
var signed_len_8814 = (cljs.core.truth_(add_sign_8798)?(len_8813 + (1)):len_8813);
var prepend_zero_8815__$1 = ((prepend_zero_8799) && (!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(signed_len_8814,w_8793))));
var full_len_8816 = ((prepend_zero_8815__$1)?(signed_len_8814 + (1)):signed_len_8814);
var append_zero_8817__$1 = ((append_zero_8812) && ((full_len_8816 < w_8793)));
if(cljs.core.truth_((function (){var and__3911__auto__ = (function (){var or__3922__auto__ = (full_len_8816 > w_8793);
if(or__3922__auto__){
return or__3922__auto__;
} else {
var and__3911__auto__ = e_8795;
if(cljs.core.truth_(and__3911__auto__)){
return ((exp_width_8803 - (2)) > e_8795);
} else {
return and__3911__auto__;
}
}
})();
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.cst$kw$overflowchar.cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__3911__auto__;
}
})())){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(w_8793,cljs.core.cst$kw$overflowchar.cljs$core$IFn$_invoke$arity$1(params)))], 0));
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((w_8793 - full_len_8816) - ((append_zero_8817__$1)?(1):(0))),cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(add_sign_8798)?(((arg__$1 < (0)))?"-":"+"):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((prepend_zero_8815__$1)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(full_mantissa_8811),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((append_zero_8817__$1)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(scaled_exp_str_8802__$1)].join('')], 0));
}
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(add_sign_8798)?(((arg__$1 < (0)))?"-":"+"):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((prepend_zero_8799)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(full_mantissa_8811),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((append_zero_8812)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(scaled_exp_str_8802__$1)].join('')], 0));
}
} else {
var G__8818 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rounded_mantissa_8808,(exp_8792__$1 + (1))], null);
G__8775_8789__$1 = G__8818;
continue;
}
break;
}

return navigator__$1;
});
cljs.pprint.general_float = (function cljs$pprint$general_float(params,navigator,offsets){
var vec__8819 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8819,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8819,(1),null);
var arg__$1 = cljs.pprint.convert_ratio(arg);
var vec__8822 = cljs.pprint.float_parts((((arg__$1 < (0)))?(- arg__$1):arg__$1));
var mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8822,(0),null);
var exp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8822,(1),null);
var w = cljs.core.cst$kw$w.cljs$core$IFn$_invoke$arity$1(params);
var d = cljs.core.cst$kw$d.cljs$core$IFn$_invoke$arity$1(params);
var e = cljs.core.cst$kw$e.cljs$core$IFn$_invoke$arity$1(params);
var n = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arg__$1,0.0))?(0):(exp + (1)));
var ee = (cljs.core.truth_(e)?(e + (2)):(4));
var ww = (cljs.core.truth_(w)?(w - ee):null);
var d__$1 = (cljs.core.truth_(d)?d:(function (){var x__4006__auto__ = cljs.core.count(mantissa);
var y__4007__auto__ = (function (){var x__4009__auto__ = n;
var y__4010__auto__ = (7);
return ((x__4009__auto__ < y__4010__auto__) ? x__4009__auto__ : y__4010__auto__);
})();
return ((x__4006__auto__ > y__4007__auto__) ? x__4006__auto__ : y__4007__auto__);
})());
var dd = (d__$1 - n);
if(((((0) <= dd)) && ((dd <= d__$1)))){
var navigator__$1 = cljs.pprint.fixed_float(new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$w,ww,cljs.core.cst$kw$d,dd,cljs.core.cst$kw$k,(0),cljs.core.cst$kw$overflowchar,cljs.core.cst$kw$overflowchar.cljs$core$IFn$_invoke$arity$1(params),cljs.core.cst$kw$padchar,cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params),cljs.core.cst$kw$at,cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params)], null),navigator,offsets);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(ee," "))], 0));

return navigator__$1;
} else {
return cljs.pprint.exponential_float(params,navigator,offsets);
}
});
cljs.pprint.dollar_float = (function cljs$pprint$dollar_float(params,navigator,offsets){
var vec__8825 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8825,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8825,(1),null);
var vec__8828 = cljs.pprint.float_parts(Math.abs(arg));
var mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8828,(0),null);
var exp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8828,(1),null);
var d = cljs.core.cst$kw$d.cljs$core$IFn$_invoke$arity$1(params);
var n = cljs.core.cst$kw$n.cljs$core$IFn$_invoke$arity$1(params);
var w = cljs.core.cst$kw$w.cljs$core$IFn$_invoke$arity$1(params);
var add_sign = (function (){var or__3922__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return (arg < (0));
}
})();
var vec__8831 = cljs.pprint.round_str(mantissa,exp,d,null);
var rounded_mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8831,(0),null);
var scaled_exp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8831,(1),null);
var expanded = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8831,(2),null);
var fixed_repr = cljs.pprint.get_fixed(rounded_mantissa,(cljs.core.truth_(expanded)?(scaled_exp + (1)):scaled_exp),d);
var full_repr = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((n - fixed_repr.indexOf(".")),"0"))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fixed_repr)].join('');
var full_len = (cljs.core.count(full_repr) + (cljs.core.truth_(add_sign)?(1):(0)));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var and__3911__auto__ = cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__3911__auto__)){
return add_sign;
} else {
return and__3911__auto__;
}
})())?(((arg < (0)))?"-":"+"):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((w - full_len),cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var and__3911__auto__ = cljs.core.not(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params));
if(and__3911__auto__){
return add_sign;
} else {
return and__3911__auto__;
}
})())?(((arg < (0)))?"-":"+"):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(full_repr)].join('')], 0));

return navigator__$1;
});
cljs.pprint.choice_conditional = (function cljs$pprint$choice_conditional(params,arg_navigator,offsets){
var arg = cljs.core.cst$kw$selector.cljs$core$IFn$_invoke$arity$1(params);
var vec__8834 = (cljs.core.truth_(arg)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg,arg_navigator], null):cljs.pprint.next_arg(arg_navigator));
var arg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8834,(0),null);
var navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8834,(1),null);
var clauses = cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params);
var clause = (((((arg__$1 < (0))) || ((arg__$1 >= cljs.core.count(clauses)))))?cljs.core.first(cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(params)):cljs.core.nth.cljs$core$IFn$_invoke$arity$2(clauses,arg__$1));
if(cljs.core.truth_(clause)){
return cljs.pprint.execute_sub_format(clause,navigator,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
} else {
return navigator;
}
});
cljs.pprint.boolean_conditional = (function cljs$pprint$boolean_conditional(params,arg_navigator,offsets){
var vec__8837 = cljs.pprint.next_arg(arg_navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8837,(0),null);
var navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8837,(1),null);
var clauses = cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params);
var clause = (cljs.core.truth_(arg)?cljs.core.second(clauses):cljs.core.first(clauses));
if(cljs.core.truth_(clause)){
return cljs.pprint.execute_sub_format(clause,navigator,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
} else {
return navigator;
}
});
cljs.pprint.check_arg_conditional = (function cljs$pprint$check_arg_conditional(params,arg_navigator,offsets){
var vec__8840 = cljs.pprint.next_arg(arg_navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8840,(0),null);
var navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8840,(1),null);
var clauses = cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params);
var clause = (cljs.core.truth_(arg)?cljs.core.first(clauses):null);
if(cljs.core.truth_(arg)){
if(cljs.core.truth_(clause)){
return cljs.pprint.execute_sub_format(clause,arg_navigator,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
} else {
return arg_navigator;
}
} else {
return navigator;
}
});
cljs.pprint.iterate_sublist = (function cljs$pprint$iterate_sublist(params,navigator,offsets){
var max_count = cljs.core.cst$kw$max_DASH_iterations.cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params));
var vec__8843 = ((cljs.core.empty_QMARK_(param_clause))?cljs.pprint.get_format_arg(navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8843,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8843,(1),null);
var vec__8846 = cljs.pprint.next_arg(navigator__$1);
var arg_list = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8846,(0),null);
var navigator__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8846,(1),null);
var args = cljs.pprint.init_navigator(arg_list);
var count = (0);
var args__$1 = args;
var last_pos = ((-1) | (0));
while(true){
if(((cljs.core.not(max_count)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(args__$1),last_pos)) && ((count > (1))))){
throw Error("%{ construct not consuming any arguments: Infinite loop!");
} else {
}

if(cljs.core.truth_((function (){var or__3922__auto__ = ((cljs.core.empty_QMARK_(cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(args__$1))) && (((cljs.core.not(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$right_DASH_params.cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))))));
if(or__3922__auto__){
return or__3922__auto__;
} else {
var and__3911__auto__ = max_count;
if(cljs.core.truth_(and__3911__auto__)){
return (count >= max_count);
} else {
return and__3911__auto__;
}
}
})())){
return navigator__$2;
} else {
var iter_result = cljs.pprint.execute_sub_format(clause,args__$1,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$up_DASH_arrow,cljs.core.first(iter_result))){
return navigator__$2;
} else {
var G__8849 = (count + (1));
var G__8850 = iter_result;
var G__8851 = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(args__$1);
count = G__8849;
args__$1 = G__8850;
last_pos = G__8851;
continue;
}
}
break;
}
});
cljs.pprint.iterate_list_of_sublists = (function cljs$pprint$iterate_list_of_sublists(params,navigator,offsets){
var max_count = cljs.core.cst$kw$max_DASH_iterations.cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params));
var vec__8852 = ((cljs.core.empty_QMARK_(param_clause))?cljs.pprint.get_format_arg(navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8852,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8852,(1),null);
var vec__8855 = cljs.pprint.next_arg(navigator__$1);
var arg_list = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8855,(0),null);
var navigator__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8855,(1),null);
var count = (0);
var arg_list__$1 = arg_list;
while(true){
if(cljs.core.truth_((function (){var or__3922__auto__ = ((cljs.core.empty_QMARK_(arg_list__$1)) && (((cljs.core.not(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$right_DASH_params.cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))))));
if(or__3922__auto__){
return or__3922__auto__;
} else {
var and__3911__auto__ = max_count;
if(cljs.core.truth_(and__3911__auto__)){
return (count >= max_count);
} else {
return and__3911__auto__;
}
}
})())){
return navigator__$2;
} else {
var iter_result = cljs.pprint.execute_sub_format(clause,cljs.pprint.init_navigator(cljs.core.first(arg_list__$1)),cljs.pprint.init_navigator(cljs.core.next(arg_list__$1)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$colon_DASH_up_DASH_arrow,cljs.core.first(iter_result))){
return navigator__$2;
} else {
var G__8858 = (count + (1));
var G__8859 = cljs.core.next(arg_list__$1);
count = G__8858;
arg_list__$1 = G__8859;
continue;
}
}
break;
}
});
cljs.pprint.iterate_main_list = (function cljs$pprint$iterate_main_list(params,navigator,offsets){
var max_count = cljs.core.cst$kw$max_DASH_iterations.cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params));
var vec__8860 = ((cljs.core.empty_QMARK_(param_clause))?cljs.pprint.get_format_arg(navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8860,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8860,(1),null);
var count = (0);
var navigator__$2 = navigator__$1;
var last_pos = ((-1) | (0));
while(true){
if(((cljs.core.not(max_count)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator__$2),last_pos)) && ((count > (1))))){
throw Error("%@{ construct not consuming any arguments: Infinite loop!");
} else {
}

if(cljs.core.truth_((function (){var or__3922__auto__ = ((cljs.core.empty_QMARK_(cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator__$2))) && (((cljs.core.not(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$right_DASH_params.cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))))));
if(or__3922__auto__){
return or__3922__auto__;
} else {
var and__3911__auto__ = max_count;
if(cljs.core.truth_(and__3911__auto__)){
return (count >= max_count);
} else {
return and__3911__auto__;
}
}
})())){
return navigator__$2;
} else {
var iter_result = cljs.pprint.execute_sub_format(clause,navigator__$2,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$up_DASH_arrow,cljs.core.first(iter_result))){
return cljs.core.second(iter_result);
} else {
var G__8863 = (count + (1));
var G__8864 = iter_result;
var G__8865 = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator__$2);
count = G__8863;
navigator__$2 = G__8864;
last_pos = G__8865;
continue;
}
}
break;
}
});
cljs.pprint.iterate_main_sublists = (function cljs$pprint$iterate_main_sublists(params,navigator,offsets){
var max_count = cljs.core.cst$kw$max_DASH_iterations.cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params));
var vec__8866 = ((cljs.core.empty_QMARK_(param_clause))?cljs.pprint.get_format_arg(navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8866,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8866,(1),null);
var count = (0);
var navigator__$2 = navigator__$1;
while(true){
if(cljs.core.truth_((function (){var or__3922__auto__ = ((cljs.core.empty_QMARK_(cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator__$2))) && (((cljs.core.not(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$right_DASH_params.cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))))));
if(or__3922__auto__){
return or__3922__auto__;
} else {
var and__3911__auto__ = max_count;
if(cljs.core.truth_(and__3911__auto__)){
return (count >= max_count);
} else {
return and__3911__auto__;
}
}
})())){
return navigator__$2;
} else {
var vec__8869 = cljs.pprint.next_arg_or_nil(navigator__$2);
var sublist = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8869,(0),null);
var navigator__$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8869,(1),null);
var iter_result = cljs.pprint.execute_sub_format(clause,cljs.pprint.init_navigator(sublist),navigator__$3);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$colon_DASH_up_DASH_arrow,cljs.core.first(iter_result))){
return navigator__$3;
} else {
var G__8872 = (count + (1));
var G__8873 = navigator__$3;
count = G__8872;
navigator__$2 = G__8873;
continue;
}
}
break;
}
});
cljs.pprint.logical_block_or_justify = (function cljs$pprint$logical_block_or_justify(params,navigator,offsets){
if(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$right_DASH_params.cljs$core$IFn$_invoke$arity$1(params)))){
return (cljs.pprint.format_logical_block.cljs$core$IFn$_invoke$arity$3 ? cljs.pprint.format_logical_block.cljs$core$IFn$_invoke$arity$3(params,navigator,offsets) : cljs.pprint.format_logical_block.call(null,params,navigator,offsets));
} else {
return (cljs.pprint.justify_clauses.cljs$core$IFn$_invoke$arity$3 ? cljs.pprint.justify_clauses.cljs$core$IFn$_invoke$arity$3(params,navigator,offsets) : cljs.pprint.justify_clauses.call(null,params,navigator,offsets));
}
});
cljs.pprint.render_clauses = (function cljs$pprint$render_clauses(clauses,navigator,base_navigator){
var clauses__$1 = clauses;
var acc = cljs.core.PersistentVector.EMPTY;
var navigator__$1 = navigator;
while(true){
if(cljs.core.empty_QMARK_(clauses__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,navigator__$1], null);
} else {
var clause = cljs.core.first(clauses__$1);
var vec__8874 = (function (){var sb = (new goog.string.StringBuffer());
var _STAR_out_STAR_8877 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = (new cljs.core.StringBufferWriter(sb));

try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.pprint.execute_sub_format(clause,navigator__$1,base_navigator),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join('')], null);
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_8877;
}})();
var iter_result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8874,(0),null);
var result_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8874,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$up_DASH_arrow,cljs.core.first(iter_result))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,cljs.core.second(iter_result)], null);
} else {
var G__8878 = cljs.core.next(clauses__$1);
var G__8879 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,result_str);
var G__8880 = iter_result;
clauses__$1 = G__8878;
acc = G__8879;
navigator__$1 = G__8880;
continue;
}
}
break;
}
});
cljs.pprint.justify_clauses = (function cljs$pprint$justify_clauses(params,navigator,offsets){
var vec__8881 = (function (){var temp__5535__auto__ = cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(temp__5535__auto__)){
var else$ = temp__5535__auto__;
return cljs.pprint.render_clauses(else$,navigator,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
} else {
return null;
}
})();
var vec__8884 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8881,(0),null);
var eol_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8884,(0),null);
var new_navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8881,(1),null);
var navigator__$1 = (function (){var or__3922__auto__ = new_navigator;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return navigator;
}
})();
var vec__8887 = (function (){var temp__5535__auto__ = cljs.core.cst$kw$else_DASH_params.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(temp__5535__auto__)){
var p = temp__5535__auto__;
return cljs.pprint.realize_parameter_list(p,navigator__$1);
} else {
return null;
}
})();
var else_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8887,(0),null);
var new_navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8887,(1),null);
var navigator__$2 = (function (){var or__3922__auto__ = new_navigator__$1;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return navigator__$1;
}
})();
var min_remaining = (function (){var or__3922__auto__ = cljs.core.first(cljs.core.cst$kw$min_DASH_remaining.cljs$core$IFn$_invoke$arity$1(else_params));
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return (0);
}
})();
var max_columns = (function (){var or__3922__auto__ = cljs.core.first(cljs.core.cst$kw$max_DASH_columns.cljs$core$IFn$_invoke$arity$1(else_params));
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.pprint.get_max_column(cljs.core._STAR_out_STAR_);
}
})();
var clauses = cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params);
var vec__8890 = cljs.pprint.render_clauses(clauses,navigator__$2,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
var strs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8890,(0),null);
var navigator__$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8890,(1),null);
var slots = (function (){var x__4006__auto__ = (1);
var y__4007__auto__ = (((cljs.core.count(strs) - (1)) + (cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?(1):(0))) + (cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))?(1):(0)));
return ((x__4006__auto__ > y__4007__auto__) ? x__4006__auto__ : y__4007__auto__);
})();
var chars = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,strs));
var mincol = cljs.core.cst$kw$mincol.cljs$core$IFn$_invoke$arity$1(params);
var minpad = cljs.core.cst$kw$minpad.cljs$core$IFn$_invoke$arity$1(params);
var colinc = cljs.core.cst$kw$colinc.cljs$core$IFn$_invoke$arity$1(params);
var minout = (chars + (slots * minpad));
var result_columns = (((minout <= mincol))?mincol:(mincol + (colinc * ((1) + cljs.core.quot(((minout - mincol) - (1)),colinc)))));
var total_pad = (result_columns - chars);
var pad = (function (){var x__4006__auto__ = minpad;
var y__4007__auto__ = cljs.core.quot(total_pad,slots);
return ((x__4006__auto__ > y__4007__auto__) ? x__4006__auto__ : y__4007__auto__);
})();
var extra_pad = (total_pad - (pad * slots));
var pad_str = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(pad,cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params)));
if(cljs.core.truth_((function (){var and__3911__auto__ = eol_str;
if(cljs.core.truth_(and__3911__auto__)){
return (((cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(cljs.core._STAR_out_STAR_)))) + min_remaining) + result_columns) > max_columns);
} else {
return and__3911__auto__;
}
})())){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([eol_str], 0));
} else {
}

var slots_8893__$1 = slots;
var extra_pad_8894__$1 = extra_pad;
var strs_8895__$1 = strs;
var pad_only_8896 = (function (){var or__3922__auto__ = cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(strs_8895__$1),(1))) && (cljs.core.not(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))));
}
})();
while(true){
if(cljs.core.seq(strs_8895__$1)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.not(pad_only_8896))?cljs.core.first(strs_8895__$1):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var or__3922__auto__ = pad_only_8896;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = cljs.core.next(strs_8895__$1);
if(or__3922__auto____$1){
return or__3922__auto____$1;
} else {
return cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
}
}
})())?pad_str:null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((extra_pad_8894__$1 > (0)))?cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params):null))].join('')], 0));

var G__8897 = (slots_8893__$1 - (1));
var G__8898 = (extra_pad_8894__$1 - (1));
var G__8899 = (cljs.core.truth_(pad_only_8896)?strs_8895__$1:cljs.core.next(strs_8895__$1));
var G__8900 = false;
slots_8893__$1 = G__8897;
extra_pad_8894__$1 = G__8898;
strs_8895__$1 = G__8899;
pad_only_8896 = G__8900;
continue;
} else {
}
break;
}

return navigator__$3;
});
/**
 * Returns a proxy that wraps writer, converting all characters to lower case
 */
cljs.pprint.downcase_writer = (function cljs$pprint$downcase_writer(writer){
if(typeof cljs.pprint.t_cljs$pprint8901 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint8901 = (function (writer,meta8902){
this.writer = writer;
this.meta8902 = meta8902;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint8901.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8903,meta8902__$1){
var self__ = this;
var _8903__$1 = this;
return (new cljs.pprint.t_cljs$pprint8901(self__.writer,meta8902__$1));
});

cljs.pprint.t_cljs$pprint8901.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8903){
var self__ = this;
var _8903__$1 = this;
return self__.meta8902;
});

cljs.pprint.t_cljs$pprint8901.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
});

cljs.pprint.t_cljs$pprint8901.prototype.cljs$core$IWriter$_write$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__8904 = cljs.core._EQ_;
var expr__8905 = cljs.core.type(x);
if(cljs.core.truth_((pred__8904.cljs$core$IFn$_invoke$arity$2 ? pred__8904.cljs$core$IFn$_invoke$arity$2(String,expr__8905) : pred__8904.call(null,String,expr__8905)))){
var s = x;
return cljs.core._write(self__.writer,clojure.string.lower_case(s));
} else {
if(cljs.core.truth_((pred__8904.cljs$core$IFn$_invoke$arity$2 ? pred__8904.cljs$core$IFn$_invoke$arity$2(Number,expr__8905) : pred__8904.call(null,Number,expr__8905)))){
var c = x;
return cljs.core._write(self__.writer,clojure.string.lower_case(cljs.core.char$(c)));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__8905)].join('')));
}
}
});

cljs.pprint.t_cljs$pprint8901.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$writer,cljs.core.cst$sym$meta8902], null);
});

cljs.pprint.t_cljs$pprint8901.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint8901.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint8901";

cljs.pprint.t_cljs$pprint8901.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.pprint/t_cljs$pprint8901");
});

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint8901.
 */
cljs.pprint.__GT_t_cljs$pprint8901 = (function cljs$pprint$downcase_writer_$___GT_t_cljs$pprint8901(writer__$1,meta8902){
return (new cljs.pprint.t_cljs$pprint8901(writer__$1,meta8902));
});

}

return (new cljs.pprint.t_cljs$pprint8901(writer,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a proxy that wraps writer, converting all characters to upper case
 */
cljs.pprint.upcase_writer = (function cljs$pprint$upcase_writer(writer){
if(typeof cljs.pprint.t_cljs$pprint8907 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint8907 = (function (writer,meta8908){
this.writer = writer;
this.meta8908 = meta8908;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint8907.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8909,meta8908__$1){
var self__ = this;
var _8909__$1 = this;
return (new cljs.pprint.t_cljs$pprint8907(self__.writer,meta8908__$1));
});

cljs.pprint.t_cljs$pprint8907.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8909){
var self__ = this;
var _8909__$1 = this;
return self__.meta8908;
});

cljs.pprint.t_cljs$pprint8907.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
});

cljs.pprint.t_cljs$pprint8907.prototype.cljs$core$IWriter$_write$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__8910 = cljs.core._EQ_;
var expr__8911 = cljs.core.type(x);
if(cljs.core.truth_((pred__8910.cljs$core$IFn$_invoke$arity$2 ? pred__8910.cljs$core$IFn$_invoke$arity$2(String,expr__8911) : pred__8910.call(null,String,expr__8911)))){
var s = x;
return cljs.core._write(self__.writer,clojure.string.upper_case(s));
} else {
if(cljs.core.truth_((pred__8910.cljs$core$IFn$_invoke$arity$2 ? pred__8910.cljs$core$IFn$_invoke$arity$2(Number,expr__8911) : pred__8910.call(null,Number,expr__8911)))){
var c = x;
return cljs.core._write(self__.writer,clojure.string.upper_case(cljs.core.char$(c)));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__8911)].join('')));
}
}
});

cljs.pprint.t_cljs$pprint8907.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$writer,cljs.core.cst$sym$meta8908], null);
});

cljs.pprint.t_cljs$pprint8907.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint8907.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint8907";

cljs.pprint.t_cljs$pprint8907.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.pprint/t_cljs$pprint8907");
});

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint8907.
 */
cljs.pprint.__GT_t_cljs$pprint8907 = (function cljs$pprint$upcase_writer_$___GT_t_cljs$pprint8907(writer__$1,meta8908){
return (new cljs.pprint.t_cljs$pprint8907(writer__$1,meta8908));
});

}

return (new cljs.pprint.t_cljs$pprint8907(writer,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Capitalizes the words in a string. If first? is false, don't capitalize the
 *                                    first character of the string even if it's a letter.
 */
cljs.pprint.capitalize_string = (function cljs$pprint$capitalize_string(s,first_QMARK_){
var f = cljs.core.first(s);
var s__$1 = (cljs.core.truth_((function (){var and__3911__auto__ = first_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
var and__3911__auto____$1 = f;
if(cljs.core.truth_(and__3911__auto____$1)){
return goog.string.isUnicodeChar(f);
} else {
return and__3911__auto____$1;
}
} else {
return and__3911__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case(f)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(1)))].join(''):s);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.first(cljs.pprint.consume(((function (f,s__$1){
return (function (s__$2){
if(cljs.core.empty_QMARK_(s__$2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null);
} else {
var m = RegExp("\\W\\w","g").exec(s__$2);
var offset = (function (){var and__3911__auto__ = m;
if(cljs.core.truth_(and__3911__auto__)){
return (m.index + (1));
} else {
return and__3911__auto__;
}
})();
if(cljs.core.truth_(offset)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s__$2,(0),offset)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s__$2,offset)))].join(''),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s__$2,(offset + (1)))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$2,null], null);
}
}
});})(f,s__$1))
,s__$1)));
});
/**
 * Returns a proxy that wraps writer, capitalizing all words
 */
cljs.pprint.capitalize_word_writer = (function cljs$pprint$capitalize_word_writer(writer){
var last_was_whitespace_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if(typeof cljs.pprint.t_cljs$pprint8913 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint8913 = (function (writer,last_was_whitespace_QMARK_,meta8914){
this.writer = writer;
this.last_was_whitespace_QMARK_ = last_was_whitespace_QMARK_;
this.meta8914 = meta8914;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint8913.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (last_was_whitespace_QMARK_){
return (function (_8915,meta8914__$1){
var self__ = this;
var _8915__$1 = this;
return (new cljs.pprint.t_cljs$pprint8913(self__.writer,self__.last_was_whitespace_QMARK_,meta8914__$1));
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint8913.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (last_was_whitespace_QMARK_){
return (function (_8915){
var self__ = this;
var _8915__$1 = this;
return self__.meta8914;
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint8913.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (last_was_whitespace_QMARK_){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint8913.prototype.cljs$core$IWriter$_write$arity$2 = ((function (last_was_whitespace_QMARK_){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__8916 = cljs.core._EQ_;
var expr__8917 = cljs.core.type(x);
if(cljs.core.truth_((pred__8916.cljs$core$IFn$_invoke$arity$2 ? pred__8916.cljs$core$IFn$_invoke$arity$2(String,expr__8917) : pred__8916.call(null,String,expr__8917)))){
var s = x;
cljs.core._write(self__.writer,cljs.pprint.capitalize_string(s.toLowerCase(),cljs.core.deref(self__.last_was_whitespace_QMARK_)));

if((s.length > (0))){
return cljs.core.reset_BANG_(self__.last_was_whitespace_QMARK_,(function (){var G__8919 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,(cljs.core.count(s) - (1)));
return goog.string.isEmptyOrWhitespace(G__8919);
})());
} else {
return null;
}
} else {
if(cljs.core.truth_((pred__8916.cljs$core$IFn$_invoke$arity$2 ? pred__8916.cljs$core$IFn$_invoke$arity$2(Number,expr__8917) : pred__8916.call(null,Number,expr__8917)))){
var c = cljs.core.char$(x);
var mod_c = (cljs.core.truth_(cljs.core.deref(self__.last_was_whitespace_QMARK_))?clojure.string.upper_case(c):c);
cljs.core._write(self__.writer,mod_c);

return cljs.core.reset_BANG_(self__.last_was_whitespace_QMARK_,goog.string.isEmptyOrWhitespace(c));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__8917)].join('')));
}
}
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint8913.getBasis = ((function (last_was_whitespace_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$writer,cljs.core.cst$sym$last_DASH_was_DASH_whitespace_QMARK_,cljs.core.cst$sym$meta8914], null);
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint8913.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint8913.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint8913";

cljs.pprint.t_cljs$pprint8913.cljs$lang$ctorPrWriter = ((function (last_was_whitespace_QMARK_){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.pprint/t_cljs$pprint8913");
});})(last_was_whitespace_QMARK_))
;

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint8913.
 */
cljs.pprint.__GT_t_cljs$pprint8913 = ((function (last_was_whitespace_QMARK_){
return (function cljs$pprint$capitalize_word_writer_$___GT_t_cljs$pprint8913(writer__$1,last_was_whitespace_QMARK___$1,meta8914){
return (new cljs.pprint.t_cljs$pprint8913(writer__$1,last_was_whitespace_QMARK___$1,meta8914));
});})(last_was_whitespace_QMARK_))
;

}

return (new cljs.pprint.t_cljs$pprint8913(writer,last_was_whitespace_QMARK_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a proxy that wraps writer, capitalizing the first word
 */
cljs.pprint.init_cap_writer = (function cljs$pprint$init_cap_writer(writer){
var capped = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
if(typeof cljs.pprint.t_cljs$pprint8920 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint8920 = (function (writer,capped,meta8921){
this.writer = writer;
this.capped = capped;
this.meta8921 = meta8921;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint8920.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (capped){
return (function (_8922,meta8921__$1){
var self__ = this;
var _8922__$1 = this;
return (new cljs.pprint.t_cljs$pprint8920(self__.writer,self__.capped,meta8921__$1));
});})(capped))
;

cljs.pprint.t_cljs$pprint8920.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (capped){
return (function (_8922){
var self__ = this;
var _8922__$1 = this;
return self__.meta8921;
});})(capped))
;

cljs.pprint.t_cljs$pprint8920.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (capped){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
});})(capped))
;

cljs.pprint.t_cljs$pprint8920.prototype.cljs$core$IWriter$_write$arity$2 = ((function (capped){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__8923 = cljs.core._EQ_;
var expr__8924 = cljs.core.type(x);
if(cljs.core.truth_((pred__8923.cljs$core$IFn$_invoke$arity$2 ? pred__8923.cljs$core$IFn$_invoke$arity$2(String,expr__8924) : pred__8923.call(null,String,expr__8924)))){
var s = clojure.string.lower_case(x);
if(cljs.core.not(cljs.core.deref(self__.capped))){
var m = RegExp("\\S","g").exec(s);
var offset = (function (){var and__3911__auto__ = m;
if(cljs.core.truth_(and__3911__auto__)){
return m.index;
} else {
return and__3911__auto__;
}
})();
if(cljs.core.truth_(offset)){
cljs.core._write(self__.writer,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),offset)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,offset))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.lower_case(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(offset + (1)))))].join(''));

return cljs.core.reset_BANG_(self__.capped,true);
} else {
return cljs.core._write(self__.writer,s);
}
} else {
return cljs.core._write(self__.writer,clojure.string.lower_case(s));
}
} else {
if(cljs.core.truth_((pred__8923.cljs$core$IFn$_invoke$arity$2 ? pred__8923.cljs$core$IFn$_invoke$arity$2(Number,expr__8924) : pred__8923.call(null,Number,expr__8924)))){
var c = cljs.core.char$(x);
if(cljs.core.truth_((function (){var and__3911__auto__ = cljs.core.not(cljs.core.deref(self__.capped));
if(and__3911__auto__){
return goog.string.isUnicodeChar(c);
} else {
return and__3911__auto__;
}
})())){
cljs.core.reset_BANG_(self__.capped,true);

return cljs.core._write(self__.writer,clojure.string.upper_case(c));
} else {
return cljs.core._write(self__.writer,clojure.string.lower_case(c));
}
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__8924)].join('')));
}
}
});})(capped))
;

cljs.pprint.t_cljs$pprint8920.getBasis = ((function (capped){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$writer,cljs.core.cst$sym$capped,cljs.core.cst$sym$meta8921], null);
});})(capped))
;

cljs.pprint.t_cljs$pprint8920.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint8920.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint8920";

cljs.pprint.t_cljs$pprint8920.cljs$lang$ctorPrWriter = ((function (capped){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.pprint/t_cljs$pprint8920");
});})(capped))
;

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint8920.
 */
cljs.pprint.__GT_t_cljs$pprint8920 = ((function (capped){
return (function cljs$pprint$init_cap_writer_$___GT_t_cljs$pprint8920(writer__$1,capped__$1,meta8921){
return (new cljs.pprint.t_cljs$pprint8920(writer__$1,capped__$1,meta8921));
});})(capped))
;

}

return (new cljs.pprint.t_cljs$pprint8920(writer,capped,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.pprint.modify_case = (function cljs$pprint$modify_case(make_writer,params,navigator,offsets){
var clause = cljs.core.first(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params));
var _STAR_out_STAR_8926 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = (make_writer.cljs$core$IFn$_invoke$arity$1 ? make_writer.cljs$core$IFn$_invoke$arity$1(cljs.core._STAR_out_STAR_) : make_writer.call(null,cljs.core._STAR_out_STAR_));

try{return cljs.pprint.execute_sub_format(clause,navigator,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_8926;
}});
/**
 * Returns the IWriter passed in wrapped in a pretty writer proxy, unless it's
 * already a pretty writer. Generally, it is unnecessary to call this function, since pprint,
 * write, and cl-format all call it if they need to. However if you want the state to be
 * preserved across calls, you will want to wrap them with this.
 * 
 * For example, when you want to generate column-aware output with multiple calls to cl-format,
 * do it like in this example:
 * 
 *  (defn print-table [aseq column-width]
 *    (binding [*out* (get-pretty-writer *out*)]
 *      (doseq [row aseq]
 *        (doseq [col row]
 *          (cl-format true "~4D~7,vT" col column-width))
 *        (prn))))
 * 
 * Now when you run:
 * 
 *  user> (print-table (map #(vector % (* % %) (* % % %)) (range 1 11)) 8)
 * 
 * It prints a table of squares and cubes for the numbers from 1 to 10:
 * 
 *     1      1       1
 *     2      4       8
 *     3      9      27
 *     4     16      64
 *     5     25     125
 *     6     36     216
 *     7     49     343
 *     8     64     512
 *     9     81     729
 *    10    100    1000
 */
cljs.pprint.get_pretty_writer = (function cljs$pprint$get_pretty_writer(writer){
if(cljs.core.truth_(cljs.pprint.pretty_writer_QMARK_(writer))){
return writer;
} else {
return cljs.pprint.pretty_writer(writer,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_);
}
});
/**
 * Make a newline if *out* is not already at the beginning of the line. If *out* is
 * not a pretty writer (which keeps track of columns), this function always outputs a newline.
 */
cljs.pprint.fresh_line = (function cljs$pprint$fresh_line(){
if(((!((cljs.core._STAR_out_STAR_ == null)))?(((((cljs.core._STAR_out_STAR_.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === cljs.core._STAR_out_STAR_.cljs$core$IDeref$))))?true:(((!cljs.core._STAR_out_STAR_.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,cljs.core._STAR_out_STAR_):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,cljs.core._STAR_out_STAR_))){
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(cljs.core._STAR_out_STAR_))))))){
return cljs.pprint.prn();
} else {
return null;
}
} else {
return cljs.pprint.prn();
}
});
cljs.pprint.absolute_tabulation = (function cljs$pprint$absolute_tabulation(params,navigator,offsets){
var colnum_8928 = cljs.core.cst$kw$colnum.cljs$core$IFn$_invoke$arity$1(params);
var colinc_8929 = cljs.core.cst$kw$colinc.cljs$core$IFn$_invoke$arity$1(params);
var current_8930 = cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(cljs.core._STAR_out_STAR_))));
var space_count_8931 = (((current_8930 < colnum_8928))?(colnum_8928 - current_8930):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(colinc_8929,(0)))?(0):(colinc_8929 - cljs.core.rem((current_8930 - colnum_8928),colinc_8929))
));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(space_count_8931," "))], 0));

return navigator;
});
cljs.pprint.relative_tabulation = (function cljs$pprint$relative_tabulation(params,navigator,offsets){
var colrel_8932 = cljs.core.cst$kw$colnum.cljs$core$IFn$_invoke$arity$1(params);
var colinc_8933 = cljs.core.cst$kw$colinc.cljs$core$IFn$_invoke$arity$1(params);
var start_col_8934 = (colrel_8932 + cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(cljs.core._STAR_out_STAR_)))));
var offset_8935 = (((colinc_8933 > (0)))?cljs.core.rem(start_col_8934,colinc_8933):(0));
var space_count_8936 = (colrel_8932 + ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),offset_8935))?(0):(colinc_8933 - offset_8935)));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(space_count_8936," "))], 0));

return navigator;
});
cljs.pprint.format_logical_block = (function cljs$pprint$format_logical_block(params,navigator,offsets){
var clauses = cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params);
var clause_count = cljs.core.count(clauses);
var prefix = (((clause_count > (1)))?cljs.core.cst$kw$string.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.first(clauses)))):(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?"(":null));
var body = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(clauses,(((clause_count > (1)))?(1):(0)));
var suffix = (((clause_count > (2)))?cljs.core.cst$kw$string.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(clauses,(2))))):(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?")":null));
var vec__8937 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8937,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8937,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_8940_8942 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_8941_8943 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,prefix,null,suffix);

cljs.pprint.execute_sub_format(body,cljs.pprint.init_navigator(arg),cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_8941_8943;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_8940_8942;
}}


return navigator__$1;
});
cljs.pprint.set_indent = (function cljs$pprint$set_indent(params,navigator,offsets){
var relative_to = (cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?cljs.core.cst$kw$current:cljs.core.cst$kw$block);
cljs.pprint.pprint_indent(relative_to,cljs.core.cst$kw$n.cljs$core$IFn$_invoke$arity$1(params));

return navigator;
});
cljs.pprint.conditional_newline = (function cljs$pprint$conditional_newline(params,navigator,offsets){
var kind = (cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))?cljs.core.cst$kw$mandatory:cljs.core.cst$kw$fill):(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))?cljs.core.cst$kw$miser:cljs.core.cst$kw$linear));
cljs.pprint.pprint_newline(kind);

return navigator;
});
cljs.pprint.directive_table = cljs.core.PersistentHashMap.fromArrays(["A","S","D","B","O","X","R","P","C","F","E","G","$","%","&","|","~","\n","T","*","?","(",")","[",";","]","{","}","<",">","^","W","_","I"],[new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"A",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$colinc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$minpad,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (p1__8944_SHARP_,p2__8945_SHARP_,p3__8946_SHARP_){
return cljs.pprint.format_ascii(cljs.core.print_str,p1__8944_SHARP_,p2__8945_SHARP_,p3__8946_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"S",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$colinc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$minpad,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (p1__8947_SHARP_,p2__8948_SHARP_,p3__8949_SHARP_){
return cljs.pprint.format_ascii(cljs.core.pr_str,p1__8947_SHARP_,p2__8948_SHARP_,p3__8949_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"D",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$commachar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),cljs.core.cst$kw$commainterval,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (p1__8950_SHARP_,p2__8951_SHARP_,p3__8952_SHARP_){
return cljs.pprint.format_integer((10),p1__8950_SHARP_,p2__8951_SHARP_,p3__8952_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"B",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$commachar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),cljs.core.cst$kw$commainterval,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (p1__8953_SHARP_,p2__8954_SHARP_,p3__8955_SHARP_){
return cljs.pprint.format_integer((2),p1__8953_SHARP_,p2__8954_SHARP_,p3__8955_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"O",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$commachar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),cljs.core.cst$kw$commainterval,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (p1__8956_SHARP_,p2__8957_SHARP_,p3__8958_SHARP_){
return cljs.pprint.format_integer((8),p1__8956_SHARP_,p2__8957_SHARP_,p3__8958_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"X",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$commachar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),cljs.core.cst$kw$commainterval,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (p1__8959_SHARP_,p2__8960_SHARP_,p3__8961_SHARP_){
return cljs.pprint.format_integer((16),p1__8959_SHARP_,p2__8960_SHARP_,p3__8961_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"R",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(5),[cljs.core.cst$kw$base,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$commachar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),cljs.core.cst$kw$commainterval,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_(cljs.core.first(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(params)))){
return (function (p1__8962_SHARP_,p2__8963_SHARP_,p3__8964_SHARP_){
return cljs.pprint.format_integer(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(p1__8962_SHARP_),p1__8962_SHARP_,p2__8963_SHARP_,p3__8964_SHARP_);
});
} else {
if(cljs.core.truth_((function (){var and__3911__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__3911__auto__;
}
})())){
return (function (p1__8965_SHARP_,p2__8966_SHARP_,p3__8967_SHARP_){
return cljs.pprint.format_old_roman(p1__8965_SHARP_,p2__8966_SHARP_,p3__8967_SHARP_);
});
} else {
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__8968_SHARP_,p2__8969_SHARP_,p3__8970_SHARP_){
return cljs.pprint.format_new_roman(p1__8968_SHARP_,p2__8969_SHARP_,p3__8970_SHARP_);
});
} else {
if(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__8971_SHARP_,p2__8972_SHARP_,p3__8973_SHARP_){
return cljs.pprint.format_ordinal_english(p1__8971_SHARP_,p2__8972_SHARP_,p3__8973_SHARP_);
});
} else {
return (function (p1__8974_SHARP_,p2__8975_SHARP_,p3__8976_SHARP_){
return cljs.pprint.format_cardinal_english(p1__8974_SHARP_,p2__8975_SHARP_,p3__8976_SHARP_);
});

}
}
}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"P",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,navigator,offsets){
var navigator__$1 = (cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params__$1))?cljs.pprint.relative_reposition(navigator,(-1)):navigator);
var strs = (cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params__$1))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["y","ies"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","s"], null));
var vec__8986 = cljs.pprint.next_arg(navigator__$1);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8986,(0),null);
var navigator__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8986,(1),null);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arg,(1)))?cljs.core.first(strs):cljs.core.second(strs))], 0));

return navigator__$2;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"C",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$char_DASH_format,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.pretty_character;
} else {
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.readable_character;
} else {
return cljs.pprint.plain_character;

}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"F",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(5),[cljs.core.cst$kw$w,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$d,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$overflowchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$at,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return cljs.pprint.fixed_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"E",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(7),[cljs.core.cst$kw$w,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$d,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$e,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$overflowchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$exponentchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$at,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return cljs.pprint.exponential_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"G",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(7),[cljs.core.cst$kw$w,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$d,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$e,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$overflowchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$exponentchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$at,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return cljs.pprint.general_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"$",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$d,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),Number], null),cljs.core.cst$kw$n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$w,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return cljs.pprint.dollar_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"%",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$count,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),cljs.core.cst$kw$flags,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var n__4376__auto___9004 = cljs.core.cst$kw$count.cljs$core$IFn$_invoke$arity$1(params__$1);
var i_9005 = (0);
while(true){
if((i_9005 < n__4376__auto___9004)){
cljs.pprint.prn();

var G__9006 = (i_9005 + (1));
i_9005 = G__9006;
continue;
} else {
}
break;
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"&",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$count,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$pretty,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var cnt_9007 = cljs.core.cst$kw$count.cljs$core$IFn$_invoke$arity$1(params__$1);
if((cnt_9007 > (0))){
cljs.pprint.fresh_line();
} else {
}

var n__4376__auto___9008 = (cnt_9007 - (1));
var i_9009 = (0);
while(true){
if((i_9009 < n__4376__auto___9008)){
cljs.pprint.prn();

var G__9010 = (i_9009 + (1));
i_9009 = G__9010;
continue;
} else {
}
break;
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"|",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$count,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),cljs.core.cst$kw$flags,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var n__4376__auto___9011 = cljs.core.cst$kw$count.cljs$core$IFn$_invoke$arity$1(params__$1);
var i_9012 = (0);
while(true){
if((i_9012 < n__4376__auto___9011)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\f"], 0));

var G__9013 = (i_9012 + (1));
i_9012 = G__9013;
continue;
} else {
}
break;
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"~",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),cljs.core.cst$kw$flags,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var n = cljs.core.cst$kw$n.cljs$core$IFn$_invoke$arity$1(params__$1);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(n,"~"))], 0));

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"\n",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params__$1))){
cljs.pprint.prn();
} else {
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"T",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(2),[cljs.core.cst$kw$colnum,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$colinc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$at,null,cljs.core.cst$kw$pretty,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__8977_SHARP_,p2__8978_SHARP_,p3__8979_SHARP_){
return cljs.pprint.relative_tabulation(p1__8977_SHARP_,p2__8978_SHARP_,p3__8979_SHARP_);
});
} else {
return (function (p1__8980_SHARP_,p2__8981_SHARP_,p3__8982_SHARP_){
return cljs.pprint.absolute_tabulation(p1__8980_SHARP_,p2__8981_SHARP_,p3__8982_SHARP_);
});
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"*",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,navigator,offsets){
var n = cljs.core.cst$kw$n.cljs$core$IFn$_invoke$arity$1(params__$1);
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params__$1))){
return cljs.pprint.absolute_reposition(navigator,n);
} else {
return cljs.pprint.relative_reposition(navigator,(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params__$1))?(- n):n));
}
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"?",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$at,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
return (function (params__$1,navigator,offsets){
var vec__8989 = cljs.pprint.get_format_arg(navigator);
var subformat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8989,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8989,(1),null);
return cljs.pprint.execute_sub_format(subformat,navigator__$1,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params__$1));
});
} else {
return (function (params__$1,navigator,offsets){
var vec__8992 = cljs.pprint.get_format_arg(navigator);
var subformat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8992,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8992,(1),null);
var vec__8995 = cljs.pprint.next_arg(navigator__$1);
var subargs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8995,(0),null);
var navigator__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8995,(1),null);
var sub_navigator = cljs.pprint.init_navigator(subargs);
cljs.pprint.execute_sub_format(subformat,sub_navigator,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params__$1));

return navigator__$2;
});
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"(",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$right,")",cljs.core.cst$kw$allows_DASH_separator,null,cljs.core.cst$kw$else,null], null),cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
var mod_case_writer = (cljs.core.truth_((function (){var and__3911__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__3911__auto__;
}
})())?cljs.pprint.upcase_writer:(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?cljs.pprint.capitalize_word_writer:(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))?cljs.pprint.init_cap_writer:cljs.pprint.downcase_writer
)));
return ((function (mod_case_writer){
return (function (p1__8983_SHARP_,p2__8984_SHARP_,p3__8985_SHARP_){
return cljs.pprint.modify_case(mod_case_writer,p1__8983_SHARP_,p2__8984_SHARP_,p3__8985_SHARP_);
});
;})(mod_case_writer))
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,")",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"[",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$selector,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null], null), null),cljs.core.cst$kw$bracket_DASH_info,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$right,"]",cljs.core.cst$kw$allows_DASH_separator,true,cljs.core.cst$kw$else,cljs.core.cst$kw$last], null),cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.boolean_conditional;
} else {
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.check_arg_conditional;
} else {
return cljs.pprint.choice_conditional;

}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,";",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(2),[cljs.core.cst$kw$min_DASH_remaining,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$max_DASH_columns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$colon,null], null), null),cljs.core.cst$kw$bracket_DASH_info,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$separator,true], null),cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"]",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"{",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$max_DASH_iterations,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$right,"}",cljs.core.cst$kw$allows_DASH_separator,false], null),cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_((function (){var and__3911__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__3911__auto__;
}
})())){
return cljs.pprint.iterate_main_sublists;
} else {
if(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.iterate_list_of_sublists;
} else {
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.iterate_main_list;
} else {
return cljs.pprint.iterate_sublist;

}
}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"}",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$colon,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"<",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$colinc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$minpad,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null,cljs.core.cst$kw$pretty,null], null), null),cljs.core.cst$kw$bracket_DASH_info,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$right,">",cljs.core.cst$kw$allows_DASH_separator,true,cljs.core.cst$kw$else,cljs.core.cst$kw$first], null),cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return cljs.pprint.logical_block_or_justify;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,">",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$colon,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"^",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(3),[cljs.core.cst$kw$arg1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$arg2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$arg3,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$colon,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,navigator,offsets){
var arg1 = cljs.core.cst$kw$arg1.cljs$core$IFn$_invoke$arity$1(params__$1);
var arg2 = cljs.core.cst$kw$arg2.cljs$core$IFn$_invoke$arity$1(params__$1);
var arg3 = cljs.core.cst$kw$arg3.cljs$core$IFn$_invoke$arity$1(params__$1);
var exit = (cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params__$1))?cljs.core.cst$kw$colon_DASH_up_DASH_arrow:cljs.core.cst$kw$up_DASH_arrow);
if(cljs.core.truth_((function (){var and__3911__auto__ = arg1;
if(cljs.core.truth_(and__3911__auto__)){
var and__3911__auto____$1 = arg2;
if(cljs.core.truth_(and__3911__auto____$1)){
return arg3;
} else {
return and__3911__auto____$1;
}
} else {
return and__3911__auto__;
}
})())){
if((((arg1 <= arg2)) && ((arg2 <= arg3)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}
} else {
if(cljs.core.truth_((function (){var and__3911__auto__ = arg1;
if(cljs.core.truth_(and__3911__auto__)){
return arg2;
} else {
return and__3911__auto__;
}
})())){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arg1,arg2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}
} else {
if(cljs.core.truth_(arg1)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arg1,(0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}
} else {
if((cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params__$1))?cljs.core.empty_QMARK_(cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params__$1))):cljs.core.empty_QMARK_(cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}

}
}
}
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"W",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null,cljs.core.cst$kw$pretty,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_((function (){var or__3922__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params);
}
})())){
var bindings = cljs.core.concat.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$level,null,cljs.core.cst$kw$length,null], null):cljs.core.PersistentVector.EMPTY),(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pretty,true], null):cljs.core.PersistentVector.EMPTY));
return ((function (bindings){
return (function (params__$1,navigator,offsets){
var vec__8998 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8998,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8998,(1),null);
if(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.pprint.write,arg,bindings))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$up_DASH_arrow,navigator__$1], null);
} else {
return navigator__$1;
}
});
;})(bindings))
} else {
return (function (params__$1,navigator,offsets){
var vec__9001 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9001,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9001,(1),null);
if(cljs.core.truth_(cljs.pprint.write_out(arg))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$up_DASH_arrow,navigator__$1], null);
} else {
return navigator__$1;
}
});
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"_",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return cljs.pprint.conditional_newline;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"I",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$colon,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return cljs.pprint.set_indent;
})], null)]);
cljs.pprint.param_pattern = /^([vV]|#|('.)|([+-]?\d+)|(?=,))/;
cljs.pprint.special_params = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$remaining_DASH_arg_DASH_count,null,cljs.core.cst$kw$parameter_DASH_from_DASH_args,null], null), null);
cljs.pprint.extract_param = (function cljs$pprint$extract_param(p__9014){
var vec__9015 = p__9014;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9015,(0),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9015,(1),null);
var saw_comma = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9015,(2),null);
var m = (new RegExp(cljs.pprint.param_pattern.source,"g"));
var param = m.exec(s);
if(cljs.core.truth_(param)){
var token_str = cljs.core.first(param);
var remainder = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,m.lastIndex);
var new_offset = (offset + m.lastIndex);
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(",",cljs.core.nth.cljs$core$IFn$_invoke$arity$2(remainder,(0))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [token_str,offset], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [remainder,new_offset,false], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [token_str,offset], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$2(remainder,(1)),(new_offset + (1)),true], null)], null);
}
} else {
if(cljs.core.truth_(saw_comma)){
return cljs.pprint.format_error("Badly formed parameters in format directive",offset);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,offset], null)], null);
}
}
});
cljs.pprint.extract_params = (function cljs$pprint$extract_params(s,offset){
return cljs.pprint.consume(cljs.pprint.extract_param,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,offset,false], null));
});
/**
 * Translate the string representation of a param to the internalized
 *                                    representation
 */
cljs.pprint.translate_param = (function cljs$pprint$translate_param(p__9018){
var vec__9019 = p__9018;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9019,(0),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9019,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p.length,(0)))?null:((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p.length,(1))) && (cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["V",null,"v",null], null), null),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p,(0))))))?cljs.core.cst$kw$parameter_DASH_from_DASH_args:((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p.length,(1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("#",cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p,(0))))))?cljs.core.cst$kw$remaining_DASH_arg_DASH_count:((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p.length,(2))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("'",cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p,(0))))))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p,(1)):parseInt(p,(10))
)))),offset], null);
});
cljs.pprint.flag_defs = new cljs.core.PersistentArrayMap(null, 2, [":",cljs.core.cst$kw$colon,"@",cljs.core.cst$kw$at], null);
cljs.pprint.extract_flags = (function cljs$pprint$extract_flags(s,offset){
return cljs.pprint.consume((function (p__9022){
var vec__9023 = p__9022;
var s__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9023,(0),null);
var offset__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9023,(1),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9023,(2),null);
if(cljs.core.empty_QMARK_(s__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$1,offset__$1,flags], null)], null);
} else {
var flag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.pprint.flag_defs,cljs.core.first(s__$1));
if(cljs.core.truth_(flag)){
if(cljs.core.contains_QMARK_(flags,flag)){
return cljs.pprint.format_error(["Flag \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(s__$1)),"\" appears more than once in a directive"].join(''),offset__$1);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s__$1,(1)),(offset__$1 + (1)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(flags,flag,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,offset__$1], null))], null)], null);
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$1,offset__$1,flags], null)], null);
}
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,offset,cljs.core.PersistentArrayMap.EMPTY], null));
});
cljs.pprint.check_flags = (function cljs$pprint$check_flags(def,flags){
var allowed = cljs.core.cst$kw$flags.cljs$core$IFn$_invoke$arity$1(def);
if(cljs.core.truth_((function (){var and__3911__auto__ = cljs.core.not(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(allowed));
if(and__3911__auto__){
return cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(flags);
} else {
return and__3911__auto__;
}
})())){
cljs.pprint.format_error(["\"@\" is an illegal flag for format directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(def)),"\""].join(''),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(flags),(1)));
} else {
}

if(cljs.core.truth_((function (){var and__3911__auto__ = cljs.core.not(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(allowed));
if(and__3911__auto__){
return cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(flags);
} else {
return and__3911__auto__;
}
})())){
cljs.pprint.format_error(["\":\" is an illegal flag for format directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(def)),"\""].join(''),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(flags),(1)));
} else {
}

if(cljs.core.truth_((function (){var and__3911__auto__ = cljs.core.not(cljs.core.cst$kw$both.cljs$core$IFn$_invoke$arity$1(allowed));
if(and__3911__auto__){
var and__3911__auto____$1 = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(flags);
if(cljs.core.truth_(and__3911__auto____$1)){
return cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(flags);
} else {
return and__3911__auto____$1;
}
} else {
return and__3911__auto__;
}
})())){
return cljs.pprint.format_error(["Cannot combine \"@\" and \":\" flags for format directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(def)),"\""].join(''),(function (){var x__4009__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(flags),(1));
var y__4010__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(flags),(1));
return ((x__4009__auto__ < y__4010__auto__) ? x__4009__auto__ : y__4010__auto__);
})());
} else {
return null;
}
});
/**
 * Takes a directive definition and the list of actual parameters and
 * a map of flags and returns a map of the parameters and flags with defaults
 * filled in. We check to make sure that there are the right types and number
 * of parameters as well.
 */
cljs.pprint.map_params = (function cljs$pprint$map_params(def,params,flags,offset){
cljs.pprint.check_flags(def,flags);

if((cljs.core.count(params) > cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(def)))){
cljs.pprint.format_error(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"Too many parameters for directive \"~C\": ~D~:* ~[were~;was~:;were~] specified but only ~D~:* ~[are~;is~:;are~] allowed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(def),cljs.core.count(params),cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(def))], 0)),cljs.core.second(cljs.core.first(params)));
} else {
}

cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__9026_SHARP_,p2__9027_SHARP_){
var val = cljs.core.first(p1__9026_SHARP_);
if(!((((val == null)) || (cljs.core.contains_QMARK_(cljs.pprint.special_params,val)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.second(cljs.core.second(p2__9027_SHARP_)),cljs.core.type(val)))))){
return cljs.pprint.format_error(["Parameter ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(cljs.core.first(p2__9027_SHARP_)))," has bad type in directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(def)),"\": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(val))].join(''),cljs.core.second(p1__9026_SHARP_));
} else {
return null;
}
}),params,cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(def)));

return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.reverse((function (){var iter__4292__auto__ = (function cljs$pprint$map_params_$_iter__9031(s__9032){
return (new cljs.core.LazySeq(null,(function (){
var s__9032__$1 = s__9032;
while(true){
var temp__5535__auto__ = cljs.core.seq(s__9032__$1);
if(temp__5535__auto__){
var s__9032__$2 = temp__5535__auto__;
if(cljs.core.chunked_seq_QMARK_(s__9032__$2)){
var c__4290__auto__ = cljs.core.chunk_first(s__9032__$2);
var size__4291__auto__ = cljs.core.count(c__4290__auto__);
var b__9034 = cljs.core.chunk_buffer(size__4291__auto__);
if((function (){var i__9033 = (0);
while(true){
if((i__9033 < size__4291__auto__)){
var vec__9035 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4290__auto__,i__9033);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9035,(0),null);
var vec__9038 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9035,(1),null);
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9038,(0),null);
cljs.core.chunk_append(b__9034,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [default$,offset], null)], null));

var G__9047 = (i__9033 + (1));
i__9033 = G__9047;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__9034),cljs$pprint$map_params_$_iter__9031(cljs.core.chunk_rest(s__9032__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__9034),null);
}
} else {
var vec__9041 = cljs.core.first(s__9032__$2);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9041,(0),null);
var vec__9044 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9041,(1),null);
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9044,(0),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [default$,offset], null)], null),cljs$pprint$map_params_$_iter__9031(cljs.core.rest(s__9032__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(def));
})())),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__9028_SHARP_,p2__9029_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc,p1__9028_SHARP_,p2__9029_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__9030_SHARP_){
return cljs.core.first(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__9030_SHARP_,(1)));
}),cljs.core.zipmap(cljs.core.keys(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(def)),params))),flags], 0));
});
cljs.pprint.compile_directive = (function cljs$pprint$compile_directive(s,offset){
var vec__9048 = cljs.pprint.extract_params(s,offset);
var raw_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9048,(0),null);
var vec__9051 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9048,(1),null);
var rest = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9051,(0),null);
var offset__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9051,(1),null);
var vec__9054 = cljs.pprint.extract_flags(rest,offset__$1);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9054,(0),null);
var vec__9057 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9054,(1),null);
var rest__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9057,(0),null);
var offset__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9057,(1),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9057,(2),null);
var directive = cljs.core.first(rest__$1);
var def = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.pprint.directive_table,clojure.string.upper_case(directive));
var params = (cljs.core.truth_(def)?cljs.pprint.map_params(def,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.pprint.translate_param,raw_params),flags,offset__$2):null);
if(cljs.core.not(directive)){
cljs.pprint.format_error("Format string ended in the middle of a directive",offset__$2);
} else {
}

if(cljs.core.not(def)){
cljs.pprint.format_error(["Directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(directive),"\" is undefined"].join(''),offset__$2);
} else {
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.pprint.compiled_directive((function (){var fexpr__9060 = cljs.core.cst$kw$generator_DASH_fn.cljs$core$IFn$_invoke$arity$1(def);
return (fexpr__9060.cljs$core$IFn$_invoke$arity$2 ? fexpr__9060.cljs$core$IFn$_invoke$arity$2(params,offset__$2) : fexpr__9060.call(null,params,offset__$2));
})(),def,params,offset__$2,null,null,null)),(function (){var remainder = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(rest__$1,(1));
var offset__$3 = (offset__$2 + (1));
var trim_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(def))) && (cljs.core.not(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))));
var trim_count = ((trim_QMARK_)?cljs.pprint.prefix_count(remainder,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ","\t"], null)):(0));
var remainder__$1 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(remainder,trim_count);
var offset__$4 = (offset__$3 + trim_count);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [remainder__$1,offset__$4], null);
})()], null);
});
cljs.pprint.compile_raw_string = (function cljs$pprint$compile_raw_string(s,offset){
return (new cljs.pprint.compiled_directive((function (_,a,___$1){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s], 0));

return a;
}),null,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$string,s], null),offset,null,null,null));
});
cljs.pprint.right_bracket = (function cljs$pprint$right_bracket(this$){
return cljs.core.cst$kw$right.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$bracket_DASH_info.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$)));
});
cljs.pprint.separator_QMARK_ = (function cljs$pprint$separator_QMARK_(this$){
return cljs.core.cst$kw$separator.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$bracket_DASH_info.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$)));
});
cljs.pprint.else_separator_QMARK_ = (function cljs$pprint$else_separator_QMARK_(this$){
var and__3911__auto__ = cljs.core.cst$kw$separator.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$bracket_DASH_info.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$)));
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(this$));
} else {
return and__3911__auto__;
}
});
cljs.pprint.process_bracket = (function cljs$pprint$process_bracket(this$,remainder){
var vec__9061 = (function (){var G__9064 = cljs.core.cst$kw$bracket_DASH_info.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$));
var G__9065 = cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(this$);
var G__9066 = remainder;
return (cljs.pprint.collect_clauses.cljs$core$IFn$_invoke$arity$3 ? cljs.pprint.collect_clauses.cljs$core$IFn$_invoke$arity$3(G__9064,G__9065,G__9066) : cljs.pprint.collect_clauses.call(null,G__9064,G__9065,G__9066));
})();
var subex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9061,(0),null);
var remainder__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9061,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.pprint.compiled_directive(cljs.core.cst$kw$func.cljs$core$IFn$_invoke$arity$1(this$),cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(this$),cljs.pprint.tuple_map(subex,cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(this$))], 0)),cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(this$),null,null,null)),remainder__$1], null);
});
cljs.pprint.process_clause = (function cljs$pprint$process_clause(bracket_info,offset,remainder){
return cljs.pprint.consume((function (remainder__$1){
if(cljs.core.empty_QMARK_(remainder__$1)){
return cljs.pprint.format_error("No closing bracket found.",offset);
} else {
var this$ = cljs.core.first(remainder__$1);
var remainder__$2 = cljs.core.next(remainder__$1);
if(cljs.core.truth_(cljs.pprint.right_bracket(this$))){
return cljs.pprint.process_bracket(this$,remainder__$2);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$right.cljs$core$IFn$_invoke$arity$1(bracket_info),cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$right_DASH_bracket,cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(this$),null,remainder__$2], null)], null);
} else {
if(cljs.core.truth_(cljs.pprint.else_separator_QMARK_(this$))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$else,null,cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(this$),remainder__$2], null)], null);
} else {
if(cljs.core.truth_(cljs.pprint.separator_QMARK_(this$))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$separator,null,null,remainder__$2], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,remainder__$2], null);

}
}
}
}
}
}),remainder);
});
cljs.pprint.collect_clauses = (function cljs$pprint$collect_clauses(bracket_info,offset,remainder){
return cljs.core.second(cljs.pprint.consume((function (p__9067){
var vec__9068 = p__9067;
var clause_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9068,(0),null);
var saw_else = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9068,(1),null);
var remainder__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9068,(2),null);
var vec__9071 = cljs.pprint.process_clause(bracket_info,offset,remainder__$1);
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9071,(0),null);
var vec__9074 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9071,(1),null);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9074,(0),null);
var right_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9074,(1),null);
var else_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9074,(2),null);
var remainder__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9074,(3),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$right_DASH_bracket)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clause_map,cljs.core.PersistentArrayMap.createAsIfByAssoc([(cljs.core.truth_(saw_else)?cljs.core.cst$kw$else:cljs.core.cst$kw$clauses),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null),cljs.core.cst$kw$right_DASH_params,right_params])], 0)),remainder__$2], null)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$else)){
if(cljs.core.truth_(cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(clause_map))){
return cljs.pprint.format_error("Two else clauses (\"~:;\") inside bracket construction.",offset);
} else {
if(cljs.core.not(cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(bracket_info))){
return cljs.pprint.format_error("An else clause (\"~:;\") is in a bracket type that doesn't support it.",offset);
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$first,cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(bracket_info))) && (cljs.core.seq(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(clause_map))))){
return cljs.pprint.format_error("The else clause (\"~:;\") is only allowed in the first position for this directive.",offset);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$first,cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(bracket_info))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clause_map,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$else,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null),cljs.core.cst$kw$else_DASH_params,else_params], null)], 0)),false,remainder__$2], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clause_map,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$clauses,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null)], null)], 0)),true,remainder__$2], null)], null);
}

}
}
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$separator)){
if(cljs.core.truth_(saw_else)){
return cljs.pprint.format_error("A plain clause (with \"~;\") follows an else clause (\"~:;\") inside bracket construction.",offset);
} else {
if(cljs.core.not(cljs.core.cst$kw$allows_DASH_separator.cljs$core$IFn$_invoke$arity$1(bracket_info))){
return cljs.pprint.format_error("A separator (\"~;\") is in a bracket type that doesn't support it.",offset);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clause_map,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$clauses,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null)], null)], 0)),false,remainder__$2], null)], null);

}
}
} else {
return null;
}
}
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$clauses,cljs.core.PersistentVector.EMPTY], null),false,remainder], null)));
});
/**
 * Take a linearly compiled format and process the bracket directives to give it
 * the appropriate tree structure
 */
cljs.pprint.process_nesting = (function cljs$pprint$process_nesting(format){
return cljs.core.first(cljs.pprint.consume((function (remainder){
var this$ = cljs.core.first(remainder);
var remainder__$1 = cljs.core.next(remainder);
var bracket = cljs.core.cst$kw$bracket_DASH_info.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$));
if(cljs.core.truth_(cljs.core.cst$kw$right.cljs$core$IFn$_invoke$arity$1(bracket))){
return cljs.pprint.process_bracket(this$,remainder__$1);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,remainder__$1], null);
}
}),format));
});
/**
 * Compiles format-str into a compiled format which can be used as an argument
 * to cl-format just like a plain format string. Use this function for improved
 * performance when you're using the same format string repeatedly
 */
cljs.pprint.compile_format = (function cljs$pprint$compile_format(format_str){
var _STAR_format_str_STAR_9077 = cljs.pprint._STAR_format_str_STAR_;
cljs.pprint._STAR_format_str_STAR_ = format_str;

try{return cljs.pprint.process_nesting(cljs.core.first(cljs.pprint.consume(((function (_STAR_format_str_STAR_9077){
return (function (p__9078){
var vec__9079 = p__9078;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9079,(0),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9079,(1),null);
if(cljs.core.empty_QMARK_(s)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,s], null);
} else {
var tilde = s.indexOf("~");
if((tilde < (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.pprint.compile_raw_string(s,offset),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",(offset + s.length)], null)], null);
} else {
if((tilde === (0))){
return cljs.pprint.compile_directive(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(1)),(offset + (1)));
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.pprint.compile_raw_string(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),tilde),offset),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,tilde),(tilde + offset)], null)], null);

}
}
}
});})(_STAR_format_str_STAR_9077))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [format_str,(0)], null))));
}finally {cljs.pprint._STAR_format_str_STAR_ = _STAR_format_str_STAR_9077;
}});
/**
 * determine whether a given compiled format has any directives that depend on the
 * column number or pretty printing
 */
cljs.pprint.needs_pretty = (function cljs$pprint$needs_pretty(format){
var format__$1 = format;
while(true){
if(cljs.core.empty_QMARK_(format__$1)){
return false;
} else {
if(cljs.core.truth_((function (){var or__3922__auto__ = cljs.core.cst$kw$pretty.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$flags.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(cljs.core.first(format__$1))));
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = cljs.core.some(cljs.pprint.needs_pretty,cljs.core.first(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(cljs.core.first(format__$1)))));
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
return cljs.core.some(cljs.pprint.needs_pretty,cljs.core.first(cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(cljs.core.first(format__$1)))));
}
}
})())){
return true;
} else {
var G__9082 = cljs.core.next(format__$1);
format__$1 = G__9082;
continue;
}
}
break;
}
});
/**
 * Executes the format with the arguments.
 */
cljs.pprint.execute_format = (function cljs$pprint$execute_format(var_args){
var G__9084 = arguments.length;
switch (G__9084) {
case 3:
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$3 = (function (stream,format,args){
var sb = (new goog.string.StringBuffer());
var real_stream = ((((cljs.core.not(stream)) || (stream === true)))?(new cljs.core.StringBufferWriter(sb)):stream);
var wrapped_stream = (cljs.core.truth_((function (){var and__3911__auto__ = cljs.pprint.needs_pretty(format);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not(cljs.pprint.pretty_writer_QMARK_(real_stream));
} else {
return and__3911__auto__;
}
})())?cljs.pprint.get_pretty_writer(real_stream):real_stream);
var _STAR_out_STAR_9085 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = wrapped_stream;

try{try{cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(format,args);
}finally {if(!((real_stream === wrapped_stream))){
cljs.core._flush(wrapped_stream);
} else {
}
}
if(cljs.core.not(stream)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join('');
} else {
if(stream === true){
return cljs.core.string_print([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''));
} else {
return null;

}
}
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_9085;
}});

cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2 = (function (format,args){
cljs.pprint.map_passing_context((function (element,context){
if(cljs.core.truth_(cljs.pprint.abort_QMARK_(context))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,context], null);
} else {
var vec__9086 = cljs.pprint.realize_parameter_list(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(element),context);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9086,(0),null);
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9086,(1),null);
var vec__9089 = cljs.pprint.unzip_map(params);
var params__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9089,(0),null);
var offsets = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9089,(1),null);
var params__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(params__$1,cljs.core.cst$kw$base_DASH_args,args__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$func.cljs$core$IFn$_invoke$arity$1(element),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [params__$2,args__$1,offsets], null))], null);
}
}),args,format);

return null;
});

cljs.pprint.execute_format.cljs$lang$maxFixedArity = 3;

cljs.pprint.cached_compile = cljs.core.memoize(cljs.pprint.compile_format);
/**
 * Installs a function as a new method of multimethod associated with dispatch-value. 
 */
cljs.pprint.use_method = (function cljs$pprint$use_method(multifn,dispatch_val,func){
return cljs.core._add_method(multifn,dispatch_val,func);
});
cljs.pprint.reader_macros = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$sym$quote,"'",cljs.core.cst$sym$var,"#'",cljs.core.cst$sym$clojure$core_SLASH_deref,"@",cljs.core.cst$sym$clojure$core_SLASH_unquote,"~",cljs.core.cst$sym$cljs$core_SLASH_deref,"@",cljs.core.cst$sym$cljs$core_SLASH_unquote,"~"], null);
cljs.pprint.pprint_reader_macro = (function cljs$pprint$pprint_reader_macro(alis){
var macro_char = (function (){var G__9093 = cljs.core.first(alis);
return (cljs.pprint.reader_macros.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.reader_macros.cljs$core$IFn$_invoke$arity$1(G__9093) : cljs.pprint.reader_macros.call(null,G__9093));
})();
if(cljs.core.truth_((function (){var and__3911__auto__ = macro_char;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(alis));
} else {
return and__3911__auto__;
}
})())){
cljs.core._write(cljs.core._STAR_out_STAR_,macro_char);

cljs.pprint.write_out(cljs.core.second(alis));

return true;
} else {
return null;
}
});
cljs.pprint.pprint_simple_list = (function cljs$pprint$pprint_simple_list(alis){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_9094_9097 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_9095_9098 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

var length_count9096_9099 = (0);
var alis_9100__$1 = cljs.core.seq(alis);
while(true){
if(((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count9096_9099 < cljs.core._STAR_print_length_STAR_)))){
if(alis_9100__$1){
cljs.pprint.write_out(cljs.core.first(alis_9100__$1));

if(cljs.core.next(alis_9100__$1)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__9101 = (length_count9096_9099 + (1));
var G__9102 = cljs.core.next(alis_9100__$1);
length_count9096_9099 = G__9101;
alis_9100__$1 = G__9102;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_9095_9098;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_9094_9097;
}}

return null;
});
cljs.pprint.pprint_list = (function cljs$pprint$pprint_list(alis){
if(cljs.core.not(cljs.pprint.pprint_reader_macro(alis))){
return cljs.pprint.pprint_simple_list(alis);
} else {
return null;
}
});
cljs.pprint.pprint_vector = (function cljs$pprint$pprint_vector(avec){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_9103_9106 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_9104_9107 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"[",null,"]");

var length_count9105_9108 = (0);
var aseq_9109 = cljs.core.seq(avec);
while(true){
if(((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count9105_9108 < cljs.core._STAR_print_length_STAR_)))){
if(aseq_9109){
cljs.pprint.write_out(cljs.core.first(aseq_9109));

if(cljs.core.next(aseq_9109)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__9110 = (length_count9105_9108 + (1));
var G__9111 = cljs.core.next(aseq_9109);
length_count9105_9108 = G__9110;
aseq_9109 = G__9111;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_9104_9107;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_9103_9106;
}}

return null;
});
cljs.pprint.pprint_array = (function (){var format_in__8202__auto__ = "~<[~;~@{~w~^, ~:_~}~;]~:>";
var cf__8203__auto__ = ((typeof format_in__8202__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__8202__auto__) : cljs.pprint.cached_compile.call(null,format_in__8202__auto__)):format_in__8202__auto__);
return ((function (format_in__8202__auto__,cf__8203__auto__){
return (function() { 
var G__9112__delegate = function (args__8204__auto__){
var navigator__8205__auto__ = cljs.pprint.init_navigator(args__8204__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__8203__auto__,navigator__8205__auto__);
};
var G__9112 = function (var_args){
var args__8204__auto__ = null;
if (arguments.length > 0) {
var G__9113__i = 0, G__9113__a = new Array(arguments.length -  0);
while (G__9113__i < G__9113__a.length) {G__9113__a[G__9113__i] = arguments[G__9113__i + 0]; ++G__9113__i;}
  args__8204__auto__ = new cljs.core.IndexedSeq(G__9113__a,0,null);
} 
return G__9112__delegate.call(this,args__8204__auto__);};
G__9112.cljs$lang$maxFixedArity = 0;
G__9112.cljs$lang$applyTo = (function (arglist__9114){
var args__8204__auto__ = cljs.core.seq(arglist__9114);
return G__9112__delegate(args__8204__auto__);
});
G__9112.cljs$core$IFn$_invoke$arity$variadic = G__9112__delegate;
return G__9112;
})()
;
;})(format_in__8202__auto__,cf__8203__auto__))
})();
cljs.pprint.pprint_map = (function cljs$pprint$pprint_map(amap){
var vec__9115 = ((!(cljs.core.record_QMARK_(amap)))?(function (){var fexpr__9118 = new cljs.core.Var(function(){return cljs.core.lift_ns;},cljs.core.cst$sym$cljs$core_SLASH_lift_DASH_ns,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$private,cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[true,cljs.core.cst$sym$cljs$core,cljs.core.cst$sym$lift_DASH_ns,"cljs/core.cljs",15,1,10104,10104,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$m], null)),"Returns [lifted-ns lifted-map] or nil if m can't be lifted.",(cljs.core.truth_(cljs.core.lift_ns)?cljs.core.lift_ns.cljs$lang$test:null)]));
return (fexpr__9118.cljs$core$IFn$_invoke$arity$1 ? fexpr__9118.cljs$core$IFn$_invoke$arity$1(amap) : fexpr__9118.call(null,amap));
})():null);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9115,(0),null);
var lift_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9115,(1),null);
var amap__$1 = (function (){var or__3922__auto__ = lift_map;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return amap;
}
})();
var prefix = (cljs.core.truth_(ns)?["#:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"{"].join(''):"{");
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_9119_9124 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_9120_9125 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,prefix,null,"}");

var length_count9121_9126 = (0);
var aseq_9127 = cljs.core.seq(amap__$1);
while(true){
if(((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count9121_9126 < cljs.core._STAR_print_length_STAR_)))){
if(aseq_9127){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_9122_9128 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_9123_9129 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,null,null,null);

cljs.pprint.write_out(cljs.core.ffirst(aseq_9127));

cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

cljs.pprint._STAR_current_length_STAR_ = (0);

cljs.pprint.write_out(cljs.core.fnext(cljs.core.first(aseq_9127)));

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_9123_9129;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_9122_9128;
}}


if(cljs.core.next(aseq_9127)){
cljs.core._write(cljs.core._STAR_out_STAR_,", ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__9130 = (length_count9121_9126 + (1));
var G__9131 = cljs.core.next(aseq_9127);
length_count9121_9126 = G__9130;
aseq_9127 = G__9131;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_9120_9125;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_9119_9124;
}}

return null;
});
cljs.pprint.pprint_simple_default = (function cljs$pprint$pprint_simple_default(obj){
return cljs.core._write(cljs.core._STAR_out_STAR_,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([obj], 0)));
});
cljs.pprint.pprint_set = (function (){var format_in__8202__auto__ = "~<#{~;~@{~w~^ ~:_~}~;}~:>";
var cf__8203__auto__ = ((typeof format_in__8202__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__8202__auto__) : cljs.pprint.cached_compile.call(null,format_in__8202__auto__)):format_in__8202__auto__);
return ((function (format_in__8202__auto__,cf__8203__auto__){
return (function() { 
var G__9132__delegate = function (args__8204__auto__){
var navigator__8205__auto__ = cljs.pprint.init_navigator(args__8204__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__8203__auto__,navigator__8205__auto__);
};
var G__9132 = function (var_args){
var args__8204__auto__ = null;
if (arguments.length > 0) {
var G__9133__i = 0, G__9133__a = new Array(arguments.length -  0);
while (G__9133__i < G__9133__a.length) {G__9133__a[G__9133__i] = arguments[G__9133__i + 0]; ++G__9133__i;}
  args__8204__auto__ = new cljs.core.IndexedSeq(G__9133__a,0,null);
} 
return G__9132__delegate.call(this,args__8204__auto__);};
G__9132.cljs$lang$maxFixedArity = 0;
G__9132.cljs$lang$applyTo = (function (arglist__9134){
var args__8204__auto__ = cljs.core.seq(arglist__9134);
return G__9132__delegate(args__8204__auto__);
});
G__9132.cljs$core$IFn$_invoke$arity$variadic = G__9132__delegate;
return G__9132;
})()
;
;})(format_in__8202__auto__,cf__8203__auto__))
})();
cljs.pprint.type_map = new cljs.core.PersistentArrayMap(null, 2, ["core$future_call","Future","core$promise","Promise"], null);
/**
 * Map ugly type names to something simpler
 */
cljs.pprint.map_ref_type = (function cljs$pprint$map_ref_type(name){
var or__3922__auto__ = (function (){var temp__5535__auto__ = cljs.core.re_find(/^[^$]+\$[^$]+/,name);
if(cljs.core.truth_(temp__5535__auto__)){
var match = temp__5535__auto__;
return (cljs.pprint.type_map.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.type_map.cljs$core$IFn$_invoke$arity$1(match) : cljs.pprint.type_map.call(null,match));
} else {
return null;
}
})();
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return name;
}
});
cljs.pprint.pprint_ideref = (function cljs$pprint$pprint_ideref(o){
var prefix = ["#<",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.pprint.map_ref_type(cljs.core.type(o).name)),"@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.getUid(o)),": "].join('');
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_9135_9139 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_9136_9140 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,prefix,null,">");

cljs.pprint.pprint_indent(cljs.core.cst$kw$block,(- (cljs.core.count(prefix) - (2))));

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

cljs.pprint.write_out((((function (){var and__3911__auto__ = ((!((o == null)))?(((((o.cljs$lang$protocol_mask$partition1$ & (1))) || ((cljs.core.PROTOCOL_SENTINEL === o.cljs$core$IPending$))))?true:(((!o.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.IPending,o):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IPending,o));
if(and__3911__auto__){
return !(cljs.core._realized_QMARK_(o));
} else {
return and__3911__auto__;
}
})())?cljs.core.cst$kw$not_DASH_delivered:cljs.core.deref(o)));

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_9136_9140;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_9135_9139;
}}

return null;
});
cljs.pprint.pprint_pqueue = (function (){var format_in__8202__auto__ = "~<<-(~;~@{~w~^ ~_~}~;)-<~:>";
var cf__8203__auto__ = ((typeof format_in__8202__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__8202__auto__) : cljs.pprint.cached_compile.call(null,format_in__8202__auto__)):format_in__8202__auto__);
return ((function (format_in__8202__auto__,cf__8203__auto__){
return (function() { 
var G__9141__delegate = function (args__8204__auto__){
var navigator__8205__auto__ = cljs.pprint.init_navigator(args__8204__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__8203__auto__,navigator__8205__auto__);
};
var G__9141 = function (var_args){
var args__8204__auto__ = null;
if (arguments.length > 0) {
var G__9142__i = 0, G__9142__a = new Array(arguments.length -  0);
while (G__9142__i < G__9142__a.length) {G__9142__a[G__9142__i] = arguments[G__9142__i + 0]; ++G__9142__i;}
  args__8204__auto__ = new cljs.core.IndexedSeq(G__9142__a,0,null);
} 
return G__9141__delegate.call(this,args__8204__auto__);};
G__9141.cljs$lang$maxFixedArity = 0;
G__9141.cljs$lang$applyTo = (function (arglist__9143){
var args__8204__auto__ = cljs.core.seq(arglist__9143);
return G__9141__delegate(args__8204__auto__);
});
G__9141.cljs$core$IFn$_invoke$arity$variadic = G__9141__delegate;
return G__9141;
})()
;
;})(format_in__8202__auto__,cf__8203__auto__))
})();
cljs.pprint.type_dispatcher = (function cljs$pprint$type_dispatcher(obj){
if((obj instanceof cljs.core.PersistentQueue)){
return cljs.core.cst$kw$queue;
} else {
if(((!((obj == null)))?(((((obj.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === obj.cljs$core$IDeref$))))?true:(((!obj.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,obj):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,obj))){
return cljs.core.cst$kw$deref;
} else {
if((obj instanceof cljs.core.Symbol)){
return cljs.core.cst$kw$symbol;
} else {
if(cljs.core.seq_QMARK_(obj)){
return cljs.core.cst$kw$list;
} else {
if(cljs.core.map_QMARK_(obj)){
return cljs.core.cst$kw$map;
} else {
if(cljs.core.vector_QMARK_(obj)){
return cljs.core.cst$kw$vector;
} else {
if(cljs.core.set_QMARK_(obj)){
return cljs.core.cst$kw$set;
} else {
if((obj == null)){
return null;
} else {
return cljs.core.cst$kw$default;

}
}
}
}
}
}
}
}
});
if(typeof cljs.pprint.simple_dispatch !== 'undefined'){
} else {
/**
 * The pretty print dispatch function for simple data structure format.
 */
cljs.pprint.simple_dispatch = (function (){var method_table__4382__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4383__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4384__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4385__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4386__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.pprint","simple-dispatch"),cljs.pprint.type_dispatcher,cljs.core.cst$kw$default,hierarchy__4386__auto__,method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__));
})();
}
cljs.pprint.use_method(cljs.pprint.simple_dispatch,cljs.core.cst$kw$list,cljs.pprint.pprint_list);
cljs.pprint.use_method(cljs.pprint.simple_dispatch,cljs.core.cst$kw$vector,cljs.pprint.pprint_vector);
cljs.pprint.use_method(cljs.pprint.simple_dispatch,cljs.core.cst$kw$map,cljs.pprint.pprint_map);
cljs.pprint.use_method(cljs.pprint.simple_dispatch,cljs.core.cst$kw$set,cljs.pprint.pprint_set);
cljs.pprint.use_method(cljs.pprint.simple_dispatch,null,(function (){
return cljs.core._write(cljs.core._STAR_out_STAR_,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0)));
}));
cljs.pprint.use_method(cljs.pprint.simple_dispatch,cljs.core.cst$kw$default,cljs.pprint.pprint_simple_default);
cljs.pprint.set_pprint_dispatch(cljs.pprint.simple_dispatch);
/**
 * Figure out which kind of brackets to use
 */
cljs.pprint.brackets = (function cljs$pprint$brackets(form){
if(cljs.core.vector_QMARK_(form)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[","]"], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(",")"], null);
}
});
/**
 * Pretty print a single reference (import, use, etc.) from a namespace decl
 */
cljs.pprint.pprint_ns_reference = (function cljs$pprint$pprint_ns_reference(reference){
if(cljs.core.sequential_QMARK_(reference)){
var vec__9145 = cljs.pprint.brackets(reference);
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9145,(0),null);
var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9145,(1),null);
var vec__9148 = reference;
var seq__9149 = cljs.core.seq(vec__9148);
var first__9150 = cljs.core.first(seq__9149);
var seq__9149__$1 = cljs.core.next(seq__9149);
var keyw = first__9150;
var args = seq__9149__$1;
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_9151_9167 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_9152_9168 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,start,null,end);

var fexpr__9153_9169 = (function (){var format_in__8202__auto__ = "~w~:i";
var cf__8203__auto__ = ((typeof format_in__8202__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__8202__auto__) : cljs.pprint.cached_compile.call(null,format_in__8202__auto__)):format_in__8202__auto__);
return ((function (format_in__8202__auto__,cf__8203__auto__,_STAR_current_level_STAR_9151_9167,_STAR_current_length_STAR_9152_9168,vec__9145,start,end,vec__9148,seq__9149,first__9150,seq__9149__$1,keyw,args){
return (function() { 
var G__9170__delegate = function (args__8204__auto__){
var navigator__8205__auto__ = cljs.pprint.init_navigator(args__8204__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__8203__auto__,navigator__8205__auto__);
};
var G__9170 = function (var_args){
var args__8204__auto__ = null;
if (arguments.length > 0) {
var G__9171__i = 0, G__9171__a = new Array(arguments.length -  0);
while (G__9171__i < G__9171__a.length) {G__9171__a[G__9171__i] = arguments[G__9171__i + 0]; ++G__9171__i;}
  args__8204__auto__ = new cljs.core.IndexedSeq(G__9171__a,0,null);
} 
return G__9170__delegate.call(this,args__8204__auto__);};
G__9170.cljs$lang$maxFixedArity = 0;
G__9170.cljs$lang$applyTo = (function (arglist__9172){
var args__8204__auto__ = cljs.core.seq(arglist__9172);
return G__9170__delegate(args__8204__auto__);
});
G__9170.cljs$core$IFn$_invoke$arity$variadic = G__9170__delegate;
return G__9170;
})()
;
;})(format_in__8202__auto__,cf__8203__auto__,_STAR_current_level_STAR_9151_9167,_STAR_current_length_STAR_9152_9168,vec__9145,start,end,vec__9148,seq__9149,first__9150,seq__9149__$1,keyw,args))
})();
(fexpr__9153_9169.cljs$core$IFn$_invoke$arity$1 ? fexpr__9153_9169.cljs$core$IFn$_invoke$arity$1(keyw) : fexpr__9153_9169.call(null,keyw));

var args_9173__$1 = args;
while(true){
if(cljs.core.seq(args_9173__$1)){
var fexpr__9154_9174 = (function (){var format_in__8202__auto__ = " ";
var cf__8203__auto__ = ((typeof format_in__8202__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__8202__auto__) : cljs.pprint.cached_compile.call(null,format_in__8202__auto__)):format_in__8202__auto__);
return ((function (args_9173__$1,format_in__8202__auto__,cf__8203__auto__,_STAR_current_level_STAR_9151_9167,_STAR_current_length_STAR_9152_9168,vec__9145,start,end,vec__9148,seq__9149,first__9150,seq__9149__$1,keyw,args){
return (function() { 
var G__9175__delegate = function (args__8204__auto__){
var navigator__8205__auto__ = cljs.pprint.init_navigator(args__8204__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__8203__auto__,navigator__8205__auto__);
};
var G__9175 = function (var_args){
var args__8204__auto__ = null;
if (arguments.length > 0) {
var G__9176__i = 0, G__9176__a = new Array(arguments.length -  0);
while (G__9176__i < G__9176__a.length) {G__9176__a[G__9176__i] = arguments[G__9176__i + 0]; ++G__9176__i;}
  args__8204__auto__ = new cljs.core.IndexedSeq(G__9176__a,0,null);
} 
return G__9175__delegate.call(this,args__8204__auto__);};
G__9175.cljs$lang$maxFixedArity = 0;
G__9175.cljs$lang$applyTo = (function (arglist__9177){
var args__8204__auto__ = cljs.core.seq(arglist__9177);
return G__9175__delegate(args__8204__auto__);
});
G__9175.cljs$core$IFn$_invoke$arity$variadic = G__9175__delegate;
return G__9175;
})()
;
;})(args_9173__$1,format_in__8202__auto__,cf__8203__auto__,_STAR_current_level_STAR_9151_9167,_STAR_current_length_STAR_9152_9168,vec__9145,start,end,vec__9148,seq__9149,first__9150,seq__9149__$1,keyw,args))
})();
(fexpr__9154_9174.cljs$core$IFn$_invoke$arity$0 ? fexpr__9154_9174.cljs$core$IFn$_invoke$arity$0() : fexpr__9154_9174.call(null));

var arg_9178 = cljs.core.first(args_9173__$1);
if(cljs.core.sequential_QMARK_(arg_9178)){
var vec__9155_9179 = cljs.pprint.brackets(arg_9178);
var start_9180__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9155_9179,(0),null);
var end_9181__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9155_9179,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_9158_9182 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_9159_9183 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,start_9180__$1,null,end_9181__$1);

if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(arg_9178),(3))) && ((cljs.core.second(arg_9178) instanceof cljs.core.Keyword)))){
var vec__9160_9184 = arg_9178;
var ns_9185 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9160_9184,(0),null);
var kw_9186 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9160_9184,(1),null);
var lis_9187 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9160_9184,(2),null);
var fexpr__9163_9188 = (function (){var format_in__8202__auto__ = "~w ~w ";
var cf__8203__auto__ = ((typeof format_in__8202__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__8202__auto__) : cljs.pprint.cached_compile.call(null,format_in__8202__auto__)):format_in__8202__auto__);
return ((function (args_9173__$1,format_in__8202__auto__,cf__8203__auto__,vec__9160_9184,ns_9185,kw_9186,lis_9187,_STAR_current_level_STAR_9158_9182,_STAR_current_length_STAR_9159_9183,vec__9155_9179,start_9180__$1,end_9181__$1,arg_9178,_STAR_current_level_STAR_9151_9167,_STAR_current_length_STAR_9152_9168,vec__9145,start,end,vec__9148,seq__9149,first__9150,seq__9149__$1,keyw,args){
return (function() { 
var G__9189__delegate = function (args__8204__auto__){
var navigator__8205__auto__ = cljs.pprint.init_navigator(args__8204__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__8203__auto__,navigator__8205__auto__);
};
var G__9189 = function (var_args){
var args__8204__auto__ = null;
if (arguments.length > 0) {
var G__9190__i = 0, G__9190__a = new Array(arguments.length -  0);
while (G__9190__i < G__9190__a.length) {G__9190__a[G__9190__i] = arguments[G__9190__i + 0]; ++G__9190__i;}
  args__8204__auto__ = new cljs.core.IndexedSeq(G__9190__a,0,null);
} 
return G__9189__delegate.call(this,args__8204__auto__);};
G__9189.cljs$lang$maxFixedArity = 0;
G__9189.cljs$lang$applyTo = (function (arglist__9191){
var args__8204__auto__ = cljs.core.seq(arglist__9191);
return G__9189__delegate(args__8204__auto__);
});
G__9189.cljs$core$IFn$_invoke$arity$variadic = G__9189__delegate;
return G__9189;
})()
;
;})(args_9173__$1,format_in__8202__auto__,cf__8203__auto__,vec__9160_9184,ns_9185,kw_9186,lis_9187,_STAR_current_level_STAR_9158_9182,_STAR_current_length_STAR_9159_9183,vec__9155_9179,start_9180__$1,end_9181__$1,arg_9178,_STAR_current_level_STAR_9151_9167,_STAR_current_length_STAR_9152_9168,vec__9145,start,end,vec__9148,seq__9149,first__9150,seq__9149__$1,keyw,args))
})();
(fexpr__9163_9188.cljs$core$IFn$_invoke$arity$2 ? fexpr__9163_9188.cljs$core$IFn$_invoke$arity$2(ns_9185,kw_9186) : fexpr__9163_9188.call(null,ns_9185,kw_9186));

if(cljs.core.sequential_QMARK_(lis_9187)){
var fexpr__9164_9192 = (function (){var format_in__8202__auto__ = ((cljs.core.vector_QMARK_(lis_9187))?"~<[~;~@{~w~^ ~:_~}~;]~:>":"~<(~;~@{~w~^ ~:_~}~;)~:>");
var cf__8203__auto__ = ((typeof format_in__8202__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__8202__auto__) : cljs.pprint.cached_compile.call(null,format_in__8202__auto__)):format_in__8202__auto__);
return ((function (args_9173__$1,format_in__8202__auto__,cf__8203__auto__,vec__9160_9184,ns_9185,kw_9186,lis_9187,_STAR_current_level_STAR_9158_9182,_STAR_current_length_STAR_9159_9183,vec__9155_9179,start_9180__$1,end_9181__$1,arg_9178,_STAR_current_level_STAR_9151_9167,_STAR_current_length_STAR_9152_9168,vec__9145,start,end,vec__9148,seq__9149,first__9150,seq__9149__$1,keyw,args){
return (function() { 
var G__9193__delegate = function (args__8204__auto__){
var navigator__8205__auto__ = cljs.pprint.init_navigator(args__8204__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__8203__auto__,navigator__8205__auto__);
};
var G__9193 = function (var_args){
var args__8204__auto__ = null;
if (arguments.length > 0) {
var G__9194__i = 0, G__9194__a = new Array(arguments.length -  0);
while (G__9194__i < G__9194__a.length) {G__9194__a[G__9194__i] = arguments[G__9194__i + 0]; ++G__9194__i;}
  args__8204__auto__ = new cljs.core.IndexedSeq(G__9194__a,0,null);
} 
return G__9193__delegate.call(this,args__8204__auto__);};
G__9193.cljs$lang$maxFixedArity = 0;
G__9193.cljs$lang$applyTo = (function (arglist__9195){
var args__8204__auto__ = cljs.core.seq(arglist__9195);
return G__9193__delegate(args__8204__auto__);
});
G__9193.cljs$core$IFn$_invoke$arity$variadic = G__9193__delegate;
return G__9193;
})()
;
;})(args_9173__$1,format_in__8202__auto__,cf__8203__auto__,vec__9160_9184,ns_9185,kw_9186,lis_9187,_STAR_current_level_STAR_9158_9182,_STAR_current_length_STAR_9159_9183,vec__9155_9179,start_9180__$1,end_9181__$1,arg_9178,_STAR_current_level_STAR_9151_9167,_STAR_current_length_STAR_9152_9168,vec__9145,start,end,vec__9148,seq__9149,first__9150,seq__9149__$1,keyw,args))
})();
(fexpr__9164_9192.cljs$core$IFn$_invoke$arity$1 ? fexpr__9164_9192.cljs$core$IFn$_invoke$arity$1(lis_9187) : fexpr__9164_9192.call(null,lis_9187));
} else {
cljs.pprint.write_out(lis_9187);
}
} else {
cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var format_in__8202__auto__ = "~w ~:i~@{~w~^ ~:_~}";
var cf__8203__auto__ = ((typeof format_in__8202__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__8202__auto__) : cljs.pprint.cached_compile.call(null,format_in__8202__auto__)):format_in__8202__auto__);
return ((function (args_9173__$1,format_in__8202__auto__,cf__8203__auto__,_STAR_current_level_STAR_9158_9182,_STAR_current_length_STAR_9159_9183,vec__9155_9179,start_9180__$1,end_9181__$1,arg_9178,_STAR_current_level_STAR_9151_9167,_STAR_current_length_STAR_9152_9168,vec__9145,start,end,vec__9148,seq__9149,first__9150,seq__9149__$1,keyw,args){
return (function() { 
var G__9196__delegate = function (args__8204__auto__){
var navigator__8205__auto__ = cljs.pprint.init_navigator(args__8204__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__8203__auto__,navigator__8205__auto__);
};
var G__9196 = function (var_args){
var args__8204__auto__ = null;
if (arguments.length > 0) {
var G__9197__i = 0, G__9197__a = new Array(arguments.length -  0);
while (G__9197__i < G__9197__a.length) {G__9197__a[G__9197__i] = arguments[G__9197__i + 0]; ++G__9197__i;}
  args__8204__auto__ = new cljs.core.IndexedSeq(G__9197__a,0,null);
} 
return G__9196__delegate.call(this,args__8204__auto__);};
G__9196.cljs$lang$maxFixedArity = 0;
G__9196.cljs$lang$applyTo = (function (arglist__9198){
var args__8204__auto__ = cljs.core.seq(arglist__9198);
return G__9196__delegate(args__8204__auto__);
});
G__9196.cljs$core$IFn$_invoke$arity$variadic = G__9196__delegate;
return G__9196;
})()
;
;})(args_9173__$1,format_in__8202__auto__,cf__8203__auto__,_STAR_current_level_STAR_9158_9182,_STAR_current_length_STAR_9159_9183,vec__9155_9179,start_9180__$1,end_9181__$1,arg_9178,_STAR_current_level_STAR_9151_9167,_STAR_current_length_STAR_9152_9168,vec__9145,start,end,vec__9148,seq__9149,first__9150,seq__9149__$1,keyw,args))
})(),arg_9178);
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_9159_9183;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_9158_9182;
}}


if(cljs.core.next(args_9173__$1)){
var fexpr__9165_9199 = (function (){var format_in__8202__auto__ = "~_";
var cf__8203__auto__ = ((typeof format_in__8202__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__8202__auto__) : cljs.pprint.cached_compile.call(null,format_in__8202__auto__)):format_in__8202__auto__);
return ((function (args_9173__$1,format_in__8202__auto__,cf__8203__auto__,vec__9155_9179,start_9180__$1,end_9181__$1,arg_9178,_STAR_current_level_STAR_9151_9167,_STAR_current_length_STAR_9152_9168,vec__9145,start,end,vec__9148,seq__9149,first__9150,seq__9149__$1,keyw,args){
return (function() { 
var G__9200__delegate = function (args__8204__auto__){
var navigator__8205__auto__ = cljs.pprint.init_navigator(args__8204__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__8203__auto__,navigator__8205__auto__);
};
var G__9200 = function (var_args){
var args__8204__auto__ = null;
if (arguments.length > 0) {
var G__9201__i = 0, G__9201__a = new Array(arguments.length -  0);
while (G__9201__i < G__9201__a.length) {G__9201__a[G__9201__i] = arguments[G__9201__i + 0]; ++G__9201__i;}
  args__8204__auto__ = new cljs.core.IndexedSeq(G__9201__a,0,null);
} 
return G__9200__delegate.call(this,args__8204__auto__);};
G__9200.cljs$lang$maxFixedArity = 0;
G__9200.cljs$lang$applyTo = (function (arglist__9202){
var args__8204__auto__ = cljs.core.seq(arglist__9202);
return G__9200__delegate(args__8204__auto__);
});
G__9200.cljs$core$IFn$_invoke$arity$variadic = G__9200__delegate;
return G__9200;
})()
;
;})(args_9173__$1,format_in__8202__auto__,cf__8203__auto__,vec__9155_9179,start_9180__$1,end_9181__$1,arg_9178,_STAR_current_level_STAR_9151_9167,_STAR_current_length_STAR_9152_9168,vec__9145,start,end,vec__9148,seq__9149,first__9150,seq__9149__$1,keyw,args))
})();
(fexpr__9165_9199.cljs$core$IFn$_invoke$arity$0 ? fexpr__9165_9199.cljs$core$IFn$_invoke$arity$0() : fexpr__9165_9199.call(null));
} else {
}
} else {
cljs.pprint.write_out(arg_9178);

if(cljs.core.next(args_9173__$1)){
var fexpr__9166_9203 = (function (){var format_in__8202__auto__ = "~:_";
var cf__8203__auto__ = ((typeof format_in__8202__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__8202__auto__) : cljs.pprint.cached_compile.call(null,format_in__8202__auto__)):format_in__8202__auto__);
return ((function (args_9173__$1,format_in__8202__auto__,cf__8203__auto__,arg_9178,_STAR_current_level_STAR_9151_9167,_STAR_current_length_STAR_9152_9168,vec__9145,start,end,vec__9148,seq__9149,first__9150,seq__9149__$1,keyw,args){
return (function() { 
var G__9204__delegate = function (args__8204__auto__){
var navigator__8205__auto__ = cljs.pprint.init_navigator(args__8204__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__8203__auto__,navigator__8205__auto__);
};
var G__9204 = function (var_args){
var args__8204__auto__ = null;
if (arguments.length > 0) {
var G__9205__i = 0, G__9205__a = new Array(arguments.length -  0);
while (G__9205__i < G__9205__a.length) {G__9205__a[G__9205__i] = arguments[G__9205__i + 0]; ++G__9205__i;}
  args__8204__auto__ = new cljs.core.IndexedSeq(G__9205__a,0,null);
} 
return G__9204__delegate.call(this,args__8204__auto__);};
G__9204.cljs$lang$maxFixedArity = 0;
G__9204.cljs$lang$applyTo = (function (arglist__9206){
var args__8204__auto__ = cljs.core.seq(arglist__9206);
return G__9204__delegate(args__8204__auto__);
});
G__9204.cljs$core$IFn$_invoke$arity$variadic = G__9204__delegate;
return G__9204;
})()
;
;})(args_9173__$1,format_in__8202__auto__,cf__8203__auto__,arg_9178,_STAR_current_level_STAR_9151_9167,_STAR_current_length_STAR_9152_9168,vec__9145,start,end,vec__9148,seq__9149,first__9150,seq__9149__$1,keyw,args))
})();
(fexpr__9166_9203.cljs$core$IFn$_invoke$arity$0 ? fexpr__9166_9203.cljs$core$IFn$_invoke$arity$0() : fexpr__9166_9203.call(null));
} else {
}
}

var G__9207 = cljs.core.next(args_9173__$1);
args_9173__$1 = G__9207;
continue;
} else {
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_9152_9168;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_9151_9167;
}}

return null;
} else {
return cljs.pprint.write_out(reference);
}
});
/**
 * The pretty print dispatch chunk for the ns macro
 */
cljs.pprint.pprint_ns = (function cljs$pprint$pprint_ns(alis){
if(cljs.core.next(alis)){
var vec__9208 = alis;
var seq__9209 = cljs.core.seq(vec__9208);
var first__9210 = cljs.core.first(seq__9209);
var seq__9209__$1 = cljs.core.next(seq__9209);
var ns_sym = first__9210;
var first__9210__$1 = cljs.core.first(seq__9209__$1);
var seq__9209__$2 = cljs.core.next(seq__9209__$1);
var ns_name = first__9210__$1;
var stuff = seq__9209__$2;
var vec__9211 = ((typeof cljs.core.first(stuff) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(stuff),cljs.core.next(stuff)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff], null));
var doc_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9211,(0),null);
var stuff__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9211,(1),null);
var vec__9214 = ((cljs.core.map_QMARK_(cljs.core.first(stuff__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(stuff__$1),cljs.core.next(stuff__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff__$1], null));
var attr_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9214,(0),null);
var references = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9214,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_9217_9224 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_9218_9225 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

var fexpr__9219_9226 = (function (){var format_in__8202__auto__ = "~w ~1I~@_~w";
var cf__8203__auto__ = ((typeof format_in__8202__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__8202__auto__) : cljs.pprint.cached_compile.call(null,format_in__8202__auto__)):format_in__8202__auto__);
return ((function (format_in__8202__auto__,cf__8203__auto__,_STAR_current_level_STAR_9217_9224,_STAR_current_length_STAR_9218_9225,vec__9208,seq__9209,first__9210,seq__9209__$1,ns_sym,first__9210__$1,seq__9209__$2,ns_name,stuff,vec__9211,doc_str,stuff__$1,vec__9214,attr_map,references){
return (function() { 
var G__9227__delegate = function (args__8204__auto__){
var navigator__8205__auto__ = cljs.pprint.init_navigator(args__8204__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__8203__auto__,navigator__8205__auto__);
};
var G__9227 = function (var_args){
var args__8204__auto__ = null;
if (arguments.length > 0) {
var G__9228__i = 0, G__9228__a = new Array(arguments.length -  0);
while (G__9228__i < G__9228__a.length) {G__9228__a[G__9228__i] = arguments[G__9228__i + 0]; ++G__9228__i;}
  args__8204__auto__ = new cljs.core.IndexedSeq(G__9228__a,0,null);
} 
return G__9227__delegate.call(this,args__8204__auto__);};
G__9227.cljs$lang$maxFixedArity = 0;
G__9227.cljs$lang$applyTo = (function (arglist__9229){
var args__8204__auto__ = cljs.core.seq(arglist__9229);
return G__9227__delegate(args__8204__auto__);
});
G__9227.cljs$core$IFn$_invoke$arity$variadic = G__9227__delegate;
return G__9227;
})()
;
;})(format_in__8202__auto__,cf__8203__auto__,_STAR_current_level_STAR_9217_9224,_STAR_current_length_STAR_9218_9225,vec__9208,seq__9209,first__9210,seq__9209__$1,ns_sym,first__9210__$1,seq__9209__$2,ns_name,stuff,vec__9211,doc_str,stuff__$1,vec__9214,attr_map,references))
})();
(fexpr__9219_9226.cljs$core$IFn$_invoke$arity$2 ? fexpr__9219_9226.cljs$core$IFn$_invoke$arity$2(ns_sym,ns_name) : fexpr__9219_9226.call(null,ns_sym,ns_name));

if(cljs.core.truth_((function (){var or__3922__auto__ = doc_str;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = attr_map;
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
return cljs.core.seq(references);
}
}
})())){
var fexpr__9220_9230 = (function (){var format_in__8202__auto__ = "~@:_";
var cf__8203__auto__ = ((typeof format_in__8202__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__8202__auto__) : cljs.pprint.cached_compile.call(null,format_in__8202__auto__)):format_in__8202__auto__);
return ((function (format_in__8202__auto__,cf__8203__auto__,_STAR_current_level_STAR_9217_9224,_STAR_current_length_STAR_9218_9225,vec__9208,seq__9209,first__9210,seq__9209__$1,ns_sym,first__9210__$1,seq__9209__$2,ns_name,stuff,vec__9211,doc_str,stuff__$1,vec__9214,attr_map,references){
return (function() { 
var G__9231__delegate = function (args__8204__auto__){
var navigator__8205__auto__ = cljs.pprint.init_navigator(args__8204__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__8203__auto__,navigator__8205__auto__);
};
var G__9231 = function (var_args){
var args__8204__auto__ = null;
if (arguments.length > 0) {
var G__9232__i = 0, G__9232__a = new Array(arguments.length -  0);
while (G__9232__i < G__9232__a.length) {G__9232__a[G__9232__i] = arguments[G__9232__i + 0]; ++G__9232__i;}
  args__8204__auto__ = new cljs.core.IndexedSeq(G__9232__a,0,null);
} 
return G__9231__delegate.call(this,args__8204__auto__);};
G__9231.cljs$lang$maxFixedArity = 0;
G__9231.cljs$lang$applyTo = (function (arglist__9233){
var args__8204__auto__ = cljs.core.seq(arglist__9233);
return G__9231__delegate(args__8204__auto__);
});
G__9231.cljs$core$IFn$_invoke$arity$variadic = G__9231__delegate;
return G__9231;
})()
;
;})(format_in__8202__auto__,cf__8203__auto__,_STAR_current_level_STAR_9217_9224,_STAR_current_length_STAR_9218_9225,vec__9208,seq__9209,first__9210,seq__9209__$1,ns_sym,first__9210__$1,seq__9209__$2,ns_name,stuff,vec__9211,doc_str,stuff__$1,vec__9214,attr_map,references))
})();
(fexpr__9220_9230.cljs$core$IFn$_invoke$arity$0 ? fexpr__9220_9230.cljs$core$IFn$_invoke$arity$0() : fexpr__9220_9230.call(null));
} else {
}

if(cljs.core.truth_(doc_str)){
cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(true,"\"~a\"~:[~;~:@_~]",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([doc_str,(function (){var or__3922__auto__ = attr_map;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.seq(references);
}
})()], 0));
} else {
}

if(cljs.core.truth_(attr_map)){
var G__9222_9234 = attr_map;
var G__9223_9235 = cljs.core.seq(references);
var fexpr__9221_9236 = (function (){var format_in__8202__auto__ = "~w~:[~;~:@_~]";
var cf__8203__auto__ = ((typeof format_in__8202__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__8202__auto__) : cljs.pprint.cached_compile.call(null,format_in__8202__auto__)):format_in__8202__auto__);
return ((function (format_in__8202__auto__,cf__8203__auto__,G__9222_9234,G__9223_9235,_STAR_current_level_STAR_9217_9224,_STAR_current_length_STAR_9218_9225,vec__9208,seq__9209,first__9210,seq__9209__$1,ns_sym,first__9210__$1,seq__9209__$2,ns_name,stuff,vec__9211,doc_str,stuff__$1,vec__9214,attr_map,references){
return (function() { 
var G__9237__delegate = function (args__8204__auto__){
var navigator__8205__auto__ = cljs.pprint.init_navigator(args__8204__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__8203__auto__,navigator__8205__auto__);
};
var G__9237 = function (var_args){
var args__8204__auto__ = null;
if (arguments.length > 0) {
var G__9238__i = 0, G__9238__a = new Array(arguments.length -  0);
while (G__9238__i < G__9238__a.length) {G__9238__a[G__9238__i] = arguments[G__9238__i + 0]; ++G__9238__i;}
  args__8204__auto__ = new cljs.core.IndexedSeq(G__9238__a,0,null);
} 
return G__9237__delegate.call(this,args__8204__auto__);};
G__9237.cljs$lang$maxFixedArity = 0;
G__9237.cljs$lang$applyTo = (function (arglist__9239){
var args__8204__auto__ = cljs.core.seq(arglist__9239);
return G__9237__delegate(args__8204__auto__);
});
G__9237.cljs$core$IFn$_invoke$arity$variadic = G__9237__delegate;
return G__9237;
})()
;
;})(format_in__8202__auto__,cf__8203__auto__,G__9222_9234,G__9223_9235,_STAR_current_level_STAR_9217_9224,_STAR_current_length_STAR_9218_9225,vec__9208,seq__9209,first__9210,seq__9209__$1,ns_sym,first__9210__$1,seq__9209__$2,ns_name,stuff,vec__9211,doc_str,stuff__$1,vec__9214,attr_map,references))
})();
(fexpr__9221_9236.cljs$core$IFn$_invoke$arity$2 ? fexpr__9221_9236.cljs$core$IFn$_invoke$arity$2(G__9222_9234,G__9223_9235) : fexpr__9221_9236.call(null,G__9222_9234,G__9223_9235));
} else {
}

var references_9240__$1 = references;
while(true){
cljs.pprint.pprint_ns_reference(cljs.core.first(references_9240__$1));

var temp__5535__auto___9241 = cljs.core.next(references_9240__$1);
if(temp__5535__auto___9241){
var references_9242__$2 = temp__5535__auto___9241;
cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__9243 = references_9242__$2;
references_9240__$1 = G__9243;
continue;
} else {
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_9218_9225;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_9217_9224;
}}

return null;
} else {
return cljs.pprint.write_out(alis);
}
});
cljs.pprint.pprint_hold_first = (function (){var format_in__8202__auto__ = "~:<~w~^ ~@_~w~^ ~_~@{~w~^ ~_~}~:>";
var cf__8203__auto__ = ((typeof format_in__8202__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__8202__auto__) : cljs.pprint.cached_compile.call(null,format_in__8202__auto__)):format_in__8202__auto__);
return ((function (format_in__8202__auto__,cf__8203__auto__){
return (function() { 
var G__9244__delegate = function (args__8204__auto__){
var navigator__8205__auto__ = cljs.pprint.init_navigator(args__8204__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__8203__auto__,navigator__8205__auto__);
};
var G__9244 = function (var_args){
var args__8204__auto__ = null;
if (arguments.length > 0) {
var G__9245__i = 0, G__9245__a = new Array(arguments.length -  0);
while (G__9245__i < G__9245__a.length) {G__9245__a[G__9245__i] = arguments[G__9245__i + 0]; ++G__9245__i;}
  args__8204__auto__ = new cljs.core.IndexedSeq(G__9245__a,0,null);
} 
return G__9244__delegate.call(this,args__8204__auto__);};
G__9244.cljs$lang$maxFixedArity = 0;
G__9244.cljs$lang$applyTo = (function (arglist__9246){
var args__8204__auto__ = cljs.core.seq(arglist__9246);
return G__9244__delegate(args__8204__auto__);
});
G__9244.cljs$core$IFn$_invoke$arity$variadic = G__9244__delegate;
return G__9244;
})()
;
;})(format_in__8202__auto__,cf__8203__auto__))
})();
cljs.pprint.single_defn = (function cljs$pprint$single_defn(alis,has_doc_str_QMARK_){
if(cljs.core.seq(alis)){
if(cljs.core.truth_(has_doc_str_QMARK_)){
var fexpr__9247_9250 = (function (){var format_in__8202__auto__ = " ~_";
var cf__8203__auto__ = ((typeof format_in__8202__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__8202__auto__) : cljs.pprint.cached_compile.call(null,format_in__8202__auto__)):format_in__8202__auto__);
return ((function (format_in__8202__auto__,cf__8203__auto__){
return (function() { 
var G__9251__delegate = function (args__8204__auto__){
var navigator__8205__auto__ = cljs.pprint.init_navigator(args__8204__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__8203__auto__,navigator__8205__auto__);
};
var G__9251 = function (var_args){
var args__8204__auto__ = null;
if (arguments.length > 0) {
var G__9252__i = 0, G__9252__a = new Array(arguments.length -  0);
while (G__9252__i < G__9252__a.length) {G__9252__a[G__9252__i] = arguments[G__9252__i + 0]; ++G__9252__i;}
  args__8204__auto__ = new cljs.core.IndexedSeq(G__9252__a,0,null);
} 
return G__9251__delegate.call(this,args__8204__auto__);};
G__9251.cljs$lang$maxFixedArity = 0;
G__9251.cljs$lang$applyTo = (function (arglist__9253){
var args__8204__auto__ = cljs.core.seq(arglist__9253);
return G__9251__delegate(args__8204__auto__);
});
G__9251.cljs$core$IFn$_invoke$arity$variadic = G__9251__delegate;
return G__9251;
})()
;
;})(format_in__8202__auto__,cf__8203__auto__))
})();
(fexpr__9247_9250.cljs$core$IFn$_invoke$arity$0 ? fexpr__9247_9250.cljs$core$IFn$_invoke$arity$0() : fexpr__9247_9250.call(null));
} else {
var fexpr__9248_9254 = (function (){var format_in__8202__auto__ = " ~@_";
var cf__8203__auto__ = ((typeof format_in__8202__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__8202__auto__) : cljs.pprint.cached_compile.call(null,format_in__8202__auto__)):format_in__8202__auto__);
return ((function (format_in__8202__auto__,cf__8203__auto__){
return (function() { 
var G__9255__delegate = function (args__8204__auto__){
var navigator__8205__auto__ = cljs.pprint.init_navigator(args__8204__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__8203__auto__,navigator__8205__auto__);
};
var G__9255 = function (var_args){
var args__8204__auto__ = null;
if (arguments.length > 0) {
var G__9256__i = 0, G__9256__a = new Array(arguments.length -  0);
while (G__9256__i < G__9256__a.length) {G__9256__a[G__9256__i] = arguments[G__9256__i + 0]; ++G__9256__i;}
  args__8204__auto__ = new cljs.core.IndexedSeq(G__9256__a,0,null);
} 
return G__9255__delegate.call(this,args__8204__auto__);};
G__9255.cljs$lang$maxFixedArity = 0;
G__9255.cljs$lang$applyTo = (function (arglist__9257){
var args__8204__auto__ = cljs.core.seq(arglist__9257);
return G__9255__delegate(args__8204__auto__);
});
G__9255.cljs$core$IFn$_invoke$arity$variadic = G__9255__delegate;
return G__9255;
})()
;
;})(format_in__8202__auto__,cf__8203__auto__))
})();
(fexpr__9248_9254.cljs$core$IFn$_invoke$arity$0 ? fexpr__9248_9254.cljs$core$IFn$_invoke$arity$0() : fexpr__9248_9254.call(null));
}

var fexpr__9249 = (function (){var format_in__8202__auto__ = "~{~w~^ ~_~}";
var cf__8203__auto__ = ((typeof format_in__8202__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__8202__auto__) : cljs.pprint.cached_compile.call(null,format_in__8202__auto__)):format_in__8202__auto__);
return ((function (format_in__8202__auto__,cf__8203__auto__){
return (function() { 
var G__9258__delegate = function (args__8204__auto__){
var navigator__8205__auto__ = cljs.pprint.init_navigator(args__8204__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__8203__auto__,navigator__8205__auto__);
};
var G__9258 = function (var_args){
var args__8204__auto__ = null;
if (arguments.length > 0) {
var G__9259__i = 0, G__9259__a = new Array(arguments.length -  0);
while (G__9259__i < G__9259__a.length) {G__9259__a[G__9259__i] = arguments[G__9259__i + 0]; ++G__9259__i;}
  args__8204__auto__ = new cljs.core.IndexedSeq(G__9259__a,0,null);
} 
return G__9258__delegate.call(this,args__8204__auto__);};
G__9258.cljs$lang$maxFixedArity = 0;
G__9258.cljs$lang$applyTo = (function (arglist__9260){
var args__8204__auto__ = cljs.core.seq(arglist__9260);
return G__9258__delegate(args__8204__auto__);
});
G__9258.cljs$core$IFn$_invoke$arity$variadic = G__9258__delegate;
return G__9258;
})()
;
;})(format_in__8202__auto__,cf__8203__auto__))
})();
return (fexpr__9249.cljs$core$IFn$_invoke$arity$1 ? fexpr__9249.cljs$core$IFn$_invoke$arity$1(alis) : fexpr__9249.call(null,alis));
} else {
return null;
}
});
cljs.pprint.multi_defn = (function cljs$pprint$multi_defn(alis,has_doc_str_QMARK_){
if(cljs.core.seq(alis)){
var fexpr__9261 = (function (){var format_in__8202__auto__ = " ~_~{~w~^ ~_~}";
var cf__8203__auto__ = ((typeof format_in__8202__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__8202__auto__) : cljs.pprint.cached_compile.call(null,format_in__8202__auto__)):format_in__8202__auto__);
return ((function (format_in__8202__auto__,cf__8203__auto__){
return (function() { 
var G__9262__delegate = function (args__8204__auto__){
var navigator__8205__auto__ = cljs.pprint.init_navigator(args__8204__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__8203__auto__,navigator__8205__auto__);
};
var G__9262 = function (var_args){
var args__8204__auto__ = null;
if (arguments.length > 0) {
var G__9263__i = 0, G__9263__a = new Array(arguments.length -  0);
while (G__9263__i < G__9263__a.length) {G__9263__a[G__9263__i] = arguments[G__9263__i + 0]; ++G__9263__i;}
  args__8204__auto__ = new cljs.core.IndexedSeq(G__9263__a,0,null);
} 
return G__9262__delegate.call(this,args__8204__auto__);};
G__9262.cljs$lang$maxFixedArity = 0;
G__9262.cljs$lang$applyTo = (function (arglist__9264){
var args__8204__auto__ = cljs.core.seq(arglist__9264);
return G__9262__delegate(args__8204__auto__);
});
G__9262.cljs$core$IFn$_invoke$arity$variadic = G__9262__delegate;
return G__9262;
})()
;
;})(format_in__8202__auto__,cf__8203__auto__))
})();
return (fexpr__9261.cljs$core$IFn$_invoke$arity$1 ? fexpr__9261.cljs$core$IFn$_invoke$arity$1(alis) : fexpr__9261.call(null,alis));
} else {
return null;
}
});
cljs.pprint.pprint_defn = (function cljs$pprint$pprint_defn(alis){
if(cljs.core.next(alis)){
var vec__9265 = alis;
var seq__9266 = cljs.core.seq(vec__9265);
var first__9267 = cljs.core.first(seq__9266);
var seq__9266__$1 = cljs.core.next(seq__9266);
var defn_sym = first__9267;
var first__9267__$1 = cljs.core.first(seq__9266__$1);
var seq__9266__$2 = cljs.core.next(seq__9266__$1);
var defn_name = first__9267__$1;
var stuff = seq__9266__$2;
var vec__9268 = ((typeof cljs.core.first(stuff) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(stuff),cljs.core.next(stuff)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff], null));
var doc_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9268,(0),null);
var stuff__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9268,(1),null);
var vec__9271 = ((cljs.core.map_QMARK_(cljs.core.first(stuff__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(stuff__$1),cljs.core.next(stuff__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff__$1], null));
var attr_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9271,(0),null);
var stuff__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9271,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_9274_9279 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_9275_9280 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

var fexpr__9276_9281 = (function (){var format_in__8202__auto__ = "~w ~1I~@_~w";
var cf__8203__auto__ = ((typeof format_in__8202__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__8202__auto__) : cljs.pprint.cached_compile.call(null,format_in__8202__auto__)):format_in__8202__auto__);
return ((function (format_in__8202__auto__,cf__8203__auto__,_STAR_current_level_STAR_9274_9279,_STAR_current_length_STAR_9275_9280,vec__9265,seq__9266,first__9267,seq__9266__$1,defn_sym,first__9267__$1,seq__9266__$2,defn_name,stuff,vec__9268,doc_str,stuff__$1,vec__9271,attr_map,stuff__$2){
return (function() { 
var G__9282__delegate = function (args__8204__auto__){
var navigator__8205__auto__ = cljs.pprint.init_navigator(args__8204__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__8203__auto__,navigator__8205__auto__);
};
var G__9282 = function (var_args){
var args__8204__auto__ = null;
if (arguments.length > 0) {
var G__9283__i = 0, G__9283__a = new Array(arguments.length -  0);
while (G__9283__i < G__9283__a.length) {G__9283__a[G__9283__i] = arguments[G__9283__i + 0]; ++G__9283__i;}
  args__8204__auto__ = new cljs.core.IndexedSeq(G__9283__a,0,null);
} 
return G__9282__delegate.call(this,args__8204__auto__);};
G__9282.cljs$lang$maxFixedArity = 0;
G__9282.cljs$lang$applyTo = (function (arglist__9284){
var args__8204__auto__ = cljs.core.seq(arglist__9284);
return G__9282__delegate(args__8204__auto__);
});
G__9282.cljs$core$IFn$_invoke$arity$variadic = G__9282__delegate;
return G__9282;
})()
;
;})(format_in__8202__auto__,cf__8203__auto__,_STAR_current_level_STAR_9274_9279,_STAR_current_length_STAR_9275_9280,vec__9265,seq__9266,first__9267,seq__9266__$1,defn_sym,first__9267__$1,seq__9266__$2,defn_name,stuff,vec__9268,doc_str,stuff__$1,vec__9271,attr_map,stuff__$2))
})();
(fexpr__9276_9281.cljs$core$IFn$_invoke$arity$2 ? fexpr__9276_9281.cljs$core$IFn$_invoke$arity$2(defn_sym,defn_name) : fexpr__9276_9281.call(null,defn_sym,defn_name));

if(cljs.core.truth_(doc_str)){
var fexpr__9277_9285 = (function (){var format_in__8202__auto__ = " ~_~w";
var cf__8203__auto__ = ((typeof format_in__8202__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__8202__auto__) : cljs.pprint.cached_compile.call(null,format_in__8202__auto__)):format_in__8202__auto__);
return ((function (format_in__8202__auto__,cf__8203__auto__,_STAR_current_level_STAR_9274_9279,_STAR_current_length_STAR_9275_9280,vec__9265,seq__9266,first__9267,seq__9266__$1,defn_sym,first__9267__$1,seq__9266__$2,defn_name,stuff,vec__9268,doc_str,stuff__$1,vec__9271,attr_map,stuff__$2){
return (function() { 
var G__9286__delegate = function (args__8204__auto__){
var navigator__8205__auto__ = cljs.pprint.init_navigator(args__8204__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__8203__auto__,navigator__8205__auto__);
};
var G__9286 = function (var_args){
var args__8204__auto__ = null;
if (arguments.length > 0) {
var G__9287__i = 0, G__9287__a = new Array(arguments.length -  0);
while (G__9287__i < G__9287__a.length) {G__9287__a[G__9287__i] = arguments[G__9287__i + 0]; ++G__9287__i;}
  args__8204__auto__ = new cljs.core.IndexedSeq(G__9287__a,0,null);
} 
return G__9286__delegate.call(this,args__8204__auto__);};
G__9286.cljs$lang$maxFixedArity = 0;
G__9286.cljs$lang$applyTo = (function (arglist__9288){
var args__8204__auto__ = cljs.core.seq(arglist__9288);
return G__9286__delegate(args__8204__auto__);
});
G__9286.cljs$core$IFn$_invoke$arity$variadic = G__9286__delegate;
return G__9286;
})()
;
;})(format_in__8202__auto__,cf__8203__auto__,_STAR_current_level_STAR_9274_9279,_STAR_current_length_STAR_9275_9280,vec__9265,seq__9266,first__9267,seq__9266__$1,defn_sym,first__9267__$1,seq__9266__$2,defn_name,stuff,vec__9268,doc_str,stuff__$1,vec__9271,attr_map,stuff__$2))
})();
(fexpr__9277_9285.cljs$core$IFn$_invoke$arity$1 ? fexpr__9277_9285.cljs$core$IFn$_invoke$arity$1(doc_str) : fexpr__9277_9285.call(null,doc_str));
} else {
}

if(cljs.core.truth_(attr_map)){
var fexpr__9278_9289 = (function (){var format_in__8202__auto__ = " ~_~w";
var cf__8203__auto__ = ((typeof format_in__8202__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__8202__auto__) : cljs.pprint.cached_compile.call(null,format_in__8202__auto__)):format_in__8202__auto__);
return ((function (format_in__8202__auto__,cf__8203__auto__,_STAR_current_level_STAR_9274_9279,_STAR_current_length_STAR_9275_9280,vec__9265,seq__9266,first__9267,seq__9266__$1,defn_sym,first__9267__$1,seq__9266__$2,defn_name,stuff,vec__9268,doc_str,stuff__$1,vec__9271,attr_map,stuff__$2){
return (function() { 
var G__9290__delegate = function (args__8204__auto__){
var navigator__8205__auto__ = cljs.pprint.init_navigator(args__8204__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__8203__auto__,navigator__8205__auto__);
};
var G__9290 = function (var_args){
var args__8204__auto__ = null;
if (arguments.length > 0) {
var G__9291__i = 0, G__9291__a = new Array(arguments.length -  0);
while (G__9291__i < G__9291__a.length) {G__9291__a[G__9291__i] = arguments[G__9291__i + 0]; ++G__9291__i;}
  args__8204__auto__ = new cljs.core.IndexedSeq(G__9291__a,0,null);
} 
return G__9290__delegate.call(this,args__8204__auto__);};
G__9290.cljs$lang$maxFixedArity = 0;
G__9290.cljs$lang$applyTo = (function (arglist__9292){
var args__8204__auto__ = cljs.core.seq(arglist__9292);
return G__9290__delegate(args__8204__auto__);
});
G__9290.cljs$core$IFn$_invoke$arity$variadic = G__9290__delegate;
return G__9290;
})()
;
;})(format_in__8202__auto__,cf__8203__auto__,_STAR_current_level_STAR_9274_9279,_STAR_current_length_STAR_9275_9280,vec__9265,seq__9266,first__9267,seq__9266__$1,defn_sym,first__9267__$1,seq__9266__$2,defn_name,stuff,vec__9268,doc_str,stuff__$1,vec__9271,attr_map,stuff__$2))
})();
(fexpr__9278_9289.cljs$core$IFn$_invoke$arity$1 ? fexpr__9278_9289.cljs$core$IFn$_invoke$arity$1(attr_map) : fexpr__9278_9289.call(null,attr_map));
} else {
}

if(cljs.core.vector_QMARK_(cljs.core.first(stuff__$2))){
cljs.pprint.single_defn(stuff__$2,(function (){var or__3922__auto__ = doc_str;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return attr_map;
}
})());
} else {
cljs.pprint.multi_defn(stuff__$2,(function (){var or__3922__auto__ = doc_str;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return attr_map;
}
})());

}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_9275_9280;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_9274_9279;
}}

return null;
} else {
return (cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1(alis) : cljs.pprint.pprint_simple_code_list.call(null,alis));
}
});
cljs.pprint.pprint_binding_form = (function cljs$pprint$pprint_binding_form(binding_vec){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_9293_9298 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_9294_9299 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"[",null,"]");

var length_count9295_9300 = (0);
var binding_9301 = binding_vec;
while(true){
if(((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count9295_9300 < cljs.core._STAR_print_length_STAR_)))){
if(cljs.core.seq(binding_9301)){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_9296_9302 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_9297_9303 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,null,null,null);


cljs.pprint.write_out(cljs.core.first(binding_9301));

if(cljs.core.next(binding_9301)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$miser);

cljs.pprint.write_out(cljs.core.second(binding_9301));
} else {
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_9297_9303;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_9296_9302;
}}


if(cljs.core.next(cljs.core.rest(binding_9301))){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__9304 = (length_count9295_9300 + (1));
var G__9305 = cljs.core.next(cljs.core.rest(binding_9301));
length_count9295_9300 = G__9304;
binding_9301 = G__9305;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_9294_9299;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_9293_9298;
}}

return null;
});
cljs.pprint.pprint_let = (function cljs$pprint$pprint_let(alis){
var base_sym = cljs.core.first(alis);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_9306_9311 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_9307_9312 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

if(((cljs.core.next(alis)) && (cljs.core.vector_QMARK_(cljs.core.second(alis))))){
var fexpr__9308_9313 = (function (){var format_in__8202__auto__ = "~w ~1I~@_";
var cf__8203__auto__ = ((typeof format_in__8202__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__8202__auto__) : cljs.pprint.cached_compile.call(null,format_in__8202__auto__)):format_in__8202__auto__);
return ((function (format_in__8202__auto__,cf__8203__auto__,_STAR_current_level_STAR_9306_9311,_STAR_current_length_STAR_9307_9312,base_sym){
return (function() { 
var G__9314__delegate = function (args__8204__auto__){
var navigator__8205__auto__ = cljs.pprint.init_navigator(args__8204__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__8203__auto__,navigator__8205__auto__);
};
var G__9314 = function (var_args){
var args__8204__auto__ = null;
if (arguments.length > 0) {
var G__9315__i = 0, G__9315__a = new Array(arguments.length -  0);
while (G__9315__i < G__9315__a.length) {G__9315__a[G__9315__i] = arguments[G__9315__i + 0]; ++G__9315__i;}
  args__8204__auto__ = new cljs.core.IndexedSeq(G__9315__a,0,null);
} 
return G__9314__delegate.call(this,args__8204__auto__);};
G__9314.cljs$lang$maxFixedArity = 0;
G__9314.cljs$lang$applyTo = (function (arglist__9316){
var args__8204__auto__ = cljs.core.seq(arglist__9316);
return G__9314__delegate(args__8204__auto__);
});
G__9314.cljs$core$IFn$_invoke$arity$variadic = G__9314__delegate;
return G__9314;
})()
;
;})(format_in__8202__auto__,cf__8203__auto__,_STAR_current_level_STAR_9306_9311,_STAR_current_length_STAR_9307_9312,base_sym))
})();
(fexpr__9308_9313.cljs$core$IFn$_invoke$arity$1 ? fexpr__9308_9313.cljs$core$IFn$_invoke$arity$1(base_sym) : fexpr__9308_9313.call(null,base_sym));

cljs.pprint.pprint_binding_form(cljs.core.second(alis));

var G__9310_9317 = cljs.core.next(cljs.core.rest(alis));
var fexpr__9309_9318 = (function (){var format_in__8202__auto__ = " ~_~{~w~^ ~_~}";
var cf__8203__auto__ = ((typeof format_in__8202__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__8202__auto__) : cljs.pprint.cached_compile.call(null,format_in__8202__auto__)):format_in__8202__auto__);
return ((function (format_in__8202__auto__,cf__8203__auto__,G__9310_9317,_STAR_current_level_STAR_9306_9311,_STAR_current_length_STAR_9307_9312,base_sym){
return (function() { 
var G__9319__delegate = function (args__8204__auto__){
var navigator__8205__auto__ = cljs.pprint.init_navigator(args__8204__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__8203__auto__,navigator__8205__auto__);
};
var G__9319 = function (var_args){
var args__8204__auto__ = null;
if (arguments.length > 0) {
var G__9320__i = 0, G__9320__a = new Array(arguments.length -  0);
while (G__9320__i < G__9320__a.length) {G__9320__a[G__9320__i] = arguments[G__9320__i + 0]; ++G__9320__i;}
  args__8204__auto__ = new cljs.core.IndexedSeq(G__9320__a,0,null);
} 
return G__9319__delegate.call(this,args__8204__auto__);};
G__9319.cljs$lang$maxFixedArity = 0;
G__9319.cljs$lang$applyTo = (function (arglist__9321){
var args__8204__auto__ = cljs.core.seq(arglist__9321);
return G__9319__delegate(args__8204__auto__);
});
G__9319.cljs$core$IFn$_invoke$arity$variadic = G__9319__delegate;
return G__9319;
})()
;
;})(format_in__8202__auto__,cf__8203__auto__,G__9310_9317,_STAR_current_level_STAR_9306_9311,_STAR_current_length_STAR_9307_9312,base_sym))
})();
(fexpr__9309_9318.cljs$core$IFn$_invoke$arity$1 ? fexpr__9309_9318.cljs$core$IFn$_invoke$arity$1(G__9310_9317) : fexpr__9309_9318.call(null,G__9310_9317));
} else {
(cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1(alis) : cljs.pprint.pprint_simple_code_list.call(null,alis));
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_9307_9312;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_9306_9311;
}}

return null;
});
cljs.pprint.pprint_if = (function (){var format_in__8202__auto__ = "~:<~1I~w~^ ~@_~w~@{ ~_~w~}~:>";
var cf__8203__auto__ = ((typeof format_in__8202__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__8202__auto__) : cljs.pprint.cached_compile.call(null,format_in__8202__auto__)):format_in__8202__auto__);
return ((function (format_in__8202__auto__,cf__8203__auto__){
return (function() { 
var G__9322__delegate = function (args__8204__auto__){
var navigator__8205__auto__ = cljs.pprint.init_navigator(args__8204__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__8203__auto__,navigator__8205__auto__);
};
var G__9322 = function (var_args){
var args__8204__auto__ = null;
if (arguments.length > 0) {
var G__9323__i = 0, G__9323__a = new Array(arguments.length -  0);
while (G__9323__i < G__9323__a.length) {G__9323__a[G__9323__i] = arguments[G__9323__i + 0]; ++G__9323__i;}
  args__8204__auto__ = new cljs.core.IndexedSeq(G__9323__a,0,null);
} 
return G__9322__delegate.call(this,args__8204__auto__);};
G__9322.cljs$lang$maxFixedArity = 0;
G__9322.cljs$lang$applyTo = (function (arglist__9324){
var args__8204__auto__ = cljs.core.seq(arglist__9324);
return G__9322__delegate(args__8204__auto__);
});
G__9322.cljs$core$IFn$_invoke$arity$variadic = G__9322__delegate;
return G__9322;
})()
;
;})(format_in__8202__auto__,cf__8203__auto__))
})();
cljs.pprint.pprint_cond = (function cljs$pprint$pprint_cond(alis){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_9325_9330 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_9326_9331 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent(cljs.core.cst$kw$block,(1));

cljs.pprint.write_out(cljs.core.first(alis));

if(cljs.core.next(alis)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var length_count9327_9332 = (0);
var alis_9333__$1 = cljs.core.next(alis);
while(true){
if(((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count9327_9332 < cljs.core._STAR_print_length_STAR_)))){
if(alis_9333__$1){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_9328_9334 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_9329_9335 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,null,null,null);


cljs.pprint.write_out(cljs.core.first(alis_9333__$1));

if(cljs.core.next(alis_9333__$1)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$miser);

cljs.pprint.write_out(cljs.core.second(alis_9333__$1));
} else {
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_9329_9335;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_9328_9334;
}}


if(cljs.core.next(cljs.core.rest(alis_9333__$1))){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__9336 = (length_count9327_9332 + (1));
var G__9337 = cljs.core.next(cljs.core.rest(alis_9333__$1));
length_count9327_9332 = G__9336;
alis_9333__$1 = G__9337;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}
} else {
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_9326_9331;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_9325_9330;
}}

return null;
});
cljs.pprint.pprint_condp = (function cljs$pprint$pprint_condp(alis){
if((cljs.core.count(alis) > (3))){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_9338_9343 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_9339_9344 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent(cljs.core.cst$kw$block,(1));

cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var format_in__8202__auto__ = "~w ~@_~w ~@_~w ~_";
var cf__8203__auto__ = ((typeof format_in__8202__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__8202__auto__) : cljs.pprint.cached_compile.call(null,format_in__8202__auto__)):format_in__8202__auto__);
return ((function (format_in__8202__auto__,cf__8203__auto__,_STAR_current_level_STAR_9338_9343,_STAR_current_length_STAR_9339_9344){
return (function() { 
var G__9345__delegate = function (args__8204__auto__){
var navigator__8205__auto__ = cljs.pprint.init_navigator(args__8204__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__8203__auto__,navigator__8205__auto__);
};
var G__9345 = function (var_args){
var args__8204__auto__ = null;
if (arguments.length > 0) {
var G__9346__i = 0, G__9346__a = new Array(arguments.length -  0);
while (G__9346__i < G__9346__a.length) {G__9346__a[G__9346__i] = arguments[G__9346__i + 0]; ++G__9346__i;}
  args__8204__auto__ = new cljs.core.IndexedSeq(G__9346__a,0,null);
} 
return G__9345__delegate.call(this,args__8204__auto__);};
G__9345.cljs$lang$maxFixedArity = 0;
G__9345.cljs$lang$applyTo = (function (arglist__9347){
var args__8204__auto__ = cljs.core.seq(arglist__9347);
return G__9345__delegate(args__8204__auto__);
});
G__9345.cljs$core$IFn$_invoke$arity$variadic = G__9345__delegate;
return G__9345;
})()
;
;})(format_in__8202__auto__,cf__8203__auto__,_STAR_current_level_STAR_9338_9343,_STAR_current_length_STAR_9339_9344))
})(),alis);

var length_count9340_9348 = (0);
var alis_9349__$1 = cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((3),alis));
while(true){
if(((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count9340_9348 < cljs.core._STAR_print_length_STAR_)))){
if(alis_9349__$1){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_9341_9350 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_9342_9351 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,null,null,null);


cljs.pprint.write_out(cljs.core.first(alis_9349__$1));

if(cljs.core.next(alis_9349__$1)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$miser);

cljs.pprint.write_out(cljs.core.second(alis_9349__$1));
} else {
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_9342_9351;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_9341_9350;
}}


if(cljs.core.next(cljs.core.rest(alis_9349__$1))){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__9352 = (length_count9340_9348 + (1));
var G__9353 = cljs.core.next(cljs.core.rest(alis_9349__$1));
length_count9340_9348 = G__9352;
alis_9349__$1 = G__9353;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_9339_9344;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_9338_9343;
}}

return null;
} else {
return (cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1(alis) : cljs.pprint.pprint_simple_code_list.call(null,alis));
}
});
cljs.pprint._STAR_symbol_map_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
cljs.pprint.pprint_anon_func = (function cljs$pprint$pprint_anon_func(alis){
var args = cljs.core.second(alis);
var nlis = cljs.core.first(cljs.core.rest(cljs.core.rest(alis)));
if(cljs.core.vector_QMARK_(args)){
var _STAR_symbol_map_STAR_9356 = cljs.pprint._STAR_symbol_map_STAR_;
cljs.pprint._STAR_symbol_map_STAR_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(args)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(args),"%"]):cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (_STAR_symbol_map_STAR_9356,args,nlis){
return (function (p1__9354_SHARP_,p2__9355_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__9354_SHARP_,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("%"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__9355_SHARP_)].join('')],null));
});})(_STAR_symbol_map_STAR_9356,args,nlis))
,args,cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(cljs.core.count(args) + (1))))));

try{var fexpr__9357 = (function (){var format_in__8202__auto__ = "~<#(~;~@{~w~^ ~_~}~;)~:>";
var cf__8203__auto__ = ((typeof format_in__8202__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__8202__auto__) : cljs.pprint.cached_compile.call(null,format_in__8202__auto__)):format_in__8202__auto__);
return ((function (format_in__8202__auto__,cf__8203__auto__,_STAR_symbol_map_STAR_9356,args,nlis){
return (function() { 
var G__9358__delegate = function (args__8204__auto__){
var navigator__8205__auto__ = cljs.pprint.init_navigator(args__8204__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__8203__auto__,navigator__8205__auto__);
};
var G__9358 = function (var_args){
var args__8204__auto__ = null;
if (arguments.length > 0) {
var G__9359__i = 0, G__9359__a = new Array(arguments.length -  0);
while (G__9359__i < G__9359__a.length) {G__9359__a[G__9359__i] = arguments[G__9359__i + 0]; ++G__9359__i;}
  args__8204__auto__ = new cljs.core.IndexedSeq(G__9359__a,0,null);
} 
return G__9358__delegate.call(this,args__8204__auto__);};
G__9358.cljs$lang$maxFixedArity = 0;
G__9358.cljs$lang$applyTo = (function (arglist__9360){
var args__8204__auto__ = cljs.core.seq(arglist__9360);
return G__9358__delegate(args__8204__auto__);
});
G__9358.cljs$core$IFn$_invoke$arity$variadic = G__9358__delegate;
return G__9358;
})()
;
;})(format_in__8202__auto__,cf__8203__auto__,_STAR_symbol_map_STAR_9356,args,nlis))
})();
return (fexpr__9357.cljs$core$IFn$_invoke$arity$1 ? fexpr__9357.cljs$core$IFn$_invoke$arity$1(nlis) : fexpr__9357.call(null,nlis));
}finally {cljs.pprint._STAR_symbol_map_STAR_ = _STAR_symbol_map_STAR_9356;
}} else {
return (cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1(alis) : cljs.pprint.pprint_simple_code_list.call(null,alis));
}
});
cljs.pprint.pprint_simple_code_list = (function cljs$pprint$pprint_simple_code_list(alis){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_9361_9364 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_9362_9365 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent(cljs.core.cst$kw$block,(1));

var length_count9363_9366 = (0);
var alis_9367__$1 = cljs.core.seq(alis);
while(true){
if(((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count9363_9366 < cljs.core._STAR_print_length_STAR_)))){
if(alis_9367__$1){
cljs.pprint.write_out(cljs.core.first(alis_9367__$1));

if(cljs.core.next(alis_9367__$1)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__9368 = (length_count9363_9366 + (1));
var G__9369 = cljs.core.next(alis_9367__$1);
length_count9363_9366 = G__9368;
alis_9367__$1 = G__9369;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_9362_9365;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_9361_9364;
}}

return null;
});
cljs.pprint.two_forms = (function cljs$pprint$two_forms(amap){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var iter__4292__auto__ = (function cljs$pprint$two_forms_$_iter__9370(s__9371){
return (new cljs.core.LazySeq(null,(function (){
var s__9371__$1 = s__9371;
while(true){
var temp__5535__auto__ = cljs.core.seq(s__9371__$1);
if(temp__5535__auto__){
var s__9371__$2 = temp__5535__auto__;
if(cljs.core.chunked_seq_QMARK_(s__9371__$2)){
var c__4290__auto__ = cljs.core.chunk_first(s__9371__$2);
var size__4291__auto__ = cljs.core.count(c__4290__auto__);
var b__9373 = cljs.core.chunk_buffer(size__4291__auto__);
if((function (){var i__9372 = (0);
while(true){
if((i__9372 < size__4291__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4290__auto__,i__9372);
cljs.core.chunk_append(b__9373,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(cljs.core.first(x))),cljs.core.second(x)], null)], null));

var G__9374 = (i__9372 + (1));
i__9372 = G__9374;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__9373),cljs$pprint$two_forms_$_iter__9370(cljs.core.chunk_rest(s__9371__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__9373),null);
}
} else {
var x = cljs.core.first(s__9371__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(cljs.core.first(x))),cljs.core.second(x)], null)], null),cljs$pprint$two_forms_$_iter__9370(cljs.core.rest(s__9371__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__(amap);
})()], 0)));
});
cljs.pprint.add_core_ns = (function cljs$pprint$add_core_ns(amap){
var core = "clojure.core";
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (core){
return (function (p1__9375_SHARP_){
var vec__9376 = p1__9375_SHARP_;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9376,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9376,(1),null);
if(cljs.core.not((function (){var or__3922__auto__ = cljs.core.namespace(s);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.special_symbol_QMARK_(s);
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(core,cljs.core.name(s)),f], null);
} else {
return p1__9375_SHARP_;
}
});})(core))
,amap));
});
cljs.pprint._STAR_code_table_STAR_ = cljs.pprint.two_forms(cljs.pprint.add_core_ns(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$sym$_DOT_,cljs.core.cst$sym$fn_STAR_,cljs.core.cst$sym$when_DASH_first,cljs.core.cst$sym$if,cljs.core.cst$sym$condp,cljs.core.cst$sym$$$,cljs.core.cst$sym$defmacro,cljs.core.cst$sym$defn,cljs.core.cst$sym$loop,cljs.core.cst$sym$struct,cljs.core.cst$sym$doseq,cljs.core.cst$sym$if_DASH_not,cljs.core.cst$sym$when_DASH_not,cljs.core.cst$sym$def,cljs.core.cst$sym$when,cljs.core.cst$sym$with_DASH_open,cljs.core.cst$sym$with_DASH_local_DASH_vars,cljs.core.cst$sym$defonce,cljs.core.cst$sym$when_DASH_let,cljs.core.cst$sym$ns,cljs.core.cst$sym$dotimes,cljs.core.cst$sym$cond,cljs.core.cst$sym$let,cljs.core.cst$sym$fn,cljs.core.cst$sym$defn_DASH_,cljs.core.cst$sym$locking,cljs.core.cst$sym$_DASH__GT_,cljs.core.cst$sym$if_DASH_let,cljs.core.cst$sym$binding,cljs.core.cst$sym$struct_DASH_map],[cljs.pprint.pprint_hold_first,cljs.pprint.pprint_anon_func,cljs.pprint.pprint_let,cljs.pprint.pprint_if,cljs.pprint.pprint_condp,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_defn,cljs.pprint.pprint_defn,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_if,cljs.pprint.pprint_if,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_if,cljs.pprint.pprint_let,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_ns,cljs.pprint.pprint_let,cljs.pprint.pprint_cond,cljs.pprint.pprint_let,cljs.pprint.pprint_defn,cljs.pprint.pprint_defn,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first])));
cljs.pprint.pprint_code_list = (function cljs$pprint$pprint_code_list(alis){
if(cljs.core.not(cljs.pprint.pprint_reader_macro(alis))){
var temp__5533__auto__ = (function (){var G__9379 = cljs.core.first(alis);
return (cljs.pprint._STAR_code_table_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint._STAR_code_table_STAR_.cljs$core$IFn$_invoke$arity$1(G__9379) : cljs.pprint._STAR_code_table_STAR_.call(null,G__9379));
})();
if(cljs.core.truth_(temp__5533__auto__)){
var special_form = temp__5533__auto__;
return (special_form.cljs$core$IFn$_invoke$arity$1 ? special_form.cljs$core$IFn$_invoke$arity$1(alis) : special_form.call(null,alis));
} else {
return cljs.pprint.pprint_simple_code_list(alis);
}
} else {
return null;
}
});
cljs.pprint.pprint_code_symbol = (function cljs$pprint$pprint_code_symbol(sym){
var temp__5533__auto__ = (sym.cljs$core$IFn$_invoke$arity$1 ? sym.cljs$core$IFn$_invoke$arity$1(cljs.pprint._STAR_symbol_map_STAR_) : sym.call(null,cljs.pprint._STAR_symbol_map_STAR_));
if(cljs.core.truth_(temp__5533__auto__)){
var arg_num = temp__5533__auto__;
return cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arg_num], 0));
} else {
if(cljs.core.truth_(cljs.pprint._STAR_print_suppress_namespaces_STAR_)){
return cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.name(sym)], 0));
} else {
return (cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1(sym) : cljs.pprint.pr.call(null,sym));
}
}
});
if(typeof cljs.pprint.code_dispatch !== 'undefined'){
} else {
/**
 * The pretty print dispatch function for pretty printing Clojure code.
 */
cljs.pprint.code_dispatch = (function (){var method_table__4382__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4383__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4384__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4385__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4386__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.pprint","code-dispatch"),cljs.pprint.type_dispatcher,cljs.core.cst$kw$default,hierarchy__4386__auto__,method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__));
})();
}
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$list,cljs.pprint.pprint_code_list);
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$symbol,cljs.pprint.pprint_code_symbol);
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$vector,cljs.pprint.pprint_vector);
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$map,cljs.pprint.pprint_map);
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$set,cljs.pprint.pprint_set);
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$queue,cljs.pprint.pprint_pqueue);
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$deref,cljs.pprint.pprint_ideref);
cljs.pprint.use_method(cljs.pprint.code_dispatch,null,cljs.pprint.pr);
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$default,cljs.pprint.pprint_simple_default);
cljs.pprint.set_pprint_dispatch(cljs.pprint.simple_dispatch);
cljs.pprint.add_padding = (function cljs$pprint$add_padding(width,s){
var padding = (function (){var x__4006__auto__ = (0);
var y__4007__auto__ = (width - cljs.core.count(s));
return ((x__4006__auto__ > y__4007__auto__) ? x__4006__auto__ : y__4007__auto__);
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(padding," ")),s);
});
/**
 * Prints a collection of maps in a textual table. Prints table headings
 * ks, and then a line of output for each row, corresponding to the keys
 * in ks. If ks are not specified, use the keys of the first item in rows.
 */
cljs.pprint.print_table = (function cljs$pprint$print_table(var_args){
var G__9384 = arguments.length;
switch (G__9384) {
case 2:
return cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$2 = (function (ks,rows){
var _STAR_print_newline_STAR_9385 = cljs.core._STAR_print_newline_STAR_;
try{if(cljs.core.seq(rows)){
var widths = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR_9385){
return (function (k){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max,cljs.core.count([cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('')),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR_9385){
return (function (p1__9380_SHARP_){
return cljs.core.count([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__9380_SHARP_,k))].join(''));
});})(_STAR_print_newline_STAR_9385))
,rows));
});})(_STAR_print_newline_STAR_9385))
,ks);
var spacers = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (widths,_STAR_print_newline_STAR_9385){
return (function (p1__9381_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(p1__9381_SHARP_,"-"));
});})(widths,_STAR_print_newline_STAR_9385))
,widths);
var fmt_row = ((function (widths,spacers,_STAR_print_newline_STAR_9385){
return (function (leader,divider,trailer,row){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(leader),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(divider,(function (){var iter__4292__auto__ = ((function (widths,spacers,_STAR_print_newline_STAR_9385){
return (function cljs$pprint$iter__9386(s__9387){
return (new cljs.core.LazySeq(null,((function (widths,spacers,_STAR_print_newline_STAR_9385){
return (function (){
var s__9387__$1 = s__9387;
while(true){
var temp__5535__auto__ = cljs.core.seq(s__9387__$1);
if(temp__5535__auto__){
var s__9387__$2 = temp__5535__auto__;
if(cljs.core.chunked_seq_QMARK_(s__9387__$2)){
var c__4290__auto__ = cljs.core.chunk_first(s__9387__$2);
var size__4291__auto__ = cljs.core.count(c__4290__auto__);
var b__9389 = cljs.core.chunk_buffer(size__4291__auto__);
if((function (){var i__9388 = (0);
while(true){
if((i__9388 < size__4291__auto__)){
var vec__9390 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4290__auto__,i__9388);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9390,(0),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9390,(1),null);
cljs.core.chunk_append(b__9389,cljs.pprint.add_padding(width,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)].join('')));

var G__9401 = (i__9388 + (1));
i__9388 = G__9401;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__9389),cljs$pprint$iter__9386(cljs.core.chunk_rest(s__9387__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__9389),null);
}
} else {
var vec__9393 = cljs.core.first(s__9387__$2);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9393,(0),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9393,(1),null);
return cljs.core.cons(cljs.pprint.add_padding(width,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)].join('')),cljs$pprint$iter__9386(cljs.core.rest(s__9387__$2)));
}
} else {
return null;
}
break;
}
});})(widths,spacers,_STAR_print_newline_STAR_9385))
,null,null));
});})(widths,spacers,_STAR_print_newline_STAR_9385))
;
return iter__4292__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (iter__4292__auto__,widths,spacers,_STAR_print_newline_STAR_9385){
return (function (p1__9382_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,p1__9382_SHARP_);
});})(iter__4292__auto__,widths,spacers,_STAR_print_newline_STAR_9385))
,ks),widths));
})()))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(trailer)].join('');
});})(widths,spacers,_STAR_print_newline_STAR_9385))
;
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fmt_row("| "," | "," |",cljs.core.zipmap(ks,ks))], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fmt_row("|-","-+-","-|",cljs.core.zipmap(ks,spacers))], 0));

var seq__9396 = cljs.core.seq(rows);
var chunk__9397 = null;
var count__9398 = (0);
var i__9399 = (0);
while(true){
if((i__9399 < count__9398)){
var row = chunk__9397.cljs$core$IIndexed$_nth$arity$2(null,i__9399);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fmt_row("| "," | "," |",row)], 0));


var G__9402 = seq__9396;
var G__9403 = chunk__9397;
var G__9404 = count__9398;
var G__9405 = (i__9399 + (1));
seq__9396 = G__9402;
chunk__9397 = G__9403;
count__9398 = G__9404;
i__9399 = G__9405;
continue;
} else {
var temp__5535__auto__ = cljs.core.seq(seq__9396);
if(temp__5535__auto__){
var seq__9396__$1 = temp__5535__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__9396__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__9396__$1);
var G__9406 = cljs.core.chunk_rest(seq__9396__$1);
var G__9407 = c__4319__auto__;
var G__9408 = cljs.core.count(c__4319__auto__);
var G__9409 = (0);
seq__9396 = G__9406;
chunk__9397 = G__9407;
count__9398 = G__9408;
i__9399 = G__9409;
continue;
} else {
var row = cljs.core.first(seq__9396__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fmt_row("| "," | "," |",row)], 0));


var G__9410 = cljs.core.next(seq__9396__$1);
var G__9411 = null;
var G__9412 = (0);
var G__9413 = (0);
seq__9396 = G__9410;
chunk__9397 = G__9411;
count__9398 = G__9412;
i__9399 = G__9413;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_9385;
}});

cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$1 = (function (rows){
return cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(cljs.core.first(rows)),rows);
});

cljs.pprint.print_table.cljs$lang$maxFixedArity = 2;

