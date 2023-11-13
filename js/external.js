"use strict";

console.log("Hello from external JavaScript");
alert('Welcome to my Website!');

let userInput = prompt('What is your favorite color: ');
console.log(`Great, ${userInput} is my favorite color too!`);

let movieCost = 3.00;
let littleMermaidDaysRented = prompt("How many days di you rent Little Mermaid? ");
let daysRentedBrotherBear = prompt("How many days did you rent Brother Bear? ");
let daysRentedHercules = prompt("How many days did you rent Hercules? ");
let totalCost = Number(littleMermaidDaysRented) * movieCost + Number(daysRentedBrotherBear) * movieCost + Number(daysRentedHercules) * movieCost;
alert(`Your total cost of the rental is $${totalCost.toFixed(2)}.`);

let googlePay = 400.00;
let amazonPay = 380.00;
let facebookPay = 350.00;
let googleHours = prompt('How may hours did you work for Google: ');
let amazonHours = prompt('How may hours did you work for Amazon: ');
let facebookHours = prompt('How may hours did you work for Facebook: ');
let totalPay = (Number(googleHours) * googlePay) + (Number(amazonHours) * amazonPay) + (Number(facebookHours) * facebookPay);
alert(`Your total income is: $ ${totalPay.toFixed(2)}`);
