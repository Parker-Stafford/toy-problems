// Given a linked list, swap every two adjacent nodes and return its head.



// Example 1:


// Input: head = [1,2,3,4]
// Output: [2,1,4,3]
// Example 2:

// Input: head = []
// Output: []
// Example 3:

// Input: head = [1]
// Output: [1]

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  let node = head;
  while (node) {
    let oldNext = node.next;
    let oldNextNext = node.next.next;
    if (node === head) {
      head = oldNext;
    }
    if (node.next.next) {
      node.next = node.next.next.next;
    } else {
      node.next = node.next.next;
    }
    oldNext.next = node;
    node = oldNextNext;
  }
  return head;
};