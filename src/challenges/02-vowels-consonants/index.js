export const vowelsAndConsonants = (sentence) => {
  if (!sentence) {
    return "Error: Invalid sentence, should contain alphabetical characters at minimum";
  }

  const sentenceArray = sentence.split("");

  const hasAlphabets = sentenceArray.some((character) => {
    const alphabets = "abcdefghijklmnopqrstuvwxyz";
    return alphabets.includes(character);
  });

  if (!hasAlphabets) {
    return "Error: Invalid sentence, should contain alphabetical characters at minimum";
  }
};
