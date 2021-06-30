/* Given a string s, return the longest palindromic substring in s.

 

Example 1:

Input: s = "babad"
Output: "bab"
Note: "aba" is also a valid answer.
Example 2:

Input: s = "cbbd"
Output: "bb"
Example 3:

Input: s = "a"
Output: "a"
Example 4:

Input: s = "ac"
Output: "a" */

/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
  let maxLen = 0;
  let start = 0;
  let end = 1;
  // initialize table
  let dp = new Array(s.length)
  // length 1 arrays;
  for (let i = 0; i < s.length; i++) {
    dp[i] = (new Array(s.length).fill(0));
    dp[i][i] = 1;
  }
  // fill matrix
  // set distance between start and end
  for (let j = 1; j < s.length; j++) {
    // set start (don't go out of bounds)
    for (let i = 0; i < s.length - j; i++) {
      let k = i + j;
      // s.slice(i, k + 1) is a palindrome if s[i] === s[k] and the substring in between is a palindrome or the string is length two
      if (s[i] === s[k] && (dp[i + 1][k - 1] || k - 1 === i)) {
        dp[i][k] = 1;
        // track the max length and reset start and end
        if ((k + 1 - i) > maxLen) {
          maxLen = k + 1 - i;
          start = i;
          end = k + 1;
        }
      }
    }
  }
  return s.slice(start, end);
}
