/* "Given a linked list, reverse the nodes of a linked list k at a time and return its modified list. k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes in the end should remain as it is." 

2, 1, 4, 3, 6, 5
k = 2
           ta
  1->2->3->4->5->6
p h        n  t     
        c
p  4->3->2->1->5->6
  4->5->6
p t

  1->2->3->4->5->6
  s        n  t 
        c  e
start
iterate k times
end
set current to start
make a next
make a temp (n.n)
point n to c
c = n
n = t
if n = e
  point s to t
s = t



k=3
3, 2, 1, 6, 5 , 4
        
k=4
4, 3, 2, 1, 5, 6
             
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
 * @param {number} k
 * @return {ListNode}
 */

var reverseKGroup = function(head, k) {
  if (k <= 1) return head;
  let prev = { next: head }
  let newHead = head;
  // set start as head
  let start = head;
  let traverser = head;
  let iteration = 1
  // iterate k times
  while (traverser) {
    iteration++;
    traverser = traverser.next;
    if (iteration === k && traverser) {
      // set end as finish node
      let end = traverser;
      // set current to start
      let cur = start
      // make next current.next
      let next = cur.next;
      while (true) {
        // make a temp (next.next)
        let temp = next.next;
        // point next to current
        next.next = cur;
        // if n = e
        if (next === end) {
          // point s to t
          if (prev.val === undefined) newHead = end;
          prev.next = end;
          prev = start;
          start = temp;
          // point p to e reassign return head if needed
          iteration = 1;
          traverser = start;
          break;
        }
        // c = n
        cur = next;
        // n = t
        next = temp;
      }
    }
  }
  // if we finished early and have a cycle point prev to start
  if (prev.next.next === prev) prev.next = start;
  return newHead;
};
