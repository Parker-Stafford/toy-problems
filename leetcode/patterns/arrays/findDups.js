// Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

// Find all the elements that appear twice in this array.

// Could you do it without extra space and in O(n) runtime?

// Example:
// Input:
// [4,3,2,7,8,2,3,1]

// Output:
// [2,3]


/**
 * @param {number[]} nums
 * @return {number[]}
 */
// single pass O(n) space
 var findDuplicates = function(nums) {
  let cache = {}
  let result = [];
  nums.forEach((num) => {
    cache[num] ? result.push(num) : cache[num] = true;
  })
  return result;
};

// O(n) time O(1) space
var findDuplicates = function(nums) {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    let abs = Math.abs(nums[i]);
    let index = abs - 1;
    if (nums[index] < 0) result.push(abs);
    nums[index] = -nums[index]
  }
  return result;
}



