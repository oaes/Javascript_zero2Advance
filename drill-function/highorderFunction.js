// 5. we can pass function as an arguments 6. we can return functions from another function.

function add(a,b) {
    return a+b
}
console.log(add(8,8));

//we can pass function as an arguments
function alter(a,b,func) {
    var c = a-b
    var d = c + a

    return function(){
        var e = func(a,b);
        return c*d*e
    }
}

var multi = alter(4,5,add)
console.log(multi())