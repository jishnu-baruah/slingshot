const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var ground, base1, base2;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11,
    box12, box13, box14, box15, box16, box17, box18, box19, box20, box21,
    box22, box23, box24, box25, box25, box27, box28, box29, box30, box31,
    box32, box33;
var boxes;
var rock1;
var rocks = [];
function setup() {
    canvas = createCanvas(800, 600);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(width / 2, height, width, 20);
    var x1 = 600, y1 = 230, y1
    base1 = new Ground(x1, y1 + 30, 200, 20);
    box1 = new Box(x1, y1)
    box2 = new Box(x1 - 30, y1)
    box3 = new Box(x1 - 60, y1)
    box4 = new Box(x1 + 30, y1)
    box5 = new Box(x1 + 60, y1)
    box6 = new Box(x1, y1 - 40)
    box7 = new Box(x1 - 30, y1 - 40)
    box8 = new Box(x1 + 30, y1 - 40)
    box9 = new Box(x1, y1 - 80);

    var y2 = height - 30;
    box10 = new Box(x1, y2);
    box11 = new Box(x1 - 30, y2);
    box12 = new Box(x1 - 60, y2);
    box13 = new Box(x1 - 90, y2);
    box14 = new Box(x1 - 120, y2);
    box15 = new Box(x1 + 30, y2)
    box15 = new Box(x1 + 60, y2);
    box16 = new Box(x1 + 90, y2);
    box17 = new Box(x1 + 120, y2);

    box18 = new Box(x1, y2 - 40);
    box19 = new Box(x1 - 30, y2 - 40);
    box20 = new Box(x1 - 60, y2 - 40);
    box21 = new Box(x1 - 90, y2 - 40);
    box22 = new Box(x1 + 30, y2 - 40);
    box23 = new Box(x1 + 60, y2 - 40);
    box24 = new Box(x1 + 90, y2 - 40);

    box25 = new Box(x1, y2 - 80);
    box26 = new Box(x1 - 30, y2 - 80);
    box27 = new Box(x1 - 60, y2 - 80);
    box28 = new Box(x1 + 30, y2 - 80);
    box29 = new Box(x1 + 60, y2 - 80);

    box30 = new Box(x1, y2 - 120);
    box31 = new Box(x1 - 30, y2 - 120);
    box32 = new Box(x1 + 30, y2 - 120);

    box33 = new Box(x1, y2 - 150);

    rock1 = new Rock(200, 200);
    rocks.push(rock1);
    slingshotPosition = createVector(200, 200)
    slingshot = new SlingShot(rock1.body, { x: slingshotPosition.x, y: slingshotPosition.y });
    boxes = [box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14,
        box15, box16, box17, box18, box19, box20, box21, box22, box23, box24,
        box25, box26, box27, box28, box29, box30, box31, box32, box33]

}

function draw() {
    canvas.position((windowWidth - width) / 2, (windowHeight - height) / 2);
    background(0);
    noStroke();
    textSize(35)
    fill("white")
    Engine.update(engine);
    ground.display();
    base1.display();
    for (var box of boxes) {
        if (box !== undefined) {
            box.display();
        }
    }
    for (var rock of rocks) {
        if (rock !== undefined) {
            rock.display();
        }

    }

    slingshot.display();
    // box2.display();
}

function mouseDragged() {
    Matter.Body.setPosition(slingshot.getBody(), { x: mouseX, y: mouseY });
}


function mouseReleased() {
    slingshot.fly();
    slingshot.attach(createRock());
}

// function keyPressed() {
//     if (keyCode === 32) {


//         // Matter.Body.setPosition(bird.body, { x: slingshotPosition.x, y: slingshotPosition.y });
//     }
// }
function createRock() {

    var newRock = new Rock(slingshotPosition.x, slingshotPosition.y);
    rocks.push(newRock);
    return (newRock.body)
}