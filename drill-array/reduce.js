//The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

var num = [34,32,54,22,54,90]

const sum= num.reduce(fun)
function fun(acc,value,index,arr){
    return acc+value
}
console.log(sum);