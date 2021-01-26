// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-2**31, 2**31 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).



// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21
// Example 4:

// Input: x = 0
// Output: 0


// Constraints:

// -231 <= x <= 231 - 1

/**
 * @param {number} x
 * @return {number}
 */

// Naive solution
var reverse = function(x) {
  let str = x.toString();
  let neg = str[0] === '-';
  let reverse = '';
  for (let i = str.length - 1; i >= (neg ? 1 : 0); i--) {
    reverse += str[i];
  }
  reverse  = +reverse;
  if (neg) {
    reverse -= (2 * reverse);
  }
  if (reverse <= -(2 ** 31) || reverse >= 2 ** 31) {
    return 0;
  }
  return reverse;
};


// Time complexity optimized
function reverse(x) {
  let reverse = 0;
  let copy = x;
  while (copy !== 0) {
    reverse = (reverse * 10) + (copy % 10);
    copy -= copy % 10;
    copy /= 10;
    if (reverse <= -(2 ** 31) || reverse >= 2 ** 31) {
      return 0;
    }
  }
  return reverse;
}