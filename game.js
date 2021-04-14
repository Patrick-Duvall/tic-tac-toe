class Game {
  constructor(playerOne, playerTwo) {
    this.board = new Array('', '', '', '', '', '', '', '', '')
    this.playerOne = playerOne
    this.playerTwo = playerTwo
    this.currentPlayer = this.setStartingPlayer() ? this.playerOne : this.playerTwo
    this.isGameWon = false
  }

  setStartingPlayer() {
    return Math.floor(Math.random() * 2) == 0
  }

  takeTurn(index) {
    index = parseInt(index)
    if(this.board[index]) return
    this.board[index] = this.currentPlayer.token
    this.currentPlayer = this.currentPlayer === this.playerOne ? this.playerTwo : this.playerOne;
  }
}