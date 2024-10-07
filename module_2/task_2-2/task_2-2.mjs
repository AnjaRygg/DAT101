"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!
Calculate 2 + 3 * 2 - 4 * 6 = -34*/

export const x = 2 + 3 * (2 - 4) * 6;
printOut(x.toString());
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
/* Convert 25 metres and 34 centimeters to inches. An inch is 25.4 millimeters/inch */

const metres = 25;
const cm = 34;

let totalCm = (metres * 100) + cm;
const inches = totalCm/2.54;
const shortInches = inches.toFixed(1);

printOut("25 metres + 34 cm = " + shortInches + "inches");


printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
/* Convert 3 days, 12 hours, 14 minutes and 45 seconds to minutes */
const secondsInMinute = 60;
const minutesInHour = 60;
const hoursInDay = 24;
const part3_Answer = (3 * hoursInDay * minutesInHour) + (12 * minutesInHour) + 14 + (45 / secondsInMinute);

printOut("part3_Answer = " + part3_Answer.toString());
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!
Convert 6.322.52 minutes to days, hours, minutes and seconds*/

const numberOfMinutes = 6322.52;
let part4_Calc = numberOfMinutes / (60 * 24)
const part4_Days = Math.floor(part4_Calc);
printOut("Days = " + part4_Days);

part4_Calc = part4_Calc - part4_Days
part4_Calc = part4_Calc * hoursInDay;
const part4_Hours = Math.floor(part4_Calc);
printOut("Hours = " + part4_Hours);

part4_Calc = part4_Calc - part4_Hours;
part4_Calc = part4_Calc * minutesInHour;
const part4_Minutes = Math.floor(part4_Calc);
printOut("Minutes = " + part4_Minutes);

part4_Calc = part4_Calc - part4_Minutes;
part4_Calc = part4_Calc * secondsInMinute;
const part4_Seconds = Math.floor(part4_Calc);
printOut("Seconds = " + part4_Seconds);
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!
Convert 54 dollars to norwegian kroner, and print the price for both:
NOK - USD and USD - NOK
Use 76 NOK = 8.6 USD as the exchange rate.
The answer must be whole "Kroner" and whole "dollars"*/

const NOK = 76 / 8.6;
let amountUSD = 54;
const amountNOK = Math.round(amountUSD * NOK); 
const USD = 8.6 / 76;
printOut( amountUSD + " dollars is " + amountNOK + " kroner");
amountUSD = Math.round(amountNOK * USD);
printOut(amountNOK + " kroner is " + amountUSD + " dollars");

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let sentence = "There is much between heaven and earth that we do not understand";
printOut(sentence.length + " numbers of characters");
printOut(sentence.charAt(19) + " is the character at position 19");

printOut("The characters at position number 35 and 8 characters forward are  " + sentence.charAt(35) + sentence.charAt(36) + sentence.charAt(37) + sentence.charAt(38) + sentence.charAt(39) + sentence.charAt(40) + sentence.charAt(41) + sentence.charAt(42) + sentence.charAt(43));
printOut(sentence.indexOf("earth") + " is the index of earth starts in the text")
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!
Is 5 greater than 3
Is 7 greater than or equal to 7
Is "a" greater than "b"
Is "1" less than "a" 
Is "2500" less than "abcd"
"arne" is not equal to "thomas"
(2 equals 5) is this statement true
("abcd" is greater than "bcd") is this statement false
*/
const a = 5 > 3;
printOut(a + "");

const b = 7 >= 7;
printOut(b + "");

const aGreaterB = "a" > "b";
printOut(aGreaterB +"");

const less = "1" < "a";
printOut(less + "");

const lessNumber = "2500" < "abcd";
printOut(lessNumber + "");

const name1 = "arne";
const name2 = "thomas";
if(name1 === name2) {
    printOut(true +""); // prints true if names are equal
} else {
    printOut(false +""); // prints false if names are not equal
}

const num1 = 2 === 5;
printOut(num1 +"");

const greater = "abcd" > "bcd";
printOut(greater +"");
printOut(newLine);


printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!
Convert and print the following expressions:
From text "254" to a number
From text "57.23" to a number
From text "25 kroner" to a number*/

const number1 = Number("254");
const number2 = parseFloat("57.23");
const number3 = parseInt("25 kroner");
printOut(number1.toString());
printOut(number2.toString());
printOut(number3.toString());

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!
Create a variable "r" and randomly generate a number from 1 to 360 (1 >= r <= 360)*/

let r = Math.floor(Math.random() * 360) + 1;
printOut("Random number = "+ r.toString());

printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!
Use modulus (%) to calculate how many weeks and days are in 131 days*/

let totalDays = 131;
let weeks = Math.floor(totalDays / 7);
let days = totalDays % 7;
printOut(weeks.toString() + " weeks");
printOut(days.toString() + " days");

printOut(newLine);