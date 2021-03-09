const eqArrays =require("./eqArrays");
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
module.exports = letterPositions;

