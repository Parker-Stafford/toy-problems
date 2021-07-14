/* Given an input string s, reverse the order of the words.

A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

Return a string of the words in reverse order concatenated by a single space.

Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.

'my name is parker'
'parker is name my'




Using native javascript functionality
split the string on ' '
we reverse the resultant array
we iterate through resultant array remvoing empty string (extraneous spaces)
we join the array on ' '
 */
' this is    an interview  '
              s e
'interview an is this'

" asdasd df f"
var reverseWords = function(s) {
  // make an end pointer, a start pointer, and a boolean to tell whether or not we are in a word
  let endPointer, startPointer, hasEnd = false;
  // make an empty reversed string variable
  let reversed = '';
  // iterate from the back of the string
  for (let i = s.length; i >= 0; i--) {
    // when we find a letter (not space) we will set end to be that letters index + 1
    if (!hasEnd && s[i] !== ' ') {
      hasEnd = true;
      endPointer = i + 1;
    }
    // when we find the next space we will set start to be that spaces index + 1
    if (hasEnd && (s[i] === ' ' || !i)) {
      startPointer = (s[i] === ' ') ? i + 1 : i;
      hasEnd = false;
      // slice from start to end and add to return string
      if (reversed.length) {
        reversed += ` ${s.slice(startPointer, endPointer)}`;
        continue;
      }
      reversed += s.slice(startPointer, endPointer);
    }
  }
  // return reversed string
  return reversed;
}
