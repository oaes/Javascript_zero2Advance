//filter() methods create a new array with that elements which pass  the test implemented by the provided function

var arr = [33,43,42,33,32,20,22]

var check = arr.filter(function(arr){
    return arr >30;
})
console.log(check)