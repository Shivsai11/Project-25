var ground, box1, box2, box3, paper, binImage, bin;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	binImage = loadImage("sprites/dustbin.png");
}

function setup() {
	createCanvas(1200, 500);
	
	engine = Engine.create();
	world = engine.world;
	
	var ground_options ={
	 isStatic: true,
	}
	ground = new Box(600, 470, 1200, 60, );
	Engine.run(engine);

	box1 = new Box(795, 390, 20, 300);
	box2 = new Box(955, 390, 20, 300);
	box3 = new Box(875, 430, 170, 20);
	
	bin = createSprite(875, 340, 20, 20);
	bin.addImage(binImage);
	bin.scale = 0.7;
	paper = new Paper(50, 300, 15);
}


function draw() {
  rectMode(CENTER);
  background(255, 0, 100);
  Engine.update(engine);

  box1.display();
  box2.display();
  box3.display();
  ground.display();
  paper.display();
  drawSprites();

  if(keyDown("up")){
	  Matter.Body.applyForce(paper.body, paper.body.position,{x:300, y:-300})
  }
 
}



