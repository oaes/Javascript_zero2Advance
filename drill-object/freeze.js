// Object.freeze() Method
// Among the Object constructor methods, there is a method Object.freeze() which is used to freeze an object. Freezing an object does not allow new properties to be added to an object and prevents from removing or altering the existing properties. Object.freeze() preserves the enumerability, configurability, writability and the prototype of the object. It returns the passed object and does not create a frozen copy.

// Applications:

// Object.freeze() is used for freezing objects and arrays.
// Object.freeze() is used to make an object immutable.

var one = {one:2}
var two = {tow:3}
var c = Object.freeze(two)
c.tow = 9;
console.log(c)