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
    }
    .content-group .yd-textarea{
        margin-top: 5px;
        margin-bottom: 5px;
        border-radius: 3px;
        border: 1px solid rgb(238, 238, 238);
    }
</style>

<template>
    <div>

        <yd-layout>
            <yd-navbar slot="navbar" :title="navbar">
                <router-link to="/user" slot="left">
                    <yd-navbar-back-icon></yd-navbar-back-icon>
                </router-link>

                <router-link  v-if="isChange" to="#" slot="right" :class="saveBtn" @click.native="save">
                    <yd-icon name="checkoff" size=".3rem"></yd-icon>保存
                </router-link>
            </yd-navbar>

            <yd-cell-group :class="contentGroup">
                <yd-cell-item>
                    <span slot="left">头&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;像：</span>
                    <img slot="right" style="width:50px;height: 50px;border-radius: 25px;margin: 5px 0px;" src="http://img1.shikee.com/try/2016/06/23/14381920926024616259.jpg"/>
                </yd-cell-item>
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
                <yd-cell-item arrow>
                    <span slot="left">所在地区：</span>
                    <yd-input slot="right" required type="text" v-model="formData.model2"   @click.native="show2 = true" readonly placeholder="请选择收货地址"></yd-input>
                </yd-cell-item>
                <yd-cell-item>
                    <span slot="left">详细地址：</span>
                    <yd-textarea slot="right" required v-model="formData.detailAddr" placeholder="请输入您的详细地址" maxlength="100"></yd-textarea>
                </yd-cell-item>
            </yd-cell-group>

            <yd-cityselect
                v-model="show2"
                ref="cityselectDemo"
                :callback="result2"
                :items="district"
                provance="新疆"
                city="乌鲁木齐市"
                area="天山区"></yd-cityselect>
        </yd-layout>
    </div>
</template>

<script>
    /* 前提是已经安装了 ydui-district */
    import District from 'ydui-district/dist/jd_province_city_area_id';
    export default {
        data() {
            return {
                isChange:false,
                formData:{model2: '新疆 乌鲁木齐市 天山区'},
                contentGroup:'content-group',
                show2: false,
                district: District,
                saveBtn: 'save-btn',
                navbar: '基本资料'
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
            }
        },
        methods: {
            result2(ret) {
                this.formData.model2 = ret.itemName1 + ' ' + ret.itemName2 + ' ' + ret.itemName3;
            },
            save(){
                this.isChange = false;//隐藏保存按钮
                this.$dialog.toast({
                    mes: '保存成功',
                    timeout: 1500,
                    icon: 'success'
                });
            }
        }
    }
</script>
