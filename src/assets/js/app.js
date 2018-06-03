import $ from 'jquery';
import whatInput from 'what-input';

// Vue.js
import Vue from 'vue'
import vueCustomElement from 'vue-custom-element'

import MyCustomElement from './components/my-custom-element';

Vue.use(vueCustomElement);

Vue.customElement('my-custom-element', MyCustomElement);
// end: Vue.js

window.$ = $;

import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';


$(document).foundation();
