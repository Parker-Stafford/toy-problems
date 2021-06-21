/* Given an integer numRows, return the first numRows of Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:


 

Example 1:

Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
Example 2:

Input: numRows = 1
Output: [[1]] */

/**
 * @param {number} numRows
 * @return {number[][]}
 */

 var generate = function(numRows) {
  let triangle = [];
  let rowNum = 0;
  while (rowNum < numRows) {
    let row = [1]
    let prevRow = triangle[rowNum - 1];
    let index = 1;
 
    if (!triangle.length) {
      triangle.push([1]);
      rowNum++
      continue; 
    }
    if (triangle.length === 1) {
      triangle.push([1, 1]);
      rowNum++
      continue;
    }
    while (index < rowNum) {
      row[index] = prevRow[index - 1] + prevRow[index];
      index++;
    }
    rowNum++
    row.push(1);
    triangle.push(row);
  }
  return triangle;
};

