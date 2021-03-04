
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

const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (keys1.length === keys2.length){
    for ( const keys of keys1) {
      if (Array.isArray(object1[keys])) {// check for arrays
      let check = eqArrays(object1[keys],object2[keys]);
       if(check === false) {
         return false;
       }
      } else if (object1[keys] !== object2[keys]) { //check for primitives
         return false;
      }
    } return true;
  } else {
    return false;
  }
};
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; 

  if (eqObjects(actual,expected)){
    console.log(`👍️👍️Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`⛔️⛔️Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
}
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab,ba)
