/* eslint-env browser, jquery */
import $ from 'jquery';

$(document).on('click', '[data-nav]', (event) => {
  const next = $(event.target).closest('[data-nav]').attr('data-nav');
  $(document).trigger('hucklebuck', [next]);
});

$(document).on('click', '#next-up', (event) => {
  const next = $(event.target).attr('data-next-up');
  $(document).trigger('hucklebuck', [next]);
});

$(document).on('click', '.cust-btn', (event) => {
  const $target = $(event.currentTarget);
  const next = $target.attr('data-target');
  $(document).trigger('hucklebuck', [next]);
});

$(document).on('click', '.trigger-next', () => {
  $(document).trigger('hucklebuck', ['next']);
});

$(document).on('click', '.trigger-back', () => {
  $(document).trigger('hucklebuck', ['prev']);
});

$(document).on('touchstart', 'a', (event) => {
  $(event.target).trigger('click');
});
