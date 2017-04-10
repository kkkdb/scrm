import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
    // base: '#/',
    routes: [{
            path: '/index',
            name: 'index',
            component: require('./view/index'),
            children: [
            {
                name: 'home',
                path: 'home',
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
