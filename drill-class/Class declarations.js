//class 


// class PersonClass {
//     constructor(name) {
//         this.name = name;
//     }
//     // equivalent of PersonType.prototype.sayName
//     sayName() {
//         console.log(this.name);
//     }
// }

// let person = new PersonClass("Nicholas");
// person.sayName();  

class myName {
    constructor(name){
        this.name= name;
    }
    callMe(){
        console.log(this.name);
    }
}
let Name = new myName('oaes kuruni')
Name.callMe();