"use strict";

console.log("Hello from external JavaScript");
alert('Welcome to my Website!');

let userInput = prompt('What is your favorite color: ');
console.log(`Great, ${userInput} is my favorite color too!`);

let littleMermaidDaysRented = prompt("How many days did you rent Little Mermaid? ");
let daysRentedBrotherBear = prompt("How many days did you rent Brother Bear? ");
let daysRentedHercules = prompt("How many days did you rent Hercules? ");
let movieCost = prompt("What is the cost of renting a movie? ");
let totalCost = Number(littleMermaidDaysRented) * movieCost + Number(daysRentedBrotherBear) * movieCost + Number(daysRentedHercules) * movieCost;
alert(`Your total cost of the rental is $${totalCost.toFixed(2)}.`);

let googlePay = Number(prompt("What is your hourly pay at Google"));
let amazonPay = Number(prompt("What is your hourly pay at Amazon"));
let facebookPay = Number(prompt("What is your hourly pay at Facebook"));
let googleHours = Number(prompt('How may hours did you work for Google: '));
let amazonHours = Number(prompt('How may hours did you work for Amazon: '));
let facebookHours = Number(prompt('How may hours did you work for Facebook: '));
let totalPay = googleHours * googlePay + amazonHours * amazonPay + facebookHours * facebookPay;
alert(`Your total income is: $ ${totalPay.toFixed(2)}`);
