
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
  document.querySelector('.player-turn').classList.add('hidden')
  document.querySelector('.winner-icon').innerText = game.currentPlayer.token
  document.querySelector('.game-won').classList.remove('hidden')
  document.querySelector('.border-override').style.pointerEvents='auto'
  setTimeout(function () {startNewGame()}, 3000);
}

function startNewGame() {
  game.winner.wins.push(game.board)
  game = new Game(playerOne, playerTwo)
  document.querySelector('.border-override').style.pointerEvents = 'none'
  for (let i = 0; i < gameCells.length; i++){
    gameCells[i].innerHTML = ''
  }
  currentPlayerIcon.innerText = game.currentPlayer.token
  document.querySelector('.player-turn').classList.remove('hidden')
  document.querySelector('.game-won').classList.add('hidden')
}
