// Given a sorted (in ascending order) integer array nums of n elements and a target value, write a function to search target in nums. If target exists, then return its index, otherwise return -1.


// Example 1:

// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4

// Example 2:

// Input: nums = [-1,0,3,5,9,12], target = 2
// Output: -1
// Explanation: 2 does not exist in nums so return -1

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let half = Math.floor(nums.length / 2);
  let start = 0;
  let end = nums.length - 1;
  while (start <= end) {
    if (nums[half] === target) {
      return half;
    } else if (nums[start] === target) {
      return start;
    } else if (nums[end] === target) {
      return end;
    } else if (nums[half] > target) {
      end = half - 1;
    } else {
      start = half + 1;
    }
    half = Math.floor((start + end) / 2)
  }
  return -1
};