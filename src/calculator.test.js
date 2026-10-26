
const test = require("node:test");
const assert = require("node:assert/strict");
const { add, divide } = require("./calculator");

test("addition returns the correct result", () => {
    assert.equal(add(5, 3), 8);
});

test("division returns the correct result", () => {
    assert.equal(divide(10, 2), 5);
});

test("division by zero returns Infinity", () => {
    assert.equal(divide(10, 0), Infinity);
});
