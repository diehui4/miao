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
    var result = arguments[0]
    for (var i = 0; i < array.length; i++) {
      var istrue = true
      for (var j = 0; j < values.length; j++) {
        if (array[i] == values[j]) {
          istrue = false
        }
      }
      if (istrue) {
        result.push(array[i])
      }
    }
    return result
  }
}
