import Vue from 'vue'
import Router from 'vue-router'
import vindex from '@/components/index'
import vcustom from '@/components/custom'
import vcustom_list from '@/components/custom/list'
import vcustom_detail from '@/components/custom/detail'
import vcustom_progress from '@/components/custom/progress'

import vuser from '@/components/user'
import vuser_list from '@/components/user/list'
import vuser_qrcode from '@/components/user/qrcode'
import vuser_info from '@/components/user/info'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {path: '/', name: 'index',component: vindex},
        {path: '/custom', name: 'custom',component: vcustom,children:[
            {path:'',name:'custom_list',component:vcustom_list},
            {path:'detail',name:'detail',component:vcustom_detail},
            {path:'progress',name:'progress',component:vcustom_progress}
        ]},
        {path: '/user', name:'user',component:vuser,children:[
            {path:'',name:'user_list',component:vuser_list},
            {path:'qrcode',name:'user_qrcode',component:vuser_qrcode},
            {path:'info',name:'user_info',component:vuser_info}
        ]}
    ]
})
