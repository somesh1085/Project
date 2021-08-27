var box
function setup() {
createCanvas(400,400);
box = createSprite(200,200,30,30);
}

function draw()
{
background(30);
if(keyIsDown(RIGHT_ARROW)){
box.position.x = box.position.x+5;
}

if(keyIsDown(LEFT_ARROW)){
box.position.x = box.position.x-5;
}

if (keyIsDown(LEFT_ARROW))
{
  background('red');

}

if (keyIsDown(RIGHT_ARROW))
{
  background('blue');

}

if (keyIsDown(UP_ARROW))
{
  background('yellow');

}

if (keyIsDown(DOWN_ARROW))
{
  background('orange');

}
drawSprites()
}
