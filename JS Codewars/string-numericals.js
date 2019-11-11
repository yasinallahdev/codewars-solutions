/*

    PROBLEM:
    You are given an input string.

    For each symbol in the string if it's the first character occurence, replace it with a '1', else replace it with the amount of times you've already seen it...

    But will your code be performant enough?

    Examples:
    input   =  "Hello, World!"
    result  =  "1112111121311"

    input   =  "aaaaaaaaaaaa"
    result  =  "123456789101112"
    There might be some non-ascii characters in the string.

*/

// SOLUTION
function numericals(s){
    // track the number of times each letter appears
    let appearances = {};
    result = "";
    for(let i = 0; i < s.length; i++) {
      // get the current letter
      const letter = s.charAt(i);
      // update the appearance count
      if(!(letter in appearances)) {
        appearances[letter] = 1;
      } else {
        appearances[letter]++;
      }
      // add the number to the result string
      result += appearances[letter].toString();
    };
    return result;
}
