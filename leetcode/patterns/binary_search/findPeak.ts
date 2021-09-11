/* A peak element is an element that is strictly greater than its neighbors.
Given an integer array nums, find a peak element, and return its index. If the array contains multiple peaks, return the index to any of the peaks.
You may imagine that nums[-1] = nums[n] = -∞.
You must write an algorithm that runs in O(log n) time.
 
Example 1:
Input: nums = [1,2,3,1]
Output: 2
Explanation: 3 is a peak element and your function should return the index number 2.

Example 2:
Input: nums = [1,2,1,3,5,6,4]
Output: 5
Explanation: Your function can return either index number 1 where the peak element is 2, or index number 5 where the peak element is 6.
 
Constraints:
1 <= nums.length <= 1000
-231 <= nums[i] <= 231 - 1
nums[i] != nums[i + 1] for all valid i. */

// sliding mid up to peaks
function findPeakElement2(nums: number[]): number {
  if (nums.length <= 3) return nums.indexOf(Math.max(...nums));
  let mid = Math.floor(nums.length / 2);
  while (true) {
    if (nums[mid - 1] === undefined || nums[mid + 1] === undefined) return mid;
    if (nums[mid] > nums[mid - 1] && nums[mid] > nums[mid + 1]) return mid;
    if (nums[mid - 1] > nums[mid + 1]) mid--;
    else mid++;
  }
};

// moving mid by moving start and end
function findPeakElement(nums: number[]): number {
  let s = 0;
  let e = nums.length - 1;
  while (s < e) {
    let mid = Math.floor((s + e) / 2);
    if (nums[mid] < nums[mid + 1]) s = mid + 1;
    else e = mid;
  }
  return s;
};