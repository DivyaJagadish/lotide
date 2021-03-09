
const countLetters =function(string1){
  const result1 ={};
  let  noSpaces = string1.split(" ").join("");
  if (noSpaces.length === 0) {
    return 0;
  }
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
module.exports =countLetters;