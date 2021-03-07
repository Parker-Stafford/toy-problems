// Given a binary tree, find its minimum depth.

// The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

// Note: A leaf is a node with no children.



// Example 1:


// Input: root = [3,9,20,null,null,15,7]
// Output: 2
// Example 2:

// Input: root = [2,null,3,null,4,null,5,null,6]
// Output: 5

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
 * @return {number}
 */
 var minDepth = function(root) {
  if (!root) {
      return 0;
  }
  if (!root.left && !root.right) {
    return 1;
  }
  let queue = [root];
  let temp = [];
  let count = 1;
  while (queue.length) {
    let current = queue.shift();
    if (!current.left && !current.right) {
      return count;
    }
    if (current.left) {
      temp.push(current.left);
    }
    if (current.right) {
      temp.push(current.right);
    }
    if (!queue.length) {
      count++;
      queue = temp;
      temp = [];
    }
  }
};