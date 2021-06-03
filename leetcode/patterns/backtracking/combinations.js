/* Given two integers n and k, return all possible combinations of k numbers out of the range [1, n].

You may return the answer in any order.

 

Example 1:

Input: n = 4, k = 2
Output:
[
  [2,4],
  [3,4],
  [2,3],
  [1,2],
  [1,3],
  [1,4],
]
Example 2:

Input: n = 1, k = 1
Output: [[1]]
 

Constraints:

1 <= n <= 20
1 <= k <= n */

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */

// backtracking solution
 var combine = function(n, k) {
  const results = [];
  function backtracker(curIndex, curCombo) {
    if (curCombo.length === k) return results.push(curCombo);
    for (let i = curIndex + 1; i <= n; i++) {
      backtracker(i, curCombo.concat(i));
    }
  }
  for (let i = 1; i <= n; i++) {
    backtracker(i, [i]);
  }
  return results; 
};
// solution with push and pop (faster)
var combine = function(n, k) {
  const results = [];
  function backtracker(curIndex, curCombo) {
    if (curCombo.length === k) {
      results.push([... curCombo]);
      return;
    }
    for (let i = curIndex; i <= n; i++) {
      curCombo.push(i);
      backtracker(i + 1, curCombo);
      curCombo.pop();
    }
  }
  backtracker(1, []);
  return results; 
};
