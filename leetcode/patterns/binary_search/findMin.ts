/* Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:

[4,5,6,7,0,1,2] if it was rotated 4 times.
[0,1,2,4,5,6,7] if it was rotated 7 times.
Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].
[4,5,6,7,0,1,2] 
s      m     e
         s m e
         sme
         
// if mid is greater than end, smallest is to the right
         // start is mid + 1
         // mid is end - start + start
// if mid is less than end 
         // end = mid
         // mid is end - start + start
// if start =  mid or end = mid return lesser of start and end
[6,7,0,1,2,4,5] 
s      m     e
s  m   e
     sme

Given the sorted rotated array nums of unique elements, return the minimum element of this array.
You must write an algorithm that runs in O(log n) time.

Example 1:
Input: nums = [3,4,5,1,2]
Output: 1
Explanation: The original array was [1,2,3,4,5] rotated 3 times.
[3,4,5,1,2]
s    m   e
       s
Example 2:
Input: nums = [4,5,6,7,0,1,2]
Output: 0
Explanation: The original array was [0,1,2,4,5,6,7] and it was rotated 4 times.
[4,5,6,7,0,1,2]
s      m      e
         s m e
         sm e


Example 3:
Input: nums = [11,13,15,17]
Output: 11
Explanation: The original array was [11,13,15,17] and it was rotated 4 times. 
[11,13,15,17]
s    m     e
sm     e
Constraints:
n == nums.length
1 <= n <= 5000
-5000 <= nums[i] <= 5000
All the integers of nums are unique.
nums is sorted and rotated between 1 and n times. */

function findMin(nums: number[]): number {
  if (nums.length === 2) return Math.min(...nums);
  let start = 0;
  let end = nums.length - 1;
  let mid = Math.floor((end - start) / 2);
  while (true) {
  // if start =  mid or end = mid return lesser of start and end
  if (start === mid) return Math.min(nums[start], nums[end]);
  // if mid is greater than end, smallest is to the right
  if (nums[mid] > nums[end]) {
    // start is mid + 1
    start = mid + 1;
    // mid is end - start + start
    mid = Math.floor((end - start) / 2) + start;
    continue;
  }
  // otherwise smallest is to the left
  // end = mid
  end = mid;
  // mid is end - start + start
  mid = Math.floor((end - start) / 2) + start;
  }
};


