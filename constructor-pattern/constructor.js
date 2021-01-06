function Car(model, year, miles) {
  this.model = model;
  this.year = year;
  this.miles = miles;

  this.toString = function() {
    return this.model + " has done " + this.miles + " miles";
  };
}

// Usage:

// We can create new instances of the car
const civic = new Car ("Honda Civic", 2009, 20000);
const mondeo = new Car("Ford Mondeo", 2021, 5000);

// and then open our browser console to view the
// output ot fhe toString() method being called on
// these objects
console.log(civic.toString());
console.log(mondeo.toString());