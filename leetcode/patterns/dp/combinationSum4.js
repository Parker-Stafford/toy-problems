/* Given an array of distinct integers nums and a target integer target, return the number of possible combinations that add up to target.

The answer is guaranteed to fit in a 32-bit integer.

 

Example 1:

Input: nums = [1,2,3], target = 4
Output: 7
Explanation:
The possible combination ways are:
(1, 1, 1, 1)
(1, 1, 2)
(1, 2, 1)
(1, 3)
(2, 1, 1)
(2, 2)
(3, 1)
Note that different sequences are counted as different combinations.
Example 2:

Input: nums = [9], target = 3
Output: 0 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// backtracking slow O(n^n)
var combinationSum4 = function(nums, target) {
  let count = 0;
  function backtracker(sum) {
    if (sum === target) return count++;
    for (const num of nums) {
      if(sum + num > target) continue;
      backtracker(sum + num);
    }
  }
  backtracker(0);
  return count;
};

// top down memoization
var combinationSum4 = function(nums, target) {
  const dp = new Array(target + 1).fill(0);
  // 1 for the completed combination
  dp[0] = 1;
  // iterate over dp and add the number of combos at i - num to dp[i]. i is the distance from target and dp[i] is the number of combos at that point.
  for (let i = 1; i <= target; i++) {
    for (const num of nums) {
      if (num <= i) dp[i] += dp[i - num]; 
    }
  }
  return dp[target]
}

// bottom up tabulation
var combinationSum4 = function(nums, target) {
  const dp = new Array(target + 1).fill(0);
  // 1 for the starting point
  dp[0] = 1;
  // iterate over dp and add all the ways to get to each number i. for example from there is one way to get to 1, 0 + 1 so dp[1] = 1, there are two ways to get to two so dp[2] = 2
  for (let i = 0; i <= target; i++) {
    if (!dp[i]) continue;
    for (const num of nums) {
      if (num + i <= target) dp[i + num] += dp[i];
    }
  }
  return dp[target];
}