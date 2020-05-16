//find() methods check if the condition is match then it show it's output only it show first output of an array

var num = [2,3,4,5,6,7]

var compare = num.find(num =>{
    return num > 4
})
console.log(compare);