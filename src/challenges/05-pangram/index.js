export const pangram = (sentence) => {
  //check if sentence is falsy
  if (!sentence) {
    return "Error, invalid sentence!";
  }

  //normalise my sentence

  const normaliseSentence = sentence.toLowerCase();

  //declare alphabets

  const alphabets = "abcdefghijklmnoprstuvwxyz";
  //convert alphabets to array
  const alphabetsArray = alphabets.split("");

  //check if evry alphabeth in the alphabeths is included in my normaliseSentence
  const isPangram = alphabetsArray.every((alphabet) => {
    return normaliseSentence.includes(alphabet);
  });

  //check if pangram

  if (isPangram) {
    return "Hurray, it is a pangram!";
  }

  return "Sorry, it is NOT a pangram!";
};
