// Given a collection of numbers, nums, that might contain duplicates, return all possible unique permutations in any order.



// Example 1:

// Input: nums = [1,1,2]
// Output:
// [[1,1,2],
// [1,2,1],
// [2,1,1]]
// Example 2:

// Input: nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]


/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// all permutations with caching
var permuteUnique = function(nums) {
  const results = [];
  const cache = new Map();
  const indices = {};
  debugger;
  function backtrack(perm) {
    if (perm.length === nums.length) {
      if (!cache[perm]) {
        results.push(perm);
        cache[perm] = true;
      }
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (indices[i]) continue;
      indices[i] = true;
      backtrack(perm.concat(nums[i]))
      indices[i] = false;
    }
  }
  for (let i = 0; i < nums.length; i++) {
    indices[i] = true;
    backtrack([].concat(nums[i]));
    indices[i] = false;
  }
  return results;
};

// only valid permuations