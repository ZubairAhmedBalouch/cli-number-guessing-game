#! /usr/bin/env node  
//Above code is known as "Shabang" or "Hashbang".

import inquirer from "inquirer";

// 1) Computer Will Generate a Random Number. -done

// 2) Take a input from User for Guessing Game. -done

// 3) Compare User Input with Computer Generated number and show result. -done

const randomNumber = Math.floor(Math.random() *6 + 1); //1 to 6 numbers will show like ludo, it will generates number 1 to 6
console.log("** Dear User Most Welcome to you in the Number Guessing Game **");
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "Number",
        message: " Dear user please guess a number between 1-6: ",

    },
]);

if(answers.userGuessedNumber == randomNumber){
    console.log("Congratulations..!! you have guessed a right number.");
}
else{
    console.log("Sorry you guessed wrong number");
 };
 