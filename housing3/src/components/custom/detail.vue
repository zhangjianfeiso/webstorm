<style scoped>
    section {
        position: absolute;
        width: 100%;
    }
</style>


<template>
    <div>
        <yd-layout>
            <!-- 头部开始 -->
            <yd-navbar slot="navbar" :title="navbar">
                <router-link to="/custom" slot="left">
                    <yd-navbar-back-icon></yd-navbar-back-icon>
                </router-link>
            </yd-navbar>
            <!-- 头部结束 -->

            <!-- 搜索开始 -->
            <yd-tab v-model="tab2" :callback="fn" :prevent-default="false" :item-click="itemClick">
                <yd-tab-panel v-for="item in items" :label="item.label">

                    <div>{{ item.content.name }}</div>
                    <div>{{ item.content.states }}</div>

                </yd-tab-panel>
            </yd-tab>
            <!-- 搜索结束 -->


            <!-- 主体内容开始 -->

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
                <yd-tabbar-item title="我的" link="#">
                    <img slot="icon" style="height: 25px;" src="../../../static/images/icon_my.png">
                </yd-tabbar-item>
            </yd-tabbar>

        </yd-layout>
    </div>
</template>


<script>
export default {
    data() {
        return {
            navbar:'客户详情',
            tab2: 0,
            items: [
                {label: '预约', content: {name:'张三',states:'预约成功'}},
                {label: '到访', content:  {name:'李四',states:'到访成功'}},
                {label: '认筹', content:  {name:'王五',states:'认筹成功'}},
                {label: '认购', content:  {name:'王麻子',states:'认购成功'}}
            ]
        }
    },
    mounted:function () {
        console.info(this.$route.query.name);
        this.tab2 = this.$route.query.state?(this.$route.query.state - 1):0;
    },
    methods: {
        fn(label, key) {
            console.log(label, key);
        },
        itemClick(key) {
            this.$dialog.loading.open('数据加载中');
            setTimeout(() => {
                this.tab2 = key;
                this.$dialog.loading.close();
                this.items[key].content = {name:'新内容【key:' + key + '】',states:'新内容_' + new Date().getTime()};
            }, 1000);
        }
    },
    components: {}
}
</script>
