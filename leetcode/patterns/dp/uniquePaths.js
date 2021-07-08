/* A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

How many possible unique paths are there?

Example 1:
Input: m = 3, n = 7
Output: 28

Example 2:
Input: m = 3, n = 2
Output: 3
Explanation:
From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
1. Right -> Down -> Down
2. Down -> Down -> Right
3. Down -> Right -> Down

[[2, 1
  2, 1
  1, 0]]

Example 3:
Input: m = 7, n = 3
Output: 28

Example 4:
Input: m = 3, n = 3
Output: 6 
[[2, 2, 1],
 [2, 2, 1]
 [1, 1, 0]]

 [[1, 1, 1],
  [1, 2, 3]
  [1, 3, 6]]


*/




/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
// strategy track the number of ways to get to each square starting with 1 at the first square. To do this, at each square, find the squares the robot could have come from (top and/or left) and add those together
 var uniquePaths = function(m, n) {
  // make a matrix with lenght of m (height)
  let matrix = new Array(m);
  for (let i = 0; i < matrix.length; i++) {
    // for each row add an array of length n (width)
    matrix[i] = new Array(n);
    const row = matrix[i];
    for (let j = 0; j < row.length; j++) {
      // first space is 1 because there is 1 way to get to the next square from here
      if (!i && !j) {
        row[j] = 1;
        continue;
      }
      // otherwise space is 0
      row[j] = 0;
      // if one space to the left isn't out of bounds add the number of ways to get to that square to this square
      if (row[j - 1]) row[j] += row[j - 1];
      // if one space above isn't out of bounds add the number of ways to get to that square to this square
      if (matrix[i - 1]) row[j] += matrix[i - 1][j];
    }
  }
  // return the final position which has all the ways to get there
  return matrix[m - 1][n - 1];
};