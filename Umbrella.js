class Umbrella {
    constructor(x,y){
        var options = {
            'isStatic': 1
        }
        this.radius=200;
        this.body=Bodies.circle(x,y,this.radius, options);
        this.image = loadImage('Boywithumbrella.jpg');
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