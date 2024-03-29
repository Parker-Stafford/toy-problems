// Given two arrays of integers with equal lengths, return the maximum value of:

// |arr1[i] - arr1[j]| + |arr2[i] - arr2[j]| + |i - j|

// where the maximum is taken over all 0 <= i, j < arr1.length.



// Example 1:

// Input: arr1 = [1,2,3,4], arr2 = [-1,4,5,6]
// Output: 13
// Example 2:

// Input: arr1 = [1,-2,-5,0,10], arr2 = [0,-2,-1,-7,-4]
// Output: 20


// Constraints:

// 2 <= arr1.length == arr2.length <= 40000
// -10^6 <= arr1[i], arr2[i] <= 10^6

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
 var maxAbsValExpr = function(arr1, arr2) {
   let abs = Math.abs;
   let max = 0;
  for (let i = 0; i < arr1.length; i++) {
    for (let j = i; j < arr1.length; j++) {
      if (j === i) {
        continue;
      }
      let absExpression = (Math.abs(arr1[i] - arr1[j]) + Math.abs(arr2[i] - arr2[j]) + Math.abs(i - j));
      max = (max < absExpression) ? absExpression : max;
    }
  }
  return max;
};