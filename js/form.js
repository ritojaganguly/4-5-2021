class Form{
    constructor(){
        this.input = createInput("Name please!");
        this.button = createButton("Let's gooooo!!!");
        this.greeting = createElement("h2");
    }
    display(){
        var title = createElement("h2");
        title.html("Car Racing Game- Register NOW!");
        title.position(250, 10);

        this.input.position(350, 170);
        
        this.button.position(550, 220); 

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();

            player.name = this.input.value();
            playercount = playercount + 1;
            player.index = playercount;
            player.update(playercount);
            player.updatePlayer();
            
            this.greeting.html("Hey" + " " + this.input.value() + "!");
            this.greeting.position(350, 170);
            
        })
    }
    hideForm(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }
}