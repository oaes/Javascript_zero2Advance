//undefined is a global variable which represents the non-existence of data. When you attempt to access a key on an Object which does not exist, the result will be undefined.
//The undefined property indicates that a variable has not been assigned a value, or not declared at all.
false === undefined; // false
//console.log(b);

 ({ a: "b" }["otherkey"] === undefined); // true
//console.log(c)

var b = undefined ;
var d = 3
var e = b + d
// console.log(e)
console.log(b)
var c = null
console.log(c)