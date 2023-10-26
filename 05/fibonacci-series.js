const getFibonacci = (number) => {
  if (number <= 1) return "The output not found";

  let number1 = 0;
  let number2 = 1;
  let result = "";

  //   Loop until sum of numbers are less or equal to given one
  while (number1 + number2 <= number) {
    const sum = number1 + number2;

    [number1, number2] = [number2, sum];

    result += `${sum} `;
  }

  return result.trim();
};
