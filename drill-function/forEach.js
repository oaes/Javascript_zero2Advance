//forEach in javascript

var arr = [1, 2, 3, 4, 5];

//array traverse by build in function
arr.forEach(function (value, index, array) {
  console.log(value, index, array);
});

//array traverse with manual way or raw way
function traverse(arr, cb) {
  for (var i = 0; i < arr.length; i++) {
    cb(arr[i], i, arr);
  }
}
var sum = 0;
traverse(arr, function (value) {
  // console.log(value,index,array);
  sum += value;
});

console.log(sum);
