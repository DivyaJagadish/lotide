const countOnly = require("../countOnly");
const assert = require("chai").assert
describe("#countOnly",()=>{
  const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
  ];
  const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false   });
  it ("should return 1 when Jason is passed",()=> { 
    assert.equal(result1["Jason"], 1);
  });
  it ("should return undefined when karima is passed as it is not in firstname ",()=> { 
    assert.equal(result1["Karima"], undefined);
  });
  it ("should return undefined when Agouhanna is passed as it is false ",()=> { 
    assert.equal(result1["Agouhanna"], undefined);
  });
  it ("should return undefined when Agouhanna is passed as it is false ",()=> { 
    assert.equal(result1["Agouhanna"], undefined);
  });
  it ("should return 2 when Fang s passed as it is false ",()=> { 
    assert.equal(result1["Fang"], 2);
  });



})

// //Test Cases
// const firstNames = [
//   "Karl",
//   "Salima",
//   "Agouhanna",
//   "Fang",
//   "Kavith",
//   "Jason",
//   "Salima",
//   "Fang",
//   "Joe"
// ];

// const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
// console.log(result1);
// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);
// assertEqual(result1["Agouhanna"], undefined);