// Given a string s that consists of only uppercase English letters, you can perform at most k operations on that string.

// In one operation, you can choose any character of the string and change it to any other uppercase English character.

// Find the length of the longest sub-string containing all repeating letters you can get after performing the above operations.

// Note:
// Both the string's length and k will not exceed 104.

// Example 1:

// Input:
// s = "ABAB", k = 2

// Output:
// 4

// Explanation:
// Replace the two 'A's with two 'B's or vice versa.


// Example 2:

// Input:
// s = "AABABBA", k = 1

// Output:
// 4

// Explanation:
// Replace the one 'A' in the middle with 'B' and form "AABBBBA".
// The substring "BBBB" has the longest repeating letters, which is 4.

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
 var characterReplacement = function(s, k) {
  let maxLength = 0;
  for (let i = 0; i < s.length; i ++) {
    let potential = s[i];
    let copy = k;
    let length = 1;
    for (let j = i + 1; copy >= 0; j++) {
      if (s[j] === potential) {
        length++;
      } else if (copy > 0) {
        length++;
        copy--;
      } else {
        break;
      }
    }
    maxLength = (maxLength > length) ? maxLength : length;
  }
  return (maxLength > s.length) ? s.length : maxLength;
};