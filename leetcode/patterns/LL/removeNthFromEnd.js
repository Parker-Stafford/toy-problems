/* Given the head of a linked list, remove the nth node from the end of the list and return its head.
Example 1:
Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]
[1,2,3,4,5]
           f
     p s
Example 2:
Input: head = [1], n = 1
Output: []

Example 3:
Input: head = [1,2], n = 2
Output: [1]

Constraints:
The number of nodes in the list is sz.
1 <= sz <= 30
0 <= Node.val <= 100
1 <= n <= sz
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
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function(head, n) {
  // no n we return the head
  if (!n) return head;
  // list is only length 1 we return null
  if (!head.next) return null;
  // make two pointers fast and slow point to head
  let [fast, slow] = [head, head];
  // also make a prev pointer which points to the node before slow
  let prev = null;
  // Iterate with only fast until n is 0
  while (fast) {
    if (n) {
      fast = fast.next;
      n--;
      continue;
    }
    // once n is 0 start iterating with both
    fast = fast.next;
    prev = slow;
    slow = slow.next;
  }
  // if n is greater than the length of the list return n
  if (n) return head;
  // when fast is null re wire prev to point to slow.next unless prev is still null (removing head) then return head.next
  if (!prev) return head.next;
  prev.next = slow.next;
  return head;
};