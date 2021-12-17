const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let body;
var ball;
var ground;
var leftSide;
var rightSide;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 500);
	

	engine = Engine.create();
	world = engine.world;

	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
	ground = new Ground(width/2,470,width,20);
	leftSide = new Ground(1000,400,20,120);
	rightSide = new Ground(1150,400,20,120);
	//Create the Bodies Here.
	ball=Bodies.circle(200,200,30,ball_options);
	World.add(world,ball)
	

	Engine.run(engine);
	
	 
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.show()
  leftSide.show()
  rightSide.show()
  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,30)
  drawSprites();

  
  
}
function keyPressed(){
	if(keyCode == UP_ARROW){
	Matter.Body.applyForce(ball,{x:ball.position.x,y:ball.position.y},{x:200,y:-150})

	}
}


 