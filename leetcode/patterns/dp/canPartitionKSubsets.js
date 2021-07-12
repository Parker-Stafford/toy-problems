/* Given an integer array nums and an integer k, return true if it is possible to divide this array into k non-empty subsets whose sums are all equal.

Example 1:
Input: nums = [4,3,2,3,5,2,1], k = 4
Output: true
Explanation: It's possible to divide it into 4 subsets (5), (1, 4), (2,3), (2,3) with equal sums.

Example 2:
Input: nums = [1,2,3,4], k = 3
Output: false

Constraints:
1 <= k <= nums.length <= 16
1 <= nums[i] <= 104
The frequency of each element is in the range [1, 4]. 
*/


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

var canPartitionKSubsets = function(nums, k) {
  let sum = 0;
  for (const num of nums) sum += num;
  if (sum % k !== 0) return false;
  const target = sum / k;
  // get a partition then solve again until you have k partitions
  let buckets = new Array(k).fill(0);
  function backtracker(i) {
    if (i === nums.length) return true;
    const num = nums[i];
    for (let j = 0; j < buckets.length; j++) {
      if (buckets[j] + num <= target) {
        buckets[j] += num;
        if (backtracker(i+1)) return true;
        buckets[j] -= num;
      }
      if (!buckets[j]) break;
    }
    return false;
  }
  return backtracker(0);
};