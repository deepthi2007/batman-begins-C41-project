class Drops{
    constructor(x,y){
        this.body =Matter.Bodies.circle(x,y,10,{friction:0.5});
        this.radius =10;
        World.add(world,this.body);
    }
    update(){
        if(this.body.position.y>height){
            Matter.Body.setPosition(this.body,{x:random(0,400),y:0})
        }
    }
    display(){
        var pos = this.body.position;
        ellipseMode(RADIUS);
        fill("blue");
        strokeWeight(0);
        ellipse(pos.x,pos.y,this.radius);
    }
}