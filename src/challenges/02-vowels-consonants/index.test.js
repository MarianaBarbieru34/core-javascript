import { vowelsAndConsonants } from ".";

describe("vowelsAndConsonants", () => {
  it("should return expected  message with vawels and consonants", () => {
    const expected = "Vowels: 5 | Consonants: 8";
    const actual = vowelsAndConsonants("This is amazing");
    expect(actual).toEqual(expected);
  });

  it("should return expected messsage with no vawels and consonants", () => {
    const expected = "Vowels: 0 | Consonants: 17";
    const actual = vowelsAndConsonants("Try my dry rhythm cry");
    expect(actual).toEqual(expected);
  });

  it("should return expected messsage with  vawels and no consonants", () => {
    const expected = "Vowels: 11 | Consonants: 0";
    const actual = vowelsAndConsonants("oo ooo ooouuu");
    expect(actual).toEqual(expected);
  });

  it("should return expected messsage when  numbers are present", () => {
    const expected = "Vowels: 7 | Consonants: 9";
    const actual = vowelsAndConsonants("Welcome to the year 2050");
    expect(actual).toEqual(expected);
  });

  it("should return expected messsage when  special characters are present", () => {
    const expected = "Vowels: 5 | Consonants: 10";
    const actual = vowelsAndConsonants("Dude where's my car?");
    expect(actual).toEqual(expected);
  });

  it("should return expected messsage when  special characters and numbers  are present", () => {
    const expected = "Vowels: 5 | Consonants: 12";
    const actual = vowelsAndConsonants("Dude where's my 2nd car?");
    expect(actual).toEqual(expected);
  });

  it("should return expected  error messsage when  no alphabets are present", () => {
    const expected =
      "Error: Invalid sentence, should contain alphabetical characters at minimum";
    const actual = vowelsAndConsonants("#123");
    expect(actual).toEqual(expected);
  });

  it("should return expected error messsage when  sentence is empty", () => {
    const expected =
      "Error: Invalid sentence, should contain alphabetical characters at minimum";
    const actual = vowelsAndConsonants("");
    expect(actual).toEqual(expected);
  });

  it("should return expected error messsage when  sentence is undefined", () => {
    const expected =
      "Error: Invalid sentence, should contain alphabetical characters at minimum";
    const actual = vowelsAndConsonants();
    expect(actual).toEqual(expected);
  });
});
