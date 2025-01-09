//  Create a module that takes in prices in an array and returns the total
import { total } from "./total";

describe("Total Module Test", () => {
  test("Given a list of prices, when I submit them, then the total should be calculated correctly", () => {
    const prices = [2.5, 78.12, 12.89];
    const result = total(prices);
    expect(result).toEqual(93.51);
  });
});
