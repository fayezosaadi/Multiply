const assert = require("assert");

const multiply = require("./multiply");

it("should return 963 when given value equals 3", () => {
  assert.equal(multiply(3), 963);
});
