// find and findIndex function of an array

var arr = [1, 2, 3, 4, 5, 6];

var result = arr.find(function (value) {
  return value === 4;
});
console.log(result);

var result2 = arr.findIndex(function (value) {
  return value === 3;
});
console.log(result2);

//without built in function

function someFind(arr, cb) {
  for (var i = 0; i < arr.length; i++) {
    if (cb(arr[i])) {
      return i; //index and arr[i] for find
    }
  }
}

var noFind = someFind(arr, function (value) {
  return value === 3;
});

console.log(noFind);
