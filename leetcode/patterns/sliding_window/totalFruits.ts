/* You are visiting a farm that has a single row of fruit trees arranged from left to right. The trees are represented by an integer array fruits where fruits[i] is the type of fruit the ith tree produces.

You want to collect as much fruit as possible. However, the owner has some strict rules that you must follow:

You only have two baskets, and each basket can only hold a single type of fruit. There is no limit on the amount of fruit each basket can hold.
Starting from any tree of your choice, you must pick exactly one fruit from every tree (including the start tree) while moving to the right. The picked fruits must fit in one of your baskets.
Once you reach a tree with fruit that cannot fit in your baskets, you must stop.
Given the integer array fruits, return the maximum number of fruits you can pick.

Example 1:
Input: fruits = [1,2,1]
Output: 3
Explanation: We can pick from all 3 trees.

Example 2:
Input: fruits = [0,1,2,2]
Output: 3
Explanation: We can pick from trees [1,2,2].
If we had started at the first tree, we would only pick from trees [0,1].

Example 3:
Input: fruits = [1,2,3,2,2]
Output: 4
Explanation: We can pick from trees [2,3,2,2].
If we had started at the first tree, we would only pick from trees [1,2].

Example 4:
Input: fruits = [3,3,3,1,2,1,1,2,3,3,4]
Output: 5
Explanation: We can pick from trees [1,2,1,1,2].
fruits = {2, 1}
length = 2
fruits = 4
[3,3,3,1,2,1,1,2,3,3,4]
      r 
Constraints:
1 <= fruits.length <= 105
0 <= fruits[i] < fruits.length */

function totalFruit(fruits: number[]): number {
  // make maxPicked, picked, curPicked, make l = 0
  let maxPicked, curPicked, left;
  maxPicked =  left = 0;
  curPicked = 1;
  const picked = {};
  picked[fruits[0]] = 0;
  // iterate over fruits
  for (let i = 1; i < fruits.length; i++) {
    // setting picked
    const fruit = fruits[i];
    const prev = fruits[i - 1];
    if (fruit !== prev) {
      curPicked = i - left;
      picked[fruit] = i;
      if (Object.keys(picked).length  > 2) {
        maxPicked = (maxPicked > curPicked) ? maxPicked : curPicked;
        for (const key in picked) {
          if (key !== prev.toString() && key !== fruit.toString()) delete picked[key];
        }
        left = picked[prev];
      }
    }
  }
  maxPicked = (maxPicked > fruits.length - left) ? maxPicked : fruits.length - left;
  return maxPicked;
};

















