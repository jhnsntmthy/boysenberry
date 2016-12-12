// @flow
import _ from 'lodash';
import $ from 'jquery';
import mo from 'most';

var str:string = 'hello world!';
console.log(str);

import component from './play/component_hello'

document.body.appendChild(component());
const writetoDom = (str) => {
  $("#some").html("Character " + str);
}

mo.from([1,2,3,4])
  .map(x => String.fromCharCode(x + 72))
  .tap(x => console.log(x))
  .tap(x => writetoDom(x))
  .subscribe({});
