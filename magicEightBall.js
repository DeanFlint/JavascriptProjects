/*
The user will be able to input a question, then our program will output a random fortune.
 */

let userName = 'Dean';
var userQuestion = 'Will it rain today?';
const randomNumber = Math.floor(Math.random() * 8);
var eightBall = '';

userName ? console.log(`Hello, ${userName}`) : console.log('Hello!');

switch(randomNumber){
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;
  case 2:
    eightBall =  'Reply hazy try againn';
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break;
  case 4:
    eightBall = 'Don\'t count on it';
    break;
  case 5:
    eightBall = 'My sources say no';
    break;
  case 6:
    eightBall = 'Outlook not so good';
    break;
  case 7:
    eightBall = 'Signs point to yes';
    break;
}

console.log(`Your question: \n${userQuestion} \nYour answer: \n${eightBall}`);