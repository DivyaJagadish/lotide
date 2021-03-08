const middle =require("../middle");
const assert = require("chai").assert;
describe("#middle",()=>{
  it ("return[2] on passing [1,2,3]",()=>{
    assert.deepEqual(middle([1,2,3]),[2]);
  });
  it ("return [2,3] on passing [1,2,3,4]",()=>{
    assert.deepEqual(middle([1,2,3,4]),[2,3]);
  })
});

