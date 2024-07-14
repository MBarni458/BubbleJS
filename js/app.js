import Bubble from "./bubble/bubble.js";
import BubbleView from "./bubble/bubble_view.js";
import BubbleController from "./bubble/bubble_controller.js";
import Bubble_container from "./bubble/bubble_container.js";

const container = document.getElementById("bubbleContainer");
const startButton = document.getElementById("startButton");

let bubbleContainer = new Bubble_container();

const startText = "Start Animation";
const stopText = "Stop Animation";

const containerWidth = document.body.clientWidth * 0.9;
const containerHeight = 600;

let interval = null;

const newBubble = function (event) {
  if (container === event.target) {
    let bubble = new Bubble({left: 0, top: 0, right: containerWidth, bottom: containerHeight}, {
      x: event.offsetX,
      y: event.offsetY
    });
    let bubbleController;
    let bubbleView = new BubbleView(bubble, container);
    bubbleView.addClickEvent(() => bubbleContainer.removeBubble(bubbleController));
    bubbleView.addMouseoverEvent(() => bubbleController.changeDirection());
    bubbleController = new BubbleController(bubble, bubbleView);
    bubbleContainer.add(bubbleController);
  }
}

const startOrStop = function () {
  if (startButton.innerHTML === startText) {
    interval = setInterval(() => {
      bubbleContainer.action()
    }, 60);
    startButton.innerHTML = stopText;
  } else {
    clearInterval(interval)
    startButton.innerHTML = startText;
  }
}

document.getElementById('bubbleContainer').addEventListener('click', newBubble);
document.getElementById('clearButton').addEventListener('click', bubbleContainer.clear)
startButton.addEventListener('click', startOrStop);
