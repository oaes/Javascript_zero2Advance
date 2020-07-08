//es6 class
class Student {
  constructor(roll, surname) {
    this.id = roll;
    this.name = surname;
    this.institution = "jagannath university";
  }
}

const student2 = new Student(07, "akash");
const student3 = new Student(25, "mila");

console.log(student2, student3);
