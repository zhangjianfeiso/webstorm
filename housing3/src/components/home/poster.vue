<style scoped>

    #canbox {
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
    }
    .canimg {
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
    }
</style>

<template>
    <div>
        <yd-layout>
            <yd-navbar slot="navbar" :title="navbar">
                <router-link to="/" slot="left">
                    <yd-navbar-back-icon></yd-navbar-back-icon>
                </router-link>

                <!--<router-link  v-if="isChange" to="#" slot="right" :class="saveBtn" @click.native="save">
                    <yd-icon name="checkoff" size=".3rem"></yd-icon>保存
                </router-link>-->
            </yd-navbar>

            <div style="height: 100%;" class="body-vertical">
                <div id="qrcode"></div>
                <div id="canbox">
                    <canvas id="myCanvas" width="" height=""></canvas>
                </div>
                <img class="canimg" src=""/>
            </div>
        </yd-layout>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                navbar: '海报制作'
            }
        },
        mounted:function () {
            setTimeout(() => {
                var qrcode = new QRCode(document.getElementById("qrcode"), {
                    text:'你想干嘛！',
                    correctLevel:QRCode.CorrectLevel.H,
                    width : 72,
                    height : 72
                });

                //画海报
                var width = document.getElementById("canbox").offsetWidth; //宽度
                var height = document.getElementById("canbox").offsetHeight; // 高度
                var c = document.getElementById("myCanvas");
                c.width = width
                c.height = height
                var ctx = c.getContext("2d");
                //首先画上背景图
                var img = new Image();
                img.src = '../../../static/images/1.jpg';
                img.setAttribute("crossOrigin", 'Anonymous')
                var x_bot = height - 44  //画上名字
                ctx.font = "19px Georgia";


                var mycans = $('canvas')[0];//二维码所在的canvas
                var codeimg = this.convertCanvasToImage(mycans);
                var xw = 0//width - 72 - 29
                var xh = 42//height - 6 - 72


                img.onload = function() { //必须等待图片加载完成
                    ctx.drawImage(img, 0, 0, width, height); //绘制图像进行拉伸
                    ctx.fillText('户型', 28, x_bot);
                    ctx.fillText('价钱', 78, x_bot);
                    ctx.drawImage(codeimg, xw, xh, 72, 72);
                    //绘制完成,转为图片
                    setTimeout(function() {  //在ios上无法在画完之后取到整个画布内容，加了个settimeout
                        var bigcan = $('canvas')[1];
                        let images = new Image();
                        images.src = bigcan.toDataURL("image/png");
                        //alert(bigcan.toDataURL("image/png"))
                        images.setAttribute("crossOrigin", 'Anonymous')
                        $('.canimg').attr('src', bigcan.toDataURL("image/png"))
                    }, 0)
                }
            },1500)

        },
        methods:{
            convertCanvasToImage(canvas){
                var image = new Image();
                image.src = canvas.toDataURL("image/png");
                return image;

            }
        }
    }
</script>
