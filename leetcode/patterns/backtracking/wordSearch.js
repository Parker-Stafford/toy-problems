// Given an m x n grid of characters board and a string word, return true if word exists in the grid.

// The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.



// Example 1:


// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
// Output: true
// Example 2:


// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
// Output: true
// Example 3:


// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
// Output: false


// Constraints:

// m == board.length
// n = board[i].length
// 1 <= m, n <= 6
// 1 <= word.length <= 15
// board and word consists of only lowercase and uppercase English letters.


// Follow up: Could you use search pruning to make your solution faster with a larger board?

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
 var exist = function(board, word) {
  let finished = false;
 function backtracker(index, rowIndex = 0, colIndex = 0) {
   if (index === word.length) {
     finished = true;
     return;
   }
   // check left
   if (board[rowIndex][colIndex - 1] === word[index]) {
     let save = board[rowIndex][colIndex - 1];
     board[rowIndex][colIndex - 1] = false;
     backtracker(index + 1, rowIndex, colIndex - 1);
     if (finished) return;
     board[rowIndex][colIndex - 1] = save;
   }
   // check right
   if (board[rowIndex][colIndex + 1] === word[index]) {
     let save = board[rowIndex][colIndex + 1];
     board[rowIndex][colIndex + 1] = false;
     backtracker(index + 1, rowIndex, colIndex + 1);
     if (finished) return;
     board[rowIndex][colIndex + 1] = save;
   }
   // check up
   if (board[rowIndex - 1] && board[rowIndex - 1][colIndex] === word[index]) {
     let save = board[rowIndex - 1][colIndex];
     board[rowIndex - 1][colIndex] = false;
     backtracker(index + 1, rowIndex - 1, colIndex);
     if (finished) return;
     board[rowIndex - 1][colIndex] = save;
   }
   // check down
   if (board[rowIndex + 1] && board[rowIndex + 1][colIndex] === word[index]) {
     let save = board[rowIndex + 1][colIndex];
     board[rowIndex + 1][colIndex] = false;
     backtracker(index + 1, rowIndex + 1, colIndex);
     if (finished) return;
     board[rowIndex + 1][colIndex] = save;
   }
 }
 for (let i = 0; i < board.length; i++) {
   let row = board[i];
   for (let j = 0; j < row.length; j++) {
     if (board[i][j] === word[0]) {
         let save = board[i][j];
         board[i][j] = false;
         backtracker(1, i, j);
         board[i][j] = save;
     }
     if (finished) {
       break;
     }
     if (finished) {
       break;
     }
   }
 }
 return finished;
};
