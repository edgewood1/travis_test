var chai = require("chai");
var expect = chai.expect;
var assert = chai.assert;
var hello = require("../backend/hello");

describe("canary test", function() {
  //   A "canary" test is one we set up to always pass
  //   This can help us ensure our testing suite is set up correctly before writing real tests
  it("should pass this canary test", function() {
    expect(true).to.be.true;
  });
  it("should return hello", function() {
    var result = hello();
    console.log("result is: ", result);
    assert.deepEqual(result, "hello");
  });
});
