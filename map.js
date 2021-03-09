const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}
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

module.exports = map;
// const words = ["ground", "control", "to", "major", "tom"];
// assertArraysEqual(map(words, word => word[0]),["g"]);
// assertArraysEqual(map(words,word => word[1]),["r","o","o","a","o"]);
// assertArraysEqual(map(words, word => word.length),[6,7,2,5,3]);

