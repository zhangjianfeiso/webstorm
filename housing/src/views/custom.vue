<style scoped>
    .contains{
        position: absolute;
        left: 0!important;
        bottom: 0!important;
        width: 100%!important;
        z-index: 0!important;
        overflow: scroll;
        overflow-x: hidden;
        height: 90%;
        top: 32px;
        margin: 0;
    }
</style>


<template>
    <div>
        <div class="search-contains">
            <vheader :headeritle="headeritle"></vheader>
        </div>
        <div class="contains">
            <vlist></vlist>
        </div>
        <vmenu></vmenu>
    </div>
</template>


<script>
import vmenu from '@/components/menu.vue'
import vlist from '@/views/custom/list.vue'
import vheader from '@/components/header.vue'


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
        return {
            headeritle:'我的客户'
        }
    },
    components: {vmenu,vlist,vheader}
}
</script>
