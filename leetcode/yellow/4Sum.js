// Given an array nums of n integers and an integer target, are there elements a, b, c, and d in nums such that a + b + c + d = target? Find all unique quadruplets in the array which gives the sum of target.

// Notice that the solution set must not contain duplicate quadruplets.



// Example 1:

// Input: nums = [1,0,-1,0,-2,2], target = 0
// Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
// Example 2:

// Input: nums = [], target = 0
// Output: []


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  const numMap = {};
  let set = new Set();
  nums.forEach((num) => {
    numMap[num] !== undefined ? numMap[num].count++ : numMap[num] = { value: num, count: 1 }
  })
  for (let i = 0; i < nums.length - 3; i++) {
    let first =  nums[i];
    for (let j = i + 1; j < nums.length - 2; j++) {
      let second = nums[j];
      for (let k = j + 1; k < nums.length - 1; k++) {
        let third = nums[k];
        let quad = [first, second, third]
        let sum = first + second + third;
        let diff = target - sum;
        if (numMap[diff] !== undefined) {
          if (quad.indexOf(diff) !== - 1) {
            let count = 0;
            quad.forEach((num) => {
              num === diff ? count++ : null;
            })
            if (numMap[diff].count > count) {
              quad.push(diff);
            }
          } else {
            quad.push(diff);
          }
          quad.length === 4 && set.add(JSON.stringify(quad.sort((a, b) => a < b ? - 1 : 1)))
        }
      }
    }
  }
  let result = [];
  set.forEach((quad) => {
    result.push(JSON.parse(quad))
  })
  return result;
};
