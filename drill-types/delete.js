// The delete operator deletes both the value of the property and the property itself.

// After deletion, the property cannot be used before it is added back again.

// The delete operator is designed to be used on object properties. It has no effect on variables or functions.

// Note: The delete operator should not be used on predefined JavaScript object properties. It can crash your application.

var user = {
    fullName:'oaes kuruni',
    NickName:'turjo',
    Name(){
        return `${this.fullName} ${this.NickName}`
    }
}
console.log(delete user.NickName);
console.log(user);

//we can delete array properties cause its one kind of object
var names = ['one','two','three','four']
console.log(delete names[3])
console.log(names);