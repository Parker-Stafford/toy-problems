/* You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.
Return the length of the longest substring containing the same letter you can get after performing the above operations.

Example 1:
Input: s = "ABAB", k = 2
Output: 4
Explanation: Replace the two 'A's with two 'B's or vice versa.

 ABAB 
 i  j 
// if k is greater than length of s retuurn length of s
// start iterating through string first element is ocmparitor
// when you find a character that doesn't match current character, change it, until ck = 0
// compare max when k = 0 and next is not equal to current comparitor


Example 2:
Input: s = "AABABBA", k = 1
Output: 4
Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
The substring "BBBB" has the longest repeating letters, which is 4.
 AABABBA
 i   j   
 
Constraints:
1 <= s.length <= 105
s consists of only uppercase English letters.
0 <= k <= s.length */

// sliding window approach
function characterReplacement(s: string, k: number): number {
  let left = 0, right = 0;
  let maxChars = 0;
  let visited = {};

  while (right < s.length) {
    let char = s[right];
    // increment the count of the current character
    visited[char] = visited[char] ? visited[char] + 1 : 1;
    // set the max char count to itself or the current characters count if incrementing made it larger
    maxChars = Math.max(maxChars, visited[char]);

    // if we have made the window too big, window is right - left + 1. subtracting out all of the chars that we don't have to change (maxchars). If the remaining chars are more than k, slide the window over and decrement the left char by 1
    if (right - left + 1 - maxChars > k) {
      visited[s[left]]--;
      left++;
    }
    right++;
  }
  return right - left;
 };