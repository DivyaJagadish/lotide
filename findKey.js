const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍️👍️Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⛔️⛔️Assertion Failed: ${actual} !== ${expected}`);
}
};
const findKey = (object1,callback) => {
  for (const key in object1){
    if(callback(object1[key]))
    {
      return key;
    }
  }
  return undefined;
};

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2),"noma"); // => "pass"



assertEqual(findKey({
  "A": { values: 1 },
  "b":   { values: 3 },
  "c":   {values: 2 },
  "d":   { values: 3 },
  "e":  { values: 2 },
  "f":  { values: 3 }
}, x => x.values === 2),"f"); // => "fail"


assertEqual(findKey({
  "A": { values: 1 },
  "b": { values: 2},
  "c": { values: 2 },
  "d": { values: 3 },
  "e": { values: 2 },
  "f":   values: 3 }
}, x => x.values === 2),"b"); // => "pass"



