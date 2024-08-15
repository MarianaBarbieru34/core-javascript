export const vowelsAndConsonants = (sentence) => {
  // I am going to check if sentence is empty first
  if (!sentence) {
    return "Error: Invalid sentence, should contain alphabetical characters at minimum";
  }

  // if not empty then I am going to convert sentence to an array
  // don't forget to normalise sentence
  const sentenceArray = sentence.toLowerCase().split("");

  const hasAlphabets = sentenceArray.some((character) => {
    const alphabets = "abcdefghijklmnopqrstuvwxyz";
    return alphabets.includes(character);
  });

  if (!hasAlphabets) {
    return "Error: Invalid sentence, should contain alphabetical characters at minimum";
  }

  let countVowels = 0;
  let countConsonants = 0;

  const vowels = "aeiuo";
  const consonants = "bcdfghjklmnpqrstvwxyz";

  sentenceArray.forEach((character) => {
    if (vowels.includes(character)) {
      countVowels = countVowels + 1;
    }

    if (consonants.includes(character)) {
      countConsonants = countConsonants + 1;
    }
  });

  return `Vowels: ${countVowels} | Consonants: ${countConsonants}`;
};
