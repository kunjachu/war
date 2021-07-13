var helicopterIMG, helicopter, packageSprite,packageIMG,bg,bgImg;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
	bgImg = loadImage("bg2.jpg")
}

function setup() {
	createCanvas(700, 700);
	rectMode(CENTER);
	
	bg = createSprite(350,264,);
	bg.addImage("bg",bgImg);
	bg.scale = 1.5;

	packageSprite=createSprite(width/2, 200, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopter=createSprite(width/2, 200, 10,10);
	helicopter.addImage(helicopterIMG)
	helicopter.scale=0.6

	groundSprite=createSprite(width/2, 700 , width,10);
	groundSprite.shapeColor= "blue";
	groundSprite.visible = false;


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

 	boxPosition=width/2-100
 	boxY=600;


 	boxleftSprite=createSprite(boxPosition, boxY, 20,100);
 	boxleftSprite.shapeColor=color(255,0,0);

 	boxLeftBody = Bodies.rectangle(boxPosition+20, boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxLeftBody);

 	boxBase=createSprite(boxPosition+100, boxY+40, 200,20);
 	boxBase.shapeColor=color(255,0,0);

 	boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+45-20, 200,20 , {isStatic:true} );
 	World.add(world, boxBottomBody);

 	boxleftSprite=createSprite(boxPosition+200 , boxY, 20,100);
 	boxleftSprite.shapeColor=color(255,0,0);

 	boxRightBody = Bodies.rectangle(boxPosition+200-20 , boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxRightBody);

	 Matter.Body.translate(packageBody,  {x:-20,y:0})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);


 
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

 

  if(keyCode === RIGHT_ARROW){
      helicopter.x = helicopter.x+5;
	  Matter.Body.translate(packageBody,{x:5 , y:0})
  }

  if(keyCode === LEFT_ARROW){
	helicopter.x = helicopter.x-5;
    //packageSprite.x = packageSprite.x-5;
	Matter.Body.translate(packageBody , { x:-5 , y:0} )
}



  if(keyCode === DOWN_ARROW){
	  //packageSprite.y = packageSprite.y+5;
	  Matter.Body.setStatic(packageBody,false);
  }

  //if(packageSprite.isTouching(groundSprite)){
	  //packageSprite.y = packageSprite.y+0;
	  //packageSprite.isStatic = true
	  //packageSprite.velociyY = 0;
  //}

  
  
  drawSprites();
  
  
 
}
