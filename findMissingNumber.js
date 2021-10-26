var myArray = [6, 2, 1, 3];
console.log(myArray);

function findMissingNumber(myArray) {
  let missingNumber = [];

  let minNum = Math.min(...myArray); // finds the minimum number in the array
  let maxNum = Math.max(...myArray); // finds the maximum number in the array

  for (let i = minNum; i < maxNum; i++) {
    if (myArray.indexOf(i) < 0) {
      // indexOf returns -1 if it finds the element [i] is missing so it pushes in to our newly defined array missingNumber[]
      missingNumber.push(i);
    }
  }
  return missingNumber;
}

console.log(findMissingNumber(myArray));
