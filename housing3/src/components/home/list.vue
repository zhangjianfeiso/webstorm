<!-- Add "scoped" attribute to limit CSS to this component only -->
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
    .yd-slider{
        height:160px;
    }
    .yd-slider img{
        height:160px;
    }

</style>

<template>
    <div>

        <!-- 报备按钮 -->
        <suspension></suspension>

        <yd-layout>
            <!-- 回到顶部 -->
            <yd-backtop></yd-backtop>


            <!-- 头部开始 style="background-color: rgb(9, 187, 7)" -->
            <yd-navbar slot="navbar" :title="navbar" :style="headerBg">
                <router-link to="#" slot="right" @click.native="showAddr = true" :callback="closeSearch">
                    <yd-icon name="search" size="21px" color="#777"></yd-icon>
                </router-link>
            </yd-navbar>
            <!-- 头部结束 -->

            <!-- 搜索开始 -->
            <yd-popup v-model="showAddr" position="left" width="80%">
                <yd-cell-group>
                    <yd-cell-item>
                        <span slot="left">
                            <yd-icon name="search" size=".35rem"></yd-icon>&nbsp;
                        </span>
                        <yd-input slot="right" v-model="searchVal" max="20" placeholder="请输入楼盘信息"></yd-input>
                    </yd-cell-item>
                    <yd-cell-item arrow>
                        <span slot="left">地区：</span>
                        <input slot="right" type="text" columns="2" @click.stop="show1 = true" v-model="model1" readonly placeholder="请选择地址">
                    </yd-cell-item>
                </yd-cell-group>
                <yd-cityselect v-model="show1" :callback="result1" :items="district"></yd-cityselect>
            </yd-popup>
            <!-- 搜索结束 -->

            <yd-slider autoplay="3000">
                <yd-slider-item>
                    <a href="#">
                        <img src="../../../static/images/1.jpg">
                    </a>
                </yd-slider-item>
                <yd-slider-item>
                    <a href="#">
                        <img src="../../../static/images/2.jpg">
                    </a>
                </yd-slider-item>
                <yd-slider-item>
                    <a href="#">
                        <img src="../../../static/images/3.jpg">
                    </a>
                </yd-slider-item>
            </yd-slider>
            <!-- 主体内容开始 -->
            <yd-infinitescroll :callback="loadList" ref="infinitescrollDemo">

                <yd-list theme="4" slot="list">
                    <yd-list-item v-for="item, key in list" :key="key" class="home-list-item">
                        <img slot="img" :src="item.img" style="min-height: 95px;width:120px;" class="yd-img-item">
                        <span slot="title"><span>{{ item.name }}</span>
                        <img v-if="!item.collect" class="icon-collect" @click="collect(item.id,item.collect)" slot="icon" style="height: 18px;float: right;display: none;" src="../../../static/images/icon_collect_black.png">
                            <img v-else slot="icon" class="icon-collect"  @click="collect(item.id,item.collect)"  style="height: 18px;float: right;" src="../../../static/images/icon_already_collect_orange.png">
                        </span>
                        <yd-list-other slot="other">
                            <div>
                                <span class="list-price">所在区域:</span>
                                <span class="list-del-price">{{ item.area }}</span>
                            </div>
                            <div>
                                <span class="list-price">楼盘类型:</span>
                                <span class="list-del-price">{{ item.type }}</span>
                            </div>
                            <div></div>
                        </yd-list-other>
                        <yd-list-other slot="other">
                            <div>
                                <span class="list-price">销售热线:</span>
                                <span class="list-del-price">{{ item.mobile }}</span>
                            </div>
                            <div><img slot="icon" style="height: 15px;" src="../../../static/images/icon_right_2x.png"></div>
                        </yd-list-other>
                        <yd-list-other slot="other">
                            <div>
                                <span class="list-del-price">
                                    <yd-button type="primary" size="mini" @click.native="$router.push('/records')">一键报备</yd-button>
                                </span>
                                <span class="list-del-price" style="margin-left: 12px;">
                                    <yd-button type="warning" size="mini" @click.native="$router.push('/map')">楼盘详情</yd-button>
                                </span>
                            </div>
                            <div></div>
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
                <yd-tabbar-item title="首页" link="#" active>
                    <img slot="icon" style="height: 25px;" src="../../../static/images/icon_home_active.png">
                </yd-tabbar-item>
                <yd-tabbar-item title="客户" link="/custom">
                    <img slot="icon" style="height: 25px;" src="../../../static/images/icon_custom.png">
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
    import suspension from '@/components/common/suspension'
    export default {
        name: 'HelloWorld',
        data() {
            return {
                headerBg:'background-color:'+this.$global.headerBg,
                showAddr: false,
                navbar: '楼盘信息',
                searchVal:'',
                show1: false,
                model1: '',
                district: District,//地区搜索
                page: 1,
                pageSize: 10,
                list: {}
            }
        },
        created:function () {
            this.loadList();
        },
        mounted:function () {

        },
        methods: {
            collect(id,collect){
                this.$dialog.toast({
                    mes: collect?'取消收藏！':'收藏成功！',
                    timeout: 1000,
                    icon: collect?'error':'success'
                });
                var list = this.list;
                for(var x=0; x<list.length; x++){
                    if(list[x].id == id){
                        list[x].collect = (!collect )
                    }
                }
                setTimeout(() => {
                    $('.icon-collect').show();
                },100);
            },
            closeSearch(){

            },
            submitHandler(){

            },
            result1(ret) {
                this.model1 = ret.itemName1 + ' ' + ret.itemName2 + ' ' + ret.itemName3;
                this.$dialog.toast({
                    mes:ret.itemValue1 +' '+ret.itemValue2+' '+ret.itemValue3,
                    timeout: 1500,
                    icon: 'success'
                });

            },
            loadList() {
                this.$http.get(this.$global.apiUrl + '/home/list', {
                    params: {
                        page: this.page,
                        pagesize: this.pageSize
                    }
                }).then(function (response) {
                    const _list = response.body.data;
                    this.list = [...this.list, ..._list];
                    setTimeout(() => {
                        $('.yd-list-title').css('display','block');
                        setTimeout(() => {
                            $('.icon-collect').show();
                        },100);
                    },50)
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
        components:{suspension}
    }
</script>


