/* Given an array of positive integers nums and a positive integer target, return the minimal length of a contiguous subarray [numsl, numsl+1, ..., numsr-1, numsr] of which the sum is greater than or equal to target. If there is no such subarray, return 0 instead.

Example 1:
Input: target = 7, nums = [2,3,1,2,4,3]
Output: 2
Explanation: The subarray [4,3] has the minimal length under the problem constraint.

Example 2:
Input: target = 4, nums = [1,4,4]
Output: 1

Example 3:
Input: target = 11, nums = [1,1,1,1,1,1,1,1]
Output: 0

Constraints:
1 <= target <= 109
1 <= nums.length <= 105
1 <= nums[i] <= 105
 
Follow up: If you have figured out the O(n) solution, try coding another solution of which the time complexity is O(n log(n)) */
// brute force with reduce
function minSubArrayLen2(target: number, nums: number[]): number {
  // check whether or not contiguous sub array exists: sum array and see if it's greater than target return 0 if sum of array elements is too small
  let sum = nums.reduce((a, b) => a + b, 0);
  if (sum < target) return 0;
  // check each subarray length using sliding window
  // initialize sub array length to be 1
  let len = 1
  sum = 0;
  // make while loop while sum is less than target
  while (true) {
    // for loop over array summing subarrays based on length above
    for (let i = 0; i <= nums.length - len; i++) {
      let sub = nums.slice(i, i + len);
      sum = sub.reduce((a, b) => a + b, 0);
      if (sum >= target) return len;
    }
    // increment subarray
    len++;
  }
};

       
// answer for non continguous subarray
function minSubArrayLen3(target: number, nums: number[]): number {
  nums.sort((a, b) => b - a);
  let len = 1;
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (sum >= target) return len;
    len++;
  }
  return 0;
}


function minSubArrayLen(target: number, nums: number[]): number {
  let left = 0;
  let len = Infinity;
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    while (sum >= target) {
      len = Math.min(len, i + 1 - left);
      sum -= nums[left];
      left++;
    } 
  }
  return (len === Infinity) ? 0 : len;
}











