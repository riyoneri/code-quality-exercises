const calculateSum = (array) =>
  array
    .flat(Number.POSITIVE_INFINITY)
    .reduce((sum, element) => sum + element, 0);
