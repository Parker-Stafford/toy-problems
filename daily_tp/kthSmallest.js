/* Given an n x n matrix where each of the rows and columns are sorted in ascending order, return the kth smallest element in the matrix.

Note that it is the kth smallest element in the sorted order, not the kth distinct element.
Example 1:

Input: matrix = [[1,5,9],[10,11,13],[12,13,15]], k = 8
Output: 13
Explanation: The elements in the matrix are [1,5,9,10,11,12,13,13,15], and the 8th smallest number is 13
Example 2:

Input: matrix = [[-5]], k = 1
Output: -5
 

Constraints:

n == matrix.length
n == matrix[i].length
1 <= n <= 300
-109 <= matrix[i][j] <= 109
All the rows and columns of matrix are guaranteed to be sorted in non-decreasing order.
1 <= k <= n2 */

/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
// slow iterative searching
 var kthSmallest = function(matrix, k) {
  if(matrix.length === 1 || k === 1) return matrix[0][0];
  let rowMap ={
    '0': 1,
    '1': 0,
  }
  k--;
  while (k) {
    k--
    const indices = Object.entries(rowMap);
    let min = Infinity;
    let minLocation;
    indices.forEach(pair => {
      if (matrix[+pair[0]][pair[1]] < min) {
        minLocation = pair;
        min = matrix[+pair[0]][pair[1]];
      }  
     });
    if (!k) return min;
    if (rowMap[minLocation[0]] !== undefined) {
      rowMap[minLocation[0]]++;
    }
    if (rowMap[+minLocation[0] + 1] === undefined && matrix[+minLocation[0] + 1]) rowMap[+minLocation[0] + 1] = 0;
  }
};

// flatten and sort
var kthSmallest = function(matrix, k) {
  let flattened = [];
   flattened = flattened.concat(...matrix);
   flattened.sort((a, b) => a - b);
  return flattened[k - 1];
}