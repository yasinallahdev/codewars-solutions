/*

    PROBLEM:

    ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

    If the function is passed a valid PIN string, return true, else return false.

    eg:

    validatePIN("1234") === true
    validatePIN("12345") === false
    validatePIN("a234") === false

*/

// SOLUTION
function validatePIN (pin) {
    // if the pin length is not 4 or 6, it's not valid
    if(pin.length === 4 || pin.length === 6) {
      let isDigit;
      // check every character in the string
      for(let i = 0; i < pin.length; i++) {
        // if the character is not a digit, it's not valid
        if(!pin.charAt(i).match(/[0-9]/)) {
          return false;
        }
      }
      // if the checks all come positive, then we've got a valid pin
      return true;
    } else {
      return false;
    }
  }
