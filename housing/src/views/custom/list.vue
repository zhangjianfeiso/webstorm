<style scoped>
    body {
        background-color: #E5E5E5;
        padding: 10px 5px;
    }

    .content {
        width: 100%;
    }

    .content li {
        border: 1px solid #D6D6D6;
        margin: 10px 5px;
        padding: 10px;
        border-radius: 5px;
        /*background-color: #F4F4F4;*/
    }

    .item {
        white-space: nowrap;
        position:relative;
    }

    .item, .text {
        /*display: -webkit-box;*/
    }

    img {
        width: 30%;
        height: 80px;
        border-radius: 5px;
        float: left;
        margin-right: 10px;
    }

    .text {
        -webkit-box-flex: 1;
        -webkit-box-orient: vertical;
        margin: 0 5px;
        width: 70%;
    }

    .title {
        line-height: 20px;
        font-weight: 400 !important;
    }

    .large {
        text-align: left;
        color: #1654A7;
        font-size: 14px;
    }

    .price {
        text-align: left;
        margin-top: 10px;
        color: #A7A7A7;
    }

    .price span {
        color: #FC6B32;
        font-size: 20px;
    }

    del {
        color: #969696;
        margin-left: 20px;
    }

    .small {
        width: 100%;
        text-align: left;
        font-size: 13px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
    .item_title{
        width:100%;
        height: 30px;
        text-align: left;
        margin-bottom: 5px;
        border-bottom: 1px solid #D6D6D6;
        font-weight: 500;
    }
    .item_title .name{
        float: left;
        width:20%;
    }
    .item_title .phone-icon{
        width: 30px;
        height:30px;
        text-align: center;
        background-size: 30px ;
        float: right;
        margin:-5px auto;
    }
    .item_title .phone-icon i{
        font-size: 22px;
        margin-top: 4px;
        color:#969696;
    }
    .item .title .t1{
        color: black;
        font-weight: bold;
        font-size: 17px;
    }
    .item .title .t2{
        color:black;
        font-size: 12px;
    }
    .item .next{
        position: absolute;
        top:10px;
        right: 10px;
    }
    .item .next i{
        font-size: 34px;
        color: #E7E7E8;
    }
    .item_footer{
        width:100%;
        height: 40px;
        text-align: left;
        vertical-align: middle;
        margin-top: 5px;
        border-top: 1px solid #D6D6D6;
    }
    .item_footer div{
        line-height: 20px;
        width:100%;
    }
    .item_footer .t1,.t2{
       color: #969696;
    }
</style>

<template>
    <div>
        <ul class="content">
            <li onclick="toDetail()" tapmode="">
                <div class="item_title">
                    <span class="name">李渊易</span><span class="phone-text">18551154098</span>
                    <a class="phone-icon"><i class="fa fa-phone" aria-hidden="true"></i></a>
                </div>
                <div class="item">
                    <img src="../../../static/images/t0-1.jpg">
                    <div class="text">
                        <div class="title">
                            <div class="large t1">碧桂园</div>
                            <div class="large t2">所在区域：广州</div>
                            <div class="large t2">楼盘类型：住宅区</div>
                        </div>
                        <div class="price">
                            <span class="">10500</span>元/平米
                            <!--<del>￥159</del>-->
                        </div>
                    </div>
                    <div class="next"><i class="fa fa-angle-right" aria-hidden="true"></i></div>
                </div>
                <div class="item_footer">
                    <div style="margin-top: 4px;"><label class="t1">预约时间：</label><span class="t2">2018-12-07 12:00:00</span></div>
                    <div><label class="t1">客户备注：</label><span class="t2">客户想尽早确定房子,早点搬新家！</span></div>
                </div>
            </li>
            <li onclick="toDetail()" tapmode="">
                <div class="item_title">
                    <span class="name">李渊易</span><span class="phone-text">18551154098</span>
                    <a class="phone-icon"><i class="fa fa-phone" aria-hidden="true"></i></a>
                </div>
                <div class="item">
                    <img src="../../../static/images/t0-1.jpg">
                    <div class="text">
                        <div class="title">
                            <div class="large t1">碧桂园</div>
                            <div class="large t2">所在区域：广州</div>
                            <div class="large t2">楼盘类型：住宅区</div>
                        </div>
                        <div class="price">
                            <span class="">10500</span>元/平米
                            <!--<del>￥159</del>-->
                        </div>
                    </div>
                    <div class="next"><i class="fa fa-angle-right" aria-hidden="true"></i></div>
                </div>
                <div class="item_footer">
                    <div style="margin-top: 4px;"><label class="t1">预约时间：</label><span class="t2">2018-12-07 12:00:00</span></div>
                    <div><label class="t1">客户备注：</label><span class="t2">客户想尽早确定房子,早点搬新家！</span></div>
                </div>
            </li>
            <li onclick="toDetail()" tapmode="">
                <div class="item_title">
                    <span class="name">李渊易</span><span class="phone-text">18551154098</span>
                    <a class="phone-icon"><i class="fa fa-phone" aria-hidden="true"></i></a>
                </div>
                <div class="item">
                    <img src="../../../static/images/t0-1.jpg">
                    <div class="text">
                        <div class="title">
                            <div class="large t1">碧桂园</div>
                            <div class="large t2">所在区域：广州</div>
                            <div class="large t2">楼盘类型：住宅区</div>
                        </div>
                        <div class="price">
                            <span class="">10500</span>元/平米
                            <!--<del>￥159</del>-->
                        </div>
                    </div>
                    <div class="next"><i class="fa fa-angle-right" aria-hidden="true"></i></div>
                </div>
                <div class="item_footer">
                    <div style="margin-top: 4px;"><label class="t1">预约时间：</label><span class="t2">2018-12-07 12:00:00</span></div>
                    <div><label class="t1">客户备注：</label><span class="t2">客户想尽早确定房子,早点搬新家！</span></div>
                </div>
            </li>
            <li onclick="toDetail()" tapmode="">
                <div class="item_title">
                    <span class="name">李渊易</span><span class="phone-text">18551154098</span>
                    <a class="phone-icon"><i class="fa fa-phone" aria-hidden="true"></i></a>
                </div>
                <div class="item">
                    <img src="../../../static/images/t0-1.jpg">
                    <div class="text">
                        <div class="title">
                            <div class="large t1">碧桂园</div>
                            <div class="large t2">所在区域：广州</div>
                            <div class="large t2">楼盘类型：住宅区</div>
                        </div>
                        <div class="price">
                            <span class="">10500</span>元/平米
                            <!--<del>￥159</del>-->
                        </div>
                    </div>
                    <div class="next"><i class="fa fa-angle-right" aria-hidden="true"></i></div>
                </div>
                <div class="item_footer">
                    <div style="margin-top: 4px;"><label class="t1">预约时间：</label><span class="t2">2018-12-07 12:00:00</span></div>
                    <div><label class="t1">客户备注：</label><span class="t2">客户想尽早确定房子,早点搬新家！</span></div>
                </div>
            </li>
            <li onclick="toDetail()" tapmode="">
                <div class="item_title">
                    <span class="name">李渊易</span><span class="phone-text">18551154098</span>
                    <a class="phone-icon"><i class="fa fa-phone" aria-hidden="true"></i></a>
                </div>
                <div class="item">
                    <img src="../../../static/images/t0-1.jpg">
                    <div class="text">
                        <div class="title">
                            <div class="large t1">碧桂园</div>
                            <div class="large t2">所在区域：广州</div>
                            <div class="large t2">楼盘类型：住宅区</div>
                        </div>
                        <div class="price">
                            <span class="">10500</span>元/平米
                            <!--<del>￥159</del>-->
                        </div>
                    </div>
                    <div class="next"><i class="fa fa-angle-right" aria-hidden="true"></i></div>
                </div>
                <div class="item_footer">
                    <div style="margin-top: 4px;"><label class="t1">预约时间：</label><span class="t2">2018-12-07 12:00:00</span></div>
                    <div><label class="t1">客户备注：</label><span class="t2">客户想尽早确定房子,早点搬新家！</span></div>
                </div>
            </li>
            <li onclick="toDetail()" tapmode="">
                <div class="item_title">
                    <span class="name">李渊易</span><span class="phone-text">18551154098</span>
                    <a class="phone-icon"><i class="fa fa-phone" aria-hidden="true"></i></a>
                </div>
                <div class="item">
                    <img src="../../../static/images/t0-1.jpg">
                    <div class="text">
                        <div class="title">
                            <div class="large t1">碧桂园</div>
                            <div class="large t2">所在区域：广州</div>
                            <div class="large t2">楼盘类型：住宅区</div>
                        </div>
                        <div class="price">
                            <span class="">10500</span>元/平米
                            <!--<del>￥159</del>-->
                        </div>
                    </div>
                    <div class="next"><i class="fa fa-angle-right" aria-hidden="true"></i></div>
                </div>
                <div class="item_footer">
                    <div style="margin-top: 4px;"><label class="t1">预约时间：</label><span class="t2">2018-12-07 12:00:00</span></div>
                    <div><label class="t1">客户备注：</label><span class="t2">客户想尽早确定房子,早点搬新家！</span></div>
                </div>
            </li>
            <li onclick="toDetail()" tapmode="">
                <div class="item_title">
                    <span class="name">李渊易</span><span class="phone-text">18551154098</span>
                    <a class="phone-icon"><i class="fa fa-phone" aria-hidden="true"></i></a>
                </div>
                <div class="item">
                    <img src="../../../static/images/t0-1.jpg">
                    <div class="text">
                        <div class="title">
                            <div class="large t1">碧桂园</div>
                            <div class="large t2">所在区域：广州</div>
                            <div class="large t2">楼盘类型：住宅区</div>
                        </div>
                        <div class="price">
                            <span class="">10500</span>元/平米
                            <!--<del>￥159</del>-->
                        </div>
                    </div>
                    <div class="next"><i class="fa fa-angle-right" aria-hidden="true"></i></div>
                </div>
                <div class="item_footer">
                    <div style="margin-top: 4px;"><label class="t1">预约时间：</label><span class="t2">2018-12-07 12:00:00</span></div>
                    <div><label class="t1">客户备注：</label><span class="t2">客户想尽早确定房子,早点搬新家！</span></div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>

export default {
    data() {
        return {
            msg: 'vue模板页'
        }
    }

}
</script>
