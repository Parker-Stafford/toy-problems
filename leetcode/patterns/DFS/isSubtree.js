// Given two non-empty binary trees s and t, check whether tree t has exactly the same structure and node values with a subtree of s. A subtree of s is a tree consists of a node in s and all of this node's descendants. The tree s could also be considered as a subtree of itself.

// Example 1:
// Given tree s:

//      3
//     / \
//    4   5
//   / \
//  1   2
// Given tree t:
//    4
//   / \
//  1   2
// Return true, because t has the same structure and node values with a subtree of s.


// Example 2:
// Given tree s:

//      3
//     / \
//    4   5
//   / \
//  1   2
//     /
//    0
// Given tree t:
//    4
//   / \
//  1   2
// Return false.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
 var isSubtree = function(s, t) {
  let isSame = false;
  function checkEqual(node1, node2) {
    if (!node1 && !node2) return true;
    if (!node1 || !node2) return false;
    return (node1.val === node2.val && checkEqual(node1.left, node2.left) && checkEqual(node1.right, node2.right));
  }
  function traverser(node, subNode) {
    if (!node) return;
    if (isSame) return;
    if (node.val === subNode.val) {
      isSame = checkEqual(node, subNode);
    }
    traverser(node.left, subNode);
    traverser(node.right, subNode);
  };

  traverser(s, t);
  return isSame;
};