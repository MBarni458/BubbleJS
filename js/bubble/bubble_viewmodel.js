export default class BubbleViewmodel {
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

  clear() {
    this.bubbleView.remove();
  }

}
