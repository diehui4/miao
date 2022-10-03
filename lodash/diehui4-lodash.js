var diehui4 = {
  chunk: function (array, size) {
    var result = []
    var index = 0
    for (var i = 0; i < array.length - 1; i++) {
      if (!array[index]) {
        return result
      }
      result[i] = []
      for (var j = 0; j < size; j++) {
        if (!array[index]) {
          return result
        }
        result[i][j] = array[index]
        index++
      }
    }
  },
  compact: function (array) {
    var result = []
    for (var i = 0; i < array.length; i++) {
      if (array[i]) {
        result.push(array[i])
      }
    }
    return result
  },
  concat: function () {
    var result = arguments[0]
    for (var i = 1; i < arguments.length; i++) {
      if (Array.isArray(arguments[i])) {
        for (var j = 0; j < arguments[i].length; j++) {
          result.push(arguments[i][j])
        }
      } else {
        result.push(arguments[i])
      }
    }
    return result
  },
  difference: function () {
    var result = []
    var map = {}
    for (var i = 1; i < arguments.length; i++) {
      for (var j = 0; j < arguments[i].length; j++) {
        if (!(arguments[i][j] in map)) {
          map[arguments[i][j]] = arguments[i][j]
        }
      }
    }
    for (var i = 0; i < arguments[0].length; i++) {
      if (!(arguments[0][i] in map)) {
        result.push(arguments[0][i])
      }
    }
    return result
  },
  drop: function (array, n = 1) {
    var result = []
    for (var i = n; i < array.length; i++) {
      result.push(array[i])
    }
    return result
  },
  dropRight: function (array, n = 1) {
    var result = []
    for (var i = 0; i < array.length - n; i++) {
      result.push(array[i])
    }
    return result
  },
  fill: function (array, value, start = 0, end = array.length) {
    for (var i = start; i < end; i++) {
      array[i] = value
    }
    return array
  },
  findIndex: function (array, predicate, fromIndex = 0) {
    if (typeof (predicate) === 'function') {
      for (var i = fromIndex; i < array.length; i++) {
        if (predicate(array[i])) {
          return i
        }
      }
    }
    if (typeof (predicate) === 'object') {
      for (var i = fromIndex; i < array.length; i++) {
        var map = array[i]
        var istrue = true
        for (var k in map) {
          if (map[k] != predicate[k]) {
            istrue = false
          }
        }
        for (var k in predicate) {
          if (map[k] != predicate[k]) {
            istrue = false
          }
        }
        if (istrue) {
          return i
        }
      }
    }
    if (Array.isArray(predicate)) {
      for (var i = fromIndex; i < array.length; i++) {
        if (predicate[0] in array[i] && predicate[1] == array[i][predicate[0]]) {
          return i
        }
      }
    }
    if (typeof (predicate) === 'string') {
      for (var i = fromIndex; i < array.length; i++) {
        if (array[i][predicate]) {
          return i
        }
      }
    }
    return -1
  },
  findLastIndex: function (array, predicate, fromIndex = array.length - 1) {
    if (typeof (predicate) === 'function') {
      for (var i = fromIndex; i >= 0; i--) {
        if (predicate(array[i])) {
          return i
        }
      }
    }
    if (typeof (predicate) === 'object') {
      for (var i = fromIndex; i >= 0; i--) {
        var map = array[i]
        for (var k in map) {
          if (k in predicate && map[k] == predicate[k]) {
            return i
          }
        }
      }
    }
    if (Array.isArray(predicate)) {
      for (var i = fromIndex; i >= 0; i--) {
        if (predicate[0] in array[i] && predicate[1] == array[i][predicate[0]]) {
          return i
        }
      }
    }
    if (typeof (predicate) === 'string') {
      for (var i = fromIndex; i >= 0; i--) {
        if (array[i][predicate]) {
          return i
        }
      }
    }
    return -1
  },
  flatten: function (array) {
    var result = []
    for (var i = 0; i < array.length; i++) {
      if (Array.isArray(array[i])) {
        for (var j = 0; j < array[i].length; j++) {
          result.push(array[i][j])
        }
      } else {
        result.push(array[i])
      }
    }
    return result
  },
  flattenDeep: function (array) {
    var result = []
    function flattenDeep(array) {
      for (var i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
          flattenDeep(array[i])
        } else {
          result.push(array[i])
        }
      }
    }
    flattenDeep(array)
    return result
  },
  flattenDepth: function flattenDepth(array, depth = 1) {
    var result = []
    for (var i = 0; i < array.length; i++) {
      if (Array.isArray(array[i]) && depth > 0) {
        result = result.concat(flattenDepth(array[i], depth - 1))
      } else {
        result.push(array[i])
      }
    }
    return result
  },
  fromPairs: function (array) {
    var map = {}
    for (var i = 0; i < array.length; i++) {
      map[array[i][0]] = array[i][1]
    }
    return map
  },
  head: function (array) {
    return array[0]
  },
  indexOf: function (array, value, fromIndex = 0) {
    for (var i = fromIndex; i < array.length; i++) {
      if (array[i] == value) {
        return i
      }
    }
    return -1
  },
  initial: function (array) {
    return array.slice(0, array.length - 1)
  },
  intersection: function () {
    var map = {}
    let ary = []
    if (arguments.length == 1) {
      return arguments[0]
    }
    if (arguments.length == 0) {
      return ary
    }
    for (var i = 0; i < arguments.length; i++) {
      for (var j = 0; j < arguments[i].length; j++) {
        if (!(arguments[i][j] in map)) {
          map[arguments[i][j]] = 1
        } else if (arguments[i].indexOf(arguments[i][j]) == j) {
          map[arguments[i][j]]++
        }
      }
    }
    for (var k in map) {
      if (map[k] == arguments.length) {
        ary.push(Number(k))
      }
    }
    return ary
  },
  lastIndexOf: function (array, value, fromIndex = array.length - 1) {
    for (var i = fromIndex; i >= 0; i--) {
      if (array[i] == value) {
        return i
      }
    }
    return -1
  },
  join: function (array, separator = ',') {
    let str = ''
    for (let i = 0; i < array.length; i++) {
      if (i != array.length - 1) {
        str += '' + array[i] + separator
      } else {
        str += array[i]
      }
    }
    return str
  },
  last: function (array) {
    return array[array.length - 1]
  },
  pull: function () {
    var ary = arguments[0]
    var map = {}
    for (var i = 1; i < arguments.length; i++) {
      map[arguments[i]] = 0
    }
    let count = 0
    for (let i = 0, j = ary.length - 1; i <= j;) {
      if (ary[i] in map) {
        let temp = ary[i]
        ary[i] = ary[j]
        ary[j] = temp
        j--
        count++
      } else {
        i++
      }
    }
    while (count) {
      ary.pop()
      count--
    }
    return ary
  },
  pullAll: function (array, values) {
    var map = {}
    for (var i = 0; i < values.length; i++) {
      map[values[i]] = 0
    }
    let count = 0
    for (let i = 0, j = array.length - 1; i <= j;) {
      if (array[i] in map) {
        let temp = array[i]
        array[i] = array[j]
        array[j] = temp
        j--
        count++
      } else {
        i++
      }
    }
    while (count) {
      array.pop()
      count--
    }
    return array
  },
  reverse: function (ary) {
    if (ary.length < 2) {
      return ary
    }
    for (let i = 0, j = ary.length - 1; i < j; i++, j--) {
      [ary[i], ary[j]] = [ary[j], ary[i]]
    }
    return ary
  },
  every(collection, action) {
    if (action === Boolean) {
      for (let k of collection) {
        if (!k) {
          return false
        }
      }
    }
    if (typeof (action) === 'object') {
      for (let i = 0; i < collection.length; i++) {
        for (let k in collection[i]) {
          if (k in action && action[k] != collection[i][k]) {
            return false
          }
        }
      }
    }
    if (Array.isArray(action)) {
      for (let i = 0; i < collection.length; i++) {
        if (collection[i][action[0]] != action[1]) {
          return false
        }
      }
    }
    if (typeof (action) === 'string') {
      for (let i = 0; i < collection.length; i++) {
        if (!collection[i].action) {
          return false
        }
      }
    }
    return true
  },
  some(collection, action) {
    if (action === Boolean) {
      for (let k of collection) {
        if (k) {
          return true
        }
      }
    }
    if (typeof (action) === 'object') {
      for (let i = 0; i < collection.length; i++) {
        let istrue = true
        for (let k in collection[i]) {
          if (k in action && action[k] != collection[i][k]) {
            istrue = false
          }
        }
        if (istrue) {
          return true
        }
      }
    }
    if (Array.isArray(action)) {
      for (let i = 0; i < collection.length; i++) {
        if (collection[i][action[0]] == action[1]) {
          return true
        }
      }
    }
    if (typeof (action) === 'string') {
      for (let i = 0; i < collection.length; i++) {
        if (collection[i][action]) {
          return true
        }
      }
    }
    return false
  },
  countBy(collection, action) {
    let obj = {}
    if (typeof (action) === 'function') {
      collection.forEach(element => {
        if (!(action(element) in obj)) {
          obj[action(element)] = 1
        } else {
          obj[action(element)]++
        }
      });
      return obj
    }
    if (typeof (action) === 'string') {
      collection.forEach(it => {
        if (!(it[action] in obj)) {
          obj[it[action]] = 1
        } else {
          obj[it[action]]++
        }
      })
      return obj
    }
  },
  groupBy(collection, action) {
    let obj = {}
    if (typeof (action) === 'function') {
      collection.forEach(element => {
        if (!(action(element) in obj)) {
          obj[action(element)] = []
        }
        obj[action(element)].push(element)

      });
      return obj
    }
    if (typeof (action) === 'string') {
      collection.forEach(it => {
        if (!(it[action] in obj)) {
          obj[it[action]] = []
        }
        obj[it[action]].push(it)
      })
      return obj
    }
  },
  keyBy(array, action) {
    let obj = {}
    if (typeof (action) === 'function') {
      for (const k of array) {
        obj[action(k)] = k
      }
      return obj
    }
    if (typeof (action) === 'string') {
      for (const k of array) {
        obj[k[action]] = k
      }
      return obj
    }
  },
  forEach(collection, action) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        action(collection[i], i, collection)
      }
    }
    if (typeof (collection) === 'object') {
      for (let k in collection) {
        action(collection[k], k, collection)
      }
    }
    return collection
  },
  map(collection, action) {
    let ary = []
    if (Array.isArray(collection) && typeof (action) === 'function') {
      for (let i = 0; i < collection.length; i++) {
        ary.push(action(collection[i], i, collection))
      }
    } else if (typeof (collection) === 'object' && typeof (action) === 'function') {
      for (let k in collection) {
        ary.push(action(collection[k], k, collection))
      }
    } else if (Array.isArray(collection) && typeof (action) === 'string') {
      let a = action.split('.')
      for (let k of collection) {
        let target = k
        for (let j of a) {
          target = target[j]
        }
        ary.push(target)
      }
    }
    return ary
  },
  filter(collection, action) {
    let ary = []
    if (typeof action === 'function') {
      for (let k of collection) {
        if (action(k)) {
          ary.push(k)
        }
      }
    } else if (Array.isArray(action)) {
      for (let k of collection) {
        let istrue = true
        for (let i = 0; i < action.length; i += 2) {
          if (action[i] in k && k[action[i]] !== action[i + 1]) {
            istrue = false
          }
        }
        if (istrue) {
          ary.push(k)
        }
      }
    } else if (typeof action === 'string') {
      for (let k of collection) {
        if (k[action]) {
          ary.push(k)
        }
      }
    } else {
      for (let k of collection) {
        let istrue = true
        for (let j in action) {
          if (j in k && k[j] != action[j]) {
            istrue = false
          }
        }
        if (istrue) {
          ary.push(k)
        }
      }
    }
    return ary
  },
  reduce(collection, action, accumulator) {
    if (Array.isArray(collection)) {
      if (!accumulator) {
        accumulator = 0
      }
      for (let k of collection) {
        accumulator = action(accumulator, k, collection)
      }
    } else if (typeof collection === 'object') {
      for (let k in collection) {
        accumulator = action(accumulator, collection[k], k)
      }
    }
    return accumulator
  },
  reduceRight(collection, action, accumulator) {
    if (Array.isArray(collection)) {
      for (let k = collection.length - 1; k >= 0; k--) {
        accumulator = action(accumulator, collection[k], collection)
      }
    }
    return accumulator
  },
  size(collection) {
    if (Array.isArray(collection) || typeof collection === 'string') {
      return collection.length
    }
    if (typeof collection === 'object') {
      let count = 0
      for (let k in collection) {
        count++
      }
      return count
    }
  },
  sortBy(collection, action) {
    for (let j = 0; j < action.length; j++) {
      if (typeof action[j] === 'function') {
        for (let i = 1; i < collection.length; i++) {
          for (let k = 0; k < collection.length - i; k++) {
            if (action[j](collection[k]) > action[j](collection[k + 1])) {
              [collection[k], collection[k + 1]] = [collection[k + 1], collection[k]]
            }
          }
        }
      }
      if (typeof action[j] === 'string') {
        for (let i = 1; i < collection.length; i++) {
          for (let k = 0; k < collection.length - i; k++) {
            if (collection[k][action[j]] > collection[k + 1][action[j]]) {
              [collection[k], collection[k + 1]] = [collection[k + 1], collection[k]]
            }
          }
        }
      }
    }
    return collection
  },
  sample(collection) {
    return collection[Math.floor(Math.random() * collection.length)]
  },
  isUndefined(val) {
    if (val === undefined) {
      return true
    }
    return false
  },
  isNaN(val) {
    if (val === undefined) {
      return false
    }
    if (val.__proto__ === Number.prototype && (val.toString() === 'NaN')) {
      return true
    }
    return false
  },
  isNull(val) {
    return val === null
  },
  isNil(val) {
    return this.isNull(val) || this.isUndefined(val)
  },
  max(array) {
    let max = array[0]
    for (let k of array) {
      if (k > max) {
        max = k
      }
    }
    return max
  },
  mix(array) {
    let min = array[0]
    for (let k of array) {
      if (k < min) {
        min = k
      }
    }
    return min
  },
  sum(array) {
    let result = 0
    for (let k of array) {
      result += k
    }
    return result
  },
  sumBy(array, iteratee) {
    let result = 0
    for (let k of array) {
      result += iteratee(k)
    }
    return result
  },

  dealFunction(val) {
    return val
  },
  property(val) {
    return function (obj) {
      return obj[val]
    }
  },
  matchesProperty(array) {
    let [key, val] = array
    return function (obj) {
      return obj[key] == val
    }

  },
  matches(target) {
    return function (obj) {
      for (let k in obj) {
        if (!(k in target) || obj[k] != target[k]) {
          return false
        }
      }
      return true
    }
  },
  iteratee(action) {
    if (typeof action === 'function') {
      return this.dealFunction(action)
    }
    if (typeof action === 'string') {
      return this.property(action)
    }
    if (Array.isArray(action)) {
      return this.matchesProperty(action)
    }
    if (typeof action === 'object') {
      return this.matches(action)
    }
  },
  differenceBy(array, ...values) {
    let ary = [...values]
    let length = ary.length
    if (Array.isArray(ary[length - 1])) {
      var action = it => it
    } else {
      action = this.iteratee(ary[length - 1])
      length = length - 1
    }
    let map = new Map()
    let result = []
    for (let i = 0; i < length; i++) {
      for (let k of ary[i]) {
        if (!map.has(action(k))) {
          map.set(action(k), k)
        }
      }
    }
    for (let k of array) {
      if (!map.has(action(k))) {
        result.push(k)
      }
    }
    return result
  },
  differenceWith(array, ...val) {
    return this.differenceBy(array, ...val)
  }
}
