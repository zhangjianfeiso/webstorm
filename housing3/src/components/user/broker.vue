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
                        <img slot="img" :src="item.img" style="border-radius: 50%;height: 80px;width:80px;border:1px solid rgb(228, 228, 228);">
                        <span slot="title">{{ item.name }}</span>
                        <span slot="title" style="margin-left: 10px;">{{ item.mobile }}</span>
                        <yd-list-other slot="other">
                            <div>
                                <span class="list-price">加入时间：</span>
                                <span class="list-del-price">{{ item.date }}</span>
                            </div>
                            <div></div>
                        </yd-list-other>
                        <yd-list-other slot="other">
                            <div>
                                <span class="list-price">成交房屋：</span>
                                <span class="list-del-price">{{ item.houses }}</span>
                            </div>
                            <div>
                                <img slot="icon" style="height: 15px;" src="../../../static/images/icon_right_2x.png">
                            </div>
                        </yd-list-other>
                        <yd-list-other slot="other">
                            <div>
                                <span class="list-price">合作客户：</span>
                                <span class="list-del-price">{{ item.customs }}</span>
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
                list: []
            }
        },
        created:function () {
            this.loadList();
        },
        methods:{
            loadList() {
                this.$http.get(this.$global.apiUrl + '/broker/list', {
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
        }
    }
</script>
