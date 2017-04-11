import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue';

Vue.use(VueRouter)

export default new VueRouter({
    // base: '#/',
    routes: [{
            path: '/',
            component: App, 
            children: [
            {
                path: '',
                redirect: '/home'
            },
            {
                name: 'home',
                path: '/home',
                component: require('./view/home')                       //首页
            }
            ]
        }, 
        {
            path: '*',
            redirect: '/home'
        }
    ]
})
