
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
    if (game.winner) showWinner()
  })
}

function showWinner() {
  document.querySelector('.player-turn').classList.add('hidden')
  document.querySelector('.winner-icon').innerText = game.currentPlayer.token
  document.querySelector('.game-won').classList.remove('hidden')
  document.querySelector('.border-override').style.pointerEvents='auto'
}

