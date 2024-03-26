#! /usr/bin/env node

import inquirer from 'inquirer'
console.log("Welcome to CLI based dice");
console.log("you'r rolled number is:");
const randomNumber = Math.floor(Math.random() * 6 + 1);
console.log(randomNumber);
if (randomNumber===6) {
    console.log("Congratulation!!! you get six.");
} else if (randomNumber===5) {
    console.log("it's great!!!");
}else if (randomNumber===4) {
    console.log("Nice!!!");
}else if (randomNumber===3) {
    console.log("Nice!!!");
} else if (randomNumber===2) {
    console.log("Nice!!!");
} else {
    console.log("Try next time!");
}