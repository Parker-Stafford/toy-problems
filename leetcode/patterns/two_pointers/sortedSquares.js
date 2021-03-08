// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

// Example 1:
// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].

// Example 2:
// Input: nums = [-7,-3,2,3,11]
// Output: [4,9,9,49,121]

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
  if (!nums) return;
  if (nums.length === 1) {
    return [nums[0] ** 2]
  }
  let start = 0;
  let end = nums.length - 1;
  let position = end;
  const squares = [];
  while (start <= end) {
    let num1 = nums[start] ** 2;
    let num2 = nums[end] ** 2;
    if (num1 < num2) {
      squares[position] = num2;
      end--;
    } else {
      squares[position] = num1;
      start++;
    }
    position--;
  }
  return squares;
}