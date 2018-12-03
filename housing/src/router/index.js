import Vue from 'vue'
import Router from 'vue-router'

import vlogin from '@/components/login.vue'
import vregister from '@/components/register.vue'
import vindex from '@/views/index.vue'
import vcustom from '@/views/custom.vue'
import vdynamic from '@/views/dynamic.vue'
import vuser from '@/views/user.vue'
import vdetail from '@/views/housing/detail.vue'


Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/login',
            name: 'login',
            component: vlogin
        },
        {
            path: '/register',
            name: 'register',
            component: vregister
        },
        {
            path: '/',
            name: 'index',
            component: vindex
        },
        {
            path: '/custom',
            name: 'custom',
            component: vcustom
        },
        {
            path: '/dynamic',
            name: 'dynamic',
            component: vdynamic
        }, {
            path: '/user',
            name: 'user',
            component: vuser
        },
        {
            path: '/housing/detail/:id',
            name: 'housing_detail',
            component: vdetail
        }
    ]
})
