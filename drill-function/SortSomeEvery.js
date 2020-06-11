//sort some and every commonly used array function in javascript

var arrObj = [
  {
    name: "a",
    age: 21,
  },
  {
    name: "b",
    age: 22,
  },
  {
    name: "c",
    age: 18,
  },
  {
    name: "d",
    age: 15,
  },
];

var arr = [1, 2, 3, 4, -3, 7, 6, -8, 8, 9, 5, 0, -1];

arr.sort(); // works fine for positive value but not working with negative value
console.log(arr);

arrObj.sort(); //works fine with name order but not working with age order
console.log(arrObj);

//callback function with built in sort() function

var res1 = arr.sort(function (a, b) {
  if (a > b) {
    return 1;
  } else if (b > a) {
    return -1;
  } else {
    return 0;
  }
});
console.log(res1);

var res2 = arrObj.sort(function (a, b) {
  if (a.age > b.age) {
    return 1;
  } else if (b.age > a.age) {
    return -1;
  } else {
    return 0;
  }
});
console.log(res2);

//every() function

var arr2 = [1, 2, 3, 4, 7, 6, 8, 9, 5];

var res3 = arr2.every(function (value) {
  return value % 2 === 0;
});
console.log(res3);

var res3a = arr2.every(function (value) {
  return value >= 0;
});
console.log(res3a);

//some() find at least one negative or odd number within the array
var arr3 = [ 2, 4, 6, 8,-1,-2];

var res4 = arr3.some(function(value){
    return value % 2 === 1;
})
console.log(res4)

var res4a = arr3.some(function(value){
    return value < 0;
})
console.log(res4a);
