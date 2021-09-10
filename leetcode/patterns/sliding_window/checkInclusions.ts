/* Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.
In other words, return true if one of s1's permutations is the substring of s2.

Example 1:
Input: s1 = "ab", s2 = "eidbaooo"
Output: true
Explanation: s2 contains one permutation of s1 ("ba").
count
copy of s1 ab 00
eidbkabooo
     se
Example 2:
Input: s1 = "ab", s2 = "eidboaoo"
Output: false
 
Constraints:
1 <= s1.length, s2.length <= 104
s1 and s2 consist of lowercase English letters. */

function checkInclusion(s1: string, s2: string): boolean {
  if (s2.length < s1.length) return false;
  // make a map of s1 and window
  const s1Map = new Array(26).fill(0);
  const sw = new Array(26).fill(0);
  for (let i = 0; i < s1.length; i++) {
    s1Map[s1.charCodeAt(i) - 97]++;
    sw[s2.charCodeAt(i) - 97]++;
  }
  let start = 0;
  let end = s1.length - 1;
  // iterate over s2 updating the window at each step
  while (end < s2.length) {
    // if window and s1 map are identical return true
    end++;
    if (s1Map.join('') === sw.join('')) return true;
    sw[s2.charCodeAt(start) - 97]--;
    sw[s2.charCodeAt(end) - 97]++; 
    start++;
  }
  // if we reach the end return false
  return false;
}









