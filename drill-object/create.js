//create() method in js-object create the new object in js with the specified prototypes of objects and properties

var person= {
    name:'akash'
}
console.log(person)
var n = Object.create(person,{})
n.name ='oaes kuruni'
n.work = 'student'
n.salary= '$00'
console.log(n);