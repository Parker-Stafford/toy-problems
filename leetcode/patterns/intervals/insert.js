/* Given a set of non-overlapping intervals, insert a new interval into the intervals (merge if necessary).
You may assume that the intervals were initially sorted according to their start times.

Example 1:
Input: intervals = [[1,3],[6,9]], newInterval = [4,5]
Output: [[1,5],[6,9]]
shifting = t
s = 10,10
t - 10,10
[[1,3],[4,5],[6,9],[12,14]]


Example 2:
Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
Output: [[1,2],[3,10],[12,16]]
Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].

Example 3:
Input: intervals = [], newInterval = [5,7]
Output: [[5,7]]

Example 4:
Input: intervals = [[1,5]], newInterval = [2,3]
Output: [[1,5]]

Example 5:
Input: intervals = [[1,5]], newInterval = [2,7]
Output: [[1,7]]

Constraints:
0 <= intervals.length <= 104
intervals[i].length == 2
0 <= intervals[i][0] <= intervals[i][1] <= 105
intervals is sorted by intervals[i][0] in ascending order.
newInterval.length == 2
0 <= newInterval[0] <= newInterval[1] <= 105 */

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */

// single pass with merge
var insert = function(intervals, newInterval) {
  if (!intervals.length) return [newInterval];
  let results = [];
  // iterate through intervals looking for insertion point
  for (let i = 0; i < intervals.length; i++) {
    const current = intervals[i];
    // if newInterval start is less than current start
    if (newInterval[0] <= current[0]) {
      let prev = intervals[i - 1];
      // check for merge if newInterval at start is less than prev at end
      if (prev && newInterval[0] <= prev[1]) {
        // merge with prev, call merge function on prev
        results[results.length - 1] = [prev[0], Math.max(prev[1], newInterval[1])];
        return merge(results, intervals.slice(i));
      }
      // check if new interval at end is greater than current at start
      if (newInterval[1] >= current[0]) {
        // merge with current call merge function on current
        results.push([newInterval[0], Math.max(newInterval[1], current[1])]);
        return merge(results, intervals.slice(i + 1));
      }
      results.push(newInterval);
      results.push(...intervals.slice(i));
      return results;
    }
    // push to results array
    results.push(current);
  }
  if (newInterval[0] <= results[results.length - 1][1]) results[results.length - 1] = [results[results.length - 1][0], Math.max(newInterval[1], results[results.length - 1][1])];
  else results.push(newInterval);
  // return intervals  
  return results;
}

var merge = function(merged, remaining) {
  let last = merged.length - 1;
  for (let i = 0; i < remaining.length; i++) {
    const current = remaining[i];
    if (merged[last][1] >= current[0]) {
      merged[last] = [merged[last][0], Math.max(merged[last][1], current[1])];
      continue;
    }
    merged.push(...remaining.splice(i));
    return merged;
  }
  return merged;
}
