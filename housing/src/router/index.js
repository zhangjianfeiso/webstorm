import Vue from 'vue'
import Router from 'vue-router'

import vlogin from '@/components/login.vue'
import vindex from '@/views/index.vue'
import vcustom from '@/views/custom.vue'
import vdynamic from '@/views/dynamic.vue'
import vuser from '@/views/user.vue'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/login',
      name: 'login',
      component: vlogin
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
    },{
      path: '/user',
      name: 'user',
      component: vuser
    }
  ]
})
