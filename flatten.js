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
const flatten = function(array1)
{
  let outputarray =[];
  for(element of array1){
    if(Array.isArray(element))
    {
      for(let j = 0; j < element.length ;j++)
      {
        outputarray.push(element[j]);
      }
    } else {
      outputarray.push(element);
    }
  }
  return outputarray;
};

module.exports = flatten;

assertArraysEqual(flatten([1,2,3,[4,5],8]), [1,2,3,4,5,8] );