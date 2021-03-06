// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".



// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.


// Constraints:

// 0 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lower-case English letters.

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let prefix = '';
  for (let i = 0; i < strs.length; i++) {
    if (i === 0) {
      prefix = strs[i];
    }
    for (let j = 0; j < prefix.length; j++) {
      if (prefix[j] !== strs[i][j]) {
        prefix = prefix.slice(0, j);
        break;
      }
    }
  }

  return prefix;
};