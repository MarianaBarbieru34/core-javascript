import { pangram } from ".";

describe("pangram", () => {
  test("shoud return expected message for a valid pangram ", () => {
    const expected = "Hurray, it is a pangram!";
    const actual = pangram("The quick brown fox jumps over the lazy dog");

    expect(actual).toEqual(expected);
  });

  test("shoud return expected message for a valid pangram with mixed casing", () => {
    const expected = "Hurray, it is a pangram!";
    const actual = pangram("THe qUiCk BroWn fOx JUMPS oVer ThE laZy dOG");

    expect(actual).toEqual(expected);
  });

  test("shoud return expected message for a valid pangram with mixed casing and numbers ", () => {
    const expected = "Hurray, it is a pangram!";
    const actual = pangram("123 THe qUiCk BroWn fOx JUMPS oVer ThE laZy dOG");

    expect(actual).toEqual(expected);
  });

  test("shoud return expected message for a valid pangram with mixed casing, numbers and special characters ", () => {
    const expected = "Hurray, it is a pangram!";
    const actual = pangram("123 THe qUiCk BroWn fOx JUMPS oVer ThE laZy dOG!!");

    expect(actual).toEqual(expected);
  });

  test("shoud return expected message for a valid pangram with mixed casing ,numbers,speial characters and white spaces ", () => {
    const expected = "Hurray, it is a pangram!";
    const actual = pangram(
      "   123 THe qUiCk BroWn fOx JUMPS oVer ThE laZy dOG!!   "
    );

    expect(actual).toEqual(expected);
  });

  test("shoud return expected message for a invalid pangram ", () => {
    const expected = "Sorry, it is NOT a pangram!";
    const actual = pangram("I love JavaScript");

    expect(actual).toEqual(expected);
  });

  test("shoud return expected message for a invalid pangram with numbers ", () => {
    const expected = "Sorry, it is NOT a pangram!";
    const actual = pangram("123 I love JavaScript");

    expect(actual).toEqual(expected);
  });

  test("shoud return expected message for a invalid pangram with numbers and special characters ", () => {
    const expected = "Sorry, it is NOT a pangram!";
    const actual = pangram("123 I love JavaScript!!");

    expect(actual).toEqual(expected);
  });

  test("shoud return expected message for a invalid pangram with numbers, special characters and white spaces", () => {
    const expected = "Sorry, it is NOT a pangram!";
    const actual = pangram("   123 I love JavaScript!!  ");

    expect(actual).toEqual(expected);
  });

  test("shoud return expected message for a invalid pangram with numbers and special characters ", () => {
    const expected = "Sorry, it is NOT a pangram!";
    const actual = pangram("123$%^");

    expect(actual).toEqual(expected);
  });

  test("shoud return expected error message for a empty sentence ", () => {
    const expected = "Error, invalid sentence!";
    const actual = pangram("");

    expect(actual).toEqual(expected);
  });

  test("shoud return expected error message for an undefined sentence ", () => {
    const expected = "Error, invalid sentence!";
    const actual = pangram();

    expect(actual).toEqual(expected);
  });
});
