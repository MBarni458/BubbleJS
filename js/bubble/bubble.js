export default class Bubble {
  constructor(areaCoordinates, position = {
    x: 0,
    y: 0
  }, radius = Math.random() * 10 + 15, color = {
    r: Math.random() * 255,
    g: Math.random() * 255,
    b: Math.random() * 255
  }, velocity = Math.random() * 10, directionAngle = Math.random() * 360) {
    this.position = position;
    this.radius = radius;
    this.color = color;
    this.areaCoordinates = areaCoordinates;
    this.xVelocity = velocity * Math.cos(directionAngle);
    this.yVelocity = velocity * Math.sin(directionAngle);
  }

  float() {
    this.bounce();
    this.position = {
      x: this.position.x + this.xVelocity,
      y: this.position.y + this.yVelocity,
    };
  }

  fade() {
    this.color.r++;
    this.color.g++;
    this.color.b++;
    return this.color;
  }

  bounce() {
    if (this.position.x <= this.areaCoordinates.left || this.position.x + this.radius >= this.areaCoordinates.right) {
      this.xVelocity = -this.xVelocity;
    } else if (this.position.y <= this.areaCoordinates.top || this.position.y + this.radius >= this.areaCoordinates.bottom) {
      this.yVelocity = -this.yVelocity;
    }
  }
}
