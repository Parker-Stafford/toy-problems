// Given a reference of a node in a connected undirected graph.

// Return a deep copy (clone) of the graph.

// Each node in the graph contains a val (int) and a list (List[Node]) of its neighbors.

// class Node {
//     public int val;
//     public List<Node> neighbors;
// }


// Test case format:

// For simplicity sake, each node's value is the same as the node's index (1-indexed). For example, the first node with val = 1, the second node with val = 2, and so on. The graph is represented in the test case using an adjacency list.

// Adjacency list is a collection of unordered lists used to represent a finite graph. Each list describes the set of neighbors of a node in the graph.

// The given node will always be the first node with val = 1. You must return the copy of the given node as a reference to the cloned graph.

/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */

function Node(val, neighbors) {
  this.val = val === undefined ? 0 : val;
  this.neighbors = neighbors === undefined ? [] : neighbors;
};

var cloneGraph = function(node) {
  const storage = {};
  function traverser(originalNode) {
    let copy;
    if (storage[originalNode.val]) {
      copy = storage[originalNode.val];
    } else {
      copy = new Node(originalNode.val);
    }
    storage[originalNode.val] = storage[originalNode.val] || copy;
    for (let i = 0; i < originalNode.neighbors.length; i++) {
      if (storage[originalNode.neighbors[i].val]) {
        copy.neighbors.push(storage[originalNode.neighbors[i].val])
      } else {
        copy.neighbors.push(traverser(originalNode.neighbors[i]));
      }
    }
    return copy;
  }
  return node ? traverser(node) : node;
}
