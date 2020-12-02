class Umbrella {
    constructor(x,y){
        var options = {
            'isStatic': true
        }
        this.radius=100;
        this.body=Bodies.circle(x,y,this.radius, options);
        this.image = loadImage('Boywithumbrella.jpg');
        World.add(world, this.body);
    }
    display() {
        push();
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y, this.radius, this.radius);
        pop();

    }
}