const calculator = require("./calculator")

test("add 1 + 3 equal to 4", () => {
  expect(calculator(1, "+", 3)).toBe(4);
});
test("add 1 + (-3) equal to -2", () => {
  expect(calculator(1, "+", -3)).toBe(-2);
});
test("add 1 + 0 equal to 1", () => {
  expect(calculator(1, "+", 0)).toBe(1);
});
test("add `1` + 0 equal to Invalid numbers", () => {
  expect(calculator(`1`, "+", 0)).toBe("Invalid numbers");
});
test("subtract 11 - 3 equal to 8", () => {
  expect(calculator(11, "-", 3)).toBe(8);
});
test("subtract 11 - (-3) equal to 14", () => {
  expect(calculator(11, "-", -3)).toBe(14);
});
test("subtract 11 - `3` equal to Invalid numbers", () => {
  expect(calculator(11, "-", "3")).toBe("Invalid numbers");
});
test("multiply 5 * `3` equal to Invalid numbers", () => {
  expect(calculator(5, "*", "3")).toBe("Invalid numbers");
});
test("multiply 5 * 3 equal to 15", () => {
  expect(calculator(5, "*", 3)).toBe(15);
});
test("multiply 5 * -3 equal to -15", () => {
  expect(calculator(5, "*", -3)).toBe(-15);
});
test("divide 10 / `2` equal to Invalid numbers", () => {
  expect(calculator(10, "/", "2")).toBe("Invalid numbers");
});
test("divide 10 / 2 equal to 5", () => {
  expect(calculator(10, "/", 2)).toBe(5);
});
test("divide 10 / -2 equal to -5", () => {
  expect(calculator(10, "/", -2)).toBe(-5);
});
