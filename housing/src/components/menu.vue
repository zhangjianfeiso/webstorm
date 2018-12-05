<style scoped>
    html, body {
        background-color: transparent;
    }

    nav {
        background: #DDDDDD;
    }

    .tab-content {
        /*background: gainsboro;*/
        background: white;
        display: -webkit-box;
        position: fixed;
        bottom: 0;
        width: 100%;
        font-size: 12px;
    }

    .tab-content li {
        width: 25%;
        /*border-right: 1px solid #C2C2C2;*/
        border-top: 1px solid #C2C2C2;
        text-align: center;
        /*padding: 20px 0 10px;
        background-size: 30px;
        background-repeat: no-repeat;
        background-position-x: center;
        background-position-y: 5px;*/
    }

    .tab-content li a {
        /*margin: 15px 10px 0 10px;*/
        color: #9A9A9A;
        margin-bottom: 4px;
    }

    .tab-content li i {
        color: gray;
    }

    .tab-content li .fa-2x {
        font-size: 1.7em;
        margin: 2px;
    }

    /* .search {
       background-image: url("../../static/images/dock_icon_search@2x.png");
     }

     .user {
       background-image: url("../../static/images/dock_icon_my_tuniu@2x.png");
     }

     .groupchat {
       background-image: url("../../static/images/dock_icon_groupchat@2x.png");
     }

     .service {
       background-image: url("../../static/images/dock_icon_service@2x.png");
     }*/
    .fa-group {
        font-size: 1.4em !important;
        margin-top: 5px !important;
        margin-bottom: 2px !important;
    }
</style>


<template>
    <div>
        <nav>
            <ul class="tab-content">
                <li class="search" tapmode="" @click.stop="goHome($event)">
                    <i class="fa fa-home fa-2x fa-index" aria-hidden="true"></i><br/>
                    <a class="fa-index">首页</a>
                </li>
                <li class="user" tapmode="" @click.stop="goCustom($event)">
                    <i class="fa fa-group fa-2x fa-custom" aria-hidden="true"></i>
                    <br/>
                    <a class="fa-custom">客户</a>
                </li>
                <li class="groupchat" tapmode="" @click="goDynamic($event)">
                    <i class="fa fa-comment fa-2x fa-dynamic" aria-hidden="true"></i><br/>
                    <a href="javascript:;" class="fa-dynamic">动态</a>
                </li>
                <li class="service" tapmode="" @click="goMy($event)">
                    <i class="fa fa-user fa-2x fa-my" aria-hidden="true"></i><br/>
                    <a href="javascript:;" class="fa-my">我的</a>
                </li>
            </ul>
        </nav>
    </div>
</template>


<script>
    export default {
        data() {
            return {}
        },
        mounted: function () {
            this.changeMenuStyle();
        },
        methods: {
            changeMenuStyle() { //改变菜单颜色
                var curMenu = this.$route.query.curMenu || 1;
                switch (parseInt(curMenu)) {
                    case 1:
                        $('.tab-content li .fa-index').attr('style', 'color:red!important');
                        break;
                    case 2:
                        $('.tab-content li .fa-custom').attr('style', 'color:red!important');
                        break
                    case 3://fa-dynamic
                        $('.tab-content li .fa-dynamic').attr('style', 'color:red!important');
                        break;
                    case 4:
                        $('.tab-content li .fa-my').attr('style', 'color:red!important');
                        break;
                }
            },
            goHome(event) { // 跳到《首页》
                this.$router.push({path: '/', query: {curMenu: 1}});
            },
            goCustom(event) { //跳到《客户》
                this.$router.push({path: '/custom', query: {curMenu: 2}});
            },
            goDynamic(event) {//调到《动态》
                this.$router.push({path: '/dynamic', query: {curMenu: 3}});
            },
            goMy(event) {//跳到《我的》
                this.$router.push({path: '/user', query: {curMenu: 4}});
            }
        },
        components: {}
    }
</script>
