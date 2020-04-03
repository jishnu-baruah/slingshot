class Rock {
    constructor(x, y) {
        var options = {
            // render: {
            //     visible=true
            // }
            friction: 20,
            mass: 100
        }
        this.body = Bodies.circle(x, y, 30, options)
        this.radius = 30;
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        strokeWeight(1);
        stroke("white");
        noFill();
        ellipse(pos.x, pos.y, this.radius, this.radius);
    }
}