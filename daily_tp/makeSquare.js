/* You are given an integer array matchsticks where matchsticks[i] is the length of the ith matchstick. You want to use all the matchsticks to make one square. You should not break any stick, but you can link them up, and each matchstick must be used exactly one time.

Return true if you can make this square and false otherwise.

 

Example 1:


Input: matchsticks = [1,1,2,2,2]
Output: true
Explanation: You can form a square with length 2, one side of the square came two sticks with length 1.
Example 2:

Input: matchsticks = [3,3,3,3,4]
Output: false
Explanation: You cannot find a way to form a square with all the matchsticks.
 

Constraints:

1 <= matchsticks.length <= 15
0 <= matchsticks[i] <= 109 */

/**
 * @param {number[]} matchsticks
 * @return {boolean}
 */

 var makesquare = function(matchsticks) {
  let perimiter = matchsticks.reduce((sum, cur) => (sum + cur), 0);
  let side = perimiter / 4;
  if (side % 1 !== 0) return false;
  let sides = 4;
  for (let i = 0; i < matchsticks.length; i++) {
    let stick = matchsticks[i];
    if (stick > side) return false;
    if (stick === side) {
      sides--;
      matchsticks.splice(i, 1);
      i--;
    }
  }
  if (!matchsticks.length) return true;
  let square = false;
  if (sides <= 0 && matchsticks.length) return false;
  function recurser(remainingSticks, indices, sum, curIndex) {
    if (sum === side) {
      sides--
      for (let i =  indices.length - 1; i >= 0; i--) {
        let index = indices[i];
        remainingSticks.splice(index, 1);
      }
      if (sides && remainingSticks.length) {
        recurser(remainingSticks, sides, [], 0); 
      } else if (!sides && !remainingSticks.length) {
        square = true;
        return;
      } else {
        return;
      }
    } else {
      if (sum + remainingSticks[curIndex] > side) {
        recurser(remainingSticks, indices, curIndex + 1);
      } else {
        for (let i = curIndex; i >= 0; i--) {
          let stick = remainingSticks[i];
          indices.push(curIndex)
          recurser(remainingSticks, indices, sum + stick, i + 1)
          indices.pop();
          
        }
      }
    }
  }
  recurser(matchsticks, [], 0, matchsticks.length)
  return square;
};