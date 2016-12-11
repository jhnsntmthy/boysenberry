// @flow
import _ from 'lodash';
import $ from 'jquery';
var str:string = 'hello world!sdfsdf';
console.log(str);

import component from './play/component_hello' 

document.body.appendChild(component());
$(document).ready(() => alert('fabulous'));
