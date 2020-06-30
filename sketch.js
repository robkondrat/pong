let playerPaddle;
let aiPaddle;
let ball;

function setup() {
  createCanvas(624, 351);
  playerPaddle = new Paddle(26);
  aiPaddle = new Paddle(width - 48);
  ball = new Ball();
}

function draw() {
  background(0);
  playerPaddle.display();
  aiPaddle.display();

  playerPaddle.update();
  aiPaddle.update();

  processAI();

  if (playerPaddle.isUp) {
    playerPaddle.up();
  } else if (playerPaddle.isDown) {
    playerPaddle.down();
  }

  ball.update();
  ball.display();
}

function keyPressed() {
  if (keyCode == UP_ARROW) {
    playerPaddle.isUp = true;
  } else if (keyCode == DOWN_ARROW) {
    playerPaddle.isDown = true;
  }
}

function keyReleased() {
  if (keyCode == UP_ARROW) {
    playerPaddle.isUp = false;
  } else if (keyCode == DOWN_ARROW) {
    playerPaddle.isDown = false;
  }
}

function processAI() {
  let middleOfPaddle = aiPaddle.y + aiPaddle.height / 2;

  if (middleOfPaddle > ball.y) {
    aiPaddle.isUp = true;
    aiPaddle.isDown = false;
  } else {
    aiPaddle.isDown = true;
    aiPaddle.isUp = false;
  }
}