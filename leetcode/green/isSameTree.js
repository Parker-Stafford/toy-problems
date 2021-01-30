/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
function isSameTree(p,q) {
  let isFalse;
  if (!p && !q) {
      return true;
  } else if (p && !q) {
      return false;
  } else if (!p && q) {
      return false
  }
  function traverser(node1, node2) {
      if (node1.val !== node2.val) {
          isFalse = false
          return
      }
      if (node1.left && node2.left) {
          traverser(node1.left, node2.left);
      }
      if (node1.left && !node2.left) {
          isFalse = false
          return
      }
      if (!node1.left && node2.left) {
          isFalse = false
          return
      }

      if (node1.right && node2.right) {
          traverser(node1.right, node2.right);
      }
      if (node1.right && !node2.right) {
          isFalse = false
          return
      }
      if (!node1.right && node2.right) {
          isFalse = false
          return
      }
  }
  traverser(p,q);
  return (isFalse === false ? false : true);
}