// Given a string containing just the characters '(' and ')', find the length of the longest valid (well-formed) parentheses substring.



// Example 1:

// Input: s = "(()"
// Output: 2
// Explanation: The longest valid parentheses substring is "()".
// Example 2:

// Input: s = ")()())"
// Output: 4
// Explanation: The longest valid parentheses substring is "()()".
// Example 3:

// Input: s = ""
// Output: 0


// Constraints:

// 0 <= s.length <= 3 * 104
// s[i] is '(', or ')'.

/**
 * @param {string} s
 * @return {number}
 */
 var longestValidParentheses = function(s) {
  let left = 0;
  let right = 0;
  let leftCount = 0;
  let rightCount = 0;
  let leftMax = 0;
  let rightMax = 0;
  // iterate left to right
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') left++;
    if (s[i] === ')') right++;
    // when right is equal to left update the count
    if (right === left) leftCount = right * 2;
    if (right > left) {
      right = 0;
      left = 0;
      leftCount = 0;
    }
    // update max if neceessary
    leftMax = (leftMax > leftCount) ? leftMax : leftCount;
  }
  left = 0;
  right = 0;
  // iterate left to right
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === ')') right++;
    if (s[i] === '(') left++;
    // when right is equal to left update the count
    if (right === left) rightCount = left * 2;
    if (left > right) {
      right = 0;
      left = 0;
      rightCount = 0;
    }
    // update the max if necessary
    rightMax = (rightMax > rightCount) ? rightMax : rightCount;
  }
  // return the greater of rightMax and leftMax
  return (leftMax > rightMax) ? leftMax : rightMax;
}

