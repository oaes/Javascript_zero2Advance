//function composition of functional javascript. when first function receive the second function output as a input then we call it function composition.

function poor(print){
    console.log(print);
}
function multiply(n){
    return n * 5
}
function addition(a,b){
    return a+b
}

poor(multiply(addition(5,5)))