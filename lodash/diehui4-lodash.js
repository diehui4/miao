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
  }
}
