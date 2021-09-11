/* There is an integer array nums sorted in non-decreasing order (not necessarily with distinct values).
Before being passed to your function, nums is rotated at an unknown pivot index k (0 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,4,4,5,6,6,7] might be rotated at pivot index 5 and become [4,5,6,6,7,0,1,2,4,4].
Given the array nums after the rotation and an integer target, return true if target is in nums, or false if it is not in nums.
You must decrease the overall operation steps as much as possible.

Example 1:
Input: nums = [2,5,6,0,0,1,2], target = 2
Output: true
[2,5,6,0,0,1,2]
sme  
[5,6,0,0,1,2,2]

[1,2,2,5,6,0,0]

// which way is pivot
  // if end is less than m pivot is to the right >>>>>
    // t is less than m
      // t is less than s
        // move right 
      // move left 
    // move right
  // else pivot is left or m is on pivot
    // t is greater than m 
      // if t is greater than e
        // move left 
      // else move right 
    // else move left

Example 2: 
Input: nums = [2,5,6,0,0,1,2], target = 3
Output: false
 
Constraints:
1 <= nums.length <= 5000
-104 <= nums[i] <= 104
nums is guaranteed to be rotated at some pivot.
-104 <= target <= 104
Follow up: This problem is similar to Search in Rotated Sorted Array, but nums may contain duplicates. Would this affect the runtime complexity? How and why?

 */
  
function search(nums: number[], t: number): boolean {
  const l = nums.length;
  let s = 0;
  let e = l - 1
  while (s <= e) {
    let m = Math.floor((s + e) / 2);
    // mid === nums[0] cannot use bin search
    if (nums[m] === t) return true;
    if (nums[m] === nums[s]) return linSearch(nums, t); 
    let tInFirst = inFirstHalf(nums[s], t);
    let mInFirst = inFirstHalf(nums[s], nums[m]);
    // target and mid in the same half
    if (tInFirst === mInFirst) {
      // compare target to mid
        if (nums[m] > t) e = m - 1;
        else s = m + 1
    // target and mid in different halfs
    } else {
      // move towards t
      if (tInFirst) s = m + 1
      else e = m - 1;
    }
  }
  return false;
}

function linSearch(nums:number[], t: number): boolean {
  for (const num of nums) {
    if (num === t) return true;
  }
  return false;
};

function inFirstHalf(s: number, t: number ): boolean {
  return s <= t;
}




