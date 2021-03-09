const map = require("../map");
const assert = require("chai").assert
describe("test map",()=>{

const words = ["ground", "control", "to", "major", "tom"];
  it ("returns the array of first letters",()=>{
    assert.deepEqual(map(words, word => word[0]),["g","c","t","m","t"]);

  });
  it ("returns the array of second letters",()=>{
    assert.deepEqual(map(words,word => word[1]),["r","o","o","a","o"]);
  });
  it ("returns the array of second letters",()=>{
    assert.deepEqual(map(words,word => word[1]),["r","o","o","a","o"]);
  });
  it ("returns the array of length",()=>{
    assert.deepEqual(map(words, word => word.length),[6,7,2,5,3]);
  });
})