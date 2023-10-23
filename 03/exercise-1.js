function calculateAverage(numbers) {
  const sum = numbers.reduce((sum, currentValue) => (sum += currentValue));

  return sum / numbers.length;
}

console.log(calculateAverage([1, 2, 3, 4, 5]));
