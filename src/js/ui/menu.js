/* eslint-env browser, jquery */
import $ from 'jquery';

$('.click-toggle-menu').on('click', $.debounce(250, () => {
  $('.overlay').fadeToggle(200);
  $(this).toggleClass('btn-open').toggleClass('btn-close');
}));

$('.overlay').on('click', $.debounce(250, () => {
  $('.overlay').fadeToggle(200);
  $('.button a').toggleClass('btn-open').toggleClass('btn-close');
}));
