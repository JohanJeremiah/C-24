const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(1000,300,50,60);
    box2 = new Box(800,100,50,60);
    box3 = new Box(800,40,50,60)
    box4 = new Box(930,40,50,60)
    box5 = new Box(900,20,50,60)
    ground = new Ground(600,height,width,20)
    pig1 = new Pig(900,200,50,50)
    pig2 = new Pig(900,45,50,50)
    log1 = new Log(900,50,250,PI/2)
    log2= new Log(900,30,250,PI/2)
    diaglog1 = new Log(900,20,110,PI/4)
    diaglog2 = new Log(920,20,110,-PI/4)
}

function draw(){
    background(0);
    Engine.update(engine);
    /*console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);*/
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display()
    ground.display();
    pig1.display();
    pig2.display();
    log1.display();
    log2.display();
    diaglog1.display();
    diaglog2.display();
}