// Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

// There is only one repeated number in nums, return this repeated number.



// Example 1:

// Input: nums = [1,3,4,2,2]
// Output: 2
// Example 2:

// Input: nums = [3,1,3,4,2]
// Output: 3
// Example 3:

// Input: nums = [1,1]
// Output: 1
// Example 4:

// Input: nums = [1,1,2]
// Output: 1


/**
 * @param {number[]} nums
 * @return {number}
 */
 var findDuplicate = function(nums) {
  let cache = {};
  for (let i = 0; i < nums.length; i++) {
    if (!cache[nums[i]]) {
      cache[nums[i]] = true;
    } else {
      return nums[i];
    }
  }
};

// fast and slow pointers
var findDuplicate = function(nums) {
  let fast = nums[0];
  let slow = nums[0];
  while (true) {
    fast = nums[nums[fast]];
    slow = nums[slow];
    if (fast === slow) break;
  }
  slow = nums[0];
  while (fast !== slow) {
    slow = nums[slow];
    fast = nums[fast];
  }
  return slow;
}