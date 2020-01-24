const assert = require("assert");

const multiply = require("./multiply");

describe("Multiply", () => {
  it("should return 0", () => {
    assert.equal(multiply(0), 0);
  });

  it("should return 963 when given value equals 3", () => {
    assert.equal(multiply(3), 963);
  });

  it("should return -642 when given value equals -2", () => {
    assert.equal(multiply(-2), -642);
  });
});
