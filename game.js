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
    this.checkIsGameWon()
    if(this.isGameWon) this.winner = this.currentPlayer
    if (this.winner) return
    this.currentPlayer = this.currentPlayer === this.playerOne ? this.playerTwo : this.playerOne;
  }

  checkIsGameWon(){
    if(this.board[0] && this.board[0] == this.board[1] && this.board[0] == this.board[2]) this.isGameWon = true
    if(this.board[3] && this.board[3] == this.board[4] && this.board[3] == this.board[5]) this.isGameWon = true
    if(this.board[6] && this.board[6] == this.board[7] && this.board[6] == this.board[8]) this.isGameWon = true
    if(this.board[0] && this.board[0] == this.board[3] && this.board[0] == this.board[6]) this.isGameWon = true
    if(this.board[1] && this.board[1] == this.board[4] && this.board[1] == this.board[7]) this.isGameWon = true
    if(this.board[2] && this.board[2] == this.board[5] && this.board[2] == this.board[8]) this.isGameWon = true
    if(this.board[0] && this.board[0] == this.board[4] && this.board[0] == this.board[8]) this.isGameWon = true
    if(this.board[2] && this.board[2] == this.board[4] && this.board[2] == this.board[6]) this.isGameWon = true
  }
}