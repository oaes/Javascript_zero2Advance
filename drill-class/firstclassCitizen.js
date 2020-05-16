//first class citizen, In programming, something is said to be a first-class citizen when it can be used as a value, meaning it can be passed into a function, returned from a function, and assigned to a variable.

let person = new class {

    constructor(name) {
        this.name = name;
    }

    sayName() {
        console.log(this.name);
    }

}("oaes kuruni");

person.sayName();     