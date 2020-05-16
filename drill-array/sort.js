//sort() methods is used for sorting an elements in array and return sorted array built upon converting the elements into string.....(MDN=>The sort() method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.
//here original arry are changed
var num = [33,43,5,33,443,333,321]
var newNum =  num.sort(function(a,b){
    return b-a;
})
console.log(newNum);
console.log(num);