export default class BubbleView {
  constructor(bubble, container, clear) {
    this.container = container;
    this.clear = clear;
    this.htmlElement = document.createElement("div");
    setStyle(this.htmlElement, bubble);
    container.appendChild(this.htmlElement);
  }

  float(position) {
    this.htmlElement.style.top = position.y + "px";
    this.htmlElement.style.left = position.x + "px";
  }

  fade(color) {
    this.htmlElement.style.backgroundColor = "rgb(" + color.r + ", " + color.g + ", " + color.b + ")";
  }

  remove() {
    this.container.removeChild(this.htmlElement);
  }

  addClickEvent(clickFunction) {
    this.htmlElement.addEventListener("click", clickFunction);
  }

  addMouseoverEvent(hitFunction) {
    this.htmlElement.addEventListener("mouseover", hitFunction);
  }

}

function setStyle(bubbleView, bubble) {
  bubbleView.className = "bubble";
  bubbleView.style.backgroundColor = "rgb(" + bubble.color.r + ", " + bubble.color.g + ", " + bubble.color.b + ")";
  bubbleView.style.width = bubble.radius + "px";
  bubbleView.style.height = bubble.radius + "px";
  bubbleView.style.top = bubble.position.y + "px";
  bubbleView.style.left = bubble.position.x + "px";
}
