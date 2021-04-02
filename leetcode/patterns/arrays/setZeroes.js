// Given an m x n matrix. If an element is 0, set its entire row and column to 0. Do it in-place.

// Follow up:

// A straight forward solution using O(mn) space is probably a bad idea.
// A simple improvement uses O(m + n) space, but still not the best solution.
// Could you devise a constant space solution?


// Example 1:


// Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
// Output: [[1,0,1],[0,0,0],[1,0,1]]
// Example 2:


// Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
// Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]


// Constraints:

// m == matrix.length
// n == matrix[0].length
// 1 <= m, n <= 200
// -231 <= matrix[i][j] <= 231 - 1

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
// Brute force
 var setZeroes = function(matrix) {
  let row;
  let col;
  let cache = {
    rows: {},
    cols: {},
  }
  for (row = 0; row < matrix.length; row++) {
    let curRow = matrix[row];
    for (col = 0; col < curRow.length; col++) {
      if (curRow[col] === 0) {
        if (!cache.rows[row] && cache.rows[row] !== 0) cache.rows[row] = row;
        if (!cache.cols[col] && cache.cols[col] !== 0) cache.cols[col] = col;
      }
    }
  }
  for (const key in cache.rows) {
    let zeroRow = matrix[cache.rows[key]];
    for (let i = 0; i < zeroRow.length; i++) {
      zeroRow[i] = 0;
    }
  }
  for (const key in cache.cols) {
    let zeroCol = cache.cols[key];
    for (let i = 0; i < matrix.length; i++) {
      matrix[i][zeroCol] = 0;
    }
  }
  return matrix;
};

// flag first method
function setZeroes(matrix) {
  let row1 = false;
  let col1 = false;
  for (let row = 0; row < matrix.length; row++) {
    let curRow = matrix[row];
    for (let col = 0; col < curRow.length; col++) {
      if (curRow[col] === 0) {
        matrix[0][col] = 0;
        curRow[0] = 0;
        if (row === 0) {
          row1 = true;
        }
        if (col === 0) {
          col1 = true;
        }
      }
    }
  }
  // zero all columns
  for (let i = 1; i < matrix.length; i++) {
    let curRow = matrix[i]
    for (let j = 1; j < curRow.length; j++) {
      if (!matrix[i][0] || !matrix[0][j]) {
        matrix[i][j] = 0;
      }
    }
  }
  if (row1) {
    for (let i = 0; i < matrix[0].length; i++) {
      matrix[0][i] = 0;
    }
  }
  if (col1) {
    for (let i = 0; i < matrix.length;  i++) {
      matrix[i][0] = 0
    }
  }
  return matrix;
}