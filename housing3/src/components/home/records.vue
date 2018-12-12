<!-- 基本资料 -->
<style scoped>
    .save-btn{
        color: #527cff;
        font-size:1em;
    }
    header{
        border-bottom:1px solid;
    }
    .content-group .yd-cell-item{
        border-bottom: 1px solid rgb(235, 235, 235);
        border-top: 1px solid rgb(235, 235, 235);
    }
    .content-group .yd-textarea{
        margin-top: 5px;
        margin-bottom: 5px;
        border-radius: 3px;
        border: 1px solid rgb(238, 238, 238);
    }
    .checklist-class .yd-checklist-item{
        border-bottom:1px solid rgb(238, 238, 238);
    }
    .warm-prompt{
        text-align: left;
    }
</style>

<template>
    <div>

        <yd-layout>
            <yd-navbar slot="navbar" :title="navbar">
                <router-link to="/" slot="left">
                    <yd-navbar-back-icon></yd-navbar-back-icon>
                </router-link>

                <router-link  v-if="isChange" to="#" slot="right" :class="saveBtn" @click.native="save">
                    <yd-icon name="checkoff" size=".3rem"></yd-icon>保存
                </router-link>
            </yd-navbar>

            <yd-cell-group :class="contentGroup">
                <yd-cell-item>
                    <span slot="left">姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名：</span>
                    <yd-input slot="right" max="15" required  v-model="formData.name" type="text" placeholder="请输入姓名"></yd-input>
                </yd-cell-item>
                <yd-cell-item arrow type="label">
                    <span slot="left">性&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别：</span>
                    <select slot="right" required v-model="formData.sex" >
                        <option value="">请选择性别</option>
                        <option value="1">男</option>
                        <option value="2">女</option>
                        <option value="3">未知</option>
                    </select>
                </yd-cell-item>
                <yd-cell-item>
                    <span slot="left">手机号码：</span>
                    <yd-input slot="right" max="15" required v-model="formData.mobile"  regex="mobile" type="number" placeholder="请输入手机号"></yd-input>
                </yd-cell-item>
            </yd-cell-group>
            <yd-cell-group :class="contentGroup">
                <yd-cell-item @click.native="showHouseSearch = true" arrow>
                    <img slot="icon" style="height: 25px;" src="../../../static/images/icon_add.png">
                    <span slot="left">意向楼盘</span>
                    <span slot="right">查看楼盘</span>
                </yd-cell-item>
                <yd-cell-group :class="intentionHouse">
                    <yd-cell-item v-for="house,key in houses" :key="key">
                        <span slot="left" style="overflow: hidden;width:260px;text-align:left;text-overflow:ellipsis;white-space:nowrap;">{{ house.name }}</span>
                        <span slot="right">
                            <yd-icon name="delete" size=".35rem" color="#fd0707" @click.native="deleteHouse(house.id)"></yd-icon>
                        </span>
                    </yd-cell-item>
                </yd-cell-group>
            </yd-cell-group>
            <yd-flexbox direction="vertical" class="warm-prompt ">
                <div style="height: 30px;"></div>
                <yd-flexbox-item>
                    <span style="font-size: 16px;line-height: 30px;">温馨提示：</span><br/>
                    <span style="color:rgb(165, 165, 165)">&nbsp;&nbsp;&nbsp;&nbsp;请务必提交真实的客户信息，若多次提交虚假信息，您的账号将会被暂停或终止！</span>
                </yd-flexbox-item>
            </yd-flexbox>




            <!-- 楼盘搜索 -->
            <yd-popup v-model="showHouseSearch" position="left" width="80%">
                <yd-search v-model="q.houseName" placeholder="请输入楼盘信息"></yd-search>
                <hr style="margin-bottom: 5px;border: 1px solid rgb(238, 238, 238);"/>
                <div style="text-align: right;margin-right: 10px;">
                    <yd-button type="primary"   @click.native="submitHandler"><yd-icon name="search" size=".3rem"></yd-icon>&nbsp;&nbsp;搜&nbsp;&nbsp;索</yd-button>
                </div>
                <hr style="margin-top: 5px;border: 1px solid rgb(238, 238, 238);"/>
                <yd-infinitescroll :callback="loadList" ref="infinitescrollDemo">
                    <yd-list theme="4" slot="list">
                        <yd-checklist v-model="checklist" :class="checklistClass">
                            <yd-checklist-item :val="item.id" v-for="item, key in list" :key="key">
                                <div style="height: 50px;line-height: 50px;overflow:hidden;text-align: left;">{{item.name}}</div>
                            </yd-checklist-item>
                        </yd-checklist>
                        <!--<yd-cell-group>
                            <yd-cell-item v-for="item, key in list" :key="key">
                                <span slot="left">左边内容一</span>
                                <span slot="right">右边内容一</span>
                            </yd-cell-item>
                        </yd-cell-group>-->
                    </yd-list>
                    <!-- 数据全部加载完毕显示 -->
                    <span slot="doneTip">啦啦啦，啦啦啦，没有数据啦~~</span>
                    <!-- 加载中提示，不指定，将显示默认加载中图标 -->
                    <img slot="loadingTip" src="http://static.ydcss.com/uploads/ydui/loading/loading10.svg"/>
                </yd-infinitescroll>
            </yd-popup>
        </yd-layout>
    </div>
</template>

<script>

    export default {//handler
        data() {
            return {
                q:{houseName:''},
                intentionHouse:'intention-house',
                checklistClass:'checklist-class',
                checklist:[],
                isChange:false,
                showHouseSearch:false,
                formData:{},
                contentGroup:'content-group',
                saveBtn: 'save-btn',
                navbar: '一键报备',
                houses:[],
                page: 1,
                pageSize: 10,
                list: []
            }
        },
        watch:{
            formData:{//深度监听，可监听到对象、数组的变化
                handler(newVal, oldVal){
                    if(oldVal){ //监听表单数据变化，变化保存按钮出现
                        this.isChange = true;
                    }
                },
                deep:true,
                immediate: true
            },
            checklist:{
                handler(newValue,oldValue){
                    if(oldValue){ //监听表单数据变化，变化保存按钮出现
                        this.isChange = true;
                    }
                    if(newValue.length > 3){
                        this.$dialog.toast({
                            mes: '最多只能报备3个楼盘！',
                            timeout: 1500,
                            icon: 'error',
                            callback: () => {
                                //this.$dialog.alert({mes: '给你一次重来的机会！'});
                            }
                        });
                        return;
                    }
                    var temp = [];
                    var list = this.list;
                    for(var x=0; x<newValue.length; x++){
                        for(var y=0; y<list.length; y++){
                            if(newValue[x] == list[y].id){
                                var t = {name:list[y].name,id:newValue[x]};
                                temp.push(t);
                                break;
                            }
                        }
                    }
                    this.houses = temp;
                },
                deep:true
            }
        },
        created:function () {
            this.loadList();
        },
        methods: {
            submitHandler(){//搜索框
                var value = this.q.houseName;
                this.$dialog.toast({mes: `搜索：${value}`});
            },
            save(){
                this.isChange = false;//隐藏保存按钮
                this.$dialog.toast({
                    mes: '保存成功',
                    timeout: 1500,
                    icon: 'success'
                });
            },
            deleteHouse(id){
                var houses = this.houses;
                var temp = [];
                var checkTemp = [];
                for(var x=0; x<houses.length; x++){
                    if(id != houses[x].id){
                        temp.push(houses[x]);
                        checkTemp.push(houses[x].id);
                    }
                }
                this.checklist = checkTemp;
                this.houses = temp;

            },
            loadList() {
                this.$http.get(this.$global.apiUrl + '/records/list', {
                    params: {
                        page: this.page,
                        pagesize: this.pageSize
                    }
                }).then(function (response) {
                    const _list = response.body.data;
                    this.list = [...this.list, ..._list];
                    if (_list.length < this.pageSize || this.page == 3) {
                        /* 所有数据加载完毕 */
                        this.$refs.infinitescrollDemo.$emit('ydui.infinitescroll.loadedDone');
                        return;
                    }
                    /* 单次请求数据完毕 */
                    this.$refs.infinitescrollDemo.$emit('ydui.infinitescroll.finishLoad');
                    this.page++;
                });
            }
        }
    }
</script>
