//rest and spread operator (...) this three dot called for. when it is used in a function parameter then we call it rest operator otherwise we call it spread operator.


//rest operator
function num(...id){
    console.log('id'+ ' ' , id);
}
num(1,2,3,4,5)

//spread operator
let a =[2,3,2]
console.log(...a);

let obj = {
    name: 'akash',
    id: 07,
    year:2020
}
 
let obj2 = {
    ...obj
}
console.log(obj2);