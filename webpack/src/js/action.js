import { myButton, myPara } from './app.js';
import { consoleMsg } from './log.js';

myButton.addEventListener('click', updateMyButton);

function updateMyButton() {
  console.log(consoleMsg);
  myButton.textContent = 'New Button';
  myPara.textContent = 'Updated Paragraph';
}
