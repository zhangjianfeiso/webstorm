<style scoped>
    section {
        position: absolute;
        width: 100%;
    }
</style>

<template>
    <div>

        <yd-layout>
            <yd-navbar slot="navbar" :title="navbar">
                <router-link to="#" slot="left" @click.native="gotoBack">
                    <yd-navbar-back-icon></yd-navbar-back-icon>
                </router-link>
            </yd-navbar>



            <div>
                <yd-flexbox direction="vertical">
                    <yd-flexbox-item>
                        <yd-preview :buttons="btns">
                            <yd-preview-header>
                                <div slot="left">李桂香</div>
                                <div slot="right">18551154098</div>
                            </yd-preview-header>
                            <yd-preview-header>
                                <div slot="left">碧桂园-广州</div>
                                <div slot="right">
                                    <a href="tel:18551154098">
                                        <yd-icon name="phone1"  size=".6rem" color="#FF685D"></yd-icon>
                                    </a>
                                </div>
                            </yd-preview-header>


                        </yd-preview>
                    </yd-flexbox-item>
                    <div style="height: 20px;"></div>
                    <yd-flexbox-item>
                        <yd-step current="2">
                            <yd-step-item>
                                <span slot="top">预约</span>
                            </yd-step-item>
                            <yd-step-item>
                                <span slot="top">到访</span>
                            </yd-step-item>
                            <yd-step-item>
                                <span slot="top">认筹</span>
                            </yd-step-item>
                            <yd-step-item>
                                <span slot="top">认购</span>
                            </yd-step-item>
                        </yd-step>
                    </yd-flexbox-item>
                    <div style="height: 50px;width:100%;border-bottom: 1px solid rgb(228, 228, 228);"></div>
                    <yd-flexbox-item>
                        <yd-timeline>
                            <yd-timeline-item>
                                <p style="text-align: left">预约《碧桂园》成功</p>
                                <p style="margin-top: 10px;text-align: left">2017-08-18 08:24:18</p>
                            </yd-timeline-item>
                            <yd-timeline-item>
                                <p style="text-align: left">到访《碧桂园》成功</p>
                                <p style="margin-top: 10px;text-align: left">2017-08-18 07:25:08</p>
                            </yd-timeline-item>
                            <!--<yd-timeline-item>
                                <p style="text-align: left">认筹《碧桂园》成功</p>
                                <p style="margin-top: 10px;text-align: left">2017-08-17 21:44:08</p>
                            </yd-timeline-item>-->
                        </yd-timeline>
                    </yd-flexbox-item>
                </yd-flexbox>
            </div>


        </yd-layout>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                navbar: '进度查询',
                btns:[]
            }
        },
        methods:{
            gotoBack(){
                this.$router.replace('detail');
            }
        }
    }
</script>
