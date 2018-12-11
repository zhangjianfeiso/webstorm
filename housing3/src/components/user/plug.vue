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
            <yd-navbar slot="navbar" :title="navbar">
                <router-link to="/user" slot="left">
                    <yd-navbar-back-icon></yd-navbar-back-icon>
                </router-link>
            </yd-navbar>

            <yd-cell-group title="">
                <yd-cell-item type="label">
                    <div slot="left">悬浮按钮</div>
                    <yd-switch slot="right" v-model="suspension" @click.native="suspensionSwitch"></yd-switch>
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
                suspension:false
            }
        },
        created:function () {
            this.suspension = localStorage.getItem('suspension')?(localStorage.getItem('suspension') == 'true'):false;
        },
        methods:{
            suspensionSwitch(){
                setTimeout(() => {
                    localStorage.setItem('suspension',this.suspension);
                },1000)
            }
        }
    }
</script>
