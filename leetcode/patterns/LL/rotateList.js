/* Given the head of a linked list, rotate the list to the right by k places.

Example 1:
Input: head = [1,2,3,4,5], k = 2
Output: [4,5,1,2,3]
[1,2,3,4,5]
5,1,2,3,4,5
5,1,2,3,4
4,5,1,2,3

// when we get to the tail, point it to the head, set the tail to new head, decrement k
// each level above that we decrement k and set to new head
// when k is 0 point to null return up out of the callstack and return new head

Example 2:
Input: head = [0,1,2], k = 4
0,1,2  end of recursion
2,0,1
1,2,0
0,1,2
2,0,1
Output: [2,0,1]
// track the length, if k is greater than length k = k - l if k = l return original ll

Constraints:

The number of nodes in the list is in the range [0, 500].
-100 <= Node.val <= 100
0 <= k <= 2 * 109

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
/*
Strategy
1,2,3,4,5
traverse till we reach the end (5)
point it to the head
5,1,2,3,4,5
Now we have a circular linked list
Move back up the list until k is 0 using the recursive call stack resetting the head along the way
5,1,2,3,4,5
      ^ h
Make the current node the new tail to remove the cycle
5,1,2,3,n 4 <- newHead
|_________|
4,5,1,2,3
*/
// O(n) time and O(n) space (call stack)
var rotateRight = function(head, k) {
  if (!head || !head.next || !k) return head;
  // initialize newHead, l, and current
  let newHead;
  let current = head;
  let len = 0;
  // traverse the list
  function traverse(node) {
    len++;
    // traverse to tail
    if (node.next) traverse(node.next);
    else {
      // if k is greater than l k should be the remainder of k / l because rotating l times means returning the original list. 
      if (k > len) k = k % len;
      // compare k and l if k and l are the same or k is divisible by l we can return the linked list
      if (k === len || !k) {
        newHead = head;
        k = -1;
        return;
      }
      //point old tail to head
      node.next = head;
    }
    // if k is less than 0 we are finished and need to return up the call stack
    if (k < 0) return;
    // when k is 0 we are at the new tail
    if (k === 0) {
      node.next = null;
      k--;
      return;
    }
    // keep moving the head back until we have exhausted k
    newHead = node;
    k--;
  }
  traverse(current);
  return newHead;
};

// no recursion O(n) O(1)
var rotateRight = function(head, k) {
  let len = 1;
  let tail = head;
  // traverse to the end
  while (tail && tail.next) {
    len++;
    tail = tail.next;
  }
  // deal with large k edge cases
  k = k % len;
  // if k is 0 return the original list
  if (!k) return head;
  // traverse until you are at the kth + 1 from last node
  let distance = len - k;
  let newTail = head;
  while (distance > 1) {
    distance--;
    newTail = newTail.next;
  }
  // the new head will be the kth from last node
  let newHead = newTail.next;
  // the new tail kth + 1 from last node will point to null
  newTail.next = null;
  // the original tail will point to original head
  tail.next = head;
  return newHead;
}