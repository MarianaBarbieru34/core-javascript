export const fizzBuzz = (stoppingNumber) => {
  if (
    !stoppingNumber ||
    !Number.isInteger(stoppingNumber) ||
    stoppingNumber <= 0
  ) {
    return "Please enter a valid ending number, should be a positive integer.";
  }

  const resultArray = [];

  for (let i = 1; i <= stoppingNumber; i++) {
    const isMultipleOf3 = i % 3 === 0;
    const isMultipleOf5 = i % 5 === 0;

    if (isMultipleOf3 && !isMultipleOf5) {
      resultArray.push("Fizz");
    } else if (isMultipleOf5 && !isMultipleOf3) {
      resultArray.push("Buzz");
    } else if (isMultipleOf3 && isMultipleOf5) {
      resultArray.push("FizzBuzz");
    } else {
      resultArray.push(i);
    }
  }

  return resultArray.join(", ");
};
