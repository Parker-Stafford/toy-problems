/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

var removeNthFromEnd = function(head, n) {
  let count = 0;
  let len = 0;
  const tracker = {};
  let node = head;
  while (node) {
    len++
    tracker[count] = node;
    node = node.next;
    count++;
  }
  let before = len - n - 1;
  if (before < 0) {
    head = head.next
  } else {
    tracker[before].next = tracker[before].next.next;
  }

  return head;
};