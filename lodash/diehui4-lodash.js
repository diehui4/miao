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
    let separator = separator + ''
    for (let i = 0; i < array.length; i++) {
      if (i != array.length - 1) {
        str += array[i] + separator
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
}
