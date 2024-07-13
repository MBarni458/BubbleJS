import Bubble from "./bubble/bubble.js";
import BubbleView from "./bubble/bubble_view.js";
import BubbleViewmodel from "./bubble/bubble_viewmodel.js";
import Bubble_container from "./bubble/bubble_container.js";

const container = document.getElementById("bubbleContainer");
const startButton = document.getElementById("startButton");

let bubbleContainer = new Bubble_container();

const startText= "Start Animation";
const stopText = "Stop Animation";

const containerWidth = document.body.clientWidth*0.9;
const containerHeight = 600;

let interval = null;

const newBubble = function (event){
  if (container === event.target){
    let bubble= new Bubble({left:0, top:0,right:containerWidth, bottom:containerHeight} ,{x: event.offsetX, y: event.offsetY});
    let bubbleViewmodel;
    let bubbleView= new BubbleView(bubble, container, () => bubbleContainer.removeBubble(bubbleViewmodel));
    bubbleViewmodel = new BubbleViewmodel(bubble,bubbleView);
    bubbleContainer.add(bubbleViewmodel);
  }
}

const startOrStop = function (){
  if (startButton.innerHTML===startText){
    interval  = setInterval(()=> {bubbleContainer.action()},60);
    startButton.innerHTML=stopText;
  }else {
    clearInterval(interval)
    startButton.innerHTML = startText;
  }
}

document.getElementById('bubbleContainer').addEventListener('click', newBubble);
document.getElementById('clearButton').addEventListener('click',bubbleContainer.clear)
startButton.addEventListener('click', startOrStop);
