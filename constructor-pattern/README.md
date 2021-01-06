# Constructor Pattern
In classical object-oriented programming languages, a constructor is a special method used to initialize a newly created object once memory has been allocated for it. In JavaScript, as almost everything is an object, we're most often interested in object constructors.

Object constructors are used to create specif types of objects - both preapring the objcet for use and accepting arguments which a constructor can use to set the values of member properties and methods when the object is first created.

### Basic Constructor
As we saw earlier, JavaScript doesn't support the concept of classes but it does support special constructor functions that work with objects. By simply prefixing a call to a constructor function with the keyword "new", we can tell JavaScript we would like the function to behave like a constructor and instantiate a new object with the members defined by that function.

```
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
```

The above is a simple version of the constructor pattern but it does suffer from some problems. One is that it makes inheritance difficult an the other is that functions such as `toString()` are redefined for each of the new objects created using th Car constructor. This isn't very optimal as the function should ideally be shared between all of the Car type.

### Constructor with prototypes
Functions, like almost all objects in Javascript, contain a "prototype" object. When we calla JavaScript constructor to create an object, all the properties of the constructor's prototype are then made available to the new object. In this fashion, multiple Car objects can be created which acess the same prototype. We can thus extend the original example as follows:

```
function Car (model, year, miles) {
  this.model = model;
  this.year = year;
  this.miles = miles;
}

Car.prototype.toString = function () {
  return this.model + " has done " + this.miles + " miles";
};

// Usage:

const civic = new Car("Honda Civic", 2009, 20000);
const mondeo = new Car("Ford Mondeo", 2010, 5000);

console.log(civic.toString());
console.log(mondeo.toString());
```

Above, a single instace of toString() will now be shared between all of the Car objects