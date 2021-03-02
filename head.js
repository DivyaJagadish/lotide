const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍️👍️Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⛔️⛔️Assertion Failed: ${actual} !== ${expected}`);
  }
};
const head = function(array1) {
  if (array1.length !== 0) {
    return (array1[0]);
  } else {
    return (undefined);
  }
};
console.log(assertEqual(head([]),1));
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
