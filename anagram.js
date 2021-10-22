var s = "anagram";
var t = "nagaram";

var Anagram = function (s, t) {
  if (sorter(s) == sorter(t)) {
    console.log(true);
  } else {
    console.log(false);
  }
};

function sorter(str) {
  return str.split("").sort().join("");
}

console.log(Anagram(s, t));
