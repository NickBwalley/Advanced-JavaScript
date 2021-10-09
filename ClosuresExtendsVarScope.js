//closures allow variable scope to be extended past the common scope restrictions of functions.
// To create a closure, you nest a function inside of a function. That inner function has access to all variables in its parent function’s scope.
function myObject() {
  this.property1 = "red";
  this.property2 = "blue";
  var newValue = this.property1;
  this.performMethod = () => {
    myMethodValue = newValue;
    return myMethodValue;
  };
}

var myObjectInstance = new myObject();
console.log(myObjectInstance.performMethod());
