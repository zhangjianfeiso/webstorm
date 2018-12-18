<style scoped>
    section {
        position: absolute;
        width: 100%;
    }
    header{
        border-bottom:1px solid;
    }
    article .yd-list-item{
        border-bottom:1px solid rgb(228, 228, 228);
    }

    .yd-list-other:last-child{
        padding-top: 0;
        margin-top: 5px;
    }
</style>


<template>
    <div>

        <yd-layout>
            <!-- 回到顶部 -->
            <yd-backtop></yd-backtop>

            <!-- 头部开始 -->
            <yd-navbar slot="navbar" :title="navbar">
                <router-link to="#" slot="right" @click.native="showAddr = true">
                    <yd-icon name="search" size="21px" color="#777"></yd-icon>
                </router-link>
            </yd-navbar>
            <!-- 头部结束 -->

            <!-- 搜索开始 -->
            <yd-popup v-model="showAddr" position="left" width="70%">
                <yd-cell-item>
                    <span slot="left">姓&nbsp;&nbsp;&nbsp;&nbsp;名：</span>
                    <yd-input slot="right" v-model="input1" max="20" placeholder="请输入姓名"></yd-input>
                </yd-cell-item>
                <yd-cell-item>
                    <span slot="left">手机号：</span>
                    <yd-input slot="right" v-model="input2" max="20" regex="mobile" placeholder="请输入手机号码"></yd-input>
                </yd-cell-item>

            </yd-popup>
            <!-- 搜索结束 -->


            <!-- 主体内容开始 -->
            <yd-infinitescroll :callback="loadList" ref="infinitescrollDemo">

                <yd-list theme="4" slot="list">
                    <yd-list-item v-for="item, key in list" :key="key" type="link" href="/detail?name=张三&id=1" style="height: 95px;">
                        <img slot="img" :src="item.img" class="yd-img-item" style="border-radius: 50%;height: 80px;width:80px;border:1px solid rgb(228, 228, 228);">
                        <span slot="title">{{ item.name }}</span>
                        <span slot="title" style="margin-left: 15px;">{{ item.mobile }}</span>
                        <yd-list-other slot="other">
                            <div>
                                <span class="list-del-price">{{ item.addr }}</span>
                            </div>
                            <div>
                                <img slot="icon" style="height: 15px;" src="../../../static/images/icon_right_2x.png">
                            </div>
                        </yd-list-other>
                        <yd-list-other slot="other">
                            <div>
                                <span class="list-del-price">
                                    <yd-tabbar id="flow-list">
                                        <yd-tabbar-item title="预约" link="/custom/detail?name=张三&state=1&id=1" active>
                                            <img slot="icon" style="height: 3px;width:5px;" src="../../../static/images/white.png">
                                            <yd-badge slot="badge" scale=".7">{{ item.subscribe }}</yd-badge>
                                        </yd-tabbar-item>
                                        <yd-tabbar-item title="到访" link="/custom/detail?name=张三&state=2&id=1" active>
                                            <img slot="icon" style="height: 3px;width:5px;" src="../../../static/images/white.png">
                                            <yd-badge slot="badge" type="warning" scale=".7">{{ item.visit }}</yd-badge>
                                        </yd-tabbar-item>
                                        <yd-tabbar-item title="认筹" link="/custom/detail?name=张三&state=3&id=1" active>
                                            <img slot="icon" style="height: 3px;width:5px;" src="../../../static/images/white.png">
                                            <yd-badge slot="badge" type="danger" scale=".7">{{ item.recognition }}</yd-badge>
                                        </yd-tabbar-item>
                                        <yd-tabbar-item title="认购" link="/custom/detail?name=张三&state=4&id=1" active>
                                            <img slot="icon" style="height: 3px;width:5px;" src="../../../static/images/white.png">
                                            <yd-badge slot="badge" type="primary" scale=".7">{{ item.buy }}</yd-badge>
                                        </yd-tabbar-item>
                                    </yd-tabbar>
                                </span>
                            </div>
                        </yd-list-other>
                    </yd-list-item>
                </yd-list>
                <!-- 数据全部加载完毕显示 -->
                <span slot="doneTip">啦啦啦，啦啦啦，没有数据啦~~</span>
                <!-- 加载中提示，不指定，将显示默认加载中图标 -->
                <img slot="loadingTip" src="http://static.ydcss.com/uploads/ydui/loading/loading10.svg"/>
            </yd-infinitescroll>
            <!-- 主体内容结束 -->




            <yd-tabbar slot="tabbar">
                <yd-tabbar-item title="首页" link="/">
                    <img slot="icon" style="height: 25px;" src="../../../static/images/icon_home.png">
                </yd-tabbar-item>
                <yd-tabbar-item title="客户" link="/custom" active>
                    <img slot="icon" style="height: 25px;" src="../../../static/images/icon_custom_active.png">
                </yd-tabbar-item>
                <yd-tabbar-item title="动态" link="#">
                    <img slot="icon" style="height: 25px;" src="../../../static/images/icon_dynamic.png">
                </yd-tabbar-item>
                <yd-tabbar-item title="我的" link="/user">
                    <img slot="icon" style="height: 25px;" src="../../../static/images/icon_my.png">
                </yd-tabbar-item>
            </yd-tabbar>

        </yd-layout>

    </div>
</template>


<script>
import District from 'ydui-district/dist/gov_province_city_area_id';

export default {
    name: 'HelloWorld',
    data() {
        return {
            showAddr: false,
            navbar: '客户信息',
            input1:'',
            input2:'',
            show1: false,
            model1: '',
            district: District,
            page: 1,
            pageSize: 10,
            list: []
        }
    },
    created:function () {
        this.loadList();
    },
    methods: {
        gotoDetail(){
            console.info('============');
        },
        submitHandler(){

        },
        result1(ret) {
            console.info('ret___',ret);
            this.model1 = ret.itemName1 + ' ' + ret.itemName2 + ' ' + ret.itemName3;
        },
        loadList() {
            this.$http.get(this.$global.apiUrl + '/custom/list', {
                params: {
                    page: this.page,
                    pagesize: this.pageSize
                }
            }).then(function (response) {
                const _list = response.body.data;
                this.list = [...this.list, ..._list];
                if (_list.length < this.pageSize || this.page == 3) {
                    /* 所有数据加载完毕 */
                    this.$refs.infinitescrollDemo.$emit('ydui.infinitescroll.loadedDone');
                    return;
                }
                /* 单次请求数据完毕 */
                this.$refs.infinitescrollDemo.$emit('ydui.infinitescroll.finishLoad');
                this.page++;
            });
        }
    },
}
</script>
