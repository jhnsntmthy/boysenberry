/* eslint-env browser, jquery */
import $ from 'jquery';

window.jQuery = $;
window.$ = $;

console.log('jQuery is loaded', $);

// $.debounce = ( delay, at_begin, callback ) => {
//   return callback === undefined
//     ? jq_throttle( delay, at_begin, false )
//     : jq_throttle( delay, callback, at_begin !== false );
// };


export default $;
