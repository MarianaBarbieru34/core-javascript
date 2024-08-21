export const palindrome = (word) => {
  // normalise word
  const normalisedWord = word?.toLowerCase();

  // convert word to an array
  const normaliseWordArray = normalisedWord?.split("");

  // tell JS about alphabets
  const alphabets = "abcdefghijklmnopqrstuvwxyz";

  // every character in word should be in alphabet
  const isValid = normaliseWordArray?.every((character) => {
    return alphabets.includes(character);
  });

  // check if not valid
  if (!isValid) {
    // return error message
    return "Error, invalid input string!";
  }

  // reverse the array
  const reversedNormaliseWordArray = normaliseWordArray.reverse();

  // convert to string
  const reversedWord = reversedNormaliseWordArray.join("");

  // check if they are equal
  if (normalisedWord === reversedWord) {
    // return success message
    return `Hurray, ${word} is a palindrome!`;
  }

  // return unsuccessful message
  return `Sorry, ${word} is not a palindrome!`;
};
