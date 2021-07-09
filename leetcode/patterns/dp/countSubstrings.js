/* Given a string s, return the number of palindromic substrings in it.

A string is a palindrome when it reads the same backward as forward.

A substring is a contiguous sequence of characters within the string.

Example 1:

Input: s = "abc"
Output: 3
Explanation: Three palindromic strings: "a", "b", "c".

Example 3: 

Input: s = "dogo"
Output: 5
Explanation: Three palindromic strings: "d", "o", "g", "o", "ogo".
[d,o,g,o]
  d o g o
d[1,0,0,0]
o[0,1,0,1],
g[0,0,1,0],
o[0,0,0,1] 

Example 2:

Input: s = "aaa"
Output: 6
Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".

Constraints:

1 <= s.length <= 1000
s consists of lowercase English letters.
 */

// iterate to check whether two letters in s are equal. If they are, check if the letters inbetween are a palindrome. If they are, that substring is also a palindrome
/**
 * @param {string} s
 * @return {number}
 */
// O(n^2) O(n^2)
 var countSubstrings = function(s) {
   let count = s.length;
   // Create an nxn matrix filled with 0's
  let dp = new Array(s.length);
  for (let i = 0; i < dp.length; i++) {
    let arr = new Array(s.length).fill(0);
    dp[i] = arr;
    // add a 1 at every palindrome (each individual letter)
    dp[i][i] = 1;
  }
  // we already know every single letter is a palindrome so we start distance (between first and last letter) at 1 checking every 2 length substring then 3, 4....
  for (let distance = 1; distance < s.length; distance++) {
    // start at 0 and iterate until we reach the end of the string
    for (let start = 0; start < s.length - distance; start++) {
      // end will be start + distance creating 2 length substring, 3 length substring etc.
      let end = start + distance;
      // check to see if start and end letters are equal. If they are check if the letters inbetween form a palindrome (cached in dp matrix) i.e., check that we have a palindrome
      if (s[start] === s[end] && (dp[start + 1][end - 1] || end - 1 === start)) {
        // cache in dp matrix for later checking
        dp[start][end] = 1;
        // increment count
        count++;
      }
    }
  }
  return count;
};
