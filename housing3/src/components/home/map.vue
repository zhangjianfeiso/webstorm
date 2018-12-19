<style scoped>
</style>

<template>
    <div>
        <div id="container" style="width:500px; height:300px"></div>

        <button @click="switchover">地铁</button>
    </div>
</template>

<script>

    var map, s1;
    export default {
        mounted: function () {
            setTimeout(() => {
                this.init()
            }, 100);
        },
        methods: {
            init: function () {
                map = new AMap.Map('container', {
                    center: [116.397428, 39.90923],
                    resizeEnable: true,
                    zoom: 11
                })
                /*AMap.plugin(['AMap.ToolBar', 'AMap.Scale'], function () {
                     map.addControl(new AMap.ToolBar())
                     map.addControl(new AMap.Scale())
                 })*/
                console.info('------------1');
                // 创建地点查询类的实例
                setTimeout(() => {
                    AMap.service("AMap.PlaceSearch", function () {
                        console.info('-------3');
                        s1 = new AMap.PlaceSearch({
                            city: "北京市", // 搜索范围的城市
                            type: "风景名胜", // 搜索类型
                            map: map, // 可选，AMap示例
                            //  panel:"result", // 可选，结果列表的HTML容器id或容器元素
                            pageSize: 30, // 结果，单页展示结果数
                            pageIndex: 1, // 结果，页码
                            extensions: "all" // 信息，默认值 "base", 详细信息 "all"
                        });
                        console.info('s1__',s1);
                        // 周边搜索
                        map.clearMap();
                        s1.searchNearBy("地铁", [116.397428, 39.90923], 5000, function (status, result) {
                            console.log(result);
                        });
                    });
                },200)
                console.info('------------2');
            },
            switchover(){
                s1.searchNearBy("酒店", [116.397428, 39.90923], 5000, function (status, result) {
                    console.log(result);
                    var pois = result.poiList.pois;
                    for(var i = 0; i < pois.length; i++){
                        var poi = pois[i];
                        var marker = [];
                        var icon = new AMap.Icon({
                            size: new AMap.Size(40, 50),    // 图标尺寸
                            zIndex:'10000',
                            image: 'http://47.107.129.140/icon_metro.png',  // Icon的图像
                            //imageOffset: new AMap.Pixel(0, -60),  // 图像相对展示区域的偏移量，适于雪碧图等
                            imageSize: new AMap.Size(20, 20)   // 根据所设置的大小拉伸或压缩图片
                        });
                        marker[i] = new AMap.Marker({
                            icon:icon,
                            position: poi.location,   // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
                            title: poi.name
                        });
                        // 将创建的点标记添加到已有的地图实例：
                        map.add(marker[i]);
                    }
                    map.setFitView();
                });
            }
        }
    }
</script>
