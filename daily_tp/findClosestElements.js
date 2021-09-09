/* Given a sorted integer array arr, two integers k and x, return the k closest integers to x in the array. The result should also be sorted in ascending order.

An integer a is closer to x than an integer b if:

|a - x| < |b - x|, or
|a - x| == |b - x| and a < b
 

Example 1:

Input: arr = [1,2,3,4,5], k = 4, x = 3
Output: [1,2,3,4]
Example 2:

Input: arr = [1,2,3,4,5], k = 4, x = -1
Output: [1,2,3,4]
 */

/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
 var findClosestElements2 = function(arr, k, x) {
  if (x < arr[0]) return arr.slice(0, k);
  if (x > arr[arr.length - 1]) return arr.slice(-k);
  if (!k) return [];  
  if (arr.length === 1) return arr;
  let closest = [];
  let xPosition;
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    let pivot = Math.floor((end - start) / 2) + start;
    if (arr[pivot] === x) {
      xPosition = pivot;
      closest.push(x);
      break;
    }
    if (arr[pivot] > x) {
      end = pivot - 1;
      continue;
    }
    start = pivot + 1;
  }
  let i, j;
  if (xPosition === undefined) {
      if (arr[start] > x) {
          i = start - 1;
          j = start;
      } else {
          i = start;
          j = start + 1;
      }
  } else {
      i = xPosition - 1;
      j = xPosition + 1;  
  }

  while (closest.length < k) {
      if (arr[i] === undefined && arr[j] === undefined) break;
      if (arr[i] === undefined) {
          closest.push(arr[j]);
          j++;
          continue;
      }
      if (arr[j] === undefined) {
          closest.unshift(arr[i]);
          i--;
          continue;
      }
    if (x - arr[i] <= arr[j] - x) {
      closest.unshift(arr[i]);
      i--;
      continue;
    }
    closest.push(arr[j]);
    j++;
  }
  return closest;
};
