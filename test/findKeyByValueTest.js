const findKeyByValue =require("../findKeyByValue");
const assert =require("chai").assert
describe("findKeyByValue",()=>{
  const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
   };
it ("return drama on passing ' The wire'",()=>{
assert.equal(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
});
it ("return undefined on passing 'That 70's Show",()=>{
  assert.equal(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });
});
