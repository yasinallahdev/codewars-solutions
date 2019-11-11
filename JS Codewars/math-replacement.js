/*

    PROBLEM:
    Oh no, our Math object was "accidently" reset. Can you re-implement some of those functions? We can assure, that only non-negative numbers are passed as arguments. So you don't have to consider things like undefined, null, NaN, negative numbers, strings and so on.

    Here is a list of functions, we need:

    Math.round()
    Math.ceil()
    Math.floor()

*/

// SOLUTION

Math.floor = function(number) {
    // getting a modulo of a number will return the fractional portion, which we subtract from the main number to floor it.
    return number - (number % 1);
};

Math.round = function(number) {
    number += 0.5;
    return number - (number % 1); // Flooring a number that has 0.5 added to it will give equivalent functionality to 'ciel' on it.
};

Math.ceil = function(number) {
    let fraction = (number % 1);
    // If there is no fraction, do nothing.
    // Otherwise, floor the value you get from fraction + 1.
    return (fraction > 0)?((number + 1) - fraction):(number - fraction);
};