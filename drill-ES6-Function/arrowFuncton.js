//arrow function was introduced in ES6.

var sum = (n1,n2)=> n1*n2
console.log(sum(3,4));

var num = (a,b)=> a*b
console.log(num(33,33));

var name = ()=>'akash';
console.log(typeof name);
console.log(name)

//arrow function within object
var obj={
    name:'oaes kuruni',
    print: function(){
        setTimeout(() => {
            console.log(this);
            console.log(`hello ${this.name}`);
        }, 1000);
    }
}

obj.print()