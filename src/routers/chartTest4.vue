<template>
  <div>
    <el-row :gutter="20">
    <el-col :span="12" >
      <el-card class="box-card">
        <div slot="header">
          <span>配置页面</span>
          <el-button type="primary" @click="changeCode" class="button">保存111</el-button>
        </div>
        <el-input type="textarea" v-model="code"  class="optionText" style=""></el-input>
      </el-card>

    </el-col>
    <el-col :span="12" class="echarts-box">
      <chartOption v-bind:option="option" ></chartOption>
    </el-col>
</el-row>

   
  </div>
</template>
<style>
 .echarts-box{
  height: 500px;
 }
 .optionText{
   height: 450px;
 }
 
  .optionText textarea{
   height: 100%;
 }

 .button {
    float: right;
  }


</style>

<script>
 import {chartOption} from "../components/echarts";
export default {
  components:{
    chartOption,
  },
  data(){
    return {
      option1: {
        type: "single",
        seriesType: "bar",
        legend: true,
        maxXAxis: 5,
        dataUrl: "/api/chartData?id=001",
      },
      option: '',
      code: ''
    }
    
  },
  methods:{
    changeCode(){
      this.option= this.code
    }
  }
}
</script>