<style scoped>
</style>

<template>
    <div>
        <div id="container" style="width:100%;height: 300px;">
            <img slot="loadingTip" id="loadingTip" style="margin-top: 100px;" src="http://static.ydcss.com/uploads/ydui/loading/loading10.svg"/>
        </div>
        <button @click="addMarker">add</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                map:{},
                center:[116.397428, 39.90923],
                infowindow:''
            }
        },
        mounted: function () {
            var $this = this;
            var interval = setInterval(() => {
                if(AMap){
                    clearInterval(interval);
                    $this.init();
                }
            },1000);
        },
        methods: {
            init() {
                var $this = this;
                $this.map = new AMap.Map("container", {
                    resizeEnable: true,
                    center: this.center ,
                    zoom: 13
                });
                $this.map.on('complete', function() {
                    $('#loadingTip').detach();
                    console.info("地图图块加载完毕！当前地图中心点为：" + $this.center);
                    $this.addMarker();
                });
            },
            addMarker() {
                var $this = this;
                AMap.service("AMap.PlaceSearch", function () {
                    var s1 = new AMap.PlaceSearch({
                        city: "北京市", // 搜索范围的城市
                        map: $this.map, // 可选，AMap示例
                        //  panel:"result", // 可选，结果列表的HTML容器id或容器元素
                        pageSize: 30, // 结果，单页展示结果数
                        pageIndex: 1, // 结果，页码
                        // extensions: "all" // 信息，默认值 "base", 详细信息 "all"
                    });
                    s1.searchNearBy("三甲医院", $this.center, 5000, function (status, result) {
                        console.info(result);
                    });
                    var icon = new AMap.Icon({
                        size: new AMap.Size(40, 40),    // 图标尺寸
                        image: '../../../static/images/icon_center.png',  // Icon的图像
                        //image: 'http://47.107.129.140/icon_metro.png',  // Icon的图像
                        imageSize: new AMap.Size(40, 40)   // 根据所设置的大小拉伸或压缩图片
                    });
                    var marker = new AMap.Marker({
                        icon: icon,
                        position: $this.center,
                        offset: new AMap.Pixel(-20, -35)
                    });
                    marker.on('click', $this.centerMarkerClick);
                    marker.emit('click', {target: marker});
                    // 将创建的点标记添加到已有的地图实例：
                    marker.setMap($this.map);
                });

                this.openInfo();

            },
            centerMarkerClick(){
                console.info('==========',this.infowindow);
                if(this.infowindow){
                    this.infowindow.open(this.map, this.center);
                }
            },
            openInfo() {
                //构建信息窗体中显示的内容
                var info = [];
                info.push('<div style="padding:0px 0px 0px 0px;"><h3 style="background: #1287ef;line-height: 26px;color: white;">高德软件</h3>');
                info.push('<p class="input-item">电话 : 010-84107000   邮编 : 100102</p>');
                info.push('<p class="input-item">地址 :北京市朝阳区望京阜荣街10号首开广场4层</p></div></div>');
                var $this = this;
                AMap.plugin('AMap.AdvancedInfoWindow',function() {
                    $this.infowindow = new AMap.AdvancedInfoWindow({
                        content: info.join(''),
                        offset: new AMap.Pixel(0, -30),
                       // asOrigin: false
                    });
                    $this.infowindow.open($this.map, $this.center);
                });
            }
        }
    }
</script>
