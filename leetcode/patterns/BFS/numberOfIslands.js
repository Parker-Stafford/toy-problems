/* Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

Example 1:
Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1

Example 2:
Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]

[
  ["0","0","0","0","0"],
  ["0","0","0","0","0"],
  ["0","0","0","0","0"],
  ["0","0","0","0","0"]
]
// iterate over matrix
  // if we reach 1 
    // increment island count
    // perform dfs on that piece of land
      // check to make sure we're not out of bounds // check to make sure we are at a 1
      // modify the current piece of land to be water
      // check up right down and left
Output: 3
 
Constraints:

m == grid.length
n == grid[i].length
1 <= m, n <= 300
grid[i][j] is '0' or '1'.
 */

var numIslands = function(grid) {
  let islandCount = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      const square = grid[i][j];
      if (square === '1') {
        islandCount++;
        const queue = [[i, j]];
        while(queue.length) {
          const [row, col] = queue.shift();
          if (grid[row][col] === '0') continue;
          grid[row][col] = '0';
          if (row - 1 >= 0 && grid[row - 1][col] === '1') queue.push([row - 1, col]);
          if (row + 1 <= grid.length - 1 && grid[row + 1][col] === '1') queue.push([row + 1, col]);
          if (col - 1 >= 0 && grid[row][col - 1] === '1') queue.push([row, col - 1]);
          if (col + 1 <= grid[row].length - 1 && grid[row][col + 1] === '1') queue.push([row, col + 1]);
        }
      }
    }
  }
  return islandCount;
}

var numIslands = function(grid) {
  let islandCount = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      const square = grid[i][j];
      if (square === '1') {
        islandCount++;
        const queue = [[i, j]];
        while(queue.length) {
          const [row, col] = queue.shift();
          if (row < 0 || col < 0 || row > grid.length -1 || col > grid[row].length - 1 || grid[row][col] === '0') continue;
          grid[row][col] = '0';
          queue.push([row - 1, col], [row + 1, col], [row, col - 1], [row, col + 1]);
        }
      }
    }
  }
  return islandCount;
}