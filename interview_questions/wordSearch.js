/* Given an m x n grid of characters board and a string word, return true if word exists in the grid.

The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

input: a matrix of characters and string
output: boolean true or false
constraints:
word = cat
cat
  x
[[b, c, l],
 [t, a, q],
 [x, f, t]]

boat

[[p, e, h, t],
 [b, o, r, b],
 [o, t, a, o]]


*/

var exist = function(grid, word) {
  let found = false;
  // iterate until we find first letter
  for (let i = 0; i < grid.length; i++) {
    let row = grid[i];
    for (let j = 0; j < row.length; j++) {
      let char = row[j];
      // call backtracker function
      if (char === word[0]) {
        row[j] = false;
        if (backtracker(i, j, 1, grid, found, word)) return true;
        row[j] = char;
      }
    }
  }
  // return true or false depending on if we find backtrackging function
  return false;
}

var backtracker = function(row, col, wordIndex, grid, found, word) {
  // if we are at wordIndex = word.length found = true; return
  if (wordIndex === word.length) {
    return true;
  }
  // search left
  if (col - 1 >= 0 && grid[row][col - 1] === word[wordIndex]) {
    let saveChar = grid[row][col - 1]
    grid[row][col - 1] = false;
    if(backtracker(row, col - 1, wordIndex + 1, grid, found, word)) return true;
    grid[row][col - 1] = saveChar;

  }
  // search up
  if (row - 1 >= 0 && grid[row - 1][col] === word[wordIndex]) {
    let saveChar = grid[row - 1][col]
    grid[row - 1][col] = false;
    if(backtracker(row - 1, col, wordIndex + 1, grid, found, word)) return true;
    grid[row - 1][col] = saveChar;
  }
  // search right
  if (col + 1 < grid[row].length && grid[row][col + 1] === word[wordIndex]) {
    let saveChar = grid[row][col + 1]
    grid[row][col + 1] = false;
    if(backtracker(row, col + 1, wordIndex + 1, grid, found, word)) return true;
    grid[row][col + 1] = saveChar;
  }
  // search down
  if (row + 1 < grid.length && grid[row + 1][col] === word[wordIndex]) {
    let saveChar = grid[row + 1][col]
    grid[row + 1][col] = false;
    if(backtracker(row + 1, col, wordIndex + 1, grid, found, word)) return true;
    grid[row + 1][col] = saveChar;
  }
  // if we find it call backtracker with appropriate indices (wordindex++) row or col + or -
  // and word index is on last letter the return true
  return false
}