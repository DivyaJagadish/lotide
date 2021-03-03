const eqArrays = function(array1,array2) {
  if (array1.length === array2.length) { // checking whether lengths are equal
    for (let i = 0; i < array2.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    } return true;
  } else {
    return false;
  }
};
const assertArraysEqual = function(array1,array2) {
if (eqArrays(array1,array2)) {
  console.log(`👍️👍️Arrays are Equal ${array1} === ${array2}`);
} else {
  console.log(`⛔️⛔️Arrays are not equal: ${array1} !== ${array2}`);
}
};

const middle = function(array) {
  let middlearray = [] ;
if (array.length > 2 && array.length % 2 === 0){
  middlearray.push(array[array.length/2-1]);
  middlearray.push(array[(array.length/2)]);
} else if( array.length >2 && array.length % 2 != 0) {
  middlearray.push(array[(array.length+1)/2 -1]);
} return middlearray ;
};
// Test cases
assertArraysEqual(middle([1,2,3]),[2]);
assertArraysEqual(middle([1,2,3,4]), [2,3]);
assertArraysEqual(middle([1,2,3,4]), [1,3]);

