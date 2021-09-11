/* "Given a non-empty binary tree, find the maximum path sum. For this problem, a path is defined as any sequence of nodes from some starting node to any node in the tree along the parent-child connections. The path must contain at least one node and does not need to go through the root."

max = 9
sum = 1
          1
      2       3
    4   5   6    7

        - 1
     - 2
   - 4
-3
- 2 - 5

*/

var pathSum = function(root) {
  // make max, and current 0;
  let max = sum = 0;
  // dfs takes in current sum, node
  function dfs(node) {
    // no nodes return
    if (!node) return;
    sum = Math.max(sum + node.val, 0);
    // reset max if need be
    max = Math.max(sum, max);
    // traverse left pass in left node and max of 0 and current + node.val
    dfs(node.left, sum);
    // traverse right pass in right node and max of 0 and current +  node.val
    dfs(node.right, sum);
  }
  // call dfs with root and current
  dfs(root);
  return max;
}