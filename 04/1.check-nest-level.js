const nestedArray = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];

const isArray = (element) => Array.isArray(element);

const getNestedNumber = (array) => {
  let nestedLevels = 0;

  // Check whether array still contains nested element
  while (array.some((element) => isArray(element))) {
    array = array.flat();
    nestedLevels++;
  }

  return nestedLevels;
};

const nestedLevels = getNestedNumber(nestedArray);

const newArray = nestedArray.flat(nestedLevels);
