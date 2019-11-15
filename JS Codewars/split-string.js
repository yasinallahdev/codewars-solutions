/*

    Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

    Examples:

    solution('abc') // should return ['ab', 'c_']
    solution('abcdef') // should return ['ab', 'cd', 'ef']

*/

function solution(str){
    // split a string into pairs of 2 characters
    let splitString = str.match(/.{1,2}/g);
    // if the string's length is odd, add an underscore to the end
    if(str.length % 2 !== 0) {
        splitString[splitString.length - 1] += "_";
    }
    // return
    return splitString;
}