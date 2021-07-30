/* There are some spherical balloons spread in two-dimensional space. For each balloon, provided input is the start and end coordinates of the horizontal diameter. Since it's horizontal, y-coordinates don't matter, and hence the x-coordinates of start and end of the diameter suffice. The start is always smaller than the end.
An arrow can be shot up exactly vertically from different points along the x-axis. A balloon with xstart and xend bursts by an arrow shot at x if xstart ≤ x ≤ xend. There is no limit to the number of arrows that can be shot. An arrow once shot keeps traveling up infinitely.
Given an array points where points[i] = [xstart, xend], return the minimum number of arrows that must be shot to burst all balloons.

Example 1:
Input: points = [[10,16],[2,8],[1,6],[7,12]]
Output: 2
Explanation: One way is to shoot one arrow for example at x = 6 (bursting the balloons [2,8] and [1,6]) and another arrow at x = 11 (bursting the other two balloons).
[1,6],[2,8],[7,12],[10,16]



[1,125],[2,8],[15,30][21,30],[30,31]

Example 2:
Input: points = [[1,2],[3,4],[5,6],[7,8]]
Output: 4

Example 3:
Input: points = [[1,2],[2,3],[3,4],[4,5]]
Output: 2

Constraints:
1 <= points.length <= 104
points[i].length == 2
-231 <= xstart < xend <= 231 - 1
 */

/**
 * @param {number[][]} points
 * @return {number}
 */

// O (nlogn) time O(1) space
 var findMinArrowShots = function(points) {
  let arrows = 0;
  if (!points.length || !points[0].length) return arrows; 
  // sort
  points.sort((a, b) => (a[0] - b[0]));
  arrows++;
  // merge
  for (let i = 0; i < points.length; i++) {
    const balloon = points[i];
    const next = points[i + 1];
    // check if balloon end is greater than enxt balloons start
    if (next && balloon[1] >= next[0]) {
      // merge with max of starts with min of ends splice
      points[i + 1] = [Math.max(next[0], balloon[0]), Math.min(balloon[1], next[1])];
      continue;
    }
    arrows++;
  }
  return arrows;
};

// O(nlogn) time O(1) space
var findMinArrowShots = function(points) {
  let arrows = 0;
  if (!points.length || !points[0].length) return arrows;
  points.sort((a, b) => (a[1] - b[1]));
  arrows++
  let prev = points[0][1]
  for (let i = 1; i < points.length; i++) {
    const balloon = points[i];
    if (prev >= baloon[0]) continue;
    arrows++;
    prev = balloon[1];
  }
  return arrows;
}

