const takeUntil = require("../takeUntil");
const assert = require("chai").assert;

describe("#takeUntil",()=>{
 it ("return [1,2,5,7,2] on passing [1,2,5,7,2,-1,2,4,5] for condition x=> x<0",()=> {
  const data = [1, 2, 5, 7, 2, -1, 2, 4, 5];
  assert.deepEqual(takeUntil(data, x => x < 0),[1,2,5,7,2]);
 });
 it ("return [1,2] on passing [1,2,5,7,2,-1,2,4,5]for consition x>3",()=> {
  const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
  assert.deepEqual(takeUntil(data1, x => x > 3),[1,2]);
 });
 it ("works with strings",()=>{
  const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
 assert.deepEqual(takeUntil(data2, x => x === ','),["I've", "been", "to", "Hollywood"]);

 });


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// assertArraysEqual(takeUntil(data1, x => x < 0),[1,2,5,7,2]);
// assertArraysEqual(takeUntil(data1, x => x > 3),[1,2]);

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// assertArraysEqual(takeUntil(data2, x => x === ','),["I've", "been", "to", "Hollywood"]);


})












