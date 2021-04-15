
var playerOne = new Player('one', '🔥')
var playerTwo = new Player('two', '💧')

var game = new Game(playerOne, playerTwo)

var gameCells = document.querySelectorAll('.game-cell')
var currentPlayerIcon = document.querySelector('.current-player-icon')
currentPlayerIcon.innerText = game.currentPlayer.token

for(let i = 0; i < gameCells.length; i++) {
  gameCells[i].addEventListener('click', function(){
    game.takeTurn(gameCells[i].id)
    gameCells[i].innerText = game.board[i]
    currentPlayerIcon.innerText = game.currentPlayer.token
    if (game.winner) finishGame()
  })
}

function finishGame() {
  displayWinner()
  displayBothPlayerWins()
  makeBoardUnclickable()
  setTimeout(function () {startNewGame()}, 3000);
}

function startNewGame() {
  game = new Game(playerOne, playerTwo)
  makeBoardClickable()
  displayNewGame()
}

function displayWinner(){
  document.querySelector('.player-turn').classList.add('hidden')
  document.querySelector('.winner-icon').innerText = game.currentPlayer.token
  document.querySelector('.game-won').classList.remove('hidden')
}

function displayNewGame() {
  for (let i = 0; i < gameCells.length; i++) {
    gameCells[i].innerHTML = ''
  }
  currentPlayerIcon.innerText = game.currentPlayer.token
  document.querySelector('.player-turn').classList.remove('hidden')
  document.querySelector('.game-won').classList.add('hidden')
}

function makeBoardClickable(){
  document.querySelector('.border-override').style.pointerEvents = 'none'
}

function makeBoardUnclickable(){
  document.querySelector('.border-override').style.pointerEvents = 'auto'
}

function displayBothPlayerWins(){
  var playerOneWins = document.querySelector('.player-one-wins')
  var playerTwoWins = document.querySelector('.player-two-wins')
  displayPlayerWins(playerOne, playerOneWins)
  displayPlayerWins(playerTwo, playerTwoWins)
  
}

function displayPlayerWins(player, playerWinsArea) {
  var tinyWins = ''
  for (let i = 0; i < player.wins.length; i++) {
    tinyWins += `<div class="mini-game-board">`
    for (let j = 0; j < 9; j++) {
      tinyWins += `
      <div class="mini-game-cell" id="0">${player.wins[i][j]}</div>
      `
    }
    tinyWins += `</div>`
  }
  playerWinsArea.innerHTML = tinyWins
}
