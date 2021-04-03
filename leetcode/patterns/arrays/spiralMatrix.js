// Given an m x n matrix, return all elements of the matrix in spiral order.



// Example 1:


// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [1,2,3,6,9,8,7,4,5]
// Example 2:


// Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
// Output: [1,2,3,4,8,12,11,10,9,5,6,7]


// Constraints:

// m == matrix.length
// n == matrix[i].length
// 1 <= m, n <= 10
// -100 <= matrix[i][j] <= 100

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
// O(n) matrix size O(1)
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