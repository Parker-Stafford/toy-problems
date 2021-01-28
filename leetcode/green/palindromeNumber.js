// Given an integer x, return true if x is palindrome integer.

// An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.



// Example 1:

// Input: x = 121
// Output: true
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
// Example 4:

// Input: x = -101
// Output: false


// Constraints:

// -231 <= x <= 231 - 1

function isPalindrome(x) {
  if (x < 0) {
    return false;
  }
  if (x >= 0 && x < 10) {
    return true;
  }
  let str = x.toString();
  let half = Math.floor(str.length / 2);
  let front = str.slice(0, half);
  let back = (str.length % 2 === 0 ? str.slice(half, str.length) : str.slice(half + 1, str.length));
  back = back.split('').reduce((reverse, char) => char + reverse, '');
  return front === back;
}