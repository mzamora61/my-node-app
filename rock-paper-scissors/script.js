const buttons = document.querySelectorAll('.buttons button');
const userC = document.getElementById('player-choice');
const compC = document.getElementById('computer-choice');
const answer = document.getElementById('outcome');
const userS = document.getElementById('player-score');
const compS = document.getElementById('computer-score');


const options = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;


buttons.forEach(button => {
  button.addEventListener('click', () => {
    const playerChoice = button.id;
    playGame(playerChoice);
  });
});

function compChoice() {
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}
function playGame(playerChoice) {
  const computerChoice = compChoice();
  const result = win(playerChoice, computerChoice);

  newOption(playerChoice, computerChoice);
  newResults(result);
  nScore(result);
}

function win(player, computer) {
  if (player === computer) return "It's a tie!";

  switch (player) {
    case 'rock':
      return computer === 'scissors' ? 'You win!' : 'You lose.';
    case 'paper':
      return computer === 'rock' ? 'You win!' : 'You lose.';
    case 'scissors':
      return computer === 'paper' ? 'You win!' : 'You lose.';
    default:
      return 'Invalid choice.';
  }
}

function newResults(result) {
  answer.textContent = `Result: ${result}`;
}

function newOption(player, computer) {
  userC.textContent = `You chose: ${capitalize(player)}`;
  compC.textContent = `Computer chose: ${capitalize(computer)}`;
}

function nScore(result) {
  if (result === 'You win!') playerScore++;
  if (result === 'You lose.') computerScore++;

  userS.textContent = `Your Score: ${playerScore}`;
  compS.textContent = `Computer Score: ${computerScore}`;
}

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}
main();

