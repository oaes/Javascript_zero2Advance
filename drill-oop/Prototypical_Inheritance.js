var person = function (name, age, job) {
  this.name = name;
  this.age = age;
  this.job = job;
};
//inherit person in teacher
var teacher = function (name, age, job, subject) {
  person.call(this, name, age, job);
  this.subject = subject;
};

var tawhid = new teacher("tawhid", 45, "master", "arabic");
console.log(tawhid.name);
console.log(tawhid.age);
console.log(tawhid.job);
console.log(tawhid.subject);
teacher.prototype.address = "bangladesh";

person.prototype.birthday = function () {
  console.log(this.name + "born in" + (2020 - this.age));
};

console.log(person.prototype);

var akash = new person("akash", 1996, "software engineer");

akash.birthday();

person.prototype.address = "bangladesh";
console.log(akash.address);

function circle() {}
circle.prototype = object.create(person.prototype);
