// You are given a string s of even length. Split this string into two halves of equal lengths, and let a be the first half and b be the second half.

// Two strings are alike if they have the same number of vowels ('a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'). Notice that s contains uppercase and lowercase letters.

// Return true if a and b are alike. Otherwise, return false.



// Example 1:

// Input: s = "book"
// Output: true
// Explanation: a = "bo" and b = "ok". a has 1 vowel and b has 1 vowel. Therefore, they are alike.
// Example 2:

// Input: s = "textbook"
// Output: false
// Explanation: a = "text" and b = "book". a has 1 vowel whereas b has 2. Therefore, they are not alike.
// Notice that the vowel o is counted twice.
// Example 3:

// Input: s = "MerryChristmas"
// Output: false
// Example 4:

// Input: s = "AbCdEfGh"
// Output: true


// Constraints:

// 2 <= s.length <= 1000
// s.length is even.
// s consists of uppercase and lowercase letters.

/**
 * @param {string} s
 * @return {boolean}
 */
 var halvesAreAlike = function(s) {
  const vowels = {
    'a': true,
    'e': true,
    'i': true,
    'o': true,
    'u': true,
    'A': true,
    'E': true,
    'I': true,
    'O': true,
    'U': true,
  }
  const isEven = s.length % 2 === 0;
  const half = isEven ? s.length / 2 : Math.floor(s.length / 2);
  const first = s.slice(0, half);
  const second = isEven ? s.slice(half) : s.slice(half + 1);
  let firstCount = 0;
  let secondCount = 0;
  for (let i = 0; i < first.length; i++) {
    if (vowels[first[i]]) firstCount++;
    if (vowels[second[i]]) secondCount++;
  }
  return firstCount === secondCount
};