var ArraySorter = {
  init: function(array) {
    this.state = {
      array: array,
      length: array.length,
      i: 0,
      j: array.length - 1
    };
  },
  sort: function() {
    var state = this.state;

    var outerSort = function outerSort() {
      if (state.i < state.length) {
        if (state.j > state.i) {
          if (state.array[state.j - 1] > state.array[state.j]) {
            ArrayDrawer.swapElements(state, state.j - 1, state.j, outerSort);
          }
          else {
            state.j--;
            outerSort();
          }
        }
        else {
          state.i++;
          state.j = state.length - 1;
          outerSort();
        }
      }
    };

    outerSort();
  }
};