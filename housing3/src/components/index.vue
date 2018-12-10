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
    <div class="hello">

        <yd-layout>
            <!-- 回到顶部 -->
            <yd-backtop></yd-backtop>


            <!-- 头部开始 -->
            <yd-navbar slot="navbar" :title="navbar">
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
                    <a href="http://www.ydcss.com">
                        <img src="../../static/images/1.jpg">
                    </a>
                </yd-slider-item>
                <yd-slider-item>
                    <a href="http://www.ydcss.com">
                        <img src="../../static/images/2.jpg">
                    </a>
                </yd-slider-item>
                <yd-slider-item>
                    <a href="http://www.ydcss.com">
                        <img src="../../static/images/3.jpg">
                    </a>
                </yd-slider-item>
            </yd-slider>
            <!-- 主体内容开始 -->
            <yd-infinitescroll :callback="loadList" ref="infinitescrollDemo">

                <yd-list theme="4" slot="list">
                    <yd-list-item v-for="item, key in list" :key="key">
                        <img slot="img" :src="item.img" class="yd-img-item">
                        <span slot="title">{{item.title}}</span>
                        <yd-list-other slot="other">
                            <div>
                                <span class="list-price">{{item.marketprice}}</span>
                                <span class="list-del-price">{{item.productprice}}</span>
                            </div>
                            <div>content</div>
                        </yd-list-other>
                        <yd-list-other slot="other">
                            <div>
                                <span class="list-price">{{item.marketprice}}</span>
                                <span class="list-del-price">{{item.productprice}}</span>
                            </div>
                            <div>content</div>
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
                    <img slot="icon" style="height: 25px;" src="../../static/images/icon_home_active.png">
                </yd-tabbar-item>
                <yd-tabbar-item title="客户" link="/custom">
                    <img slot="icon" style="height: 25px;" src="../../static/images/icon_custom.png">
                </yd-tabbar-item>
                <yd-tabbar-item title="动态" link="#">
                    <img slot="icon" style="height: 25px;" src="../../static/images/icon_dynamic.png">
                </yd-tabbar-item>
                <yd-tabbar-item title="我的" link="/user">
                    <img slot="icon" style="height: 25px;" src="../../static/images/icon_my.png">
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
            navbar: '楼盘信息',
            searchVal:'',
            show1: false,
            model1: '',
            district: District,
            page: 1,
            pageSize: 10,
            list: [
                {
                    img: "http://img1.shikee.com/try/2016/06/23/14381920926024616259.jpg",
                    title: "碧桂园",
                    marketprice: '碧桂园给你个五星级的家-碧桂园',
                    productprice: ''
                },
                {
                    img: "http://img1.shikee.com/try/2016/06/21/10172020923917672923.jpg",
                    title: "骆驼男装2016夏装男士短袖T恤 圆领衣服 印花男装体恤 半袖打底衫",
                    marketprice: 56.23,
                    productprice: 89.36
                },
                {
                    img: "http://img1.shikee.com/try/2016/06/23/15395220917905380014.jpg",
                    title: "条纹短袖T恤男士韩版衣服大码潮流男装夏季圆领体恤2016新款半袖",
                    marketprice: 56.23,
                    productprice: 89.36
                },
                {
                    img: "http://img1.shikee.com/try/2016/06/25/14244120933639105658.jpg",
                    title: "夏季青少年衣服男生潮牌t恤 男士 夏秋学生 日系棉短袖半袖男小衫",
                    marketprice: 56.23,
                    productprice: 89.36
                },
                {
                    img: "http://img1.shikee.com/try/2016/06/26/12365720933909085511.jpg",
                    title: "2016夏装新款时尚潮流短袖T恤男纯棉V领日系青少年韩版夏季上衣服",
                    marketprice: 56.23,
                    productprice: 89.36
                },
                {
                    img: "http://img1.shikee.com/try/2016/06/19/09430120929215230041.jpg",
                    title: "男装衣服男夏t恤 男士短袖t恤圆领夏季潮牌宽松原宿风半截袖男",
                    marketprice: 56.23,
                    productprice: 89.36
                }
            ]
        }
    },
    methods: {
        closeSearch(){
            console.info('============');
        },
        submitHandler(){

        },
        result1(ret) {
            console.info('ret___',ret);
            this.model1 = ret.itemName1 + ' ' + ret.itemName2 + ' ' + ret.itemName3;
        },
        loadList() {
            this.$http.jsonp('http://list.ydui.org/getdata.php?type=backposition', {
                params: {
                    page: this.page,
                    pagesize: this.pageSize
                }
            }).then(function (response) {
                const _list = response.body;

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


