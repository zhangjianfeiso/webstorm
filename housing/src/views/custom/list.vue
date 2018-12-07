<style scoped>
    body {
        background-color: #E5E5E5;
        padding: 10px 5px;
    }
    .content{
        width:100%;
    }
    .content li {
        border: 1px solid black;
        background-color: #FFFFFF;
        margin: 10px 5px;
        padding: 10px;
        border-radius: 5px;
        width: 100%;
    }

    .tab-content li {
        margin: 10px 5px;
        padding: 10px;
        font-size: 14px;
        border-bottom: 1px solid #DBDBDB;
        white-space: nowrap;
    }
    .item{
        white-space: nowrap;
    }
    .item, .text {
        /*display: -webkit-box;*/
    }

    img {
        width: 30%;
        height: 80px;
        border-radius: 5px;
        float: left;
    }

    .text {
        -webkit-box-flex: 1;
        -webkit-box-orient: vertical;
        margin: 0 5px;
        width:70%;
    }

    .title {
        line-height: 20px;
        font-weight: 400!important;
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
        font-size: 25px;
    }

    del {
        color: #969696;
        margin-left: 20px;
    }

    .small {
        width:100%;
        text-align: left;
        font-size: 13px;
        white-space:nowrap;
        text-overflow:ellipsis;
        overflow:hidden;
    }
</style>

<template>
    <div>
        <ul class="content">
            <li onclick="toDetail()" tapmode="">
                <div class="item">
                    <img src="../../../static/images/t0-1.jpg">
                    <div class="text">
                        <div class="title">
                            <div class="large">< 北京汽车5日游 ></div>
                            <span class="small">含皇城十大景点，赠奥运表演，无购物</span>
                        </div>
                        <div class="price">
                            <span class="">￥153</span>起
                            <del>￥159</del>
                        </div>
                    </div>

                </div>
            </li>
            <li onclick="toDetail()" tapmode="">
                <div class="item">
                    <img src="../../../static/images/t0-2.jpg">
                    <div class="text">
                        <div class="title">
                            <div class="large">< 北京5日游 ></div>
                            <span class="small">北京参团，含皇城十大景点，赠奥运表演</span>
                        </div>
                        <div class="price">
                            <span class="">￥153</span>起
                            <del>￥159</del>
                        </div>
                    </div>
                </div>
            </li>
            <li onclick="toDetail()" tapmode="">
                <div class="item">
                    <img src="../../../static/images/t0-3.jpg">
                    <div class="text">
                        <div class="title">
                            <div class="large">< 北京5日游 ></div>
                            <span class="small">16大赠送，吃全聚德，无购物无自费</span>
                        </div>
                        <div class="price">
                            <span class="">￥153</span>起
                            <del>￥159</del>
                        </div>
                    </div>
                </div>
            </li>
            <li onclick="toDetail()" tapmode="">
                <div class="item">
                    <img src="../../../static/images/t0-4.jpg">
                    <div class="text">
                        <div class="title">
                            <div class="large">< 北京故宫-天坛圆明园1日游 ></div>
                            <span class="small">含天坛通票，全网最低价</span>
                        </div>
                        <div class="price">
                            <span class="">￥153</span>起
                            <del>￥159</del>
                        </div>
                    </div>
                </div>
            </li>
            <li onclick="toDetail()" tapmode="">
                <div class="item">
                    <img src="../../../static/images/t0-5.jpg">
                    <div class="text">
                        <div class="title">
                            <div class="large">< 香港5日自助游 ></div>
                            <span class="small">订机票，超值出游</span>
                        </div>
                        <div class="price">
                            <span class="">￥153</span>起
                            <del>￥159</del>
                        </div>
                    </div>
                </div>
            </li>
            <li onclick="toDetail()" tapmode="">
                <div class="item">
                    <img src="../../../static/images/t0-6.jpg">
                    <div class="text">
                        <div class="title">
                            <div class="large">< 香港4日自助游 ></div>
                            <span class="small">精选酒店 超值服务</span>
                        </div>
                        <div class="price">
                            <span class="">￥153</span>起
                            <del>￥159</del>
                        </div>
                    </div>
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
