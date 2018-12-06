<style scoped>
    .unlogin {
        border-bottom: 1px solid #9D8C7B;
    }

    .unlogin img {
        width: 100%;
        -webkit-filter: blur(2px);
        opacity: .9;
    }

    .user-img {
        position: absolute;
        top: 20px;
        width: 75px;
        height: 75px;
        left: 0;
        right: 0;
        margin: auto;
        border: 5px solid #9F9887;
        border-radius: 100%;
    }

    .user-img img {
        width: 100%;
        height: 100%;
    }

    .login {
        width: 90px;
        padding: 5px 10px;
        position: absolute;
        top: 110px;
        left: 0;
        right: 0;
        margin: auto;
        background-color: #3BBB65;
        color: #FFFFFF;
    }

    .category {
        margin-top: 5px;
        border-bottom: 1px solid #bebebe;
    }

    .category li {
        display: inline-block;
        width: 24%;
        text-align: center;
        padding: 20px 0 10px;
        background-size: 30px;
        background-repeat: no-repeat;
        background-position: top;
    }

    .category li a {
        margin: 15px 10px 0 10px;
    }

    .order {
        background-image: url("../../static/images/user_menu_order@2x.png");
    }

    .chat {
        background-image: url("../../static/images/user_menu_chat@2x.png");
    }

    .snap_up {
        background-image: url("../../static/images/user_menu_snap_up@2x.png");
    }

    .coupon {
        background-image: url("../../static/images/user_menu_coupon@2x.png");
    }

    .user-setting li:not(:last-child) {
        position: relative;
        padding: 3px 6px;
        background-size: 20px;
        background-repeat: no-repeat;
        background-position: 95%;
        background-image: url("../../static/images/arrow_grey_right_normal.png");
    }

    .user-setting li:last-child {
        position: relative;
        padding: 3px 6px;
    }

    .user-setting li:last-child a {
        padding: 10px 0 10px 50px;
    }

    .user-setting li:last-child span {
        position: absolute;
        right: 5%;
        top: 13px;
        color: #D8D6D6;
        font-size: 10px;
    }

    .user-setting li {
        display: inline;
        float: left;
        width: 100%;
    }

    .user-setting li a {
        display: block;
        padding: 10px 50px;
        background-size: 22px;
        background-repeat: no-repeat;
        background-position: 5%;
        float: left;
    }

    .subscribe {
        background-image: url("../../static/images/user_menu_subscribe@2x.png");
    }

    .favorite {
        background-image: url("../../static/images/user_menu_favorite@2x.png");
    }

    .comment {
        background-image: url("../../static/images/user_menu_comment@2x.png");
    }

    .bankcard {
        background-image: url("../../static/images/user_menu_bankcard@2x.png");
    }

    .message {
        background-image: url("../../static/images/user_menu_message@2x.png");
    }

    .setting {
        background-image: url("../../static/images/user_menu_setting@2x.png");
    }

    .update {
        background-image: url("../../static/images/user_menu_update@2x.png");
    }

    .qrcode {
        background-image: url("../../static/images/icon_qrcode.png");
        background-size: 16px!important;
        margin-left: 1px;
    }
</style>


<template>
    <div>
        <div class="contains">
            <div class="unlogin">
                <img src="../../static/images/t1.jpg">
                <button class="login" tapmode="">
                    <router-link to="/login">立即登录</router-link>
                </button>
            </div>
            <div class="user-img">
                <img src="../../static/images/user_avatar_unlogin@2x.png">
            </div>
            <div class="content">
                <ul class="category">
                    <li class="order" tapmode="" onclick="login()"><a>
                        我的订单
                    </a></li>
                    <li class="chat" tapmode="" onclick="login()"><a>
                        同团聊
                    </a></li>
                    <li class="snap_up" tapmode="" onclick="login()"><a>
                        我的抢购
                    </a></li>
                    <li class="coupon" tapmode="" onclick="login()"><a>
                        优惠卡券
                    </a></li>

                </ul>
                <ul class="user-setting">
                    <li tapmode="liActive" @click="qrcode" v-if="user.openid != null && user.openid != ''"><a class="qrcode">我的二维码</a></li>
                    <li tapmode="liActive" onclick="login()"><a class="subscribe">特价订阅</a></li>
                    <li tapmode="liActive" onclick="login()"><a class="favorite">我的收藏</a></li>
                    <li tapmode="liActive" onclick="login()"><a class="comment">我的点评</a></li>
                    <li tapmode="liActive" onclick="login()"><a class="bankcard">我的银行卡</a></li>
                    <li tapmode="liActive" onclick="login()"><a class="message">消息通知</a></li>
                    <li tapmode="liActive" onclick="login()"><a class="setting">设置</a></li>
                    <li tapmode="liActive" onclick=""><a class="update">版本更新</a><span>已是最新版本</span></li>
                </ul>
            </div>
        </div>

        <vmenu></vmenu>
    </div>
</template>


<script>
    import vmenu from '@/components/menu.vue'

    export default {
        data() {
            return {
                user:{}
            }
        },
        mounted:function () {
            var $this = this;
            $this.setShareUser();
            $this.getOpenId().then(user => {
                $this.user = user;
            })
        },
        methods: {
            qrcode:function () {
                this.$router.push({path: '/qrcode/' + this.user.openid});
            }
        },
        components: {vmenu}
    }
</script>
