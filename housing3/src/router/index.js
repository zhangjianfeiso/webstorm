import Vue from 'vue'
import Router from 'vue-router'
import vindex from '@/components/index'
import vcustom from '@/components/custom'
import vcustom_list from '@/components/custom/list'
import vcustom_detail from '@/components/custom/detail'
import vmy from '@/components/my'
import vmy_list from '@/components/my/list'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {path: '/', name: 'index',component: vindex},
        {path: '/custom', name: 'custom',component: vcustom,children:[
            {path:'',name:'custom_list',component:vcustom_list},
            {path:'detail',name:'detail',component:vcustom_detail}
        ]},
        {path: '/my', name:'my',component:vmy,children:[
            {path:'',name:'my_list',component:vmy_list}
        ]}
    ]
})
