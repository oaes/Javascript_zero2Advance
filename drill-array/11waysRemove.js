//11 ways to removing an elements from a js array
//Removing Elements from Beginning of a JavaScript Array

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

numbers.shift();
//console.log(numbers);

//Removing Elements from end of a JavaScript Array

const numbers1 = [1, 2, 3, 4, 5];
numbers1.pop();
//console.log(numbers1);

//decreasing the length of an array
const numbers2 = [1, 2, 3, 4, 5, 6, 7];
numbers2.length = numbers.length - 1;
//console.log(numbers2);

//splice using index

let number3 = [1, 2, 3, 4, 5, 6, 7, 8];
number3.splice(2, 2);
//console.log(number3);

//splice() with value
let numbers5 = [1, 2, 3, 4, 5, 6, 7, 8];
const toBeDeleted = 5;
for (let i = 0; i < numbers5.length; i++) {
  if (numbers5[i] === toBeDeleted) {
    numbers5.splice(i, 1);
  }
}
//console.log(numbers5);

//using filter method
let numbers6 = [1, 2, 3, 4, 5, 6, 7];
let toBeDeleted1 = 5;
numbers6 = numbers6.filter((item) => item !== toBeDeleted1);
//console.log(numbers6);

//using delete operator

let numbers7 = [1, 2, 3, 4, 5];
delete numbers7[1];
//console.log(numbers7);

//reset the whole array

let x = [2, 3, 4];
let y = x;
x.length = 0;
//console.log(x, y);

//using while loop and pop methods

let m = [3, 4, 5];
while (m.length) m.pop();
//console.log(m);
