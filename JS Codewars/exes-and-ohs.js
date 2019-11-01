/*

    SOLUTION:

    Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

    Examples input/output:

    XO("ooxx") => true
    XO("xooxx") => false
    XO("ooxXm") => true
    XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
    XO("zzoo") => false

*/

// SOLUTION
function XO(str) {
    // initialize x and o counts
    let xCount = 0, oCount = 0;
    for(let i = 0; i <= str.length; i++) {
      // using a regex, check if the current char is an x
      if(/[xX]/.exec(str.charAt(i))) {
        // increment if it is
        xCount++;
      // using a regex, check if the current char is an o
      } else if(/[oO]/.exec(str.charAt(i))) {
        // increment if it is
        oCount++;
      }
    }
    return (xCount === oCount);
}