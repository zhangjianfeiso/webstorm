// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vue_resource from 'vue-resource';
import wx from 'weixin-js-sdk';
import global from '@/components/global.vue';
import common from './common.js';

Vue.use(vue_resource);
Vue.use(wx);
Vue.use(common);

Vue.config.productionTip = false;
Vue.prototype.$global = global;


/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: {App},
    template: '<App/>',
    mounted:function () {
        this.setShareOpenid();
    },
    methods:{

    }
})
