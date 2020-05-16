//object.assign() copies all enumerable own properties from one or more source objects to a target object. It returns the target object...Among the Object constructor methods, there is a method Object.assign() which is used to copy the values and properties from one or more source objects to a target object. It invokes getters and setters since it uses both [[Get]] on the source and [[Set]] on the target. It returns the target object which has properties and values copied from the target object. Object.assign() does not throw on null or undefined source values.
// Applications:

// Object.assign() is used for cloning an object.
// Object.assign() is used to merge object with same properties.

var one= {a:3}
var two={b:4}
var three={c:5}
var newOne = Object.assign(one,two)
console.log(newOne);