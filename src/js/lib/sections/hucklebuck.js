/* eslint-env browser, jquery */
import $ from 'jquery';
import './hucklebuck_buttons';
// import createHistory from './prehistoric/history';

// const { push, history } = createHistory();
// history.observe(dat => console.log('HISTORICAL', dat));

const sections_prefetched = {};
const sections_order = [];
window.current_section = '';

$(document).on('section::loaded', (e, slug, order, body) => {
  sections_prefetched[slug] = body;
  sections_order[order] = slug;
});

const renderSectionBySlug = (slug) => {
  console.log(`Rendering Section by Slug: ${slug}`);
  if (sections_prefetched[slug] !== undefined) {
    // push('/'+slug, { state: slug });
    document.getElementById('content').innerHTML = sections_prefetched[slug];
    $(document).trigger('hucklebucked', [slug]);
    return slug;
  } else {
    document.getElementById('content').innerHTML = sections_prefetched['404'];
    $(document).trigger('404page');
    return '404';
  }
};

const renderSectionByNumber = (i) => {
  console.log(`Rendering Section by #${i}`);
  return renderSectionBySlug(sections_order[i]);
};

const renderSectionNext = (slug) => {
  const index = sections_order.indexOf(slug);
  if (index > sections_order - 1) return slug;
  return renderSectionBySlug(sections_order[index + 1]);
};

const renderSectionPrev = (slug) => {
  const index = sections_order.indexOf(slug);
  if (index <= 0) return slug;
  return renderSectionBySlug(sections_order[index - 1]);
};

const hucklebuck = (slug_or_num) => {
  let slug = slug_or_num;
  if (Number.isInteger(slug_or_num)) {
    slug = renderSectionByNumber(slug_or_num);
  } else if (slug_or_num === 'next') {
    slug = renderSectionNext(window.current_section);
  } else if (slug_or_num === 'prev') {
    slug = renderSectionPrev(window.current_section);
  } else {
    slug = renderSectionBySlug(slug);
  }
  $(document).trigger('post-hucklebucked', [slug]);
};

$(document).on('hucklebuck', (event, slug_or_num) => {
  console.log('hucklebuck called', slug_or_num);
  hucklebuck(slug_or_num);
});

$(document).on('hucklebucked', (e, slug) => {
  window.current_section = slug;
});

window.hucklebuck = (slug_or_num) => {
  $(document).trigger('hucklebuck', [slug_or_num]);
};
