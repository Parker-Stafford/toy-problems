/* You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

 

Example 1:

Input: nums = [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
Total amount you can rob = 1 + 3 = 4.
Example 2:

Input: nums = [2,7,9,3,1]
Output: 12
Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
Total amount you can rob = 2 + 9 + 1 = 12.

Input: nums = [2,1,1,2]
Output: 4
*/


/**
 * @param {number[]} nums
 * @return {number}
 */
// index caching
 var rob = function(nums) {
  let max = 0;
  let cache = {};
  for (let i = 0; i < nums.length; i++) {
    const cash = nums[i];
    if (cash !== 0) {
      break;
    }
  }
  if (i === nums.length) return 0;
  function traverser(sum, index) {
    if (index >= nums.length) {
      max = max > sum ? max : sum
      return;
    }
    if (!cache[index]) {
      cache[index] = sum;
    } else if (cache[index] >= sum) {
      return;
    } else {
      cache[index] = sum;
    }
    traverser(sum + nums[index], index + 2);
    traverser(sum + nums[index], index + 3);
  }
  traverser(0, 0);
  traverser(0, 1);
  return max;
};

// DP
function rob(nums) {
  if (nums.length === 1) return nums[0];
  // Get first two options
  let first = nums[0];
  // index 2 and index 3 are both available to nums[0] so there is no benefit to starting at nums[1] unless it is larger than nums[0] so last becomes the larger of the two
  let last = Math.max(nums[0], nums[1]);
  let sum = 0;
  // start at 2
  for (let i = 2; i < nums.length; i++) {
    const cash = nums[i];
    // sum equals the larger of the sum at the prior index OR the sum at two indices ago plus the current house
    sum = Math.max(last, first + cash);
    // slide each sum up one index spot
    first = last;
    last = sum;
  }
  // return last (sum) in case nums.length <= 2
  return last;
}