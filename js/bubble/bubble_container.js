export default class Bubble_container {
  constructor() {
    this.bubbleViewModels = [];
  }

  add(bubble) {
    this.bubbleViewModels.push(bubble);
  }

  action() {
    this.float();
    this.fade();
  }

  float() {
    this.bubbleViewModels.forEach(bubbleVM => bubbleVM.float());
  }

  fade() {
    this.bubbleViewModels = this.bubbleViewModels.filter(bubbleVM => !bubbleVM.fadeAway());
  }

  clear() {
    this.bubbleViewModels.forEach(bubbleVM => bubbleVM.clear());
    this.bubbleViewModels = [];
  }

  removeBubble(bubbleViewmodel) {
    bubbleViewmodel.clear();
    let index = this.bubbleViewModels.indexOf(bubbleViewmodel)
    this.bubbleViewModels.splice(index, 1);
  }

}
