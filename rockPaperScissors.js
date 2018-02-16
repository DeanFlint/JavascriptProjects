/* 
The possible outcomes are:
- Rock destroys scissors.
- Scissors cut paper.
- Paper covers rock.
- If there's a tie, then the game ends in a draw.

The code will break the game into four parts:
1. Get the user's choice.
2. Get the computer's choice.
3. Compare the two choices and determine a winner.
4. Start the program and display the results.
*/


const getUserChoice = userInput => {
  var userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'scissors' || userInput ==='paper') {
    return userInput;
  } else {return 'Error in selection'}
};

const getComputerChoice = () => {
  var generatedNum = Math.floor(Math.random() * 3);
  switch (generatedNum) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
}

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {return "It is a tie!"};
  if (userChoice === 'rock') 
    { 
      if (computerChoice === 'scissors') 
        {return "You win!"}
      else 
        {return "You lose!"}
    }
  else if (userChoice === 'scissors') 
    {
      if (computerChoice === 'paper')
        {return "You win!"}
      else
        {return "You lose!"}
    }
  else if (userChoice === 'paper')
    {
      if (computerChoice === 'rock')
        {return "You win!"}
      else
        {return "You lose!"}
    }
}

const playGame = () => {
  const userChoice = getUserChoice('rock');
  const computerChoice = getComputerChoice();
  console.log('User: ' + userChoice);
  console.log('Computer: ' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();