class Umbrella{
    constructor(){
        this.body = Matter.Bodies.rectangle(0,900,500,300,{isStatic:true});
        this.width = 500;
        this.height = 300;
        World.add(world,this.body);
        this.image = loadImage("umbrella.webp"); 
    }
    display(){
        var pos = this.body.position;
        image(this.image,pos.x,pos.y,this.width,this.height);
    }
}
