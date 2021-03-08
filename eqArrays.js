const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍️👍️Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⛔️⛔️Assertion Failed: ${actual} !== ${expected}`);
  }
};
const eqArrays = function(array1,array2) {
  if (array1.length === array2.length) { // checking whether lengths are equal
    for (let i = 0; i < array2.length; i++) {
      if(Array.isArray(array1[i])) {
        const check = eqArrays(array1[i],array2[i]);
        if(check === false){
          return false;
        }
      }else if (array1[i] !== array2[i]) {
        return false;
      }
    } return true;
  } else {
    return false;
  }
};

assertEqual(eqArrays([1, 2, 3], [3, 2, 1]),false);
assertEqual(eqArrays([1, [2, 3], 4, 5], [1, [2, 3], 4, 5]),true);
assertEqual(eqArrays([1, [2, [3,2,[1]], 4, 5],6],[1, [2, [3,2,[1]], 4, 5],6]),true);
assertEqual(eqArrays([1, [2, [3,2,[1,[2,3]]], 4, 5],6],[1, [2, [3,2,[1,[2,3]]], 4, 5],6]),true);




