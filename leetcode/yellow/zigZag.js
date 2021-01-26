// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

// P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR"

// Write the code that will take a string and make this conversion given a number of rows:

// string convert(string s, int numRows);


// Example 1:

// Input: s = "PAYPALISHIRING", numRows = 3
// Output: "PAHNAPLSIIGYIR"
// Example 2:

// Input: s = "PAYPALISHIRING", numRows = 4
// Output: "PINALSIGYAHRPI"
// Explanation:
// P     I    N
// A   L S  I G
// Y A   H R
// P     I
// Example 3:

// Input: s = "A", numRows = 1
// Output: "A"

function convert(s, numRows) {
  let result = '';
  let down = true;
  let rowNum = 0;
  let matrix = [];
  for (let i = 0; i < numRows; i++) {
    matrix.push([]);
  }
  debugger;
  for (let i = 0; i < s.length; i++) {
    matrix[rowNum].push(s[i]);
    if (rowNum === 0 && !down) {
      down = true;
    }
    if (rowNum === numRows - 1 && down) {
      down = false;
    }
    if (down) {
      rowNum++;
    } else {
      rowNum = Math.max(0, rowNum - 1);
    }
  }
  for (let i = 0; i < matrix.length; i++) {
      let row = matrix[i];
      for (let j = 0; j < row.length; j++) {
          result += row[j];
      }
  }
  return result;
}