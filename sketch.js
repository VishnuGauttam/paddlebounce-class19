var ball,paddle,ballImage,paddleImage;

function preload() {
 ballImage=loadImage("ball.png")
  
 paddleImage=loadImage("paddle.png")
}

function setup() {
  createCanvas(400, 400);
  
ball = createSprite(200,200,12,12);
ball.addImage("ball",ballImage);   
 
Paddle = createSprite(390,200,10,70); Paddle.addImage("paddle",paddleImage); 
  
ball.velocityX=9

}

function draw() {
  background(205,153,0);
  
  
 edges = createEdgeSprites();

  ball.bounceOff(edges[0]);
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);


 ball.bounceOff(Paddle,randomVelocity)
   

 Paddle.collide(edges);
  

 
  
  
  if(keyDown(UP_ARROW))
  {
    Paddle.velocityX=0
    Paddle.velocityY=-3
   
  }
  
  if(keyDown(DOWN_ARROW))
  {
    Paddle.velocityX=0
    Paddle.velocityY=3
   
  }
  drawSprites();
  
}

function randomVelocity()
{
 
ball.velocityY=random(4,-7)
  
}

