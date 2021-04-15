class Player {
  constructor(id, token) {
    this.id = id
    this.token = token
    this.wins = []
  }

  winCount(){
    return this.wins.length.toString()
  }

  saveWinsToStorage() {
    localStorage.setItem(`player-${this.id}-wins`, JSON.stringify(this.wins))
  }

  retrieveWinsFromStorage() {
    let wins = JSON.parse(localStorage.getItem(`player-${this.id}-wins`))
    if (wins) this.wins = wins
  }
}