<style scoped>
    section {
        position: absolute;
        width: 100%;
    }
    .blur {
        -webkit-filter: blur(1.5px); /* Chrome, Opera */
        -moz-filter: blur(1.5px);
        -ms-filter: blur(1.5px);
        filter: blur(1.5px);
    }
    .goods-num{
        height: 25px;
        margin: 0px auto;
        padding: 5px 0px;
    }
    .goods-group{
        border-bottom:1px solid rgb(228, 228, 228);
        border-top:1px solid rgb(228, 228, 228);
    }
    .settings-class .yd-actionsheet-item{
        border-bottom:1px solid rgb(228, 228, 228);
        border-top:1px solid rgb(228, 228, 228);
    }
</style>


<template>
    <div>
        <yd-layout>

            <!-- 头部开始 -->
            <div style="height: 160px;">
                <yd-flexbox direction="vertical">
                    <yd-flexbox-item>
                        <img src="../../../static/images/timg.jpg" style="height: 160px;width:100%;" class="blur"/>
                        <div style="position: absolute;top:50px;left: 42.5%;">
                            <div style="margin:auto;border:3px solid #9F9887;border-radius: 35px;margin-bottom: 5px;">
                                <img src="../../../static/images/user_avatar_unlogin@2x.png" style="width: 60px;top:1px;position:relative;">
                            </div>
                            <yd-button size="mini" type="primary" @click.native="login">立即登陆</yd-button>
                        </div>
                    </yd-flexbox-item>
                </yd-flexbox>
            </div>
            <!-- 头部结束 -->


            <!-- 主体内容开始 -->
            <!-- 预约/到访/认筹/认购 -->
            <yd-grids-group :rows="4" :class="goodsGroupClass">
                <yd-grids-item @click.native="gotoCustomDetail(1)">
                    <div slot="text" class="goods-num">22</div>
                    <span slot="text">预约</span>
                </yd-grids-item>
                <yd-grids-item @click.native="gotoCustomDetail(2)">
                    <div slot="text" class="goods-num">32</div>
                    <span slot="text">到访</span>
                </yd-grids-item>
                <yd-grids-item @click.native="gotoCustomDetail(3)">
                    <div slot="text" class="goods-num">17</div>
                    <span slot="text">认筹</span>
                </yd-grids-item>
                <yd-grids-item @click.native="gotoCustomDetail(4)">
                    <div slot="text" class="goods-num">655</div>
                    <span slot="text">认购</span>
                </yd-grids-item>
            </yd-grids-group>
            <!-- 预约/到访/认筹/认购 -->


            <yd-cell-group title="">
                <yd-cell-item arrow href="/info" type="link">
                    <yd-icon slot="icon" name="feedback" size=".43rem"></yd-icon>
                    <span slot="left" style="margin-left: 2px;">基本资料</span>
                    <span slot="right"></span>
                </yd-cell-item>
                <yd-cell-item arrow href="/qrcode" type="link">
                    <img slot="icon" style="height: 16px;" src="../../../static/images/icon_qrcode.png">
                    <span slot="left" style="margin-left: 4px;">我的二维码</span>
                    <span slot="right"></span>
                </yd-cell-item>
                <yd-cell-item arrow href="/broker" type="link">
                    <img slot="icon" style="height: 16px;" src="../../../static/images/icon_broker.png">
                    <span slot="left">我的经纪人</span>
                    <span slot="right"></span>
                </yd-cell-item>
                <yd-cell-item arrow href="#" type="link" @click.native="collect">
                    <yd-icon slot="icon" name="like-outline" size=".42rem"></yd-icon>
                    <span slot="left" style="margin-left: 2px;">我的收藏</span>
                </yd-cell-item>
                <yd-cell-item arrow href="#" type="link" @click.native="showSetting = true" >
                    <yd-icon slot="icon" name="setting" size=".44rem"></yd-icon>
                    <span slot="left" style="margin-left: 1px;">设置</span>
                </yd-cell-item>
            </yd-cell-group>

            <yd-actionsheet :items="settings" v-model="showSetting" cancel="取消" class="settings-class"></yd-actionsheet>
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
                <yd-tabbar-item title="我的" link="/user" active>
                    <img slot="icon" style="height: 25px;" src="../../../static/images/icon_my_active.png">
                </yd-tabbar-item>
            </yd-tabbar>

        </yd-layout>

    </div>
</template>


<script>
export default {
    data() {
        return {
            goodsGroupClass:'goods-group',
            showSetting:false,
            settings: [
                {
                    label: '修改密码',
                    callback: () => {
                        this.$dialog.toast({mes: '咔擦，此人太帅！'});
                        /* 注意： callback: function() {} 和 callback() {}  这样是无法正常使用当前this的 */
                    }
                },
                {
                    label: '账号绑定',
                    callback: () => {
                        this.$dialog.toast({mes: '看到了不该看到的东西！'});
                    }
                },
                {
                    label: '插件',
                    callback: () => {
                        this.$router.push('/plug');
                    }
                }
            ]
        }
    },
    methods:{
        login(){
            this.$router.push('/login')
        },
        gotoCustomDetail(state){
            console.info('state__',state);
            this.$router.push({path:'/detail',query:{state:state}});
        },
        collect(){
            this.$dialog.toast({
                mes: '暂未开放此功能',
                timeout: 1500,
                icon: 'error',
                callback: () => {
                    //this.$dialog.alert({mes: '给你一次重来的机会！'});
                }
            });
        }
    },
    components: {}
}
</script>
