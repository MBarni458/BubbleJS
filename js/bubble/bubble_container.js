export default class Bubble_container {
  constructor() {
    this.bubbleControllers = [];
  }

  add(bubble) {
    this.bubbleControllers.push(bubble);
  }

  action() {
    this.float();
    this.fade();
  }

  float() {
    this.bubbleControllers.forEach(bubbleController => bubbleController.float());
  }

  fade() {
    this.bubbleControllers = this.bubbleControllers.filter(bubbleController => !bubbleController.fadeAway());
  }

  setRadius(radius) {
    this.bubbleControllers.forEach(bubbleController => bubbleController.setRadius(radius));
  }

  clear() {
    this.bubbleControllers.forEach(bubbleController => bubbleController.clear());
    this.bubbleControllers = [];
  }

  removeBubble(bubbleController) {
    if (bubbleController.clear()) {
      let index = this.bubbleControllers.indexOf(bubbleController)
      this.bubbleControllers.splice(index, 1);
    }
  }

}
