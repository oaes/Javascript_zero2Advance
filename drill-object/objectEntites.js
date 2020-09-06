//converting array to object and object to array

//object to multi-dimensional array
var obj={
    a:3,
    b:4
}
console.log(Object.entries(obj))

//array to multi-dimensional object
var objArr=[
    ["a",2],
    ["b",4]
]

console.log(Object.fromEntries(objArr));


