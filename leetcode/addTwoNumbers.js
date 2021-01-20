// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example 1:
// Input: l1 = [2,4,3], l2 = [5,6,4]
// 342
// 465
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

// Example 2:
// Input: l1 = [0], l2 = [0]
// Output: [0]

// Example 3:
// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]

var addTwoNumbers = function(l1, l2) {
  let numOne = '';
  let numTwo = '';
  let curNodeOne = l1;
  let curNodeTwo = l2;
  while (curNodeOne) {
    numOne += curNodeOne.val;
    curNodeOne = curNodeOne.next;
  }
  while (curNodeTwo) {
    numTwo += curNodeTwo.val;
    curNodeTwo = curNodeTwo.next;
  }
  const longer = (numOne.length < numTwo.length ? numTwo : numOne);
  let carry = false;
  let i = 0;
  let stringNum = '';
  let sum = 0;
  while  (i < longer.length) {
    let digitOne = numOne[i] || '0';
    let digitTwo = numTwo[i] || '0';
    if (carry) {
      sum = +digitOne + +digitTwo + 1;
      carry = false;
    } else {
      sum = +digitOne + +digitTwo;
    }
    if (sum >= 10) {
      let curDigit = sum - 10;
      stringNum += curDigit;
      carry = true;
    } else {
        stringNum += sum;
    }
    i++
    if (i === longer.length && carry) {
      stringNum += 1;
    }
  }
  let result;
  function listGenerator(string, index) {
    if (string[index]) {
      return new ListNode(+string[index], listGenerator(string, index + 1));
    }
    return null;
  }
  result = listGenerator(stringNum, 0);
  return result;
};

// numOne = numOne.split('').reverse().join('');
// numTwo = numTwo.split('').reverse().join('');
// let sum = numOne + numTwo;
// sum = sum.toString();
// sum = sum.split('').reverse().join('');