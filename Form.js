class Form{
    constructor(){
       this.input=createInput("please enter your name");
       this.button=createButton("PLAY");
       this.greeting=createElement("h1")
    }
hide(){
    this.input.hide();
    this.button.hide();
    this.greeting.hide();
    
}
    display(){
        var title=createElement("h1");
        title.html("Car Racing Game");
        title.position(480,100);

        //var input=createInput("please enter your name");
       this. input.position(480,200);
        
         
        this.button.position(550,250);
        
       this.button.mousePressed(()=>{
             this.input.hide()
            this. button.hide();
             
             player.name=this.input.value();
             playerCount+=1;
             player.updateCount(playerCount);

            
             this.greeting.html("Welcome "+player.name);
             this.greeting.position(480,200)
             
            
        })
    } 
}
