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
const letterPositions = function(sentence) {
  const results = {};
  let  noSpace = sentence.split(" ").join("");
  for ( i = 0; i < noSpace.length;i++){
    if (results[noSpace[i]])
    {
      results[noSpace[i]].push(i);
    }else {
      results[noSpace[i]] = [];
      results[noSpace[i]].push(i);
    }
  }
  return results;
};
// Test cases
const hello = letterPositions("hello");
assertArraysEqual (hello.e,[1]);
assertArraysEqual(hello.l,[2,3]);
assertArraysEqual(hello.e,[0]);
