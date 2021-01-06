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

myNamespace.myPublicFunction('hello world');
console.log(myNamespace.myPublicVar);