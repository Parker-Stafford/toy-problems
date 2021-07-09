/* Given an integer array nums, return the number of longest increasing subsequences.

Notice that the sequence has to be strictly increasing.

Example 1:

Input: nums = [1,3,5,4,7]
Output: 2
Explanation: The two longest increasing subsequences are [1, 3, 4, 7] and [1, 3, 5, 7].
         m
[1,3,5,4,7]
[1,2,3,3,4]
cm = 7
isl = 4
2

Example 2:

Input: nums = [2,2,2,2,2]
Output: 5
Explanation: The length of longest continuous increasing subsequence is 1, and there are 5 subsequences' length is 1, so output 5.

[2,3,2,2,2,3]
[1,2,2,2,2,2]
Constraints:

1 <= nums.length <= 2000
-106 <= nums[i] <= 106 */

/**
 * @param {number[]} nums
 * @return {number}
 */

var findNumberOfLIS = function(nums) {
  let dp = new Array(nums.length).fill(1);
  let freqs = new Array(nums.length).fill(1);
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    for (let j = 0; j < i; j++) {
      const prevNum = nums[j];
      if (prevNum < num && dp[j] + 1 === dp[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
        freqs[i] += freqs[j];
      } else if (prevNum < num && dp[j] + 1 > dp[i]) {
        dp[i] = dp[j] + 1;
        freqs[i] = freqs[j];
      }
    }
  }
  let count = 0;
  const max = Math.max(...dp);
  for (let i = 0; i < dp.length; i++) {
    const num = dp[i];
    if (max === num) count += freqs[i];
  }
  return count;
};