class Ball {
  constructor() {
    this.r = 10;
    this.reset();
  }

  update() {
    if (this.y < this.r || this.y > height - this.r) {
      this.ySpeed = -this.ySpeed;
    }

    if (this.x < this.r || this.x > width + this.r) {
      this.reset();
    }

    this.x += this.xSpeed;
    this.y += this.ySpeed;
  }

  reset() {
    this.x = width/2;
    this.y = height/2;

    this.xSpeed = random(3, 4);

    let isLeft = random(1) > .5;
    if (isLeft) {
      this.xSpeed = -this.xSpeed;
    }

    this.ySpeed = random(-3, 3);
  }

  display() {
    ellipse(this.x, this.y, this.r * 2, this.r * 2);
  }
}