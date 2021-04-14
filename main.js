
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
  })
}

