<template>
    <div class="amap-page-container">
        <el-amap vid="amap" :zoom="zoom" :center="center" class="amap-demo">
            <el-amap-info-window
                :position="currentWindow.position"
                :content="currentWindow.content"
                :visible="currentWindow.visible"
                :events="currentWindow.events">
            </el-amap-info-window>
        </el-amap>
        <button @click="switchWindow(0)">Show First Window</button>
        <button @click="switchWindow(1)">Show Second Window</button>
    </div>
</template>

<style>
    .amap-page-container,.amap-demo {
        height: 300px;
        width: 100%;
    }
</style>

<script>
    export default {
        data () {
            return {
                zoom: 14,
                center: [121.5273285, 31.21515044],
                currentWindow: {
                    position: [121.5273285, 31.21515044],
                    content: '广东省广州市天河区凌塘村',
                    visible: true,
                    events: {
                       /* close() {
                            console.log('close infowindow1');
                        }*/
                    }
                }
            }
        },
        mounted() {

        },
        methods: {

        }
    };
</script>
