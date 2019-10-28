/*
    PROBLEM:

    Find the number with the most digits.

    If two numbers in the argument array have the same number of digits, return the first one in the array.
    
*/

// SOLUTION
function findLongest(array){
  // code here
  let mostDigitData = [0, 0];
  array.forEach(el => {
    let currentDigits = Math.floor(Math.log10(el) + 1);
    if(currentDigits > mostDigitData[1]) {
      mostDigitData[0] = el;
      mostDigitData[1] = currentDigits;
    }
  });
  return mostDigitData[0];
}