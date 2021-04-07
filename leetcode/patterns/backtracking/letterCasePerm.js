// Given a string S, we can transform every letter individually to be lowercase or uppercase to create another string.

// Return a list of all possible strings we could create. You can return the output in any order.



// Example 1:

// Input: S = "a1b2"
// Output: ["a1b2","a1B2","A1b2","A1B2"]
// Example 2:

// Input: S = "3z4"
// Output: ["3z4","3Z4"]
// Example 3:

// Input: S = "12345"
// Output: ["12345"]
// Example 4:

// Input: S = "0"
// Output: ["0"]

/**
 * @param {string} S
 * @return {string[]}
 */
 var letterCasePermutation = function(S) {
  const list = [];
  S = S.split('');
  function backtracker(index) {
    // push completed strings to list
    if (index === S.length) {
      list.push(S.join(''));
      return;
    }
    if (S[index] >= '0' && S[index] <= '9') {
      backtracker(index + 1);
    } else {
      // turn current character lowercase
      S[index] = S[index].toLowerCase();
      backtracker(index + 1);
      // turn current character uppercase
      S[index] = S[index].toUpperCase();
      backtracker(index + 1);

    }
  }
  backtracker(0)
  return list;
};

