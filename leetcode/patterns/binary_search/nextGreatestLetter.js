// Given a list of sorted characters letters containing only lowercase letters, and given a target letter target, find the smallest element in the list that is larger than the given target.

// Letters also wrap around. For example, if the target is target = 'z' and letters = ['a', 'b'], the answer is 'a'.

// Examples:
// Input:
// letters = ["c", "f", "j"]
// target = "a"
// Output: "c"

// Input:
// letters = ["c", "f", "j"]
// target = "c"
// Output: "f"

// Input:
// var letters = ["c", "f", "j"]
// var target = "d"
// Output: "f"

// Input:
// var letters = ["c", "f", "j"]
// var target = "g"
// Output: "j"

// Input:
// var letters = ["c", "f", "j"]
// var target = "j"
// Output: "c"

// Input:
// var letters = ["c", "f", "j"]
// var target = "k"
// Output: "c"

/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
 var nextGreatestLetter = function(letters, target) {
  let start = 0;
  let end = letters.length - 1;
  let half = Math.floor((start + end) / 2);
  while(start < end) {
    if (letters[half] === target) {
      if (letters[half + 1] !== target) {
        return letters[half + 1] ? letters[half + 1] : letters[0];
      }
      half++;
      continue;
    }
    if (letters[half] < target) {
      if (target < letters[half + 1]) {
        return letters[half + 1];
      }
      start = half + 1;
    } else {
      if (target >= letters[half -1]) {
        return letters[half];
      }
      end = half - 1;
    }
    half = Math.floor((start + end) / 2);
  }
  return letters[0];
};
