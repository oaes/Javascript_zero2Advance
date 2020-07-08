//simple inheritance in class
class Father {
  constructor() {
    this.name = "nayeem";
  }
}
class Baby extends Father {
  constructor(name) {
    super();
    this.name = name;
  }
}

const baby2 = new Baby("akash");
const baby3 = new Baby("nodi");

console.log(baby2, baby3);
