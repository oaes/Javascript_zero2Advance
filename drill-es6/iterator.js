// to iterate an  array or object in es6 we have 'symbol.iterator' to iterate thisiterateArray.iterateArray

const myArr = [1, 2, 3];

let iterateArray = myArr[Symbol.iterator]();

console.log(iterateArray.next());
console.log(iterateArray.next());
console.log(iterateArray.next());

const myStr = "love";

let iterateStr = myStr[Symbol.iterator]();

console.log(iterateStr.next());
console.log(iterateStr.next());
console.log(iterateStr.next());
console.log(iterateStr.next());
