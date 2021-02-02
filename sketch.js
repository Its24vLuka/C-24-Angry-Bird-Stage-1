  // Renaming or Alias  of modules of matter.js library -- NameSpacing
  
  const Engine = Matter.Engine;
  const Bodies= Matter.Bodies;
  const World = Matter.World;


  var engine,world;
  var ground;
  var ball;
  var box1, box2,pig1,log1;
  var box3, box4, pig2, log2;
  var box5, log3, log4;
  var bird1

function setup() {
  createCanvas(1200,400);

  engine = Engine.create();

  // Assigning the world created inside engine to world variable
  world = engine.world;

  ground = new Ground(600,380,1200,20);
  box1 = new Box(700,320,70,70);
  box2 = new Box(920,320,70,70);
  pig1 = new Pig(810,350);
  log1 = new Log(810,260,300,PI/2);

  box3 = new Box(700,240,70,70);
  box4 = new Box(920,240,70,70);
  pig2 = new Pig(810,220);
  log2 = new Log(810,180,300,PI/2);

  box5 = new Box(810,160,70,70);
  log3 = new Log(760,120,150,PI/7);
  log4 = new Log(870,120,150,-PI/7);

  bird1 = new Bird(100,100);

}

function draw() {
    background("lightblue"); 

    Engine.update(engine);
    ground.display();
     bird1.display();
    box1.display();
    box2.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig2.display();
    log2.display();

    log4.display();
    log3.display();
    box5.display();

    
}

