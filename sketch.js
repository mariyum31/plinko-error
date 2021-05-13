const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var gameState = "onSling";
var plinkos;
var particles;
var divisions, divisionHeight;
var ground,height;
var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;


function setup() {
  createCanvas(800,700);
  engine = Engine.create();
  world= engine.world;
  //createSprite(400, 200, 50, 50);

ground = new Ground(400,690,800,20);


particles = new Particles();
//division1 = new Divisions(50,50,2,50);
//division2 = new Divisions(100,50,2,50);
//division3 = new Divisions();
//division4 = new Divisions();
//division5 = new Divisions();
//division6 = new Divisions();
//division7 = new Divisions();
//division8 = new Divisions();


for(var j = 75;j <=width; j = j + 50 ){
  plinkos.push(new Plinkos(j,75));
}
for(var j = 50; j <=width - 10; j = j+50) 
{
plinkos.push(new Plinkos(j,175)) 
}
for(var j = 75;j <=width ;j=j+50){
plinkos.push(new Plinkos(j,275));
}
for(var j = 50;j <=width -10;j=j+50){
plinkos.push(new Plinkos(j,375));
} 

Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(0,0,0); 
  Engine.update(engine);
  
  
for(var n = 0; n<divisions.length;n++){
  division[n].display();
}

if(frameCount %60 === 0){
  particles.push(new Particles(random(width/2-30,width/2+30),10,10))
}

for(var h = 0; h<particles.length;h++){
  paticles[h].display();
}

for (var j = 0; j<plinkos.length; j++){
  plinkos[j].display();
}

ground.display();
//division1.display();
  //division2.display();
//  division3.display();
//  division4.display();
  //division5.display();
//  division6.display();
  //division7.display();
  //division8.display();

  drawSprites();
}

//function mouseDragged(){
  //Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});
//}


//function mouseReleased(){
  //slingshot.fly();
//  gameState = "launched";
//}

//function keyPressed(){
  //if(keyCode === 32){
  //  slingshot.attach(this.polygon);
  //}
//}

