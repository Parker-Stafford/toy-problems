/* Given a non-empty array nums containing only positive integers, find if the array can be partitioned into two subsets such that the sum of elements in both subsets is equal.

Example 1:
Input: nums = [1,5,11,5]
Output: true
Explanation: The array can be partitioned as [1, 5, 5] and [11].



Example 2:
Input: nums = [1,2,3,5]
Output: false
Explanation: The array cannot be partitioned into equal sum subsets.
 
Constraints:
1 <= nums.length <= 200
1 <= nums[i] <= 100 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
// brute force O(2^n) time and space complexity
var canPartition = function(nums) {
  const dp = new Array(nums.length);
  dp[0] = [[nums[0]], [0]];
  for (let i = 1; i < nums.length; i++) {
    const num = nums[i];
    dp[i] = [];
    for (let j = 0; j < dp[i - 1].length; j++) {
      const combo = dp[i - 1][j];
      if (i === nums.length - 1) {
        if (combo[0] + num === combo[1] || combo[0] === combo[1] + num) return true;
      }
      if (combo[0] === combo[1]) {
        dp[i].push([combo[0] + num, combo[1]]);
        continue;
      }
      dp[i].push([combo[0] + num, combo[1]]);
      dp[i].push([combo[0], combo[1] + num]);
    }
  }
  return false;
};

// dp knapsack solution O(nxm) time O(n) space
var canPartition = function (nums) {
  // get the total sum
  let sum = 0;
  for (const num of nums) sum += num;
  // because there are two subsets, each subset's sum must equal half of the sum of all nums
  // if total sum is odd then we can't have equal subsets return false;
  if (sum % 2 === 1) return false;
  // our target is half of sum
  const target = sum / 2;
  // make a dp array of length target + 1
  const dp = new Array(target + 1).fill(false);
  // sum of 0 can be reached
  dp[0] = true;
  // iterate over numbers to check whether a specific sum can be reached
  for (const num of nums) {
    // iterate over sums to see if they can be reached
    for (let j = target; j >= num; j--) {
      // if 
      dp[j] = dp[j] || dp[j - num];
    }
  }
  return dp[target];
}