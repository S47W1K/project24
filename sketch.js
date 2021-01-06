
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	box1= new Box(320,620,10,90)
	box3= new Box(430,620,10,90)
	box2= new Box(380,660,110,10)

	ground = new Ground(400,690,800,10)

	paper = new Paper(200,675,30)
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
  box1.display()
  box3.display()
  box2.display()
  ground.display()
  paper.display()
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(paper.body,{x:380,y:640})
	}
}



