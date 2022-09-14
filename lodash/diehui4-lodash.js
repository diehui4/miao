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
  }
}
