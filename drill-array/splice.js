//splice() methods change the content of an array by removing or adding elements of an array

var food = ['apple','kiwi','orange']
var num = [33,3,44,32,31]
food.splice(3,0,'pineapple','papayia')//add
console.log(food);
num.splice(3,2)//remove
console.log(num);