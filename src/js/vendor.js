import '@babel/polyfill';
import svg4everybody from 'svg4everybody';
import $ from 'jquery';
import '../../node_modules/jquery.maskedinput/src/jquery.maskedinput';

svg4everybody();

window.$ = $;
window.jQuery = $;

require('ninelines-ua-parser');
