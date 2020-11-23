class Drop {
    constructor() {
        this.body = Bodies.circle(x, y, radius);
        this.radius = 3;
        World.add(world, this.body);

        
    }

    update(){
        Matter.Body.setPosition(this.body, {x:random(0,400), y:random(0,400)})
    }

    display() {
        var angle = this.body.angle
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipseMode(CENTER);
        ellipse(0, 0, this.radius, this.radius);
        pop();
    }
}