import Vue from 'vue';
import App from './App.vue';
import router from './router.js';
import zepto from 'webpack-zepto'

// 开启debug模式
Vue.config.debug = true;

new Vue({
    router: router,
    render: h => h(App)
}).$mount('#app');

window.$ = zepto;
