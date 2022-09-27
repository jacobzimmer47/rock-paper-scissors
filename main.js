var game = new Game();
var classic = ["rock", "paper", "scissors"]
var difficult = ["rock", "paper", "scissors", "spock", "lizard"]

var classicGameRules = document.querySelector(".rules-box");
var difficultGameRules = document.querySelector(".rules-box-two");
var classicIcons = document.querySelector(".classic-icons");
var difficultIcons = document.querySelector(".difficult-icons");
var changeGameButton = document.querySelector(".change-game-button");
var gameSide = document.querySelector(".game-side");
var iconChoices = document.querySelector(".fighter-choices");
var subtitle = document.querySelector(".subtitle");
var subtitleChange = document.querySelector(".subtitleTwo");
var displayWinner = document.querySelector(".show-winner");
var winnerText = document.querySelector(".winner");
var mainText = document.querySelector(".main-text");
var humanWins = document.querySelector(".human-wins");
var cpuWins = document.querySelector(".cpu-wins");

classicGameRules.addEventListener('click', playClassicGame);
difficultGameRules.addEventListener('click', playChallengeGame);
changeGameButton.addEventListener('click', returnToHomePage);
classicIcons.addEventListener('click', playGame);
difficultIcons.addEventListener('click', playGame);

function showWinner() {
  classicIcons.classList.add("hidden");
  difficultIcons.classList.add("hidden");
  mainText.classList.add("hidden");
  showWinnerText()
}

function showWinnerText() {
  winnerText.classList.remove("hidden");
  if (game.winner === "human") {
    winnerText.innerText = "YOU WIN!"
  } else if (game.winner === "computer") {
    winnerText.innerText = "CPU WINS!"
  } else if (game.winner === ""){
    winnerText.innerText = "Tie"
  }
}

function playGame(event) {
  changeGameButton.classList.add("hidden");
  var getPick = event.target.id
  getHumanChoice(getPick);
  game.computer.getCpuChoice(game);
  game.selectWinner();
  game.checkForDraw();
  game.checkWin();
  tallyScore();
  showWinner();
  setTimeout(reset, 2000);
}

function reset() {
  mainText.classList.remove("hidden");
  changeGameButton.classList.add("hidden");
    if (game.type === "classic") {
      playClassicGame()
    } else {
      playChallengeGame()
    }
    displayWinner.innerHTML = "";
}

function tallyScore() {
  humanWins.innerText = `Wins: ${game.human.win}`
  cpuWins.innerText = `Wins: ${game.computer.win}`
}

function getHumanChoice(getPick) {
  game.human.currentChoice = getPick
}

function playClassicGame() {
  game.type = "classic";
  subtitleChange.classList.remove("hidden");
  winnerText.classList.add("hidden");
  subtitle.classList.add("hidden");
  classicGameRules.classList.add("hidden");
  difficultGameRules.classList.add("hidden");
  classicIcons.classList.remove("hidden");
  difficultIcons.classList.add("hidden");
  changeGameButton.classList.remove("hidden");
  iconChoices.classList.remove("hidden");
}

function playChallengeGame() {
  game.type = "difficult";
  subtitleChange.classList.remove("hidden");
  subtitle.classList.add("hidden");
  winnerText.classList.add("hidden");
  classicGameRules.classList.add("hidden");
  difficultGameRules.classList.add("hidden");
  classicIcons.classList.add("hidden");
  difficultIcons.classList.remove("hidden");
  changeGameButton.classList.remove("hidden");
  iconChoices.classList.remove("hidden");
}

function returnToHomePage() {
  subtitleChange.classList.add("hidden");
  subtitle.classList.remove("hidden");
  classicGameRules.classList.remove("hidden");
  difficultGameRules.classList.remove("hidden");
  classicIcons.classList.add("hidden");
  difficultIcons.classList.add("hidden");
  changeGameButton.classList.add("hidden");
  iconChoices.classList.add("hidden");
}

  

 