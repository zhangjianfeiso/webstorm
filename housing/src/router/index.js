import Vue from 'vue'
import Router from 'vue-router'

import vlogin from '@/components/login.vue'
import vregister from '@/components/register.vue'
import vindex from '@/views/index.vue'
import vcustom from '@/views/custom.vue'
import vdynamic from '@/views/dynamic.vue'
import vuser from '@/views/user.vue'
import vdetail from '@/views/housing/detail.vue'
import vqrcode from '@/views/qrcode/qrcode.vue'
import vwarn from '@/components/warn.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {path: '/',name: 'index',component: vindex }, //首页
        {path:'/warn',name:'warn',component: vwarn }, //提示微信打开页面
        {path: '/login',name: 'login',component: vlogin }, //登录页面
        {path: '/register',name: 'register',component: vregister }, //注册页面
        {path: '/custom',name: 'custom',component: vcustom }, //客户页面
        {path: '/dynamic', name: 'dynamic',component: vdynamic }, //动态页面
        {path: '/user', name: 'user',component: vuser }, //我的
        {path: '/housing/detail/:id', name: 'housing_detail', component: vdetail }, //楼盘详情
        {path: '/qrcode/:openid',name: 'qrcode',component: vqrcode } //二维码
    ]
})
