import Bubble from "./bubble/bubble.js";
import BubbleView from "./bubble/bubble_view.js";
import BubbleController from "./bubble/bubble_controller.js";
import Bubble_container from "./bubble/bubble_container.js";
import {initializeStartButton} from "./form/startbutton.js";

const container = document.getElementById("bubbleContainer");
const startButtonID = "startButton";

let bubbleContainer;

window.onload = () => init();

function init() {
  bubbleContainer = new Bubble_container();
  initializeStartButton(startButtonID, bubbleContainer);
}


const containerWidth = document.body.clientWidth * 0.9;
const containerHeight = 600;

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

document.getElementById('bubbleContainer').addEventListener('click', newBubble);
document.getElementById('clearButton').addEventListener('click', bubbleContainer.clear)
