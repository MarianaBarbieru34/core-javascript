export const rnaTranscription = (dna) => {};
//check if dna is a non empty string
if (!dna || typeof dna !== "string") {
  return "Failed to retrieve RNA transcription: Invalid DNA strand";
}

// normalise the dna string to upper case and store in variable called"normaliseDna"
const normaliseDna = dna.toUpperCase();
// convert "normaliseDna" to an array and store in to a variabile called "dnaArray"

const dnaArray = normaliseDna.split("");
// apply every method on "dnaArray" and store result in a variable called "isValid"
const isValid = dnaArray.every((character) => {
  // check if character is included in the string "GCTA"

  return "GCTA".includes(character);
});

// if "is Valid" is false return faild message
if (!isValid) {
  return "Failed to retrieve RNA transcription: Invalid DNA strand";
}
// map through the "dnaArray" and store output in an "rnaArray"
const rnaArray = dnaArray.map((character) => {
  // if character  A return U,
  if (character === "A") {
    return "U";
  }
  // if character G return C
  if (character === "G") {
    return "C";
  }

  //if character C return G
  if (character === "C") {
    return "G";
  }

  // if character T return A
  if (character === "T") {
    return "A";
  }
});
// convert "rnaArray" to sting by using join method and store in variabile calledd "rna"
const rna = rnaArray.join("");
// return template literal with "rna"

return `RNA strand: ${rna}`;
