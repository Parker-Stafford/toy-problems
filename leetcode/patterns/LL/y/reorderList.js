/* You are given the head of a singly linked-list. The list can be represented as:

L0 → L1 → … → Ln - 1 → Ln
Reorder the list to be on the following form:

L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
You may not modify the values in the list's nodes. Only nodes themselves may be changed.

 

Example 1:


Input: head = [1,2,3,4]
Output: [1,4,2,3]
Example 2:


Input: head = [1,2,3,4,5]
Output: [1,5,2,4,3]
[1,2,3,4,5]
 s   
         f
 [1, 5, 2, 3, 4]
        s
               f
[1, 5, 2, 4, 3]
             s
[1,2,3,4,5,6,7,8]
     p s f
[1,8,2,7,3,6,4,5]


Constraints:

The number of nodes in the list is in the range [1, 5 * 104].
1 <= Node.val <= 1000 

  [1,2,3,4,5]
   s     p f
   1, 2, 3, 4
   t = 2, 3, 4
   1, 5
   1, 5, 2, 3, 4
       s    p  f
  1, 5, 2, 4, 3
           p  sf
*/

var reorderList = function (head) {
  // make slow and fast pointers point to head
  let [slow, fast] = [head, head];
  let fPrev = {next: head}
  // while slow.next and slow.next.next
  while (slow.next && slow.next.next) {
    // move fast to the last element while fast.next
    while (fast.next) {
      fast = fast.next.next ? fast.next.next : fast.next;
      fPrev = fPrev.next.next === fast ? fPrev.next : fPrev.next.next; 
    }
    // set fPrev's next to null
    fPrev.next = null
    // make temp variable for slow.next
    let temp = slow.next
    // set slow.next = fast
    slow.next = fast;
    // set fast.next = temp variable
    fast.next = temp;
    // set slow  =  slow.next.next which skips over the newly moved node to the next rewire node
    fPrev = fast;
    slow = temp;
    fast = slow;
  }
  // return head
  return head;
}

var reorderList = function(head) {
  // split the list
  let [slow, fast, l1] = [head, head, head];
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  // reverse the second half
  let l2 = slow.next;
  slow.next = null;
  l2 = reverseList(l2);
  // merge them
  while (l1 && l2) {
    let temp1 = l1.next;
    let temp2 = l2.next;
    l1.next = l2;
    l2.next = temp1;
    l1 = temp1;
    l2 = temp2;
  }
  return head;
}
function reverseList (head, prev = null) {
  if (!head) return prev;
  let next = head.next;
  head.next = prev;
  prev = head;
  return reverseList(next, prev);
}
