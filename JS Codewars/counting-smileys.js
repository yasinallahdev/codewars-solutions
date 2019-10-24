/*

    PROBLEM:

    Description:
    Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.
    Rules for a smiling face:
    -Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
    -A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
    -Every smiling face must have a smiling mouth that should be marked with either ) or D.
    No additional characters are allowed except for those mentioned.
    Valid smiley face examples:
    :) :D ;-D :~)
    Invalid smiley faces:
    ;( :> :} :]

    Example cases:

    countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
    countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
    countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;

    Note: In case of an empty array return 0. You will not be tested with invalid input (input will always be an array). Order of the face (eyes, nose, mouth) elements will always be the same
    Happy coding!

*/

// SOLUTION
//return the total number of smiling faces in the array
function countSmileys(arr) {
    if(arr.length === 0) {
      return 0;
    } else {
      let validSmileys = 0;
      const eyes = [':',';'];
      const noses = ['-','~'];
      const mouths = [')','D'];
      arr.forEach(el => {
        if(el.length === 2) {
         if(validFace(el.charAt(0),eyes) && validFace(el.charAt(1), mouths)) {
           validSmileys++;
         }
        } else if(el.length === 3) { 
          if(validFace(el.charAt(0), eyes) && validFace(el.charAt(1), noses) && validFace(el.charAt(2), mouths)) {
            validSmileys++
          }
        }
      });
      return validSmileys;
    }
}
  
function validFace(character, arrayFace) {
switch(character) {
    case arrayFace[0]:
    case arrayFace[1]:
    return true;
    default:
    return false;
}
}