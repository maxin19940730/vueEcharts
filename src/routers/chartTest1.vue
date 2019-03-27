<template>
  <div>
    <button @click="doGet">发送请求</button> <br/>
    <div class="echarts-box">
      <chartOption v-bind:option="option" ></chartOption>
    </div>
    <div class="echarts-box">
      <chart v-bind:option="option1" ></chart>
    </div>
  </div>
</template>
<style>
 .echarts-box{
   width: 500px;
  height: 500px;
 }

</style>

<script>
 import {chartOption, chart} from "../components/echarts";
export default {
  components:{
    chart,
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
      option: '(function(option){return option})'
    }
    
  },
  methods:{
    doGet(){
      var url = '/api/wymusic?id=001';
      this.$http.get(url).then((response)=>{
          console.log(response);
      },(error)=>{
         console.log('请求失败');
         console.log(error);
      });
    }
  }
}
</script>