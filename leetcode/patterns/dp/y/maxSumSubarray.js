// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.



// Example 1:

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.
// Example 2:

// Input: nums = [1]
// Output: 1
// Example 3:

// Input: nums = [0]
// Output: 0
// Example 4:

// Input: nums = [-1]
// Output: -1
// Example 5:

// Input: nums = [-100000]
// Output: -100000

/**
 * @param {number[]} nums
 * @return {number}
 */

var maxSubArray = function(nums) {
  if (nums.length === 1) return nums[0];
  let sum;
  let max;
  for (let i = 0; i < nums.length; i++) {
    if (sum === undefined) {
      sum = nums[i];
    } else {
      if (nums[i] > sum && nums[i] > sum + nums[i]) {
        sum = nums[i];
      } else {
        sum += nums[i];
      }
    }
    if (sum > max || max === undefined) {
      max = sum;
    }
  }
  return max;
};