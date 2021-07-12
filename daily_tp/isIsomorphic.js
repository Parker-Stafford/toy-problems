/* Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

Example 1:
Input: s = "egg", t = "add"
Output: true
compare lengths
{
  e: [0]
  g: [1,2]
}
{
  0: a,
  1: d,
  2: d
}

Example 2:
Input: s = "foo", t = "bar"
Output: false
{
  b: 0
  a: 1
  r: 2
}
{
  f: 
  o:
}
{
  0: f,
  1: o,
  2: o
}

Example 3:
Input: s = "paper", t = "title"
Output: true
{
  p:[0,2],
  a: [1],
  e: [3],
  r: [4]
}

Constraints:
1 <= s.length <= 5 * 104
t.length == s.length
s and t consist of any valid ascii character. */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var isIsomorphic = function(s, t) {
  // compare lengths
  if (s.length !== t.length) return false;
  // build index map from string s
  const sMap = {};
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (!sMap[char]) {
      sMap[char] = [i]
      continue;
    } 
    sMap[char].push(i);
  }
  // make already used map for t string letters, so we don't map the same letter from t to different letters from s
  const alreadyUsed = {}
  // iterate through map testing whether or not each letter with more than one location matches string t
  for (const char in sMap) {
    const indices = sMap[char];
    const tChar = t[indices[0]];
    if (alreadyUsed[tChar]) return false;
    alreadyUsed[tChar] = true;
    if (indices.length === 1) continue;
    for (const index of indices) {
      // if string t doesn't have duplicates in teh same spot return false;
      if (t[index] !== tChar) return false;
    }
  }
  // return true
  return true
};