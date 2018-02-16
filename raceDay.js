/*
As a seasoned athlete, one of your favorite activities is running marathons. 

You use a service called Training Days that sends you a message for the event you signed up for, the activities the event involves, and the days you have left to train.

Since you also code, Training Days has asked you to help them with their program. There is one major change that Training Days wants to make to their program:

Training Days currently uses global variables throughout their program. 

They know this can be troublesome as their service evolves. 

You'll be helping them remove their variables from the global scope to the block scope, demonstrating how block level variables work along the way.
 */

let raceNumber = Math.floor(Math.random()*1000);
var regEarly = "alse";
var runnerAge = 17;

if (regEarly === true) {
  raceNumber += 1000;
}

if (runnerAge >= 18 && regEarly === true) {
  console.log(`Race Number = ${raceNumber} \nYour Race Time is 09.30am`)
} else if (runnerAge >= 18 || regEarly === true) {
  console.log(`Race Number = ${raceNumber} \nYour Race Time is 11.00am`)
} else if (runnerAge <= 18 && regEarly === false) {
  console.log(`Race Number = ${raceNumber} \nYour Race Time is 12.30am`)
} else {
  console.log(`Please go see the registration desk`)
};