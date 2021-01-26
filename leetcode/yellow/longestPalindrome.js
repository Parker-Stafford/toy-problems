// Given a string s, return the longest palindromic substring in s.



// Example 1:

// Input: s = "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.
// Example 2:

// Input: s = "cbbd"
// Output: "bb"
// Example 3:

// Input: s = "a"
// Output: "a"
// Example 4:

// Input: s = "ac"
// Output: "a"


// Constraints:

// 1 <= s.length <= 1000
// s consist of only digits and English letters (lower-case and/or upper-case),

function checkPalindrome(s) {
  if (s.length % 2 === 0) {
    var half = (s.length / 2)
    var front = s.slice(0, half);
    var back = s.slice(half, s.length);
  } else {
    var half = Math.floor(s.length / 2);
    var front = s.slice(0, half);
    var back = s.slice(half + 1, s.length);
  }
  back = back.split('').reduce((reverse, char) => char + reverse, '');
  return front === back;
}

function longestPalindrome(s) {
  let longest = '';
  for (let i = 0; i < s.length; i++) {
    for (let j = s.length; j > i; j--) {
      if (s[i] !== s[j - 1]) {
        continue;
      }
      let subString = s.slice(i, j);
      if (checkPalindrome(subString)) {
        longest = subString.length > longest.length ? subString : longest;
        if (i === 0 && j === s.length) {
          return longest;
        }
      }
    }
  }
  return longest;
}