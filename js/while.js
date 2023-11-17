"use strict";
let num = 2;
while (num <= 65536) {
    console.log(num);
    num *= 2;
}


let numberOfConesToSell = Math.floor(Math.random() * 50) + 50;
let conesBoughtByHerClients;
do {
    conesBoughtByHerClients = Math.floor(Math.random() * 5) + 1;
    if (conesBoughtByHerClients <= numberOfConesToSell) {
        numberOfConesToSell -= conesBoughtByHerClients;
        console.log(`${conesBoughtByHerClients} cones sold`);
        console.log(`Cannot sell you ${numberOfConesToSell} cones I only have ${conesBoughtByHerClients}`);
        break;
    }
} while (numberOfConesToSell > 0);
console.log("Yay! we sold all our cones.");