"use strict";

function showMultiplicationTable(userNumber) {

    for (let i = 1; i <= 10; i++) {
        let result = i * userNumber;
        console.log(`${userNumber} * ${i} = ${result}`);
    }
}
showMultiplicationTable(7);


for (let i = 0; i < 10 ; i++) {
    const random = Math.floor(Math.random() * (200 - 20)) + 20;

    if (random % 2 === 0) {
        console.log(`${random} is even.`);
    } else {
        console.log(`${random} is odd.`);
    }
}



let row = 9;

for ( let i = 1; i <= row; i++) {
    let pattern = " ";
    for (let j = 1; j <= i; j++) {
        pattern += i;
    }
    console.log(pattern);
}



for (let i = 100; i > 0; i--) {

     if ( i % 5 !== 0) {
        continue;
    }
     console.log(i);
}
