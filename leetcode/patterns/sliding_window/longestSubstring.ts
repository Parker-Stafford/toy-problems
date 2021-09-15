/* Given a string s, find the length of the longest substring without repeating characters.

Example 1:
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
length  = l || i - l;
abcabcbb
    i    
 l
{
  a: f 
  b: 1
  c: 1
}
// set l to 0
// set length to 0
// set empty object to be characters
// iterate over string
  // check if character isn't in object
    // add it to object and continue;
  // move l right until the character isn't in object any more. as we move l right we set character in object to false
  // reset length
// return length
Example 2:
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

Example 4:
Input: s = ""
Output: 0 */
function lengthOfLongestSubstring(s: string): number {
  // set l to 0
  let l = 0;
  // set length to 0
  let length = 0;
  // set empty object to be characters
  const chars = {};
  // iterate over string
  for (let i = 0; i < s.length; i++) {
    // check if character isn't in object
    if (!chars[s[i]]) {
      // add it to object and continue;
      chars[s[i]] = true;
      // if we finish on a new character, check length one more time
      if (i === s.length - 1) length = Math.max(length, i + 1 - l)
      continue;
    }
    // reset length
    length = Math.max(length, i - l);
    // move l right until the character isn't in object any more. as we move l right we set character in object to false
    while (chars[s[i]]) {
      chars[s[l++]] = false;
    }
    chars[s[i]] = true;
  }
  // return length
  return length || s.length;
};




