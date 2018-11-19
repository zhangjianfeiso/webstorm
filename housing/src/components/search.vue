<style scoped>
    body {
        background-color: #ff0000;
    }
    .header{
      padding: 0px 10px 0px 10px;
    }
    .city,.searchWrap{
      background: white;
    }
</style>


<template>
    <div>
      <div class="index header">
        <!--<a class="menu" tapmode="" onclick="sliding()"></a>-->
       <!-- <a class="close hidden" tapmode="" onclick="closeSearch()"></a>-->

        <div class="city location" @click="goCity" tapmode="">
          <p id="city">{{ city }}</p>
          <input type="hidden" v-model="city"/>
        </div>
        <div class="searchWrap"  tapmode="">
          <i class="fa fa-search" aria-hidden="true" @click="search"></i>
          <input type="text" v-model="qsearch" placeholder="请输入楼盘名称/地址..."/>
        </div>
        <!--<a class="phone " tapmode="" onclick="phone()"></a>-->
      </div>
    </div>
</template>


<script>
export default {
    data() {
        return {
            qsearch:'',
            city:'上海'
        }
    },
    methods:{
        goCity:function () {
            console.info('点击了城市按钮！',this.city);
        },
        search:function () { //搜索按钮
            this.$emit('search',this.qsearch); //子望父传值
        }
    },
    components: {}
}
</script>
