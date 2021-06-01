var block1,block2,block3,block4,block5,block6,block7,block8
var block9,block10,block11,block12,block13,block14,block15,block16

var slingshot

let img;

function Preload() {
  img = loadImage('assets/laDefense.jpg');
}


function setup() {
  createCanvas(1200,400);
  createSprite(400, 200, 50, 50);

  ground = new Ground(600,height,1200,20);
  platform = new Ground(150, 305, 300, 170);

  //level one
  block1 = new Block1(100,235,30,40)
  block2 = new Block2(130,235,30,40)
  block3 = new Block3(160,235,30,40)
  block4 = new Block4(190,235,30,40)
  block5 = new Block5(220,235,30,40)
  block6 = new Block6(250,235,30,40)
  block7 = new Block7(280,235,30,40)

  //level two
  block8 = new Block8(330,235,30,40)
  block9 = new Block9(360,235,30,40)
  block10 = new Block10(390,235,30,40)
  block11 = new Block11(420,235,30,40)
  block12 = new Block12(450,235,30,40)

  //level three
  block13 = new Block13(360,195,30,40)
  block14 = new Block14(390,195,30,40)
  block15 = new Block15(420,195,30,40)

  //top
  block16 = new Block16(390,155,30,40)
}

function draw() {
  background(255,255,255); 

  //polygon holder with slings
  polygon = Bodies.circle(50,200,20)
  World.add(world,polygon);
  slingShot = new SlingShot(this.polygon,{x:100,y:200});

  imageMode(CENTER)
  image(polygon_img ,polygon.position.x,polygon.position.y,40,40)
  push();
  pop();
  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode===32)
  slingshot.attach(bird.body);
}