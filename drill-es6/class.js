//class in es6

class person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  eat() {
    console.log("suck juice");
  }
  eat2() {
    console.log("suck soup");
  }
  eat3() {
    console.log("suck water");
  }
}

const me = new person("me", 25);
console.log(me);
me.eat();
me.eat2();
me.eat3();
