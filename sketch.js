const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,ball,paper


function preload()
{
	paper=loadImage("paper.png")	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	
//var packageBody=createSprite(50,600,10,10)
	
	ground1= new Ground(400,700,800,10);
	bucket1 = new Ground(780,650,10,315);
    bucket2 = new 	Ground(600,650,10,130);
	bucket3= new 	Bucket(690,600,10,120);
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );

 	//World.add(world, ground);
	 ball = Bodies.circle(100 , 400 , 15 , {restitution:0.8, isStatic:false,density:1.2,friction:0.5});
	 World.add(world, ball);
console.log(ball.position)
	Engine.run(engine);
}


function draw() {
  
  background("purple");
  ground1.display();
  bucket1.display();
  bucket2.display();
  bucket3.display();
  //ellipse(ball.position.x,ball.position.y,20,20);
  imageMode(CENTER)
  image(paper,ball.position.x,ball.position.y,50,50);
 // packageBody.position.x = mouseX;
  //pakageBody.position.y = mouseY;
  
}
function keyPressed(){
	if(keyCode===UP_ARROW)
	Matter.Body.applyForce(ball,ball.position,{x:100,y:43})
}



