var ArrayUtils = (function() {
  var MAX_NUMBER = 20,
      MIN_LENGTH = 5,
      MAX_LENGTH = 10;

  return ({
    swap: function(array, i, j) {
      var buf = array[i];
      array[i] = array[j];
      array[j] = buf;
    },
    generateArray: function() {
      var array = [],
          length = Math.floor(Math.random()*(MAX_LENGTH - MIN_LENGTH + 1) + MIN_LENGTH);
      for (var i = 0; i < length; i++) {
        array[i] = Math.floor(Math.random()*(MAX_NUMBER + 1));
      }
      return array;
    }
  });
})();