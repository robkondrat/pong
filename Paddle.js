class Paddle {
  constructor(x) {
    this.x = x;
    this.y = height / 2;
    this.height = 80;
    this.width = 20;

    this.isUp = false;
    this.isDown = false;
  }

  display() {
    fill(255);
    rect(this.x, this.y, this.width, this.height);
  }

  up() {
    this.y -= 2;
  }

  down() {
    this.y += 2;
  }
}