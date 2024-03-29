/*

    PROBLEM:

    Complete the square sum function so that it squares each number passed into it and then sums the results together.

    For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

*/

// SOLUTION
function squareSum(numbers){
    let result = 0;
    // for every number in the array
    numbers.forEach(currentNumber => {
        // add its square to the result
        result += currentNumber * currentNumber;
    });
    // return result
    return result;
}
