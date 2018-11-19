<style scoped>
    body {
        background-color: #ff0000;
    }
</style>


<template>
    <div>
        <h1>This is dynamic...{{ this.$route.query.curMenu}}</h1>
      <vmenu></vmenu>
    </div>
</template>


<script>
import vmenu from '@/components/menu.vue'
export default {
    data() {
        return {msg: '这个是Home模板页'}
    },
    components: {vmenu}
}
</script>
