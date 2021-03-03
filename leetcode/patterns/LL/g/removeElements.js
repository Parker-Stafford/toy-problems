/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  let node = head;
  let prev = null;
  while (node) {
    if (node.val === val) {
      if (node === head) {
        head = head.next;
        node = head;
        continue;
      } else {
        prev.next = node.next;
        node = node.next;
        continue;
      }
    }
    prev = node;
    node = node.next;
  }
  return head;
};