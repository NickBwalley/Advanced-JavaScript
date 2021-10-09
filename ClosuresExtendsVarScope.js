//closures allow variable scope to be extended past the common scope restrictions of functions.
// To create a closure, you nest a function inside of a function. That inner function has access to all variables in its parent function’s scope.
function myObject() {
  this.property1 = "first property";
  this.property2 = "second property";
  var finalProperty = this.property1;

  this.myObject2 = () => {
    myProperty = finalProperty;
    return myProperty;
  };
}

var name1 = new myObject();
console.log(name1.myObject2());
