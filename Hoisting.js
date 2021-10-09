console.log(onHoisting());

function onHoisting() {
  console.log("Lets test this hoisting stuff!..");
}

// In javascript, you can call a function before it is defined and you won’t get an error ‘Uncaught ReferenceError’. The reason behind this is hoisting where the javascript interpreter always moves the variables and function declaration to the top of the current scope (function scope or global scope) before the code execution.
