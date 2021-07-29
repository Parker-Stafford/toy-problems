/* "Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i]." 
8
[1,2,2,2]
[8,4,4,4]

8 
0
has0 =t
[1,2,2,2,0]
[0,0,0,0,8]
-8
[1,2,2,-2]
[-8,-4,-4,4]
considerations:
0
- numbers

*/

var productExceptSelf = function(nums) {
  // declare tracking and results variables
  const products = [];
  let hasZero = false;
  let zeroCount = 0;
  let product = 1;
  // iterate over the array
  for (const num of nums) {
    // if not 0 multiply num by product
    if (num) product *= num;
    // set hasZero to true and don't multiply
    else {
      hasZero = true;
      zeroCount++;
    }
  }
  if (zeroCount > 1) return new Array(nums.length).fill(0)
  // iterate again
  for (const num of nums) {
    // if hasZero
    if (hasZero) {
      // if num push 0
      if (num) products.push(0);
      // push product
      else products.push(product);
      continue;
    }
    // push product / num
    products.push(product / num);
  }
  return products; 
}

