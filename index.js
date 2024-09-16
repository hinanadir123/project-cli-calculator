#! /usr/bin/env node
import inquirer from "inquirer";
// 1. computer will generate a random number
// 2. user input for guessing number
// 3.compare user input with computer generated number and show result
const randomnumber = Math.floor(Math.random() * 10 + 1);
const answers = await inquirer.prompt([
    {
        user: "userguessnumber",
        type: "number",
        message: "please guess a random number between 1 to 10",
    }
]);
console.log(answers);
if (answers.userguessnumber === randomnumber) {
    console.log("congragulation you have guessed the correct number");
}
else {
    console.log("you guessed wrong number");
}
