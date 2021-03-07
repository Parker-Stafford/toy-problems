// Given the root of a binary tree, return its maximum depth.

// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.



// Example 1:


// Input: root = [3,9,20,null,null,15,7]
// Output: 3
// Example 2:

// Input: root = [1,null,2]
// Output: 2
// Example 3:

// Input: root = []
// Output: 0
// Example 4:

// Input: root = [0]
// Output: 1

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
 var maxDepth = function(root) {
  if (!root) {
    return 0;
  }
  if (!root.left && !root.right) {
    return 1;
  }

  let max = 0;
  function traverser(node, sum = 0) {
    sum++;
    max = Math.max(sum, max);
    if (node.left) {
      traverser(node.left, sum);
    }
    if (node.right) {
      traverser(node.right, sum);
    }
  }
  traverser(root)
  return max;
};

var maxDepth = function (root) {
  if (!root) {
    return 0;
  }
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}