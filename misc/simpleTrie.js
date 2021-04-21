var buildTrie = function(words) {
  const trieObj = {};
  // iterate over words;
  for (let word of words) {
    // make a new trie for each word
    let trie = trieObj;
    // iterate over letters
    for (let char of word) {
      // make a new object for each letter
      if (!trie[char]) {
        trie[char] = {};
      }
      // reassign trie to be the new object
      trie = trie[char];
    }
    trie['.'] = true; // indicates end of word
  }
  return trieObj;
};
