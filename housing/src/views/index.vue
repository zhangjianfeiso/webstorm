<style scoped>
    body {
        background-color: #ff0000;
    }
  .search-contains{
      height:80px;
      z-index: 10100!important;
  }
    .contains{
        position: absolute!important;
        top:70px!important;
        bottom:30px!important;
        height: auto;
        margin-bottom: 0px;
        margin-top: 0px;
    }
</style>


<template>
    <div>
        <div v-if="show">
            <vloading></vloading>
        </div>
        <div class="search-contains">
            <vheader :headeritle="headeritle"></vheader>
            <vsearch @search="search"></vsearch>
        </div>
        <div class="contains">
            <vhousing></vhousing>
        </div>
        <vmenu></vmenu>
    </div>
</template>


<script>
import vmenu from '@/components/menu.vue'
import vsearch from '@/components/search.vue'
import vheader from '@/components/header.vue'
import vloading from '@/components/loading.vue'
import vhousing from '@/views/housing/housing.vue'

export default {
    data() {
        return {
            show:false,
            headeritle: '楼盘信息'
        }
    },
    methods:{
      search:function (qsearch) {
          console.info('点击了搜索按钮。。。。',qsearch);
      }
    },
    components: {vmenu,vsearch,vheader,vloading,vhousing}
}
</script>
