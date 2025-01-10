//  Requirements:
//  TDD - create tests for a module that will:
//  Obscure credit card number except the last 4 digits
//  Test to make sure the function obscures credit card numbers that are
//  between the length of 12 and 16 digits:
//  input:  123456789012
//  output: ********0912

import { obscureCard } from "./creditCard";

const errorMsg = "Invalid Credit Card";

describe("Credit Card Obscuring Module", () => {
  test("Given a valid credit card number, when I submit it, then all digits except last 4 should be obscured with asterisks", () => {
    expect(obscureCard("123456789012")).toBe("********9012");
  });

  test("Given a 16-digit card number, when I submit it, then all digits except last 4 should be obscured", () => {
    expect(obscureCard("1234567890123456")).toBe("************3456");
  });

  test("Given a 14-digit card number, when I submit it, then all digits except last 4 should be obscured", () => {
    expect(obscureCard("12345678901234")).toBe("**********1234");
  });

  test("Given a non-numeric input, when I submit it, then it should return error message", () => {
    expect(obscureCard("12abc34567890")).toBe("Enter numbers only");
  });

  test("Given a number less than 12 digits, when I submit it, then it should return error message", () => {
    expect(obscureCard("12345678901")).toBe(errorMsg);
  });

  test("Given a number more than 16 digits, when I submit it, then it should return error message", () => {
    expect(obscureCard("12345678901234567")).toBe(errorMsg);
  });
});
