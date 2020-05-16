// Computed Member Names
// The similarities between object literals and classes aren’t quite over yet. Class methods and accessor properties can also have computed names. Instead of using an identifier, use square brackets around an expression, which is the same syntax used for object literal computed names./

let method = 'callMe';

class myName {
    constructor(name) {
        this.name = name;
    }
    [method] () {
        console.log(this.name);
    }

}

let newName = new myName("oaes")
newName.callMe();