class Game{
    constructor(){
        
    }
    getState(){
        var ref = db.ref("Gstate");
        ref.on("value", function(data){
            gamestate = data.val();
        })
    }
    update(state){
        db.ref("/").update({
            Gstate : state
        })
    }
    async start(){
        if (gamestate === 0){
            player = new Player();
            var pcref = await db.ref("Pcount").once("value");
            if(pcref.exists()){
                playercount=pcref.val();
                player.getCount();
            }
            form = new Form();
            form.display();
        }
    }
    play(){
        form.hideForm();
        textSize(40);
        text("Game BEGINS!!", 100,200);
        player.playerInfo();
        if(allPlayers !== undefined){
            var posy = 130;
            for (var p in allPlayers){
                if(p === "player" + player.index){
                    fill("red");
                }else {
                    fill("black")
                }
               posy = posy + 20;
               textSize(15)
               text(allPlayers[p].name + ":" + allPlayers[p].distance, 50, posy);
            }
        }
    
        if(keyIsDown(UP_ARROW) && player.index!==null){
            player.distance = player.distance + 30;
            player.updatePlayer();
        }
    }
}