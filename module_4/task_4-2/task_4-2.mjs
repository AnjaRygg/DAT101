"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
printOut(array.toString());
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const joinArray = array.join(" * ");
printOut(joinArray.toString());
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const textInPart3 = "Hei på deg, hvordan har du det?";
const textArray = textInPart3.split(" ");

for (let j = 0; j < textArray.length; j++) {
  printOut("Word = " + textArray[j] + ": Index = " + j + ": Word Number = " + (j + 1));
}
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let nameArray = ["Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", "Astrid", "Bjørg", "Hilde", "Anna", "Solveig", "Marianne", "Randi", "Ida", "Nina", "Maria", "Elisabeth", "Kristin"];

function nameArrayRemover(array, name) {
  nameArray.splice(name.indexOf(name), 1);
  printOut("Checks if the name exists in the array: " + nameArray.includes(name));
}
nameArrayRemover(nameArray, "Anne");
printOut(nameArray);
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let boyNameArray = ["Jakob", "Lucas", "Emil", "Oskar", "Oliver", "William", "Filip", "Noah", "Elias", "Isak", "Henrik", "Aksel", "Kasper", "Mathias", "Jonas", "Tobias", "Liam", "Håkon", "Theodor", "Magnus"];
printOut(nameArray.concat(boyNameArray));
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

class TBook {
    constructor(aTitle, aAuthor, aISBN) {
      this.aTitle = aTitle;
      this.aAuthor = aAuthor;
      this.aISBN = aISBN;
    }
    toString() {
      return "Title: " + this.aTitle + " | Author: " + this.aAuthor + " | ISBN: " + this.aISBN;
    }
  }
  const TBook1 = new TBook("Shadow and Bone", "Leigh Bardugo", "9781510105249");
  const TBook2 = new TBook("The Fault in Our Stars", "John Green", "9780141345659");
  const TBook3 = new TBook("It ends with us", "Colleen Hoover", "9781471156267");
  const bookArray = [TBook1, TBook2, TBook3];
  
  bookArray.forEach((element) => printOut(element));
  printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const eWeekDays = {
    WeekDay1: { value: 0x01, name: "Mandag" },
    WeekDay2: { value: 0x02, name: "Tirsdag" },
    WeekDay3: { value: 0x04, name: "Onsdag" },
    WeekDay4: { value: 0x08, name: "Torsdag" },
    WeekDay5: { value: 0x10, name: "Fredag" },
    WeekDay6: { value: 0x20, name: "Lørdag" },
    WeekDay7: { value: 0x40, name: "Søndag" },
    WorkDays: { value: 0x01 + 0x02 + 0x04 + 0x08 + 0x10, name: "Arbeisdager" },
    Weekends: { value: 0x20 + 0x40, name: "Helg" },
  };
  
  Object.keys(eWeekDays).forEach((key) => {
    let day = eWeekDays[key]; // Get the object for each key
    printOut(`Name: ${day.name}, Value: ${day.value}`);
  });
  printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let randomNumberArray = [];
for (let i = 0; i < 35; i++) {
  randomNumberArray.push(Math.floor(Math.random() * 20) + 1);
}
printOut(
  "Ascending: " +
    randomNumberArray.sort(function (a, b) {
      return a - b;
    })
);
printOut(
  "Descending: " +
    randomNumberArray.sort(function (a, b) {
      return b - a;
    })
);
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let frequencyMap = {};

for (let number of randomNumberArray) {
  frequencyMap[number] = (frequencyMap[number] || 0) + 1;
}
let frequencyArray = [];
for (let number in frequencyMap) {
  frequencyArray.push([number, frequencyMap[number]]);
}
frequencyArray.sort(function (a, b) {
  if (b[1] === a[1]) {
    return a[0] - b[0];
  }
  return b[1] - a[1];
});

printOut("Frequencies sorted by most frequent:");
for (let [number, frequency] of frequencyArray) {
  printOut(`Number: ${number}, Frequency: ${frequency}`);
}
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let grid = [];

for (let row = 0; row < 5; row++) {
  let newRow = [];

  for (let col = 0; col < 9; col++) {
    newRow.push(`Row ${row + 1}, Column ${col + 1}`);
  }
  grid.push(newRow);
}

for (let row = 0; row < grid.length; row++) {
  let rowOutput = "";
  for (let col = 0; col < grid[row].length; col++) {
    rowOutput += grid[row][col] + " | ";
  }

  printOut(rowOutput);
}
printOut(newLine);
