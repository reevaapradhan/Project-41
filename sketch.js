const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var umbrella,drop;

var maxDrops=100;

function preload(){
    
}

function setup(){
    createCanvas(800,400);
    
    engine = Engine.create();
    world = engine.world;

    umbrella = new Umbrella(400,300);
    drop = new Drop(400,0);
}

function draw(){
    background(0,0,0);
    Engine.update(engine);

    umbrella.display();
    drop.display();
    
    for(var i=0; i<maxDrops; i++){
        drop.push(new createDrop(random(0,400), random(0,400)));
    }
}   

