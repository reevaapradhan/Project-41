const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var umbrella;

function preload(){
    
}

function setup(){
    createCanvas(800,400);
    
    engine = Engine.create();
    world = engine.world;

    umbrella = new Umbrella(400,200);
}

function draw(){
    background(0,0,0);
    Engine.update(engine);

    umbrella.display();
}   

