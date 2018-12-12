// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import YDUI from 'vue-ydui'
/* 相当于import YDUI from 'vue-ydui/ydui.rem.js' */
import 'vue-ydui/dist/ydui.rem.css'
import {NavBar, NavBarBackIcon, NavBarNextIcon} from 'vue-ydui/dist/lib.rem/navbar'
import {TabBar, TabBarItem} from 'vue-ydui/dist/lib.rem/tabbar'
import {Layout} from 'vue-ydui/dist/lib.rem/layout'
import {CitySelect} from 'vue-ydui/dist/lib.rem/cityselect'
import {Popup} from 'vue-ydui/dist/lib.rem/popup'
import VueJsonp from 'vue-jsonp'
import VueResource from 'vue-resource'
import {ActionSheet} from 'vue-ydui/dist/lib.rem/actionsheet'
import global from '@/components/common/global'
import common from '@/common.js'

Vue.use(common)
Vue.prototype.$global = global
Vue.component(ActionSheet.name, ActionSheet)
Vue.use(VueResource)
Vue.use(VueJsonp)
Vue.use(YDUI)
Vue.component(NavBar.name, NavBar)
Vue.component(NavBarBackIcon.name, NavBarBackIcon)
Vue.component(NavBarNextIcon.name, NavBarNextIcon)
Vue.component(TabBar.name, TabBar)
Vue.component(TabBarItem.name, TabBarItem)
Vue.component(Layout.name, Layout)
Vue.component(Popup.name, Popup)
Vue.component(CitySelect.name, CitySelect)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: {App},
    template: '<App/>'
})
