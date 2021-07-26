/* Given an array of intervals intervals where intervals[i] = [starti, endi], return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.

Example 1:
Input: intervals = [[1,2],[2,3],[3,4],[1,3]]
Output: 1
Explanation: [1,3] can be removed and the rest of the intervals are non-overlapping.
[1,2] [1,3]
[1,3] [1,2] // same start guaranteed overlap
[1,2] [3,177] [10, 19] [16, 21] [20,22]
[3,15] [10, 19] [16, 21] [20,22]


// sort starti
// check for overlap
  // prev's end > cur start
// remove
  // if an interval consumes 2 or more other intervals it should be removed
  // pick middle if overlaps with prev and next
  // largest interval

Example 2:
Input: intervals = [[1,2],[1,2],[1,2]]
Output: 2
Explanation: You need to remove two [1,2] to make the rest of the intervals non-overlapping.

Example 3:
Input: intervals = [[1,2],[2,3]]
Output: 0
Explanation: You don't need to remove any of the intervals since they're already non-overlapping.

Constraints:
1 <= intervals.length <= 2 * 104
intervals[i].length == 2
-2 * 104 <= starti < endi <= 2 * 104 */

/**
 * @param {number[][]} intervals
 * @return {number}
 */
// O(nlogn) time for sort O(1) space
var eraseOverlapIntervals = function (intervals) {
  let removed = 0;
  intervals.sort((a, b) => (a[1] - b[1]));
  let prev = intervals[0];
  for (let i = 1; i < intervals.length; i++) {
    const current = intervals[i];
    if (prev[1] > current[0]) removed++;
    else prev = current;
  }
  return removed;
}