// Use Python, Javascript, or equivalent language to write a function that removes duplicates from a sorted linked list. Your function should take a singly-linked list and return a singly-linked list. Extra points for making it recursive. *

function Node(value, next) {
  this.value = (value===undefined ? 0 : value)
  this.next = (next===undefined ? null : next)
}


function removeDups(node, prev = null) {
  if(!node) return node;
  if (prev && node.val === prev.val) {
    prev.next = node.next;
    removeDups(prev.next, prev);
  } else {
    removeDups(node.next, node);
  }
  return node;
}

