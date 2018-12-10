// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'




/**jdui*/

import YDUI from 'vue-ydui'; /* 相当于import YDUI from 'vue-ydui/ydui.rem.js' */
import 'vue-ydui/dist/ydui.rem.css';
import 'vue-ydui/dist/ydui.base.css';

Vue.use(YDUI);
import {NavBar, NavBarBackIcon, NavBarNextIcon} from 'vue-ydui/dist/lib.rem/navbar';
Vue.component(NavBar.name, NavBar);
Vue.component(NavBarBackIcon.name, NavBarBackIcon);
Vue.component(NavBarNextIcon.name, NavBarNextIcon);
import {TabBar, TabBarItem} from 'vue-ydui/dist/lib.rem/tabbar';
Vue.component(TabBar.name, TabBar);
Vue.component(TabBarItem.name, TabBarItem);
import {Layout} from 'vue-ydui/dist/lib.rem/layout';
Vue.component(Layout.name, Layout);
import {Popup} from 'vue-ydui/dist/lib.rem/popup';
Vue.component(Popup.name, Popup);
import {CitySelect} from 'vue-ydui/dist/lib.rem/cityselect';
Vue.component(CitySelect.name, CitySelect);

/**jdui*/



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
