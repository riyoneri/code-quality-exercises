function calculateFactorial(n) {
  if (n <= 1) return n;

  return n * calculateFactorial(n - 1);
}
