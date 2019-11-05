/*

    PROBLEM:

*/

// SOLUTION
function generateHashtag (str) {
    // if the string is empty or only whitepsace, return false
    if(!str || !str.replace(/\s/g, '').length) {
      return false;
    }
    // split the words
    let words = str.split(' ');
    for(let i = 0; i < words.length; i++) {
      // capitalize the first letter of each word
      words[i] = words[i].replace(/^\w/, c => c.toUpperCase());;
    }
    // create the hashtag by joining the words with a # in front
    let finalWord = `#${words.join('')}`;
    // if the result is more than 140 characters, return false
    if(finalWord.length > 140) {
      return false;
    } else {
      // otherwise return the hashtag
      return finalWord;
    }
  }
