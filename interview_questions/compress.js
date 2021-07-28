/* "Given an array of characters chars, compress it using the following algorithm: Begin with an empty string s. For each group of consecutive repeating characters in chars: If the group's length is 1, append the character to s. Otherwise, append the character followed by the group's length. The compressed string s should not be returned separately, but instead be stored in the input character array chars. Note that group lengths that are 10 or longer will be split into multiple characters in chars. After you are done modifying the input array, return the new length of the array." 
count = 4
char = b
startI = 2
I = 4
[a,2,b,4,c]
  iterate over array
    compare char to current character
    if they don't match
      count to string
        iterate over count and place in array
      splice from start i till length of count less than i
      subtract length of spliced segment from i
      reset count
      reset startI
      reset char


  i - 1 = count
[a,2,b,4,c]
5
a,a,a,4,b
starti=0
i=4
2
a,2,b
c,c,a,2,b,b


1234


[a,a,a,a,a,a,a,a,a,a,b,b]
i - 2
i - 1

[a,4,1,b,2]
4
*/

/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
  chars.sort((a, b) => (a - b));
  let count = 1;
  let compare = chars[0];
  let startI = 0;
  // iterate over array
  for (let i = 1; i < chars.length; i++) {
    const char = chars[i];
    // compare char to current character
    if (compare === char) {
      count++;
      continue;
    }
    if (count > 1){
      //   count to string
      count = count.toString();
      let countLen = count.length;
      //     iterate over count and place in array
      let j = i - 1;
      for (let k = countLen - 1; k >= 0; k--, j--) {
        const digit = count[k];
        chars[j] = digit;
      }
      //   splice from start i till length count less than i
      let removedLen = chars.splice(startI, (i - countLen - 1) - startI).length;
      //   subtract length of spliced segment from i
        i -= removedLen;
      //   reset count
    }
    count = 1;
    //   reset startI
    startI = i;
    //   reset char
    compare = char;
  }
  if (count > 1) {
    i = chars.length
    count = count.toString();
    let countLen = count.length;
    //     iterate over count and place in array
    let j = i - 1;
    for (let k = countLen - 1; k >= 0; k--, j--) {
      const digit = count[k];
      chars[j] = digit;
    }
  }
  return chars.length;
};

// instead of splicing the array, just reshuffel and return the length. moving all excess characters to the back
var compress = function(chars) {
  if (chars.length < 2) return chars.length;
  let charI = 0;
  let charCount = 1;
  let compare = chars[0];
  for (let i = 1; i < chars.length + 1; i++) {
    const char = chars[i];
    if (compare === char) {
      charCount++;
      continue;
    }
    chars[charI] = compare
    charI++;
    if (charCount > 1) {
      charCount = charCount.toString();
      for (const digit of charCount) {
        chars[charI] = digit;
        charI++;
      }
    }
    // shuffeling the character we just counted to be at the next available spot
    compare = char;
    charCount = 1; 
  }
  return charI;
}