function calculator(num1, operation, num2) {
  if (typeof num1 === "number" && typeof num2 === "number") {
    if (operation === "+") {
      return num1 + num2;
    }
    if (operation === "-") {
      return num1 - num2;
    }
    if (operation === "*") {
      return num1 * num2;
    }
    if (operation === "/") {
      return num1 / num2;
    }
  } else {
    return "Invalid numbers";
  }
}

module.exports = calculator;
