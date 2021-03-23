// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.



// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2


// Constraints:

// n == nums.length
// 1 <= n <= 5 * 104
// -231 <= nums[i] <= 231 - 1


// Follow-up: Could you solve the problem in linear time and in O(1) space?

/**
 * @param {number[]} nums
 * @return {number}
 */

// O(n) time O(n) space
 var majorityElement = function(nums) {
  let cache = {};
  let max = {};
  for (let i = 0; i < nums.length; i++) {
    if (!cache[nums[i]]) {
      cache[nums[i]] = 1;
    } else {
      cache[nums[i]]++;
    }
    if (!max.count || max.count < cache[nums[i]]) {
      max.value = nums[i];
      max.count = cache[nums[i]];
      if (max.count > nums.length / 2) {
        return max.value;
      }
    }
  }
  return max.value;
};

// Boyer-Moore algorithm

var majorityElement = function(nums) {
  let count = 0;
  let result;
  for (let i = 0; i < nums.length; i++) {
    if (count === 0) {
      result = nums[i];
    }
    result === nums[i] ? count++ : count--;
  }
  return result;
}