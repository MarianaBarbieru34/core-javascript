import { fizzBuzz } from ".";

describe("fizzBuzz", () => {
  it("should return expected result for 6", () => {
    const expected = "1, 2, Fizz, 4, Buzz, Fizz";
    const actual = fizzBuzz(6);
    expect(actual).toEqual(expected);
  });

  it("should return expected result for 16", () => {
    const expected =
      "1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz, 16";
    const actual = fizzBuzz(16);
    expect(actual).toEqual(expected);
  });

  it("should return expected result for 3", () => {
    const expected = "1, 2, Fizz";
    const actual = fizzBuzz(3);
    expect(actual).toEqual(expected);
  });

  it("should return expected result for 5", () => {
    const expected = "1, 2, Fizz, 4, Buzz";
    const actual = fizzBuzz(5);
    expect(actual).toEqual(expected);
  });

  it("should return expected result for -6", () => {
    const expected =
      "Please enter a valid ending number, should be a positive integer.";
    const actual = fizzBuzz(-6);
    expect(actual).toEqual(expected);
  });

  it("should return expected result for 6.5", () => {
    const expected =
      "Please enter a valid ending number, should be a positive integer.";
    const actual = fizzBuzz(6.5);
    expect(actual).toEqual(expected);
  });

  it("should return expected result for -6.5", () => {
    const expected =
      "Please enter a valid ending number, should be a positive integer.";
    const actual = fizzBuzz(-6.5);
    expect(actual).toEqual(expected);
  });

  it("should return expected result for undefined", () => {
    const expected =
      "Please enter a valid ending number, should be a positive integer.";
    const actual = fizzBuzz();
    expect(actual).toEqual(expected);
  });
});
