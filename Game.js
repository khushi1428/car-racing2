class Game{
    constructor(){}

    getState(){
        var gameStateref=database.ref("gameState");
        gameStateref.on("value",function(data){
            gameState=data.val();
        })
    }

    update(state){
        database.ref("/").update({
            gameState:state
        })
    }

   async start(){
        if(gameState==0){
            player=new Player()
            var playerCountRef=await database.ref("playerCount").once("value");
            if(playerCountRef.exists()){
                playerCount=playerCountRef.val();
                player.getCount();
            }


            form=new Form();
            form.display();
        }
    }
    play(){
     form.hide();
     fill("black")
     textSize(50)
     text("Game Start",120,100);
     
    }
}