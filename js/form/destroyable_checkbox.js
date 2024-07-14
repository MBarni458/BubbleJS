import {bubbleSettings} from "../settings.js";

export function initDestroyableCheckbox(destroyableCheckboxID) {
  document.getElementById(destroyableCheckboxID).addEventListener('click', () => {
    bubbleSettings.getInstance().destroyable = !bubbleSettings.getInstance().destroyable
  });
}
