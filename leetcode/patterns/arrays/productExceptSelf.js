// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.



// Example 1:

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]
// Example 2:

// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]


// Constraints:

// 2 <= nums.length <= 105
// -30 <= nums[i] <= 30
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.


// Follow up:

// Could you solve it in O(n) time complexity and without using division?
// Could you solve it with O(1) constant space complexity? (The output array does not count as extra space for space complexity analysis.)

/**
 * @param {number[]} nums
 * @return {number[]}
 */
// two pass naive O(1) space O(n) time
 var productExceptSelf = function(nums) {
  let hasZero = false;
  let hasTwoZeros = false;
  let sum = 1;
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      if (hasZero) {
        hasTwoZeros = true;
      } else {
        hasZero = true;
      }
    } else {
      sum *= nums[i];
    }
  }
  if (hasTwoZeros) {
    for (let i = 0; i < nums.length; i++) {
      result.push(0);
    }
    return result;
  } else if (hasZero) {
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === 0) {
        result.push(sum);
      } else {
        result.push(0);
      }
    }
    return result;
  } else {
    for (let i = 0; i < nums.length; i++) {
      result.push(sum/nums[i])
    }
    return result;
  }
};