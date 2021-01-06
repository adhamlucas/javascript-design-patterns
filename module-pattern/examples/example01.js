let testModule = (function () {
  let counter = 0;

  return {
    incrementCounter: function () {
      return counter++;
    },

    resetCounter: function () {
      console.log("counter value prior to reset: " + counter);
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