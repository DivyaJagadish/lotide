const letterPositions =require("../letterPositions");
const assert = require("chai").assert

describe("#letterpositions",()=> {
  it ("return the position of letters of hello",()=>{
    assert.deepEqual(letterPositions("hello"), { h: [ 0 ], e: [ 1 ], l: [ 2, 3 ], o: [ 4 ] });
  });
  it("return the position of hello world",()=> {
    assert.deepEqual(letterPositions("hello world"),{
      h: [ 0 ],
      e: [ 1 ],
      l: [ 2, 3, 8 ],
      o: [ 4, 6 ],
      w: [ 5 ],
      r: [ 7 ],
      d: [ 9 ]
    });
  });
})