// Class Expressions


let newName = class{
    constructor(name) {
        this.name = name;
    }
    callMe(){
        console.log(this.name);
    }
}

let name = new newName('turjo')
name.callMe();