/* eslint-env browser, jquery */
import * as most from 'most';
import $ from 'jquery';
import marked from './marked';

const translations = {};
// when each translation is prefetched, store them in the translations object
$(document).on('translation::loaded', (e, locale, json) => {
  translations[locale] = json;
});

let current_locale = '';
const setLocale = locale => (current_locale = locale);
const getLocale = () => current_locale;

const getTranslatedText = (locale_json, key = '') =>
  key.split('.').reduce((o, i) => o[i], locale_json);


const translate = (element) => {
  const $el = $(element);
  const locale = translations[current_locale];
  if (locale === undefined) {
    return; // we are running too early before languages are setup
  }
  const translatedText = getTranslatedText(locale, $el.attr('data-i18n'));
  if (translatedText !== undefined) {
    $el
      .html(marked(translatedText))
      .attr('translated', locale);
  } else {
    console.error('translation failed', element, current_locale, locale, $el.attr('data-i18n'), translatedText);
  }
};

const documentEvents = {
  addListener: (type, lsnr) => $(document).on(type, lsnr),
  removeListener: (type, lsnr) => $(document).off(type, lsnr),
};
most.fromEvent('translatable', documentEvents)
    .map(params => params[1])
    .flatMap(elementArray => most.from(elementArray))
    .tap(translate)
    .drain();

export { setLocale, getLocale, translations };
