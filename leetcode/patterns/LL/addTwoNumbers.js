/* You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example 1:
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.



Example 2:
Input: l1 = [0], l2 = [0]
Output: [0] */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

 l1 = [2,4,3], l2 = [5,6,4,1]
 var addTwoNumbers = function(l1, l2) {
  let sum;
  let carry = false;
  let digit = 0;
  let prev;
  // iterate through both lists
  while(l1 || l2) {
    // if both lists still ahve nodes add the values together and carry any 1's
    digit = (l1 ? l1.val : 0) + (l2 ? : l2.val : 0) + (carry ? 1 : 0)
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
    carry = (digit >= 10) ? true : false;
    digit = (digit >= 10) digit - 10 : digit;
    if (prev) {
      prev.next = {val: digit, next: null};
      prev = prev.next;
    } else {
      prev = {val: digit, next: null};
      sum = prev;
    }
  }
  if (carry) prev.next = {val: 1, next: null};
  return sum;
};