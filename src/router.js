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
                redirect: '/login'
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
                component: require('./view/rights/rights')              //我的权益
            },{
                name: 'rightsNote',
                path: '/rightsNote/:type',
                component: require('./view/rights/rightsNote')          //权益文案
            },{
                name: 'vipRule',
                path: '/vipRule',
                component: require('./view/vipRule')                    //会员制度
            },{
                name: 'gift',
                path: '/gift',
                component: require('./view/gift')                       //积分兑礼
            },{
                name: 'formConfirm',
                path: '/formConfirm/:type',
                component: require('./view/formConfirm')                //积分兑礼或者使用申请提交
            },{
                name: 'usageRecord',
                path: '/usageRecord',
                component: require('./view/usageRecord')                //兑礼及试用记录
            },{
                name: 'trial',
                path: '/trial',
                component: require('./view/trial')                      //试用申请
            },{
                name: 'earnRecord',
                path: '/earnRecord',
                component: require('./view/earnRecord')                 //获取积分记录
            },{
                name: 'signBoard',
                path: '/signBoard',
                component: require('./view/sign/signBoard')             //每日签到
            },{
                name: 'signNote',
                path: '/signNote',
                component: require('./view/sign/signNote')              //每日签到说明
            },
            ]
        }, 
        {
            path: '*',
            redirect: '/login'
        }
    ]
})
