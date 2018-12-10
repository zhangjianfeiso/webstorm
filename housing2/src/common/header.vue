<style scoped>
    body {
        background-color: #ff0000;
    }
</style>


<template>
    <yd-navbar title="NavBar">
        <router-link to="#" slot="left">
            <yd-navbar-back-icon></yd-navbar-back-icon>
        </router-link>
        <router-link to="#" slot="right">
            <yd-navbar-next-icon></yd-navbar-next-icon>
        </router-link>
    </yd-navbar>
</template>


<script>
export default {
    data() {
        return {msg: '这个是Home模板页'}
    },
    components: {}
}
</script>
