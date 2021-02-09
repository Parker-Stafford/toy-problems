// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.



// Example 1:

// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]
// Example 2:

// Input: n = 1
// Output: ["()"]

/**
 * @param {number} n
 * @return {string[]}
 */

var generateParenthesis = function(n) {
  const result = [];
  function generator(string, left, right) {
    if (left === n && right === n) {
      result.push(string);
      return;
    }
    // add a left
    if (left < n) {
      generator(string + '(', left + 1, right)
    }
    // add a right
    if (right < n && right < left) {
      generator(string + ')', left, right + 1)
    }
  }
  generator('', 0, 0)
  return result;
};