const without = require("../without");
const assert = require("chai").assert;
describe("#without", () => {
  it("returns true if function returns an array without[1,2]", () => {
    assert.deepEqual(without([1, 3, 5, 1, 3, 2, 2, 3], [1, 2]), [3, 5, 3, 3]);
  });
  it("returns true if function returns an array without lighthouse", () => {
    const words = ["hello", "world", "lighthouse"];
    assert.deepEqual(without(words, ["lighthouse"]), ["hello", "world"]);
  });
  it("checks whether without alters original array", () => {
    const words = ["hello", "world", "lighthouse"];
    without(words, ["lighthouse"]); // no need to capture return value for this test case
    // Make sure the original array was not altered by the without function
    assert.deepEqual(words, ["hello", "world", "lighthouse"]);
  });
});

