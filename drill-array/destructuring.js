//array destructuring

let arr = [1,2,3,4,5]

let [first,second, , ,last] = arr
console.log(first,second,last);


let colors = ['black','green','yellow','gradient',
'white']

let[firstColor,...restColors]= colors

console.log(firstColor,restColors);

//default set
let num  = ['9']
let [ firstNum, secondNum = '0'] = num
console.log(firstNum,secondNum)