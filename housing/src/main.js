// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vue_resource from 'vue-resource';
import wx from 'weixin-js-sdk';

Vue.use(vue_resource);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: {App},
    template: '<App/>',
    mounted:function () {
        alert('openid___'+this.$route.query.openid);
        sessionStorage.setItem('share_openid',this.$route.query.openid)
        this.initWx();
    },
    methods:{
        initWx: function () {
            var url = 'http://15n3e97143.imwork.net/wechat/config';
            var $vm = this;
            this.$http.post(url, {'url': location.href},{emulateJSON:true}).then(function (response) {
                if (response.body.code == 200) {
                    $vm.wxConfig(response.body.data);
                } else {
                    alert('错误_1_' + response.body.message);
                }
            }, function (error) {
                alert('错误_2_' + JSON.stringify(error));
            });
        },
        wxConfig: function (wxObj) {
            alert('成功___' + JSON.stringify(wxObj));
            wx.config({
                debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                appId: wxObj.appId, // 必填，公众号的唯一标识
                timestamp: wxObj.timestamp, // 必填，生成签名的时间戳
                nonceStr: wxObj.nonceStr, // 必填，生成签名的随机串
                signature: wxObj.signature,// 必填，签名
                jsApiList: [ 'checkJsApi',
                    'updateTimelineShareData',//分享朋友圈
                    'updateAppMessageShareData',
                    'onMenuShareTimeline',
                    'onMenuShareAppMessage',
                    'onMenuShareQQ',
                    'onMenuShareWeibo',
                    'onMenuShareQZone',
                    'startRecord',
                    'stopRecord',
                    'translateVoice',
                    'scanQRCode',
                    'openCard' ] // 必填，需要使用的JS接口列表
            });
            wx.ready(function() {
                alert('success');
            });
            wx.error(function(res) {
                // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
                alert('error');
            });

        },
    }
})
