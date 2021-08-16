var paddle, ball, score;
function setup(){
  createCanvas(400,400);
  paddle = createSprite(200,360,70,10);
  ball = createSprite(200, 340, 10, 10);
  paddle.shapeColor = "white";
  ball.shapeColor = "white";
  score = 0;
  createEdgeSprites();
}

function draw(){
  background("black");
  text("SPACE TO START", 290,20)
  text("SCORE : " + score, 10, 20);
  paddle.x = mouseX;
  if(keyDown("space")){
   ball.setVelocity(7, -5); 
 }
 if(ball.isTouching(paddle)){
   score = score + 100;
 }
  ball.bounceOff(edges);
  ball.bounceOff(paddle);
  if(ball.y >= paddle.y){
   text("GAME OVER", 160, 200);
   ball.destroy()
 }
  drawSprites();
}

