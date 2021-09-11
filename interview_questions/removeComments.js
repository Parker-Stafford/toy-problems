/*
 "Given a C++ program, remove comments from it. The program source is an array where source[i] is the i-th line of the source code. This represents the result of splitting the original source code string by the newline character \n."

input: array of source code
output: array with no comments

examples
['code', '// comment', '/* comment /*', 'code', 'code', '/*comment', 'comment', 'comment *']
['code', 'code', 'code']
// we iterate over array, look for // remove element of array. Look for /* remove until we find * . Look at the beginning and end of each element in the array

['code // comment', 'code', 'code /*', 'comment', 'comment/*c', 'code']
['code ', 'code', 'codec', 'code']

 */

var removeComments = function(source) {
  // iterate over the array
    // iterate over each string in the array
      // search for //
        // remove rest of string
      // search for /* if we find it,
        // set block comment boolean to true
        // set block comment start index to our index in the array
      // if we're in a block comment
        //continue searching for */
          // grab everything past it

  return source
}