/*
"Given an unsorted integer array, find the smallest missing positive integer...Your algorithm should run in O(n) time and uses constant extra space."
[-1,4,2,5,-2,0]

[t,-2,t,5,t,t]

[4,2,5,1]
3
[100,101,102,97]
1

[1,t,t,t,t,t,t]
1,2,3,4,5,6
array.length
[1,t,0] t = 2
t2 = 0
[1,t,t]
*/

var firstMissingPositive = function(array) {
  // iterate through array
  for (let i = 0; i < array.length; i++) {
    // if we reach a positive number that is also less than array.length + 1
    if (array[i] > 0 && array[i] <= array.length) {
      // create a temp variable to store the number at arr[currentVal]
      let temp = array[array[i]];
      array[array[i]] = true;
      // while temp > 0
      while (temp > 0 && temp <= array.length) {
        // reassign temp to value at arr[temp]
        if (array[temp] === true) break;
        let temp2 = array[temp];
        // change the index at that value to b true
        array[temp] = true;
        temp = temp2;
      }
    }
  }
  // iterate through the array starting at index 1
  for (let i = 1; i < array.length; i++) {
    // return the index at the first value that isn't T
    if (array[i] !== true) return i;
  }
  return array.length;
}