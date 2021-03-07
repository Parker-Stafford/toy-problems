// You are given two binary trees root1 and root2.

// Imagine that when you put one of them to cover the other, some nodes of the two trees are overlapped while the others are not. You need to merge the two trees into a new binary tree. The merge rule is that if two nodes overlap, then sum node values up as the new value of the merged node. Otherwise, the NOT null node will be used as the node of the new tree.

// Return the merged tree.

// Note: The merging process must start from the root nodes of both trees.



// Example 1:


// Input: root1 = [1,3,2,5], root2 = [2,1,3,null,4,null,7]
// Output: [3,4,5,5,4,null,7]
// Example 2:

// Input: root1 = [1], root2 = [1,2]
// Output: [2,2]

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
// create a brand new tree, do not modify original
 var mergeTrees = function(root1, root2) {
   if (!root1 && !root2) {
     return null;
   }
   if (!root2) {
     return root1;
   }
   if (!root1) {
    return root2;
  }
  function traverser(node1, node2) {
    if (!node1 && !node2) {
      return null;
    }
    if (!node2) {
      let newTree = new TreeNode(node1.val);
      newTree.left = traverser(node1.left);
      newTree.right = traverser(node1.right);
      return newTree;
    } else if (!node1) {
      let newTree = new TreeNode(node2.val);
      newTree.left = traverser(node2.left);
      newTree.right = traverser(node2.right);
      return newTree;
    } else {
      let newTree = new TreeNode(node1.val + node2.val);
      newTree.left = traverser(node1.left,  node2.left);
      newTree.right = traverser(node1.right, node2.right);
      return newTree;
    }
  }
  return traverser(root1, root2);
};

// faster modify original trees
var mergeTrees = function(root1, root2) {
   if (!root1 && !root2) {
     return null;
   }
   if (!root2) {
    return root1;
   } else if (!root1) {
     return root2;
   } else {
     let newTree = new TreeNode(root1.val + root2.val);
     newTree.left = mergeTrees(root1.left,  root2.left);
     newTree.right = mergeTrees(root1.right, root2.right);
     return newTree;
   }
   return root1;
};