/* 

"Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure." 

"1"

"1,2,4,n,5,2,n,n,n,n,3,6,n,n,n"
      1
    2   3
  4    6  
    5
  2

        1
      2   3
    4  n 6  n
  n   5 n n
     2  n
    n  n
*/


function serialize(root) {
  // initialize string
  let serialized = '';
  // dfs
  function dfs(node) {
    // if !node add n to string return
    if (!node) {
      serialized += 'n,';
      return;
    }
    // add node.val to string + ,
    serialized += `${node.val},`;
    // dfs node.left
    dfs(node.left);
    // dfs node.right
    dfs(node.right);
  }
  dfs(root);
  // remove trailing comma if need be
  if (serialized[serialized.length - 1]) serialized = serialized.slice(0, -1);
  // return string
  return serialized;
}

function deserialize(data) {
  // split data by ,
  data = data.split(',');
  // dfbuild
  function dfbuild() {
    // shift data
    let val = data.shift();
    // if n return null
    if (val === 'n') return null;
    // node = new TreeNode(shifted)
    let node = new TreeNode(val);
    // node.left = dfbuild()
    node.left = dfbuild();
    // node.right = dfbuild()
    node.right = dfbuild();
    // return the node
    return node;
  }
  // set root to be dfbuild call
  let root = dfbuild();
  // return root
  return root;
}