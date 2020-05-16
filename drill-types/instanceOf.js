//The instanceof operator should only be used when dealing with custom made objects that originate from the same JavaScript context. Just like the typeof operator, every other use of it should be avoided.

function Car(make, model, year) {
    this.make = make
    this.model = model
    this.year = year    
}

const auto = new Car("PajeroSport", "34", 2009)
console.log(auto);
console.log(auto instanceof Car);
