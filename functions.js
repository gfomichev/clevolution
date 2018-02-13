//Object iteration, thanks to github.com/crossjs
Object.prototype.forEach = function(fn) {
  var object = this, returned;

  Object.keys(object).forEach(function(key) {
    if (returned === false) {
      return;
    }

    returned = fn.call(null, object[key], key, object);
  });
};

function getByElement(array = Heroes, element) {
    var b = {};
    Object.keys(array).filter(hell => array[hell].element == element.toLowerCase()).forEach(el => {
        b[el] = a[el];
    })
    return b;
}
