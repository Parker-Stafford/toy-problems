/* Given an integer array nums, find a contiguous non-empty subarray within the array that has the largest product, and return the product.

It is guaranteed that the answer will fit in a 32-bit integer.

A subarray is a contiguous subsequence of the array.

 

Example 1:

Input: nums = [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.
Example 2:

Input: nums = [-2,0,-1]
Output: 0
Explanation: The result cannot be 2, because [-2,-1] is not a subarray. */

/**
 * @param {number[]} nums
 * @return {number}
 */
// track max and min
var maxProduct = function (nums) {
  if (!nums.length) return 0;
  let curMin = nums[0];
  let curMax = nums[0];
  let max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    const number = nums[i];
    // get the new minimum product;
    let minP = curMin * number;
    // get the new maximum product;
    let maxP = curMax * number;
    // reset the current minimum and current maximum
    curMax = Math.max(number, maxP, minP);
    curMin = Math.min(number, maxP, minP);
    // reset maximum
    max = Math.max(max, curMax);
  }
  return max;
}


