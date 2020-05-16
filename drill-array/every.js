//every() methods test all elements in an array pass the implemented by the provided function and it provided the boolean value. 

 
var num = [38,32,23,83,43,12]

var greaterThan20 = num.every(function(num){
    return num > 10;
})
console.log(greaterThan20)