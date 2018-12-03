<style scoped>
    body, .register-content {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        background-image: url(../../static/images/bg.jpg);
        background-size: 100%;
        position: absolute;
        height: 100%;
        width: 100%;
    }

    header {
        border: none;
    }

    .header {
        padding: 0 15px;
    }

    .cancel {
        background-image: url("../../static/images/ad_close_gray@2x.png");
        background-size: 40px;
        background-repeat: no-repeat no-repeat;
        background-position: center;
    }

    .content {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-box-flex: 1;
    }

    .title {
        color: #FFFFFF;
        text-align: center;
        line-height: 80px;
        font-size: 25px;
        -webkit-box-flex: 1;
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
        padding: 5px 10px;
        display: -webkit-box;
        background-color: rgba(255, 255, 255, 0.8);
    }

    .input-wrap:first-child {
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
    }

    .input-wrap:last-child {
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
    }

    .form {
        margin: 0 20px;
        line-height: 30px;
    }

    .input-wrap input {
        display: block;
        -webkit-box-flex: 1;
        height: 32px;
    }

    input {
        padding-left: 10px;
    }

    .footer, .form {
        -webkit-box-flex: 1;
    }

    #register {
        display: block;
        color: #ffffff;
        margin: 0 40px;
        text-align: center;
        border-radius: 5px;
        height: 40px;
        line-height: 40px;
        margin-top: 15px;
        background-color: #FF7800;
    }

    #green {
        display: block;
        color: #ffffff;
        margin: 0 40px;
        text-align: center;
        border-radius: 5px;
        height: 40px;
        line-height: 40px;
        margin-top: 15px;
        background-color: #36b05e;
    }

    body {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        background-image: url(../../static/images/bg.jpg);
        background-size: 100%;
    }

    header {
        border: none;
    }

    .header {
        padding: 0 15px;
    }

    .cancel {
        background-image: url("../../static/images/ad_close_gray@2x.png");
        background-size: 40px;
        background-repeat: no-repeat no-repeat;
        background-position: center;
    }

    .content {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-box-flex: 1;
    }

    .title {
        color: #FFFFFF;
        text-align: center;
        line-height: 80px;
        font-size: 25px;
        -webkit-box-flex: 1;
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
        padding: 5px 10px;
        display: -webkit-box;
        background-color: rgba(255, 255, 255, 0.8);
    }

    .input-wrap:first-child {
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
    }

    .input-wrap:last-child {
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
    }

    .form {
        margin: 0 20px;
        line-height: 30px;
    }

    .input-wrap input {
        display: block;
        -webkit-box-flex: 1;
        height: 32px;
    }

    input {
        padding-left: 10px;
    }

    .footer, .form {
        -webkit-box-flex: 1;
    }

    #register {
        display: block;
        color: #ffffff;
        margin: 0 40px;
        text-align: center;
        border-radius: 5px;
        height: 40px;
        line-height: 40px;
        margin-top: 15px;
        background-color: #FF7800;
    }

    #green {
        display: block;
        color: #ffffff;
        margin: 0 40px;
        text-align: center;
        border-radius: 5px;
        height: 40px;
        line-height: 40px;
        margin-top: 15px;
        background-color: #36b05e;
    }
</style>


<template>
    <div class="register-content">
        <header>
            <div class="header ">
                <div tapmode="" class="cancel btn" onclick="api.closeWin()"></div>
                <div class="title" id="title">注册</div>
                <div tapmode="" class=" btn" onclick=""></div>
            </div>
        </header>
        <div class="content">
            <div class="form">
                <div class="input-wrap" style="border-bottom: 1px solid #d4d4d4;">
                    <i class="user"></i>
                    <input type="text" placeholder="用户名" class="txt" id="username" value=""/>
                </div>
                <div class="input-wrap">
                    <i class="password"></i>
                    <input type="password" placeholder="密码" class="txt" id="password" value=""/>
                </div>
            </div>
            <footer class="footer">
                <div class="yellow" id="register" tapmode="yellow-btn-active" @click="register()">注册并登录</div>
                <div class="yellow" id="green" tapmode="yellow-btn-active" @click="login()">我有账号了</div>
            </footer>

        </div>
    </div>
</template>


<script>
export default {
    data() {
        return {msg: '这个是模板页'}
    },
    methods:{
        register:function () {
            alert('openid____'+sessionStorage.getItem('share_openid'));
        },
        login:function () {
            this.$router.push({path:'/login'});
        }
    },
    components: {}
}
</script>
