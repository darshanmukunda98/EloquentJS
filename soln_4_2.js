// Your code here.

const reverseArray = (arr) => {
  return arr.reverse();
}
const reverseArrayInPlace = (arr) => {
  return reverseArray(arr);
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
