// Given a non-empty binary tree, return the average value of the nodes on each level in the form of an array.
// Example 1:
// Input:
//     3
//    / \
//   9  20
//     /  \
//    15   7
// Output: [3, 14.5, 11]
// Explanation:
// The average value of nodes on level 0 is 3,  on level 1 is 14.5, and on level 2 is 11. Hence return [3, 14.5, 11].

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 var averageOfLevels = function(root) {
  const results = [];
  let temp = [];
  let queue = [root];
  let count = 0;
  let sum = 0;
  while (queue.length) {
    let current = queue.shift();
    sum += current.val;
    count += 1;
    if(current.left) {
      temp.push(current.left);
    }
    if(current.right) {
      temp.push(current.right);
    }
    if (queue.length === 0) {
      results.push(sum / count);
      sum = 0;
      count = 0;
      queue = temp;
      temp = [];
    }
  }
  return results;
};

