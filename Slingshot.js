class SlingShot {
    constructor(bodyA, pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1,
            damping: 0.05,
            // render: {
            //     visible: true
            // }
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    attach(body) {
        this.sling.bodyA = body;
    }

    fly() {
        this.sling.bodyA = null;
    }
    getBody() {
        var presentBody = this.sling.bodyA;
        return (presentBody);

    }

    display() {
        if (this.sling.bodyA) {
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            stroke("white");
            line(pointA.x, pointA.y, pointB.x, pointB.y)
            pop();
        }
    }

}