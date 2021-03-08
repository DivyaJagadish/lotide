const tail = require("../tail");
const assert = require("chai").assert;

describe("#tail",()=>{
  it ("return [2,3,4,5] with input [1,2,3,4,5]",()=>{
    const result = tail([1,2,3,4,5]);
    assert.deepEqual(result,[2,3,4,5]);
  });
  it ("return ['b','c','d'] on passing ['a','b','c','d']",()=>{
  assert.deepEqual(tail(['a','b','c','d']),['b','c','d'])
  });
  it ("The original size of array shouldnot be changed",()=>{
    const words= ["Yo Yo", "Lighthouse", "Labs"];
    tail(words);
    assert.deepEqual(words.length, 3)
  });

});


