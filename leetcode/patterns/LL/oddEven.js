/* Given the head of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return the reordered list.

The first node is considered odd, and the second node is even, and so on.

Note that the relative order inside both the even and odd groups should remain as it was in the input.

You must solve the problem in O(1) extra space complexity and O(n) time complexity.

Example 1:
Input: head = [1,2,3,4,5]
Output: [1,3,5,2,4]
oh = 1.... eh = 2...
op = 1  ep = 2
[1,2,3,4,5]
           c
Example 2:
Input: head = [2,1,3,5,6,4,7]
Output: [2,3,6,7,1,5,4]

Constraints:
n == number of nodes in the linked list
0 <= n <= 104
-106 <= Node.val <= 106 */
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
// O(n) time and O(1) space
var oddEvenList = function(head) {
  if (!head || !head.next || !head.next.next) return head;  
  // make odd pointer and even head which are head and head.next respectively
  let [op, eh] = [head, head.next];
  // make even pointer which points to the even head
  let ep = eh;
  // make current which is the third element in the list (eh.next)
  let current = ep.next;
  // make odd variable which is set to true since we are starting at an odd index
  let odd = true;
  // iterate through list until current is null
  while (current) {
    // at odd index
    if (odd) {
      // point the end of the odd list to current node
      op.next = current;
      // move the odd pointer to the end
      op = op.next;
    // at even index
    } else {
      // point the end of the even list to current node
      ep.next = current;
      // move the even pointer to the new end
      ep = ep.next;
    }
    // move current to the next node
    current = current.next;
    // switch from odd to even or even to odd index
    odd = !odd;
  }
  // point the end of the odd list to the even head
  op.next = eh;
  // point point the end of the even list (the new tail) at null
  ep.next = null;
  // return odd head
  return head;
};

var oddEvenList = function(head) {
  if (!head || !head.next || !head.next.next) return head;  
  let [op, eh] = [head, head.next];
  let ep = eh;
  let current = ep.next;
  let odd = true;
  while (current) {
    if (odd) {
      op.next = current;
      op = op.next;
    } else {
      ep.next = current;
      ep = ep.next;
    }
    current = current.next;
    odd = !odd;
  }
  op.next = eh;
  ep.next = null;
  return head;
};