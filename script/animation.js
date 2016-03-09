(function(){
  var container = document.getElementsByClassName('array__inner')[0],
      array = ArrayUtils.generateArray();

  ArrayDrawer.init(container, array);
  ArraySorter.init(array);

  document.getElementById('startAnimation').addEventListener('click', function(e) {
        ArraySorter.sort();
        e.target.classList.add('hidden');
      });
})();
