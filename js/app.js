import Bubble from "./bubble/bubble.js";
import BubbleView from "./bubble/bubble_view.js";
import BubbleController from "./bubble/bubble_controller.js";
import Bubble_container from "./bubble/bubble_container.js";
import {initStartButton} from "./form/startbutton.js";
import {initResetButton} from "./form/resetbutton.js";
import {initMinBubbleSizeField} from "./form/bubble_size_slide.js";
import {bubbleSettings} from "./settings.js";
import {initHittableCheckbox} from "./form/hittable_checkbox.js";

const container = document.getElementById("bubbleContainer");
const startButtonID = "startButton";
const resetButtonID = "resetButton";
const minBubbleSizeFieldID = "BubbleSizeSlide";
const hitableCheckboxID = "hittableCheckbox";

let bubbleContainer;

window.onload = () => init();

function init() {
  bubbleContainer = new Bubble_container();
  initStartButton(startButtonID, bubbleContainer);
  initResetButton(resetButtonID, bubbleContainer);
  initMinBubbleSizeField(minBubbleSizeFieldID, bubbleContainer);
  initHittableCheckbox(hitableCheckboxID);
}


const containerWidth = document.body.clientWidth * 0.9;
const containerHeight = 600;

const newBubble = function (event) {
  if (container === event.target) {
    let bubble = new Bubble({left: 0, top: 0, right: containerWidth, bottom: containerHeight}, {
      x: event.offsetX - bubbleSettings.getInstance().diameter / 2,
      y: event.offsetY - bubbleSettings.getInstance().diameter / 2,
    });
    let bubbleController;
    let bubbleView = new BubbleView(bubble, container);
    bubbleView.addClickEvent(() => bubbleContainer.removeBubble(bubbleController));
    bubbleView.addMouseoverEvent(() => bubbleController.hit());
    bubbleController = new BubbleController(bubble, bubbleView);
    bubbleContainer.add(bubbleController);
  }
}

document.getElementById('bubbleContainer').addEventListener('click', newBubble);

