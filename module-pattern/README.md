# Module Pattern
Modules are an integral piece of any robust application's architecture and typically help in keeping the units of code for a project both cleanly separeted and organized.

The Module pattern was originally defined as a way to provide both private and public encapsulation for classes in conventional software engineering. In JavaScript, the Module pattern is used to furthe *emulate* the concept of classes in such a way that we're able to include both public/private methods and variables inside a single object 

## Privacy
The Module pattern encapsulates "privacy", state and organziation using [closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures). With this pattern, only a public API is returned, keeping everything else within the closure private. The pattern utilizes an immediately-invoked function expression ([IIFE](https://developer.mozilla.org/en-US/docs/Glossary/IIFE)) where an object is returned.

Within the Module pattern, variables or methods declared are only available inside the module itself thanks to closure. Variables or methods defined within the returning object however are available to everyone.

## Examples
```
let testModule = (function () {
  let counter = 0;

  return {
    incrementCounter: function () {
      return counter++;
    },

    resetCounter: function () {
      console.log("counter value prior to reset:" + counter);
      counter = 0;
    }
  };
})();

//Usage

// Increment our counter
testModule.incrementCounter();

// Check the counter value and reset
// Outputs: counter value prior to reset: 1
testModule.resetCounter();
```

Here, other parts of the code are unable to directly read the value of our incrementCounter() or resetCounter(). The counter variable is actually fully shielded from our global scope so it acts just like a private variable would - its existence is limited to within the module's closure so that the only code able to access its scope are our two functions.

When working with the Module pattern, we may find it useful to define a simple template that we use for getting started with it. Here's one that covers namespacing, public and private variables:

```
let myNamespace = (function() {
  let myPrivateVar, myPrivateMethod;

  // A private counter variable
  myPrivateVar = 0;

  // A private function which logs any arguments
  myPrivateMethod = function (foo) {
    console.log(foo);
  };

  return {

    // A public variable
    myPublicVar: "foo",

    // A public function utilizing privates
    myPublicFunction: function(bar) {
      // Increment our private counter
      myPrivateVar++;

      // Call our private method using bar
      myPrivateMethod(bar);
    }
  }
})();

// Usage

// Public method
myNamespace.myPublicFunction('hello world');

// Public variable
console.log(myNamespace.myPublicVar);
```

### Shopping basket example
The module itself is completely self-contained in a global variable called `basketModule`. The `basket` array in the module iskept private and so other parts of our application are unable to directly read it. It only exists with te module's closure and so the only methods able to acess it are those with access to its scope (i.e. `àddItem()`, `getItemCount()` etc)

```
let basketModule = (function() {
  // privates
  const basket = [];

  function doSomethingPrivate() {
    // ...
  }

  // Return an objcet exposed to the public
  return {

    // Add itemsto our basket
    addItem: function(values) {
      basket.push(values);
    },

    // Get the count of items in the basket
    getItemCount: function () {
      return basket.length;
    },

    // Public alias to a private function
    doSomething: do SomethingPrivate,

    // Get the total value of items in the basket
    getTotal: function () {
      let q = this.getItemCount(),
        total = 0;
      
      while (q--) {
        total += basket[q].price;
      }

      return total;
    }
  }
})();
```

Inside the module, you may have noticed that we return an `object`. This gets automatically assigned to `basketModule` so that we can interact with it as follows:

```
basketModule.addItem({
  item: "bread",
  price: 0.5
})

basketModule.addItem({
  item: "butter",
  price: 0.3
})

// Outputs: 2
console.log(basketModule.getItemCount());

// Outputs: 0.8
console.log(basketModule.getTotal());

// However, the following will not work:

// Outputs: undefined
// This is beacause the basket iteslf is not exposed as a part of our
// public API
console.log(basketModule.basket);

// this also won't work as it only exists within the scope of our
// basketModule closure, but not in the returned public object
console.log(basket);
```

### Advantages
For starters, it's a lot cleaner for developers coming from an object-oriented background than the idea of true encapsulation, at least from a JavaScript perspective.

Secondly, it supports private data - so, in the Module pattern, public parts of our code are able to touch the private parts, however the outside world is unable to touch the class's private parts.
### Disvantages
The disadvantages of the Module pattern are that as we access both public and private members differently, when we wish to change visibility, we actually have to make changes to each place the member was used.

We also can't access private members in methods that are added to the object at a later point. That said, in many cases the Module pattern is still quite useful and when used correctly, certainly has the potential to improve the structure of our application.

Other disadvantages include the inability to create automated unit tests for private members and additional complexity when bugs require hot fixes. It's simply not possible to patch privates. Instead, one must override all public methods which interact with the buggy privates. Developers can't easily extend privates either, so it's worth remembering privates are not as flexible as they may initially appear.

## Further reading
[JavaScript Module Pattern: In-Depth](http://www.adequatelygood.com/JavaScript-Module-Pattern-In-Depth.html)