// Given a string s, find the length of the longest substring without repeating characters.



// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
// Example 4:

// Input: s = ""
// Output: 0


// Constraints:


var lengthOfLongestSubstring = function(s) {
  if (s.length === 0) {
    return 0;
  }
  let curCount = 0;
  let longest = 0;
  let charMap = {};
  for (let i = 0; i < s.length; i++) {
    let char = s[i]
    if (charMap[char]) {
      longest = (longest > curCount ? longest : curCount);
      charMap = {};
      charMap[char] = char
      curCount = 1;
    } else {
      curCount++;
      charMap[char] = char;
    }
  }
  return longest;
};