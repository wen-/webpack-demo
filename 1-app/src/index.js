import _ from 'lodash';
import './style.css';
// import Icon from './bed.png';
import print from './print';

import { cube } from './math.js';
import { square1 } from './math1.js';

function component() {
  var element = document.createElement('div');
  var button = document.createElement('button');

  // // Lodash
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  // element.classList.add('hello');
  //
  button.innerHTML = 'console输出';

  button.onclick = print;
  // 将图像添加到我们现有的 div。
  // var myIcon = new Image();
  // myIcon.src = Icon;
  // element.appendChild(myIcon);
  element.appendChild(button);

  var element1 = document.createElement('pre');
  element1.innerHTML = [
     'Hello webpack!',
     '5 cubed is equal to ' + cube(5)
  ].join('\n\n');
  element.appendChild(element1);
  console.log("square(2):", square1(2));
  return element;
}

document.body.appendChild(component());
