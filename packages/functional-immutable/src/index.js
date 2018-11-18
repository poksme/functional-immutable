import Immutable from 'immutable';

// Return function result or undefined
function safeApply(object, functionName, functionArgs) {
  if (object && typeof object === 'object' && Reflect.has(object, functionName)) {
    const functionToApply = Reflect.get(object, functionName);
    if (functionToApply && typeof functionToApply === 'function') {
      return Reflect.apply(functionToApply, object, functionArgs);
    }
  }
}

// Re-exported static Methods
export const fromJS = (...vargs) => safeApply(Immutable, 'fromJS', vargs);

// Methods as null-safe functions
// // Test covered
export const getIn = (...vargs) => data => safeApply(data, 'getIn', vargs);
export const get = (...vargs) => data => safeApply(data, 'get', vargs);
export const set = (...vargs) => data => safeApply(data, 'set', vargs);
export const toArray = (...vargs) => data => safeApply(data, 'toArray', vargs);
// // Not test covered
export const add = (...vargs) => data => safeApply(data, 'add', vargs);
export const asImmutable = (...vargs) => data => safeApply(data, 'asImmutable', vargs);
export const asMutable = (...vargs) => data => safeApply(data, 'asMutable', vargs);
export const butLast = (...vargs) => data => safeApply(data, 'butLast', vargs);
export const cacheResult = (...vargs) => data => safeApply(data, 'cacheResult', vargs);
export const clear = (...vargs) => data => safeApply(data, 'clear', vargs);
export const concat = (...vargs) => data => safeApply(data, 'concat', vargs);
export const count = (...vargs) => data => safeApply(data, 'count', vargs);
export const countBy = (...vargs) => data => safeApply(data, 'countBy', vargs);
export const deleteIn = (...vargs) => data => safeApply(data, 'deleteIn', vargs);
export const entries = (...vargs) => data => safeApply(data, 'entries', vargs);
export const entrySeq = (...vargs) => data => safeApply(data, 'entrySeq', vargs);
export const equals = (...vargs) => data => safeApply(data, 'equals', vargs);
export const every = (...vargs) => data => safeApply(data, 'every', vargs);
export const filter = (...vargs) => data => safeApply(data, 'filter', vargs);
export const filterNot = (...vargs) => data => safeApply(data, 'filterNot', vargs);
export const find = (...vargs) => data => safeApply(data, 'find', vargs);
export const findEntry = (...vargs) => data => safeApply(data, 'findEntry', vargs);
export const findIndex = (...vargs) => data => safeApply(data, 'findIndex', vargs);
export const findKey = (...vargs) => data => safeApply(data, 'findKey', vargs);
export const findLast = (...vargs) => data => safeApply(data, 'findLast', vargs);
export const findLastEntry = (...vargs) => data => safeApply(data, 'findLastEntry', vargs);
export const findLastIndex = (...vargs) => data => safeApply(data, 'findLastIndex', vargs);
export const findLastKey = (...vargs) => data => safeApply(data, 'findLastKey', vargs);
export const first = (...vargs) => data => safeApply(data, 'first', vargs);
export const flatMap = (...vargs) => data => safeApply(data, 'flatMap', vargs);
export const flatten = (...vargs) => data => safeApply(data, 'flatten', vargs);
export const flip = (...vargs) => data => safeApply(data, 'flip', vargs);
export const forEach = (...vargs) => data => safeApply(data, 'forEach', vargs);
export const fromEntrySeq = (...vargs) => data => safeApply(data, 'fromEntrySeq', vargs);
export const groupBy = (...vargs) => data => safeApply(data, 'groupBy', vargs);
export const has = (...vargs) => data => safeApply(data, 'has', vargs);
export const hashCode = (...vargs) => data => safeApply(data, 'hashCode', vargs);
export const hasIn = (...vargs) => data => safeApply(data, 'hasIn', vargs);
export const includes = (...vargs) => data => safeApply(data, 'includes', vargs);
export const indexOf = (...vargs) => data => safeApply(data, 'indexOf', vargs);
export const insert = (...vargs) => data => safeApply(data, 'insert', vargs);
export const interleave = (...vargs) => data => safeApply(data, 'interleave', vargs);
export const interpose = (...vargs) => data => safeApply(data, 'interpose', vargs);
export const intersect = (...vargs) => data => safeApply(data, 'intersect', vargs);
export const is = (...vargs) => data => safeApply(data, 'is', vargs);
export const isEmpty = (...vargs) => data => safeApply(data, 'isEmpty', vargs);
export const isSubset = (...vargs) => data => safeApply(data, 'isSubset', vargs);
export const isSuperset = (...vargs) => data => safeApply(data, 'isSuperset', vargs);
export const join = (...vargs) => data => safeApply(data, 'join', vargs);
export const keyOf = (...vargs) => data => safeApply(data, 'keyOf', vargs);
export const keys = (...vargs) => data => safeApply(data, 'keys', vargs);
export const keySeq = (...vargs) => data => safeApply(data, 'keySeq', vargs);
export const last = (...vargs) => data => safeApply(data, 'last', vargs);
export const lastIndexOf = (...vargs) => data => safeApply(data, 'lastIndexOf', vargs);
export const lastKeyOf = (...vargs) => data => safeApply(data, 'lastKeyOf', vargs);
export const map = (...vargs) => data => safeApply(data, 'map', vargs);
export const mapEntries = (...vargs) => data => safeApply(data, 'mapEntries', vargs);
export const mapKeys = (...vargs) => data => safeApply(data, 'mapKeys', vargs);
export const max = (...vargs) => data => safeApply(data, 'max', vargs);
export const maxBy = (...vargs) => data => safeApply(data, 'maxBy', vargs);
export const merge = (...vargs) => data => safeApply(data, 'merge', vargs);
export const mergeDeep = (...vargs) => data => safeApply(data, 'mergeDeep', vargs);
export const mergeDeepIn = (...vargs) => data => safeApply(data, 'mergeDeepIn', vargs);
export const mergeDeepWith = (...vargs) => data => safeApply(data, 'mergeDeepWith', vargs);
export const mergeIn = (...vargs) => data => safeApply(data, 'mergeIn', vargs);
export const mergeWith = (...vargs) => data => safeApply(data, 'mergeWith', vargs);
export const min = (...vargs) => data => safeApply(data, 'min', vargs);
export const minBy = (...vargs) => data => safeApply(data, 'minBy', vargs);
export const peek = (...vargs) => data => safeApply(data, 'peek', vargs);
export const pop = (...vargs) => data => safeApply(data, 'pop', vargs);
export const push = (...vargs) => data => safeApply(data, 'push', vargs);
export const pushAll = (...vargs) => data => safeApply(data, 'pushAll', vargs);
export const reduce = (...vargs) => data => safeApply(data, 'reduce', vargs);
export const reduceRight = (...vargs) => data => safeApply(data, 'reduceRight', vargs);
export const rest = (...vargs) => data => safeApply(data, 'rest', vargs);
export const reverse = (...vargs) => data => safeApply(data, 'reverse', vargs);
export const setIn = (...vargs) => data => safeApply(data, 'setIn', vargs);
export const setSize = (...vargs) => data => safeApply(data, 'setSize', vargs);
export const shift = (...vargs) => data => safeApply(data, 'shift', vargs);
export const skip = (...vargs) => data => safeApply(data, 'skip', vargs);
export const skipLast = (...vargs) => data => safeApply(data, 'skipLast', vargs);
export const skipUntil = (...vargs) => data => safeApply(data, 'skipUntil', vargs);
export const skipWhile = (...vargs) => data => safeApply(data, 'skipWhile', vargs);
export const slice = (...vargs) => data => safeApply(data, 'slice', vargs);
export const some = (...vargs) => data => safeApply(data, 'some', vargs);
export const sort = (...vargs) => data => safeApply(data, 'sort', vargs);
export const sortBy = (...vargs) => data => safeApply(data, 'sortBy', vargs);
export const splice = (...vargs) => data => safeApply(data, 'splice', vargs);
export const subtract = (...vargs) => data => safeApply(data, 'subtract', vargs);
export const take = (...vargs) => data => safeApply(data, 'take', vargs);
export const takeLast = (...vargs) => data => safeApply(data, 'takeLast', vargs);
export const takeUntil = (...vargs) => data => safeApply(data, 'takeUntil', vargs);
export const takeWhile = (...vargs) => data => safeApply(data, 'takeWhile', vargs);
export const toIndexedSeq = (...vargs) => data => safeApply(data, 'toIndexedSeq', vargs);
export const toJS = (...vargs) => data => safeApply(data, 'toJS', vargs);
export const toKeyedSeq = (...vargs) => data => safeApply(data, 'toKeyedSeq', vargs);
export const toList = (...vargs) => data => safeApply(data, 'toList', vargs);
export const toMap = (...vargs) => data => safeApply(data, 'toMap', vargs);
export const toObject = (...vargs) => data => safeApply(data, 'toObject', vargs);
export const toOrderedMap = (...vargs) => data => safeApply(data, 'toOrderedMap', vargs);
export const toOrderedSet = (...vargs) => data => safeApply(data, 'toOrderedSet', vargs);
export const toSeq = (...vargs) => data => safeApply(data, 'toSeq', vargs);
export const toSet = (...vargs) => data => safeApply(data, 'toSet', vargs);
export const toSetSeq = (...vargs) => data => safeApply(data, 'toSetSeq', vargs);
export const toStack = (...vargs) => data => safeApply(data, 'toStack', vargs);
export const union = (...vargs) => data => safeApply(data, 'union', vargs);
export const unshift = (...vargs) => data => safeApply(data, 'unshift', vargs);
export const unshiftAll = (...vargs) => data => safeApply(data, 'unshiftAll', vargs);
export const update = (...vargs) => data => safeApply(data, 'update', vargs);
export const updateIn = (...vargs) => data => safeApply(data, 'updateIn', vargs);
export const values = (...vargs) => data => safeApply(data, 'values', vargs);
export const valueSeq = (...vargs) => data => safeApply(data, 'valueSeq', vargs);
export const withMutations = (...vargs) => data => safeApply(data, 'withMutations', vargs);
export const zip = (...vargs) => data => safeApply(data, 'zip', vargs);
export const zipWith = (...vargs) => data => safeApply(data, 'zipWith', vargs);
// New api
export const deleteAt = (...vargs) => data => safeApply(data, 'delete', vargs);
