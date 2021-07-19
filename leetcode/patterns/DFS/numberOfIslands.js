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

/**
 * @param {character[][]} grid
 * @return {number}
 */
 var numIslands = function(grid) {
   let islandCount = 0;
  // iterate over matrix
  for (let i = 0; i < grid.length; i++) {
    const row = grid[i];
    for (let j = 0; j < row.length; j++) {
      const square = row[j];
      // if we reach 1 
      if (square === '1') {
        // increment island count
        islandCount++;
        // perform dfs on that piece of land
        dfs(i, j, grid);
      }
    }
  }
  return islandCount;
};

var dfs = function(row, col, map) {
  // check to make sure we're not out of bounds // check to make sure we are at a 1
  if (row < 0 || col < 0 || row > map.length - 1 || col > map[row].length - 1 || map[row][col] === '0') return;
  // modify the current piece of land to be water
  map[row][col] = '0'
  // check up right down and left
  dfs(row - 1, col, map);
  dfs(row + 1, col, map);
  dfs(row, col - 1, map);
  dfs(row, col + 1, map);
}