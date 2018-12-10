<style scoped>
    body {
        background-color: #ff0000;
    }
</style>


<template>
    <yd-navbar :title="navbar">
        <router-link to="#" slot="left">
            <yd-navbar-back-icon></yd-navbar-back-icon>
        </router-link>
    </yd-navbar>
</template>


<script>
export default {
    data() {
        return {
          navbar:'首页'
        }
    },
    components: {}
}
</script>
