/*

    PROBLEM:

    Description:

    We want to generate a function that computes the series starting from 0 and ending until the given number following the sequence:

    0 1 3 6 10 15 21 28 36 45 55 ....

    which is created by

    0, 0+1, 0+1+2, 0+1+2+3, 0+1+2+3+4, 0+1+2+3+4+5, 0+1+2+3+4+5+6, 0+1+2+3+4+5+6+7 etc..

    Input:

    LastNumber

    Output:

    series and result

    Example:
    Input:

    > 6
    Output:

    0+1+2+3+4+5+6 = 21

    Input:

    > -15
    Output:

    -15<0

    Input:

    > 0
    Output:

    0=0

*/

// SOLUTION

// using a class as the example did the same
class SequenceSum {

    // using a static function so a new object does not need to be created
    static showSequence(number) {

      // create empty string
      let sequenceString = "";
      
      // if the number is 0 or negative, display a 'clamped' string
      if(number === 0) {
        sequenceString = "0=0";
      } else if (number < 0) {
        sequenceString = `${number}<0`;
      } else {
      
        // otherwise, generate the sequence

        let sequenceSum = 0;
        
        // loop through all numbers
        for(let i = 0; i <= number; i++) {
          // if there will be further remaining numbers, do not add the final '+' sign
          sequenceString += (i === number)?(`${i}`):(`${i}+`);
          // add to the sum
          sequenceSum += i;
        }
        // add sum to sequence string
        sequenceString += ` = ${sequenceSum}`;
      }
      return sequenceString;
    }
  
  }