#! /usr/bin/env node 
import inquirer from "inquirer";
//computer random number lega
const randomnumber = Math.floor(Math.random() * 10 + 1);
//user se input lena he
const answers = await inquirer.prompt([
    {
        name: 'userGuessedNumber',
        type: 'number',
        message: 'Please guess a Number between 1 to 10: ',
    }
]);
//conditions
//compare krna he user input or computer k random number ko 
if (answers.userGuessedNumber === randomnumber) {
    console.log('Congratulations! you guessed Right Number');
}
else {
    console.log("You guessed Wrong Number");
}
