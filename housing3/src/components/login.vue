<style scoped>
    body {
        background-color: #ff0000;
    }
    #scrollView{
        overflow-y: hidden!important;
    }
</style>


<template>
    <div>
        <yd-layout style="height: 100%;position: absolute;width:100%;background-image: url(../../static/images/bg.jpg);background-repeat: no-repeat;background-size: 100%;">
            <yd-navbar slot="navbar" title="登陆" style="background-image: url(../../static/images/bg.jpg);background-repeat: no-repeat;background-size: 100%;">

            </yd-navbar>
            <div style="height: 100%;" class="body-vertical">
                <yd-flexbox direction="vertical">
                    <div style="height:10%;"></div>
                    <div style="height: 30%">
                        <yd-cell-group>
                            <yd-cell-item>
                                <span slot="left">
                                    <img slot="icon" style="height:16px;margin-right: 5px;" src="../../static/images/icon_user.png">
                                </span>
                                <yd-input slot="right" required v-model="formData.username" max="20" placeholder="用户名"></yd-input>
                            </yd-cell-item>
                            <yd-cell-item>
                                <span slot="left">
                                     <img slot="icon" style="height:18px;margin-right: 5px;" src="../../static/images/icon_pwd.png">
                                </span>
                                <yd-input slot="right" required type="password" v-model="formData.password" placeholder="密码"></yd-input>
                            </yd-cell-item>
                        </yd-cell-group>
                    </div>
                    <div style="width:60%;">
                        <yd-button size="large" type="primary" shape="circle" @click.native="login">登陆</yd-button>
                        <yd-button size="large" type="warning" shape="circle" @click.native="$router.push('/register')">注册用户</yd-button>
                    </div>
                    <div style="margin-top:30px;color:white;" @click="wechatLogin">
                        <img src="../../static/images/wechat-logo.png" style="width:40px;height: 40px;"><br/>
                        微信登陆
                    </div>
                </yd-flexbox>
            </div>
        </yd-layout>
    </div>
</template>


<script>
export default {
    data() {
        return {formData:{}}
    },
    mounted:function () {
        $('#scrollView').css('overflow-y','hidden');
        $('.yd-navbar-center-title').css('color','white').css('font-size','22px');
    },
    methods:{
        login(){
            this.$router.push('/');
        },
        wechatLogin(){
            this.$dialog.toast({
                mes: '登陆成功',
                timeout: 1500,
                icon: 'success'
            });
            setTimeout(() => {
                this.$router.push('/');
            },1000);
        }
    },
    components: {}
}
</script>
