/*

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

input: int [], int
output: an arry of indices or empty array
constraints: O(n) O(n)

t = 14
[1, 29, -5, 19]
{
  13: true,
  -15: true,
  19: 2,
}
o = [2, 3]
*/

var twoSum = function (nums, target) {
  // if nums is only length 1 or less return empty array
  if (nums.length <= 1) return [];
  // create index cache map
  let indexCache = {};
  // iterate through nums
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    // if num is in cache return cached index and current index
    if (indexCache[num] !== undefined) return [indexCache[num], i]
    // subtract num from target, put that value in cache
    indexCache[target - num] = i;
  }
  // return empty array
  return [];
}

