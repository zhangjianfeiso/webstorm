<style scoped>
    body {
        background-color: #ff0000;
    }
</style>


<template>
    <div>
        <router-view></router-view>
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
