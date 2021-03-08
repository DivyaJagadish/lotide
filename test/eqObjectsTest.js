const eqObjects =require("../eqObjects");
const assert = require("chai").assert;
describe("eqObjectsTest",()=>{
  it ("returns true when ({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }) is passed",()=>{
    assert.strictEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true) ;
  });

  it ("returns false when ({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }) is passed",()=>{
    assert.strictEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }),false) ;
  });
  it ("returns false when ({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }) is passed",()=>{
    assert.strictEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }),false) ;
  });

  it ("returns true when ({a:{y:{a:1,b:1}}},{a:{y:{a:1,b:1}}}) is passed",()=>{
    assert.strictEqual(eqObjects({a:{y:{a:1,b:1}}},{a:{y:{a:1,b:1}}}),true);
  });

  it ("returns true when ({a:{y:{a:1,b:1}}},{a:{y:{a:1,b:1}}}) is passed",()=>{
    assert.strictEqual(eqObjects({a:{y:{a:1,b:1}}},{a:{y:{a:1,b:1}}}),true);
  });
  it ("returns true when  rearranged key value pair is passed",()=>{
    const ab = { a: "1", b: "2" };
    const ba = { b: "2", a: "1" };
    assert.strictEqual(eqObjects(ab, ba),true);
   
  });
  it ("returns true when  arrays are passed as values",()=>{
    const ab = { a: "1", b: "2" };
    const ba = { b: "2", a: "1" };
    assert.strictEqual(eqObjects(ab, ba),true);
  
  });
  

});
// // Test cases
// assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true) ;// => true

// assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false) ;// => false
// assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }),false);// => false
// assertEqual(eqObjects({a:{y:{a:1,b:1}}},{a:{y:{a:1,b:1}}}),true);
// assertEqual(eqObjects({a:{y:{a:1,b:1}}},{a:{y:1}}),false);




// // Test cases
//  const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// assertEqual(eqObjects(ab, ba),true); // => true

// const abc = { a: "1", b: "2", c: "3" };
// assertEqual(eqObjects(ab, abc),false); // => false
// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// assertEqual(eqObjects(cd, dc), true); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertEqual(eqObjects(cd, cd2), false); // => false
