import {bubbleSettings} from "../settings.js";

export function initHittableCheckbox(hittableCheckboxID) {
  document.getElementById(hittableCheckboxID).addEventListener('click', () => {
    bubbleSettings.getInstance().hittable = !bubbleSettings.getInstance().hittable
  });
}
