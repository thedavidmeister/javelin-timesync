// Compiled by ClojureScript 1.10.238 {:static-fns true, :optimize-constants true}
goog.provide('clojure.test.check.generators');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core');
goog.require('clojure.test.check.random');
goog.require('clojure.test.check.rose_tree');
goog.require('goog.string');
goog.require('clojure.string');

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
clojure.test.check.generators.Generator = (function (gen,__meta,__extmap,__hash){
this.gen = gen;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
clojure.test.check.generators.Generator.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4172__auto__,k__4173__auto__){
var self__ = this;
var this__4172__auto____$1 = this;
return this__4172__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4173__auto__,null);
});

clojure.test.check.generators.Generator.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4174__auto__,k7842,else__4175__auto__){
var self__ = this;
var this__4174__auto____$1 = this;
var G__7846 = k7842;
var G__7846__$1 = (((G__7846 instanceof cljs.core.Keyword))?G__7846.fqn:null);
switch (G__7846__$1) {
case "gen":
return self__.gen;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k7842,else__4175__auto__);

}
});

clojure.test.check.generators.Generator.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4186__auto__,writer__4187__auto__,opts__4188__auto__){
var self__ = this;
var this__4186__auto____$1 = this;
var pr_pair__4189__auto__ = ((function (this__4186__auto____$1){
return (function (keyval__4190__auto__){
return cljs.core.pr_sequential_writer(writer__4187__auto__,cljs.core.pr_writer,""," ","",opts__4188__auto__,keyval__4190__auto__);
});})(this__4186__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4187__auto__,pr_pair__4189__auto__,"#clojure.test.check.generators.Generator{",", ","}",opts__4188__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$gen,self__.gen],null))], null),self__.__extmap));
});

clojure.test.check.generators.Generator.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__7841){
var self__ = this;
var G__7841__$1 = this;
return (new cljs.core.RecordIter((0),G__7841__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$gen], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

clojure.test.check.generators.Generator.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4170__auto__){
var self__ = this;
var this__4170__auto____$1 = this;
return self__.__meta;
});

clojure.test.check.generators.Generator.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4167__auto__){
var self__ = this;
var this__4167__auto____$1 = this;
return (new clojure.test.check.generators.Generator(self__.gen,self__.__meta,self__.__extmap,self__.__hash));
});

clojure.test.check.generators.Generator.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4176__auto__){
var self__ = this;
var this__4176__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

clojure.test.check.generators.Generator.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4168__auto__){
var self__ = this;
var this__4168__auto____$1 = this;
var h__4030__auto__ = self__.__hash;
if(!((h__4030__auto__ == null))){
return h__4030__auto__;
} else {
var h__4030__auto____$1 = (function (){var fexpr__7847 = ((function (h__4030__auto__,this__4168__auto____$1){
return (function (coll__4169__auto__){
return (236843149 ^ cljs.core.hash_unordered_coll(coll__4169__auto__));
});})(h__4030__auto__,this__4168__auto____$1))
;
return fexpr__7847(this__4168__auto____$1);
})();
self__.__hash = h__4030__auto____$1;

return h__4030__auto____$1;
}
});

clojure.test.check.generators.Generator.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this7843,other7844){
var self__ = this;
var this7843__$1 = this;
return ((!((other7844 == null))) && ((this7843__$1.constructor === other7844.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this7843__$1.gen,other7844.gen)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this7843__$1.__extmap,other7844.__extmap)));
});

clojure.test.check.generators.Generator.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4181__auto__,k__4182__auto__){
var self__ = this;
var this__4181__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$gen,null], null), null),k__4182__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4181__auto____$1),self__.__meta),k__4182__auto__);
} else {
return (new clojure.test.check.generators.Generator(self__.gen,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4182__auto__)),null));
}
});

clojure.test.check.generators.Generator.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4179__auto__,k__4180__auto__,G__7841){
var self__ = this;
var this__4179__auto____$1 = this;
var pred__7848 = cljs.core.keyword_identical_QMARK_;
var expr__7849 = k__4180__auto__;
if(cljs.core.truth_((function (){var G__7851 = cljs.core.cst$kw$gen;
var G__7852 = expr__7849;
return (pred__7848.cljs$core$IFn$_invoke$arity$2 ? pred__7848.cljs$core$IFn$_invoke$arity$2(G__7851,G__7852) : pred__7848.call(null,G__7851,G__7852));
})())){
return (new clojure.test.check.generators.Generator(G__7841,self__.__meta,self__.__extmap,null));
} else {
return (new clojure.test.check.generators.Generator(self__.gen,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4180__auto__,G__7841),null));
}
});

clojure.test.check.generators.Generator.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4184__auto__){
var self__ = this;
var this__4184__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$gen,self__.gen,null))], null),self__.__extmap));
});

clojure.test.check.generators.Generator.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4171__auto__,G__7841){
var self__ = this;
var this__4171__auto____$1 = this;
return (new clojure.test.check.generators.Generator(self__.gen,G__7841,self__.__extmap,self__.__hash));
});

clojure.test.check.generators.Generator.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4177__auto__,entry__4178__auto__){
var self__ = this;
var this__4177__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4178__auto__)){
return this__4177__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4178__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4178__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4177__auto____$1,entry__4178__auto__);
}
});

clojure.test.check.generators.Generator.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$gen], null);
});

clojure.test.check.generators.Generator.cljs$lang$type = true;

clojure.test.check.generators.Generator.cljs$lang$ctorPrSeq = (function (this__4208__auto__){
return (new cljs.core.List(null,"clojure.test.check.generators/Generator",null,(1),null));
});

clojure.test.check.generators.Generator.cljs$lang$ctorPrWriter = (function (this__4208__auto__,writer__4209__auto__){
return cljs.core._write(writer__4209__auto__,"clojure.test.check.generators/Generator");
});

/**
 * Positional factory function for clojure.test.check.generators/Generator.
 */
clojure.test.check.generators.__GT_Generator = (function clojure$test$check$generators$__GT_Generator(gen){
return (new clojure.test.check.generators.Generator(gen,null,null,null));
});

/**
 * Factory function for clojure.test.check.generators/Generator, taking a map of keywords to field values.
 */
clojure.test.check.generators.map__GT_Generator = (function clojure$test$check$generators$map__GT_Generator(G__7845){
return (new clojure.test.check.generators.Generator(cljs.core.cst$kw$gen.cljs$core$IFn$_invoke$arity$1(G__7845),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__7845,cljs.core.cst$kw$gen)),null));
});

/**
 * Test if `x` is a generator. Generators should be treated as opaque values.
 */
clojure.test.check.generators.generator_QMARK_ = (function clojure$test$check$generators$generator_QMARK_(x){
return (x instanceof clojure.test.check.generators.Generator);
});
clojure.test.check.generators.make_gen = (function clojure$test$check$generators$make_gen(generator_fn){
return (new clojure.test.check.generators.Generator(generator_fn,null,null,null));
});
clojure.test.check.generators.call_gen = (function clojure$test$check$generators$call_gen(p__7854,rnd,size){
var map__7855 = p__7854;
var map__7855__$1 = ((((!((map__7855 == null)))?(((((map__7855.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7855.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7855):map__7855);
var generator_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7855__$1,cljs.core.cst$kw$gen);
return (generator_fn.cljs$core$IFn$_invoke$arity$2 ? generator_fn.cljs$core$IFn$_invoke$arity$2(rnd,size) : generator_fn.call(null,rnd,size));
});
clojure.test.check.generators.gen_pure = (function clojure$test$check$generators$gen_pure(value){
return clojure.test.check.generators.make_gen((function (rnd,size){
return value;
}));
});
clojure.test.check.generators.gen_fmap = (function clojure$test$check$generators$gen_fmap(k,p__7857){
var map__7858 = p__7857;
var map__7858__$1 = ((((!((map__7858 == null)))?(((((map__7858.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7858.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7858):map__7858);
var h = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7858__$1,cljs.core.cst$kw$gen);
return clojure.test.check.generators.make_gen(((function (map__7858,map__7858__$1,h){
return (function (rnd,size){
var G__7860 = (h.cljs$core$IFn$_invoke$arity$2 ? h.cljs$core$IFn$_invoke$arity$2(rnd,size) : h.call(null,rnd,size));
return (k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(G__7860) : k.call(null,G__7860));
});})(map__7858,map__7858__$1,h))
);
});
clojure.test.check.generators.gen_bind = (function clojure$test$check$generators$gen_bind(p__7861,k){
var map__7862 = p__7861;
var map__7862__$1 = ((((!((map__7862 == null)))?(((((map__7862.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7862.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7862):map__7862);
var h = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7862__$1,cljs.core.cst$kw$gen);
return clojure.test.check.generators.make_gen(((function (map__7862,map__7862__$1,h){
return (function (rnd,size){
var vec__7864 = clojure.test.check.random.split(rnd);
var r1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7864,(0),null);
var r2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7864,(1),null);
var inner = (h.cljs$core$IFn$_invoke$arity$2 ? h.cljs$core$IFn$_invoke$arity$2(r1,size) : h.call(null,r1,size));
var map__7867 = (k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(inner) : k.call(null,inner));
var map__7867__$1 = ((((!((map__7867 == null)))?(((((map__7867.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7867.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7867):map__7867);
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7867__$1,cljs.core.cst$kw$gen);
return (result.cljs$core$IFn$_invoke$arity$2 ? result.cljs$core$IFn$_invoke$arity$2(r2,size) : result.call(null,r2,size));
});})(map__7862,map__7862__$1,h))
);
});
/**
 * Given a random number generator, returns an infinite lazy sequence
 *   of random number generators.
 */
clojure.test.check.generators.lazy_random_states = (function clojure$test$check$generators$lazy_random_states(rr){
return (new cljs.core.LazySeq(null,(function (){
var vec__7869 = clojure.test.check.random.split(rr);
var r1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7869,(0),null);
var r2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7869,(1),null);
return cljs.core.cons(r1,(clojure.test.check.generators.lazy_random_states.cljs$core$IFn$_invoke$arity$1 ? clojure.test.check.generators.lazy_random_states.cljs$core$IFn$_invoke$arity$1(r2) : clojure.test.check.generators.lazy_random_states.call(null,r2)));
}),null,null));
});
/**
 * Takes a sequence of generators and returns a generator of sequences (er, vectors).
 */
clojure.test.check.generators.gen_seq__GT_seq_gen = (function clojure$test$check$generators$gen_seq__GT_seq_gen(gens){
return clojure.test.check.generators.make_gen((function (rnd,size){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$3((function (p1__7872_SHARP_,p2__7873_SHARP_){
return clojure.test.check.generators.call_gen(p1__7872_SHARP_,p2__7873_SHARP_,size);
}),gens,clojure.test.check.random.split_n(rnd,cljs.core.count(gens)));
}));
});
clojure.test.check.generators.fmap = (function clojure$test$check$generators$fmap(f,gen){
if(cljs.core.truth_(clojure.test.check.generators.generator_QMARK_(gen))){
} else {
throw (new Error(["Assert failed: ","Second arg to fmap must be a generator","\n","(generator? gen)"].join('')));
}

return clojure.test.check.generators.gen_fmap((function (p1__7874_SHARP_){
return clojure.test.check.rose_tree.fmap(f,p1__7874_SHARP_);
}),gen);
});
/**
 * Create a generator that always returns `value`,
 *   and never shrinks. You can think of this as
 *   the `constantly` of generators.
 */
clojure.test.check.generators.return$ = (function clojure$test$check$generators$return(value){
return clojure.test.check.generators.gen_pure(clojure.test.check.rose_tree.pure(value));
});
clojure.test.check.generators.bind_helper = (function clojure$test$check$generators$bind_helper(k){
return (function (rose){
return clojure.test.check.generators.gen_fmap(clojure.test.check.rose_tree.join,clojure.test.check.generators.make_gen((function (rnd,size){
return clojure.test.check.rose_tree.fmap((function (p1__7875_SHARP_){
return clojure.test.check.generators.call_gen(p1__7875_SHARP_,rnd,size);
}),clojure.test.check.rose_tree.fmap(k,rose));
})));
});
});
/**
 * Create a new generator that passes the result of `gen` into function
 *   `k`. `k` should return a new generator. This allows you to create new
 *   generators that depend on the value of other generators. For example,
 *   to create a generator which first generates a vector of integers, and
 *   then chooses a random element from that vector:
 * 
 *    (gen/bind (gen/such-that not-empty (gen/vector gen/int))
 *              ;; this function takes a realized vector,
 *              ;; and then returns a new generator which
 *              ;; chooses a random element from it
 *              gen/elements)
 * 
 *   
 */
clojure.test.check.generators.bind = (function clojure$test$check$generators$bind(generator,k){
if(cljs.core.truth_(clojure.test.check.generators.generator_QMARK_(generator))){
} else {
throw (new Error(["Assert failed: ","First arg to bind must be a generator","\n","(generator? generator)"].join('')));
}

return clojure.test.check.generators.gen_bind(generator,clojure.test.check.generators.bind_helper(k));
});
clojure.test.check.generators.make_size_range_seq = (function clojure$test$check$generators$make_size_range_seq(max_size){
return cljs.core.cycle(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),max_size));
});
/**
 * Return a sequence of realized values from `generator`.
 */
clojure.test.check.generators.sample_seq = (function clojure$test$check$generators$sample_seq(var_args){
var G__7879 = arguments.length;
switch (G__7879) {
case 1:
return clojure.test.check.generators.sample_seq.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.test.check.generators.sample_seq.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.test.check.generators.sample_seq.cljs$core$IFn$_invoke$arity$1 = (function (generator){
return clojure.test.check.generators.sample_seq.cljs$core$IFn$_invoke$arity$2(generator,(100));
});

clojure.test.check.generators.sample_seq.cljs$core$IFn$_invoke$arity$2 = (function (generator,max_size){
var r = clojure.test.check.random.make_random.cljs$core$IFn$_invoke$arity$0();
var size_seq = clojure.test.check.generators.make_size_range_seq(max_size);
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (r,size_seq){
return (function (p1__7876_SHARP_,p2__7877_SHARP_){
return clojure.test.check.rose_tree.root(clojure.test.check.generators.call_gen(generator,p1__7876_SHARP_,p2__7877_SHARP_));
});})(r,size_seq))
,clojure.test.check.generators.lazy_random_states(r),size_seq);
});

clojure.test.check.generators.sample_seq.cljs$lang$maxFixedArity = 2;

/**
 * Return a sequence of `num-samples` (default 10)
 *   realized values from `generator`.
 */
clojure.test.check.generators.sample = (function clojure$test$check$generators$sample(var_args){
var G__7882 = arguments.length;
switch (G__7882) {
case 1:
return clojure.test.check.generators.sample.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.test.check.generators.sample.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.test.check.generators.sample.cljs$core$IFn$_invoke$arity$1 = (function (generator){
return clojure.test.check.generators.sample.cljs$core$IFn$_invoke$arity$2(generator,(10));
});

clojure.test.check.generators.sample.cljs$core$IFn$_invoke$arity$2 = (function (generator,num_samples){
if(cljs.core.truth_(clojure.test.check.generators.generator_QMARK_(generator))){
} else {
throw (new Error(["Assert failed: ","First arg to sample must be a generator","\n","(generator? generator)"].join('')));
}

return cljs.core.take.cljs$core$IFn$_invoke$arity$2(num_samples,clojure.test.check.generators.sample_seq.cljs$core$IFn$_invoke$arity$1(generator));
});

clojure.test.check.generators.sample.cljs$lang$maxFixedArity = 2;

/**
 * Returns a single sample value from the generator, using a default
 *   size of 30.
 */
clojure.test.check.generators.generate = (function clojure$test$check$generators$generate(var_args){
var G__7885 = arguments.length;
switch (G__7885) {
case 1:
return clojure.test.check.generators.generate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.test.check.generators.generate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.test.check.generators.generate.cljs$core$IFn$_invoke$arity$1 = (function (generator){
return clojure.test.check.generators.generate.cljs$core$IFn$_invoke$arity$2(generator,(30));
});

clojure.test.check.generators.generate.cljs$core$IFn$_invoke$arity$2 = (function (generator,size){
var rng = clojure.test.check.random.make_random.cljs$core$IFn$_invoke$arity$0();
return clojure.test.check.rose_tree.root(clojure.test.check.generators.call_gen(generator,rng,size));
});

clojure.test.check.generators.generate.cljs$lang$maxFixedArity = 2;

clojure.test.check.generators.halfs = (function clojure$test$check$generators$halfs(n){
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__7887_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((0),p1__7887_SHARP_);
}),cljs.core.iterate((function (p1__7888_SHARP_){
return cljs.core.quot(p1__7888_SHARP_,(2));
}),n));
});
clojure.test.check.generators.shrink_int = (function clojure$test$check$generators$shrink_int(integer){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__7889_SHARP_){
return (integer - p1__7889_SHARP_);
}),clojure.test.check.generators.halfs(integer));
});
clojure.test.check.generators.int_rose_tree = (function clojure$test$check$generators$int_rose_tree(value){
return clojure.test.check.rose_tree.make_rose(value,cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.test.check.generators.int_rose_tree,clojure.test.check.generators.shrink_int(value)));
});
clojure.test.check.generators.calc_long = (function clojure$test$check$generators$calc_long(factor,lower,upper){
return cljs.core.long$((function (){var G__7890 = (lower + ((factor * (1.0 + upper)) - (factor * lower)));
return Math.floor(G__7890);
})());
});
clojure.test.check.generators.rand_range = (function clojure$test$check$generators$rand_range(rnd,lower,upper){
if((lower <= upper)){
} else {
throw (new Error("Assert failed: (<= lower upper)"));
}

return clojure.test.check.generators.calc_long(clojure.test.check.random.rand_double(rnd),lower,upper);
});
/**
 * Create a generator that depends on the size parameter.
 *   `sized-gen` is a function that takes an integer and returns
 *   a generator.
 */
clojure.test.check.generators.sized = (function clojure$test$check$generators$sized(sized_gen){
return clojure.test.check.generators.make_gen((function (rnd,size){
var sized_gen__$1 = (sized_gen.cljs$core$IFn$_invoke$arity$1 ? sized_gen.cljs$core$IFn$_invoke$arity$1(size) : sized_gen.call(null,size));
return clojure.test.check.generators.call_gen(sized_gen__$1,rnd,size);
}));
});
/**
 * Create a new generator with `size` always bound to `n`.
 */
clojure.test.check.generators.resize = (function clojure$test$check$generators$resize(n,generator){
if(cljs.core.truth_(clojure.test.check.generators.generator_QMARK_(generator))){
} else {
throw (new Error(["Assert failed: ","Second arg to resize must be a generator","\n","(generator? generator)"].join('')));
}

var map__7891 = generator;
var map__7891__$1 = ((((!((map__7891 == null)))?(((((map__7891.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7891.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7891):map__7891);
var gen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7891__$1,cljs.core.cst$kw$gen);
return clojure.test.check.generators.make_gen(((function (map__7891,map__7891__$1,gen){
return (function (rnd,_size){
return (gen.cljs$core$IFn$_invoke$arity$2 ? gen.cljs$core$IFn$_invoke$arity$2(rnd,n) : gen.call(null,rnd,n));
});})(map__7891,map__7891__$1,gen))
);
});
/**
 * Create a new generator that modifies the size parameter by the given function. Intended to
 * support generators with sizes that need to grow at different rates compared to the normal
 * linear scaling.
 */
clojure.test.check.generators.scale = (function clojure$test$check$generators$scale(f,generator){
return clojure.test.check.generators.sized((function (n){
return clojure.test.check.generators.resize((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(n) : f.call(null,n)),generator);
}));
});
/**
 * Create a generator that returns numbers in the range
 *   `lower` to `upper`, inclusive.
 */
clojure.test.check.generators.choose = (function clojure$test$check$generators$choose(lower,upper){
return clojure.test.check.generators.make_gen((function (rnd,_size){
var value = clojure.test.check.generators.rand_range(rnd,lower,upper);
return clojure.test.check.rose_tree.filter(((function (value){
return (function (p1__7893_SHARP_){
return (((p1__7893_SHARP_ >= lower)) && ((p1__7893_SHARP_ <= upper)));
});})(value))
,clojure.test.check.generators.int_rose_tree(value));
}));
});
/**
 * Create a generator that randomly chooses a value from the list of
 *   provided generators. Shrinks toward choosing an earlier generator,
 *   as well as shrinking the value generated by the chosen generator.
 * 
 *   Examples:
 * 
 *    (one-of [gen/int gen/boolean (gen/vector gen/int)])
 * 
 *   
 */
clojure.test.check.generators.one_of = (function clojure$test$check$generators$one_of(generators){
if(cljs.core.every_QMARK_(clojure.test.check.generators.generator_QMARK_,generators)){
} else {
throw (new Error(["Assert failed: ","Arg to one-of must be a collection of generators","\n","(every? generator? generators)"].join('')));
}

return clojure.test.check.generators.bind(clojure.test.check.generators.choose((0),(cljs.core.count(generators) - (1))),(function (p1__7894_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(generators,p1__7894_SHARP_);
}));
});
clojure.test.check.generators.pick = (function clojure$test$check$generators$pick(p__7895,n){
while(true){
var vec__7896 = p__7895;
var seq__7897 = cljs.core.seq(vec__7896);
var first__7898 = cljs.core.first(seq__7897);
var seq__7897__$1 = cljs.core.next(seq__7897);
var h = first__7898;
var tail = seq__7897__$1;
var vec__7899 = h;
var chance = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7899,(0),null);
var gen = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7899,(1),null);
if((n <= chance)){
return gen;
} else {
var G__7902 = tail;
var G__7903 = (n - chance);
p__7895 = G__7902;
n = G__7903;
continue;
}
break;
}
});
/**
 * Create a generator that chooses a generator from `pairs` based on the
 *   provided likelihoods. The likelihood of a given generator being chosen is
 *   its likelihood divided by the sum of all likelihoods
 * 
 *   Examples:
 * 
 *    (gen/frequency [[5 gen/int] [3 (gen/vector gen/int)] [2 gen/boolean]])
 *   
 */
clojure.test.check.generators.frequency = (function clojure$test$check$generators$frequency(pairs){
if(cljs.core.every_QMARK_((function (p__7905){
var vec__7906 = p__7905;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7906,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7906,(1),null);
var and__3911__auto__ = typeof x === 'number';
if(and__3911__auto__){
return clojure.test.check.generators.generator_QMARK_(g);
} else {
return and__3911__auto__;
}
}),pairs)){
} else {
throw (new Error(["Assert failed: ","Arg to frequency must be a list of [num generator] pairs","\n","(every? (fn [[x g]] (and (number? x) (generator? g))) pairs)"].join('')));
}

var total = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,pairs));
return clojure.test.check.generators.gen_bind(clojure.test.check.generators.choose((1),total),((function (total){
return (function (p1__7904_SHARP_){
return clojure.test.check.generators.pick(pairs,clojure.test.check.rose_tree.root(p1__7904_SHARP_));
});})(total))
);
});
/**
 * Create a generator that randomly chooses an element from `coll`.
 * 
 *   Examples:
 * 
 *    (gen/elements [:foo :bar :baz])
 *   
 */
clojure.test.check.generators.elements = (function clojure$test$check$generators$elements(coll){
if(cljs.core.seq(coll)){
} else {
throw (new Error(["Assert failed: ","elements cannot be called with an empty collection","\n","(seq coll)"].join('')));
}

var v = cljs.core.vec(coll);
return clojure.test.check.generators.gen_bind(clojure.test.check.generators.choose((0),(cljs.core.count(v) - (1))),((function (v){
return (function (p1__7909_SHARP_){
return clojure.test.check.generators.gen_pure(clojure.test.check.rose_tree.fmap(v,p1__7909_SHARP_));
});})(v))
);
});
clojure.test.check.generators.such_that_helper = (function clojure$test$check$generators$such_that_helper(max_tries,pred,gen,tries_left,rng,size){
while(true){
if((tries_left === (0))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Couldn't satisfy such-that predicate after ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(max_tries)," tries."].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
var vec__7910 = clojure.test.check.random.split(rng);
var r1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7910,(0),null);
var r2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7910,(1),null);
var value = clojure.test.check.generators.call_gen(gen,r1,size);
if(cljs.core.truth_((function (){var G__7913 = clojure.test.check.rose_tree.root(value);
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__7913) : pred.call(null,G__7913));
})())){
return clojure.test.check.rose_tree.filter(pred,value);
} else {
var G__7914 = max_tries;
var G__7915 = pred;
var G__7916 = gen;
var G__7917 = (tries_left - (1));
var G__7918 = r2;
var G__7919 = (size + (1));
max_tries = G__7914;
pred = G__7915;
gen = G__7916;
tries_left = G__7917;
rng = G__7918;
size = G__7919;
continue;
}
}
break;
}
});
/**
 * Create a generator that generates values from `gen` that satisfy predicate
 *   `pred`. Care is needed to ensure there is a high chance `gen` will satisfy
 *   `pred`. By default, `such-that` will try 10 times to generate a value that
 *   satisfies the predicate. If no value passes this predicate after this number
 *   of iterations, a runtime exception will be throw. You can pass an optional
 *   third argument to change the number of times tried. Note also that each
 *   time such-that retries, it will increase the size parameter.
 * 
 *   Examples:
 * 
 *    ;; generate non-empty vectors of integers
 *    ;; (note, gen/not-empty does exactly this)
 *    (gen/such-that not-empty (gen/vector gen/int))
 *   
 */
clojure.test.check.generators.such_that = (function clojure$test$check$generators$such_that(var_args){
var G__7921 = arguments.length;
switch (G__7921) {
case 2:
return clojure.test.check.generators.such_that.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.test.check.generators.such_that.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.test.check.generators.such_that.cljs$core$IFn$_invoke$arity$2 = (function (pred,gen){
return clojure.test.check.generators.such_that.cljs$core$IFn$_invoke$arity$3(pred,gen,(10));
});

clojure.test.check.generators.such_that.cljs$core$IFn$_invoke$arity$3 = (function (pred,gen,max_tries){
if(cljs.core.truth_(clojure.test.check.generators.generator_QMARK_(gen))){
} else {
throw (new Error(["Assert failed: ","Second arg to such-that must be a generator","\n","(generator? gen)"].join('')));
}

return clojure.test.check.generators.make_gen((function (rand_seed,size){
return clojure.test.check.generators.such_that_helper(max_tries,pred,gen,max_tries,rand_seed,size);
}));
});

clojure.test.check.generators.such_that.cljs$lang$maxFixedArity = 3;

/**
 * Modifies a generator so that it doesn't generate empty collections.
 * 
 *   Examples:
 * 
 *    ;; generate a vector of booleans, but never the empty vector
 *    (gen/not-empty (gen/vector gen/boolean))
 *   
 */
clojure.test.check.generators.not_empty = (function clojure$test$check$generators$not_empty(gen){
if(cljs.core.truth_(clojure.test.check.generators.generator_QMARK_(gen))){
} else {
throw (new Error(["Assert failed: ","Arg to not-empty must be a generator","\n","(generator? gen)"].join('')));
}

return clojure.test.check.generators.such_that.cljs$core$IFn$_invoke$arity$2(cljs.core.not_empty,gen);
});
/**
 * Create a new generator that is just like `gen`, except does not shrink
 *   at all. This can be useful when shrinking is taking a long time or is not
 *   applicable to the domain.
 */
clojure.test.check.generators.no_shrink = (function clojure$test$check$generators$no_shrink(gen){
if(cljs.core.truth_(clojure.test.check.generators.generator_QMARK_(gen))){
} else {
throw (new Error(["Assert failed: ","Arg to no-shrink must be a generator","\n","(generator? gen)"].join('')));
}

return clojure.test.check.generators.gen_bind(gen,(function (rose){
return clojure.test.check.generators.gen_pure(clojure.test.check.rose_tree.make_rose(clojure.test.check.rose_tree.root(rose),cljs.core.PersistentVector.EMPTY));
}));
});
/**
 * Create a new generator like `gen`, but will consider nodes for shrinking
 *   even if their parent passes the test (up to one additional level).
 */
clojure.test.check.generators.shrink_2 = (function clojure$test$check$generators$shrink_2(gen){
if(cljs.core.truth_(clojure.test.check.generators.generator_QMARK_(gen))){
} else {
throw (new Error(["Assert failed: ","Arg to shrink-2 must be a generator","\n","(generator? gen)"].join('')));
}

return clojure.test.check.generators.gen_bind(gen,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(clojure.test.check.generators.gen_pure,clojure.test.check.rose_tree.collapse));
});
/**
 * Generates one of `true` or `false`. Shrinks to `false`.
 */
clojure.test.check.generators.boolean$ = clojure.test.check.generators.elements(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,true], null));
/**
 * Create a generator that returns a vector, whose elements are chosen
 *   from the generators in the same position. The individual elements shrink
 *   according to their generator, but the value will never shrink in count.
 * 
 *   Examples:
 * 
 *    (def t (tuple gen/int gen/boolean))
 *    (sample t)
 *    ;; => ([1 true] [2 true] [2 false] [1 false] [0 true] [-2 false] [-6 false]
 *    ;; =>  [3 true] [-4 false] [9 true]))
 *   
 */
clojure.test.check.generators.tuple = (function clojure$test$check$generators$tuple(var_args){
var args__4502__auto__ = [];
var len__4499__auto___7924 = arguments.length;
var i__4500__auto___7925 = (0);
while(true){
if((i__4500__auto___7925 < len__4499__auto___7924)){
args__4502__auto__.push((arguments[i__4500__auto___7925]));

var G__7926 = (i__4500__auto___7925 + (1));
i__4500__auto___7925 = G__7926;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return clojure.test.check.generators.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

clojure.test.check.generators.tuple.cljs$core$IFn$_invoke$arity$variadic = (function (generators){
if(cljs.core.every_QMARK_(clojure.test.check.generators.generator_QMARK_,generators)){
} else {
throw (new Error(["Assert failed: ","Args to tuple must be generators","\n","(every? generator? generators)"].join('')));
}

return clojure.test.check.generators.gen_bind(clojure.test.check.generators.gen_seq__GT_seq_gen(generators),(function (roses){
return clojure.test.check.generators.gen_pure(clojure.test.check.rose_tree.zip(cljs.core.vector,roses));
}));
});

clojure.test.check.generators.tuple.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
clojure.test.check.generators.tuple.cljs$lang$applyTo = (function (seq7923){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq7923));
});

/**
 * Generates a positive or negative integer bounded by the generator's
 *   `size` parameter.
 *   (Really returns a long)
 */
clojure.test.check.generators.int$ = clojure.test.check.generators.sized((function (size){
return clojure.test.check.generators.choose((- size),size);
}));
/**
 * Generates natural numbers, starting at zero. Shrinks to zero.
 */
clojure.test.check.generators.nat = clojure.test.check.generators.fmap((function (p1__7927_SHARP_){
var G__7928 = cljs.core.long$(p1__7927_SHARP_);
return Math.abs(G__7928);
}),clojure.test.check.generators.int$);
/**
 * Generate positive integers bounded by the generator's `size` parameter.
 */
clojure.test.check.generators.pos_int = clojure.test.check.generators.nat;
/**
 * Generate negative integers bounded by the generator's `size` parameter.
 */
clojure.test.check.generators.neg_int = clojure.test.check.generators.fmap((function (p1__7929_SHARP_){
return ((-1) * p1__7929_SHARP_);
}),clojure.test.check.generators.nat);
/**
 * Generate strictly positive integers bounded by the generator's `size`
 * parameter.
 */
clojure.test.check.generators.s_pos_int = clojure.test.check.generators.fmap(cljs.core.inc,clojure.test.check.generators.nat);
/**
 * Generate strictly negative integers bounded by the generator's `size`
 * parameter.
 */
clojure.test.check.generators.s_neg_int = clojure.test.check.generators.fmap(cljs.core.dec,clojure.test.check.generators.neg_int);
/**
 * Create a generator whose elements are chosen from `gen`. The count of the
 *   vector will be bounded by the `size` generator parameter.
 */
clojure.test.check.generators.vector = (function clojure$test$check$generators$vector(var_args){
var G__7932 = arguments.length;
switch (G__7932) {
case 1:
return clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$1 = (function (generator){
if(cljs.core.truth_(clojure.test.check.generators.generator_QMARK_(generator))){
} else {
throw (new Error(["Assert failed: ","Arg to vector must be a generator","\n","(generator? generator)"].join('')));
}

return clojure.test.check.generators.gen_bind(clojure.test.check.generators.sized((function (p1__7930_SHARP_){
return clojure.test.check.generators.choose((0),p1__7930_SHARP_);
})),(function (num_elements_rose){
return clojure.test.check.generators.gen_bind(clojure.test.check.generators.gen_seq__GT_seq_gen(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(clojure.test.check.rose_tree.root(num_elements_rose),generator)),(function (roses){
return clojure.test.check.generators.gen_pure(clojure.test.check.rose_tree.shrink(cljs.core.vector,roses));
}));
}));
});

clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$2 = (function (generator,num_elements){
if(cljs.core.truth_(clojure.test.check.generators.generator_QMARK_(generator))){
} else {
throw (new Error(["Assert failed: ","First arg to vector must be a generator","\n","(generator? generator)"].join('')));
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.test.check.generators.tuple,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(num_elements,generator));
});

clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$3 = (function (generator,min_elements,max_elements){
if(cljs.core.truth_(clojure.test.check.generators.generator_QMARK_(generator))){
} else {
throw (new Error(["Assert failed: ","First arg to vector must be a generator","\n","(generator? generator)"].join('')));
}

return clojure.test.check.generators.gen_bind(clojure.test.check.generators.choose(min_elements,max_elements),(function (num_elements_rose){
return clojure.test.check.generators.gen_bind(clojure.test.check.generators.gen_seq__GT_seq_gen(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(clojure.test.check.rose_tree.root(num_elements_rose),generator)),(function (roses){
return clojure.test.check.generators.gen_bind(clojure.test.check.generators.gen_pure(clojure.test.check.rose_tree.shrink(cljs.core.vector,roses)),(function (rose){
return clojure.test.check.generators.gen_pure(clojure.test.check.rose_tree.filter((function (v){
return (((cljs.core.count(v) >= min_elements)) && ((cljs.core.count(v) <= max_elements)));
}),rose));
}));
}));
}));
});

clojure.test.check.generators.vector.cljs$lang$maxFixedArity = 3;

/**
 * Like `vector`, but generates lists.
 */
clojure.test.check.generators.list = (function clojure$test$check$generators$list(generator){
if(cljs.core.truth_(clojure.test.check.generators.generator_QMARK_(generator))){
} else {
throw (new Error(["Assert failed: ","First arg to list must be a generator","\n","(generator? generator)"].join('')));
}

return clojure.test.check.generators.gen_bind(clojure.test.check.generators.sized((function (p1__7934_SHARP_){
return clojure.test.check.generators.choose((0),p1__7934_SHARP_);
})),(function (num_elements_rose){
return clojure.test.check.generators.gen_bind(clojure.test.check.generators.gen_seq__GT_seq_gen(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(clojure.test.check.rose_tree.root(num_elements_rose),generator)),(function (roses){
return clojure.test.check.generators.gen_pure(clojure.test.check.rose_tree.shrink(cljs.core.list,roses));
}));
}));
});
clojure.test.check.generators.swap = (function clojure$test$check$generators$swap(coll,p__7935){
var vec__7936 = p__7935;
var i1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7936,(0),null);
var i2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7936,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(coll,i2,(coll.cljs$core$IFn$_invoke$arity$1 ? coll.cljs$core$IFn$_invoke$arity$1(i1) : coll.call(null,i1)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([i1,(coll.cljs$core$IFn$_invoke$arity$1 ? coll.cljs$core$IFn$_invoke$arity$1(i2) : coll.call(null,i2))], 0));
});
/**
 * Create a generator that generates random permutations of `coll`. Shrinks
 *   toward the original collection: `coll`. `coll` will be turned into a vector,
 *   if it's not already.
 */
clojure.test.check.generators.shuffle = (function clojure$test$check$generators$shuffle(coll){
var index_gen = clojure.test.check.generators.choose((0),(cljs.core.count(coll) - (1)));
return clojure.test.check.generators.fmap(((function (index_gen){
return (function (p1__7939_SHARP_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(clojure.test.check.generators.swap,cljs.core.vec(coll),p1__7939_SHARP_);
});})(index_gen))
,clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$3(clojure.test.check.generators.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([index_gen,index_gen], 0)),(0),((2) * cljs.core.count(coll))));
});
/**
 * Like clojure.core/hash-map, except the values are generators.
 * Returns a generator that makes maps with the supplied keys and
 * values generated using the supplied generators.
 * 
 *   Examples:
 * 
 *  (gen/hash-map :a gen/boolean :b gen/nat)
 *   
 */
clojure.test.check.generators.hash_map = (function clojure$test$check$generators$hash_map(var_args){
var args__4502__auto__ = [];
var len__4499__auto___7942 = arguments.length;
var i__4500__auto___7943 = (0);
while(true){
if((i__4500__auto___7943 < len__4499__auto___7942)){
args__4502__auto__.push((arguments[i__4500__auto___7943]));

var G__7944 = (i__4500__auto___7943 + (1));
i__4500__auto___7943 = G__7944;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return clojure.test.check.generators.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

clojure.test.check.generators.hash_map.cljs$core$IFn$_invoke$arity$variadic = (function (kvs){
if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var ks = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),kvs);
var vs = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),cljs.core.rest(kvs));
if(cljs.core.every_QMARK_(clojure.test.check.generators.generator_QMARK_,vs)){
} else {
throw (new Error(["Assert failed: ","Value args to hash-map must be generators","\n","(every? generator? vs)"].join('')));
}

return clojure.test.check.generators.fmap(((function (ks,vs){
return (function (p1__7940_SHARP_){
return cljs.core.zipmap(ks,p1__7940_SHARP_);
});})(ks,vs))
,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.test.check.generators.tuple,vs));
});

clojure.test.check.generators.hash_map.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
clojure.test.check.generators.hash_map.cljs$lang$applyTo = (function (seq7941){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq7941));
});

clojure.test.check.generators.transient_set_contains_QMARK_ = (function clojure$test$check$generators$transient_set_contains_QMARK_(s,k){
return !((cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(s,k) == null));
});
/**
 * Returns a rose tree.
 */
clojure.test.check.generators.coll_distinct_by_STAR_ = (function clojure$test$check$generators$coll_distinct_by_STAR_(empty_coll,key_fn,shuffle_fn,gen,rng,size,num_elements,min_elements,max_tries){
if(cljs.core.truth_(gen)){
} else {
throw (new Error("Assert failed: gen"));
}

if(cljs.core.truth_(cljs.core.cst$kw$gen.cljs$core$IFn$_invoke$arity$1(gen))){
} else {
throw (new Error("Assert failed: (:gen gen)"));
}

var rose_trees = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
var s = cljs.core.transient$(cljs.core.PersistentHashSet.EMPTY);
var rng__$1 = rng;
var size__$1 = size;
var tries = (0);
while(true){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(max_tries,tries)) && ((cljs.core.count(rose_trees) < min_elements)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Couldn't generate enough distinct elements!",new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$gen,gen,cljs.core.cst$kw$max_DASH_tries,max_tries,cljs.core.cst$kw$num_DASH_elements,num_elements,cljs.core.cst$kw$so_DASH_far,cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.test.check.rose_tree.root,cljs.core.persistent_BANG_(rose_trees))], null));
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(max_tries,tries)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(rose_trees),num_elements)))){
return clojure.test.check.rose_tree.shrink(((function (rose_trees,s,rng__$1,size__$1,tries){
return (function() { 
var G__7951__delegate = function (rest__7945_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(empty_coll,rest__7945_SHARP_);
};
var G__7951 = function (var_args){
var rest__7945_SHARP_ = null;
if (arguments.length > 0) {
var G__7952__i = 0, G__7952__a = new Array(arguments.length -  0);
while (G__7952__i < G__7952__a.length) {G__7952__a[G__7952__i] = arguments[G__7952__i + 0]; ++G__7952__i;}
  rest__7945_SHARP_ = new cljs.core.IndexedSeq(G__7952__a,0,null);
} 
return G__7951__delegate.call(this,rest__7945_SHARP_);};
G__7951.cljs$lang$maxFixedArity = 0;
G__7951.cljs$lang$applyTo = (function (arglist__7953){
var rest__7945_SHARP_ = cljs.core.seq(arglist__7953);
return G__7951__delegate(rest__7945_SHARP_);
});
G__7951.cljs$core$IFn$_invoke$arity$variadic = G__7951__delegate;
return G__7951;
})()
;})(rose_trees,s,rng__$1,size__$1,tries))
,(function (){var G__7946 = rng__$1;
var G__7947 = cljs.core.persistent_BANG_(rose_trees);
return (shuffle_fn.cljs$core$IFn$_invoke$arity$2 ? shuffle_fn.cljs$core$IFn$_invoke$arity$2(G__7946,G__7947) : shuffle_fn.call(null,G__7946,G__7947));
})());
} else {
var vec__7948 = clojure.test.check.random.split(rng__$1);
var rng1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7948,(0),null);
var rng2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7948,(1),null);
var rose = clojure.test.check.generators.call_gen(gen,rng1,size__$1);
var root = clojure.test.check.rose_tree.root(rose);
var k = (key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(root) : key_fn.call(null,root));
if(cljs.core.truth_(clojure.test.check.generators.transient_set_contains_QMARK_(s,k))){
var G__7954 = rose_trees;
var G__7955 = s;
var G__7956 = rng2;
var G__7957 = (size__$1 + (1));
var G__7958 = (tries + (1));
rose_trees = G__7954;
s = G__7955;
rng__$1 = G__7956;
size__$1 = G__7957;
tries = G__7958;
continue;
} else {
var G__7959 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(rose_trees,rose);
var G__7960 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(s,k);
var G__7961 = rng2;
var G__7962 = size__$1;
var G__7963 = (0);
rose_trees = G__7959;
s = G__7960;
rng__$1 = G__7961;
size__$1 = G__7962;
tries = G__7963;
continue;
}

}
}
break;
}
});
/**
 * Like clojure.core/distinct? but takes a collection instead of varargs,
 *   and returns true for empty collections.
 */
clojure.test.check.generators.distinct_by_QMARK_ = (function clojure$test$check$generators$distinct_by_QMARK_(f,coll){
var or__3922__auto__ = cljs.core.empty_QMARK_(coll);
if(or__3922__auto__){
return or__3922__auto__;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.distinct_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,coll));
}
});
/**
 * Returns a shuffled version of coll according to the rng.
 * 
 *   Note that this is not a generator, it is just a utility function.
 */
clojure.test.check.generators.the_shuffle_fn = (function clojure$test$check$generators$the_shuffle_fn(rng,coll){
var empty_coll = cljs.core.empty(coll);
var v = cljs.core.vec(coll);
var card = cljs.core.count(coll);
var dec_card = (card - (1));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(empty_coll,cljs.core.first(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (empty_coll,v,card,dec_card){
return (function (p__7964,idx){
var vec__7965 = p__7964;
var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7965,(0),null);
var rng__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7965,(1),null);
var vec__7968 = clojure.test.check.random.split(rng__$1);
var rng1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7968,(0),null);
var rng2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7968,(1),null);
var swap_idx = clojure.test.check.generators.rand_range(rng1,idx,dec_card);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.test.check.generators.swap(v__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,swap_idx], null)),rng2], null);
});})(empty_coll,v,card,dec_card))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,rng], null),cljs.core.range.cljs$core$IFn$_invoke$arity$1(card))));
});
clojure.test.check.generators.coll_distinct_by = (function clojure$test$check$generators$coll_distinct_by(empty_coll,key_fn,allows_dupes_QMARK_,ordered_QMARK_,gen,p__7977){
var map__7978 = p__7977;
var map__7978__$1 = ((((!((map__7978 == null)))?(((((map__7978.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7978.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7978):map__7978);
var num_elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7978__$1,cljs.core.cst$kw$num_DASH_elements);
var min_elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7978__$1,cljs.core.cst$kw$min_DASH_elements);
var max_elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7978__$1,cljs.core.cst$kw$max_DASH_elements);
var max_tries = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__7978__$1,cljs.core.cst$kw$max_DASH_tries,(10));
var shuffle_fn = (cljs.core.truth_(ordered_QMARK_)?clojure.test.check.generators.the_shuffle_fn:((function (map__7978,map__7978__$1,num_elements,min_elements,max_elements,max_tries){
return (function (_rng,coll){
return coll;
});})(map__7978,map__7978__$1,num_elements,min_elements,max_elements,max_tries))
);
var hard_min_elements = (function (){var or__3922__auto__ = num_elements;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = min_elements;
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
return (1);
}
}
})();
if(cljs.core.truth_(num_elements)){
var size_pred = ((function (shuffle_fn,hard_min_elements,map__7978,map__7978__$1,num_elements,min_elements,max_elements,max_tries){
return (function (p1__7971_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(num_elements,cljs.core.count(p1__7971_SHARP_));
});})(shuffle_fn,hard_min_elements,map__7978,map__7978__$1,num_elements,min_elements,max_elements,max_tries))
;
if((((min_elements == null)) && ((max_elements == null)))){
} else {
throw (new Error("Assert failed: (and (nil? min-elements) (nil? max-elements))"));
}

return clojure.test.check.generators.make_gen(((function (size_pred,shuffle_fn,hard_min_elements,map__7978,map__7978__$1,num_elements,min_elements,max_elements,max_tries){
return (function (rng,gen_size){
return clojure.test.check.rose_tree.filter((cljs.core.truth_(allows_dupes_QMARK_)?cljs.core.every_pred.cljs$core$IFn$_invoke$arity$2(size_pred,((function (size_pred,shuffle_fn,hard_min_elements,map__7978,map__7978__$1,num_elements,min_elements,max_elements,max_tries){
return (function (p1__7972_SHARP_){
return clojure.test.check.generators.distinct_by_QMARK_(key_fn,p1__7972_SHARP_);
});})(size_pred,shuffle_fn,hard_min_elements,map__7978,map__7978__$1,num_elements,min_elements,max_elements,max_tries))
):size_pred),clojure.test.check.generators.coll_distinct_by_STAR_(empty_coll,key_fn,shuffle_fn,gen,rng,gen_size,num_elements,hard_min_elements,max_tries));
});})(size_pred,shuffle_fn,hard_min_elements,map__7978,map__7978__$1,num_elements,min_elements,max_elements,max_tries))
);
} else {
var min_elements__$1 = (function (){var or__3922__auto__ = min_elements;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return (0);
}
})();
var size_pred = (cljs.core.truth_(max_elements)?((function (min_elements__$1,shuffle_fn,hard_min_elements,map__7978,map__7978__$1,num_elements,min_elements,max_elements,max_tries){
return (function (p1__7973_SHARP_){
return (((min_elements__$1 <= cljs.core.count(p1__7973_SHARP_))) && ((cljs.core.count(p1__7973_SHARP_) <= max_elements)));
});})(min_elements__$1,shuffle_fn,hard_min_elements,map__7978,map__7978__$1,num_elements,min_elements,max_elements,max_tries))
:((function (min_elements__$1,shuffle_fn,hard_min_elements,map__7978,map__7978__$1,num_elements,min_elements,max_elements,max_tries){
return (function (p1__7974_SHARP_){
return (min_elements__$1 <= cljs.core.count(p1__7974_SHARP_));
});})(min_elements__$1,shuffle_fn,hard_min_elements,map__7978,map__7978__$1,num_elements,min_elements,max_elements,max_tries))
);
return clojure.test.check.generators.gen_bind((cljs.core.truth_(max_elements)?clojure.test.check.generators.choose(min_elements__$1,max_elements):clojure.test.check.generators.sized(((function (min_elements__$1,size_pred,shuffle_fn,hard_min_elements,map__7978,map__7978__$1,num_elements,min_elements,max_elements,max_tries){
return (function (p1__7975_SHARP_){
return clojure.test.check.generators.choose(min_elements__$1,(min_elements__$1 + p1__7975_SHARP_));
});})(min_elements__$1,size_pred,shuffle_fn,hard_min_elements,map__7978,map__7978__$1,num_elements,min_elements,max_elements,max_tries))
)),((function (min_elements__$1,size_pred,shuffle_fn,hard_min_elements,map__7978,map__7978__$1,num_elements,min_elements,max_elements,max_tries){
return (function (num_elements_rose){
var num_elements__$1 = clojure.test.check.rose_tree.root(num_elements_rose);
return clojure.test.check.generators.make_gen(((function (num_elements__$1,min_elements__$1,size_pred,shuffle_fn,hard_min_elements,map__7978,map__7978__$1,num_elements,min_elements,max_elements,max_tries){
return (function (rng,gen_size){
return clojure.test.check.rose_tree.filter((cljs.core.truth_(allows_dupes_QMARK_)?cljs.core.every_pred.cljs$core$IFn$_invoke$arity$2(size_pred,((function (num_elements__$1,min_elements__$1,size_pred,shuffle_fn,hard_min_elements,map__7978,map__7978__$1,num_elements,min_elements,max_elements,max_tries){
return (function (p1__7976_SHARP_){
return clojure.test.check.generators.distinct_by_QMARK_(key_fn,p1__7976_SHARP_);
});})(num_elements__$1,min_elements__$1,size_pred,shuffle_fn,hard_min_elements,map__7978,map__7978__$1,num_elements,min_elements,max_elements,max_tries))
):size_pred),clojure.test.check.generators.coll_distinct_by_STAR_(empty_coll,key_fn,shuffle_fn,gen,rng,gen_size,num_elements__$1,hard_min_elements,max_tries));
});})(num_elements__$1,min_elements__$1,size_pred,shuffle_fn,hard_min_elements,map__7978,map__7978__$1,num_elements,min_elements,max_elements,max_tries))
);
});})(min_elements__$1,size_pred,shuffle_fn,hard_min_elements,map__7978,map__7978__$1,num_elements,min_elements,max_elements,max_tries))
);
}
});
/**
 * Generates a vector of elements from the given generator, with the
 *   guarantee that the elements will be distinct.
 * 
 *   If the generator cannot or is unlikely to produce enough distinct
 *   elements, this generator will fail in the same way as such-that.
 * 
 *   Available options:
 * 
 *  :num-elements  the fixed size of generated vectors
 *  :min-elements  the min size of generated vectors
 *  :max-elements  the max size of generated vectors
 *  :max-tries     the number of times the generator will be tried before
 *                 failing when it does not produce distinct elements
 *                 (default 10)
 */
clojure.test.check.generators.vector_distinct = (function clojure$test$check$generators$vector_distinct(var_args){
var G__7981 = arguments.length;
switch (G__7981) {
case 1:
return clojure.test.check.generators.vector_distinct.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.test.check.generators.vector_distinct.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.test.check.generators.vector_distinct.cljs$core$IFn$_invoke$arity$1 = (function (gen){
return clojure.test.check.generators.vector_distinct.cljs$core$IFn$_invoke$arity$2(gen,cljs.core.PersistentArrayMap.EMPTY);
});

clojure.test.check.generators.vector_distinct.cljs$core$IFn$_invoke$arity$2 = (function (gen,opts){
if(cljs.core.truth_(clojure.test.check.generators.generator_QMARK_(gen))){
} else {
throw (new Error(["Assert failed: ","First arg to vector-distinct must be a generator!","\n","(generator? gen)"].join('')));
}

return clojure.test.check.generators.coll_distinct_by(cljs.core.PersistentVector.EMPTY,cljs.core.identity,true,true,gen,opts);
});

clojure.test.check.generators.vector_distinct.cljs$lang$maxFixedArity = 2;

/**
 * Generates a list of elements from the given generator, with the
 *   guarantee that the elements will be distinct.
 * 
 *   If the generator cannot or is unlikely to produce enough distinct
 *   elements, this generator will fail in the same way as such-that.
 * 
 *   Available options:
 * 
 *  :num-elements  the fixed size of generated vectors
 *  :min-elements  the min size of generated vectors
 *  :max-elements  the max size of generated vectors
 *  :max-tries     the number of times the generator will be tried before
 *                 failing when it does not produce distinct elements
 *                 (default 10)
 */
clojure.test.check.generators.list_distinct = (function clojure$test$check$generators$list_distinct(var_args){
var G__7984 = arguments.length;
switch (G__7984) {
case 1:
return clojure.test.check.generators.list_distinct.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.test.check.generators.list_distinct.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.test.check.generators.list_distinct.cljs$core$IFn$_invoke$arity$1 = (function (gen){
return clojure.test.check.generators.list_distinct.cljs$core$IFn$_invoke$arity$2(gen,cljs.core.PersistentArrayMap.EMPTY);
});

clojure.test.check.generators.list_distinct.cljs$core$IFn$_invoke$arity$2 = (function (gen,opts){
if(cljs.core.truth_(clojure.test.check.generators.generator_QMARK_(gen))){
} else {
throw (new Error(["Assert failed: ","First arg to list-distinct must be a generator!","\n","(generator? gen)"].join('')));
}

return clojure.test.check.generators.coll_distinct_by(cljs.core.List.EMPTY,cljs.core.identity,true,true,gen,opts);
});

clojure.test.check.generators.list_distinct.cljs$lang$maxFixedArity = 2;

/**
 * Generates a vector of elements from the given generator, with the
 *   guarantee that (map key-fn the-vector) will be distinct.
 * 
 *   If the generator cannot or is unlikely to produce enough distinct
 *   elements, this generator will fail in the same way as such-that.
 * 
 *   Available options:
 * 
 *  :num-elements  the fixed size of generated vectors
 *  :min-elements  the min size of generated vectors
 *  :max-elements  the max size of generated vectors
 *  :max-tries     the number of times the generator will be tried before
 *                 failing when it does not produce distinct elements
 *                 (default 10)
 */
clojure.test.check.generators.vector_distinct_by = (function clojure$test$check$generators$vector_distinct_by(var_args){
var G__7987 = arguments.length;
switch (G__7987) {
case 2:
return clojure.test.check.generators.vector_distinct_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.test.check.generators.vector_distinct_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.test.check.generators.vector_distinct_by.cljs$core$IFn$_invoke$arity$2 = (function (key_fn,gen){
return clojure.test.check.generators.vector_distinct_by.cljs$core$IFn$_invoke$arity$3(key_fn,gen,cljs.core.PersistentArrayMap.EMPTY);
});

clojure.test.check.generators.vector_distinct_by.cljs$core$IFn$_invoke$arity$3 = (function (key_fn,gen,opts){
if(cljs.core.truth_(clojure.test.check.generators.generator_QMARK_(gen))){
} else {
throw (new Error(["Assert failed: ","First arg to vector-distinct-by must be a generator!","\n","(generator? gen)"].join('')));
}

return clojure.test.check.generators.coll_distinct_by(cljs.core.PersistentVector.EMPTY,key_fn,true,true,gen,opts);
});

clojure.test.check.generators.vector_distinct_by.cljs$lang$maxFixedArity = 3;

/**
 * Generates a list of elements from the given generator, with the
 *   guarantee that (map key-fn the-list) will be distinct.
 * 
 *   If the generator cannot or is unlikely to produce enough distinct
 *   elements, this generator will fail in the same way as such-that.
 * 
 *   Available options:
 * 
 *  :num-elements  the fixed size of generated vectors
 *  :min-elements  the min size of generated vectors
 *  :max-elements  the max size of generated vectors
 *  :max-tries     the number of times the generator will be tried before
 *                 failing when it does not produce distinct elements
 *                 (default 10)
 */
clojure.test.check.generators.list_distinct_by = (function clojure$test$check$generators$list_distinct_by(var_args){
var G__7990 = arguments.length;
switch (G__7990) {
case 2:
return clojure.test.check.generators.list_distinct_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.test.check.generators.list_distinct_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.test.check.generators.list_distinct_by.cljs$core$IFn$_invoke$arity$2 = (function (key_fn,gen){
return clojure.test.check.generators.list_distinct_by.cljs$core$IFn$_invoke$arity$3(key_fn,gen,cljs.core.PersistentArrayMap.EMPTY);
});

clojure.test.check.generators.list_distinct_by.cljs$core$IFn$_invoke$arity$3 = (function (key_fn,gen,opts){
if(cljs.core.truth_(clojure.test.check.generators.generator_QMARK_(gen))){
} else {
throw (new Error(["Assert failed: ","First arg to list-distinct-by must be a generator!","\n","(generator? gen)"].join('')));
}

return clojure.test.check.generators.coll_distinct_by(cljs.core.List.EMPTY,key_fn,true,true,gen,opts);
});

clojure.test.check.generators.list_distinct_by.cljs$lang$maxFixedArity = 3;

/**
 * Generates a set of elements from the given generator.
 * 
 *   If the generator cannot or is unlikely to produce enough distinct
 *   elements, this generator will fail in the same way as such-that.
 * 
 *   Available options:
 * 
 *  :num-elements  the fixed size of generated vectors
 *  :min-elements  the min size of generated vectors
 *  :max-elements  the max size of generated vectors
 *  :max-tries     the number of times the generator will be tried before
 *                 failing when it does not produce distinct elements
 *                 (default 10)
 */
clojure.test.check.generators.set = (function clojure$test$check$generators$set(var_args){
var G__7993 = arguments.length;
switch (G__7993) {
case 1:
return clojure.test.check.generators.set.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.test.check.generators.set.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.test.check.generators.set.cljs$core$IFn$_invoke$arity$1 = (function (gen){
return clojure.test.check.generators.set.cljs$core$IFn$_invoke$arity$2(gen,cljs.core.PersistentArrayMap.EMPTY);
});

clojure.test.check.generators.set.cljs$core$IFn$_invoke$arity$2 = (function (gen,opts){
if(cljs.core.truth_(clojure.test.check.generators.generator_QMARK_(gen))){
} else {
throw (new Error(["Assert failed: ","First arg to set must be a generator!","\n","(generator? gen)"].join('')));
}

return clojure.test.check.generators.coll_distinct_by(cljs.core.PersistentHashSet.EMPTY,cljs.core.identity,false,false,gen,opts);
});

clojure.test.check.generators.set.cljs$lang$maxFixedArity = 2;

/**
 * Generates a sorted set of elements from the given generator.
 * 
 *   If the generator cannot or is unlikely to produce enough distinct
 *   elements, this generator will fail in the same way as such-that.
 * 
 *   Available options:
 * 
 *  :num-elements  the fixed size of generated vectors
 *  :min-elements  the min size of generated vectors
 *  :max-elements  the max size of generated vectors
 *  :max-tries     the number of times the generator will be tried before
 *                 failing when it does not produce distinct elements
 *                 (default 10)
 */
clojure.test.check.generators.sorted_set = (function clojure$test$check$generators$sorted_set(var_args){
var G__7996 = arguments.length;
switch (G__7996) {
case 1:
return clojure.test.check.generators.sorted_set.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.test.check.generators.sorted_set.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.test.check.generators.sorted_set.cljs$core$IFn$_invoke$arity$1 = (function (gen){
return clojure.test.check.generators.sorted_set.cljs$core$IFn$_invoke$arity$2(gen,cljs.core.PersistentArrayMap.EMPTY);
});

clojure.test.check.generators.sorted_set.cljs$core$IFn$_invoke$arity$2 = (function (gen,opts){
if(cljs.core.truth_(clojure.test.check.generators.generator_QMARK_(gen))){
} else {
throw (new Error(["Assert failed: ","First arg to sorted-set must be a generator!","\n","(generator? gen)"].join('')));
}

return clojure.test.check.generators.coll_distinct_by(cljs.core.sorted_set(),cljs.core.identity,false,false,gen,opts);
});

clojure.test.check.generators.sorted_set.cljs$lang$maxFixedArity = 2;

/**
 * Create a generator that generates maps, with keys chosen from
 *   `key-gen` and values chosen from `val-gen`.
 * 
 *   If the key generator cannot or is unlikely to produce enough distinct
 *   elements, this generator will fail in the same way as such-that.
 * 
 *   Available options:
 * 
 *  :num-elements  the fixed size of generated vectors
 *  :min-elements  the min size of generated vectors
 *  :max-elements  the max size of generated vectors
 *  :max-tries     the number of times the generator will be tried before
 *                 failing when it does not produce distinct elements
 *                 (default 10)
 */
clojure.test.check.generators.map = (function clojure$test$check$generators$map(var_args){
var G__7999 = arguments.length;
switch (G__7999) {
case 2:
return clojure.test.check.generators.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.test.check.generators.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.test.check.generators.map.cljs$core$IFn$_invoke$arity$2 = (function (key_gen,val_gen){
return clojure.test.check.generators.map.cljs$core$IFn$_invoke$arity$3(key_gen,val_gen,cljs.core.PersistentArrayMap.EMPTY);
});

clojure.test.check.generators.map.cljs$core$IFn$_invoke$arity$3 = (function (key_gen,val_gen,opts){
return clojure.test.check.generators.coll_distinct_by(cljs.core.PersistentArrayMap.EMPTY,cljs.core.first,false,false,clojure.test.check.generators.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([key_gen,val_gen], 0)),opts);
});

clojure.test.check.generators.map.cljs$lang$maxFixedArity = 3;

/**
 * Generates a single uniformly random long, does not shrink.
 */
clojure.test.check.generators.gen_raw_long = clojure.test.check.generators.make_gen((function (rnd,_size){
return clojure.test.check.rose_tree.pure(clojure.test.check.random.rand_long(rnd));
}));
clojure.test.check.generators.MAX_INTEGER = (cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((53),(2))) - (1));
clojure.test.check.generators.MIN_INTEGER = (- clojure.test.check.generators.MAX_INTEGER);
clojure.test.check.generators.abs = (function clojure$test$check$generators$abs(x){
return Math.abs(x);
});
clojure.test.check.generators.long__GT_large_integer = (function clojure$test$check$generators$long__GT_large_integer(bit_count,x,min,max){
var res = (function (){var G__8001 = x.shiftRight(((64) - bit_count)).toNumber();
if((min === (0))){
return clojure.test.check.generators.abs(G__8001);
} else {
return G__8001;
}
})();
while(true){
if((((min <= res)) && ((res <= max)))){
return res;
} else {
var res_SINGLEQUOTE_ = (- res);
if((((min <= res_SINGLEQUOTE_)) && ((res_SINGLEQUOTE_ <= max)))){
return res_SINGLEQUOTE_;
} else {
var G__8004 = ((function (){var G__8002 = res;
if(cljs.core.odd_QMARK_(res)){
var fexpr__8003 = (((res < (0)))?cljs.core.inc:cljs.core.dec);
return (fexpr__8003.cljs$core$IFn$_invoke$arity$1 ? fexpr__8003.cljs$core$IFn$_invoke$arity$1(G__8002) : fexpr__8003.call(null,G__8002));
} else {
return G__8002;
}
})() / (2));
res = G__8004;
continue;
}
}
break;
}
});
/**
 * Like large-integer*, but assumes range includes zero.
 */
clojure.test.check.generators.large_integer_STAR__STAR_ = (function clojure$test$check$generators$large_integer_STAR__STAR_(min,max){
return clojure.test.check.generators.sized((function (size){
var size__$1 = (function (){var x__4006__auto__ = size;
var y__4007__auto__ = (1);
return ((x__4006__auto__ > y__4007__auto__) ? x__4006__auto__ : y__4007__auto__);
})();
var max_bit_count = (function (){var x__4009__auto__ = size__$1;
var y__4010__auto__ = (54);
return ((x__4009__auto__ < y__4010__auto__) ? x__4009__auto__ : y__4010__auto__);
})();
return clojure.test.check.generators.gen_fmap(((function (size__$1,max_bit_count){
return (function (rose){
var vec__8005 = clojure.test.check.rose_tree.root(rose);
var bit_count = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8005,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8005,(1),null);
return clojure.test.check.generators.int_rose_tree(clojure.test.check.generators.long__GT_large_integer(bit_count,x,min,max));
});})(size__$1,max_bit_count))
,clojure.test.check.generators.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clojure.test.check.generators.choose((1),max_bit_count),clojure.test.check.generators.gen_raw_long], 0)));
}));
});
/**
 * Like large-integer, but accepts options:
 * 
 *  :min  the minimum integer (inclusive)
 *  :max  the maximum integer (inclusive)
 * 
 *   Both :min and :max are optional.
 */
clojure.test.check.generators.large_integer_STAR_ = (function clojure$test$check$generators$large_integer_STAR_(p__8011){
var map__8012 = p__8011;
var map__8012__$1 = ((((!((map__8012 == null)))?(((((map__8012.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8012.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8012):map__8012);
var min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8012__$1,cljs.core.cst$kw$min);
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8012__$1,cljs.core.cst$kw$max);
var min__$1 = (function (){var or__3922__auto__ = min;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return clojure.test.check.generators.MIN_INTEGER;
}
})();
var max__$1 = (function (){var or__3922__auto__ = max;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return clojure.test.check.generators.MAX_INTEGER;
}
})();
if((min__$1 <= max__$1)){
} else {
throw (new Error("Assert failed: (<= min max)"));
}

return clojure.test.check.generators.such_that.cljs$core$IFn$_invoke$arity$2(((function (min__$1,max__$1,map__8012,map__8012__$1,min,max){
return (function (p1__8008_SHARP_){
return (((min__$1 <= p1__8008_SHARP_)) && ((p1__8008_SHARP_ <= max__$1)));
});})(min__$1,max__$1,map__8012,map__8012__$1,min,max))
,(((((min__$1 <= (0))) && (((0) <= max__$1))))?clojure.test.check.generators.large_integer_STAR__STAR_(min__$1,max__$1):(((max__$1 < (0)))?clojure.test.check.generators.fmap(((function (min__$1,max__$1,map__8012,map__8012__$1,min,max){
return (function (p1__8009_SHARP_){
return (max__$1 + p1__8009_SHARP_);
});})(min__$1,max__$1,map__8012,map__8012__$1,min,max))
,clojure.test.check.generators.large_integer_STAR__STAR_((min__$1 - max__$1),(0))):clojure.test.check.generators.fmap(((function (min__$1,max__$1,map__8012,map__8012__$1,min,max){
return (function (p1__8010_SHARP_){
return (min__$1 + p1__8010_SHARP_);
});})(min__$1,max__$1,map__8012,map__8012__$1,min,max))
,clojure.test.check.generators.large_integer_STAR__STAR_((0),(max__$1 - min__$1))))));
});
/**
 * Generates a platform-native integer from the full available range
 *   (in clj, 64-bit Longs, and in cljs, numbers between -(2^53 - 1) and
 *   (2^53 - 1)).
 * 
 *   Use large-integer* for more control.
 */
clojure.test.check.generators.large_integer = clojure.test.check.generators.large_integer_STAR_(cljs.core.PersistentArrayMap.EMPTY);
clojure.test.check.generators.POS_INFINITY = Number.POSITIVE_INFINITY;
clojure.test.check.generators.NEG_INFINITY = Number.NEGATIVE_INFINITY;
clojure.test.check.generators.MAX_POS_VALUE = Number.MAX_VALUE;
clojure.test.check.generators.MIN_NEG_VALUE = (- clojure.test.check.generators.MAX_POS_VALUE);
clojure.test.check.generators.NAN = Number.NaN;
/**
 * Generates an integer uniformly in the range 0..(2^bit-count-1).
 */
clojure.test.check.generators.uniform_integer = (function clojure$test$check$generators$uniform_integer(bit_count){
if((bit_count <= (32))){
return clojure.test.check.generators.choose((0),(function (){var G__8014 = cljs.core.long$(bit_count);
switch (G__8014) {
case (32):
return (4294967295);

break;
case (31):
return (2147483647);

break;
default:
return (((1) << bit_count) - (1));

}
})());
} else {
return clojure.test.check.generators.fmap((function (p__8015){
var vec__8016 = p__8015;
var upper = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8016,(0),null);
var lower = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8016,(1),null);
return ((upper * (4294967296)) + lower);
}),clojure.test.check.generators.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__8019 = (bit_count - (32));
return (clojure.test.check.generators.uniform_integer.cljs$core$IFn$_invoke$arity$1 ? clojure.test.check.generators.uniform_integer.cljs$core$IFn$_invoke$arity$1(G__8019) : clojure.test.check.generators.uniform_integer.call(null,G__8019));
})(),(clojure.test.check.generators.uniform_integer.cljs$core$IFn$_invoke$arity$1 ? clojure.test.check.generators.uniform_integer.cljs$core$IFn$_invoke$arity$1((32)) : clojure.test.check.generators.uniform_integer.call(null,(32)))], 0)));
}
});
clojure.test.check.generators.scalb = (function clojure$test$check$generators$scalb(x,exp){
return (x * Math.pow((2),exp));
});
/**
 * Bit-reverses an integer in the range [0, 2^52).
 */
clojure.test.check.generators.fifty_two_bit_reverse = (function clojure$test$check$generators$fifty_two_bit_reverse(n){
var out = (0);
var n__$1 = n;
var out_shifter = Math.pow((2),(52));
while(true){
if((n__$1 < (1))){
return (out * out_shifter);
} else {
var G__8021 = ((out * (2)) + (n__$1 & (1)));
var G__8022 = (n__$1 / (2));
var G__8023 = (out_shifter / (2));
out = G__8021;
n__$1 = G__8022;
out_shifter = G__8023;
continue;
}
break;
}
});
/**
 * Generates a 52-bit non-negative integer that shrinks toward having
 *   fewer lower-order bits (and shrinks to 0 if possible).
 */
clojure.test.check.generators.backwards_shrinking_significand = clojure.test.check.generators.fmap(clojure.test.check.generators.fifty_two_bit_reverse,clojure.test.check.generators.sized((function (size){
return clojure.test.check.generators.gen_bind(clojure.test.check.generators.choose((0),(function (){var x__4009__auto__ = size;
var y__4010__auto__ = (52);
return ((x__4009__auto__ < y__4010__auto__) ? x__4009__auto__ : y__4010__auto__);
})()),(function (rose){
return clojure.test.check.generators.uniform_integer(clojure.test.check.rose_tree.root(rose));
}));
})));
clojure.test.check.generators.get_exponent = (function clojure$test$check$generators$get_exponent(x){
if((x === (0))){
return (-1023);
} else {
var x__$1 = Math.abs(x);
var res = (function (){var G__8024 = (Math.log(x__$1) * Math.LOG2E);
return Math.floor(G__8024);
})();
var t = clojure.test.check.generators.scalb(x__$1,(- res));
if((t < (1))){
return (res - (1));
} else {
if(((2) <= t)){
return (res + (1));
} else {
return res;

}
}
}
});
/**
 * Generates [exp sign], where exp is in [-1023, 1023] and sign is 1
 *   or -1. Only generates values for exp and sign for which there are
 *   doubles within the given bounds.
 */
clojure.test.check.generators.double_exp_and_sign = (function clojure$test$check$generators$double_exp_and_sign(lower_bound,upper_bound){
var gen_exp = (function clojure$test$check$generators$double_exp_and_sign_$_gen_exp(lb,ub){
return clojure.test.check.generators.sized((function (size){
var qs8 = ((1) << cljs.core.quot((function (){var x__4009__auto__ = (200);
var y__4010__auto__ = size;
return ((x__4009__auto__ < y__4010__auto__) ? x__4009__auto__ : y__4010__auto__);
})(),(8)));
if((((lb <= (0))) && (((0) <= ub)))){
return clojure.test.check.generators.choose((function (){var x__4006__auto__ = lb;
var y__4007__auto__ = (- qs8);
return ((x__4006__auto__ > y__4007__auto__) ? x__4006__auto__ : y__4007__auto__);
})(),(function (){var x__4009__auto__ = ub;
var y__4010__auto__ = qs8;
return ((x__4009__auto__ < y__4010__auto__) ? x__4009__auto__ : y__4010__auto__);
})());
} else {
if((ub < (0))){
return clojure.test.check.generators.choose((function (){var x__4006__auto__ = lb;
var y__4007__auto__ = (ub - qs8);
return ((x__4006__auto__ > y__4007__auto__) ? x__4006__auto__ : y__4007__auto__);
})(),ub);
} else {
return clojure.test.check.generators.choose(lb,(function (){var x__4009__auto__ = ub;
var y__4010__auto__ = (lb + qs8);
return ((x__4009__auto__ < y__4010__auto__) ? x__4009__auto__ : y__4010__auto__);
})());

}
}
}));
});
if((((lower_bound == null)) && ((upper_bound == null)))){
return clojure.test.check.generators.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([gen_exp((-1023),(1023)),clojure.test.check.generators.elements(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1.0,-1.0], null))], 0));
} else {
var lower_bound__$1 = (function (){var or__3922__auto__ = lower_bound;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return clojure.test.check.generators.MIN_NEG_VALUE;
}
})();
var upper_bound__$1 = (function (){var or__3922__auto__ = upper_bound;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return clojure.test.check.generators.MAX_POS_VALUE;
}
})();
var lbexp = (function (){var x__4006__auto__ = (-1023);
var y__4007__auto__ = clojure.test.check.generators.get_exponent(lower_bound__$1);
return ((x__4006__auto__ > y__4007__auto__) ? x__4006__auto__ : y__4007__auto__);
})();
var ubexp = (function (){var x__4006__auto__ = (-1023);
var y__4007__auto__ = clojure.test.check.generators.get_exponent(upper_bound__$1);
return ((x__4006__auto__ > y__4007__auto__) ? x__4006__auto__ : y__4007__auto__);
})();
if((0.0 <= lower_bound__$1)){
return clojure.test.check.generators.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([gen_exp(lbexp,ubexp),clojure.test.check.generators.return$(1.0)], 0));
} else {
if((upper_bound__$1 <= 0.0)){
return clojure.test.check.generators.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([gen_exp(ubexp,lbexp),clojure.test.check.generators.return$(-1.0)], 0));
} else {
return clojure.test.check.generators.fmap(((function (lower_bound__$1,upper_bound__$1,lbexp,ubexp){
return (function (p__8025){
var vec__8026 = p__8025;
var exp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8026,(0),null);
var sign = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8026,(1),null);
var pair = vec__8026;
if((((((sign < (0))) && ((lbexp < exp)))) || ((((sign > (0))) && ((ubexp < exp)))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exp,(- sign)], null);
} else {
return pair;
}
});})(lower_bound__$1,upper_bound__$1,lbexp,ubexp))
,clojure.test.check.generators.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([gen_exp((-1023),(function (){var x__4006__auto__ = ubexp;
var y__4007__auto__ = lbexp;
return ((x__4006__auto__ > y__4007__auto__) ? x__4006__auto__ : y__4007__auto__);
})()),clojure.test.check.generators.elements(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1.0,-1.0], null))], 0)));

}
}
}
});
/**
 * Returns [low high], the smallest and largest numbers in the given
 *   range.
 */
clojure.test.check.generators.block_bounds = (function clojure$test$check$generators$block_bounds(exp,sign){
if((sign < (0))){
var vec__8029 = (function (){var G__8032 = exp;
var G__8033 = (- sign);
return (clojure.test.check.generators.block_bounds.cljs$core$IFn$_invoke$arity$2 ? clojure.test.check.generators.block_bounds.cljs$core$IFn$_invoke$arity$2(G__8032,G__8033) : clojure.test.check.generators.block_bounds.call(null,G__8032,G__8033));
})();
var low = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8029,(0),null);
var high = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8029,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(- high),(- low)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1023),exp)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,clojure.test.check.generators.scalb((clojure.test.check.generators.scalb(1.0,(52)) - (1)),(-1074))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.test.check.generators.scalb(1.0,exp),clojure.test.check.generators.scalb((clojure.test.check.generators.scalb(1.0,(52)) - (1)),(exp - (51)))], null);
}
}
});
clojure.test.check.generators.double_finite = (function clojure$test$check$generators$double_finite(lower_bound,upper_bound){
if((((lower_bound == null)) || ((upper_bound == null)) || ((lower_bound <= upper_bound)))){
} else {
throw (new Error("Assert failed: (or (nil? lower-bound) (nil? upper-bound) (<= lower-bound upper-bound))"));
}

var pred = (cljs.core.truth_(lower_bound)?(cljs.core.truth_(upper_bound)?(function (p1__8034_SHARP_){
return (((lower_bound <= p1__8034_SHARP_)) && ((p1__8034_SHARP_ <= upper_bound)));
}):(function (p1__8035_SHARP_){
return (lower_bound <= p1__8035_SHARP_);
})):(cljs.core.truth_(upper_bound)?(function (p1__8036_SHARP_){
return (p1__8036_SHARP_ <= upper_bound);
}):null));
var gen = clojure.test.check.generators.fmap(((function (pred){
return (function (p__8037){
var vec__8038 = p__8037;
var vec__8041 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8038,(0),null);
var exp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8041,(0),null);
var sign = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8041,(1),null);
var significand = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8038,(1),null);
var base = ((significand / Math.pow((2),(52))) + (1));
var x = (clojure.test.check.generators.scalb(base,exp) * sign);
if(cljs.core.truth_((function (){var or__3922__auto__ = (pred == null);
if(or__3922__auto__){
return or__3922__auto__;
} else {
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(x) : pred.call(null,x));
}
})())){
return x;
} else {
var vec__8044 = clojure.test.check.generators.block_bounds(exp,sign);
var low = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8044,(0),null);
var high = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8044,(1),null);
var block_lb = (function (){var G__8047 = low;
if(cljs.core.truth_(lower_bound)){
var x__4006__auto__ = G__8047;
var y__4007__auto__ = lower_bound;
return ((x__4006__auto__ > y__4007__auto__) ? x__4006__auto__ : y__4007__auto__);
} else {
return G__8047;
}
})();
var block_ub = (function (){var G__8048 = high;
if(cljs.core.truth_(upper_bound)){
var x__4009__auto__ = G__8048;
var y__4010__auto__ = upper_bound;
return ((x__4009__auto__ < y__4010__auto__) ? x__4009__auto__ : y__4010__auto__);
} else {
return G__8048;
}
})();
var x__$1 = (block_lb + ((block_ub - block_lb) * (base - (1))));
var x__4006__auto__ = (function (){var x__4009__auto__ = x__$1;
var y__4010__auto__ = block_ub;
return ((x__4009__auto__ < y__4010__auto__) ? x__4009__auto__ : y__4010__auto__);
})();
var y__4007__auto__ = block_lb;
return ((x__4006__auto__ > y__4007__auto__) ? x__4006__auto__ : y__4007__auto__);
}
});})(pred))
,clojure.test.check.generators.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clojure.test.check.generators.double_exp_and_sign(lower_bound,upper_bound),clojure.test.check.generators.backwards_shrinking_significand], 0)));
var G__8049 = gen;
if(cljs.core.truth_(pred)){
return clojure.test.check.generators.such_that.cljs$core$IFn$_invoke$arity$2(pred,G__8049);
} else {
return G__8049;
}
});
/**
 * Generates a 64-bit floating point number. Options:
 * 
 *  :infinite? - whether +/- infinity can be generated (default true)
 *  :NaN?      - whether NaN can be generated (default true)
 *  :min       - minimum value (inclusive, default none)
 *  :max       - maximum value (inclusive, default none)
 * 
 *   Note that the min/max options must be finite numbers. Supplying a
 *   min precludes -Infinity, and supplying a max precludes +Infinity.
 */
clojure.test.check.generators.double_STAR_ = (function clojure$test$check$generators$double_STAR_(p__8050){
var map__8051 = p__8050;
var map__8051__$1 = ((((!((map__8051 == null)))?(((((map__8051.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8051.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8051):map__8051);
var infinite_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__8051__$1,cljs.core.cst$kw$infinite_QMARK_,true);
var NaN_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__8051__$1,cljs.core.cst$kw$NaN_QMARK_,true);
var min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8051__$1,cljs.core.cst$kw$min);
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8051__$1,cljs.core.cst$kw$max);
var frequency_arg = (function (){var G__8053 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(95),clojure.test.check.generators.double_finite(min,max)], null)], null);
var G__8053__$1 = (((((min == null))?(((max == null)) || ((0.0 <= max))):(((max == null))?(min <= 0.0):(((min <= 0.0)) && ((0.0 <= max))))))?cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(G__8053,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),clojure.test.check.generators.return$(0.0)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),clojure.test.check.generators.return$(-0.0)], null)], 0)):G__8053);
var G__8053__$2 = (cljs.core.truth_((function (){var and__3911__auto__ = infinite_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
return (max == null);
} else {
return and__3911__auto__;
}
})())?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__8053__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),clojure.test.check.generators.return$(clojure.test.check.generators.POS_INFINITY)], null)):G__8053__$1);
var G__8053__$3 = (cljs.core.truth_((function (){var and__3911__auto__ = infinite_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
return (min == null);
} else {
return and__3911__auto__;
}
})())?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__8053__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),clojure.test.check.generators.return$(clojure.test.check.generators.NEG_INFINITY)], null)):G__8053__$2);
if(cljs.core.truth_(NaN_QMARK_)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__8053__$3,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),clojure.test.check.generators.return$(clojure.test.check.generators.NAN)], null));
} else {
return G__8053__$3;
}
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(frequency_arg))){
return cljs.core.second(cljs.core.first(frequency_arg));
} else {
return clojure.test.check.generators.frequency(frequency_arg);
}
});
/**
 * Generates 64-bit floating point numbers from the entire range,
 *   including +/- infinity and NaN. Use double* for more control.
 */
clojure.test.check.generators.double$ = clojure.test.check.generators.double_STAR_(cljs.core.PersistentArrayMap.EMPTY);
/**
 * Generates character from 0-255.
 */
clojure.test.check.generators.char$ = clojure.test.check.generators.fmap(cljs.core.char$,clojure.test.check.generators.choose((0),(255)));
/**
 * Generate only ascii character.
 */
clojure.test.check.generators.char_ascii = clojure.test.check.generators.fmap(cljs.core.char$,clojure.test.check.generators.choose((32),(126)));
/**
 * Generate alphanumeric characters.
 */
clojure.test.check.generators.char_alphanumeric = clojure.test.check.generators.fmap(cljs.core.char$,clojure.test.check.generators.one_of(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.test.check.generators.choose((48),(57)),clojure.test.check.generators.choose((65),(90)),clojure.test.check.generators.choose((97),(122))], null)));
/**
 * Deprecated - use char-alphanumeric instead.
 * 
 *   Generate alphanumeric characters.
 */
clojure.test.check.generators.char_alpha_numeric = clojure.test.check.generators.char_alphanumeric;
/**
 * Generate alpha characters.
 */
clojure.test.check.generators.char_alpha = clojure.test.check.generators.fmap(cljs.core.char$,clojure.test.check.generators.one_of(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.test.check.generators.choose((65),(90)),clojure.test.check.generators.choose((97),(122))], null)));
/**
 * Generate non-alphanumeric characters that can be in a symbol.
 */
clojure.test.check.generators.char_symbol_special = clojure.test.check.generators.elements(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*","+","!","-","_","?"], null));
/**
 * Generate characters that can be the char following first of a keyword.
 */
clojure.test.check.generators.char_keyword_rest = clojure.test.check.generators.frequency(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),clojure.test.check.generators.char_alphanumeric], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),clojure.test.check.generators.char_symbol_special], null)], null));
/**
 * Generate characters that can be the first char of a keyword.
 */
clojure.test.check.generators.char_keyword_first = clojure.test.check.generators.frequency(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),clojure.test.check.generators.char_alpha], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),clojure.test.check.generators.char_symbol_special], null)], null));
/**
 * Generate strings. May generate unprintable characters.
 */
clojure.test.check.generators.string = clojure.test.check.generators.fmap(clojure.string.join,clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$1(clojure.test.check.generators.char$));
/**
 * Generate ascii strings.
 */
clojure.test.check.generators.string_ascii = clojure.test.check.generators.fmap(clojure.string.join,clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$1(clojure.test.check.generators.char_ascii));
/**
 * Generate alphanumeric strings.
 */
clojure.test.check.generators.string_alphanumeric = clojure.test.check.generators.fmap(clojure.string.join,clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$1(clojure.test.check.generators.char_alphanumeric));
/**
 * Deprecated - use string-alphanumeric instead.
 * 
 *   Generate alphanumeric strings.
 */
clojure.test.check.generators.string_alpha_numeric = clojure.test.check.generators.string_alphanumeric;
clojure.test.check.generators.digit_QMARK_ = (function clojure$test$check$generators$digit_QMARK_(d){
return goog.string.isNumeric(d);
});
/**
 * Returns true if c is \+ or \- and d is non-nil and a digit.
 * 
 *   Symbols that start with +3 or -2 are not readable because they look
 *   like numbers.
 */
clojure.test.check.generators._PLUS__or___digit_QMARK_ = (function clojure$test$check$generators$_PLUS__or___digit_QMARK_(c,d){
return cljs.core.boolean$((function (){var and__3911__auto__ = d;
if(cljs.core.truth_(and__3911__auto__)){
var and__3911__auto____$1 = ((("+" === c)) || (("-" === c)));
if(and__3911__auto____$1){
return clojure.test.check.generators.digit_QMARK_(d);
} else {
return and__3911__auto____$1;
}
} else {
return and__3911__auto__;
}
})());
});
/**
 * Generate the segment of a namespace.
 */
clojure.test.check.generators.namespace_segment = clojure.test.check.generators.fmap((function (p__8054){
var vec__8055 = p__8054;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8055,(0),null);
var cs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8055,(1),null);
return clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.cons(c,cs));
}),clojure.test.check.generators.such_that.cljs$core$IFn$_invoke$arity$2((function (p__8058){
var vec__8059 = p__8058;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8059,(0),null);
var vec__8062 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8059,(1),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8062,(0),null);
return cljs.core.not(clojure.test.check.generators._PLUS__or___digit_QMARK_(c,d));
}),clojure.test.check.generators.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clojure.test.check.generators.char_keyword_first,clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$1(clojure.test.check.generators.char_keyword_rest)], 0))));
/**
 * Generate a namespace (or nil for no namespace).
 */
clojure.test.check.generators.namespace = clojure.test.check.generators.fmap((function (v){
if(cljs.core.seq(v)){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",v);
} else {
return null;
}
}),clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$1(clojure.test.check.generators.namespace_segment));
/**
 * Generate segments of a keyword (between \:)
 */
clojure.test.check.generators.keyword_segment_rest = clojure.test.check.generators.fmap((function (p__8065){
var vec__8066 = p__8065;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8066,(0),null);
var cs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8066,(1),null);
return clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.cons(c,cs));
}),clojure.test.check.generators.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clojure.test.check.generators.char_keyword_rest,clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$1(clojure.test.check.generators.char_keyword_rest)], 0)));
/**
 * Generate segments of a keyword that can be first (between \:)
 */
clojure.test.check.generators.keyword_segment_first = clojure.test.check.generators.fmap((function (p__8069){
var vec__8070 = p__8069;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8070,(0),null);
var cs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8070,(1),null);
return clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.cons(c,cs));
}),clojure.test.check.generators.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clojure.test.check.generators.char_keyword_first,clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$1(clojure.test.check.generators.char_keyword_rest)], 0)));
/**
 * Generate keywords without namespaces.
 */
clojure.test.check.generators.keyword = clojure.test.check.generators.fmap((function (p__8073){
var vec__8074 = p__8073;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8074,(0),null);
var cs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8074,(1),null);
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(":",cljs.core.cons(c,cs)));
}),clojure.test.check.generators.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clojure.test.check.generators.keyword_segment_first,clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$1(clojure.test.check.generators.keyword_segment_rest)], 0)));
/**
 * Generate keywords with optional namespaces.
 */
clojure.test.check.generators.keyword_ns = clojure.test.check.generators.fmap((function (p__8077){
var vec__8078 = p__8077;
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8078,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8078,(1),null);
var cs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8078,(2),null);
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(ns,clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.cons(c,cs)));
}),clojure.test.check.generators.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clojure.test.check.generators.namespace,clojure.test.check.generators.char_keyword_first,clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$1(clojure.test.check.generators.char_keyword_rest)], 0)));
clojure.test.check.generators.char_symbol_first = clojure.test.check.generators.frequency(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),clojure.test.check.generators.char_alpha], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),clojure.test.check.generators.char_symbol_special], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),clojure.test.check.generators.return$(".")], null)], null));
clojure.test.check.generators.char_symbol_rest = clojure.test.check.generators.frequency(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),clojure.test.check.generators.char_alphanumeric], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),clojure.test.check.generators.char_symbol_special], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),clojure.test.check.generators.return$(".")], null)], null));
/**
 * Generate symbols without namespaces.
 */
clojure.test.check.generators.symbol = clojure.test.check.generators.frequency(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100),clojure.test.check.generators.fmap((function (p__8081){
var vec__8082 = p__8081;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8082,(0),null);
var cs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8082,(1),null);
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.cons(c,cs)));
}),clojure.test.check.generators.such_that.cljs$core$IFn$_invoke$arity$2((function (p__8085){
var vec__8086 = p__8085;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8086,(0),null);
var vec__8089 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8086,(1),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8089,(0),null);
return cljs.core.not(clojure.test.check.generators._PLUS__or___digit_QMARK_(c,d));
}),clojure.test.check.generators.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clojure.test.check.generators.char_symbol_first,clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$1(clojure.test.check.generators.char_symbol_rest)], 0))))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),clojure.test.check.generators.return$(cljs.core.cst$sym$_SLASH_)], null)], null));
/**
 * Generate symbols with optional namespaces.
 */
clojure.test.check.generators.symbol_ns = clojure.test.check.generators.frequency(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100),clojure.test.check.generators.fmap((function (p__8092){
var vec__8093 = p__8092;
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8093,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8093,(1),null);
var cs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8093,(2),null);
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(ns,clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.cons(c,cs)));
}),clojure.test.check.generators.such_that.cljs$core$IFn$_invoke$arity$2((function (p__8096){
var vec__8097 = p__8096;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8097,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8097,(1),null);
var vec__8100 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8097,(2),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8100,(0),null);
return cljs.core.not(clojure.test.check.generators._PLUS__or___digit_QMARK_(c,d));
}),clojure.test.check.generators.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clojure.test.check.generators.namespace,clojure.test.check.generators.char_symbol_first,clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$1(clojure.test.check.generators.char_symbol_rest)], 0))))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),clojure.test.check.generators.return$(cljs.core.cst$sym$_SLASH_)], null)], null));
/**
 * Generates a `clojure.lang.Ratio`. Shrinks toward 0. Not all values generated
 *   will be ratios, as many values returned by `/` are not ratios.
 */
clojure.test.check.generators.ratio = clojure.test.check.generators.fmap((function (p__8103){
var vec__8104 = p__8103;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8104,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8104,(1),null);
return (a / b);
}),clojure.test.check.generators.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clojure.test.check.generators.int$,clojure.test.check.generators.such_that.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(cljs.core.zero_QMARK_),clojure.test.check.generators.int$)], 0)));
/**
 * Generates a random type-4 UUID. Does not shrink.
 */
clojure.test.check.generators.uuid = clojure.test.check.generators.no_shrink(clojure.test.check.generators.fmap((function (nibbles){
var hex = (function clojure$test$check$generators$hex(idx){
return (nibbles.cljs$core$IFn$_invoke$arity$1 ? nibbles.cljs$core$IFn$_invoke$arity$1(idx) : nibbles.call(null,idx)).toString((16));
});
var rhex = (((nibbles.cljs$core$IFn$_invoke$arity$1 ? nibbles.cljs$core$IFn$_invoke$arity$1((15)) : nibbles.call(null,(15))) & (3)) + (8)).toString((16));
return cljs.core.uuid([cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex((0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex((1))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex((2))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex((3))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex((4))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex((5))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex((6))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex((7))),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex((8))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex((9))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex((10))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex((11))),"-","4",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex((12))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex((13))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex((14))),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rhex),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex((16))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex((17))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex((18))),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex((19))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex((20))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex((21))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex((22))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex((23))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex((24))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex((25))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex((26))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex((27))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex((28))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex((29))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex((30)))].join(''));
}),clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$2(clojure.test.check.generators.choose((0),(15)),(31))));
clojure.test.check.generators.simple_type = clojure.test.check.generators.one_of(new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.test.check.generators.int$,clojure.test.check.generators.large_integer,clojure.test.check.generators.double$,clojure.test.check.generators.char$,clojure.test.check.generators.string,clojure.test.check.generators.ratio,clojure.test.check.generators.boolean$,clojure.test.check.generators.keyword,clojure.test.check.generators.keyword_ns,clojure.test.check.generators.symbol,clojure.test.check.generators.symbol_ns,clojure.test.check.generators.uuid], null));
clojure.test.check.generators.simple_type_printable = clojure.test.check.generators.one_of(new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.test.check.generators.int$,clojure.test.check.generators.large_integer,clojure.test.check.generators.double$,clojure.test.check.generators.char_ascii,clojure.test.check.generators.string_ascii,clojure.test.check.generators.ratio,clojure.test.check.generators.boolean$,clojure.test.check.generators.keyword,clojure.test.check.generators.keyword_ns,clojure.test.check.generators.symbol,clojure.test.check.generators.symbol_ns,clojure.test.check.generators.uuid], null));
clojure.test.check.generators.container_type = (function clojure$test$check$generators$container_type(inner_type){
return clojure.test.check.generators.one_of(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$1(inner_type),clojure.test.check.generators.list(inner_type),clojure.test.check.generators.map.cljs$core$IFn$_invoke$arity$2(inner_type,inner_type)], null));
});
clojure.test.check.generators.recursive_helper = (function clojure$test$check$generators$recursive_helper(container_gen_fn,scalar_gen,scalar_size,children_size,height){
if((height === (0))){
return clojure.test.check.generators.resize(scalar_size,scalar_gen);
} else {
return clojure.test.check.generators.resize(children_size,(function (){var G__8107 = (function (){var G__8108 = container_gen_fn;
var G__8109 = scalar_gen;
var G__8110 = scalar_size;
var G__8111 = children_size;
var G__8112 = (height - (1));
return (clojure.test.check.generators.recursive_helper.cljs$core$IFn$_invoke$arity$5 ? clojure.test.check.generators.recursive_helper.cljs$core$IFn$_invoke$arity$5(G__8108,G__8109,G__8110,G__8111,G__8112) : clojure.test.check.generators.recursive_helper.call(null,G__8108,G__8109,G__8110,G__8111,G__8112));
})();
return (container_gen_fn.cljs$core$IFn$_invoke$arity$1 ? container_gen_fn.cljs$core$IFn$_invoke$arity$1(G__8107) : container_gen_fn.call(null,G__8107));
})());
}
});
/**
 * This is a helper for writing recursive (tree-shaped) generators. The first
 *   argument should be a function that takes a generator as an argument, and
 *   produces another generator that 'contains' that generator. The vector function
 *   in this namespace is a simple example. The second argument is a scalar
 *   generator, like boolean. For example, to produce a tree of booleans:
 * 
 *  (gen/recursive-gen gen/vector gen/boolean)
 * 
 *   Vectors or maps either recurring or containing booleans or integers:
 * 
 *  (gen/recursive-gen (fn [inner] (gen/one-of [(gen/vector inner)
 *                                              (gen/map inner inner)]))
 *                     (gen/one-of [gen/boolean gen/int]))
 *   
 */
clojure.test.check.generators.recursive_gen = (function clojure$test$check$generators$recursive_gen(container_gen_fn,scalar_gen){
if(cljs.core.truth_(clojure.test.check.generators.generator_QMARK_(scalar_gen))){
} else {
throw (new Error(["Assert failed: ","Second arg to recursive-gen must be a generator","\n","(generator? scalar-gen)"].join('')));
}

return clojure.test.check.generators.sized((function (size){
return clojure.test.check.generators.bind(clojure.test.check.generators.choose((1),(5)),(function (height){
var children_size = (function (){var G__8113 = size;
var G__8114 = ((1) / height);
return Math.pow(G__8113,G__8114);
})();
return clojure.test.check.generators.recursive_helper(container_gen_fn,scalar_gen,size,children_size,height);
}));
}));
});
/**
 * A recursive generator that will generate many different, often nested, values
 */
clojure.test.check.generators.any = clojure.test.check.generators.recursive_gen(clojure.test.check.generators.container_type,clojure.test.check.generators.simple_type);
/**
 * Like any, but avoids characters that the shell will interpret as actions,
 *   like 7 and 14 (bell and alternate character set command)
 */
clojure.test.check.generators.any_printable = clojure.test.check.generators.recursive_gen(clojure.test.check.generators.container_type,clojure.test.check.generators.simple_type_printable);
var ret__4533__auto___8123 = (function (){
/**
 * Macro for building generators using values from other generators.
 *   Uses a binding vector with the same syntax as clojure.core/let,
 *   where the right-hand side of the binding pairs are generators, and
 *   the left-hand side are names (or destructuring forms) for generated
 *   values.
 * 
 *   Subsequent generator expressions can refer to the previously bound
 *   values, in the same way as clojure.core/let.
 * 
 *   The body of the let can be either a value or a generator, and does
 *   the expected thing in either case. In this way let provides the
 *   functionality of both `bind` and `fmap`.
 * 
 *   Examples:
 * 
 *  (gen/let [strs (gen/not-empty (gen/list gen/string))
 *            s (gen/elements strs)]
 *    {:some-strings strs
 *     :one-of-those-strings s})
 * 
 *  ;; generates collections of "users" that have integer IDs
 *  ;; from 0...N-1, but are in a random order
 *  (gen/let [users (gen/list (gen/hash-map :name gen/string-ascii
 *                                          :age gen/nat))]
 *    (->> users
 *         (map #(assoc %2 :id %1) (range))
 *         (gen/shuffle)))
 */
clojure.test.check.generators.let$ = (function clojure$test$check$generators$let(var_args){
var args__4502__auto__ = [];
var len__4499__auto___8124 = arguments.length;
var i__4500__auto___8125 = (0);
while(true){
if((i__4500__auto___8125 < len__4499__auto___8124)){
args__4502__auto__.push((arguments[i__4500__auto___8125]));

var G__8126 = (i__4500__auto___8125 + (1));
i__4500__auto___8125 = G__8126;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return clojure.test.check.generators.let$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

clojure.test.check.generators.let$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if(cljs.core.vector_QMARK_(bindings)){
} else {
throw (new Error(["Assert failed: ","First arg to gen/let must be a vector of bindings.","\n","(vector? bindings)"].join('')));
}

if(cljs.core.even_QMARK_(cljs.core.count(bindings))){
} else {
throw (new Error(["Assert failed: ","gen/let requires an even number of forms in binding vector","\n","(even? (count bindings))"].join('')));
}

if(cljs.core.empty_QMARK_(bindings)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$val__8115__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$do,null,(1),null)),body))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$if,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$clojure$test$check$generators_SLASH_generator_QMARK_,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$val__8115__auto__,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$val__8115__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$clojure$test$check$generators_SLASH_return,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$val__8115__auto__,null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))));
} else {
var vec__8120 = bindings;
var seq__8121 = cljs.core.seq(vec__8120);
var first__8122 = cljs.core.first(seq__8121);
var seq__8121__$1 = cljs.core.next(seq__8121);
var binding = first__8122;
var first__8122__$1 = cljs.core.first(seq__8121__$1);
var seq__8121__$2 = cljs.core.next(seq__8121__$1);
var gen = first__8122__$1;
var more = seq__8121__$2;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$clojure$test$check$generators_SLASH_bind,null,(1),null)),(new cljs.core.List(null,gen,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_fn,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,binding,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$clojure$test$check$generators_SLASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(more)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
}
});

clojure.test.check.generators.let$.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
clojure.test.check.generators.let$.cljs$lang$applyTo = (function (seq8116){
var G__8117 = cljs.core.first(seq8116);
var seq8116__$1 = cljs.core.next(seq8116);
var G__8118 = cljs.core.first(seq8116__$1);
var seq8116__$2 = cljs.core.next(seq8116__$1);
var G__8119 = cljs.core.first(seq8116__$2);
var seq8116__$3 = cljs.core.next(seq8116__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8117,G__8118,G__8119,seq8116__$3);
});

return null;
})()
;
clojure.test.check.generators.let$.cljs$lang$macro = true;

