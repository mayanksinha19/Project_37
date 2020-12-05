
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var l_box,m_box,r_box,ground,paper,paper_image;
var bck_img;

function preload()
{
	paper_image=loadImage("Pictures/Crumpled Paper.webp");
	bck_img=loadImage("Pictures/Park.jpg");
}

function setup() {
	createCanvas(displayWidth-200, displayHeight-200);
	console.log("Hello");

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground(displayHeight/2,650,800,10);
	l_box=new Dustbin(860,600,20,90);
	m_box=new Dustbin(930,635,110,20);
	r_box=new Dustbin(1000,600,20,90);
	paper=new Paper(170,620,10);
	if(paper.x>930){
		text("Congratulations! You win!",displayWidth-500,displayHeight-400);
	}
	//paper.addImage(paper_image)
	//paper.scale=0.3



	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);
  console.log(ground.x);
  rectMode(CENTER);
  background(bck_img);
  ground.display();
  paper.display();
  l_box.display();
  m_box.display();
  r_box.display();
  
  //drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:20,y:-14});
	}
}


