// Given a singly linked list, determine if it is a palindrome.

// Example 1:

// Input: 1->2
// Output: false
// Example 2:

// Input: 1->2->2->1
// Output: true
// Follow up:
// Could you do it in O(n) time and O(1) space?

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  if (!head || !head.next) return true;
let fast = head;
let slow = head;
let mid;
// find middle
while(true) {
  // even
  if (fast.next && !fast.next.next) {
    mid = slow.next
    break;
  // odd
  } else {
    fast = fast.next.next;
    if (!fast.next) {
      mid = slow.next.next;
      break;
    }
    slow = slow.next;
  }
}
if (mid.val !== slow.val) {
  return false;
}
// reverse
function reverse(midNode, prev = null) {
  let copy = new ListNode(midNode.val, midNode.next);
  copy.next = prev;
  if(midNode.next) {
    return reverse(midNode.next, copy);
  } else {
    return copy;
  }
}
let reversed = reverse(mid);
console.log(reversed);
// check
let start = head;
while(start !== slow) {
  if (reversed.val !== start.val) {
    return false;
  }
  reversed = reversed.next;
  start = start.next;
}
return true;
};
