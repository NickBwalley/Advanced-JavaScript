let paintColor = "red";

const paint = (() => {
  return {
    changePaintColorToBlue: () => {
      paintColor: "blue";
      return paintColor;
    },

    changePaintColorToGreen: () => {
      paintColor: "green";
      return paintColor;
    },
  };
})();
console.log(paint.changePaintColorToBlue());

//As the name suggests IIFE is a function in javascript which immediately invoked and executed as soon as it is defined. Variables declared within the IIFE cannot be accessed by the outside world and this way you can avoid global scope from getting polluted. So the primary reason to use IIFE is to immediately executes the code and obtain data privacy.
