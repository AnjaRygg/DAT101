"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Loop one: Counting from 1 to 10 */
printOut(Array.from({ length: 10 }, (_, i) => i + 1).join(' ')); // Counting from 1 to 10
printOut(Array.from({ length: 10 }, (_, i) => 10 - i).join(' ')); // Counting from 10 to 1

printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Declare a variable and assign it a value!*/
let number = 45;
// Guessing number
let guessNumber;
while (guessNumber !== number) {
    guessNumber = Math.floor(Math.random() * 60) + 1; // Generating a random number between 1 and 60
}
printOut("Guess number is: " + guessNumber);
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Guessing game 2*/
  let guessingNumber = 45;
  let guessingNumber2; 
  let attempts = 0;
  const start = Date.now();
  while(number !== guessingNumber) {
    let guessingNumber = Math.floor(Math.random() * 1000000) + 1; // Random number from 1 to 60
    printOut(guessingNumber);
    attempts++;
  }
  const end = Date.now();
  const timeTaken = end - start;

  printOut("Guessed number is: " + guessingNumber);
  printOut("Attempts: " + attempts);
  printOut("Time taken: " + timeTaken + " milliseconds");
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* prime number finder*/
 const prime = [];
 for (let number = 2; number < 200; number++) {
     let isPrime = true;
     let divisor = 2;
 while (divisor < number) {
    if (number % divisor === 0) {
        isPrime = false;
        break;
         }
         divisor++;
     }
     if (isPrime) {
         prime.push(number);
     }
 }
 printOut("Prime numbers: " + prime.join(","));
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Nested loops and patterns */
 for (let row = 1; row <= 7; row++) {
    let rowText = ""; // tom tekst

    for (let col = 1; col <= 9; col++) {
        rowText += "K" + col + "R" + row + " "; // Putting "KxRy" together
    }

    printOut(rowText.trim()); 
}
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Grade simulator */ 
function getGrade() {
    let grade = Math.floor(Math.random() * 236) + 1; // Random number from 1 to 236
    let percentage = (grade / 236) * 100;

    if (percentage >= 89) return "A";
    else if (percentage >= 77) return "B";
    else if (percentage >= 65) return "C";
    else if (percentage >= 53) return "D";
    else if (percentage >= 41) return "E";
    else return "F";
  }

  // Generating 5 grades
  let grade1 = getGrade();
  let grade2 = getGrade();
  let grade3 = getGrade();
  let grade4 = getGrade();
  let grade5 = getGrade();

  // Print grades before sorting
  printOut("Grades before sorting:");
  printOut(grade1, grade2, grade3, grade4, grade5);

  // Sorting in descending order using nested loops
  function sortGrades() {
    // Example of swapping variables if needed
    // Repeat for as many steps as required to ensure sorting without arrays
  }
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Simulate 6 dice and print out how many "throws" it takes to get: */
function diceRolling() {
    const diceNumber = [];
    while (diceNumber.length < 6) {
        const newNumber = Math.floor(Math.random() * 6) + 1;
        if (!diceNumber.includes(newNumber)) {
            diceNumber.push(newNumber); // legger til nytt tall til dice
        }
    }
    return diceNumber;
}
printOut(diceRolling().toString());
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);
