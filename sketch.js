const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bg
var snow;
var character1,character1Img

function preload(){
  character1Img = loadImage("Character.png")
}

function setup() {
  bg = loadImage("snow1.jpg")
  
  var canvas = createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  snow = new Snow(100,100,20)
  
  character1 = createSprite(500, 300, 50, 50)
  character1.addImage(character1Img)
  character1.scale = 0.4
  
 
}

function draw() {
  background(bg)
  Engine.update(engine);
  
  snow.display()
  character1.display()
}
  




