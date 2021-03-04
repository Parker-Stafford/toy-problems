// Given the head of a singly linked list, reverse the list, and return the reversed list.



// Example 1:


// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]

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
var reverseList = function(head) {
  if (!head) return null;
  let next = head.next;
  let prev = head;
  head.next = null;
  while (next) {
    let temp = next.next;
    next.next = prev;
    prev = next;
    next = temp;
  }
  head =  prev;
  return prev;
};
