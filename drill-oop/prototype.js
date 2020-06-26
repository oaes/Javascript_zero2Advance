function Person(){
this.name=name
}

var p = new Person('oaes kuruni')
console.log(Object.getPrototypeOf(p));
console.log(p.__proto__);