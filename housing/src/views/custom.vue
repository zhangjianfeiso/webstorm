<style scoped>

</style>


<template>
    <div>
        <div class="contains"  id="img_contains">
            <vlist></vlist>
        </div>
        <vmenu></vmenu>
    </div>
</template>


<script>
import vmenu from '@/components/menu.vue'
import vlist from '@/views/custom/list.vue'


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
    components: {vmenu,vlist}
}
</script>
