<style scoped>
    .icon-img{
        width: 100%;
        height: 90px;
        text-align: center;
        vertical-align: middle;
    }
    .icon-img img{
        height: 80px;
    }
    .icon-text{
        width: 100%;
        text-align: center;
    }
    .icon-content{
        position: absolute;
        top:25%;
        left:0;
        bottom:0;
        right: 0;
        margin: auto;
    }
</style>

<template>
    <div>
        <div class="icon-content">
            <div class="icon-img">
                <img src="../../static/images/icon_warn.png"/>
            </div>
            <div class="icon-text">{{ msg }}</div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                msg: '请在微信客户端打开链接'
            }
        }
    }
</script>
