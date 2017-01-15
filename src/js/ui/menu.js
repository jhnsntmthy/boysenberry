/* eslint-env browser, jquery */
import $ from 'jquery';
import * as most from 'most';

// const menuLink = document.querySelector('.click-toggle-overlay-menu');
// const overlay = document.querySelector('.overlay');

const toggleMenu = () => {
  $('.overlay').fadeToggle(200);
  $('.button a').toggleClass('btn-open').toggleClass('btn-close');
};

most.fromEvent('click', document.querySelector('.click-toggle-overlay-menu'))
    .observe(e => toggleMenu(e));

most.fromEvent('click', document.querySelector('.overlay'))
    .observe(e => toggleMenu(e));


// $('.click-toggle-menu').on('click', $.debounce(250, () => {
//   $('.overlay').fadeToggle(200);
//   $(this).toggleClass('btn-open').toggleClass('btn-close');
// }));
//
// $('.overlay').on('click', $.debounce(250, () => {
//   $('.overlay').fadeToggle(200);
//   $('.button a').toggleClass('btn-open').toggleClass('btn-close');
// }));
