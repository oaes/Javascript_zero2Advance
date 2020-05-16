//The Object.seal() method seals an object, preventing new properties from being added to it and marking all existing properties as non-configurable. Values of present properties can still be changed as long as they are writable.

var num = {id: 33}
console.log(Object.seal(num));
num.id = 50;
console.log(num);

