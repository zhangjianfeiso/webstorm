exports.install = function (Vue, options) {
    /**
     * 微信jssdk配置
     * @param opts
     * {
     *      url:'url_与配置页面的url一致'
     * }
     */
    Vue.prototype.initWx = function (opts){
        console.info('global__',this.$global.apiUrl);
        var url = this.$global.apiUrl + '/wechat/config';
        var $vm = this;
        this.$http.post(url, {'url': opts.url},{emulateJSON:true}).then(function (response) {
            if (response.body.code == 200) {
                $vm.wxConfig(response.body.data);
            } else {
                alert('错误_1_' + response.body.message);
            }
        }, function (error) {
            alert('错误_2_' + JSON.stringify(error));
        });
    };

    /**
     * 微信jssdk配置
     * @param wxObj
     */
    Vue.prototype.wxConfig = function (wxObj){
        wx.config({
            debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
            appId: wxObj.appId, // 必填，公众号的唯一标识
            timestamp: wxObj.timestamp, // 必填，生成签名的时间戳
            nonceStr: wxObj.nonceStr, // 必填，生成签名的随机串
            signature: wxObj.signature,// 必填，签名
            jsApiList: [ 'checkJsApi',
                'updateTimelineShareData',//分享朋友圈
                'updateAppMessageShareData',//分享微信好友
                'onMenuShareTimeline', //
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
    };

    /**
     * 分享朋友圈、微信好友、QQ好友、QQ空间
     * @param opts
     *  {
     *      title:'标题',
     *      desc:'描述',
     *      link:'分享页面链接',
     *      img:'缩略图'
     *  }
     */
    Vue.prototype.share = function (opts) {
        var shareData = {
            title: opts.title,
            desc: opts.desc?opts.desc:'好的东西我都想与你一起分享~',//这里请特别注意是要去除html
            link: opts.link, //分享页面链接
            imgUrl: opts.img //缩略图
        };
        if(wx.onMenuShareAppMessage){ //微信文档中提到这两个接口即将弃用，故判断
            wx.onMenuShareAppMessage(shareData);//1.0 分享到朋友
            wx.onMenuShareTimeline(shareData);//1.0分享到朋友圈
        }else{
            wx.updateAppMessageShareData(shareData);//1.4 分享到朋友
            wx.updateTimelineShareData(shareData);//1.4分享到朋友圈
        }
    }
};
