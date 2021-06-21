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