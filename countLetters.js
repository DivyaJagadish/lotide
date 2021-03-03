const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍️👍️Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⛔️⛔️Assertion Failed: ${actual} !== ${expected}`);
}
};
const countLetters =function(string1){
  const result1 ={};
  for ( const char of string1){
    if(result1[char])
    {
      result1[char] += 1;
    } else {
      result1[char] = 1;
    }
  }
  return result1;
};
console.log(countLetters("asdasdasdfdfgg"));