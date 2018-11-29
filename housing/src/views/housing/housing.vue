<style scoped>
    .housing-body {
        /*background: #FFEF14;*/
        padding: 10px 5px;
    }

    body {
        min-width: 320px;
    }

    .category {
        width: 100%;
        margin-top: 20px;
    }

    .category li {
        display: inline-block;
        width: 24%;
        text-align: center;
        padding: 30px 0 10px;
        background-size: 40px;
        background-repeat: no-repeat;
        background-position: top;
    }

    .category li span {
        margin: 15px 10px 0 10px;
    }

    .group {
        background-image: url("../../../static/images/icon_home_group@2x.png");
    }

    .self {
        background-image: url("../../../static/images/icon_home_self_service@2x.png");
    }

    .ship {
        background-image: url("../../../static/images/icon_home_ship@2x.png");
    }

    .ticket {
        background-image: url("../../../static/images/icon_home_ticket@2x.png");
    }

    .drive {
        background-image: url("../../../static/images/icon_home_drive@2x.png");
    }

    .visa {
        background-image: url("../../../static/images/icon_home_visa@2x.png");
    }

    .hotel {
        background-image: url("../../../static/images/icon_home_hotel@2x.png");
    }

    .hotspot {
        background-image: url("../../../static/images/icon_home_hotspot@2x.png");
    }

    img {
        width: 100%;
        height: 100%;
    }

    .imgs {
        padding: 10px 0;
        display: -webkit-box;
        width: 100%;
        background-color: #F0F0F0;
    }

    .imgs li {
        -webkit-box-flex: 1;
        height: 55px;
    }

    .imgs li:not(:last-child) {
        -webkit-box-flex: 1;
        border-right: 1px solid #EDEDEB;
        height: 55px;
    }

    .img:first-of-type {
        padding-top: 0;
    }

    .img {
        height: 124px;
        padding-top: 10px;
        background-color: #F4F4F4;
        position: relative;
        text-align: left;
    }

    dt {
        height: 35px;
        line-height: 35px;
        background: #3ABA63;
    }

    dt :first-child {
        width: 80%;
        padding-left: 10px;
        text-align: left;
        color:white;
    }

    dt :last-child {
        /*color: #3ABA63;*/
        color:white;
    }

    .detail {
        padding: 5px 10px;
        color: #A4A4A4;
        font-size: 10px;
        line-height: 18px;
        border-bottom: 1px solid #EDEDED;
        text-align: left;
    }

    .detail:first-line {
        color: #000000;
        font-size: 15px;
    }

    .price {
        font-size: 16px;
        padding-left: 10px;
        border-bottom: 1px solid #EDEDED;
        -webkit-box-flex: 1;
        line-height: 25px;
        text-align: left;
    }

    .newPrice {
        color: #F67570;
    }

    .oldPrice {
        color: #999999;
        font-size: 10px;
        margin-left: 15px;
    }

    .zero-buy {
        border-bottom: 1px solid #EDEDED;
        display: -webkit-box;

    }

    .zero-buy .price {
        border-bottom: none;
    }

    .buy {
        display: block;
        width: 20%;
        margin: 2px 5% 2px 0;
        background-color: #FC7924;
        color: #FFFFFF;
        text-align: center;
        padding: 5px 0;
        border-radius: 2px;
        height: 12px;
        font-size: 12px;
    }

    .together :first-child:not(p) {
        line-height: 30px;

    }

    .together li {
        margin-left: 10px;
    }

    .together li:not(:last-child) {
        border-bottom: 1px solid #EDEDED;
    }

    .together :not( :first-child):not(p) {
        height: 50px;
        background-size: 50px;
        background-repeat: no-repeat;
        background-position: left;
        background-image: url("../../../static/images/home_icon_hot@2x.png");
    }

    .together p {
        margin-left: 70px;
        line-height: 25px;
    }

    /*
    #757575
    */
    /*slide*/
    .swipe {
        overflow: hidden;
        /*visibility: hidden;*/
        position: relative;
    }

    .swipe-wrap {
        overflow: hidden;
        position: relative;
        height: 157px
    }

    .swipe-wrap > div {
        float: left;
        width: 100%;
        position: relative;
    }

    .swipe-wrap > div {
        overflow: hidden;
        position: relative;
    }

    .swipe-wrap img {
        width: 100%;
        height: auto;
        max-height: 240px;
        min-height: 132px;
        min-width: 320px;
        max-width: 640px;
    }

    #slide {
        margin: 0 auto;
        position: relative;
    }

    .lable {
        background-image: -webkit-linear-gradient(top, rgba(59, 59, 59, .6), rgba(27, 27, 27, .6), rgba(50, 50, 50, .4), rgba(31, 31, 31, .4));
        background-image: linear-gradient(top, rgba(59, 59, 59, .6), rgba(27, 27, 27, .6), rgba(50, 50, 50, .4), rgba(31, 31, 31, .4));
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 30px;
        line-height: 30px;
        padding-left: 20px;
        display: block;
        color: #fff;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }

    #pointer {
        position: absolute;
        bottom: 12px;
        overflow: hidden;
        width: 100%;
        text-align: center;
    }

    #pointer div {
        display: inline-block;
        width: 6px;
        height: 6px;
        border-radius: 6px;
        margin-right: 4px;
        background-color: #FFFFFF;
    }

    #pointer div.active {
        background-color: #999999;
    }

    .guarantee {
        overflow: hidden;
        padding-top: 15px;
    }

    .guarantee ul {
        display: -webkit-box;
    }

    .guarantee li {
        -webkit-box-flex: 1;
        padding: 5px 5px;
    }

    .guarantee li span {
        padding-left: 40%;
    }

    .guarantee li:not(:last-child) {
        border-right: 1px solid #EDEDEB;
    }


    .dl-group {
        border: 1px solid #D6D6D6;
        border-radius: 6px;
        margin-bottom: 10px;
    }
    .dl-group img{
        border-top-right-radius: 6px;
        border-top-left-radius:6px;
    }
    dt{
        margin-top: 10px;
    }
</style>


<template>
    <div class="housing-body">
        <div id='slide' class='swipe'>
            <div class='swipe-wrap' id="banner-content">
                <div onclick="openSlider('三峡好风景')" tapmode="">
                    <img src="../../../static/images/1.jpg"/>
                </div>
                <!--<div onclick="openSlider('三峡好风景')" tapmode="">
                    <img src="../../../static/images/2.jpg"/>
                </div>
                <div onclick="openSlider('三峡好风景')" tapmode="">
                    <img src="../../../static/images/3.jpg"/>
                </div>
                <div onclick="openSlider('三峡好风景')" tapmode="">
                    <img src="../../../static/images/4.jpg"/>

                </div>
                <div onclick="openSlider('三峡好风景')" tapmode="">
                    <img src="../../../static/images/5.jpg"/>

                </div>
                <div onclick="openSlider('三峡好风景')" tapmode="">
                    <img src="../../../static/images/6.jpg"/>

                </div>
                <div onclick="openSlider('三峡好风景')" tapmode="">
                    <img src="../../../static/images/7.jpg"/>
                </div>-->
            </div>
            <!--<div id="pointer">
                <div class="active"></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>-->
        </div>
        <ul class="category">
            <li class="group" @click="initWx('跟团游')" tapmode="">
                <span>跟团游</span>
            </li>
            <li class="self" @click="qrcode('自助游')" tapmode="">
                <span>扫一扫</span>
            </li>
            <li class="ship" @click="auth('游轮')" tapmode="">
                <span>登录</span>
            </li>
            <li class="ticket" onclick="openGroup('景点门票')" tapmode="">
                <span>景点门票</span>
            </li>
            <li class="drive" onclick="openGroup('自驾游')" tapmode="">
                <span>自驾游</span>
            </li>
            <li class="visa" onclick="openGroup('签证')" tapmode="">
                <span>签证</span>
            </li>
            <li class="hotel" onclick="openGroup('酒店')" tapmode="">
                <span>酒店</span>
            </li>
            <li class="hotspot" onclick="openGroup('牛无线')" tapmode="">
                <span>牛无线</span>
            </li>
        </ul>

        <dl>
            <dt><span>尾货专区</span><span>更多 ></span></dt>

            <div class="dl-group">
                <dd class="img" onclick="toDetail()" tapmode="">
                    <img src="../../../static/images/t1.jpg">
                    <div class="lable">10月21日 | 北京出发</div>
                </dd>
                <dd class="detail">
                    北京-西欧7晚9天极致自由行<br>
                    北京往返布鲁塞尔+1晚酒店，极致西欧自由的行走
                </dd>
                <dd class="price">
                    <span class="newPrice">￥3399</span>
                    <del class="oldPrice">￥6599</del>
                </dd>
            </div>

            <div class="dl-group">
                <dd class="img" onclick="toDetail()" tapmode="">
                    <img src="../../../static/images/t2.jpg">
                    <div class="lable">10月22日 | 北京出发</div>
                </dd>
                <dd class="detail">
                    北京-韩国首尔7日游<br>
                    超值游轮，汗蒸幕，乐天通票，奥特莱斯
                </dd>
                <dd class="price">
                    <span class="newPrice">￥1671</span>
                    <del class="oldPrice">￥3380</del>
                </dd>
            </div>

            <div class="dl-group">
                <dd class="img" onclick="toDetail()" tapmode="">
                    <img src="../../../static/images/t3.jpg">

                    <div class="lable">10月23日 | 北京出发</div>
                </dd>
                <dd class="detail">
                    北京-济州岛4日单机票<br>
                    单机票，北京往返，特价机票含税，限量供应
                </dd>
                <dd class="price">
                    <span class="newPrice">￥2099</span>
                    <del class="oldPrice">￥3260</del>
                </dd>
            </div>

            <div class="dl-group">
                <dd class="img" onclick="toDetail()" tapmode="">
                    <img src="../../../static/images/t4.jpg">

                    <div class="lable">10月24日 | 北京出发</div>
                </dd>
                <dd class="detail">
                    北京-苏梅随心5晚6日自助旅游<br>
                    赠送境外旅游意外险，2人即可成团
                </dd>
                <dd class="price">
                    <span class="newPrice">￥4199</span>
                    <del class="oldPrice">￥5699</del>
                </dd>
            </div>

            <div class="dl-group">
                <dd class="img" onclick="toDetail()" tapmode="">
                    <img src="../../../static/images/t5.jpg">

                    <div class="lable">10月25日 | 北京出发</div>
                </dd>
                <dd class="detail">
                    俄罗斯-贝加尔湖休闲4日游<br>
                    世界最深湖，休闲胜地，只要3999
                </dd>
                <dd class="price">
                    <span class="newPrice">￥3999</span>
                    <del class="oldPrice">￥6599</del>
                </dd>
            </div>

            <div class="dl-group">
                <dd class="img" onclick="toDetail()" tapmode="">
                    <img src="../../../static/images/t6.jpg">

                    <div class="lable">10月26日 | 北京出发</div>
                </dd>
                <dd class="detail">
                    莫斯科-圣彼得堡8日游<br>
                    海航往返，克里姆林宫，卡洛明斯克庄园
                </dd>
                <dd class="price">
                    <span class="newPrice">￥4399</span>
                    <del class="oldPrice">￥7599</del>
                </dd>
            </div>

        </dl>
        <dl>
            <dt><span>爆款专区</span><span>更多 ></span></dt>
            <div class="dl-group">
                <dd class="img" onclick="toDetail()" tapmode="">
                    <img src="../../../static/images/t7.jpg">

                    <div class="lable">10月27日 | 北京出发</div>
                </dd>
                <dd class="detail">
                    北京-台湾高雄-台东花莲双飞7晚8日游<br>
                    报名送韩国 101登顶 北京起飞
                </dd>
                <dd class="price">
                    <span class="newPrice">￥3399</span>
                </dd>
            </div>
        </dl>

        <dl>
            <dt><span>0元购专区</span><span>更多 ></span></dt>

            <div class="dl-group">
                <dd class="img" onclick="toDetail()" tapmode="">
                    <img src="../../../static/images/t8.jpg">
                    <div class="lable">10月28日 | 北京出发</div>
                </dd>
                <dd class="detail">
                    东京-横滨-京都-富士山6日游<br>
                    途牛独家包团，EY全网最低价
                </dd>
                <dd class="zero-buy">
                    <div class="price">
                        <span class="newPrice">￥0</span>
                        <del class="oldPrice">￥6599</del>
                    </div>
                    <div class="buy">立即抢购</div>
                </dd>
            </div>
            <div class="dl-group">
                <dd class="img" onclick="toDetail()" tapmode="">
                    <img src="../../../static/images/t9.jpg">

                    <div class="lable">10月28日 | 北京出发</div>
                </dd>
                <dd class="detail">
                    东京银座5日自助游<br>
                    东京血拼，购物游玩的不二选择
                </dd>
                <dd class="zero-buy">
                    <div class="price">
                        <span class="newPrice">￥0</span>
                        <del class="oldPrice">￥4599</del>
                    </div>
                    <div class="buy">立即抢购</div>
                </dd>
            </div>
        </dl>
        <dl>
            <dt><span>每日精选</span><span></span></dt>
            <div class="dl-group">
                <dd class="img" onclick="toDetail()" tapmode="">
                    <img src="../../../static/images/t10.jpg">
                    <div class="lable">10月29日 | 北京出发</div>
                </dd>
            </div>
        </dl>
    </div>
</template>


<script>
import wx from 'weixin-js-sdk'

export default {
    data() {
        return {msg: '这个是Home模板页'}
    },
    methods:{
        initWx: function () {
            var url = 'http://localhost:8084/wechat/config';
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
                jsApiList: [ 'checkJsApi', 'startRecord', 'stopRecord','translateVoice','scanQRCode', 'openCard' ] // 必填，需要使用的JS接口列表
            });
        },
        qrcode:function () {
            wx.scanQRCode({
                needResult: 1, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
                scanType: ["qrCode","barCode"], // 可以指定扫二维码还是一维码，默认二者都有
                success: function (res) {
                    var result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
                    alert("扫描结果："+result);
                }
            });

           /* wx.ready(function() {
                wx.checkJsApi({
                    jsApiList: ['scanQRCode'],
                    success: function (res) {
                        console.info(res)
                    }
                });



            });//end_ready*/

        },
        auth:function () {
            //wx570bc396a51b8ff8
            var appid = 'wxbdc5610cc59c1631';
            var redirect_uri = 'http://15n3e97143.imwork.net';
            redirect_uri = 'https%3A%2F%2Fpassport.yhd.com%2Fwechat%2Fcallback.do';
            var url = `https://open.weixin.qq.com/connect/qrconnect?appid=${appid}&redirect_uri=${redirect_uri}&response_type=code&scope=snsapi_login&state=STATE#wechat_redirect`
            console.info(url);
            window.location.href = url;
        }
    },
    components: {}
}
</script>
