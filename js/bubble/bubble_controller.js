export default class BubbleController {
  constructor(bubble, bubbleView) {
    this.bubble = bubble;
    this.bubbleView = bubbleView;
  }

  float() {
    this.bubble.float();
    this.bubbleView.float(this.bubble.position);
  }

  fadeAway() {
    let color = this.bubble.fade();
    if (color.r >= 255 && color.g >= 255 && color.b >= 255) {
      this.clear();
      return true;
    }
    this.bubbleView.fade(color);
    return false;
  }

  clear(overrideSettings = false) {
    if (overrideSettings || this.bubble.destroy()) {
      this.bubbleView.remove();
      return true;
    }
    return false;
  }

  setRadius(diameter) {
    this.bubble.setRadius(diameter);
    this.bubbleView.setRadius(diameter);
  }

  hit(directionAngle = Math.random() * 360, velocity = this.bubble.velocity * 1.3) {
    this.bubble.hit(directionAngle, velocity);
  }

  changeDirection(directionAngle = Math.random() * 360, velocity = this.bubble.velocity * 1.3) {
    this.bubble.setDirectionAngle(directionAngle);
    this.bubble.setVelocity(velocity);
  }

}
