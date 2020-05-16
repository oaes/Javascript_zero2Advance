//return a floating point number, if a arguments is number the it returns numbers and if it is a string then it returns a number and if the number cannot float the number then it returns NaN. 
//converting variable to Number there are 3 methods in js they are...Number(),parseFloat() and parseInt()
var b = '333'//string
console.log(b);// expected a  string
var c = parseFloat(b)
console.log(c)//expected  a number

var n = 333.333
console.log(parseFloat(n))