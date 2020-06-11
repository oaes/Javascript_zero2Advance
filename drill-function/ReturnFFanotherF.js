// returns a function from another function. this is a rule of higher order function

function base(b) {
  return function (n) {
    var result = 1;
    for (var i = 0; i < b; i++) {
      result *= n;
    }
    return result;
  };
}
var base10 = base(10);
console.log(base10(2));
console.log(base10(3));
console.log(base10(5));
