
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	boyimage = loadImage("sprites/boy.png");
}

function setup() {
	createCanvas(1200, 500);
    engine = Engine.create();
	world = engine.world;

	ground = new Ground(600, 490, 1200, 30);
    boy = Bodies.rectangle(200, 400, 200, 200);
	boy.add = loadImage(boyimage);
	World.add(world, boy);
	stone = new Stone(100, 300, 50, 50);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  
  ground.display();
  boyimage.display();
  stone.display();
 
}



