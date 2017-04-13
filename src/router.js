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
            },{
                name: 'home',
                path: '/home',
                component: require('./view/home')                       //首页
            },{
                name: 'login',
                path: '/login',
                component: require('./view/login')                      //登录
            },{
                name: 'userCenter',
                path: '/userCenter',
                component: require('./view/userCenter')                 //会员中心
            },{
                name: 'userInfo',
                path: '/userInfo',
                component: require('./view/userInfo')                   //完善资料
            },{
                name: 'rights',
                path: '/rights',
                component: require('./view/rights')                     //我的权益
            },{
                name: 'vipRule',
                path: '/vipRule',
                component: require('./view/vipRule')                    //会员制度
            },
            ]
        }, 
        {
            path: '*',
            redirect: '/home'
        }
    ]
})
