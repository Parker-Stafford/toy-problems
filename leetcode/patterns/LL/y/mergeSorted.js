// Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.



// Example 1:


// Input: l1 = [1,2,4], l2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// Example 2:

// Input: l1 = [], l2 = []
// Output: []
// Example 3:

// Input: l1 = [], l2 = [0]
// Output: [0]

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// modify original inputs;
var mergeTwoLists = function(l1, l2) {
  let node1 = l1;
  let node2 = l2;
  let newHead;
  if (!l1 && !l2) {
    return null;
  } else if (!l1) {
    return l2;
  } else if (!l2) {
    return l1;
  }

  if (node1.val <= node2.val) {
    newHead = node1;
    node1 = node1.next;
  } else {
    newHead = node2;
    node2 = node2.next;
  }
  let prev = newHead;
  while (node1 || node2) {
    if (!node1) {
      prev.next = node2;
      prev = node2;
      node2 = node2.next;
    } else if (!node2) {
      prev.next = node1;
      prev = node1;
      node1 = node1.next;
    } else {
      if (node1.val <= node2.val) {
        prev.next = node1;
        prev = node1;
        node1 = node1.next;
      } else {
        prev.next = node2;
        prev = node2;
        node2 = node2.next;
      }
    }
  }
  return newHead;
};