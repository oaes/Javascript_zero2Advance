//call back function in javascript

function add(a, b, cb) {
    var plus = a + b
    var minus = a - b
    var result = cb(plus, minus)
    return result;
}

function sum(a, b) {
    return a + b
}

var unknown = add(3, 8, sum)
console.log(unknown);

var final = add(5, 8, function (plus, minus) {
    return plus * minus;
})

console.log(final);