/*
"Given preorder and inorder traversal of a tree, construct the binary tree."
pre order - left sub tree first then right starting at root
inorder- left root right


*/

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
 }

var buildTree = function(inorder, preorder) {
  // if we don't have in return null
  if (!inorder.length) return null;
  // set root to first element of post and remove
  let root = root = new TreeNode(preorder.shift());
  // search through inorder for root
  let rootI = inorder.indexOf(root);
  // make left (everything before root in in)
  let left = inorder.slice(0, rootI);
  // make right (everythign after root inorder inorder)
  let right = inorder.slice(rootI + 1);
  // root.left = recursive call with left as in and preorder
  root.left = buildTree(left, preorder);
  // root.right = recursive call with right as in and preorder
  root.right = buildTree(right, preorder);
  return root;
}