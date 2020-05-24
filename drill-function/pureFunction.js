// pure function: it returns the same result if given the same arguments. 
// it does not cause any observable side effects.


function sqr(n) {
    return n*n
}

console.log(sqr(3));



// this is not a pure function because it effects the value of the num variable.
var num = 5;

function addNum() {
    num = 10
    return addNum
}

addNum()
console.log(num);