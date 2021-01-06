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
    doSomething: doSomethingPrivate,

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

// Usage

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