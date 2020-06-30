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
    if (this.y > 0) {
      this.y -= 2;      
    }
  }

  down() {
    if (this.y < height - this.height) {
      this.y += 2;    
    }
  }

  update() {
    if (this.isUp) {
      this.up();
    } else if (this.isDown) {
      this.down();
    }
  }
}