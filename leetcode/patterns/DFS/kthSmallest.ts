/* Given the root of a binary search tree, and an integer k, return the kth (1-indexed) smallest element in the tree.

Example 1:
Input: root = [3,1,4,null,2], k = 1
Output: 1

Example 2:
Input: root = [5,3,6,2,4,null,null,1], k = 3
                                   i
Output: 3

[1, 2, 3]
       

  return last element of array
Constraints:
The number of nodes in the tree is n.
1 <= k <= n <= 104
0 <= Node.val <= 104
Follow up: If the BST is modified often (i.e., we can do insert and delete operations) and you need to find the kth smallest frequently, how would you optimize? */

// Definition for a binary tree node.
 class TreeNode {
     val: number
     left: TreeNode | null
     right: TreeNode | null
     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
         this.val = (val===undefined ? 0 : val)
         this.left = (left===undefined ? null : left)
         this.right = (right===undefined ? null : right)
     }
 }
function kthSmallest(root: TreeNode | null, k: number): number {
  let count = 0;
  let smallest;
  // do inorder dfs until we get to k then return number
  function inOrderDFS(node: TreeNode) {
    if (!node || smallest !== undefined) return;
    inOrderDFS(node.left);
    if (smallest !== undefined) return;
    count++;
    if (count === k) smallest = node.val;
    inOrderDFS(node.right);
  }
  inOrderDFS(root);
  return smallest;
}

// binary tree, but not bst implementation
 function kthSmallest1(root: TreeNode | null, k: number): number {
  // make array of length k filled with infinity
  let smallArr = new Array(k).fill(Infinity);
  // perform dfs on tree
  dfsWithBubble(root, smallArr);
  // return last element of array
  return smallArr[smallArr.length - 1];
};


function dfsWithBubble(node: TreeNode, arr: number[]): void {
  if (!node) return;
  // compare value at each node to last element in array
  if (node.val < arr[arr.length - 1]) {
    // less than we will replace last element in array with current nodes value
    arr[arr.length - 1] = node.val;
    // call bubble function on array
    bubble(arr);
  }
  // dfs
  dfsWithBubble(node.left, arr);
  dfsWithBubble(node.right, arr);

}

function bubble(arr: number[]): void {
  for (let i = arr.length - 1; i > 0; i--) {
    if (arr[i] < arr[i - 1]) {
      [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];
    } else break;
  }
}







