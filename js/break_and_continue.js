"use strict";
let numInput;
do {
    numInput = Number(prompt("Please enter an odd number between 1 and 50. "));
    if (numInput % 2 === 0 || numInput < 1 || numInput > 50) {
        numInput = Number(prompt("Please re -enter an odd number between 1 and 50. "));
    } else {
        break;
    }
} while (true);

console.log(`Number to skip is: ${numInput}`);
for (let i = 0; i < 50; i++) {

    if (numInput === i) {
        console.log(`Yikes! Skipping number: ${numInput}`);
        continue;
    }
    if (i % 2 !== 0) {
        console.log(`Here is an odd number: ${i}`);
    }
}



