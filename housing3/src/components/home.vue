<style scoped>
</style>

<template>
    <div>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                msg: 'vue模板页'
            }
        },
        mounted:function () {
            var attr = $('img').eq(0).attr('src');
            if(attr && attr.indexOf(this.$global.baseUrl) < 0){
                attr = this.$global.baseUrl + attr;
            }
            //分享首页
            this.share({title:'测试分享功能',link:location.href,img:attr});
        }
    }
</script>
