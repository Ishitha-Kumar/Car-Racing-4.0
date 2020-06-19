class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
    this.rank=null;
  }

  getCount(){
    //read the player count from the database
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }
    //update the player count from the database
  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }
  
  update(){
    //update the name and distance in database
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
    });
  }
    // the player info
  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }
  getCarsAtEnd(){
    database.ref('CarsAtEnd').on("value",(data)=>{
      this.rank=data.val();
    })
  }
  static updateCarsAtEnd(rank)
  {
    database.ref('/').update({
      CarsAtEnd:rank
    })
  }
}
