/*
    PROBLEM:

    Write Number in Expanded Form
    You will be given a number and you will need to return it as a string in Expanded Form. For example:

    expandedForm(12); // Should return '10 + 2'
    expandedForm(42); // Should return '40 + 2'
    expandedForm(70304); // Should return '70000 + 300 + 4'
    NOTE: All numbers will be whole numbers greater than 0.

    If you liked this kata, check out part 2!!

*/

// SOLUTION
// TODO: Do this mathematically.
function expandedForm(num) {
    // convert the number into an array of strings and reverse it for the upcoming loop.
    var stringArray = num.toString().split('').reverse();
    let finalStringList = [];
    // loop through each string digit
    for(let i = 0; i < stringArray.length ; i++) {
      // if the digit is not 0
      if(stringArray[i] !== "0") {
        // get its mathematical position and push it to the final string
        finalStringList.push(`${parseInt(stringArray[i] * Math.pow(10, i), 10)}`);
      }
    }
    // un-reverse the final string and then join with ' + ' for display.
    return finalStringList.reverse().join(" + ");
  }