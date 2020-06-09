//Reduce methods of array. this doesn't create any new array. it provides us sum of the array

var arr = [1, 2, 3, 4, 5];

//with built in methods
var newArr = arr.reduce(function (pre, curr) {
  return pre + curr;
}, 0);
console.log(newArr);

var max2 = arr.reduce(function (pre, curr) {
  return Math.max(pre, curr);
}, 0);

var min2 = arr.reduce(function (pre, curr) {
  return Math.min(pre, curr);
}, );

console.log(max2, min2);

//without built in methods
function anReduce(arr, cb, acc) {
  for (var i = 0; i < arr.length; i++) {
    acc = cb(acc, arr[i]);
  }
  return acc;
}

var sum = anReduce(
  arr,
  function (pre, curr) {
    return pre + curr;
  },
  100
);

var max = anReduce(
  arr,
  function (pre, curr) {
    return Math.max(pre, curr);
  },
  0
);

var min = anReduce(
  arr,
  function (pre, curr) {
    return Math.min(pre, curr);
  },
  arr[0]
);

console.log(sum, max, min);
