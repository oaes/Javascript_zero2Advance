//filter function in javascript
//it creates new array without changing the real array by filtered many thins

var arr = [1, 2, 3, 4, 5, 6, 7, 8];

//with built in function
var text1 = arr.filter(function (value, index, arr) {
  return value % 2 == 0;
});
console.log(text1);

//without built in function
var arr2 = [13, 34, 32, 56, 43, 78, 43];

function test2(arr2) {
  var newArr = [];
  for (var i = 0; i < arr2.length; i++) {
    if (arr2[i] % 2 == 0) {
      newArr.push(arr2[i]);
    }
  }
  return newArr;
}
console.log(test2(arr2));

//multiple usage

var arr3 = [1, 2, 4, 5, 44, 32, 23, 56, 21, 75];

function test3(arr3, cb) {
  var newArr2 = [];
  for (var i = 0; i < arr3.length; i++) {
    if (cb(arr3[i], i, arr3)) {
      newArr2.push(arr3[i]);
    }
  }
  return newArr2;
}
console.log(
  test3(arr3, function (value) {
    return value % 2 == 1;
  })
);
console.log(
  test3(arr3, function (value) {
    return value < 5;
  })
);
console.log(
  test3(arr3, function (value) {
    return value % 2 == 0;
  })
);
