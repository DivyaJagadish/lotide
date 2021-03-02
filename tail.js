const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍️👍️Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⛔️⛔️Assertion Failed: ${actual} !== ${expected}`);
  }
};
const tail = function(array1) {
  let array2 = [];
  for ( let i = 1; i < array1.length ; i++){
    array2.push(array1[i])
  }
  return (array2);
};

// Test Case: Check the original array 
const words = ["Yo Yo"];
const array3 = tail(words);
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 1); // original array should still have 3 elements!
assertEqual(array3.length, 1); 
