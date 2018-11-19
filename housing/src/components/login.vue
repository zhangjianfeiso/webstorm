<style scoped>
    body, html,.login-content {
        position: absolute;
        width:100%;
        height: 100%;
    }

    body,.login-content {
        background-image: url(../../static/images/bg.jpg);
        background-repeat: no-repeat;
        background-size: 100%;
    }

    header {
        display: -webkit-box;
    }

    .title {
        -webkit-box-flex: 1;
        text-align: center;
        line-height: 50px;
        font-size: 20px;
    }

    header a {
        width: 50px;
        height: 50px;
    }

    .cancel {
        background-image: url("../../static/images/ad_close_gray@2x.png");
        background-size: 40px;
        background-repeat: no-repeat no-repeat;
        background-position: center;
    }

    i {
        display: block;
        width: 30px;
        height: 30px;
        background-size: 30px;
        background-repeat: no-repeat no-repeat;
        background-position: center;
    }

    .user {
        background-image: url("../../static/images/login_account@2x.png");
    }

    .password {
        background-image: url("../../static/images/logn_password@2x.png");
    }

    .input-wrap {
        padding: 10px 0;
        display: -webkit-box;
    }

    .input-wrap:first-child {
        border-bottom: 1px solid #d4d4d4;
    }

    .form {
        background-color: rgba(255, 255, 255, 0.8);
        margin: 40px 20px 0 20px;
        border-radius: 8px;
        padding: 0 10px;
        line-height: 30px;
    }

    .input-wrap input {
        display: block;
        -webkit-box-flex: 1;
        background-color: rgba(255, 255, 255, 0);
        outline: none;
        height: 30px;
    }

    .find-pwd {
        text-align: right;
        margin: 40px;
    }

    .btn.green {
        background-color: #36b05e;
    }

    .btn {
        display: block;
        color: white;
        margin: 0 40px;
        text-align: center;
        border-radius: 8px;
        height: 40px;
        line-height: 40px;
    }

    .btn.yellow {
        background-color: #FF7800;
    }

    .margin-top-25 {
        margin-top: 25px;
    }
    .login-content img{
        width:50px;
        height:50px;
        border: 0;
        border-radius: 50%;
    }
    .login-content .wechat-login{
        margin-top:20px;
        color:white;
    }
</style>


<template>
    <div class="login-content">
        <header>
            <a></a>
            <!--<a class="cancel" tapmode="" onclick="closeWin()"></a>-->
            <div class="title">登陆</div>
            <a></a>
        </header>
        <div class="content">
            <div class="form">
                <div class="input-wrap">
                    <i class="user"></i>
                    <input type="text" placeholder="用户名" class="txt" id="username" value=""/>

                </div>
                <div class="input-wrap">
                    <i class="password"></i>
                    <input type="password" placeholder="密码" class="txt" id="password" value=""/>

                </div>
            </div>
            <p class="find-pwd"><a>找回密码</a></p>

            <div class="btn green" id="login" @click="login">登录</div>
            <a class="btn yellow margin-top-25">注册新用户</a>
            <div class="wechat-login" @click="wechatLogin">
                <img src="../../static/images/wechat-logo.png"><br/>
                微信登陆
            </div>
        </div>
    </div>
</template>


<script>
export default {
    data() {
        return {msg: '这个是Home模板页'}
    },
    methods: {
        login:function() {
            this.$router.push({path: '/'});
        },
        wechatLogin:function () {//微信登陆
            console.info('微信登陆');
        }
    },
    components: {}
}
</script>
