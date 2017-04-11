import Vue from 'vue';
import router from './router.js';
import store from './vuex/';
import './config/rem'
import zepto from 'webpack-zepto';
import FastClick from 'fastclick';

if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}

new Vue({
    router,
    store,
}).$mount('#app');

window.$ = zepto;
window.vue = Vue;