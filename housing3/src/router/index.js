import Vue from 'vue'
import Router from 'vue-router'
import vhome from '@/components/home'
import vwarn from '@/components/common/warn'
import vhome_list from '@/components/home/list'
import vhome_records from '@/components/home/records'
import vhome_map from '@/components/home/map'


import vcustom from '@/components/custom'
import vcustom_list from '@/components/custom/list'
import vcustom_detail from '@/components/custom/detail'
import vcustom_progress from '@/components/custom/progress'

import vuser from '@/components/user'
import vuser_list from '@/components/user/list'
import vuser_qrcode from '@/components/user/qrcode'
import vuser_info from '@/components/user/info'
import vuser_broker from '@/components/user/broker'
import vuser_plug from '@/components/user/plug'
import vlogin from '@/components/login'
import vregister from '@/components/register'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {path:'/login',name:'login',component: vlogin},
        {path:'/warn',name:'warn',component: vwarn},
        {path:'/register',name:'register',component: vregister},
        {path: '/', name: 'home',component: vhome,children:[
            {path:'', name: 'home_list',component:vhome_list},
            {path:'/records', name: 'home_records',component:vhome_records},
            {path:'/map', name: 'home_map',component:vhome_map}
        ]},
        {path: '/custom', name: 'custom',component: vcustom,children:[
            {path:'',name:'custom_list',component:vcustom_list},
            {path:'/detail',name:'detail',component:vcustom_detail},
            {path:'/progress',name:'progress',component:vcustom_progress}
        ]},
        {path: '/user', name:'user',component:vuser,children:[
            {path:'',name:'user_list',component:vuser_list},
            {path:'/qrcode',name:'user_qrcode',component:vuser_qrcode},
            {path:'/info',name:'user_info',component:vuser_info},
            {path:'/broker',name:'broker',component:vuser_broker},
            {path:'/plug',name:'plug',component:vuser_plug}
        ]}
    ]
})
