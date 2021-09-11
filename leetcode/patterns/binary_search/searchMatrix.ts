/* Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

Integers in each row are sorted from left to right.
The first integer of each row is greater than the last integer of the previous row.
 

Example 1:


Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
Output: true
[[1,3,5,7],
[10,11,16,20],
[23,30,34,60]]
colS = 0 rowS = 0
colE = 3 rowE = 2
// find row
  // if target is less than last column in row
    // do bst on that row
      // start end are 0 and length of row
        // while start is <= end
          // mid is halfway between
          // if target = mid return true
          // if target is greater than mid, s = mid + 1
          // if target is less than mid, e = mid - 1
    // return false 
// return false

Example 2:
Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
Output: false
 

Constraints:

m == matrix.length
n == matrix[i].length
1 <= m, n <= 100
-104 <= matrix[i][j], target <= 104 */


function searchMatrix(matrix: number[][], target: number): boolean {
  const rowL = matrix[0].length;
  // find row
  for (const row of matrix) {
    // if target is less than last column in row
    if (target <= row[rowL - 1]) {
      // do bst on that row
      // start end are 0 and length of row
      let s = 0;
      let e = rowL - 1;
      while (s <= e) {
        // mid is halfway between
        let mid = Math.floor((s + e) / 2);
            // if target = mid return true
        if (row[mid] === target) return true;
            // if target is greater than mid, s = mid + 1
        if (row[mid] < target) s = mid + 1;
            // if target is less than mid, e = mid - 1
        else e = mid - 1;
      }
      return false ;
    }
  }
  return false;
};