"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Print out todays date */
function printTodayDate() {
    const today = new Date();
  
    // Use 'no-NB' for Norwegian formatting
    const todayDate = today.toLocaleDateString("no-NB", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  
    printOut(todayDate.toString());
  }
  
  printTodayDate(); // run the function
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Enhanced date function and countdown */

const today = new Date();

function daysUntil(targetDate) {
  const target = new Date(targetDate); // Set the target date

  // Calculate the difference in milliseconds
  const difference = target - today;

  // Convert milliseconds to days
  const daysLeft = Math.ceil(difference / (1000 * 60 * 60 * 24));

  return daysLeft;
}

function displayDateAndCountdown() {
  const todayFormatted = today.toLocaleDateString("no-NB", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const daysLeft = daysUntil("May 14, 2025"); // Target date

  printOut("Todays date:" + todayFormatted);
  printOut("Number of days until lansing: " + daysLeft);
}
displayDateAndCountdown();
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Calculate rectangle */
function calculateCircle(radius) {
    const diameter = 2 * radius;
    const circumference = 2 * Math.PI * radius;
    const area = Math.PI * radius * radius;
  
    printOut(`Diameter: ${diameter}`);
    printOut(`Omkrets: ${circumference.toFixed(2)}`); // tofixed gjør at man får 2 desimaler
    printOut(`Areal: ${area.toFixed(2)}`);
  }
  
  calculateCircle(5); // Tester ned radius 5
  printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Calculate rectangle */
function calculateRectangle(dimensions) {
    const { width, height } = dimensions; 

    const circumference = 2 * (width + height);
    const area = width * height;

    printOut("Circumference:" + circumference);
    printOut("Areal:" + area);
}
calculateRectangle({ width: 5, height: 10 }); // Testing with width 5 and height 10
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Conversion between Celsius, Fahrenheit and Kelvin */
function convertTemperature(value, type) {
    let celsius;
    let fahrenheit; 
    let kelvin;

    if (type === 'C') {
        celsius = value;
        fahrenheit = (value * 9/5) + 32;
        kelvin = value + 273.15;
    } else if (type === 'F') {
        celsius = (value - 32) * 5/9;
        fahrenheit = value;
        kelvin = celsius + 273.15;
    } else if (type === 'K') {
        kelvin = value;
        celsius = value - 273.15;
        fahrenheit = (celsius * 9/5) + 32;
    } else {
        return;
    }
    printOut('Celsius: ' + Math.round(celsius));
    printOut('Fahrenheit: ' + Math.round(fahrenheit));
    printOut('Kelvin: ' + Math.round(kelvin));
}
convertTemperature(25, 'C'); // Testing with 25°C
convertTemperature(77, 'F'); // Testing with 77°F
convertTemperature(300, 'K'); // Testing with 300K
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* VAT calculation */
function calculateNetPrice(gross, vatGroup) {
    const vatRates = {
      // Values from the assignment
        normal: 25,
        food: 15,
        hotel: 10,
        transport: 10,
        cinema: 10
    };
    const vat = vatRates[vatGroup.toLowerCase()];
    if (vat === undefined) {
        return "Unknown VAT group!";
    } else {
        return (100 * gross) / (vat + 100);
    }
}
printOut(calculateNetPrice(1000, "normal").toString());  
printOut(calculateNetPrice(1000, "goblins").toString()); 

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Speed = distance / time */
function calculateMissingValue(speed = null, distance = null, time = null) {
    if (speed === null && distance !== null && time !== null) {
        return distance / time;
    } else if (distance === null && speed !== null && time !== null) {
        return speed * time;
    } else if (time === null && speed !== null && distance !== null) {
        return distance / speed;
    } else {
        return NaN;  // Return NaN if more than one parameter is missing
    }
}
// Example usage:
printOut(calculateMissingValue(60, null, 2).toString());  // Should return distance
printOut(calculateMissingValue(null, 120, 2).toString());  // Should return speed
printOut(calculateMissingValue(60, 120, null).toString());  // Should return time

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* String modification */
function modifyString(text, maxSize, char, insertAfter) {
    if (text.length < maxSize) {
        if (insertAfter) {
            text += char;
        } else {
            text = char + text;
        }
    }
    return text;
}
printOut(modifyString("Hello" +  10 +  "" +  true));  // Adds '' after the text
printOut(modifyString("Hello" + 10 + "" + false)); // Adds '' before the text
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Testing expression */
function checkMathExpressions() {
    let start = 1;
    
    for (let line = 1; line <= 200; line++) {
        // Sum of the current line (left side)
        let leftSideSum = 0;
        for (let i = 0; i < line; i++) {
            leftSideSum += start + i;
        }

        // Sum of the next set of numbers (right side)
        let rightSideSum = 0;
        for (let i = 0; i <= line; i++) {
            rightSideSum += start + line + i;
        }
        // Move to the next sequence start point
        start += line + line + 1;
    }
    printOut("Maths fun!");
}
// Run the function
checkMathExpressions();
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Recursive functions */
function factorial(n) {
    // || means or
        if (n === 0 || n === 1) {
            return 1;
        } else {
            return n * factorial(n - 1); // Using the function inside the function
        }
    }
    printOut(factorial(5).toString());  
    printOut(factorial(6).toString());  
printOut(newLine);
