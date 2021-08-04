/* 
"Given a non-empty binary tree, find the maximum path sum. For this problem, a path is defined as any sequence of nodes from some starting node to any node in the tree along the parent-child connections. The path must contain at least one node and does not need to go through the root."

*/


var maxPathSum = function(root) {
  let max = -Infinity;
  function dfs (node) {
    if (!node) return 0;
    // get max recursively from left or 0
    let leftMax = Math.max(dfs(node.left), 0);
    // get max recursively from right or 0
    let rightMax = Math.max(dfs(node.right), 0);
    // add node.val + maxes above
    let nodeSum = node.val + leftMax + rightMax;
    // compare with max
    max = Math.max(nodeSum, max);
    // return val + max of leftMax and rightMax. Cannot take both if we add to above, can only take both if node is the  top  of our path
    return nodeSum - Math.min(leftMax, rightMax);
  }
  dfs(root)
  return max;
}

