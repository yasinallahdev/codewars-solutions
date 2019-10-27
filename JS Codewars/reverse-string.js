/*

    PROBLEM:
    Complete the solution so that it reverses the string value passed into it.

    solution('world'); // returns 'dlrow'
    FUNDAMENTALS - STRINGS

*/

// SOLUTION
function solution(str){
    let reverseString = "";
    for(let i = str.length; i > 0; i--) {
      reverseString += str.charAt(i-1);
    }
    return reverseString;
}