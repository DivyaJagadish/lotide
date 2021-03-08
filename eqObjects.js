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
      }else if(typeof(object1[keys])=== "object"){
        const check = eqObjects(object1[keys],object2[keys]);
        if( check === false) {
          return false;
        }
      }else if (object1[keys] !== object2[keys]) { //check for primitives
         return false;
      }
    } return true;
  } else {
    return false;
  }
};

// Test cases
assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true) ;// => true

assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false) ;// => false
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }),false);// => false
assertEqual(eqObjects({a:{y:{a:1,b:1}}},{a:{y:{a:1,b:1}}}),true);
assertEqual(eqObjects({a:{y:{a:1,b:1}}},{a:{y:1}}),false);




// Test cases
 const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba),true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc),false); // => false
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false