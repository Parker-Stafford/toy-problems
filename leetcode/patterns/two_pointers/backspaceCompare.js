// Given two strings S and T, return if they are equal when both are typed into empty text editors. # means a backspace character.

// Note that after backspacing an empty text, the text will continue empty.

// Example 1:

// Input: S = "ab#c", T = "ad#c"
// Output: true
// Explanation: Both S and T become "ac".
// Example 2:

// Input: S = "ab##", T = "c#d#"
// Output: true
// Explanation: Both S and T become "".
// Example 3:

// Input: S = "a##c", T = "#a#c"
// Output: true
// Explanation: Both S and T become "c".
// Example 4:

// Input: S = "a#c", T = "b"
// Output: false
// Explanation: S becomes "c" while T becomes "b".

/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
  let sString = [];
  let tString = [];
  let i = 0;
  while (i < S.length || i < T.length) {
    if (S[i] === '#' && sString.length) {
      sString.pop();
    } else if (S[i]) {
      sString.push(S[i]);
    }
    if (T[i] === '#' && tString.length) {
      tString.pop();
    } else if (T[i]) {
      tString.push(T[i]);
    }
    i++;
  }
  return sString.join('') === tString.join('');
};

var backspaceCompare = function(S, T) {
  function build(string) {
    let result = [];
    for (let i = 0; i < string.length; i++) {
      if (string[i] === '#') {
        result.pop();
      } else {
        result.push(string[i]);
      }
    }
    return result.join('');
  }
  return (build(S) === build(T));
}

var backspaceCompare = function(S, T) {
  function build(string) {
    let result = '';
    let backspaces = 0;
    for (let i = string.length - 1; i >= 0; i--) {
      if (string[i] === '#') {
        backspaces++;
      } else if (backspaces) {
        backspaces--;
      } else {
        result = string[i] + result;
      }
    }
    return result;
  }
  return (build(S) === build(T));
}