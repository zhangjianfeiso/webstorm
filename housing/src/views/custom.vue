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
        this.setShareUser();
        this.getOpenId().then(user => {
            this.share({title:'自定义朋友圈_客户',
                desc:'这是描述——客户',
                link:location.href + '?shareUser=' + JSON.stringify(user),
                img: this.$global.mainImg});
        });

    },
    data() {
        return {msg: '这个是Home模板页'}
    },
    components: {vmenu}
}
</script>
