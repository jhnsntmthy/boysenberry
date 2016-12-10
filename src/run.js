// @flow
import _ from 'lodash';

var str:string = 'hello world!';
console.log(str);

const component = () => {
  let element = document.createElement('div');

  /* lodash is required for the next line to work */
  element.innerHTML = _.map(['Hello','webpack'], (item) => item + ' ');

  return element;
}

document.body.appendChild(component());
