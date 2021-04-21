// Longest Increasing Path in a Matrix
// Given an m x n integers matrix, return the length of the longest increasing path in matrix.

// From each cell, you can either move in four directions: left, right, up, or down. You may not move diagonally or move outside the boundary (i.e., wrap-around is not allowed).



// Example 1:


// Input: matrix = [[9,9,4],[6,6,8],[2,1,1]]
// Output: 4
// Explanation: The longest increasing path is [1, 2, 6, 9].
// Example 2:


// Input: matrix = [[3,4,5],[3,2,6],[2,2,1]]
// Output: 4
// Explanation: The longest increasing path is [3, 4, 5, 6]. Moving diagonally is not allowed.
// Example 3:

// Input: matrix = [[1]]
// Output: 1



/**
 * @param {number[][]} matrix
 * @return {number}
 */
 var longestIncreasingPath = function(matrix) {
  let len = 1;
  let map = {};
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      map[`${i}${j}`] = 0;
    }
  }
  function backtracker(arr, row, col, cur, isCycle) {
    if (arr.length <= map[`${row}${col}`]) {
      if (!isCycle) {
        if (col === matrix[row].length - 1 && matrix[row + 1]) {
          backtracker([matrix[row+1][0]], row + 1, 0, matrix[row+1][0], false);
        } else if (row === matrix.length - 1 && col === matrix[row].length - 1) {
          return;
        } else {
            backtracker([matrix[row][col + 1]], row, col + 1, matrix[row][col + 1], false)
        }
      }

      len = len > arr.length ? len : arr.length;
      return;
    } else {
      map[`${row}${col}`] = arr.length;
        // check up
      if (matrix[row - 1] && matrix[row - 1][col] > cur) {
        let addition = matrix[row - 1][col];
        backtracker(arr.concat(addition), row - 1, col, addition, true);
      }
      // check down
      if (matrix[row + 1] && matrix[row + 1][col] > cur) {
        let addition = matrix[row + 1][col];
        backtracker(arr.concat(addition), row + 1, col, addition, true);
      }
      // check left
      if (matrix[row][col - 1] > cur) {
        let addition = matrix[row][col - 1];
        backtracker(arr.concat(addition), row, col - 1, addition, true);
      }

      // check right
      if (matrix[row][col + 1] > cur) {
        let addition = matrix[row][col + 1];
        backtracker(arr.concat(addition), row, col + 1, addition, true);
      }
    }

    len = len > arr.length ? len : arr.length;
  }
  backtracker([matrix[0][0]], 0, 0, matrix[0][0], false);
  return len;
};