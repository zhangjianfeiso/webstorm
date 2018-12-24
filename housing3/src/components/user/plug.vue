<style scoped>
    section {
        position: absolute;
        width: 100%;
    }
    header{
        border-bottom:1px solid;
    }
</style>

<template>
    <div>

        <yd-layout>
            <yd-navbar slot="navbar" :title="navbar" :style="headerBg">
                <router-link to="/user" slot="left">
                    <yd-navbar-back-icon></yd-navbar-back-icon>
                </router-link>
            </yd-navbar>

            <yd-cell-group title="">
                <yd-cell-item type="label">
                    <div slot="left">悬浮按钮</div>
                    <yd-switch slot="right" v-model="suspension" @click.native="suspensionSwitch"></yd-switch>
                </yd-cell-item>
                <yd-cell-item type="label">
                    <div slot="left">颜色</div>
                    <yd-switch slot="right" v-model="suspension" @click.native="changeHeaderStyle"></yd-switch>
                </yd-cell-item>
            </yd-cell-group>
        </yd-layout>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                navbar: '插件',
                suspension:true,
                headerBg:'background-color:' + this.$global.headerBg
            }
        },
        created:function () {
            this.suspension = localStorage.getItem('suspension')?(localStorage.getItem('suspension') == 'true'):true;
        },
        methods:{
            suspensionSwitch(){
                setTimeout(() => {
                    localStorage.setItem('suspension',this.suspension);
                },1000)
            },
            changeHeaderStyle(){
                if(this.suspension){
                    this.$global.headerBg = 'rgb(255, 255, 255)';
                }else{
                    this.$global.headerBg = 'rgb(9, 187, 7)';
                }
                this.headerBg = 'background-color:' + this.$global.headerBg;
            }
        }
    }
</script>
