/* Given a string s, partition s such that every substring of the partition is a palindrome. Return all possible palindrome partitioning of s.

A palindrome string is a string that reads the same backward as forward.

 

Example 1:

Input: s = "aab"
Output: [["a","a","b"],["aa","b"]]
Example 2:

Input: s = "a"
Output: [["a"]]
 

Constraints:

1 <= s.length <= 16
s contains only lowercase English letters. */

/**
 * @param {string} s
 * @return {string[][]}
 */
// brute force backtracking
 var partition = function(s) {
  const partitions = [];
  function backtracker(curIndex, parts) {
    if (curIndex >= s.length) {
      if (s.length === parts.length) {
        partitions.push([...parts]);
        return;
      } else {
        for (let i = 0; i < parts.length; i++) {
          const word = parts[i];
          if (!isP(word)) return;
        }
        partitions.push([...parts]);
        return
      }
    }
    parts.push(s[curIndex]);
    backtracker(curIndex + 1, parts);
    parts.pop();
    if (parts.length) {
      parts[parts.length - 1] += s[curIndex];
      backtracker(curIndex + 1, parts);
      parts[parts.length - 1] = parts[parts.length - 1].slice(0, parts[parts.length - 1].length - 1);
    }
  }
  backtracker(0, []);
  return partitions
};


function isP(string) {
  if (string.length === 1) return true;
  const len = string.length;
  const half = Math.ceil(len / 2);
  const even = len % 2 === 0
  let first = even ? string.slice(0, half) : string.slice(0, half - 1);
  let second = string.slice(half);
  return first === second.split('').reduce((reversed, char) => (char + reversed), '');
}






