<style scoped>
    section {
        position: absolute;
        width: 100%;
    }
</style>


<template>
    <div>
        <yd-layout>
            <!-- 头部开始 -->
            <div style="height: 160px;">
                <yd-flexbox direction="vertical">
                    <yd-flexbox-item>
                        <img src="../../../static/images/timg.jpg" style="height: 160px;width:100%;"/>
                        <div style="position: absolute;top:100px;left: 42%;">
                            <yd-button size="mini" type="primary" @click.native="login">立即登陆</yd-button>
                        </div>
                        <div style="position: absolute;top:20px;left: 42%;margin:auto;border:3px solid #9F9887;border-radius: 35px;">
                            <img src="../../../static/images/user_avatar_unlogin@2x.png" style="width: 60px;top:2px;position:relative;">
                        </div>
                    </yd-flexbox-item>
                </yd-flexbox>
            </div>
            <!-- 头部结束 -->


            <!-- 主体内容开始 -->

            <yd-cell-group title="">
                <yd-cell-item arrow href="#" type="link">
                    <img slot="icon" style="height: 16px;" src="../../../static/images/icon_qrcode.png">
                    <span slot="left">我的二维码</span>
                    <span slot="right"></span>
                </yd-cell-item>
                <yd-cell-item arrow href="#" type="link">
                    <yd-icon slot="icon" name="like-outline" size=".42rem"></yd-icon>
                    <span slot="left">我的收藏</span>
                </yd-cell-item>
                <yd-cell-item arrow href="#" type="link">
                    <yd-icon slot="icon" name="setting" size=".44rem"></yd-icon>
                    <span slot="left">设置</span>
                </yd-cell-item>
            </yd-cell-group>


            <!-- 主体内容结束 -->




            <yd-tabbar slot="tabbar">
                <yd-tabbar-item title="首页" link="/">
                    <img slot="icon" style="height: 25px;" src="../../../static/images/icon_home.png">
                </yd-tabbar-item>
                <yd-tabbar-item title="客户" link="/custom">
                    <img slot="icon" style="height: 25px;" src="../../../static/images/icon_custom.png">
                </yd-tabbar-item>
                <yd-tabbar-item title="动态" link="#">
                    <img slot="icon" style="height: 25px;" src="../../../static/images/icon_dynamic.png">
                </yd-tabbar-item>
                <yd-tabbar-item title="我的" link="/my" active>
                    <img slot="icon" style="height: 25px;" src="../../../static/images/icon_my_active.png">
                </yd-tabbar-item>
            </yd-tabbar>

        </yd-layout>

    </div>
</template>


<script>
export default {
    data() {
        return {msg: '这个是Home模板页'}
    },
    methods:{
        login(){
            console.info('login...');
        }
    },
    components: {}
}
</script>
