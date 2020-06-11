//currying basically differentiate a function arguments in small pieces

function add(a, b, c) {
  return a + b + c;
}
var d = add(3, 4, 5);
console.log("without currying", " ", d);

function cAdd(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}
var m = cAdd(3)(2)(5);
console.log('using currying',' ',m);
