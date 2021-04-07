// Given an integer array nums of unique elements, return all possible subsets (the power set).

// The solution set must not contain duplicate subsets. Return the solution in any order.



// Example 1:

// Input: nums = [1,2,3]
// Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
// Example 2:

// Input: nums = [0]
// Output: [[],[0]]


// Constraints:

// 1 <= nums.length <= 10
// -10 <= nums[i] <= 10
// All the numbers of nums are unique.

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// basic backtracking
 var subsets = function(nums) {
  const results = [];
  function backtracker(i, subset = []) {
    if (i === nums.length) {
      results.push(subset);
      return;
    }
    // skip
    backtracker(i + 1, subset)
    // push
    backtracker(i + 1, subset.concat(nums[i]));
  }
  backtracker(0);
  return results;
};