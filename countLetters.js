const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍️👍️Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⛔️⛔️Assertion Failed: ${actual} !== ${expected}`);
}
};
const countLetters =function(string1){
  const result1 ={};
  let  noSpaces = string1.split(" ").join("");
  for ( const char of noSpaces){
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