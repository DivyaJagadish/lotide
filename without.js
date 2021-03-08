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
const without = function(source,itemsToRemove)
{
  let final = [], flag = 0;
  for (let i = 0; i < source.length ;i++){
    flag = 0;
    for( let j = 0; j < itemsToRemove.length ; j++) {
      if (source[i] === itemsToRemove[j]) {
         flag =1;
      }
    }
    if (flag === 0) {
   final.push(source[i]);
    } 
  }
  return final;
};
module.exports = without;

console.log( without( [1,3,5,1,3,2,2,3],[1,2]));
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);


