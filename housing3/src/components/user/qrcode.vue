<style scoped>
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

            <div v-if="state == 1">
                <yd-flexbox direction="vertical">
                    <yd-tab v-model="tab1">
                        <yd-tab-panel label="推荐经纪人">
                            <yd-flexbox-item>
                                <div style="height: 50px;"></div>
                                <img src="../../../static/images/erweima.png"/>
                            </yd-flexbox-item>
                        </yd-tab-panel>
                        <yd-tab-panel label="推荐客户">
                            <yd-flexbox-item>
                                <div style="height: 50px;"></div>
                                <img src="../../../static/images/erweima.png"/>
                            </yd-flexbox-item>
                        </yd-tab-panel>
                    </yd-tab>
                </yd-flexbox>
            </div>
            <div v-else>
                <yd-flexbox direction="vertical">
                    <div style="height: 50px;"></div>
                    <img src="../../../static/images/erweima.png"/>
                </yd-flexbox>
            </div>
        </yd-layout>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                state: 1,
                navbar: '我的二维码',
                tab1:0
            }
        }
    }
</script>
