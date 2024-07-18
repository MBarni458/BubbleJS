export function initResetButton(resetButtonID, bubbleContainer) {
  document.getElementById(resetButtonID).addEventListener('click', () => bubbleContainer.clear())
}
