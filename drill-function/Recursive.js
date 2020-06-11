//Recursive function in javascript, when a function call himself within his own then we call it recursive

function hello(n) {
  if (n === 0) {
    return;
  }
  console.log("good morning oaes");
  hello(n - 1);
}
hello(10);

//sum of 1-5 number

function sum(n) {
  if (n === 1) {
    return 1;
  }
  return n + sum(n - 1);
}
console.log(sum(100));

//factorial identify

function fact(n) {
  if (n === 1) {
    return 1;
  }
  return n * fact(n - 1);
}
console.log(fact(4));

//sum of array

var arr = [1, 2, 3, 4, 5];

function sumArr(arr, lastIndex) {
  if (lastIndex < 0) {
    return 0;
  }
  return arr[lastIndex] + sumArr(arr, lastIndex - 1);
}
console.log(sumArr(arr, arr.length - 1));
