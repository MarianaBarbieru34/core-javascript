import { palindrome } from ".";

describe("palindrome", () => {
  it("should return succes message for noon", () => {
    const expected = "Hurray, noon is a palindrome!";
    const actual = palindrome("noon");
    expect(actual).toEqual(expected);
  });

  it("should return succes message for NoOn", () => {
    const expected = "Hurray, NoOn is a palindrome!";
    const actual = palindrome("NoOn");
    expect(actual).toEqual(expected);
  });

  it("should return unsuccessful message for moon", () => {
    const expected = "Sorry, moon is not a palindrome!";
    const actual = palindrome("moon");
    expect(actual).toEqual(expected);
  });

  it("should return succes message for   NoOn   ", () => {
    const expected = "Error, invalid input string!";
    const actual = palindrome("   NoOn   ");
    expect(actual).toEqual(expected);
  });

  it("should return error message for noon123", () => {
    const expected = "Error, invalid input string!";
    const actual = palindrome("noon123");
    expect(actual).toEqual(expected);
  });

  it("should return error message for noon!", () => {
    const expected = "Error, invalid input string!";
    const actual = palindrome("noon!");
    expect(actual).toEqual(expected);
  });

  it("should return error message for noon123!", () => {
    const expected = "Error, invalid input string!";
    const actual = palindrome("noon123!");
    expect(actual).toEqual(expected);
  });

  it("should return error message for emty word", () => {
    const expected = "Error, invalid input string!";
    const actual = palindrome("");
    expect(actual).toEqual(expected);
  });

  it("should return error message for undefined word", () => {
    const expected = "Error, invalid input string!";
    const actual = palindrome();
    expect(actual).toEqual(expected);
  });

  it("should return error message for 111", () => {
    const expected = "Error, invalid input string!";
    const actual = palindrome("111");
    expect(actual).toEqual(expected);
  });
});
