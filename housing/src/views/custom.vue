<style scoped>
    body {
        background-color: #ff0000;
    }
</style>


<template>
    <div>
        <h1>This is custom ...{{ this.$route.query.curMenu }}</h1>
        <vmenu></vmenu>
    </div>
</template>


<script>
import vmenu from '@/components/menu.vue'
export default {
    mounted:function () {
        this.setShareOpenid();
        this.getOpenId().then(openid => {
            console.info('openid___',openid);
        });
        this.share({title:'自定义朋友圈_客户',
            desc:'这是描述——客户',
            link:location.href + '?shareOpenid=hkkKL-KLMKkkmdksa121jkl',
            img: this.$global.mainImg});
    },
    data() {
        return {msg: '这个是Home模板页'}
    },
    components: {vmenu}
}
</script>
