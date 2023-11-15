"use strict";
let numInput = Number(prompt("Please enter an odd number between 1 and 50. "));
do {
    if (numInput % 2 === 0 || numInput < 1 || numInput > 50) {
        numInput = Number(prompt("Please re -enter an odd number between 1 and 50. "));
    } else {
        break;
    }
} while (true)

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
///////////////////////////////////////////////////////////////////////////////
// let userNum = true;
// while (userNum) {
//     let userInput = Number(prompt("Please enter a number between 1 and 50. "));
//     if(userInput > 1 || userInput < 50){
//         break;
//     } else {
//         alert("Wrong, Please enter a number between 1 and 50. ");
//     }
//
//     for(let i = 0; i < 50; i++) {
//         if (userInput === i) {
//             console.log(`Yikes! Skipping number: ${numInput}`);
//             continue;
//         }
//         if (i % 2 !== 0) {
//             console.log(`Here is an odd number: ${i}`);
//         }
//     }
//
// }



