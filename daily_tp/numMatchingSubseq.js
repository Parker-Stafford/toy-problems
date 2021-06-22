/* Given a string s and an array of strings words, return the number of words[i] that is a subsequence of s.

A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.

For example, "ace" is a subsequence of "abcde".
 

Example 1:

Input: s = "abcde", words = ["a","bb","acd","ace"]
Output: 3
Explanation: There are three strings in words that are a subsequence of s: "a", "acd", "ace".
Example 2:

Input: s = "dsahjpjauf", words = ["ahjpjau","ja","ahbwzgqnuk","tnmlanowax"]
Output: 2 */

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
// implement slow solution using trie
 var numMatchingSubseq = function(s, words) {
  let count = 0;
  let newTrie = buildTrie(words);
  function trieTraverser(curTrie, index) {
    if (curTrie['.'] && !curTrie.visited) {
        count += curTrie.count;
        curTrie.visited = true;
      }
    for (let i = index; i < s.length; i++) {
      const char = s[i];
      if (curTrie[char]) trieTraverser(curTrie[char], i + 1);
    }
    return;
  }
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (newTrie[char]) {
      trieTraverser(newTrie[char], i + 1);
    }
  }
  return count;
};

var buildTrie = function(words) {
  const trieObj = {};
  let continuous = true;
  // iterate over words;
  for (let word of words) {
    // make a new trie for each word
    let trie = trieObj;
    // iterate over letters
    for (let char of word) {
      // make a new object for each letter
      if (!trie[char]) {
          continuous = false;
        trie[char] = {};
      } else {
          continuous = true;
      }
      // reassign trie to be the new object
      trie = trie[char];
    }
    trie['.'] = true;
    trie.count = 1; 
    if (continuous) trie.count++;// indicates end of word
  }
  return trieObj;
};

