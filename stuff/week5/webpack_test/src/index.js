
var sum = function(a, b){
  if (isNaN(a) || isNaN(b)) {
    return 'no sumes peras con manzanas.';
  }

  return parseInt(a) + parseInt(b);
}

var subs = function(a, b) {
  return a - b;
}

exports.sum = sum;
exports.subs = subs;


