/* Given an array of non-negative integers nums, you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Determine if you are able to reach the last index.

 

Example 1:

Input: nums = [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
Example 2:

Input: nums = 
[3,2,1,0,4]
[0,0,0,0,0]
    f f f
Output: false
Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.
 

Constraints:

1 <= nums.length <= 104
0 <= nums[i] <= 105
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */

 [3,2,1,0,4]
 [1,1,f,f]
 
 // O(n*sum(...nums)) O(n)
 var canJump = function(nums) {
   if (nums.length === 1) return true;
  // initialize dp for memoizing whether a specific location is possible fill with 1
  const dp = new Array(nums.length - 1).fill(1);
  // iterate over nums 
  for (let i = nums.length - 2; i >= 0; i--) {
    if (!nums[i]) {
      dp[i] = false;
      continue;
    }
     dp[i] = jumper(nums[i], i);
  }
  // recursive function takes in jump distance
  function jumper(distance, index) {
    if (index + distance >= nums.length - 1) {
      return true;
    }
    // at each num test all combinations of jumps (ex num = 3 jump 3, 2, 1) if any combo results in being at final location return true if not where you stop return false
    for (let j = distance; j > 0; j--) {
      // if it reaches end set to true, and break recursion 
      if (dp[index + j]) return true;
    }
    // set dp[i] to false if it can't reach from that location and return;
    return false;
  }
  return dp[0];
};


// greedy solution O(n) O(1);
var canJump = function(nums) {
  if  (nums.length === 1) return true;
  let distance = 0;
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    distance = Math.max(nums[i], distance);
    if (!distance && i !== nums.length - 1) return false;
    distance--;
  }
  return true;
}