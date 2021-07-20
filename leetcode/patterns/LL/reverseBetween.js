/* Given the head of a singly linked list and two integers left and right where left <= right, reverse the nodes of the list from position left to position right, and return the reversed list.

Example 1:
Input: head = [1,2,3,4,5], left = 2, right = 4
Output: [1,4,3,2,5]

l = 2 r = 5
1,2,3,4,5,6
  l     r
1,5,3,4,2,6
    l r
1,5,4,3,2,6


2,3,4,5

prevNext = null, current
// make temp variable for current node.next
p null c 2,3,4,5
t 3,4,5
// point current node at the previous node
2 - n
// previous to current and current to tmp
p - 2 - n
c 3,4,5
t 4,5
3- 2- n 


temp - 3, 4, 5
2 --> null
3 --> 2 --> n
4, 5
4--> 3 --> 2 --> n
5

solution 1 On time and O(n) space
// make two pointers
// iterate until they are at l and r
// swap values of l and r
// move r to prev and l to next
// stop when r.next = l or l = r

solution 2
prev of l

grab next of r
l - r as independent ll
reverse

Example 2:
Input: head = [5], left = 1, right = 1
Output: [5]

// if right === left return head
// if ! head or !head.next return head

Constraints:

The number of nodes in the list is n.
1 <= n <= 500
-500 <= Node.val <= 500
1 <= left <= right <= n */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
// O(n) O(n) because of the recursive stack for reversing
var reverseBetween = function(head, left, right) {
  if (left === right || !head || !head.next) return head;
  // iterate until left with two pointers until we find left and right
  let count = 1;
  let [lp, rp] = [head, head];
  let lPrev = {next: head};
  let rNext = null;
  let newHead, newTail;
  while (count < right) {
    if (count < left) {
      // when we find left, store previous
      lp = lp.next;
      lPrev = lPrev.next
    }
    rp = rp.next;
    count++;
  }
    var reverseList = function(prev, current) {
    // make temp of current.next
    let temp = current.next;
    // point current.next to previous
    current.next = prev;
    if (!temp) {
      newHead = current;
      return;
    };
    if (!prev) newTail = current;
    // recurse with prev = current and current = temp
    reverseList(current, temp);
  }
  // when we find right, store right next
  rNext = rp.next;
  rp.next = null;
  // reverse ll from left to right in place
  reverseList(null, lp);
  // insert the reversed list back into the main list
  // left's previous.next will point to reversed head
  lPrev.next = newHead;
  // reversed's end will point to right.next
  newTail.next = rNext;
  // if lefts previous is before the head, that means the head has been modified and we need to return lPrev.next otherwise the head is unchanged and can be returned
  return lPrev.val ? head : lPrev.next;
};