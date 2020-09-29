//simply a function methods which basically point out a object

function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype = {
  eat() {
    console.log("eating orang");
  },
  play() {
    console.log("playing cricket");
  },
  sleep() {
    console.log("taking nap");
  },
};

const sakib = new Person("sakib", 34);
sakib.eat();
sakib.play();
sakib.sleep();

const anis = new Person('anis', 24)
console.log(anis);
anis.eat()