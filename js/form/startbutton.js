const startText = "Start Animation";
const stopText = "Stop Animation";

let interval = null;
let bubbleContainer = null;
let startButton;

export function initializeStartButton(startButtonID, newBubbleContainer) {
  startButton = document.getElementById(startButtonID);
  startButton.addEventListener('click', startOrStop);
  bubbleContainer = newBubbleContainer;
}

const startOrStop = function () {
  if (startButton.innerHTML === startText) {
    if (bubbleContainer == null) {
      console.log("BubbleContainer is not initialized");
    }
    interval = setInterval(() => {
      bubbleContainer.action()
    }, 60);
    startButton.innerHTML = stopText;
  } else {
    clearInterval(interval)
    startButton.innerHTML = startText;
  }
}



