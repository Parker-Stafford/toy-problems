/* You are given two lists of closed intervals, firstList and secondList, where firstList[i] = [starti, endi] and secondList[j] = [startj, endj]. Each list of intervals is pairwise disjoint and in sorted order.
Return the intersection of these two interval lists.
A closed interval [a, b] (with a < b) denotes the set of real numbers x with a <= x <= b.
The intersection of two closed intervals is a set of real numbers that are either empty or represented as a closed interval. For example, the intersection of [1, 3] and [2, 4] is [2, 3].
Example 1:
Input: firstList = [[0,2],[5,10],[13,23],[24,25]], secondList = [[1,5],[8,12],[15,24],[25,26]]
Output: [[1,2],[5,5],[8,10],[15,23],[24,24],[25,25]]

[1, 3]    ---> 2,3
  [2, 4]

[1,5]     ---> 5,5
  [5, 10]
i1[end] >= i2[start]
intersection = [max (starts), min(ends)]

[2,     5],[6,11]
  [3,4]

[]

Example 2:
Input: firstList = [[1,3],[5,9]], secondList = []
Output: []

Example 3:
Input: firstList = [], secondList = [[4,8],[10,12]]
Output: []

Example 4:
Input: firstList = [[1,7]], secondList = [[3,10]]
Output: [[3,7]]

Constraints:
0 <= firstList.length, secondList.length <= 1000
firstList.length + secondList.length >= 1
0 <= starti < endi <= 109
endi < starti+1
0 <= startj < endj <= 109
endj < startj+1 */

/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
// brute force o(nm) t o(n+m) space
 var intervalIntersection = function(firstList, secondList) {
  // make intersections arr
  const intersections = [];
  // iterate over first list
  for (let i = 0; i < firstList.length; i++) {
    const interval1 = firstList[i];
    for (let j = 0; j < secondList.length; j++) {
      const interval2 = secondList[j];
      if (interval1[1] >= interval2[0] && interval1[0] <= interval2[1]) intersections.push([Math.max(interval1[0], interval2[0]), Math.min(interval1[1], interval2[1])]);
      else if (interval1[0] > interval2[1]) continue;
      else if (interval2[0] > interval1[1]) break;
    }
  }
  return intersections;    
};

// O(n+m) 
var intervalIntersection = function (first, second) {
  const intersections = [];
  let i = 0, j = 0;
  while (i < first.length && j < second.length) {
    let lo = Math.max(first[i][0], second[j][0]);
    let hi = Math.min(first[i][1], second[j][1]);
    if (lo <= hi) intersections.push([lo, hi]);
    if (first === hi) i++;
    else j++;
  }
  return intersections;
}