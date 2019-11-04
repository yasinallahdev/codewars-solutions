/*

    PROBLEM:

    Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased.

    The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

    Examples:
    toWeirdCase( "String" );//=> returns "StRiNg"
    toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"

*/

function toWeirdCase(string) {
    // split the string into separate words
    let words = string.split(' ');
    let convertedWords = [];
    // for every word
    words.forEach( currentWord => {
      let updatedWord = "";
      // loop through each character and make even-numbered characters uppercase, and odd-numbered
      // characters lowercase, with a 0-based index.
      for(let i = 0; i < currentWord.length; i++) {
        let currentChar = currentWord.charAt(i);
        updatedWord += i % 2 === 0 ? currentChar.toUpperCase() : currentChar.toLowerCase();
      }
      // add it to a converted words array
      convertedWords.push(updatedWord);
    });
    // combine the words back into a string and return
    return convertedWords.join(' ');
}