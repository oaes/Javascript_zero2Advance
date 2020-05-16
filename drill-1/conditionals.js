//easy if-else
var fund = 10000;
if(fund>12000){
    console.log('going to tour')
}
else{
    console.log('setting in home');
}

//medium if-else
var haveMoney = 20000;
if(haveMoney!=20000){
    console.log('going to coxs bazer');
}
else{
    console.log('setting in home');
}
//advanced if-else
var job = true;
var savingQnt = 500000;
if(job== true && savingQnt>600000){
    console.log('lets try');
}
else if(job==true){
    console.log('ok try');
}
else{
    console.log('try again later some months');
}
//another one
var book = "history";
if(book == "math"){
    console.log('it is not history book');
}
else if(book== "bengal"){
    console.log('it is also not history book');
}
else if(book=="literature"){
    console.log('it is actually history book');
}
else{
    console.log('here is no history book ')
}
//if shortcuts, it's also called ternary operator
var a =5;
var b =8;
var c= a<b ? console.log('done'):console.log('not done');

//more if condition practice

var n=51;

if(n%2 === 0){
    console.log( n+' is a even number')
}
else{
    console.log( n +'is a odd  number')
} 

//more practice
var date = new Date();

var today = date.getDay();


if(today===6){
    console.log('today is saturday')
}
else if(today===0){
    console.log('today is sunday')
}
else if(today===1){
    console.log('today is monday')
}
else if(today===2){
    console.log('today is tuesday')
}
else if(today===3){
    console.log('today is wednesday')
}
else if(today===4){
    console.log('today is thursday')
}
else if(today===5){
    console.log('today is friday')
}
else{
    console.log('today is holiday')
}