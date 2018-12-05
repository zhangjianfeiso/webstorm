<style scoped>
    * {
        -webkit-tap-highlight-color: rgba(255, 255, 255, 0) !important;
        -webkit-focus-ring-color: rgba(255, 255, 255, 0) !important;
        outline: none !important;
    }

    div {
        margin: 0;
        border: 0;
        padding: 4px;
        font-style: normal;
        color: #323232;
    }

    .header2d {
        width: 100%;
        position: relative;
        /* margin: -3px !important; */
        border-bottom: 1px solid #acb3c0;
        padding: 12px;
        font-style: normal;
        color: #323232;
        height: 25px;
        display: -webkit-box;
        -webkit-box-pack: center;
        -webkit-box-align: center;
        background-color: #3ABA63;
        margin-left: -12px;
        margin-top: -12px;
    }

    .header2 {
        width: 100%;
    }

    .header2 .btn2 {
        display: block;
        background-size: 30px;
        background-repeat: no-repeat;
        background-position: center;
        padding: 10px;
    }

    .back2 {
        float: left;
        background-image: url(../../../static/images/arrow_grey_left_pressed.png);
    }

    .title2 {
        -webkit-box-flex: 1;
        text-align: center;
        font-size: 20px;
        margin-top: -5px;
    }

    .order2 {
        color: #ffffff;
        font-size: 16px;
        background-image: url("../../../static/images/icon_order_now@2x.png");
        background-position-x: 35% !important;
        padding: 15px !important;
        text-align: center;
    }

    .footer2 {
        position: absolute;
        margin: 0;
        border: 0;
        padding: 0;
        font-style: normal;
        color: #323232;
        width: 100%;
        bottom: 0;
        left: 0;
        background-color: #3ABA63;
    }

    .footer2 .btn2 {
        display: block;
        background-size: 30px;
        background-repeat: no-repeat;
        background-position: center;
    }

    .content2 {
        -webkit-box-flex: 1;
        position: absolute;
        /* top: 60px;*/
        height: 100%;
        width: 100%;
        display: table-cell;
        vertical-align: middle;
        text-align: center;
        margin-left: -5px;
        /*background: aliceblue;*/
        background: #3ABA63;
    }

    .content2 .qrcode-content2 {
        height: 80%;
        width: 80%;
        display: inline-block;
        border: 1px solid #9A9A9A;
        border-radius: 20px;
        vertical-align: middle;
        text-align: center;
        position: relative;
        background: white;
    }

    .content2 .img2 {
        width: 90%;
        margin: auto;
        position: relative;
        top: 43px;
        left: 0;
        bottom: 0;
        right: 0;
    }

    .button-group2 {
        width: 100%;
        height: 30px;
        text-align: center;
        margin-left: -2px;
        border-bottom: 1px solid #bac0c0;
    }

    .button-group2 .nav-btn2 {
        height: 30px;
        width: 49%;
        text-align: center;
        padding: 0 !important;
        margin: 0 !important;
    }

    .button-group2 .nav-btn2 a {
        text-decoration: none;
        /*color:green!important;*/
    }

    .button-group2 .broker2 {
        float: left;
        cursor: pointer;
    }

    .button-group2 .tourist2 {
        float: right;
        border-left: 1px solid #bac0c0;
        cursor: pointer;
    }

    .tourist-btn2 {
        height: 30px;
        border-bottom: 1px solid #bac0c0;
    }

    .ck .bd {
        background: rgba(0, 0, 0, 0.8);
        border-radius: 50%;
        width: 0px;
        height: 0px;
        position: absolute;
        -webkit-transform: scale(0);
        transform: scale(0);
        opacity: 1;
    }

    .dh {
        animation: ldm 0.8s;
        -moz-animation: ldm 0.8s;
        -o-animation: ldm 0.8s;
        -webkit-animation: ldm 0.8s;
    }

    @-webkit-keyframes ldm {
        100% {
            -webkit-transform: scale(1);
            opacity: 0
        }
    }

    @keyframes ldm {
        100% {
            -webkit-transform: scale(1);
            opacity: 0
        }
    }








    .lbOverlay{
        display: none;
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        zoom: 1;
        background: black;
        z-index: 999;
        width:100%;
        height:100%;
        filter:alpha(opacity=50); /*IE滤镜，透明度50%*/
        -moz-opacity:0.5; /*Firefox私有，透明度50%*/
        opacity:0.5;/*其他，透明度50%*/
    }
    .hidden_pro_au {
        display:none;
        background: #fff;
        padding: 6px;
        text-align: left;
        background: #ccc;
        overflow: auto;
        position: absolute;
        top: 0!important;
        left: 0;
        z-index: 9999999
    }

</style>

<template>
    <div>
        <div class="header2d">
            <div class="header2">
                <router-link class="back2 btn2" :to="{path: '/user', query: {curMenu: 4}}"></router-link>
                <div class="title2" id="title">我的二维码</div>
            </div>
        </div>
        <div style="width: 100%;height: 20px;background-color: #3ABA63;padding-left: 20px;margin-left: -12px;"></div>
        <div class="content2">
            <div class="qrcode-content2">
                <div class="button-group2">
                    <div class="broker2 nav-btn2 ck" @click="ck($event,1)"><span class="bd"></span>推荐经纪人</div>
                    <div class="tourist2 nav-btn2 ck" @click="ck($event,2)"><span class="bd"></span>推荐客户</div>
                </div>
                <!--<div class="tourist-btn">
                    推荐客户
                </div>-->
                <div class="img2" id="qrcode">
                    <div id="broker-canvas" style="display: none">
                        <canvas @click="amplification($event)"></canvas>
                        <div class="lbOverlay" @click="close"></div>
                        <img class="hidden_pro_au"  @click="close" style="display: none"/>
                    </div>
                    <div id="tourist-canvas" style="display: none">
                        <canvas @click="amplification($event)"></canvas>
                        <div class="lbOverlay" @click="close"></div>
                        <img class="hidden_pro_au" @click="close" style="display: none"/>
                    </div>
                </div>

            </div>

        </div>
        <!--<footer class="footer">
            <div class="btn order" tapmode="" onclick="api.alert({msg:'预订成功!'})">立即预定</div>
        </footer>-->
    </div>
</template>

<!--
    cnpm install vue-qart --save
 -->

<script>

import QRCode from 'qrcode';  //npm i QRCode --save

export default {
    data() {
        return {
            downloadButton: false,
            config: {
                value: 'https://baidu.com',
                imagePath: '../../../static/images/a.jpg',
                filter: 'color',
                size: 300
            }
        }
    },
    mounted: function () {
        this.qrcode();
    },
    methods: {
        ck: function (event,tab) {
            $('.ck').css('color','black');
            var obj = event.currentTarget;
            $(obj).find(".bd").removeClass("dh");
            var R = 30;
            $(obj).find(".bd").css({"width": (R * 2) + "px", "height": (R * 2) + "px"});
            var left = ($(obj).width().left - R)  + 'px';
            var top = ($(obj).height() / 2 - R)+ 'px';
            $(obj).find(".bd").css({
                "left": left,
                "top": top
            });
            // $(this).find(".bd").css({"left":(e.pageX-$(this).position().left-R/2 )+"px","top":(e.pageY-$(this).position().top-R/2 )+"px" });
            $(obj).find(".bd").addClass("dh");
            $(obj).css('color','red');
            $('#broker-canvas,#tourist-canvas').hide();
            if(tab == 1){
                $('#broker-canvas').show();
            }else{
                $('#tourist-canvas').show();
            }
        },
        qrcode() {
            var canvasArrays = ['#broker-canvas','#tourist-canvas'];
            for(var x=0; x<canvasArrays.length; x++){
                var canvasId = canvasArrays[x];
                var url = 'https://www.baidu.com';
                if(x == 0){
                    $(canvasId).show();
                    $('.nav-btn2').eq(0).css('color','red');
                    url = 'http://www.12306.cn';
                }
                var canvas = $(canvasId).find('canvas')[0];
                var widhth = $('#qrcode').width();
                QRCode.toCanvas(canvas, url,{width:widhth,height:widhth}, function (error) {
                })
                $(canvasId).find('img').attr('src',this.convertCanvasToImage(canvas));
            }

        },
        amplification:function (event) { //点击二维码
            $(".lbOverlay").css({"height":window.screen.availHeight});
            $(".lbOverlay").show();
            var st=$(document).scrollTop(); //页面滑动高度
            var objH=$(".hidden_pro_au").height();//浮动对象的高度
            var ch=$(window).height();//屏幕的高度
            var objT=Number(st)+(Number(ch)-Number(objH))/2;   //思路  浮动高度+（（屏幕高度-对象高度））/2
            $(".hidden_pro_au").css("top",objT);

            var sl=$(document).scrollLeft(); //页面滑动左移宽度
            var objW=$(".hidden_pro_au").width();//浮动对象的宽度
            var cw=$(window).width();//屏幕的宽度
            var objL=Number(sl)+(Number(cw)-Number(objW))/2; //思路  左移浮动宽度+（（屏幕宽度-对象宽度））/2
            //$(".hidden_pro_au").css("left",objL);
            $(".hidden_pro_au").fadeIn(200);//这里显示方式多种效果
        },
        close:function (canvas) {
            $(".lbOverlay").fadeOut(400);
            $(".hidden_pro_au").fadeOut(400);
        },
        convertCanvasToImage:function (canvas) {
            // canvas.toDataURL 返回的是一串Base64编码的URL，当然,浏览器自己肯定支持
            return canvas.toDataURL("image/png");;
        }
    },
    components:{QRCode}
}
</script>
