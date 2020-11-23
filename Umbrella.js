class Umbrella {
    constructor(x,y){
        this.body=Bodies.circle(x,y,this.radius);
        this.radius=3;
        this.image = loadImage('Umbrella boy.jpg');
        World.add(world, this.body);
    }
    display() {
        var angle = this.body.angle
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0, 0, this.radius, this.radius);
        pop();
    }
}