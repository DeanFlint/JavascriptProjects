/*
We want to create and extract information about your favorite sports team. 

Basketball, soccer, tennis, or water polo, you pick it. It’s your job to create data using the JavaScript data structures at your disposal: arrays, objects, etc.

Once created, you can manipulate these data structures as well as gain insights from them. 

For example, you might want to get the total number of games your team has played, or the average score of all of their games.
 */

const team = {
  _players:[
    { firstName: "Pablo",
      lastName: "Sanchez",
      age: 18 },
    { firstName: "Pedro",
      lastName: "Lopez",
      age: 20 },
    { firstName: "Messi",
      lastName: "Room",
      age: 23 }    
  ],
  
  _games: [
    { opponent: "Broncos",
      teamPoints: 25,
      opponentPoints: 24 },
    { opponent: "Chicago",
      teamPoints: 47,
      opponentPoints: 63 },
    { opponent: "LA",
      teamPoints: 48,
      opponentPoints: 10 }  
  ],
  
  get player() {
    return this._players;
  },
  
  get games() {
    return this._games
  },
  
  addPlayer(firstName, lastName, age) {
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age
    };
    this._players.push(player);
  },
  
  addGame(opponent, teamPoints, opponentPoints){
    let game = {
      opponent: opponent,
      teamPoints: teamPoints,
      opponentPoints: opponentPoints
    };
    this._games.push(game);
  }  
}

team.addPlayer("Steph", "Curry", 28)
team.addPlayer("Lisa", "Leslie", 44)
team.addPlayer("Bugs", "Bunny", 76)
team.addGame("NY", 55, 28)
team.addGame("WA", 45, 65)
team.addGame("NV", 12, 43)

console.log(team._players)
console.log(team._games)
