//Type casting allows you to access a specific value as if it were of a different type. Three type casts are available in JavaScript: Boolean(value) – casts the given value as a Boolean. Number(value) – casts the given value as a number (either integer or floating-point) String(value) – casts the given value a string. "simply," Converting a data type into another is known as type casting. Sometimes there is a need to convert the data type of one value to another.

// For example you might want to convert:

// a number to a string
// a string to a number
// a string to a boolean
// a boolean to a string

//Casting from number to string
//Use the String global function, or the Number type toString() method:
var a = 10
console.log('before' + ' ' + typeof a)
 var b = String(10)
 console.log('after' + ' ' + typeof b);
 var c = 10
 console.log('before' + ' ' + typeof c)
 var d =(10).toString()
console.log('after' + ' ' + typeof d)


//Casting from boolean to string
//Use the String global function, or the Boolean type toString() method:

var a = true
console.log('before' + ' ' + typeof a)
var b = toString(true)
console.log('after' + ' ' + typeof b)

//Casting from date to string
//Use the String global function, or the Date type toString() method:

var a  = new Date('30-04-2020')
console.log('before' + ' ' + typeof a)
var b = toString(new Date('30-4-2020'))
console.log('after' + ' ' + typeof b)

//Special cases with string
console.log(String(null))
console.log(String(undefined))
console.log(String(NaN))

//Casting from string to number
// by using the Number() and (+) unary operator

var a = '20'
console.log('before' + ' ' + typeof a)
var b = Number(a)
var c = + '20'
console.log('after'+ ' '+ typeof c)
console.log('after' + ' ' + typeof b)

//Casting from boolean to number
// by using the Number() and the true returns 1 and false return 0

var a   = true
console.log('before'+ ' ' + typeof a)
var b = Number(a)
console.log(b)
console.log('after' + ' ' + typeof b)

var c = false
console.log('before' + ' ' + typeof c)
var d = Number(c)
console.log(d)
console.log('after'+ ' ' + typeof d)

// Casting to a Boolean
// by using Boolean() and also "!! not operator twice"

var a = 'fpp'
console.log('before' + ' '+ a)
var b = Boolean(a)
console.log('after'+ ' ' + b)
var c = !! 'fpp'
console.log('after' + ' ' + c)