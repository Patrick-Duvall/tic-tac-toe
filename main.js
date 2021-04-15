var playerOne = new Player('one', '🔥')
var playerTwo = new Player('two', '💧')

window.onload = function () {
  playerOne.retrieveWinsFromStorage()
  playerTwo.retrieveWinsFromStorage()
  displayBothPlayerWins()
}

var gameCells = document.querySelectorAll('.game-cell')
startNewGame()

var currentPlayerIcon = document.querySelector('.current-player-icon')

for(let i = 0; i < gameCells.length; i++) {
  gameCells[i].addEventListener('click', function(){
    game.takeTurn(gameCells[i].id)
    gameCells[i].innerText = game.board[i]
    currentPlayerIcon.innerText = game.currentPlayer.token
    if (game.winner) finishGame('win')
    if (game.isDraw) finishGame('draw')
  })
}

function finishGame(result) {
  if(result === 'win') displayWinner()
  if(result === 'draw') displayDraw()
  displayBothPlayerWins()
  makeBoardUnclickable()
  setTimeout(function () {startNewGame()}, 3000);
}

function startNewGame() {
  game = new Game(playerOne, playerTwo)
  makeBoardClickable()
  displayNewGame()
}

function displayDraw() {
  document.querySelector('.game-draw').classList.remove('hidden')
  document.querySelector('.player-turn').classList.add('hidden')
}

function displayWinner(){
  document.querySelector('.player-turn').classList.add('hidden')
  document.querySelector('.winner-icon').innerText = game.currentPlayer.token
  document.querySelector('.game-won').classList.remove('hidden')
}

function displayNewGame() {
  for (let i = 0; i < gameCells.length; i++) gameCells[i].innerHTML = ''
  currentPlayerIcon = game.currentPlayer.token
  document.querySelector('.player-turn').classList.remove('hidden')
  document.querySelector('.game-won').classList.add('hidden')
  document.querySelector('.game-draw').classList.add('hidden')
}

function makeBoardClickable(){
  document.querySelector('.border-override').style.pointerEvents = 'none'
}

function makeBoardUnclickable(){
  document.querySelector('.border-override').style.pointerEvents = 'auto'
}

function displayBothPlayerWins(){
  var playerOneWinsArea = document.querySelector('.player-one-wins')
  var playerTwoWinsArea = document.querySelector('.player-two-wins')
  displayPlayerWinBoards(playerOne, playerOneWinsArea)
  displayPlayerWinBoards(playerTwo, playerTwoWinsArea)
  document.querySelector('.player-one-win-count').innerText = playerOne.winCount()
  document.querySelector('.player-two-win-count').innerText = playerTwo.winCount()
}

function displayPlayerWinBoards(player, playerWinsArea) {
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
