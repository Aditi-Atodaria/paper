
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,gardenImage,paper,paperImage,dustbin,dustbinImage;

function preload()
{
	gardenImage = loadImage("garden.png");
	//paperImage = loadImage("paper.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	paperObject = new Paper(100,400,50);
	//paperObject.addImage("paperImage");
	

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);
	groundSprite.visible=false;

	ground = Bodies.rectangle(width/2, 680, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	//paper = Bodies.circle(width/3, 680,2 , {isStatic:true} );
 	//World.add(world, paper);

	//Create the Bodies Here.

//console.log(paperObject);
	//Engine.run(engine);
  
}


function draw() {
  //rectMode(CENTER);
  background(gardenImage);
  Engine.update(engine); 
  paperObject.display();
  

 // keyPressed();
  
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:400,y:-420});
	}
  }



