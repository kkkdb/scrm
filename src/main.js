import Vue from 'vue';
import router from './router.js';
import store from './vuex/';
import './config/rem'
import FastClick from 'fastclick';

if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}

store.state.alVue = Vue;

new Vue({
    router,
    store,
}).$mount('#app');