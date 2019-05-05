import _ from 'lodash';
import './style.css';
import Icon from './bed.png';
import print from './print';

function component() {
  var element = document.createElement('div');
  var button = document.createElement('button');

  // Lodash
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  button.innerHTML = 'console.log';

  button.onclick = print;
  // 将图像添加到我们现有的 div。
  var myIcon = new Image();
  myIcon.src = Icon;
  //element.appendChild(myIcon);
  element.appendChild(button);

  return element;
}

document.body.appendChild(component());
