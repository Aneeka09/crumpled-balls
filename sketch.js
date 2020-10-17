var ball,groundSprite;
var box1,box2,box3,box3Img ;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	box3Img=loadImage("download(1).png")
}

function setup() {
createCanvas(800, 700);
engine = Engine.create();
world = engine.world;
paperObj=new Paper(200,450,40);


groundSprite=createSprite(width/2,height-35,width,10);
groundSprite.shapeColor=color(255);

box1=createSprite(width/2,650,300,20)
box1.shapeColor=color(0);

box2=createSprite(565,535,20,200);
box2.shapeColor=color(0);

box3Sprite=createSprite(225,538,20,210);
box3Sprite.addImage(box3Img);
box3Sprite.shapecolor=color(0);





	

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



