const Engine = Matter.engine;
const World = Matter.World;
const Bodies = Matter.Wodies;

var engine,world,boy,rain,thunder;

function preload(){
//thunder = loadImage("thunder.jpg");
}

function setup(){
 canvas =createCanvas(400,1200);
  
 engine =  Matter.Engine.create();
 world = engine.world;

 boy = new Umbrella();

 //thunders = createSprite(200,100,50,50);
 
 var maxdrops = 200;
 for(i = 0;i<maxdrops;i++){
      rain=new Drops(random(0,400),0);
 }
 /* for(j=0;j>200;j++){
     thunders.addImage("light",thunder);
 } */
 }


function draw(){
   background("black");
   Matter.Engine.update(engine);

   boy.display();
   rain.display();
   rain.update();

   drawSprites();
}   

