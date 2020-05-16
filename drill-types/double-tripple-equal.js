//== is known as equality or abstract comparison operator. this operator tests for abstract equality. it converts the variable values to the same type before performing comparison. This is called type coercion. only checked same value

var a = '';
var b = 0
var c= a == b
// console.log(typeof a)
// console.log(typeof b)
// console.log(c)
// console.log(typeof a)
// console.log(typeof b)

// === does not do any type conversion (coercion) and returns true only if both values and types are identical for the two variables being compared. checked both value and type

var a = 5;
var b = '5'
var c = a===b
console.log(c)