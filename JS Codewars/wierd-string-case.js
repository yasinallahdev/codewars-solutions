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