/* Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.



 

Example 1:

Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
Example 2:

Input: digits = ""
Output: []
Example 3:

Input: digits = "2"
Output: ["a","b","c"] */

/**
 * @param {string} digits
 * @return {string[]}
 */
const letterMap = {
  2: 'abc',
  3: 'def',
  4: 'ghi',
  5: 'jkl',
  6: 'mno',
  7: 'pqrs',
  8: 'tuv',
  9: 'wxyz',
}
var letterCombinations = function(digits) {
  if (!digits.length) return [];
  const letters = []
  function backtracker(curDigit = 0, combo = "") {
    if (curDigit >= digits.length) {
      letters.push(combo);
      return;
    }
    for (let i = 0; i < letterMap[digits[curDigit]].length; i++) {
      const letter = letterMap[digits[curDigit]][i];
      combo += letter;      
      backtracker(curDigit + 1, combo);
      combo = combo.slice(0, combo.length - 1);
    }
  }
  backtracker();
  return letters;
};
