const capitalize = require("./capitalize");

test("capitalize hello equal to Hello", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("capitalize Hello equal to Hello", () => {
  expect(capitalize("Hello")).toBe("Hello");
});
test("capitalize HELLO equal to HELLO", () => {
  expect(capitalize("HELLO")).toBe("HELLO");
});
test("capitalize first letter of sentence", () => {
  expect(capitalize("happy testing")).toBe("Happy testing");
});

test("numbers are invalid characters", () => {
  expect(capitalize("2022")).toBe("no valid characters");
});
