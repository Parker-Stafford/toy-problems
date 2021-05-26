// Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.



// Example 1:

// Input: nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
// Example 2:

// Input: nums = [0,1]
// Output: [[0,1],[1,0]]
// Example 3:

// Input: nums = [1]
// Output: [[1]]


// Constraints:

// 1 <= nums.length <= 6
// -10 <= nums[i] <= 10
// All the integers of nums are unique.
// Accepted
// 822,005
// Submissions
// 1,215,429

/**
 * @param {number[]} nums
 * @return {number[][]}
 */


 var permute = function(nums) {
  let result = [];

  function backtracker(cur) {
    if (cur.length === nums.length) {
      result.push(cur);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (cur.indexOf(nums[i]) !== - 1) {
        backtracker(cur.concat(nums[i]));
      }
    }
  }
  for (let i = 0; i < nums.length; i++) {
    backtracker([]);
  }
  return result;
};