/* Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)

Example 1:
Input: head = [1,2,3,4]
Output: [2,1,4,3]
 [1,2,3,4]
p c n t 
  2,1,3,4
    p c n t
2,1,3 < 4
2,1,3
  4
  2,1,4,3
    p n c t 
        p c

  1,2,3
p c n t
2,1,3
  p c n
// while current and current.next
// make n.n temp
// point next to current
// point current to temp
// point prev to next
// previous = currentcurrent = temp  next = temp.?next

Example 2:
Input: head = []
Output: []

Example 3:
Input: head = [1]
Output: [1]
 
Constraints:

The number of nodes in the list is in the range [0, 100].
0 <= Node.val <= 100 

*/

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
// O(n) time single pass O(1) space
var swapPairs = function(head) {
  // check 0 length and 1 length ll
  if (!head || !head.next) return head;
  // initialize previous, current, next
  let [c, n] = [head, head.next];
  let newHead = n;
  let prev;
  // while current and current.next
  while (c && c.next) {
    // make n.n temp
    let temp = n.next;
    // point next to current
    n.next = c;
    // point current to temp
    c.next = temp;
    // point prev to next
    if (prev) prev.next = n;
    // previous = currentcurrent = temp  next = temp.?next   
    prev = c;
    c = temp;
    n = temp?.next;
  }
  return newHead;
};

// cool recursive solution
var swapPairs = function(head) {
  if (!head || !head.next) return head;
  let c = head, n = head.next, t = n.next;
  n.next = c;
  c.next = swapPairs(t);
  return n;
}