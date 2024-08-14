export const vowelsAndConsonants = (sentence) => {
  if (!sentence) {
    return "Error: Invalid sentence, should contain alphabetical characters at minimum";
  }

  const sentenceArray = sentence.toLowerCase().split("");

  const hasAlphabets = sentenceArray.some((character) => {
    const alphabets = "abcdefghijklmnopqrstuvwxyz";
    return alphabets.includes(character);
  });

  if (!hasAlphabets) {
    return "Error: Invalid sentence, should contain alphabetical characters at minimum";
  }

  let counVowels = 0;
  let countConsonants = 0;

  const vowels = "aeiuo";
  const consonants = "abcdefghijklmnopqrstuvwxyz";

  sentenceArray.array.forEach((character) => {
    if (vowels.includes(character)) {
      counVowels = counVowels + 1;
    }
  });
};
