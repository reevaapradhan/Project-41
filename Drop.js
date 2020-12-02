class Drop {
    constructor(x,y) {
        var options = {
            'friction': 0.01,
            'restitution':0.1
        }
        this.radius = 3;
        this.body = Bodies.circle(x, y, this.radius);
        World.add(world, this.body);

    }

    update(){
        
        if(this.body.position.y>height){
            Matter.Body.setPosition(this.body, {x:random(0,800), y:random(0,100)})
        }
    }

    display() {
        push();
        fill("blue")
        ellipseMode(RADIUS);
        ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius);
        pop();
    }
}