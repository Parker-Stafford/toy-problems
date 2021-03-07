// Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.

// A leaf is a node with no children.

// Example 1:

// Input: root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
// Output: true

// Example 2:

// Input: root = [1,2,3], targetSum = 5
// Output: false

// Example 3:

// Input: root = [1,2], targetSum = 0
// Output: false

//  function TreeNode(val, left, right) {
//      this.val = (val===undefined ? 0 : val)
//      this.left = (left===undefined ? null : left)
//      this.right = (right===undefined ? null : right)
//  }

/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
 var hasPathSum = function(root, targetSum) {
  if (!root) {
    return false;
  }
  function traverser(node, sum = 0) {
    sum += node.val;
    if ((!node.left && !node.right) && sum === targetSum) {
      return true;
    } else {
      let test = node.left ? traverser(node.left, sum) : null;
      if (test) {
        return true;
      }
      test = node.right ? traverser(node.right, sum) : null;
      if (test) {
        return true;
      }
    }
  }
  const hasPath = traverser(root);
  return hasPath ? true : false;
};