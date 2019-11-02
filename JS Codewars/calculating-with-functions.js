/*

    PROBLEM:

    This time we want to write calculations using functions and get the results. Let's have a look at some examples:

    seven(times(five())); // must return 35
    four(plus(nine())); // must return 13
    eight(minus(three())); // must return 5
    six(dividedBy(two())); // must return 3
    Requirements:

    There must be a function for each number from 0 ("zero") to 9 ("nine")
    There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby and Python)
    Each calculation consist of exactly one operation and two numbers
    The most outer function represents the left operand, the most inner function represents the right operand
    Divison should be integer division. For example, this should return 2, not 2.666666...:
    eight(dividedBy(three()));

*/

// Class for Operation Data
class OperationData {
    constructor(number) {
      this.operation = "";
      this.number = number;
    }
    performOperation(number)  {
      switch(this.operation) {
        case "+":
          return number + this.number;
        case "-":
          return number - this.number;
        case "*":
          return number * this.number;
        case "/":
          return Math.floor(number / this.number);
      }
    }
  }
  
  // If there was no opdata, create it using the number. Otherwise, perform an operation using the number.
  function decideOperation(number, data) {
    if(data === undefined) {
      return new OperationData(number);
    } else {
      return data.performOperation(number);
    }
  }
  
  // Functions for 0-1 using decide operation
  const zero = (data) => {return decideOperation(0,data);}
  const one = (data) => {return decideOperation(1,data);}
  const two = (data) => {return decideOperation(2,data);}
  const three = (data) => {return decideOperation(3,data);}
  const four = (data) => {return decideOperation(4,data);}
  const five = (data) => {return decideOperation(5,data);}
  const six = (data) => {return decideOperation(6,data);}
  const seven = (data) => {return decideOperation(7,data);}
  const eight = (data) => {return decideOperation(8,data);}
  const nine = (data) => {return decideOperation(9,data);}
  
  // Functions for operations
  const plus = (opData) =>  {
    opData.operation = "+";
    return opData;
  }
  const minus = (opData) =>  {
    opData.operation = "-";
    return opData;
  }
  const times = (opData) =>  {
    opData.operation = "*";
    return opData;
  }
  const dividedBy = (opData) =>  {
    opData.operation = "/";
    return opData;
  }
  
