"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1, 2, 3 ----------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Task 1, 2 and 3");
let wakeUpTime = 8;
if (wakeUpTime==7) {
  printOut("I can take the bus to school.");
}else if(wakeUpTime==8){
  printOut("I can take the train to school")
}else{
  printOut("Otherwise i have to take the car to school")
}
printOut(newLine);

printOut("--- Part 4, 5 --------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let integer = 5
if (integer > 0){ // Hvis tallet er større enn 0, så er det positivt
  printOut("Positive")
}else if(integer < 0){ // Hvis tallet er mindre enn 0, så er det negativt
  printOut("Negative")
}else{
  printOut("Zero")
}

printOut(newLine);

printOut("--- Part 6----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let imageSize = Math.floor(Math.random() * 8) + 1;
printOut("Image size" + imageSize + "MP");
const photoSize = 4;
const minimumSize = 4;
if (imageSize >= minimumSize){
  printOut("Thank you!")
}else {
  printOut("Image is too small");
}
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Image size" + imageSize + "MP");

const maxImageSize = 6;

if (photoSize >= minimumSize && photoSize <= maxImageSize){
  printOut("Thank you!")
}else if(photoSize >= maxImageSize){
  printOut("Image size is too big");
}else if(photoSize <= minimumSize){
  printOut("Image is too small");
}
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const monthList = ["January", "February", "Mars", "April", "Mai", "June", "July", "August", "September", "October", "November", "December"];
const noOfMonth = monthList.length;
const monthName = monthList[Math.floor(Math.random() * noOfMonth)];

if (monthName.includes("r")) {
  printOut("You must take vitamin D");
} else {
  printOut("You do not need to take vitamin D");
}
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");


const theMonthList = [
  "January", "February", "Mars", "April", "May",
  "Juni", "Juli", "August", "September", "October", "November", "December"
];

const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const monthOfNumber = theMonthList.length;
const nameOfTheMonth = theMonthList[Math.floor(Math.random() * monthOfNumber)];
const monthIndex = theMonthList.indexOf(nameOfTheMonth);
if (monthIndex !== -1) { 
  const days = daysInMonth[monthIndex];
  printOut("Number of days that is in " + nameOfTheMonth + ": " + days);
}
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const galleryMonths = [
  "January", "February", "Mars", "April", "May",
  "Juni", "Juli", "August", "September", "October", "November", "December"
];

const totalMonths = galleryMonths.length;
const selectedMonth = galleryMonths[Math.floor(Math.random() * totalMonths)];
if (selectedMonth === "March" || selectedMonth === "April" || selectedMonth === "May") {
  if (selectedMonth === "April") {
      printOut("The gallery is temporarily located in the building next door.");
  } else {
      printOut("The gallery is closed for refurbishment.");
  }
} else {
  printOut("The gallery is now open.");
}


printOut(newLine);
