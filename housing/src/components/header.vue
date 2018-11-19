<style scoped>
    body {
        background-color: #ff0000;
    }
</style>


<template>
    <div>
      <div class="header ">
        <a></a>
        <div class="title">{{ headeritle }}</div>
        <a></a>
      </div>
    </div>
</template>


<script>
export default {
    props:{
      headeritle:''//父传值给子
    },
    data() {
        return {msg: '这个是Home模板页'}
    },
    components: {}
}
</script>
