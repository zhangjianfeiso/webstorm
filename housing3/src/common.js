import wx from 'weixin-js-sdk';

export default {
    install: function (Vue) {
        /**
         * 微信jssdk配置
         * @param opts
         *
         * { url:'url_与配置页面的url一致' }
         */
        Vue.use(wx)

        /**
         * 检测是否为微信客户端
         */
        Vue.prototype.isWx = function () {
            var iswx = navigator.userAgent.toLowerCase().match(/MicroMessenger/i) == 'micromessenger'
            if (!iswx && !this.$global.dev) {
                this.$router.push({path: '/warn'})
            }
        }

        /**
         * 保存分享者的openid
         */
        Vue.prototype.setShareUser = function () {
            sessionStorage.setItem('share_openid', this.$route.query.shareUser ? this.$route.query.shareUser : '')
            var shareUser = this.$route.query.shareUser
            if (shareUser) {
                sessionStorage.setItem('share_openid', shareUser ? shareUser : '')
            }
        }

        /**
         * 获取分享者的openid
         */
        Vue.prototype.getShareUser = function () {
            return sessionStorage.getItem('share_openid') ? JSON.parse(sessionStorage.getItem('share_openid')) : ''
        }

         /**
         * redirectUri 微信授权uri (用户无感知授权)
         * @param redirectUri
         * @returns {string}
         */
        Vue.prototype.redirectUri = function (redirectUri) {
            var appid = this.$global.appid;
            return `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appid}&redirect_uri=${redirectUri}&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect`
        }

        Vue.prototype.auth = function () {
            let iswx = navigator.userAgent.toLowerCase().match(/MicroMessenger/i) == 'micromessenger';
            if (iswx) {
                var code = sessionStorage.getItem('weixin-redirect-code');
                var params = this.$route.query;
                if (!params.code && !code) {
                    window.location.replace(this.redirectUri(location.href));
                } else if (!code) {
                    sessionStorage.setItem('weixin-redirect-code', params.code);
                    history.back();
                }
            }
            // window.location.replace(this.redirectUri(location.href));
        }

        /**
         * code 换取 openid
         * @returns {*} openid nickname
         */
        Vue.prototype.getOpenId = function () {
            var user = sessionStorage.getItem('user');
            user = '{"openid":"alkLklk-KLKLakdad12839088JK","nickname":"__________张","identity":2}'
            if (user) {
                return Promise.resolve(JSON.parse(user));
            }
            var code = this.$route.query.code;
            if (code) {
                var url = this.$global.apiUrl + '/api/openid'
                return this.$http.post(url, {code: code}, {emulateJSON: true}).then(function (response) {
                    let iswx = navigator.userAgent.toLowerCase().match(/MicroMessenger/i) == 'micromessenger'
                    if (iswx) {
                        sessionStorage.removeItem('weixin-redirect-code')
                    }
                    if (response.body.code == 200) {
                        //alert('user_2_'+JSON.stringify(response.body.data));
                        sessionStorage.setItem('user', JSON.stringify(response.body.data))
                        return Promise.resolve(response.body.data)
                    } else {
                        //alert('错误_1_' + response.body.message);
                        return Promise.resolve(response.body.message)
                    }
                }, function (error) {
                    //alert('错误_2_' + JSON.stringify(error));
                    return Promise.resolve(error)
                })
            }else{
                this.auth();
            }
            return Promise.resolve('')

        }

        /**
         * 初始化微信jssdk
         * @param opts
         * @returns {Promise.<TResult>|*}
         */
        Vue.prototype.initWx = function (opts) {
            console.info('initWx__', this.$global.apiUrl)
            var url = this.$global.apiUrl + '/wechat/config'
            return this.$http.post(url, {'url': opts.url}, {emulateJSON: true}).then(function (response) {
                if (response.body.code == 200) {
                    return Promise.resolve(response.body.data)
                } else {
                    console.info('错误_1_' + response.body.message)
                    return response.body.message
                }
            }, function (error) {
                console.info('错误_2_' + JSON.stringify(error))
                return error
            })

        }

        /**
         * 微信jssdk配置
         * @param wxObj
         */
        Vue.prototype.wxConfig = function (wxObj) {
            console.info('weConfig___', wxObj)
            wx.config({
                debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                appId: wxObj.appId, // 必填，公众号的唯一标识
                timestamp: wxObj.timestamp, // 必填，生成签名的时间戳
                nonceStr: wxObj.nonceStr, // 必填，生成签名的随机串
                signature: wxObj.signature,// 必填，签名
                jsApiList: ['checkJsApi',
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
                    'openCard'] // 必填，需要使用的JS接口列表
            })

        }

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
            wx.ready(function () {
                var shareData = {
                    title: opts.title,
                    desc: opts.desc ? opts.desc : '好的东西我都想与你一起分享~',//这里请特别注意是要去除html
                    link: opts.link, //分享页面链接
                    imgUrl: opts.img //缩略图
                }
                console.info('分享___', shareData)
                if (wx.onMenuShareAppMessage && wx.onMenuShareAppMessage && wx.onMenuShareQQ && wx.onMenuShareQZone) { //微信文档中提到这两个接口即将弃用，故判断
                    wx.onMenuShareAppMessage(shareData)//1.0 分享到朋友
                    wx.onMenuShareTimeline(shareData)//1.0分享到朋友圈
                    wx.onMenuShareQQ(shareData);//分享到QQ
                    wx.onMenuShareQZone(shareData); //分享到QQ空间
                } else {
                    wx.updateAppMessageShareData(shareData)//1.4 分享到朋友
                    wx.updateTimelineShareData(shareData)//1.4分享到朋友圈
                }

            })
            wx.error(function (res) {
                // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
                console.info('error')
            })
        }
     }
}

