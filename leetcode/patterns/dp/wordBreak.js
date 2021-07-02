/* Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.

Note that the same word in the dictionary may be reused multiple times in the segmentation.

Example 1:

Input: s = "leetcode", wordDict = ["leet","code"]
Output: true
Explanation: Return true because "leetcode" can be segmented as "leet code".
Example 2:

Input: s = "applepenapple", wordDict = ["apple","pen"]
Output: true
Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
Note that you are allowed to reuse a dictionary word.
Example 3:

Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
Output: false */

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
  const dp = new Array(s.length + 1).fill(0); 
  let canSequence = false;
  // at each letter (index in dp) store array of all word dict index slices of s
  for (let i = 1; i < s.length + 1; i++) {
    for (let j = 0; j < i; j++) {
      if (dp[j] || !j) {
        if (wordDict.includes(s.slice(j, i))) {
          if (dp[i]) {
            dp[i].push([j, i])
          } else {
            dp[i] = [[j, i]];
          }
        }
      }
    }       
  }
  // back track, starting at the end checking every combination of potential 
  function reverseTracker(curIndex) {
    if (!curIndex) {
      canSequence = true;
      return;
    }
    for (let i = curIndex; i >= 0; i--) {
      let indexArr = curIndex
      if (!indexArr) return;
      for (let j = 0; j < indexArr.length; j++) {
        const word = indexArr[j];
        if (dp[word[0]]) {
          reverseTracker(j);
          if (canSequence) return;
        }
      }
    }
  }
  reverseTracker(dp.length - 1);
  return canSequence;
};