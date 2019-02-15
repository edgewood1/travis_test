// var expect = require("chai").expect;
var assert = chai.assert;
// var hello = require("../../backend/hello");

describe("test 'testing' function for low / hi return", function() {
  it("if parameter less than 5, it should return low", function() {
    var result = testing(3);
    console.log("result is: ", result);
    assert.deepEqual(result, "low");
  });

  it("if parameter is 5, it should return hi", function() {
    var result = testing(5);
    console.log("result is: ", result);
    assert.deepEqual(result, "hi");
  });

  it("if no parameter? ", function() {
    var result = testing();
    console.log("result is: ", result);
    assert.deepEqual(result, "enter a letter");
  });
  it("if input a letter? ", function() {
    var result = testing("a");
    console.log("result is: ", result);
    assert.deepEqual(result, "enter a letter");
  });
});
