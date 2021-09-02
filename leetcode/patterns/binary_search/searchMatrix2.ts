/* Write an efficient algorithm that searches for a target value in an m x n integer matrix. The matrix has the following properties:

Integers in each row are sorted in ascending from left to right.
Integers in each column are sorted in ascending from top to bottom.
 

Example 1:


Input: matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 5
Output: true
[[1,4,7,11,15]
,[2,5,8,12,19],
 [3,6,9,16,22],
 [10,13,14,17,24],
 [18,21,23,26,30]],



Example 2:
Input: matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 20
Output: false
 

Constraints:

m == matrix.length
n == matrix[i].length
1 <= n, m <= 300
-109 <= matrix[i][j] <= 109
All the integers in each row are sorted in ascending order.
All the integers in each column are sorted in ascending order.
-109 <= target <= 109 */

// bst on all applicable rows
function searchMatrix2(m: number[][], t: number): boolean {
  const rowL = m[0].length - 1;
  for (const row of m) {
    let [f, l] = [row[0], row[rowL]];
    if (t < f) break;
    if (t >= f && t <= l) {
      let s = 0;
      let e = rowL;
      while (s <= e) {
        [f, l] = [row[s], row[e]];
        let mid = Math.floor((s + e) / 2);
        if (row[mid] === t) return true;
        if (row[mid] > t) e = mid - 1;
        else s = mid + 1; 
      }
    } 
  }
  return false;
};

// bst on whole matrix
function searchMatrix(m: number[][], t: number): boolean {
  let colE = m.length - 1;
  let rowE = m[0].length -1;
  let colS = 0;
  let rowS = 0;
  while ()
  return false;
}















