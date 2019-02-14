// var expect = require("chai").expect;
var assert = chai.assert;
// var hello = require("../../backend/hello");

describe("canary test", function() {
  // A "canary" test is one we set up to always pass
  // This can help us ensure our testing suite is set up correctly before writing real tests
  // it("should pass this canary test", function() {
  //   expect(true).to.be.true;
  // });

  // it("should return hello", function() {
  //   var result = hello();
  //   console.log("result is: ", result);
  //   assert.deepEqual(result, "hello");
  // });

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
