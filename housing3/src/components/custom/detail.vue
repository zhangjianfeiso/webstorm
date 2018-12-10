<style scoped>
    section {
        position: absolute;
        width: 100%;
    }
    article .yd-list-item:first-child{
        border-top:1px solid rgb(228, 228, 228);
    }
    article .yd-list-item{
        border-bottom:1px solid rgb(228, 228, 228);
    }
    .detail-scroll .yd-list-img{
        height: 95px!important;
    }
    .yd-list-img img{
        height:95px;
    }
</style>


<template>
    <div>
        <yd-layout>
            <!-- 回到顶部 -->
            <yd-backtop></yd-backtop>


            <!-- 头部开始 -->
            <yd-navbar slot="navbar" :title="navbar">
                <router-link to="/custom" slot="left">
                    <yd-navbar-back-icon></yd-navbar-back-icon>
                </router-link>
                <router-link to="#" slot="right" @click.native="showSearch = true">
                    <yd-icon name="search" size="21px" color="#777"></yd-icon>
                </router-link>
            </yd-navbar>
            <!-- 头部结束 -->

            <!-- 搜索开始 -->
            <yd-popup v-model="showSearch" position="left" width="70%">
                <yd-cell-item arrow type="label">
                    <span slot="left">姓&nbsp;&nbsp;&nbsp;&nbsp;名：</span>
                    <yd-input slot="right" v-model="input1" max="20" placeholder="请输入姓名"></yd-input>
                </yd-cell-item>
                <yd-cell-item>
                    <span slot="left">手机号：</span>
                    <yd-input slot="right" v-model="input2" max="20" regex="mobile" placeholder="请输入手机号码"></yd-input>
                </yd-cell-item>
            </yd-popup>
            <!-- 搜索结束 -->


            <!-- 搜索开始 -->
            <yd-tab v-model="tab2" :callback="fn" :prevent-default="false" :item-click="itemClick">
                <yd-tab-panel v-for="(item,index) in items" :label="item.label" :key="index">
                </yd-tab-panel>
            </yd-tab>
            <!-- 搜索结束 -->


            <!-- 主体内容开始 -->
            <yd-infinitescroll :callback="loadList" ref="infinitescrollDemo" v-for="i,k in items" :key="k" v-if="k == tab2">
                <yd-list theme="4" slot="list">
                    <yd-list-item v-for="item, key in list" :key="key" :class="detailScroll" @click.native="gotoProgress">
                        <img slot="img" :src="item.img">
                        <span slot="title">{{item.title}}_{{ k }}</span>
                        <yd-list-other slot="other">
                            <div>
                                <span class="list-price">所在区域：</span>
                                <span class="list-price">{{item.marketprice}}</span>
                            </div>
                            <div>
                                <span class="list-price">楼盘类型：</span>
                                <span class="list-del-price">{{item.productprice}}</span>
                            </div>
                            <div></div>
                        </yd-list-other>

                        <yd-list-other slot="other">
                            <div>
                                <span class="list-price">楼盘价格：</span>
                                <span class="list-del-price">{{item.price}}</span>
                            </div>
                            <div><img slot="icon" style="height: 20px;" src="../../../static/images/icon_right_2x.png"></div>
                        </yd-list-other>
                        <yd-list-other slot="other">
                            <div>
                                <span class="list-price">李佳奇</span>
                                <span class="list-del-price">18551154098</span>
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




            <!--<yd-tabbar slot="tabbar">
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
            </yd-tabbar>-->

        </yd-layout>
    </div>
</template>


<script>
   var list = [
       {
           img: "http://img1.shikee.com/try/2016/06/23/14381920926024616259.jpg",
           title: "碧桂园",
           marketprice: '广东省',
           productprice: '住宅区',
           price:'10500元/平米'
       },
       {
           img: "http://img1.shikee.com/try/2016/06/21/10172020923917672923.jpg",
           title: "碧桂园",
           marketprice: 56.23,
           productprice: 89.36
       },
       {
           img: "http://img1.shikee.com/try/2016/06/23/15395220917905380014.jpg",
           title: "碧桂园",
           marketprice: 56.23,
           productprice: 89.36
       },
       {
           img: "http://img1.shikee.com/try/2016/06/25/14244120933639105658.jpg",
           title: "碧桂园",
           marketprice: 56.23,
           productprice: 89.36
       },
       {
           img: "http://img1.shikee.com/try/2016/06/26/12365720933909085511.jpg",
           title: "碧桂园",
           marketprice: 56.23,
           productprice: 89.36
       },
       {
           img: "http://img1.shikee.com/try/2016/06/19/09430120929215230041.jpg",
           title: "碧桂园",
           marketprice: 56.23,
           productprice: 89.36
       }
   ];


export default {
    data() {
        return {
            detailScroll:'detail-scroll',
            showSearch:false,
            input1:'',
            input2:'',
            navbar:'客户详情',
            tab2: 0,
            items: [
                {label: '预约',content: {}},
                {label: '到访',content: {}},
                {label: '认筹',content: {}},
                {label: '认购',content: {}}
            ],
            page: [1,1,1,1],
            pageSize: 10,
            list:list
        }
    },
    created(){
        this.tab2 = this.$route.query.state?(this.$route.query.state - 1):0;
        this.input1 = this.$route.query.name?this.$route.query.name:'';
    },
    mounted:function () {

    },
    methods: {
        gotoProgress(){
            this.$router.push({path:'progress'});
        },
        fn(label, key) {
            console.log(label, key);
        },
        itemClick(key) {
            this.$dialog.loading.open('数据加载中');
            setTimeout(() => {
                this.tab2 = key;
                this.page[this.tab2] = 1;
                this.$dialog.loading.close();
               // this.items[key].content = {name:'新内容【key:' + key + '】',states:'新内容_' + new Date().getTime()};
            }, 1000);
        },
        loadList() {
            console.info(this.tab2+'=======',this.page[this.tab2]);
            var that = this;
            this.$http.jsonp('http://list.ydui.org/getdata.php?type=backposition', {
                params: {
                    page: this.page[this.tab2],
                    pagesize: this.pageSize
                }
            }).then(function (response) {
                const _list = response.body;
                this.list = [...this.list, ..._list];
                if (_list.length < this.pageSize || this.page[this.tab2] == 3) {
                    /* 所有数据加载完毕 */
                    this.$refs.infinitescrollDemo[0].$emit('ydui.infinitescroll.loadedDone');
                    return;
                }
                /* 单次请求数据完毕 */
                this.$refs.infinitescrollDemo[0].$emit('ydui.infinitescroll.finishLoad');
                this.page[this.tab2]++;
            });
        }
    },
    components: {}
}
</script>
