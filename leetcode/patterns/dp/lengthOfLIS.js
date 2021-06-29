/* 
Given an integer array nums, return the length of the longest strictly increasing subsequence.

A subsequence is a sequence that can be derived from an array by deleting some or no elements without changing the order of the remaining elements. For example, [3,6,2,7] is a subsequence of the array [0,3,1,6,2,2,7].

 

Example 1:
count = 2
Input: nums = [10,9,2,5,3,7,101,18]
                  min
                                max

[1,3,6,7,9,4,10,5,6]


Output: 4
Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.
Example 2:

Input: nums = [0,1,0,3,2,3]
Output: 4
Example 3:

Input: nums = [7,7,7,7,7,7,7]
Output: 1
 

Constraints:

1 <= nums.length <= 2500
-104 <= nums[i] <= 104
 */

/**
 * @param {number[]} nums
 * @return {number}
 */

// dp solution O(n2) O(n)
var lengthOfLIS = function(nums) {
  let dp = new Array(nums.length).fill(1);
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    for (let j = 0; j < i; j++) {
      const prevNum = nums[j];
      if (prevNum < num) dp[i] = Math.max(dp[i], dp[j] + 1);   
    }
  }
  return Math.max(...dp);
}

// intelligently build subsequence O(n*m) O(n)
var lengthOfLIS = function(nums) {
  let sub = [];
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (!sub.length || sub[sub.length - 1] < num) {
      sub.pop();
      sub.push(num);
    } else {
      for (let j = 0; j < sub.length; j++) {
        const newNum = sub[j];
        if (newNum > num) {
          sub[j] = num;
          break;
        }
      }
    }
  }
  return sub.length;
}