var paddle, ball, score;
 var devWidth = window.screen.width;
 var devHeight = window.screen.height;
function setup(){
  createCanvas(devWidth * 99/100, devHeight * 80/100 );
  paddle = createSprite(devWidth * 45/100, devHeight * 78/100, 70, 10);
  ball = createSprite(devWidth * 45/100, devHeight * 70/100, 10, 10);
  paddle.shapeColor = "white";
  ball.shapeColor = "white";
  score = 0;
  createEdgeSprites();
}

function draw(){
  background("black");
  text("SPACE TO START", devWidth*45/100, 20)
  text("SCORE : " + score, 10, 20);
  paddle.x = mouseX;
  if(keyDown("space")){
   ball.setVelocity(12, -10); 
 }
 if(ball.isTouching(paddle)){
   score = score + 100;
 }
  ball.bounceOff(edges);
  ball.bounceOff(paddle);
  if(ball.y >= paddle.y){
   text("GAME OVER", devWidth*47/100, devHeight * 40/100);
   ball.destroy()
 }
  drawSprites();
}

