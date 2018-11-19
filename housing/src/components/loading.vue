<style scoped>
    body {
        background-color: #ff0000;
    }
    .loading{
        z-index: 1020;
        position: absolute;
        top:50%;
        left:43%;
        color:#F14500;
    }
</style>


<template>
    <div class="loading">
        <i class="fa fa-spinner fa-pulse fa-3x fa-fw margin-bottom"></i>
    </div>
</template>


<script>
export default {
    data() {
        return {msg: '这个是Home模板页'}
    },
    components: {}
}
</script>
