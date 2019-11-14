/*

    PROBLEM:

    You're going on a trip with some students and it's up to you to keep track of how much money each Student has. A student is defined like this:

    class Student {
    constructor(name, fives, tens, twenties) {
        this.name = name;
        this.fives = fives;
        this.tens = tens;
        this.twenties = twenties;
    }
    }
    As you can tell, each Student has some fives, tens, and twenties. Your job is to return the name of the student with the most money. If every student has the same amount, then return "all".

    Notes:

    Each student will have a unique name
    There will always be a clear winner: either one person has the most, or everyone has the same amount
    If there is only one student, then that student has the most money

*/

// SOLUTION
function mostMoney(students) {
    for(let i = 0; i < students.length; i++) {
      calculateMoney(students[i]);
    }
    let studentWithMostMoney = students[0]
    let currentMostMoney = students[0].totalMoney;
    if(students.length !== 1) {
      if(checkIfAllStudentsHaveEqualMoney(students)) {
        return 'all';
      }
      for(let i = 0; i < students.length; i++) {
        let currentMoney = students[i].totalMoney;
        console.log(`${students[i].name}'s money ${currentMoney}`);
        console.log(`${studentWithMostMoney.name}'s money ${currentMostMoney}`);
        if(currentMostMoney < currentMoney) {
          console.log(`${students[i].name} has more money than ${studentWithMostMoney.name}.`);
          console.log(`Now ${students[i].name} is the wealthiest student.`);
          currentMostMoney = currentMoney;
          studentWithMostMoney = students[i];
        }
      }
    }
    return studentWithMostMoney.name;
}
  
function checkIfAllStudentsHaveEqualMoney(students) {
    let firstStudentMoney = students[0].totalMoney;
    for(let i = 1; i < students.length; i++) {
      console.log(firstStudentMoney);
      console.log(students[i].totalMoney);
      console.log(typeof firstStudentMoney);
      console.log(typeof students[i].totalMoney);
      if(students[i].totalMoney !== students[0].totalMoney) {
        return false;
      }
    }
    return true;
}
  
function calculateMoney(student, showTotal = false) {
    const studentMoney = (student.fives * 5) + (student.tens * 10) + (student.twenties * 20);
    student.totalMoney = studentMoney;
}
  
