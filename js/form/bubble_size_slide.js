import {bubbleSettings} from "../settings.js";

let bubbleContainer;
let bubble_size_slide;

export function initMinBubbleSizeField(minBubbleSizeFiledID, newBubbleContainer) {
  bubble_size_slide = document.getElementById(minBubbleSizeFiledID);
  bubbleContainer = newBubbleContainer;
  bubble_size_slide.addEventListener("change", (event) => setRadius(event))
}

function setRadius(event) {
  bubbleContainer.setRadius(event.target.value);
  bubbleSettings.getInstance().diameter = parseInt(event.target.value);
}
