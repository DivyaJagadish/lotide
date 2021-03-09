const findKey = require("../findKey");
const assert =require("chai").assert
describe("findKey",()=>{
  it ("return 'noma' when the object is passed",()=>{

    assert.equal(findKey({
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    }, x => x.stars === 2),"noma");
    
  });
  it ("return 'b' when the object is passed",()=> {

    assert.equal(findKey({
  "A": { values: 1 },
  "b": { values: 2},
  "c": { values: 2 },
  "d": { values: 3 },
  "e": { values: 2 },
  "f":  { values: 3 }
}, x => x.values === 2),"b");
  
});
it ("return undefined when the object is passed",()=> {

  assert.equal(findKey({
"A": { values: 1 },
"b": { values: 2},
"c": { values: 2 },
"d": { values: 3 },
"e": { values: 2 },
"f":  { values: 3 }
}, x => x.values === 4),undefined);

});


});
 