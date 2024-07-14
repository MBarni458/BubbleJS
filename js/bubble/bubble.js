import {bubbleSettings} from "../settings.js";

export default class Bubble {
  constructor(areaCoordinates, position = bubbleSettings.getInstance().position) {
    let defaultSettings = bubbleSettings.getInstance();
    this.diameter = defaultSettings.diameter + Math.floor(Math.random() * defaultSettings.diameterVariety * 2 - defaultSettings.diameterVariety);
    this.position = placeInsideTheContainer(position, areaCoordinates, this.diameter);
    this.color = {
      r: Math.floor(Math.random() * defaultSettings.color.r + 1),
      g: Math.floor(Math.random() * defaultSettings.color.g + 1),
      b: Math.floor(Math.random() * defaultSettings.color.b + 1),
    }
    console.log(this.color);
    this.areaCoordinates = areaCoordinates;
    this.velocity = Math.random() * defaultSettings.maxVelocity + defaultSettings.minVelocity;
    this.directionAngle = Math.random() * defaultSettings.maxDirectionAngle + defaultSettings.minDirectionAngle;
    this.xVelocity = this.velocity * Math.cos(this.directionAngle);
    this.yVelocity = this.velocity * Math.sin(this.directionAngle);
  }

  setAreaCoordinates(areaCoordinates) {
    this.areaCoordinates = areaCoordinates;
  }

  setPosition(position) {
    this.position = position;
  }

  setRadius(diameter) {
    this.diameter = diameter;
  }

  setColor(color) {
    this.color = color;
  }

  setDirectionAngle(directionAngle) {
    this.directionAngle = directionAngle;
    this.xVelocity = this.velocity * Math.cos(directionAngle);
    this.yVelocity = this.velocity * Math.sin(directionAngle);
  }

  setVelocity(velocity) {
    this.velocity = velocity;
    this.xVelocity = velocity * Math.cos(this.directionAngle);
    this.yVelocity = velocity * Math.sin(this.directionAngle);
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
    if (this.position.x <= this.areaCoordinates.left || this.position.x + this.diameter * 1 >= this.areaCoordinates.right) {
      this.xVelocity = -this.xVelocity;
    } else if (this.position.y <= this.areaCoordinates.top || this.position.y + this.diameter * 1 >= this.areaCoordinates.bottom) {
      this.yVelocity = -this.yVelocity;
    }
  }
}

function placeInsideTheContainer(position, areaCoordinates, radius) {
  return {
    x: Math.max(Math.min(position.x, areaCoordinates.right - radius - 1), areaCoordinates.left + 1),
    y: Math.max(Math.min(position.y, areaCoordinates.bottom - radius - 1), areaCoordinates.top + 1)
  }
}
