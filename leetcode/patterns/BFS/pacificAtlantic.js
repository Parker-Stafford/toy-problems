/* There is an m x n rectangular island that borders both the Pacific Ocean and Atlantic Ocean. The Pacific Ocean touches the island's left and top edges, and the Atlantic Ocean touches the island's right and bottom edges.

The island is partitioned into a grid of square cells. You are given an m x n integer matrix heights where heights[r][c] represents the height above sea level of the cell at coordinate (r, c).

The island receives a lot of rain, and the rain water can flow to neighboring cells directly north, south, east, and west if the neighboring cell's height is less than or equal to the current cell's height. Water can flow from any cell adjacent to an ocean into the ocean.

Return a 2D list of grid coordinates result where result[i] = [ri, ci] denotes that rain water can flow from cell (ri, ci) to both the Pacific and Atlantic oceans.

Example 1:
Input: heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]
Output: [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]

Example 2:
Input: heights = [[2,1],[1,2]]
Output: [[0,0],[0,1],[1,0],[1,1]]

[[1,2,2,3,5],
 [3,2,3,4,4],
 [2,4,5,3,1],
 [6,7,1,4,5],
 [5,1,1,2,4]]

results = [[upper right], [lower left]]
[[p,p,p,p,pa],
 [p,n,n,n,a],
 [p,n,n,n,a],
 [p,n,n,n,a]
 [pa,a,a,a,a]

Constraints:

m == heights.length
n == heights[r].length
1 <= m, n <= 200
0 <= heights[r][c] <= 105 */

/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
// O(mn) space and time
var pacificAtlantic = function(heights) {
  // make results array
  const reachable = [];
  const pacific = new Array(heights.length);
  const atlantic = new Array(heights.length);
  for (let row = 0; row < heights.length; row++) {
    const element = heights[row];
    pacific[row] = new Array(heights[row].length).fill(0);
    atlantic[row] = new Array(heights[row].length).fill(0);
  }
  function dfs(prev, row, col, ocean) {
    // check necessary conditions
    // out of bounds
    if (row < 0 || row > heights.length - 1 || col < 0 || col > heights[row].length - 1) return;
    // moving away from the ocean so the current value is lower than where we came from
    if (heights[row][col] < prev) return;
    // already visited
    if (ocean[row][col]) return;
    // process cell
    ocean[row][col] = 1; 
    // call dfs as needed
    dfs(heights[row][col], row - 1, col, ocean);
    dfs(heights[row][col], row + 1, col, ocean);
    dfs(heights[row][col], row, col - 1, ocean);
    dfs(heights[row][col], row, col + 1, ocean);
  }
  // first and last rows
  for (let col = 0; col < heights[0].length; col++) {
    dfs(-Infinity, 0, col, pacific);
    dfs(-Infinity, heights.length - 1, col, atlantic);
  }
  // first and last cols
  for (let row = 0; row < heights.length; row++) {
    dfs(-Infinity, row, 0, pacific);
    dfs(-Infinity, row, heights[row].length - 1, atlantic);
  }
  for (let row = 0; row < pacific.length; row++) {
    for (let col = 0; col < pacific[row].length; col++) {
      const element = pacific[row][col];
      if (pacific[row][col] && atlantic[row][col]) reachable.push([row, col])
    }
  }
  return reachable;
};