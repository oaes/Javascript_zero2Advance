//default parameter in ES6 function. if function doesn't provide any value then we can set a default value in the function arguments block

function name(n=7){
    return n+n
}
console.log(name())