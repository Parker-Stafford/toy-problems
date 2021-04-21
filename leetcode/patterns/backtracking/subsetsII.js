// Given an integer array nums that may contain duplicates, return all possible subsets (the power set).

// The solution set must not contain duplicate subsets. Return the solution in any order.



// Example 1:

// Input: nums = [1,2,2]
// Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]
// Example 2:

// Input: nums = [0]
// Output: [[],[0]]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// naive stringify with map
 var subsetsWithDup = function(nums) {
  const result = new Map();
  const backtracker = (s = [], i = 0) => {
    if (i === nums.length) {
        if (result.has(JSON.stringify(s.sort((a,b) => a-b)))) {
            return;
        } else {
      result.set(JSON.stringify(s.sort((a,b) => a-b)), s);
        }

      return;
    }
    backtracker(s, i + 1);
    backtracker(s.concat(nums[i]), i + 1);
  }
  backtracker();
  return Array.from(result.values());
};

// sort and check current num against previous num
var subsetsWithDup = function(nums) {
  const result = [];
  nums.sort();
  function backtracker(start, s) {
    result.push(s);
    for (let i = start; i < nums.length; i++) {
      if (i > start && nums[i] === nums[i - 1]) continue;
      backtracker(i + 1, [...s, nums[i]]);
    }
  }
  backtracker(0, []);
  return result;
}