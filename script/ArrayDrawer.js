var ArrayDrawer = (function() {
  var ELEMENT = 'array__item',
      ELEMENT_ACTIVE = 'array__item--active',
      ELEMENT_SIZE = 45,
      TIMEOUT = 1300;

  var utils = {
    randomLeft: function() {
      return Math.floor(Math.random() * 20) - 10;
    },
    randomDuration: function() {
      return (Math.random() * 3  + 2);
    },
    renderElement: function(item, idx) {
      var top = 'top:' + (ELEMENT_SIZE * idx) + 'px',
          left = 'left:' + this.randomLeft() + 'px',
          duration = 'animation-duration:' + this.randomDuration() + 's';

      return (
        '<div class="' + ELEMENT + '"style="' +
        [top, left, duration].join(';') + '">' + item + '</div>'
      );
    },
    renderArray: function(array) {
      var self = this;
      return array.reduce(function(html, currentValue, idx) {
        return html + self.renderElement(currentValue, idx);
      }, '');
    }
  };

  return ({
    init: function(container, array) {
      container.style.height = array.length * ELEMENT_SIZE + 'px';
      container.innerHTML = utils.renderArray(array);
      this.elements = container.getElementsByClassName(ELEMENT);
    },
    makeElementActive: function(idx) {
      this.elements[idx].classList.add(ELEMENT_ACTIVE);
    },
    makeElementInactive: function(idx) {
      this.elements[idx].classList.remove(ELEMENT_ACTIVE);
    },
    swapElements: function(state, callback) {
      var self = this,
          i = state.j - 1,
          j = state.j,
          elementI = this.elements[i],
          elementJ = this.elements[j],
          step = 0;

      function innerSort() {
        var nextCall;

        switch(step) {
          case 0:
            self.makeElementActive(i);
            self.makeElementActive(j);
            elementJ.style.left = (parseInt(elementJ.style.left) - 30) + 'px';
            elementI.style.left = (parseInt(elementI.style.left) + 30) + 'px';
            break;
          case 1:
            elementJ.style.top = elementI.offsetTop + 'px';
            elementI.style.top = elementJ.offsetTop + 'px';
            break;
          case 2:
            elementJ.style.left = utils.randomLeft() + 'px';
            elementI.style.left = utils.randomLeft() + 'px';
            break;
          case 3:
            elementI.parentNode.insertBefore(elementJ, elementI);
            self.makeElementInactive(i);
            self.makeElementInactive(j);
            ArrayUtils.swap(state.array, i, j);
            break;
        }
        if (step < 3) {
          step++;
          nextCall = innerSort;
        }
        else {
          state.j--;
          nextCall = callback;
        }
        setTimeout(nextCall, TIMEOUT);
      }

      innerSort();
    }
  });
})();