//first class function in javascript
//1. a function can be stored in a variable. 2. a function can be stored in a array. 3. a function can be stored in an object. 4. we can create function as need 5. we can pass function as an arguments 6. we can return functions from another function.

//function
function add(a,b) {
    return a+b
}
console.log(add(3,3));

// function can be stored in a variable
var func = add;
console.log(func(8,3));

//function can be stored in a array
var arr= [];
arr.push(add)
console.log(arr[0](9,3))

// function can be stored in an object
var obj = {
    sum : add
}
console.log(obj)
console.log(obj.sum(3,2));

//we can create function as need

setTimeout(function() {
    console.log('i am best');
}, 3000);