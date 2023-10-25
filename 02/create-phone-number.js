const createPhoneNumber = (numbers) => {
  numbers.unshift("(");

// Addition of closing bracket and spacing after 3rd number
  numbers.splice(4, 0, ")", " ");

// Addition of (-) after 6th number
  numbers.splice(9, 0, "-");

  return numbers.join("");
};