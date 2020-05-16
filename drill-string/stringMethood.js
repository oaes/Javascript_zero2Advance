
// string character extracting methods
//charAt
//chatCodeAt
var name = 'akash';

var modify = name.charAt(4); 
//console.log(modify)

var mode = name.charCodeAt(0)
//console.log(mode);

//string length methods
var anything = 'akldjfsjljldfjlsjflsfei';
//console.log(anything.length)

//finding a string in a string
var food= 'this is a "mango"';
//console.log(food.indexOf("mango"));

//extracting string
//slice(start, end)
//substring(start, end)
//substr(start, length)

var food = 'mango, banana, kiwi, berry';
console.log(food.slice(15));

var foods= 'jack-fruits, orange, watermelon,blackberry';
console.log(foods.substring(12));

var fooods= 'banana, malta, lichi, mango';
console.log(fooods.substr(8,5));

//string trim for removing white space within string
//trim()

var name = '   akash           ';
console.log(name.trim());

//replace string content
//replace()

var company = 'google,apple';
console.log(company.replace("apple","IBM"));
 console.log(company.replace("google","microsoft"));

 //converting string uppercase and lowercase
 //toUppercase()
 //toLowercase()

 var name = 'akash'
 console.log(name.toUpperCase());

 var names = 'FOSSIA';
 console.log(names.toLowerCase());

 //concat methods in string
 //concat()

 var a = 'hello';
 var b = 'akash';
 console.log(a.concat(' '+ b));

 var c = 'oaes'
 var d = 'kuruni'
 console.log(c.concat(' '+ d))

 //converting a string to an array

 var name = 'akash,batash,pani'
 console.log( name.split())
 