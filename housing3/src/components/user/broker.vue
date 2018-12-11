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
</style>

<template>
    <div>
        <yd-layout>
            <!-- 回到顶部 -->
            <yd-backtop></yd-backtop>

            <yd-navbar slot="navbar" :title="navbar">
                <router-link to="/user" slot="left">
                    <yd-navbar-back-icon></yd-navbar-back-icon>
                </router-link>
            </yd-navbar>

            <yd-infinitescroll :callback="loadList" ref="infinitescrollDemo">
                <yd-list theme="4" slot="list">
                    <yd-list-item v-for="item, key in list" :key="key">
                        <img slot="img" :src="item.img" style="border-radius: 50%;">
                        <span slot="title">{{item.title}}</span>
                        <span slot="title" style="margin-left: 10px;">18551154098</span>
                        <yd-list-other slot="other">
                            <div>
                                <span class="list-price">加入时间：</span>
                                <span class="list-del-price">{{item.productprice}}</span>
                            </div>
                            <div></div>
                        </yd-list-other>
                        <yd-list-other slot="other">
                            <div>
                                <span class="list-price">成交房屋：</span>
                                <span class="list-del-price">{{item.marketprice}}</span>
                            </div>
                            <div>
                                <img slot="icon" style="height: 15px;" src="../../../static/images/icon_right_2x.png">
                            </div>
                        </yd-list-other>
                        <yd-list-other slot="other">
                            <div>
                                <span class="list-price">合作客户：</span>
                                <span class="list-del-price">128</span>
                            </div>
                        </yd-list-other>
                    </yd-list-item>
                </yd-list>
                <!-- 数据全部加载完毕显示 -->
                <span slot="doneTip">啦啦啦，啦啦啦，没有数据啦~~</span>
                <!-- 加载中提示，不指定，将显示默认加载中图标 -->
                <img slot="loadingTip" src="http://static.ydcss.com/uploads/ydui/loading/loading10.svg"/>
            </yd-infinitescroll>



        </yd-layout>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                navbar: '我的经纪人',
                page: 1,
                pageSize: 10,
                list: [
                    {
                        img: "http://img1.shikee.com/try/2016/06/23/14381920926024616259.jpg",
                        title: "张三",
                        marketprice: '50套',
                        productprice: '2018-11-03 12:00:00'
                    },
                    {
                        img: "http://img1.shikee.com/try/2016/06/21/10172020923917672923.jpg",
                        title: "李四",
                        marketprice: 56.23,
                        productprice: 89.36
                    },
                    {
                        img: "http://img1.shikee.com/try/2016/06/23/15395220917905380014.jpg",
                        title: "王五",
                        marketprice: 56.23,
                        productprice: 89.36
                    },
                    {
                        img: "http://img1.shikee.com/try/2016/06/25/14244120933639105658.jpg",
                        title: "李万春",
                        marketprice: 56.23,
                        productprice: 89.36
                    },
                    {
                        img: "http://img1.shikee.com/try/2016/06/26/12365720933909085511.jpg",
                        title: "黄大岗",
                        marketprice: 56.23,
                        productprice: 89.36
                    },
                    {
                        img: "http://img1.shikee.com/try/2016/06/19/09430120929215230041.jpg",
                        title: "邓海春",
                        marketprice: 56.23,
                        productprice: 89.36
                    }
                ]
            }
        },
        methods:{
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
        }
    }
</script>
