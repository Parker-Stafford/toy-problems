// You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.



// Example 1:


// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [[7,4,1],[8,5,2],[9,6,3]]
// Example 2:


// Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
// Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
// Example 3:

// Input: matrix = [[1]]
// Output: [[1]]
// Example 4:

// Input: matrix = [[1,2],[3,4]]
// Output: [[3,1],[4,2]]

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 var rotate = function(matrix) {
  let first = 0;
  let last = matrix.length - 1;
  while (first <= last) {
    let j = 0;
    for (let i = first; i < last; i++) {
      // get temp (ur)
      let ul = matrix[first][i];
      let ur = matrix[i][last];
      let bl = matrix[last - j][first]
      let br = matrix[last][last - j];
      // swap ul with ur
      matrix[first][i] = bl;
      matrix[i][last] = ul;
      matrix[last - j][first] = br;
      matrix[last][last - j] = ur;
      j++;
    }
    first++;
    last--;
  }
};

let array = [1,2,3]
let x = array[0]

array[0] = 2;
console.log(array, x)