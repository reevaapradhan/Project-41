const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var umbrella,drop;
var dropArr=[]

var maxDrops=100;

function preload(){
    
}

function setup(){
    createCanvas(800,400);
    
    engine = Engine.create();
    world = engine.world;

    umbrella = new Umbrella(400,300);

    for(var i=0; i<maxDrops; i++){
        dropArr.push(new Drop(random(0,800), random(0,100)));
    }
}

function draw(){
    background(0,0,0);
    Engine.update(engine);

    umbrella.display();

    for(var i=0; i<maxDrops; i++){
        dropArr[i].update();
        dropArr[i].display();  
    }
}   

