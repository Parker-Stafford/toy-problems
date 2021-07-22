/* "Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order."


[[1,2,3],
 [8,9,4],
 [7,6,5]]


[1,2,3,4,5,6,7,8,9]

[1,2,3,4]
[0,1,2,5]
[9,8,7,6]

1,2
// grab the top row
// grab the right
// grab the bottom
// grab the left

[1,2,3,4,5,6,7,8,9,0,1,2]
*/

var spiralOrder = function(matrix) {
  if (!matrix.length) return;
  let spiral = [];
  // add first row of matrix
  spiral.push(...matrix.shift());
      if (!matrix.length) return spiral;
  // add last element in each row of matrix
  for (let i = 0; i < matrix.length; i++) {
    spiral.push(matrix[i].pop());
  }
  // add last row of matrix
  while (matrix[matrix.length - 1].length) {
    spiral.push(matrix[matrix.length - 1].pop());
  }
    matrix.pop();
  // add first element of each row in matrix from bottom to top
  if (matrix.length && matrix[0].length) {
    for(let i = matrix.length - 1; i >= 0; i--) {
      spiral.push(matrix[i].shift());
    }
  }

  // recurse on new matrix and add to spiral
    if (matrix.length && matrix[0].length)   spiral.push(...spiralOrder(matrix));
  return spiral
}


var spiralOrder = function(matrix) {
  let firstR = 0;
  let lastR = matrix.length - 1;
  let firstC = 0;
  let lastC = matrix[firstR].length - 1;
  let results = [];
  while (firstR <= lastR && firstC <= lastC) {
    // first row
    for (let col = firstC; col <= lastC; col++) results.push(matrix[firstR][col]);
    // last col
    for (let row = firstR + 1; row <= lastR; row++) results.push(matrix[row][lastC]);
    // check if we still have elements
    if (firstR < lastR && firstC < lastC) {
      // last row
      for (let col = lastC - 1; col >= firstC; col--) results.push(matrix[lastR][col]);
      // first col
      for (let row = lastR - 1; row > firstR; row --) results.push(matrix[row][firstC]);
    }
    firstR++;
    lastR--;
    firstC++;
    lastC--;
  }
  return results;
};