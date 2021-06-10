class Game {
    constructor(){
        
    }
    getGameState(){
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value",(data)=>{
            gameState = data.val();
        }) 
    }
    updateGameState(data){
        database.ref('/').update({
            gameState:data
        })
    }
    
async start(){
        if(gameState===0){
            player = new Player();
            var playerCountRef = await database.ref('playerCount').once("value");
            

            if(playerCountRef.exists){
            playerCount = playerCountRef.val();
            player.getPlayerCount();
            }

            form = new Form();
            form.display();

            
        }
        player1 = createSprite(200,400,20,20);
        player2 = createSprite(400,400,20,20);
    }
    play(){
        form.hide();
        text("Game Start",200,250);
        Player.getPlayerInfo();

        if(allPlayers!==undefined){
            var display_position = 100
            display_position = display_position + 20;
            var x =100;

            for(var plr in allPlayers){
               x =x+50;
             text(allPlayers[plr].Name+":"+allPlayers[plr].Distance,x,display_position);
            }
        }
        if(keyWentDown(UP_ARROW) && (player.index!== null)){
            player.distance = player.distance + 20;
            player.updatePlayerName();
            }

        drawSprites();
    }

}