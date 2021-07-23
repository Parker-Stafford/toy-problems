/* Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

Example 1:
Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
conditions for overlap
si1 < si2
ei1 >= si2
merge = si1, greater(ei1, ei2);

[[1,3],[2,6],[10,15],[5,8],[16,19]]
[[1,8],[10,15],[16,19]]

Example 2:
Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.

Constraints:
1 <= intervals.length <= 104
intervals[i].length == 2
0 <= starti <= endi <= 104 */

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
// O(nlogn) O(1)
var merge = function(intervals) {
  // sort intervals by start index
  intervals.sort((a, b) => a[0] - b[0]);
  // iterate over intervals
  for (let i = 0; i < intervals.length - 1; i++) {
    let current = intervals[i];
    let next = intervals[i + 1];
    // check if interval (check if ending of current is greater than or equal to the start of next)
    if (current[1] >= next[0]){
      // splice out next
      intervals.splice(i + 1, 1);
      // set ending of current to be greater of ending of current and ending of next
      intervals[i] = [current[0], Math.max(current[1], next[1])];
      i--;
    }
  }
  return intervals;
};

// no splicing O(nlogn) O(n)
var merge = function(intervals) {
  let merged = [];
  // sort intervals by start index
  intervals.sort((a, b) => a[0] - b[0]);
  // iterate over intervals
  let prev = intervals[0];
  merged.push(prev);
  for (let i = 1; i < intervals.length; i++) {
    let current = intervals[i];
    // check if interval (check if ending of current is greater than or equal to the start of next)
    if (current[0] <= prev[1]) prev[1] = Math.max(prev[1], current[1]);
    else {
      merged.push(current)
      prev = current;
    }
  }
  return merged;
};