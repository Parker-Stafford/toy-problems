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
 
[1,2,4,5,6] k = 4 x = 3
  me s

Constraints:
1 <= k <= arr.length
1 <= arr.length <= 104
arr is sorted in ascending order.
-104 <= arr[i], x <= 104
 */
 
function findClosestElements(arr: number[], k: number, x: number): number[] {
  const last = arr.length - 1;
  // check if num is out of bounds bigger or smaller, if so return slice
  if (x <= arr[0]) return arr.slice(0, k)
  if (x >= arr[last]) return arr.slice(last - k + 1); 
  let s = 0;
  let e = last;
  // do bst to find element index
  while (s <= e) {
    let m = Math.floor((s + e) / 2);
    // if we do find it, set s and e to be m and one more than m 
    if (arr[m] === x) {
      s = m;
      e = m + 1;
      break;
    }
    if (arr[m] > x) e = m - 1;
    else s = m + 1;
  }
  // if we don't find it set e = s and s = e
  if (e < s) [s, e] = [e, s];
  // use comparison above to find smaller and greater elements adding to arrays respectively
  const left = [];
  const right = [];
  while (k) {
    k--;
    if (arr[s] === undefined && arr[e] === undefined) break;
    if (arr[s] === undefined) {
      right.push(arr[e]);
      e++;
      continue;
    }
    if (arr[e] === undefined) {
      left.unshift(arr[s]);
      s--;
      continue;
    }
    let lDiff = Math.abs(x - arr[s]); 
    let rDiff = Math.abs(x - arr[e]);
    if (lDiff <= rDiff) {
      left.unshift(arr[s]);
      s--;
    }  else {
      right.push(arr[e]);
      e++;
    }
  }
  // if we take s we decrement s if we take e we increment e 
  // contcat the arrays
  return [...left, ...right];
};



