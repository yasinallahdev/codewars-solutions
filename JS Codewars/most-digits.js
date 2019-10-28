/*
    PROBLEM:

    Find the number with the most digits.

    If two numbers in the argument array have the same number of digits, return the first one in the array.

*/

// SOLUTION
function findLongest(array){
    // array to store digit count and number with most digits
    let mostDigitData = [0, 0];
    // loop through the numbers
    array.forEach(el => {
      // A number's digits is counted by taking its base 10 log and then adding 1.
      let currentDigits = Math.floor(Math.log10(el) + 1);
      // if the current number has more digits that the last number with the most digits
      if(currentDigits > mostDigitData[1]) {
        // update which number has the most digits
        mostDigitData[0] = el;
        mostDigitData[1] = currentDigits;
      }
    });
    // return
    return mostDigitData[0];
  }
