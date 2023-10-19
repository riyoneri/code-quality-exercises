function romansToNumbers(string) {
  const romanNumberValues = new Map([
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000],
  ]);

  let resultNumber = 0,
    currentNumber,
    previousNumber = 0,
    arrangedNumbers = string.split("").reverse();

  for (const character of arrangedNumbers) {
    currentNumber = romanNumberValues.get(character);

    if (currentNumber >= previousNumber) {
      resultNumber += currentNumber;
    } else {
      resultNumber -= currentNumber;
    }
    
    previousNumber = currentNumber;
  }
  return resultNumber;
}
