function calculateMatrixSum(matrix) {
  var sum = 0;
  for (var index = 0; index < matrix.length; index++)
    for (var index_ = 0; index_ < matrix[index].length; index_++) sum += matrix[index][index_];
  return sum;
}
