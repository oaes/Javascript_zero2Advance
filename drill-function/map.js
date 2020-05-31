//Map function in javascript
//it creates a  new array from without modifying the existing array

var arr = [1, 2, 3, 4];

//with built in map function
var str = arr.map(function (value) {
  return Math.random() * 100;
});

console.log(arr);
console.log(str);

//without built in map function

var arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function sqr(arr2) {
  var newArray = [];
  for (var i = 0; i < arr2.length; i++) {
    var temp = arr2[i] * arr2[i];
    newArray.push(temp);
  }
  return newArray;
}

console.log(sqr(arr2));

//for multiple tasking

var arr3 = [2, 4, 6, 8];

function ex(arr3, cb) {
  var mArr = [];
  for (var i = 0; i < arr3.length; i++) {
    var tempo = cb(arr3[i]);
    mArr.push(tempo);
  }
  return mArr;
}

var trying = ex(arr3, function (value) {
  return value + 20;
});

var gunThree = ex(arr3, function (value) {
  return value * 3;
});


console.log(arr3);
console.log(trying);
console.log(gunThree);