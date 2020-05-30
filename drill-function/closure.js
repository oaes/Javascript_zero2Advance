// closure in javascript
//when a data come from another scope or block and without passing a argument in function then we call it closure

var num = 2;

function add(){
var m = 3
    return function(){
        console.log(m);
    }
}

var e = add()
console.dir(e)