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
    .header2{
        width:100%;
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
        position: absolute;
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
    .button-group2 .nav-btn2 a{
        text-decoration:none;
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
    .tourist-btn2{
        height: 30px;
        border-bottom: 1px solid #bac0c0;
    }







    .ck .bd {
        background: rgba(0, 0, 0,0.8);
        border-radius: 50%;
        width: 0px;
        height: 0px;
        position: absolute;
        -webkit-transform: scale(0);
        transform: scale(0);
        opacity: 1;
    }

    .dh {
        animation: ldm 0.8s ;
        -moz-animation: ldm 0.8s ;
        -o-animation: ldm 0.8s ;
        -webkit-animation: ldm 0.8s  ;
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
</style>

<template>
    <div>
        <div class="header2d">
            <div class="header2">
                <div class="back2 btn2"@click="gotoBack"></div>
                <div class="title2" id="title">我的二维码</div>
            </div>
        </div>
        <div style="width: 100%;height: 20px;background-color: #3ABA63;padding-left: 20px;margin-left: -12px;"></div>
        <div class="content2">
            <div class="qrcode-content2">
                <div class="button-group2">
                    <div class="broker2 nav-btn2 ck" @click="ck($event)"><span class="bd"></span>推荐经纪人</div>
                    <div class="tourist2 nav-btn2 ripple" @click="ck($event)">推荐客户</div>
                </div>
                <!--<div class="tourist-btn">
                    推荐客户
                </div>-->
                <div class="img2">
                    <!--<vue-q-art :config="config" :downloadButton="downloadButton"></vue-q-art>-->
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
    /*import VueQArt from 'vue-qart'*/
    export default {
        data() {
            return {
                downloadButton:false,
                config: {
                    value: 'https://baidu.com',
                    imagePath: '../../../static/images/a.jpg',
                    filter: 'color',
                    size:300
                }
            }
        },
        methods:{
            ck:function (event) {
                var obj = event.currentTarget;
                $(obj).find(".bd").removeClass("dh");
                var R=6;
                R= parseInt($(obj).outerWidth());
                if(parseInt($(obj).outerWidth())<parseInt($(obj).outerHeight())){
                    R= parseInt($(obj).outerHeight());
                }
                $(obj).find(".bd").css({"width":(R*2)+"px","height":(R*2)+"px"});
                $(obj).find(".bd").css({"left":(event.pageX-$(obj).position().left-R)+"px","top":(event.pageY-$(obj).position().top-R)+"px" });
                // $(this).find(".bd").css({"left":(e.pageX-$(this).position().left-R/2 )+"px","top":(e.pageY-$(this).position().top-R/2 )+"px" });
                $(obj).find(".bd").addClass("dh");
            },
            gotoBack:function () {
                this.$router.push({path: '/user', query: {curMenu: 4}});
            }
        },
        //components:{VueQArt}
    }
</script>
