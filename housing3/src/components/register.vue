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
            <yd-navbar slot="navbar" title="注册" style="background-image: url(../../static/images/bg.jpg);background-repeat: no-repeat;background-size: 100%;">

            </yd-navbar>
            <div style="height: 100%;" class="body-vertical">
                <yd-flexbox direction="vertical">
                    <div style="height:10%;"></div>
                    <div style="height: 50%;">
                        <yd-cell-group>
                            <yd-cell-item>
                                <span slot="left">
                                    <img slot="icon" style="height:16px;margin-right: 5px;" src="../../static/images/icon_user.png">
                                </span>
                                <yd-input slot="right" required v-model="username" max="20" placeholder="用户名"></yd-input>
                            </yd-cell-item>
                            <yd-cell-item>
                                <span slot="left">
                                    <img slot="icon" style="height:18px;margin-right: 5px;" src="../../static/images/icon_pwd.png">
                                </span>
                                <yd-input slot="right" required type="password" v-model="password" placeholder="密码"></yd-input>
                            </yd-cell-item>
                            <yd-cell-item>
                                <span slot="left">
                                    <img slot="icon" style="height:18px;margin-right: 5px;" src="../../static/images/icon_pwd.png">
                                </span>
                                <yd-input slot="right" required type="password" v-model="confirmPwd" placeholder="确认密码"></yd-input>
                            </yd-cell-item>
                            <yd-cell-item>
                                <span slot="left">
                                    <img slot="icon" style="height:22px;margin-left:-3px;" src="../../static/images/icon_phone.png">
                                </span>
                                <yd-input slot="right" required type="text" v-model="mobile" placeholder="手机号码"></yd-input>
                            </yd-cell-item>
                        </yd-cell-group>
                    </div>
                    <div style="width:70%;">
                        <yd-button size="large" type="primary" shape="circle" @click.native="register">注册并登陆</yd-button>
                        <yd-button size="large" type="warning" shape="circle" @click.native="$router.push('/login')">我有账号了</yd-button>
                    </div>
                </yd-flexbox>
            </div>
        </yd-layout>
    </div>
</template>


<script>
export default {
    data() {
        return {msg: '这个是Home模板页'}
    },
    mounted:function () {
        $('#scrollView').css('overflow-y','hidden');
        $('.yd-navbar-center-title').css('color','white').css('font-size','22px');
    },
    methods:{
        register(){
            this.$router.push('/');
        }
    },
    components: {}
}
</script>
