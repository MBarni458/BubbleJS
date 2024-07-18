import {bubbleSettings} from "../settings.js";

export function initFadeCheckbox(fadeCheckboxID) {
  document.getElementById(fadeCheckboxID).addEventListener('click', () => {
    bubbleSettings.getInstance().fade = !bubbleSettings.getInstance().fade
  });
}
