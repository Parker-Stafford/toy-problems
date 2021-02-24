/**
 * Definition for singly-linked list.
 function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

 // Caching one pass
var middleNode = function(head) {
  let indexTracker = {};
  let length = 1;
  let node = head;
  while(node) {
    indexTracker[length] = node;
    length++
    node = node.next;
  }
  const half = Math.ceil(length / 2);
  return indexTracker[half]
};

// fast and slow pointers half pass
var middleNode = function(head) {
  let fast = head;
  let slow = head;
  while(fast) {
    if (!fast.next) {
      return slow;
    }
    fast = fast.next.next;

    slow = slow.next;
  }
  return slow;
}