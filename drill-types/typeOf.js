//The typeof operator returns a string that indicates the JavaScript type for a given value.

var a = 5;
var b = '9'
var d =  [33,33,43]
var e = false
var f = {name:'akash'}
console.log(typeof a);
console.log(typeof d);
console.log(typeof e);
console.log(typeof f);
console.log(typeof b);


//In order to check the type of an object, it is highly recommended to use "Object.prototype.toString" because this is the only reliable way of doing so. As shown in the above type table, some return values of typeof are not defined in the specification; thus, they can differ between implementations.Unless checking whether a variable is defined, typeof should be avoided.

function is(type, obj) {
    var rose = Object.prototype.toString.call(obj).slice(8, -1);
    return obj !== undefined && obj !== null && rose === type;
}

is('String', 'test'); // true
is('String', new String('test')); // true