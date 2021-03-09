const countLetters = require("../countLetters");
const assert =require("chai").assert

describe("#countLetters test",()=>{
  it ("return 0 if its an empty string",()=>{
    assert.equal(countLetters(""),0);
  });
  it ("return true when 'abc' is passed",()=>{
    assert.deepEqual(countLetters("abc"),{ a: 1, b: 1, c: 1 } );
  });
  it ("return true when abc abc  is passed",()=>{
    assert.deepEqual(countLetters("abc abc"),{ a: 2, b: 2, c: 2 } );
  });


});