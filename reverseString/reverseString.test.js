const reverseString = require("./reverseString")

test("reverse hello equal to olleh", () => {
    expect(reverseString("hello")).toBe("olleh")
})

test("reverse hello world equal to dlrow olleh", () => {
    expect(reverseString("Hello world")).toBe("dlrow olleH")
})

test("reverse 3hello equal to olleh3", () => {
    expect(reverseString("3hello")).toBe("olleh3")
})