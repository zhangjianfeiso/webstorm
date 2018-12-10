<style scoped>
</style>

<template>
    <div>

        <yd-layout>
            <yd-navbar slot="navbar" :title="navbar">
                <router-link to="#" slot="left" @click.native="gotoBack">
                    <yd-navbar-back-icon></yd-navbar-back-icon>
                </router-link>
            </yd-navbar>



        </yd-layout>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                navbar: '进度查询'
            }
        },
        methods:{
            gotoBack(){
                this.$router.replace('detail');
            }
        }
    }
</script>
