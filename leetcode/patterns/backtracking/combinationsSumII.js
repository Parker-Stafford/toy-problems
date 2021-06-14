/* Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sum to target.

Each number in candidates may only be used once in the combination.

Note: The solution set must not contain duplicate combinations.
 */

/* Example 1:

Input: candidates = [10,1,2,7,6,1,5], target = 8
Output: 
[
[1,1,6],
[1,2,5],
[1,7],
[2,6]
]
Example 2:

Input: candidates = [2,5,2,1,2], target = 5
Output: 
[
[1,2,2],
[5]
] */

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
// naive caching solution with index stop
 var combinationSum2 = function(candidates, target) {
  candidates.sort((a, b) => (a - b));
  let combos = [];
  let dupsMap = {};
  function backtracker(combo =[], index = 0, sum = 0) {
    if (sum === target) {
      if (dupsMap[JSON.stringify(combo.sort())]) return;
      combos.push(combo);
      dupsMap[JSON.stringify(combo.sort())] = true;
      return;
    }
    for (let i = index; i < candidates.length; i++){
      if (sum + candidates[i] > target) return;
      combo.push(candidates[i])
      let copy = combo.slice();
      backtracker(copy, i + 1, sum + candidates[i])
      combo.pop();    
    }
  }
  backtracker();
  return combos;
};

//