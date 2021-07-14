/* Given the head of a linked list, return the list after sorting it in ascending order.

Follow up: Can you sort the linked list in O(n logn) time and O(1) memory (i.e. constant space)?

Example 1:
Input: head = [4,2,1,3]
Output: [1,2,3,4]

Example 2:
Input: head = [-1,5,3,4,0]
Output: [-1,0,3,4,5]

Example 3:
Input: head = []
Output: [] 

 The number of nodes in the list is in the range [0, 5 * 104].
 -105 <= Node.val <= 105
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

// use bubble sort to sort the LL O(n^2) time (worst) O(1) space
var sortList = function(head) {
  // if there is no list or a length of one list return the head
  if (!head || !head.next) return head;
  // create pointer that points to head, a previous counter, and one that points to head.next
  let current = head;
  let prev = { next: head };
  let next = head.next;
  // Create a boolean variable that tracks whether or not we swap
  let swapped = false;
  // Use a while loop to iterate over the list
  while (current && current.next) {
    // compare current to next
    if (current.val > next.val) {
      if (current === head) head = next;
      prev.next = next;
      current.next = next.next;
      next.next = current;
      next = current.next;
      swapped = true;
    } else {
      current = current.next;
      next = next.next;
    }
    prev = prev.next
  }
  if (swapped) return sortList(head)
  return head;
};

// Merge sort O(nlogn) time O(1) space
var sortList = function (head) {
  if (!head || !head.next) return head;
  // split list at middle
  const pivot = getPivot(head);
  // Sort then merge the two split lists
  return merge(sortList(head), sortList(pivot))
}

// Traverse list to find middle
var getPivot = function (head) {
  let fast = head.next;
  let slow = head;
  while (fast.next && fast.next.next) {
    fast = fast.next.next;
    slow = slow.next;
  }
  const pivot = slow.next;
  slow.next = null;
  return pivot;
}

var merge = function(list1, list2) {
  if (!list1) return list2;
  if (!list2) return list1;
  let newHead = {next: null};
  let current = newHead;
  while (list1 && list2) {
    current.next = (list1.val < list2.val) ? list1 : list2;
    current = current.next;
    if (list1.val < list2.val) list1 = list1.next;
    else list2 = list2.next;
  }
  if (list1) current.next = list1;
  if (list2) current.next = list2;
  return newHead.next;
}