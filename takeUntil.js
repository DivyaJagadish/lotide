const takeUntil = function (array,callback)
{
  const result = [];
  for (const data of array) {
    if (callback(data)) { // we have to get  value until callback is true.It usually works on false.
      return result;
    } else 
    result.push(data);
  }
  return result;
};
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

// Test cases
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
assertArraysEqual(takeUntil(data1, x => x < 0),[1,2,5,7,2]);
assertArraysEqual(takeUntil(data1, x => x > 3),[1,2]);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
assertArraysEqual(takeUntil(data2, x => x === ','),["I've", "been", "to", "Hollywood"]);
