//The Object.values() method "returns an array" of a given object's own enumerable property values, in the same order as that provided by a for...in loop. (The only difference is that a for...in loop enumerates properties in the prototype chain as well.)


var num= {
    id:4,
    name:'mr.x',
    job:'student'
}
console.log(Object.values(num));