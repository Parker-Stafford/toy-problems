/* Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.

Example 1:

Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
Output: 6
Explanation: [1,1,1,0,0,1,1,1,1,1,1]
Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
Example 2:

Input: nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3
Output: 10
Explanation: [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]
Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// brute force
 var longestOnes = function(nums, k) {
  let start = 0;
  let end = 0;
  let max = 0;
  let zeroes = 0;
  while (start < nums.length) {
    for (let i = start; i < nums.length; i++) {
      const num = nums[i];
      if (zeroes === k) {
        if (i === nums.length - 1) end = i + 1;
        if (num) continue;
        end = i;
        max = Math.max(end - start, max);
        break;
      } 
      if (!num) zeroes++;
      if (i === nums.length - 1) {
          end = i + 1
      }  
    }
    max = Math.max(end - start, max);
    start++;
    zeroes = 0;
  }
  return max;
};

// sliding window
var longestOnes = function(nums, k) {
  let start = -1;
  for (let end = 0; end < nums.length; end++) {
    const num = nums[end];
    if (!num) k--;
    if (k < 0) {
      start++;
      if (!nums[start]) k++;
    }
  }
  return nums.length - start - 1;
}